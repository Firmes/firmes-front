import React, { useState } from 'react'
import ContactInput from './ContactInput'
import { ContactTextArea } from './ContactTextArea'
import { SubmitButton } from './SubmitButton'


export const ContactForm = () => {

    const [contactFormValues, setContactFormValues] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
    })

    console.log(contactFormValues);
    const onSubmit = () => {

    }



    return (
        <>

            <div className='w-full md:w-4/5'>
                <form className='p-2 md:p-4 mb-4 md:w-1/2 bg-firmes-form w-full relative'>
                    <ContactInput name={"firstName"} label={"First Name"} required={false} setContactFormValues={setContactFormValues} contactFormValues={contactFormValues} />

                </form>
                <form className='p-2 md:p-4 mb-4 md:w-1/2 bg-firmes-form w-full relative md:bottom-20 md:left-1/3'>
                    <ContactInput name={"lastName"} label={"Last Name"} required={false} setContactFormValues={setContactFormValues} contactFormValues={contactFormValues}/>
                </form>
            </div>
            <div className='w-full md:w-4/5 '>
                <form className='p-2 md:p-4 mb-4 md:w-1/2 bg-firmes-form w-full relative'>
                    <ContactInput name={"email"} label={"Email *"} required={true} setContactFormValues={setContactFormValues} contactFormValues={contactFormValues}/>

                </form>
                <form className='p-2 md:p-4 mb-4 md:w-1/2 bg-firmes-form w-full relative md:bottom-20 md:left-1/3'>
                    <ContactInput name={"subject"} label={"Subject *"} required={true} setContactFormValues={setContactFormValues} contactFormValues={contactFormValues}/>
                </form>
            </div>
            <div className='w-full md:w-4/5 flex flex-col md:flex-row justify-center items-center'>
                <ContactTextArea name={"message"} label={"Subject *"} required={true} setContactFormValues={setContactFormValues} contactFormValues={contactFormValues} />
                <SubmitButton />
            </div>
        </>
    )
}
