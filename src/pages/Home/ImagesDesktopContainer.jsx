import React from 'react'
import { useLocation } from 'react-router-dom'
import { SideBar } from '../../components/Layout'
import { ImageBox } from './ImageBox'

export const ImagesDesktopContainer = ({ data }) => {

    const location = useLocation()

    return (
        <>
            <div className='w-5/6 hidden sm:grid md:grid-cols-2 p-4 gap-4'>

                {data?.length > 0 &&
                    data?.map((project) => {
                        if (data?.indexOf(project) === 1 && location.pathname !== "/work") {
                            return (
                                <div key={project?.project_title}>
                                    <div  className={` text-white z-30 h-fit w-2/3 md:text-black md:bg-slate-300 p-4 duration-500 cursor-pointer hover:scale-105 transition-all`} >
                                        <p className='text-lg font-extrabold text-focus-in'>Firmes is a worldwide studio, specialising in content production. Our goal is to guide brands and personal brands through the constantly shifting digital world using a content-first marketing approach. We provide human-centric solutions that foster brand authenticity and create true value to communities.</p>
                                    </div>
                                    <ImageBox key={project?.project_info_id} id={project?.project_info_id} client={project.project_client} title={project?.project_title} src={location.pathname !== "/work" ? project?.project_images.filter((image) => image.image_is_portrait)[0].project_image_url || project.project_images[Math.floor(Math.random() * project.project_images.length)]?.project_image_url : project.project_images[Math.floor(Math.random() * project.project_images.length)]?.project_image_url} alt={data[0]?.project_description} />
                                </div>
                            )
                        } else {
                            return (
                                <ImageBox key={project?.project_info_id} id={project?.project_info_id} client={project.project_client} title={project?.project_title} src={location.pathname !== "/work" ? project?.project_images.filter((image) => image.image_is_portrait)[0].project_image_url || project.project_images[Math.floor(Math.random() * project.project_images.length)]?.project_image_url : project.project_images[Math.floor(Math.random() * project.project_images.length)]?.project_image_url} alt={data[0]?.project_description} />
                            )
                        }

                    })}
            </div>

            <SideBar />
            
        </>

    )
}
