import React, { useContext } from 'react'
import { useLocation } from 'react-router-dom'

import { NavContext } from '../../context/NavContext'
import { ImageBox } from './ImageBox'

export const ImagesMobileContainer = ({ data }) => {
    const { isNavOpen } = useContext(NavContext)

    let location = useLocation()


    return (
        <div className=' sm:hidden p-4 w-screen grid-cols-2 overflow-hidden' >

            {data.map((project) => {
                if(location.pathname === "/work" ) return <ImageBox key={project?.project_info_id} id={project?.project_info_id} title={project?.project_title} src={project.project_images[Math.floor(Math.random() * project.project_images.length)]?.project_image_url} alt={data[0]?.project_description} />

                if (data.indexOf(project) === 1) {
                    return (
                        <>
                            <ImageBox key={project?.project_title} id={project?.project_info_id} title={project?.project_title} src={project.project_images[Math.floor(Math.random() * project.project_images.length)]?.project_image_url} alt={data[0]?.project_description} />
                            <div className={`w-3/5 md:w-1/6 text-white relative z-30 md:text-black md:bg-slate-300 my-4 text-box grid-item-2 duration-1000 ${isNavOpen ? 'translate-y-32 bg-slate-300 text-black p-4' : 'translate-y-0'}  cursor-pointer hover:scale-105 transition-all`} >
                                <p className='text-xs md:text-lg text-focus-in'>Firmes is a worldwide studio, specialising in content production. Our goal is to guide brands and personal brands through the constantly shifting digital world using a content-first marketing approach. We provide human-centric solutions that foster brand authenticity and create true value to communities</p>
                            </div>

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
