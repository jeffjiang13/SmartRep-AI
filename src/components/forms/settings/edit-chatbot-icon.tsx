import Section from '@/components/section-label'
import UploadButton from '@/components/upload-button'
import { BotIcon } from '@/icons/bot-icon'

import Image from 'next/image'
import React, { useState, useEffect } from 'react'
import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'

type Props = {
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
  chatBot: {
    id: string
    icon: string | null
    background: string | null
    textColor: string | null
    welcomeMessage: string | null
  } | null
}

const EditChatbotIcon = ({ register, errors, chatBot }: Props) => {
  const [textColor, setTextColor] = useState(chatBot?.textColor || '#FFFFFF')
  const [background, setBackground] = useState(chatBot?.background || '#FFD700')

  useEffect(() => {
    register('textColor', { value: textColor })
    register('background', { value: background })
  }, [register, textColor, background])

  return (
    <div className="py-5 flex flex-col gap-5 items-start">
      <Section
        label="Chatbot icon"
        message="Change the icon for the chatbot."
      />
      <UploadButton
        label="Edit Image"
        register={register}
        errors={errors}
      />
      {chatBot?.icon ? (
        <div className="rounded-full overflow-hidden">
          <Image
            src={`https://ucarecdn.com/${chatBot.icon}/`}
            alt="bot"
            width={80}
            height={80}
          />
        </div>
      ) : (
        <div
          className="cursor-pointer shadow-md w-20 h-20 flex items-center justify-center rounded-full"
          style={{ backgroundColor: background }}
        >
          <BotIcon textColor={textColor} />
        </div>
      )}
      <div className="flex flex-col gap-2">
        <label>
          Text Color:
          <input
            type="color"
            value={textColor}
            onChange={(e) => {
              setTextColor(e.target.value)
            }}
            onBlur={() => {
              register('textColor').onChange({ target: { name: 'textColor', value: textColor } })
            }}
            className="ml-2"
          />
        </label>
        <label>
          Background Color:
          <input
            type="color"
            value={background}
            onChange={(e) => {
              setBackground(e.target.value)
            }}
            onBlur={() => {
              register('background').onChange({ target: { name: 'background', value: background } })
            }}
            className="ml-2"
          />
        </label>
      </div>
    </div>
  )
}

export default EditChatbotIcon
