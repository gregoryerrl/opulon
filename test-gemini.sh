#!/bin/bash

# Test script for Gemini API
# Usage: ./test-gemini.sh YOUR_API_KEY

if [ -z "$1" ]; then
    echo "Usage: $0 YOUR_API_KEY"
    echo "Get your API key from: https://makersuite.google.com/app/apikey"
    exit 1
fi

API_KEY="$1"

echo "Testing Gemini API with your key..."
echo "Model: gemini-2.0-flash-exp"
echo

curl -s "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent" \
  -H 'Content-Type: application/json' \
  -H "x-goog-api-key: $API_KEY" \
  -X POST \
  -d '{
    "contents": [
      {
        "parts": [
          {
            "text": "Say hello and confirm you are Gemini AI in 10 words or less"
          }
        ]
      }
    ]
  }' | python3 -m json.tool

echo
echo "If you see a response above, your API key is working!"
echo "Add it to .env.local: GEMINI_API_KEY=$API_KEY"