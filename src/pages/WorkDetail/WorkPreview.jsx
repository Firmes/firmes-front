import React from 'react'
import { SideBar } from '../../components/Layout'
import { formatYoutubeUrl } from '../../helpers/formatYoutubeUrl'

export const WorkPreview = ({ project }) => {

  return (

    <div className="w-full min-w-full preview order-2 md:order-1 overflow-hidden sm:px-6 xl:px-14">

      <iframe className='w-full h-full aspect-video' src={formatYoutubeUrl(project?.project_video_url)}>
        <p>Your browser does not support iframes.</p>
      </iframe>

    <SideBar />
    </div>
  )
}
