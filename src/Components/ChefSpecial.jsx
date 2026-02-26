import FoodCardFull from "./FoodCardFull"
import ChefSpecialOne from '../assets/chefSpecial1.png'
import ChefSpecialTwo from '../assets/chefSpecial2.png'
import ChefSpecialThree from '../assets/chefSpecial3.png'
import ChefSpecialFour from '../assets/chefSpecial4.png'


const ChefSpecial = () => {
    return (
        <section className="flex flex-col bg-gray-100 py-34.25 px-12 gap-8 items-center justify-center">
            <h1 className="font-bold text-3xl my-6 text-[#1F2937] text-center">Chef's Specials</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                <FoodCardFull
                    src={ChefSpecialOne}
                    title="Spicy Tilapia Pepper Soup"
                    desc="A comforting and spicy soup with tender tilapia fish, a true Nigerian delicacy."
                    price="₦3,500"
                    buttonText="Add to cart"
                />

                <FoodCardFull
                    src={ChefSpecialTwo}
                    title="Jollof Rice & Fried Chicken"
                    desc="Our signature Jollof rice, cooked to perfection, served with succulent fried chicken."
                    price="₦3,500"
                    buttonText="Add to cart"
                />

                <FoodCardFull
                    src={ChefSpecialTwo}
                    title="Jollof Rice & Fried Chicken"
                    desc="Our signature Jollof rice, cooked to perfection, served with succulent fried chicken."
                    price="₦3,500"
                    buttonText="Add to cart"
                />

                <FoodCardFull
                    src={ChefSpecialTwo}
                    title="Jollof Rice & Smoked Chicken"
                    desc="Our signature Jollof rice, cooked to perfection, served with succulent fried chicken."
                    price="₦3,500"
                    buttonText="Add to cart"
                />

                <FoodCardFull
                    src={ChefSpecialThree}
                    title="Jollof Rice & Fried Chicken"
                    desc="Our signature Jollof rice, cooked to perfection, served with succulent fried chicken."
                    price="₦3,500"
                    buttonText="Add to cart"
                />

                <FoodCardFull
                    src={ChefSpecialFour}
                    title="Egusi Soup & Pounded Yam"
                    desc="Rich and savory Egusi soup with assorted meats, paired with freshly pounded yam."
                    price="₦3,500"
                    buttonText="Add to cart"
                />

            </div>
        </section>
    )
}

export default ChefSpecial
