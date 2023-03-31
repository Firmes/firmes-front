import { createContext, useEffect, useMemo, useState } from "react";

export const DeviceContext = createContext()

export const DeviceProvider = ({ children }) => {


    const isMobile = useMemo(() => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), [])

    return (
        <DeviceContext.Provider value={{ isMobile }}>
            {children}
        </DeviceContext.Provider>
    )

}