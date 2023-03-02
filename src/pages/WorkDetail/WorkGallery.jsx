import React, { useContext } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DeviceContext } from '../../context/DeviceContext';


export const WorkGallery = ({ project }) => {

  const { isMobile } = useContext(DeviceContext)


  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };



  return (
    <div className='md:flex w-full order-4 md:order-3'>
      <div className="flex flex-col items-center justify-center md:flex-row md:justify-between 3 md:w-2/6">
        <div className="w-full my-4 ">
          <p className="text-sm md:text-xl text-white leading-6">
            {project.project_description}
          </p>
        </div>

      </div>
      <div className="md:w-4/6 ">
        {
          isMobile ?
            <div className='flex flex-col justify-center items-center gap-4'>
              {
                project.project_images.map((image) => {
                  return (
                    <div key={image.image_id}>
                      <img className='w-80 h-72 object-cover' src={image.project_image_url
                      } alt={image.project_image_url
                      } />
                    </div>
                  )
                })
              }
            </div>
            :
            <Slider {...settings}>
              {project?.project_images.map((image) => {
                return (
                  <div key={image.image_id}>
                    <img className='w-80 h-72 object-cover' src={image.project_image_url
                    } alt={image.project_image_url
                    } />
                  </div>
                )
              })}
            </Slider>
        }
      </div>
    </div>

  )
}
