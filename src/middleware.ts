import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: ['/', '/auth(.*)', '/portal(.*)', '/images(.*)'],
  ignoredRoutes: ['/chatbot'],
  afterAuth: async (authResult, req, evt) => {
    console.log('Middleware Auth Result:', authResult);
  },
});

export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)', // Match all routes except static files and _next
    '/',                      // Include the root route
    '/(api|trpc)(.*)',        // Include API and TRPC routes
  ],
};
