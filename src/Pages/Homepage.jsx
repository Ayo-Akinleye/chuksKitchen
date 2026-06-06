import HeroSection from '../Components/HeroSection'
import Button from '../Components/Button'
import PopularCategory from '../Components/PopularCategory'
import AdditionalSection from '../Components/AdditionalSection'
import AdditionalImage from '../assets/jollof-2.png'
import { useNavigate } from 'react-router-dom'
import FoodCategory from '../Components/FoodCategory'
import FoodCardFull from '../Components/FoodCardFull'


const Homepage = () => {
    const navigate = useNavigate();

    return (
        <div className="">
            <HeroSection
                overlay
                content={
                    <>
                        <h1 className="font-bold text-3xl md:text-5xl md:leading-15.25 md:mr-5">The Heart of Nigerian Home Cooking</h1>
                        <p className="lg:font-bold text-lg md:text-3xl" >Handcrafted with passion, delivered with care.</p>
                        <Button
                            text="Discover what's new"
                            onClick={() => navigate('/explore')}
                            className="bg-orange-500 text-white w-53.75 font-medium!"
                        />
                    </>
                }
            />

            {/* second section */}
            <PopularCategory
                sectionTitle="Popular Categories"
            />

            {/* 3rd section */}
            <FoodCategory
                sectionTitle="Chef's Special"
                ids={["jollof-rice-and-smoked-chicken", "tilapia-pepper-soup", "egusi-soup-and-pounded-yam"]}
            // display="minimal"
            />

            {/* last section */}
            <AdditionalSection
                src={AdditionalImage}
                overlay
                content={
                    <div className='flex flex-col justify-center my-auto px-5 md:px-12 gap-6'>
                        <h1 className='font-bold text-3xl md:text-5xl' >Introducing Our New Menu Additions!</h1>
                        <p className='font-semibold text:lg lg:text-2xl lg:w-180'>Explore exciting new dishes, crafted with the freshest ingredients and authentic Nigerian flavors. Limited time offer!</p>
                        <Button text="Discover what's new" className='bg-orange-500 w-48 font-medium!' />
                    </div>

                }

            />
        </div>
    )
}

export default Homepage
