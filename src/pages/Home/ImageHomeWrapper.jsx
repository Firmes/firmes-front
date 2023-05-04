import React, { useContext } from 'react'
import { Footer } from '../../components/Layout'
import { Loader } from '../../components/UI/Loader'
import { DeviceContext } from '../../context/DeviceContext'
import { ProjectContext } from '../../context/ProjectsContext'

import { ImagesDesktopContainer } from './ImagesDesktopContainer'
import { ImagesMobileContainer } from './ImagesMobileContainer'

export const ImageHomeWrapper = () => {

    const { isMobile } = useContext(DeviceContext)
    const { data, loading } = useContext(ProjectContext)

    if (loading) {
        return (
            <div className='w-full h-screen flex flex-col justify-center items-center'>
                <Loader />
                <Footer />
            </div>
        )

    }

    return (
        <div className='flex flex-col justify-center items-center md:block' >
            {isMobile
                ?
                <ImagesMobileContainer data={data} />
                :
                <ImagesDesktopContainer data={data} />
            }
            <Footer />
        </div>
    )
}
