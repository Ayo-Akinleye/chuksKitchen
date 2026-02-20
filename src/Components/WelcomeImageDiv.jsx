import welcomeImage from "../assets/welcome-image.png";

const WelcomeImageDiv = () => {
    return (
        <div className='h-full'>
            <img
                src={welcomeImage}
                alt="Welcome image"
                className='w-full h-full object-cover'
            />
        </div>
    )
}

export default WelcomeImageDiv
