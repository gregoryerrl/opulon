import { NextResponse } from 'next/server';
import { OPULON_CONTEXT, vehicleInventory } from '@/lib/ai-context';

// Add runtime configuration for Cloudflare Pages
export const runtime = 'nodejs';

// Mock responses for demo mode when API key is not configured
const mockResponses: { [key: string]: string } = {
  'default': 'Welcome to Opulon! I can help you explore our luxury vehicle collection, schedule test drives, and answer any questions about our services. What would you like to know?',
  'vehicles': 'We have an exceptional collection of luxury vehicles including the Ferrari SF90 Stradale, Rolls-Royce Ghost, McLaren 720S Spider, and more. Each vehicle represents the pinnacle of automotive excellence. Would you like details about any specific model?',
  'test drive': 'You can book a test drive Monday through Saturday, 9 AM to 7 PM. Our sessions typically last 45-60 minutes and include professional instruction if desired. Simply select your preferred vehicle and time slot. Would you like to schedule one now?',
  'ferrari': 'The Ferrari SF90 Stradale is our flagship hybrid supercar with 986 HP, achieving 0-60 mph in just 2.5 seconds. It\'s available for test drives and represents the perfect blend of racing heritage and road-going luxury. Price range starts at $500,000+.',
  'collections': 'We offer three curated collections: Racing Heritage (12 vehicles), Luxury Executive (8 vehicles), and our exclusive Night Collection (15 vehicles). Each collection is carefully assembled to represent different aspects of automotive excellence.',
  'contact': 'You can reach us at contact@opulon.com or call +1 (555) 123-4567. We\'re open Monday through Saturday, 9 AM to 7 PM. Visit our showroom for a personalized consultation.',
};

function getMockResponse(message: string): string {
  const lowerMessage = message.toLowerCase();
  
  if (lowerMessage.includes('vehicle') || lowerMessage.includes('car')) {
    return mockResponses['vehicles'];
  }
  if (lowerMessage.includes('test') || lowerMessage.includes('drive') || lowerMessage.includes('book')) {
    return mockResponses['test drive'];
  }
  if (lowerMessage.includes('ferrari')) {
    return mockResponses['ferrari'];
  }
  if (lowerMessage.includes('collection')) {
    return mockResponses['collections'];
  }
  if (lowerMessage.includes('contact') || lowerMessage.includes('hours') || lowerMessage.includes('call')) {
    return mockResponses['contact'];
  }
  
  return mockResponses['default'];
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { message, conversationHistory = [] } = body;

    // Check if API key is configured
    const apiKey = process.env.GEMINI_API_KEY;
    const isValidApiKey = apiKey && apiKey !== 'YOUR_GEMINI_API_KEY_HERE' && apiKey.length > 10;

    if (!isValidApiKey) {
      // Use mock responses in demo mode
      console.log('Running in demo mode - no valid API key configured');
      
      const mockMessage = getMockResponse(message);
      
      return NextResponse.json({ 
        message: mockMessage,
        timestamp: new Date().toISOString(),
        isDemo: true
      });
    }

    // Build the context-aware prompt
    const contextPrompt = `${OPULON_CONTEXT}

AVAILABLE VEHICLES IN INVENTORY:
${JSON.stringify(vehicleInventory, null, 2)}

CONVERSATION HISTORY:
${conversationHistory.map((msg: any) => `${msg.role}: ${msg.content}`).join('\n')}

CURRENT USER MESSAGE: ${message}

Please respond as Opulon AI assistant. Be helpful, professional, and knowledgeable about our luxury vehicles and services. If asked about specific vehicles, refer to our inventory. Always maintain a premium, sophisticated tone while being approachable. Keep responses concise but informative.`;

    // Call Gemini API directly using REST
    const geminiResponse = await fetch('https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent', {
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
                text: contextPrompt
              }
            ]
          }
        ],
        generationConfig: {
          temperature: 0.7,
          maxOutputTokens: 500,
        }
      })
    });

    if (!geminiResponse.ok) {
      const errorData = await geminiResponse.text();
      console.error('Gemini API error:', errorData);
      
      // If API key is invalid, use mock response
      if (geminiResponse.status === 400 || geminiResponse.status === 401 || geminiResponse.status === 403) {
        return NextResponse.json({ 
          message: getMockResponse(message),
          timestamp: new Date().toISOString(),
          isDemo: true,
          error: 'Invalid API key - using demo mode'
        });
      }
      
      throw new Error(`Gemini API returned ${geminiResponse.status}`);
    }

    const data = await geminiResponse.json();
    
    // Extract the text from Gemini response
    const responseText = data.candidates?.[0]?.content?.parts?.[0]?.text || 
                        'I apologize, but I couldn\'t generate a response. Please try again.';

    return NextResponse.json({ 
      message: responseText,
      timestamp: new Date().toISOString(),
      isDemo: false
    });

  } catch (error) {
    console.error('Error in chat API:', error);
    
    // Fallback to mock response on any error
    const fallbackBody = await request.json().catch(() => ({ message: 'hello' }));
    const mockMessage = getMockResponse(fallbackBody?.message || 'hello');
    
    return NextResponse.json({ 
      message: mockMessage,
      timestamp: new Date().toISOString(),
      isDemo: true,
      error: error instanceof Error ? error.message : 'An error occurred'
    });
  }
}