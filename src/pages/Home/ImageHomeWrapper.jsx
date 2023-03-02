import React, { useContext } from 'react'
import { DeviceContext } from '../../context/DeviceContext'
import { ProjectContext } from '../../context/ProjectsContext'

import { ImagesDesktopContainer } from './ImagesDesktopContainer'
import { ImagesMobileContainer } from './ImagesMobileContainer'

export const ImageHomeWrapper = () => {
    
    const { isMobile } = useContext(DeviceContext)
    const { data } = useContext(ProjectContext)

    return (
        <>
            {isMobile
                ?
                <ImagesMobileContainer data={data}/>
                :
                <ImagesDesktopContainer data={data}/>
            }
        </>
    )
}
