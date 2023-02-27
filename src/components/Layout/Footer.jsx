import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className="w-3/4 md:w-full py-12 md:py-36 flex flex-col items-center justify-between order-6 md:order-5">
            <div className='flex justify-center items-center '>
                <Link to={"/"} className='md:w-3/4'>
                    <img src="/src/assets/logo.png" alt="logo" className="w-full" />
                </Link>
            </div>
            <p className='text-white text-sm md:text-2xl'>wearefirmes@gmail.com</p>
        </footer>
    )
}
