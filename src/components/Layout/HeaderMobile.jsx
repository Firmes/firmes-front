import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { NavContext } from '../../context/NavContext';
import logo from "../../assets/logo.png"

export const HeaderMobile = () => {


    const {setIsNavOpen, isNavOpen} = useContext(NavContext)

    const links = [
        {
            to: "",
            link: "HOME",
        },
        {
            to: "work",
            link: "WORK",
        },
        {
            to: "about-us",
            link: "ABOUT US"
        },
        {
            to: "contact",
            link: "CONTACT",
        },
    ];
    return (
        <>
            <header className={`flex sm:hidden bg-firmes-black  justify-between px-4 relative z-40 ${isNavOpen ? "flex-col items-start" : "items-center"} `} >
                <div className="flex items-center justify-between border-b border-gray-400 py-8 w-3/5 border-none">
                    <Link to={"/"}>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <nav>
                    <section className={isNavOpen ? "hidden" : "MOBILE-MENU flex lg:hidden"}>
                        <div
                            className="HAMBURGER-ICON space-y-2"
                            onClick={() => setIsNavOpen((prev) => !prev)} // toggle isNavOpen state on click
                        >
                            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                            <span className="block h-0.5 w-8 animate-pulse bg-white"></span>
                        </div>
                        <div className={isNavOpen ? "showMenuNav" : "scale-out-ver-top hideMenuNav "}> // toggle class based on isNavOpen state
                            <div
                                className="CROSS-ICON absolute top-0 right-0 px-8 py-8 "
                                onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                            >
                                <svg
                                    className="h-8 w-8 text-white"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <line x1="18" y1="6" x2="6" y2="18" />
                                    <line x1="6" y1="6" x2="18" y2="18" />
                                </svg>
                            </div>
                            <ul className="MENU-LINK-MOBILE-OPEN flex flex-col items-center justify-between min-h-[250px]">
                                {links.map((link) => {
                                    return (
                                        <li
                                            key={link.link}
                                            className="text-white transition-all hover:text-purple-700"
                                        >
                                            <Link to={link.to}>{link.link}</Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </section>

                    <ul className="DESKTOP-MENU hidden space-x-8 lg:flex">
                        <li>
                            <a className='text-white' href="/about">About</a>
                        </li>
                        <li>
                            <a href="/portfolio">Portfolio</a>
                        </li>
                        <li>
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </nav>
                <div className={isNavOpen ? "showMenuNav  " : "hideMenuNav"}>
                <div
                    className="CROSS-ICON absolute top-0 right-0 px-8 py-8"
                    onClick={() => setIsNavOpen(false)} // change isNavOpen state to false to close the menu
                >
                    <svg
                        className="h-8 w-8 text-white"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                    </svg>
                </div>
                <ul className={`MENU-LINK-MOBILE-OPEN flex flex-col items-end justify-between min-h-[250px]  {isNavOpen ? scale-up-ver-top : scale-out-ver-top}`}>
                    {links.map((link) => {
                        return (
                            <li
                                key={link.link}
                                className="text-white text-5xl transition-all hover:text-purple-700"
                            >
                                <Link to={link.to}>{link.link}</Link>
                            </li>
                        );
                    })}
                    <hr className='w-full mt-4'/>
                </ul>
                
            </div>
            </header>
            

        </>
    )
}
