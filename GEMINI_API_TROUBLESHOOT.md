# 🔧 Gemini API Key Troubleshooting

## Issue
AI assistant is showing "Demo Mode" even though you've added the GEMINI_API_KEY to Cloudflare Pages environment variables.

## Diagnostic Steps

### Step 1: Check Environment Variable Setup
1. Go to **Cloudflare Pages** → Your Project → **Settings** → **Environment Variables**
2. Verify `GEMINI_API_KEY` is set for **Production**
3. Make sure there are no extra spaces or quotes around the key
4. The key should start with `AIzaSy` and be ~39 characters long

### Step 2: Test Environment Variable Access
Visit your deployed site at: `https://your-site.pages.dev/api/debug`

This will show you:
- ✅ Whether the API key is accessible in the runtime
- ✅ The key length and format
- ✅ If there are any environment variable issues

### Step 3: Common Issues & Fixes

#### Issue A: Environment Variable Not Set for Production
- **Problem**: Key only set for Preview, not Production
- **Fix**: Add key to both Production AND Preview environments

#### Issue B: Key Format Issues  
- **Problem**: Key has extra characters or is malformed
- **Expected Format**: `AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX` (39 chars)
- **Fix**: Get a fresh key from [Google AI Studio](https://makersuite.google.com/app/apikey)

#### Issue C: Deployment Not Updated
- **Problem**: Environment variables changed but site not redeployed
- **Fix**: Trigger a new deployment after adding environment variables

#### Issue D: Edge Runtime Limitations
- **Problem**: Environment variables not accessible in edge runtime
- **Status**: This should be fixed with the latest code updates

### Step 4: Force Redeploy
1. Go to **Deployments** tab in Cloudflare Pages
2. Click **"Retry deployment"** on the latest build
3. Or push a small change to GitHub to trigger auto-deployment

### Step 5: Verify API Key Works
Test your API key directly:
```bash
curl "https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent" \
  -H 'Content-Type: application/json' \
  -H 'x-goog-api-key: YOUR_API_KEY_HERE' \
  -X POST \
  -d '{"contents": [{"parts": [{"text": "Hello"}]}]}'
```

## Expected Result
After fixing the environment variable:
- ✅ AI assistant will show "Powered by Google Gemini AI" (not demo mode)
- ✅ Responses will be contextual and intelligent about Opulon
- ✅ Debug endpoint will show `hasGeminiKey: true`

## Need More Help?
1. Check the `/api/debug` endpoint output
2. Look at Cloudflare Pages function logs
3. Verify your API key works with the curl test above