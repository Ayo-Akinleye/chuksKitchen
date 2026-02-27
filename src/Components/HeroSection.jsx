import HeroImage from '../assets/hero-image.png'

const HeroSection = ({ overlay = false, content }) => {
    return (
        <section className='h-187.5 relative'>
            <img
                src={HeroImage}
                alt='Hero Image'
                className='w-full h-full object-cover '
            />
            {overlay && <div className='h-187.5 absolute inset-0 bg-black opacity-50' />}
            {overlay && <div className='h-75.5 absolute inset-0 flex flex-col top-91.25 left-12 text-white gap-10.5 px-12'>{content}</div>}
        </section>
    )
}

export default HeroSection
