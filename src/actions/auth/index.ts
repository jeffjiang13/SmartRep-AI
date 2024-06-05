'use server'

import { client } from '@/lib/prisma'
import { currentUser, redirectToSignIn } from '@clerk/nextjs'
import { onGetAllAccountDomains } from '../settings'

export const onCompleteUserRegistration = async (
  fullname: string,
  clerkId: string,
  type: string
) => {
  try {
    const registered = await client.user.create({
      data: {
        fullname,
        clerkId,
        type,
        subscription: {
          create: {},
        },
      },
      select: {
        fullname: true,
        id: true,
        type: true,
      },
    })

    if (registered) {
      return { status: 200, user: registered }
    }
  } catch (error) {
    return { status: 400 }
  }
}

export const onLoginUser = async () => {
  const user = await currentUser()
  if (!user) {
    redirectToSignIn({ returnBackUrl: `${process.env.NEXT_PUBLIC_URL}dashboard` }) // Provide an absolute URL here
    return { status: 401, message: 'User not authenticated' }
  }
  try {
    const authenticated = await client.user.findUnique({
      where: {
        clerkId: user.id,
      },
      select: {
        fullname: true,
        id: true,
        type: true,
      },
    })
    if (authenticated) {
      const domains = await onGetAllAccountDomains()
      return { status: 200, user: authenticated, domain: domains?.domains }
    }
    return { status: 401, message: 'User not found' }
  } catch (error) {
    return { status: 400, message: 'An error occurred' }
  }
}
