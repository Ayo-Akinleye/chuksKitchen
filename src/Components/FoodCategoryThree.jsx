import FoodCardFull from "./FoodCardFull";
import PopularImageOne from '../assets/chefSpecial2.png'
import PopularImageTwo from '../assets/foodImage5.png'
import PopularImageThree from '../assets/foodImage6.png'
import PopularImageFour from '../assets/foodImage7.png'
import PopularImageFive from '../assets/foodImage8.png'
import { Plus } from "lucide-react"

const FoodCategoryThree = ({ sectionTitle, className = "" }) => {
    return (
        <section className="flex flex-col bg-gray-100 pb-5 px-12 gap-6">
            <h1 className={`font-bold text-3xl text-[#1F2937] ${className}`}>{sectionTitle}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

                <FoodCardFull
                    src={PopularImageOne}
                    title="Jollof Rice & Fried Chicken"
                    desc="Our signature Jollof rice, served with crispy fried chicken and plantain."
                    price="₦3,500"
                    plusButton={<Plus className="text-white" />}
                />

                <FoodCardFull
                    src={PopularImageTwo}
                    title="Eba & Equsi Soup (Goat Meat)"
                    desc="Hearty Egusi soup with tender goat meat, served with soft Eba."
                    price="₦3,500"
                    plusButton={<Plus className="text-white" />}
                />

                <FoodCardFull
                    src={PopularImageThree}
                    title="Pounded Yam & Edikaikong"
                    desc="Traditional pounded yam with rich, eaf Edikaikong soup."
                    price="₦3,800"
                    plusButton={<Plus className="text-white" />}
                />

                <FoodCardFull
                    src={PopularImageFour}
                    title="Peppered Snail"
                    desc="Spicy and savory peppered snail, perfect as a starter."
                    price="₦2,500"
                    plusButton={<Plus className="text-white" />}
                />

                <FoodCardFull
                    src={PopularImageFive}
                    title="Grilled Tilapia Fish"
                    desc="Whole grilled tilapia seasoned with our special spices."
                    price="₦4,500"
                    plusButton={<Plus className="text-white" />}
                />

                <FoodCardFull
                    src={PopularImageOne}
                    title="Jollof Rice & Fried Chicken"
                    desc="Our signature Jollof rice, served with crispy fried chicken and plantain."
                    price="₦3,500"
                    plusButton={<Plus className="text-white" />}
                />

            </div>
        </section>
    )
}

export default FoodCategoryThree
