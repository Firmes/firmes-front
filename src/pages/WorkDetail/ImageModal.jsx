import React from 'react'

export const ImageModal = ({ setShowModal, ModalImage }) => {
    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-full my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-firmes-form outline-none focus:outline-none">
                        {/*header*/}
                        {/* <div className="flex items-start justify-between p-5  rounded-t ">
                            <h3 className="text-3xl font-semibold">

                            </h3>
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                <span className="bg-transparent text-firmes-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div> */}
                        {/*body*/}
                        <div className="relative p-4 flex-auto h-70vh bg-modal">
                            <img className='w-full h-full object-contain' src={ModalImage} alt={ModalImage} />
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6  rounded-b bg-modal" >
                            <button
                                className="text-white background-transparent font-bold uppercase px-6 py-2 text-xl outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </button>
                    
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    )
}
