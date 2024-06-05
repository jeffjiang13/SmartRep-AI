'use server'

import { client } from '@/lib/prisma'
import { currentUser, redirectToSignIn } from '@clerk/nextjs'
import { onGetAllAccountDomains } from '../settings'
import { NextResponse } from 'next/server'

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
    console.error('Registration error:', error)
    return { status: 400, message: 'Error completing registration' }
  }
}

export const onLoginUser = async () => {
  const user = await currentUser()
  if (!user) {
    // Construct the absolute URL for returnBackUrl
    const returnBackUrl = `${process.env.NEXT_PUBLIC_URL}/sign-in`
    redirectToSignIn({ returnBackUrl })
    return NextResponse.json({ status: 401, message: 'User not authenticated' })
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
      return NextResponse.json({
        status: 200,
        user: authenticated,
        domain: domains?.domains,
      })
    } else {
      return NextResponse.json({ status: 404, message: 'User not found' })
    }
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json({ status: 400, message: 'Error logging in user' })
  }
}
