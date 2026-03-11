import desktopWelcomeImage from "../assets/welcome-image.png";
import mobileWelcomeImage from '../assets/food1.png'

const WelcomeImageDiv = ({ className, overlay = false, content }) => {
    return (
        <div className={`relative h-full ${className}`}>
            <picture className="block w-full h-full">
                <source media="(max-width: 1023px)" srcSet={mobileWelcomeImage} />
                <source media="(min-width: 1024px)" srcSet={desktopWelcomeImage} />
                <img src={desktopWelcomeImage} alt="Welcome image" className='w-full h-full object-cover'/>
            </picture>

            {overlay && <div className="absolute inset-0 bg-orange-500 opacity-50" />}
            {content && <div className="absolute inset-0 flex flex-col top-80 items-center text-white gap-3">{content}</div>}
        </div>
    )
}

export default WelcomeImageDiv

