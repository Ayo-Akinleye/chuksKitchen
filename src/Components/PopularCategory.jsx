import FoodCard from "./FoodCard";
import FoodImageOne from '../assets/jollof-1.png'
import FoodImageTwo from '../assets/swallow-6.png'
import FoodImageThree from '../assets/grill-1.png'
import FoodImageFour from '../assets/sweet-treat-1.png'

const PopularCategory = ({ sectionTitle, className = "" }) => {
    return (
        <section className="flex flex-col bg-gray-100 py-34.25 px-5 md:px-12 gap-8 items-center justify-center">
            <h1 className={`font-bold text-3xl text-[#1F2937] ${className}`}>{sectionTitle}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                <FoodCard
                    src={FoodImageOne}
                    desc="Jollof Delights"
                />

                <FoodCard
                    src={FoodImageTwo}
                    desc="Swallow & Soups"
                />

                <FoodCard
                    src={FoodImageThree}
                    desc="Grills & BBQ"
                />

                <FoodCard
                    src={FoodImageFour}
                    desc="Sweet Treats"
                />

            </div>
        </section>
    )
}

export default PopularCategory
