import React from 'react'

export const WorkPreview = ({image, video}) => {
  return (

    <div className="w-full order-2 md:order-1">
      <img className='w-full' src={image} alt={image} />
    </div>
  )
}
