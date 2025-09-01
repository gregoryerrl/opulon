# Cloudflare Pages Deployment Guide

## Prerequisites
- GitHub repository connected to Cloudflare Pages
- Cloudflare account
- Gemini API key (optional - app works in demo mode without it)

## Deployment Steps

### 1. Connect GitHub Repository
1. Go to [Cloudflare Pages](https://pages.cloudflare.com/)
2. Click "Create a project" → "Connect to Git"
3. Select your GitHub repository containing the Opulon project

### 2. Configure Build Settings
Set these build configuration options in Cloudflare Pages:

**Framework preset**: `Next.js`
**Build command**: `npm run build`
**Build output directory**: `.next`
**Root directory**: `/` (leave empty if repo root)
**Node.js version**: `20.18.0`

⚠️ **Important**: Make sure to set Node.js to version `20.18.0` in Cloudflare Pages settings, as Next.js 15.5.2 requires Node.js ^18.18.0 || ^19.8.0 || >= 20.0.0

### 3. Environment Variables
Add these environment variables in Cloudflare Pages dashboard:

**Required for AI functionality:**
- `GEMINI_API_KEY` - Your Google Gemini API key
- `NODE_ENV` - Set to `production`

**Optional:**
- `NEXT_PUBLIC_SITE_URL` - Your domain (e.g., `https://opulon.pages.dev`)

### 4. Compatibility Settings
Cloudflare Pages will automatically:
- Enable Node.js compatibility for API routes
- Apply the `_headers` and `_redirects` configuration
- Optimize static assets and images

### 5. Build Process
The build will:
1. Install dependencies with `npm install`
2. Build the Next.js application with `npm run build`
3. Deploy static files and serverless functions

## Important Configuration Details

### Next.js Compatibility
- **Images**: Set to unoptimized for Cloudflare compatibility
- **API Routes**: Configured with `runtime = 'nodejs'`
- **Webpack**: Configured with Node.js fallbacks for browser compatibility

### Security Headers
Automatic security headers are configured via `_headers`:
- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin

### Caching
- Static assets: 1 year cache
- Images: 24 hour cache
- API routes: No cache

## Post-Deployment Setup

### 1. Custom Domain (Optional)
1. In Cloudflare Pages, go to "Custom domains"
2. Add your domain name
3. Update DNS settings as prompted

### 2. Analytics (Optional)
1. Enable Cloudflare Web Analytics
2. Add the analytics script to your site

### 3. Performance Monitoring
Monitor your site using:
- Cloudflare Analytics
- Next.js Speed Insights
- Core Web Vitals

## Troubleshooting

### Build Errors
- **Node.js version**: Ensure using Node.js 20.18.0 or higher
- **Dependencies**: Check package.json for compatibility
- **Environment variables**: Verify all required variables are set

### API Route Issues
- **CORS**: Headers are configured in `_headers` file
- **Runtime**: API routes use `runtime = 'nodejs'`
- **Fallbacks**: Webpack fallbacks prevent Node.js module issues

### Performance Issues
- **Images**: Using unoptimized images for Cloudflare compatibility
- **Bundle size**: Monitor bundle size and code splitting
- **Caching**: Leverage Cloudflare's global CDN

## Environment Variables Reference

```bash
# Production environment variables
GEMINI_API_KEY=your_gemini_api_key_here
NODE_ENV=production
NEXT_PUBLIC_SITE_URL=https://your-domain.pages.dev
```

## Deployment Checklist

- [ ] Repository connected to Cloudflare Pages
- [ ] Build settings configured correctly
- [ ] Environment variables added
- [ ] Node.js version set to 20.18.0
- [ ] GEMINI_API_KEY added (for full AI functionality)
- [ ] Custom domain configured (if applicable)
- [ ] SSL/TLS certificate active
- [ ] Analytics enabled (optional)

## Support

For deployment issues:
1. Check Cloudflare Pages build logs
2. Verify Next.js compatibility settings
3. Test locally with `npm run build`
4. Review the [Cloudflare Pages documentation](https://developers.cloudflare.com/pages/)