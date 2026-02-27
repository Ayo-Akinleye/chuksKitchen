import Header from '../Components/Header'
import HeroSection from '../Components/HeroSection'
import Button from '../Components/Button'
import FoodCategoryOne from '../Components/FoodCategoryOne'
import FoodCategoryTwo from '../Components/FoodCategoryTwo'
import AdditionalSection from '../Components/AdditionalSection'
import AdditionalImage from '../assets/chefSpecial2.png'


const Homepage = () => {
    return (
        <div className="">
            <Header />
            <HeroSection
                overlay
                content={
                    <>
                        <h1 className="font-bold text-5xl leading-15.25 mr-5">The Heart of Nigerian Home<br />Cooking</h1>
                        <p className="font-bold text-3xl" >Handcrafted with passion, delivered with care.</p>
                        <Button text="Discover what's new" className="bg-orange-500 text-white w-53.75 font-medium!" />
                    </>
                }
            />
            {/* second section */}
            <FoodCategoryOne
                sectionTitle="Popular Categories"
            />

            {/* third section */}
            <FoodCategoryTwo
                sectionTitle="Chef's Special"
            />

            {/* last section */}
            <AdditionalSection
                src={AdditionalImage}
                overlay
                content={
                    <div className='flex flex-col justify-center my-auto px-12 gap-6'>
                        <h1 className='font-bold text-5xl' >Introducing Our New Menu Additions!</h1>
                        <p className='font-semibold text-2xl w-180'>Explore exciting new dishes, crafted with the freshest ingredients and authentic Nigerian flavors. Limited time offer!</p>
                        <Button text="Discover what's new" className='bg-orange-500 w-48 font-medium!' />
                    </div>

                }

            />
        </div>
    )
}

export default Homepage
