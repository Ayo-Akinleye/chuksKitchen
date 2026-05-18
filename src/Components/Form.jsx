import { useState } from 'react'
import FormInput from './FormInput';
import Button from './Button';


const Form = ({ title, fields, buttonText, onSubmit, extras, className = "" }) => {

    const [formData, setFormData] = useState({})

    const handleChange = (e) => {
        setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className={`w-full flex flex-col justify-center gap-3 ${className}`}
        >
            <h1 className='text-center text-2xl leading-8.5 font-semibold font-inter'>{title}</h1>

            {fields.map((field) => (
                <FormInput
                    key={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    label={field.label}
                    name={field.name}
                    icon={field.icon}
                    className='focus-bg-white'
                    onChange={handleChange}
                />
            ))}

            <div className='flex'>
                {extras && extras}
            </div>

            <Button
                text={buttonText}
                type='submit'
                className='w-full py-3 bg-orange-500 text-white font-normal!'
            />
        </form>
    )
}

export default Form
