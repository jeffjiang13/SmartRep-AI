import { authMiddleware } from '@clerk/nextjs';
import { NextResponse } from 'next/server';

export default authMiddleware({
  publicRoutes: [
    '/',
    '/auth(.*)',
    '/portal(.*)',
    '/images(.*)',
    '/logo.png',
    '/blog1',
    '/blog2',
    '/blog3',
    '/blog4',
    '/blog5',
    '/blog6'
  ],
  ignoredRoutes: ['/chatbot'],
  afterAuth: (auth, req, evt) => {
    const { userId } = auth;
    if (!userId && req.nextUrl.pathname === '/dashboard') {
      const signInUrl = new URL('/auth/sign-in', req.nextUrl.origin);
      signInUrl.searchParams.set('redirect_url', req.nextUrl.pathname);
      return NextResponse.redirect(signInUrl);
    }
  },
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
