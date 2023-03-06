import React from 'react'
import { Footer } from '../../components/Layout/index'
import firmesDesk from "../../assets/mobile-Group 22.png"
import firmesMob from "../../assets/image 21.png"
import selina from "../../assets/Selina_logo_black 2.png"
import redbull from "../../assets/Red-Bull-logo 2.png"
import hm from "../../assets/HM_logo_logotype_emblem 2.png"
import herbalife from "../../assets/Herbalife_Nutrition_logo_text_wordmark 1.png"
import adidas from "../../assets/Adidas-Logo 1.png"
import nickelodeon from "../../assets/Nickelodeon_logo 1.png"
import compensar from "../../assets/2000px-Compensar_logo 2.png"
import logo2 from "../../assets/logo 2.png"
import kupa from "../../assets/Kupa 1.png"
import mercadlibre from "../../assets/MercadoLibre-Logo 1.png"
import saju from "../../assets/Asset 14 1 (1).png"
import saeta from "../../assets/saeta-logo 1 (1).png"




export const AboutUs = () => {
    return (
        <section className='text-white md:p-8 w-full flex flex-col justify-center items-center md:items-start'>
            <div className='flex flex-col md:flex-row md:w-3/4'>
                <div className='p-4 md:hidden'>
                    <img src={firmesDesk} alt='about-us' />
                </div>
                <div className='hidden md:flex justify-center items-center md:mx-8 md:order-2'>
                    <img src={firmesMob} alt='about-us' />
                </div>
                <div className='p-2  md:order-1 md:w-2/3'>
                    <h2 className=' text-xl md:text-4xl md:text-end md:leading-11'>
                        Firmes is a worldwide studio, specializing in <span className='text-firmes-violet'>content production</span>. Our goal is to guide brands and personal brands through the constantly shifting digital world using a <span className='text-firmes-violet'>content-first marketing approach</span>. We provide human-centric solutions that foster brand authenticity and <span className='text-firmes-violet'>create true value to communities</span>
                    </h2>
                </div>
            </div>

            <h3 className='text-center text-xl md:text-4xl w-full my-8 md:my-14 tracking-in-contract-bck-bottom'>
                /some of our clients/
            </h3>
            <div className='grid grid-cols-2 md:grid-cols-6 gap-8 px-6 md:w-full'>
                <div className='flex justify-center items-center'>
                    <img src={selina} alt='Selina' />
                </div>
                <div className='flex justify-center items-center'>
                    <img src={redbull} alt='red-bull' />
                </div>
                <div className='flex justify-center items-center'>
                    <img src={hm} alt='HyM' />
                </div>
                <div className='flex justify-center items-center'>
                    <img src={herbalife} alt='herbalife' />
                </div>
                <div className='flex justify-center items-center'>
                    <img src={adidas} alt='adidas' />
                </div>
                <div className='flex justify-center items-center'>
                    <img src={nickelodeon} alt='nickelodeon' />
                </div>
                <div className='flex justify-center items-center'>
                    <img src={compensar} alt='compensar' />
                </div>
                <div className='flex justify-center items-center'>
                    <img src={logo2} alt='lucker-chocolate' />
                </div>
                <div className='flex justify-center items-center'>
                    <img src={kupa} alt='kupa' />
                </div>
                <div className='flex justify-center items-center'>
                    <img src={mercadlibre} alt='mercado-libre' />
                </div>
                <div className='flex justify-center items-center'>
                    <img src={saju} alt='saju' />
                </div>
                <div className='flex justify-center items-center'>
                    <img src={saeta} alt='saeta' />
                </div>
            </div>
            <Footer />
        </section>
    )
}
