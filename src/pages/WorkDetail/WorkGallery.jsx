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
                {project?.project_video_url.startsWith("https")
                  &&
                  <div>
                    <iframe  src={formatYoutubeUrl(project?.project_video_url)}>
                      <p>Your browser does not support iframes.</p>
                    </iframe>
                  </div>
                }

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
                {project?.project_video_url.startsWith("https")
                  &&
                  <div>
                    <iframe frameborder="0" height={"288px"} src={formatYoutubeUrl(project?.project_video_url)}>
                      <p>Your browser does not support iframes.</p>
                    </iframe>
                  </div>
                }

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
