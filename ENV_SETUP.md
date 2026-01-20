# Environment Variables Setup - Frontend

## Local Development

Create a `.env.local` file in the `frontend` directory (copy from `.env.example`):

```env
# Site URL for SEO and metadata
NEXT_PUBLIC_SITE_URL=http://localhost:3001

# Backend API URL
NEXT_PUBLIC_API_URL=http://localhost:3000

# Google Search Console Verification (optional)
# GOOGLE_VERIFICATION=your-google-verification-code
```

## Production Deployment (Cloudflare Pages)

### Setting Environment Variables in Cloudflare:

1. Go to **Cloudflare Dashboard** → **Pages** → Your Project
2. Navigate to **Settings** → **Environment Variables**
3. Add variables for **Production** environment:

```
NEXT_PUBLIC_SITE_URL = https://sistemix.com
NEXT_PUBLIC_API_URL = https://your-backend-url.com
GOOGLE_VERIFICATION = your-google-verification-code (optional)
```

### Important:
- Replace `https://your-backend-url.com` with your actual backend URL
- No need to create `.env.local` file in production - Cloudflare handles it
- Variables are set per environment (Production, Preview, etc.)
- Changes require a new deployment

## Required Variables

- `NEXT_PUBLIC_SITE_URL` - Your production site URL (for SEO and metadata)
- `NEXT_PUBLIC_API_URL` - Your backend API URL (REQUIRED - no default in production!)

## Optional Variables

- `GOOGLE_VERIFICATION` - Google Search Console verification code

## Notes

- `NEXT_PUBLIC_*` variables are exposed to the browser
- Never put sensitive data in `NEXT_PUBLIC_*` variables
- For local development, restart Next.js dev server after changing `.env.local`
- For production, environment variables are set in Cloudflare Pages settings
- The code uses `process.env.NEXT_PUBLIC_API_URL` - if not set, it falls back to `http://localhost:3000` (development only)
