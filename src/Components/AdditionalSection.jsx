import Button from "./Button"

const AdditionalSection = ({ src,mobileSrc, overlay = false, content }) => {
    return (
        <section className="flex h-152.5 relative">
            <picture className="block w-full h-full">
                <source media="(max-width: 1023px)" srcSet={mobileSrc} />
                <source media="(min-width: 1024px)" srcSet={src} />
                <img src={src} alt='background image' className='w-full h-full object-cover' />
            </picture>
        
            {overlay && <div className='absolute inset-0 bg-black opacity-50' />}
            {overlay && <div className='absolute inset-0 flex flex-col text-white'>{content}</div>}

        </section>
    )
}

export default AdditionalSection
