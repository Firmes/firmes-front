import React from 'react'

export const WorkPreview = ({ project, imagePreviewActive }) => {


  const initialPreview = project.project_images.filter((image) => image.image_is_portrait)

  return (

    <div className="w-full preview order-2 md:order-1 overflow-hidden sm:px-20 md:px-32 lg:px-40 xl:px-52">
    {
      imagePreviewActive ? 
        <img className='w-full' src={project?.project_images.filter((image) => image.image_id == imagePreviewActive)[0].project_image_url} />
        :
        <img className='w-full' src={initialPreview[0].project_image_url} />
    }
      
    </div>
  )
}
