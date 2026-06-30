import mealImages from "../data/mealImages";
import { Plus } from "lucide-react";
import FoodCardFull from "./FoodCardFull";
import useMeals from "../hooks/useMeals";
import useCart from "../hooks/useCart";

const FoodCategory = ({ sectionTitle, category, ids, display = "full", className = " " }) => {
    const { meals, loading } = useMeals(category, ids);
    const { addToCart } = useCart();

    if (loading) return <p className="px-12 py-4 text-gray-400">Loading {sectionTitle}...</p>;

    return (
        <section className={`flex flex-col bg-gray-100 py-34.25 px-5 md:px-12 gap-8 justify-center items-center ${className}`}>
            <h1 className='font-bold text-3xl text-[#1F2937]'>{sectionTitle}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 w-full">
                {meals.map(meal => {
                    return (
                        <FoodCardFull
                            key={meal.id}
                            src={mealImages[meal.image]}
                            title={meal.name}
                            desc={display === 'full' ? meal.description : undefined}
                            price={display === 'full' ? `₦${(meal.price || 0).toLocaleString()}` : undefined}
                            plusButton={display === 'full' ? <Plus className="text-white" /> : undefined}
                            onAdd={() => addToCart(meal)}

                        />

                    )

                })}
            </div>
        </section>
    );
};

export default FoodCategory;