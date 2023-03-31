import React, { useContext } from "react";
import { Footer } from "../../components/Layout";
import { DeviceContext } from "../../context/DeviceContext";
import { ProjectContext } from "../../context/ProjectsContext";
import { ImagesDesktopContainer } from "../Home/ImagesDesktopContainer";
import { ImagesMobileContainer } from "../Home/ImagesMobileContainer";


export const WorkLayout = () => {

  const { isMobile } = useContext(DeviceContext)
  const { data } = useContext(ProjectContext)

  return (
    <div className="w-full py-16 flex flex-col justify-center items-center">
      <>
        {isMobile
          ?
          <ImagesMobileContainer data={data} />
          :
          <ImagesDesktopContainer data={data} />
        }
      </>
      <Footer />
    </div>
  );
};
