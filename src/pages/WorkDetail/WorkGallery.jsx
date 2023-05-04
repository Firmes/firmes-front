import React, { useContext, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { DeviceContext } from '../../context/DeviceContext';
import { SingleImage } from './SingleImage';
import { ImageModal } from './ImageModal';
import { formatYoutubeUrl } from '../../helpers/formatYoutubeUrl';


export const WorkGallery = ({ project }) => {

  const { isMobile } = useContext(DeviceContext)
  const [showModal, setShowModal] = useState(false);
  const [ModalImage, setModalImage] = useState("")


  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
  };


  return (
    <>
      <div className='md:flex w-full md:px-8 justify-between items-center order-4 md:order-3'>
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-between mb-4 md:w-4/12 m-1  md:mr-8">
          <div className="w-full">
            <p className="text-sm md:text-2xl text-white leading-6">
              {project.project_description}
            </p>
          </div>
        </div>
        <div className="md:w-7/12 ">
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
                    <SingleImage key={image.image_id} setModalImage={setModalImage} setShowModal={setShowModal} image={image} />
                  )
                })}
              </Slider>
          }
        </div>
      </div>
      {showModal ? (
        <ImageModal ModalImage={ModalImage} setShowModal={setShowModal} />
      ) : null}
    </>


  )
}
