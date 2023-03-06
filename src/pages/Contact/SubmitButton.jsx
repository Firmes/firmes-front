import React from 'react'
import DataService from '../../data-service/DataService'

export const SubmitButton = ({ contactFormValues, setError, setSuccess }) => {

    const dataService = new DataService

    const onSubmit = () => {
        dataService.saveContact(contactFormValues)
            .then((res) => {
                setSuccess(res.message)
                setError("")
            })
            .catch((err) => {
                setError(err.response.data.errorMessage)
                setSuccess("")
            })
    }

    return (
        <button className='w-full border-2 md:w-auto mb-4 bg-firmes-form p-4 text-xl rounded-md hover:border-2 hover:border-white hover:bg-transparent hover:text-firmes-form   transition-all ease-in-out duration-500' onClick={onSubmit}>SUBMIT</button>
    )
}
