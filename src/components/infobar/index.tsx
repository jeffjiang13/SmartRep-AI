import React from 'react'
import BreadCrumb from './bread-crumb'
import { Card } from '../ui/card'
import { Headphones, Star, Trash } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import { UserButton } from '@clerk/nextjs'
type Props = {}

const InfoBar = (props: Props) => {
  return (
    <div className="flex flex-col sm:flex-row w-full justify-between items-center p-2 mb-8 gap-4">
      <div className="hidden sm:block">
        <BreadCrumb />
      </div>
        <div className="flex gap-2 items-center ml-[7rem] md:ml-0">
        <div>
          <Card className="rounded-xl flex gap-3 py-2 px-3 text-ghost">
            <Trash />
            <Star />
          </Card>
        </div>
        <Avatar className="">
          <AvatarFallback className="bg-orange text-white">
            <Headphones />
          </AvatarFallback>
        </Avatar>
        <span className='border-[4.5px] mt-[2px] border-orange rounded-full'>
        <UserButton />
        </span>
      </div>
      <div className="block sm:hidden">
        <BreadCrumb />
      </div>
    </div>
  )
}

export default InfoBar
