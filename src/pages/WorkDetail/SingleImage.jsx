import React from 'react'

export const SingleImage = ({ image, setShowModal, setModalImage }) => {

    const handleModal = () => {
        setShowModal(true)
        setModalImage(image.project_image_url)
    }

    return (
        <div key={image.image_id} onClick={handleModal} className={"cursor-pointer hover:brightness-200 transition-all duration-1000"}>
            <img className='aspect-video object-cover' src={image.project_image_url
            } alt={image.project_image_url
            } />
        </div>
    )
}
