import React from 'react'
import { ImageBox } from './ImageBox'

export const ImagesDesktopContainer = ({ data }) => {

    return (
        <div className='hidden sm:grid grid-cols-3 overflow-hidden p-4 gap-4'>

            {data.length > 0 &&
                data.map((project) => {
                    if (data.indexOf(project) === 1 && location.pathname !== "/work") {
                        return (
                            <>
                                <div key={project?.project_title} className={` text-white z-30 h-fit w-1/2 md:text-black md:bg-slate-300 p-4 duration-1000 cursor-pointer hover:scale-105 transition-all`} >
                                    <p className='text-lg font-extrabold text-focus-in'>Firmes is a worldwide studio, specialising in content production. Our goal is to guide brands and personal brands through the constantly shifting digital world using a content-first marketing approach. We provide human-centric solutions that foster brand authenticity and create true value to communities</p>
                                </div>
                                <ImageBox key={project?.project_info_id} id={project?.project_info_id} title={project?.project_title} src={project.project_images[Math.floor(Math.random() * project.project_images.length)]?.project_image_url} alt={data[0]?.project_description} />
                            </>
                        )
                    } else {
                        return (
                            <ImageBox key={project?.project_info_id} id={project?.project_info_id} title={project?.project_title} src={project.project_images[Math.floor(Math.random() * project.project_images.length)]?.project_image_url} alt={data[0]?.project_description} />
                        )
                    }

                })}
        </div>
    )
}
