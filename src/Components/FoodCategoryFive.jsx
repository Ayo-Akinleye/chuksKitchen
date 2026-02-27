import { Plus } from "lucide-react"
import FoodCardFull from "./FoodCardFull"
import SwallowImageOne from '../assets/swallowImage.png'
import SwallowImageTwo from '../assets/bg-image.png'

const FoodCategoryFive = ({ sectionTitle }) => {
    return (
        <section className='flex flex-col bg-gray-100 pb-10 px-12 gap-6'>
            <h1 className="font-bold text-3xl text-[#1F2937]">{sectionTitle}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

                <FoodCardFull
                    src={SwallowImageOne}
                    title="Amala with Gbegiri & Ewedu"
                    desc="Classic Amala served with Gbegiri (beans) and Ewedu (jute leaf) soup."
                    price="₦3,100"
                    plusButton={<Plus className="text-white" />}
                />

                <FoodCardFull
                    src={SwallowImageTwo}
                    title="Fufu & Okra Soup (Fish)"
                    desc="Light Fufu served with fresh okra soup and tilapia fish."
                    price="₦3,300"
                    plusButton={<Plus className="text-white" />}
                />

                <FoodCardFull
                    src={SwallowImageTwo}
                    title="Fufu & Okra Soup (Fish)"
                    desc="Light Fufu served with fresh okra soup and tilapia fish."
                    price="₦3,300"
                    plusButton={<Plus className="text-white" />}
                />
            </div>
        </section>
    )
}

export default FoodCategoryFive
