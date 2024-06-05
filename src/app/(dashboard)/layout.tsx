import { onLoginUser } from '@/actions/auth'
import SideBar from '@/components/sidebar'
import { ChatProvider } from '@/context/user-chat-context'
import React from 'react'
import { NextResponse } from 'next/server'

type Props = {
  children: React.ReactNode
}

const OwnerLayout = async ({ children }: Props) => {
  const response = await onLoginUser()

  // Check if the response has a user and domain property
  if (response && response.status === 200 && 'user' in response && 'domain' in response) {
    const authenticated = response as {
      status: number
      user: {
        id: string
        fullname: string
        type: string
      }
      domain: {
        customer: {
          chatRoom: {
            id: string
            live: boolean
          }[]
        }[]
        id: string
        name: string
        icon: string
      }[] | undefined
    }

    return (
      <ChatProvider>
        <div className="flex h-screen w-full">
          <SideBar domains={authenticated.domain} />
          <div className="w-full h-screen flex flex-col pl-[4rem] md:pl-4">
            {children}
          </div>
        </div>
      </ChatProvider>
    )
  }

  // Return a fallback UI or redirect to a login page if the user is not authenticated
  return NextResponse.redirect('/login') // Adjust the path as needed
}

export default OwnerLayout
