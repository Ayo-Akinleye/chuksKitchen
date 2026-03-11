import WelcomeImageDiv from '../Components/WelcomeImageDiv';
import ChuksName from '../Components/ChuksName';
import Button from '../Components/Button';
import { Utensils, Van } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    const navigate = useNavigate();

    return (
        <section className='h-full grid grid-cols-1 lg:grid-cols-2'>
            {/* image container */}
            <WelcomeImageDiv />

            <div className='px-5 md:px-18 py-5 font-inter flex flex-col'>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 items-center'>
                    <ChuksName className="order-2 lg:order-1 text-center" />
                    <Button
                        text="Sign in"
                        className='oder-1 lg:order-2 w-30 border-2 border-blue-400 text-blue-400 px-7 font-inter ml-auto'
                        onClick={() => navigate("/signin")}
                    />
                </div>

                <div className='p-3 flex flex-col gap-7 lg:my-24 justify-start'>
                    <div className='flex flex-col gap-1'>
                        <h1 className='font-bold text-[32px] text-gray-800 '>Your Authentic Taste of Nigeria</h1>
                        <p className='font-medium text-base text-gray-800'>Experience homemade flavors delivered fresh to your desk or home. We bring the rich culinary heritage of Nigeria right to your doorstep.</p>
                    </div>

                    <div className='flex flex-wrap flex-col md:flex-row gap-2'>
                        <span className='flex w-full md:w-[calc(50%-4px)] lg:w-[45%] gap-3 items-center rounded-lg bg-gray-100 md:bg-white'>
                            <div className='bg-orange-200 p-2 rounded-lg'>
                                <Utensils className='text-orange-500' /></div>
                            Freshly Prepared
                        </span>

                        <span className='flex w-full md:w-[calc(50%-4px)] lg:w-[45%] gap-3 items-center bg-gray-100 md:bg-white'>
                            <div className='bg-orange-200 p-2 rounded-lg'>
                                <Utensils className='text-orange-500' /></div>
                            Support Local Business
                        </span>

                        <span className='flex w-full md:w-[calc(50%-4px)] lg:w-[45%] gap-3 items-center bg-gray-100 md:bg-white'>
                            <div className='bg-orange-200 p-2 rounded-lg'>
                                <Van className='text-orange-500' /></div>
                            Fast & Reliable Delivery
                        </span>
                    </div>

                    <Button text="Start Your Order" className='bg-orange-500 text-white border-0' onClick={() => navigate("/signin")} />
                    <Button text="Learn More About Us" className='border-2 border-blue-400 text-blue-500' />
                </div>

                <div className='flex flex-col md:flex-row gap-2 font-medium text-sm items-center justify-center mt-auto mb-4'>
                    <p className=''>© 2026 Chuks Kitchen. </p>
                    <span className='text-blue-300'>Privacy Policy</span>
                    <span className='text-blue-300'>Terms of Service</span>
                </div>
            </div>
        </section>
    )
}

export default Welcome
