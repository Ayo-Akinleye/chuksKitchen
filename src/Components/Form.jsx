import Input from './Input';
import Button from './Button';

const Form = ({ title, fields, buttonText, onSubmit, extras, className = "" }) => {
    return (
        <form onSubmit={onSubmit} className={`w-full flex flex-col gap-3 ${className}`}>
            <h1 className='text-center text-[24px] leading-8.5 font-medium font-inter'>{title}</h1>

            {fields.map((field) => (
                <Input
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

            <Button text={buttonText} type='button' className='w-full py-3 bg-orange-500 text-white font-normal!' />
        </form>
    )
}

export default Form
