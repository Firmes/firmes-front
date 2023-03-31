import React from 'react'

export const ContactTextArea = ({setContactFormValues,contactFormValues}) => {

    const handleInputChange = (e) => {
        setContactFormValues({
            ...contactFormValues,
            [e.target.name]: e.target.value
        })
    }

    return (
        <form className='p-2 md:p-4 mb-4 mx-6 w-full md:w-2/4 bg-firmes-form flex justify-center items-start flex-col '>
            <label className="block text-lg m-2">
                Message *
            </label>
            <textarea rows="5" cols="30" name='message' className='block w-full rounded-md border border-solid border-gray-300 p-2 md:p-4 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm' onChange={handleInputChange} />
        </form>
    )
}
