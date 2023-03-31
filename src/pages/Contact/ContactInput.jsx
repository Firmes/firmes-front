export default function ContactInput({label, required, setContactFormValues, contactFormValues, name}) {


    const handleInputChange = (e) => {
        setContactFormValues({
            ...contactFormValues,
            [e.target.name]: e.target.value
        })
    }



    return (
        <div className="w-full self-end">
            <div className="relative mt-1 rounded-md shadow-sm">
                <input
                    type="text"
                    name={name}
                    id={label}
                    required={required}
                    onChange={handleInputChange}
                    className="block w-full rounded-md border border-solid border-gray-300 p-2 md:p-4 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                />
            </div>
            <label htmlFor={label} className="mb-0 block text-lg m-2">
                {label}
            </label>
        </div>
    )
}
