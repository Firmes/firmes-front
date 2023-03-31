import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DeviceContext } from '../../context/DeviceContext'
import { NavContext } from '../../context/NavContext'

export const WorKPicker = () => {

    const { isNavOpen } = useContext(NavContext)

    const { isMobile } = useContext(DeviceContext)

    const navitage = useNavigate()


    const handlePick = () => {
        navitage("/work/:id")
    }


    return (
        <>
            {isMobile
                ?
                <div className='p-2 sm:hidden'>
                    <div className={`w-4/5 grid-item-1 cursor-pointer hover:scale-105 transition-all`} onClick={handlePick}><img src="https://loremflickr.com/320/240" /></div>
                    <div className={`w-1/4 grid-item-3 duration-1000 translate-x-64 translate-y-6  cursor-pointer hover:scale-105 transition-all ${isNavOpen ? 'translate-y-40 -translate-x-0' : 'animate-close'}`} onClick={handlePick}><img src="https://loremflickr.com/320/240" /></div>
                    <div className={`w-5/6 grid-item-4 translate-x-10 duration-1000 ${isNavOpen ? '-translate-y-44' : 'animate-close'} cursor-pointer hover:scale-105 transition-all`} onClick={handlePick}><img src="https://loremflickr.com/320/240" /></div>
                    <div className={`w-2/5 grid-item-5 translate-x-52 duration-1000 ${isNavOpen ? 'translate-y-1 translate-x-40' : 'translate-y-0'}  cursor-pointer hover:scale-105 transition-all`} onClick={handlePick}><img src="https://loremflickr.com/320/240" /></div>
                    <div className={`w-2/4 grid-item-6 duration-1000  cursor-pointer hover:scale-105 transition-all`} onClick={handlePick}><img src="https://loremflickr.com/320/240" /></div>
                    <div className={`w-2/5 grid-item-7 translate-x-40 -translate-y-10 duration-1000  ${isNavOpen ? 'translate-y-32 translate-x-0' : ''} cursor-pointer hover:scale-105 transition-all `} onClick={handlePick}><img src="https://loremflickr.com/320/240" /></div>
                    <div className={`w-4/6 grid-item-8 duration-1000 relative ${isNavOpen ? '-translate-y-36 translate-x-20' : ''} cursor-pointer hover:scale-105 transition-all hover:z-30`} onClick={handlePick}><img src="https://loremflickr.com/320/240" /></div>
                </div>
                :
                <div className='hidden sm:grid grid-cols-3 p-4 gap-4'>
                    <div className='translate-y-48 translate-x-10 flip-in-ver-right cursor-pointer duration-700 hover:contrast-50 transition-all' onClick={handlePick}><img src="https://loremflickr.com/320/240" /></div>
                    <div className='flip-in-diag-2-br duration-700 cursor-pointer hover:hue-rotate-180 transition-all' onClick={handlePick}><img src="https://loremflickr.com/380/440" /></div>
                    <div className=' flip-in-diag-2-tl duration-500 cursor-pointer hover:blur-sm transition-all' onClick={handlePick}><img src="https://loremflickr.com/620/740" /></div>
                    <div className=' flip-in-diag-2-tl duration-700 cursor-pointer hover:invert transition-all' onClick={handlePick}><img src="https://loremflickr.com/320/240" /></div>
                    <div className='-translate-y-52 -translate-x-2 flip-in-ver-right duration-700 cursor-pointer hover:saturate-100 transition-all' onClick={handlePick}><img src="https://loremflickr.com/820/440" /></div>
                    <div className=' -translate-x-52 flip-in-diag-2-br duration-700 cursor-pointer hover:sepia transition-all' onClick={handlePick}><img src="https://loremflickr.com/320/240" /></div>
                    <div className=' translate-x-52 flip-in-diag-2-tl duration-700 cursor-pointer hover:grayscale transition-all' onClick={handlePick}><img src="https://loremflickr.com/320/240" /></div>
                </div>
            }
        </>

    )
}
