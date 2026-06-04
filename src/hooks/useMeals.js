import { useState, useEffect } from "react";
import { getMeals, getMealsByCategory } from "../services/meals";

const useMeals = (category = null) => {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const data = category ? await getMealsByCategory(category) : await getMeals();
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
    }, [category]);

    return { meals, loading, error };
};

export default useMeals;