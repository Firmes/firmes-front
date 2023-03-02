import React, { useContext } from "react";
import { DeviceContext } from "../../context/DeviceContext";
import { ProjectContext } from "../../context/ProjectsContext";
import { ImagesDesktopContainer } from "../Home/ImagesDesktopContainer";
import { ImagesMobileContainer } from "../Home/ImagesMobileContainer";
import { WorKPicker } from "./index";


export const WorkLayout = () => {

  const { isMobile } = useContext(DeviceContext)
  const { data } = useContext(ProjectContext)

  return (
    <div className="w-full py-16">
      <>
        {isMobile
          ?
          <ImagesMobileContainer data={data} />
          :
          <ImagesDesktopContainer data={data} />
        }
      </>
      {/* <WorKPicker /> */}
    </div>
  );
};
