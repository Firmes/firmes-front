import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'

import { NavContext } from '../../context/NavContext'
import { ImageBox } from './ImageBox'
import { MobileImageBox } from './MobileImageBox'

export const ImagesMobileContainer = ({ data }) => {
    const { isNavOpen } = useContext(NavContext)

    let location = useLocation()


    return (
        <div className=' sm:hidden  p-4 w-screen grid-cols-1 overflow-hidden' >

            {data.map((project) => {
                if (location.pathname === "/work") return <MobileImageBox key={project?.project_info_id} id={project?.project_info_id} title={project?.project_title} src={project.project_images[Math.floor(Math.random() * project.project_images.length)]?.project_image_url} alt={data[0]?.project_description} />

                if (data.indexOf(project) === 1) {
                    return (
                        <>
                            <MobileImageBox key={project?.project_title} id={project?.project_info_id} title={project?.project_title} src={location.pathname !== "/work" ? project?.project_images.filter((image) => image.image_is_portrait)[0].project_image_url : project.project_images[Math.floor(Math.random() * project.project_images.length)]?.project_image_url} alt={data[0]?.project_description} />
                            <div className={`w-3/5 md:w-1/6 bg-slate-300 text-black p-4 relative z-30  my-4 text-box grid-item-2 duration-1000 ${isNavOpen ? 'translate-y-32 ' : 'translate-y-0'}  cursor-pointer hover:scale-105 transition-all`} >
                                <p className='text-xs md:text-lg text-focus-in'>Firmes is a worldwide studio, specialising in content production. Our goal is to guide brands and personal brands through the constantly shifting digital world using a content-first marketing approach. We provide human-centric solutions that foster brand authenticity and create true value to communities.</p>
                            </div>

                        </>
                    )
                } else {
                    return (
                        <MobileImageBox key={project?.project_info_id} id={project?.project_info_id} title={project?.project_title} src={location.pathname !== "/work" ? project?.project_images.filter((image) => image.image_is_portrait)[0].project_image_url : project.project_images[Math.floor(Math.random() * project.project_images.length)]?.project_image_url} alt={data[0]?.project_description} />
                    )
                }
            })}
            
        </div>
    )
}
