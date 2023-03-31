import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { NavContext } from '../../context/NavContext'

export const MobileImageBox = ({ src, alt, title, id }) => {

    const { isNavOpen } = useContext(NavContext)

    const translateClasses = ['translate-y-8 translate-x-4', '-translate-y-8 -translate-x-4', 'translate-x-4', 'translate-x-4 -translate-y-8']
    const isNavTranslates = ["-translate-y-4", "translate-y-4", "translate-y-4 translate-x-4", "-translate-y-4 translate-x-4"]

    const getRandom = (max) => {
        return Math.floor(Math.random() * max)
    }
    const randomTranslate = getRandom(translateClasses.length)
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
        <div className={` w-full relative my-2 text-center cursor-pointer duration-1000 transition-all ${translateClasses[randomTranslate]} ${isNavOpen && isNavTranslates[randomNavTranslates]}  hover:scale-105 hover:z-40 `} onClick={handlePick} >
            <img src={src} alt={alt} className='w-full object-cover' />
            <div className='text-white font-average-sans text-2xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>{title} </div>
        </div>
    )
}
