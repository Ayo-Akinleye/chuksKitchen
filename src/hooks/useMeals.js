import { useState, useEffect } from "react";
import { getMeals, getMealsByCategory, getMealsByIds } from "../services/meals";

const useMeals = (category = null, ids = null) => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                let data;
                if (ids) {
                    data = await getMealsByIds(ids);
                } else if (category) {
                    data = await getMealsByCategory(category);
                } else {
                    data = await getMeals();
                }
                console.log("meals fetched:", data);
                setMeals(data);
            } catch (err) {
                console.log("meals error:", err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchMeals();
    }, [category, ids]);

    return { meals, loading, error };
};

export default useMeals;