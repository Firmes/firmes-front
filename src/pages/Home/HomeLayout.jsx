import React from 'react'
import { MessageBar } from './MessageBar'
import { ImageHomeWrapper } from './ImageHomeWrapper'

export const HomeLayout = () => {



  return (
    <div className='w-full'>
      <ImageHomeWrapper />
      <MessageBar />
    </div>
  )
}
