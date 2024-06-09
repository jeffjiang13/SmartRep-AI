import { authMiddleware } from '@clerk/nextjs'

export default authMiddleware({
  publicRoutes: ['/', '/auth(.*)', '/portal(.*)', '/images(.*)', '/logo.png', "/blog1", "/blog2", "/blog3", "/blog4", "/blog5", "/blog6"],
  ignoredRoutes: ['/chatbot'],
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
