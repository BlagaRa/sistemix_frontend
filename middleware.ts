import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const CUSTOM_DOMAIN = 'https://sistemix.net';

/**
 * Redirect pages.dev URLs to custom domain for SEO canonical consistency.
 * _redirects file doesn't work with Next.js on Cloudflare Pages (Functions handle requests).
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';
  const url = request.nextUrl;

  // Redirect sistemix-frontend.pages.dev and *.sistemix-frontend.pages.dev to sistemix.net
  if (
    host === 'sistemix-frontend.pages.dev' ||
    host.endsWith('.sistemix-frontend.pages.dev')
  ) {
    const redirectUrl = new URL(url.pathname + url.search, CUSTOM_DOMAIN);
    return NextResponse.redirect(redirectUrl, 301);
  }

  return NextResponse.next();
}

export const config = {
  // Run on all paths - redirect any pages.dev request to sistemix.net
  matcher: ['/((?!_next/static|_next/image|favicon\\.ico).*)'],
};
