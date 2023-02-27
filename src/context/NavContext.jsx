import React, { useState, createContext, useEffect } from 'react'


export const NavContext = createContext();


export const NavProvider = ({ children }) => {


    const [isNavOpen, setIsNavOpen] = useState(false)
   
    return (
        <NavContext.Provider value={{ setIsNavOpen, isNavOpen }}>
            {children}
        </NavContext.Provider>
    )
}
