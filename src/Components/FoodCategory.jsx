import mealImages from "../data/mealImages";
import { Plus } from "lucide-react";
import FoodCardFull from "./FoodCardFull";
import useMeals from "../hooks/useMeals";
import useCart from "../hooks/useCart";

const FoodCategory = ({ sectionTitle, category }) => {
    const { meals, loading } = useMeals(category);
    const { addToCart } = useCart();

    if (loading) return <p className="px-12 py-4 text-gray-400">Loading {sectionTitle}...</p>;

    return (
        <section className="flex flex-col bg-gray-100 pb-5 px-12 gap-6">
            <h1 className="font-bold text-3xl text-[#1F2937]">{sectionTitle}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {meals.map(meal => {
                    console.log("meal.image:", meal.image);    
                    console.log("mapped:", mealImages[meal.image]);
                    return (
                        <FoodCardFull
                            key={meal.id}
                            src={mealImages[meal.image]}
                            title={meal.name}
                            desc={meal.description}
                            price={`₦${(meal.price || 0).toLocaleString()}`}
                            plusButton={<Plus className="text-white" />}
                            onAdd={() => addToCart(meal)}
                        />
                    )
                })}
            </div>
        </section>
    );
};

export default FoodCategory;