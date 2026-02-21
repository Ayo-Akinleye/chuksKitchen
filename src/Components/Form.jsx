import FormInput from './FormInput';
import Button from './Button';
import { useNavigate } from 'react-router-dom'


const Form = ({ title, fields, buttonText, onSubmit, extras, className = "" }) => {

    const Navigate = useNavigate();

    const handleSubmit = () => {

        Navigate("/homepage")
    }

    return (
        <form onSubmit={onSubmit} className={`w-full flex flex-col gap-3 ${className}`}>
            <h1 className='text-center text-2xl leading-8.5 font-medium font-inter'>{title}</h1>

            {fields.map((field) => (
                <FormInput
                    key={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    label={field.label}
                    name={field.name}
                    icon={field.icon}
                    className='focus-bg-white'
                />
            ))}

            <div className='flex'>
                {extras && extras}
            </div>

            <Button
                text={buttonText}
                type='button'
                className='w-full py-3 bg-orange-500 text-white font-normal!'
                onClick={handleSubmit}
            />
        </form>
    )
}

export default Form
