# Environment Variables Setup - Frontend

Create a `.env.local` file in the `frontend` directory with the following variables:

## Required Variables

```env
# Site URL for SEO and metadata (REQUIRED for production)
NEXT_PUBLIC_SITE_URL=https://sistemix.com

# Backend API URL (REQUIRED)
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Optional Variables

```env
# Google Search Console Verification (optional)
GOOGLE_VERIFICATION=your-google-verification-code
```

## Production Setup

For production deployment:
```env
NEXT_PUBLIC_SITE_URL=https://sistemix.com
NEXT_PUBLIC_API_URL=https://api.sistemix.com
GOOGLE_VERIFICATION=your-google-verification-code
```

## Development Setup

For local development:
```env
NEXT_PUBLIC_SITE_URL=http://localhost:3001
NEXT_PUBLIC_API_URL=http://localhost:3000
```

## Notes

- `NEXT_PUBLIC_*` variables are exposed to the browser
- Never put sensitive data in `NEXT_PUBLIC_*` variables
- Restart the Next.js dev server after changing `.env.local`
