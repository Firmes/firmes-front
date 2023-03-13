import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { NavContext } from '../../context/NavContext'

export const ImageBox = ({ src, alt, title, id, client }) => {

    const { isNavOpen } = useContext(NavContext)

    const translateClasses = ['translate-y-40 translate-x-40', 'translate-y-4 -translate-x-4', 'translate-x-4', 'translate-x-4 -translate-y-4']
    const justifySelfGrid = ['justify-self-start', 'justify-self-end', 'justify-self-center', 'justify-self-stretch']
    const alignSelfGrid = ['self-start', 'self-end', 'self-center', 'self-stretch', 'self-baseline']
    const animations = ['flip-in-diag-2-br', 'flip-in-diag-2-tl', 'flip-in-ver-right']
    const isNavTranslates = ["-translate-y-44", "-translate-y-80", "translate-y-32 translate-x-0", "-translate-y-36 translate-x-20"]

    const getRandom = (max) => {
        return Math.floor(Math.random() * max)
    }


    const randomWidthNumber = Math.floor(Math.random() * (6 - 2) + 2)
    const randomTranslate = getRandom(translateClasses.length)
    const randomJustifySelf = getRandom(justifySelfGrid.length)
    const randomAlignSelf = getRandom(alignSelfGrid.length)
    const randomAnimation = getRandom(animations.length)
    const randomNavTranslates = getRandom(isNavTranslates.length)


    const navigate = useNavigate()
    let location = useLocation()

    const handlePick = () => {
        if (location.pathname === "/work") {
            return navigate(`${id}`)
        }
        navigate(`work/${id}`)
    }

    return (
        <div className={` w-${randomWidthNumber}/6 relative my-2 text-center cursor-pointer duration-1000 transition-all ${justifySelfGrid[randomJustifySelf]} ${alignSelfGrid[randomAlignSelf]} ${translateClasses[randomTranslate]}  ${isNavOpen && isNavTranslates[randomNavTranslates]}  hover:scale-105 hover:z-40`} onClick={handlePick} >
            <img src={src} alt={alt} className='w-full object-cover' />
            <div className='absolute w-full h-full top-0 left-0 opacity-80 hover:bg-firmes-black transition-all duration-1000'></div>
            <div className='text-white font-average-sans text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>  {client}</div>
        </div>
    )
}
