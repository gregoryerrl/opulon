# AI Assistant Setup Guide

## Setting up Google Gemini API

The Opulon AI Assistant is powered by Google's Gemini AI using the REST API directly. Follow these steps to get it running:

### 1. Get Your Free Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Get API Key"
4. Create a new API key or use an existing one
5. Copy the API key

### 2. Configure Your Environment

1. Create a `.env.local` file in the root of your project:
```bash
cp .env.local.example .env.local
```

2. Open `.env.local` and add your API key:
```
GEMINI_API_KEY=your_actual_api_key_here
```

3. Restart your development server:
```bash
npm run dev
```

### 3. Test the AI Assistant

1. Look for the chat icon in the bottom-right corner of the website
2. Click it to open the AI chat interface
3. Try asking questions like:
   - "What luxury vehicles do you have available?"
   - "Tell me about the Racing Heritage collection"
   - "How can I book a test drive?"
   - "What are your business hours?"
   - "Tell me about the Ferrari SF90 Stradale"

### Features

The AI Assistant has been pre-trained with:
- Complete Opulon company information
- Vehicle inventory with specifications
- Service offerings and booking process
- Business hours and contact details
- Collection descriptions

### Troubleshooting

If you see an error message:
1. Verify your API key is correctly added to `.env.local`
2. Ensure the file is named `.env.local` (not `.env` or `.env.local.example`)
3. Check that your API key is valid and has not exceeded usage limits
4. Restart the development server after adding the key

### API Details

- **Model Used**: Gemini 2.0 Flash (gemini-2.0-flash-exp)
- **Endpoint**: REST API at `https://generativelanguage.googleapis.com/v1beta/`
- **Free Tier**: 60 requests per minute, suitable for development
- **Response Limit**: Set to 500 tokens for concise responses

### Testing the API

You can test your API key directly with curl:
```bash
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent" \
  -H 'Content-Type: application/json' \
  -H 'x-goog-api-key: YOUR_API_KEY_HERE' \
  -X POST \
  -d '{"contents": [{"parts": [{"text": "Hello"}]}]}'
```

### Security Note

Never commit your `.env.local` file to version control. It's already added to `.gitignore` for your safety.