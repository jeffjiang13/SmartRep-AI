import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

export const Responding = () => {
  return (
    <div className="self-start flex items-end gap-3">
      <Avatar className="w-5 h-5">
        <AvatarImage
          src="https://ucarecdn.com/372078a2-48f5-4700-ba0b-d06003d02a53/-/preview/512x512/"
          alt="@shadcn"
        />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="chat-bubble">
        <div className="typing">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </div>
  )
}
