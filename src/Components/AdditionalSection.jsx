import Button from "./Button"
// import AdditionalImage from '../assets/bg-image.png'

const AdditionalSection = ({ src, overlay = false, content }) => {
    return (
        <section className="flex h-152.5 relative">
            <img
                src={src}
                alt='background image'
                className='w-full h-full object-cover '
            />

            {overlay && <div className='absolute inset-0 bg-black opacity-50' />}
            {overlay && <div className='absolute inset-0 flex flex-col text-white'>{content}</div>}

        </section>
    )
}

export default AdditionalSection
