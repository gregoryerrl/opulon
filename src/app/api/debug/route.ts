import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  const apiKey = process.env.GEMINI_API_KEY;
  
  return NextResponse.json({
    timestamp: new Date().toISOString(),
    environment: {
      hasGeminiKey: !!apiKey,
      keyLength: apiKey?.length || 0,
      keyPrefix: apiKey?.substring(0, 8) || 'none',
      isPlaceholder: apiKey === 'YOUR_GEMINI_API_KEY_HERE',
      startsWithAIza: apiKey?.startsWith('AIza') || false,
      allEnvKeys: Object.keys(process.env).filter(key => key.includes('GEMINI')),
      runtime: 'edge'
    }
  });
}