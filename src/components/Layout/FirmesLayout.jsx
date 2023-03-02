import React, { useContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { DeviceContext } from "../../context/DeviceContext";
import { NavProvider } from "../../context/NavContext";
import { Header, SideBar, HeaderMobile } from "./index";

export const FirmesLayout = () => {

  const { isMobile } = useContext(DeviceContext)
  const [isNavOpen, setIsNavOpen] = useState(false); // initiate isNavOpen state with false


  return (
    <div className="h-full">
      <NavProvider>
        {isMobile
          ?
          <HeaderMobile isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
          :
          <Header />
        }
        <main className="w-screen max-w-full flex justify-center items-center">
          <Outlet />
          <SideBar />
        </main>
      </NavProvider>

    </div>
  );
};
