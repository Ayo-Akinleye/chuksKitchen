import welcomeImage from "../assets/welcome-image.png";

const WelcomeImageDiv = ({ overlay = false, content }) => {
    return (
        <div className={'relative h-full'}>
            <img
                src={welcomeImage}
                alt="Welcome image"
                className='w-full h-full object-cover'
            />
            {overlay && <div className="absolute inset-0 bg-orange-500 opacity-50" />}
            {content && <div className="absolute inset-0 flex flex-col top-80 items-center text-white gap-3">{content}</div>}
        </div>
    )
}

export default WelcomeImageDiv
