import { onLoginUser } from '@/actions/auth'
import SideBar from '@/components/sidebar'
import { ChatProvider } from '@/context/user-chat-context'
import React from 'react'

type Props = {
  children: React.ReactNode
}

const OwnerLayout = async ({ children }: Props) => {
  const response = await onLoginUser()

  // Check if the response has a user and domain property
  if (response.status === 200 && 'user' in response && 'domain' in response) {
    const authenticated = response as {
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

  // Return null or an appropriate fallback if the user is not authenticated
  return null
}

export default OwnerLayout
