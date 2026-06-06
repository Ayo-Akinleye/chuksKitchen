import mealImages from "../data/mealImages";
import { Plus } from "lucide-react";
import FoodCardFull from "./FoodCardFull";
import useMeals from "../hooks/useMeals";
import useCart from "../hooks/useCart";

const FoodCategory = ({ sectionTitle, category, ids, display = "full" }) => {
    const { meals, loading } = useMeals(category, ids);
    const { addToCart } = useCart();

    if (loading) return <p className="px-12 py-4 text-gray-400">Loading {sectionTitle}...</p>;

    return (
        <section className="flex flex-col bg-gray-100 pb-5 px-12 gap-6">
            <h1 className="font-bold text-3xl text-[#1F2937]">{sectionTitle}</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                {meals.map(meal => {
                    console.log("meal id:", meal.id);
                    console.log("meal.image raw value:", JSON.stringify(meal.image)); // JSON.stringify reveals hidden spaces
                    console.log("mapped result:", mealImages[meal.image]);
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