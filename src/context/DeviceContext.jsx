import { createContext, useEffect, useMemo, useState } from "react";

export const DeviceContext = createContext()

export const DeviceProvider = ({ children }) => {


    /* const [isMobile, setIsMobile] = useState(true)


    const isMobileBrowser = () => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);

    useEffect(() => {
        setIsMobile(isMobileBrowser())


    }, []) */

    const isMobile = useMemo(() => /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), [])

    return (
        <DeviceContext.Provider value={{ isMobile }}>
            {children}
        </DeviceContext.Provider>
    )

}