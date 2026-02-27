import FoodCardFull from "./FoodCardFull"
import FoodImageOne from '../assets/foodImage9.png'
import FoodImageTwo from '../assets/chefSpecial2.png'
import { Plus } from "lucide-react"


const FoodCategoryFour = ({ sectionTitle }) => {
    return (
        <section className='flex flex-col bg-gray-100 pb-5 px-12 gap-6'>
            <h1 className="font-bold text-3xl text-[#1F2937]">{sectionTitle}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                <FoodCardFull
                    src={FoodImageOne}
                    title="Jollof Rice & Smoked Fish"
                    desc="Flavorful jollof rice served with perfectly smoked fish."
                    price="₦3,500"
                    plusButton={<Plus className="text-white" />}
                />

                <FoodCardFull
                    src={FoodImageTwo}
                    title="Party Jollof Rice (veg)"
                    desc="Vegetarian party jollof, full of rich 
flavors."
                    price="₦2,800"
                    plusButton={<Plus className="text-white" />}
                />

                <FoodCardFull
                    src={FoodImageTwo}
                    title="Party Jollof Rice (Veg)"
                    desc="Vegetarian party jollof, full of rich flavors."
                    price="₦3,500"
                    plusButton={<Plus className="text-white" />}
                />
            </div>
        </section>
    )
}

export default FoodCategoryFour
