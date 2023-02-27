import React, { useContext } from 'react'
import { DeviceContext } from '../../context/DeviceContext'
import { NavContext } from '../../context/NavContext'

export const ImageHomeWrapper = () => {
    const { isNavOpen } = useContext(NavContext)
    const { isMobile } = useContext(DeviceContext)

    return (
        <>
            {isMobile
                ?
                <div className=' sm:hidden p-4 w-screen masonry' >
                    <div className={`grid-item-1 cursor-pointer hover:scale-105 transition-all`} ><img src="https://loremflickr.com/320/240" /></div>
                    <div className={`w-3/5 md:w-1/6 text-white relative z-30 md:text-black md:bg-slate-300 my-4 text-box grid-item-2 duration-1000 ${isNavOpen ? 'translate-y-96 bg-slate-300 text-black p-4' : 'translate-y-0'}  cursor-pointer hover:scale-105 transition-all`} >
                        <p className='text-xs md:text-lg text-focus-in'>Firmes is a worldwide studio, specialising in content production. Our goal is to guide brands and personal brands through the constantly shifting digital world using a content-first marketing approach. We provide human-centric solutions that foster brand authenticity and create true value to communities</p>
                    </div>
                    <div className={`w-1/4 grid-item-3 duration-1000 translate-x-40 -translate-y-36  cursor-pointer hover:scale-105 transition-all`} ><img src="https://loremflickr.com/320/240" /></div>
                    <div className={`w-5/6 grid-item-4 translate-x-10 -translate-y-10 duration-1000 ${isNavOpen ? '-translate-y-44' : 'animate-close'} cursor-pointer hover:scale-105 transition-all`} ><img src="https://loremflickr.com/320/240" /></div>
                    <div className={`w-2/5 grid-item-5 translate-x-2 -translate-y-2 duration-1000 ${isNavOpen ? '-translate-y-80 ' : 'translate-y-0'}  cursor-pointer hover:scale-105 transition-all`} ><img src="https://loremflickr.com/320/240" /></div>
                    <div className={`w-2/4 grid-item-6 duration-1000 cursor-pointer hover:scale-105 transition-all`} ><img src="https://loremflickr.com/320/240" /></div>
                    <div className={`w-2/5 grid-item-7 translate-x-40 -translate-y-10 duration-1000  ${isNavOpen ? 'translate-y-32 translate-x-0' : ''} cursor-pointer hover:scale-105 transition-all `} ><img src="https://loremflickr.com/320/240" /></div>
                    <div className={`w-4/6 grid-item-8 duration-1000 ${isNavOpen ? '-translate-y-36 translate-x-20' : ''} cursor-pointer hover:scale-105 transition-all`} ><img src="https://loremflickr.com/320/240" /></div>
                </div>
                :
                <div className='hidden sm:grid grid-cols-3 p-4 gap-4'>
                    <div className='translate-y-48 translate-x-10 flip-in-diag-2-br' ><img src="https://loremflickr.com/420/240" /></div>
                    <div className='flip-in-diag-2-tl' ><img src="https://loremflickr.com/380/440" /></div>
                    <div className={` text-white z-30 h-fit w-1/2 md:text-black md:bg-slate-300 p-4 duration-1000 cursor-pointer hover:scale-105 transition-all`} >
                        <p className='text-lg font-extrabold text-focus-in'>Firmes is a worldwide studio, specialising in content production. Our goal is to guide brands and personal brands through the constantly shifting digital world using a content-first marketing approach. We provide human-centric solutions that foster brand authenticity and create true value to communities</p>
                    </div>
                    <div className='flip-in-ver-right' ><img src="https://loremflickr.com/620/740" /></div>
                    <div className='flip-in-diag-2-tl' ><img src="https://loremflickr.com/320/240" /></div>
                    <div className='translate-y-52 -translate-x-20 flip-in-diag-2-br' ><img src="https://loremflickr.com/820/440" /></div>
                    <div className=' translate-x-52 -translate-y-52  flip-in-ver-right' ><img src="https://loremflickr.com/620/240" /></div>
                    <div className=' translate-x-52 flip-in-diag-2-br'><img src="https://loremflickr.com/420/240" /></div>
                </div>
            }
        </>
    )
}
