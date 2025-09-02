import { NextResponse } from 'next/server';

export const runtime = 'edge';

export async function GET() {
  const apiKey = process.env.GEMINI_API_KEY;
  
  if (!apiKey || apiKey === 'YOUR_GEMINI_API_KEY_HERE') {
    return NextResponse.json({
      error: 'No API key configured',
      hasKey: !!apiKey,
      isPlaceholder: apiKey === 'YOUR_GEMINI_API_KEY_HERE'
    });
  }

  try {
    console.log('Testing Gemini API with key:', apiKey.substring(0, 8) + '...');

    const response = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-goog-api-key': apiKey
      },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: 'Say hello and confirm you are working. Keep it under 20 words.'
              }
            ]
          }
        ]
      })
    });

    console.log('Gemini response status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error:', errorText);
      return NextResponse.json({
        error: 'Gemini API error',
        status: response.status,
        statusText: response.statusText,
        details: errorText
      });
    }

    const data = await response.json();
    const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || 'No response text';

    return NextResponse.json({
      success: true,
      geminiResponse: responseText,
      fullResponse: data,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Test error:', error);
    return NextResponse.json({
      error: 'Request failed',
      message: error instanceof Error ? error.message : 'Unknown error'
    });
  }
}