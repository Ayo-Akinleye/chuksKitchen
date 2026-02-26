import Header from '../Components/Header'
import HeroSection from '../Components/HeroSection'
import Button from '../Components/Button'
import PopularCategory from '../Components/PopularCategory'
import ChefSpecial from '../Components/ChefSpecial'

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
            <PopularCategory />

            {/* third section */}
            <ChefSpecial />
        </div>
    )
}

export default Homepage
