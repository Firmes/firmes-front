import React from 'react'
import { Footer, SideBar } from '../../components/Layout'
import { ContactForm } from './index'

export const ContactLayout = () => {
    return (
        <div className='w-5/6 flex flex-col justify-center items-center text-firmes-black'>
            <ContactForm />
            <SideBar />

            <Footer />
        </div>
    )
}
