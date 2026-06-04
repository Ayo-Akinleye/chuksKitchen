import { collection, getDocs, query, where, doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

// Get all available meals
export const getMeals = async () => {
    const mealsRef = collection(db, "meals");
    const q = query(mealsRef, where("available", "==", true));  // only show available meals
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Get meals by category
export const getMealsByCategory = async (category) => {
    const mealsRef = collection(db, "meals");
    const q = query(mealsRef, where("category", "==", category), where("available", "==", true));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Get a single meal by its document ID
export const getMealById = async (mealId) => {
    const mealRef = doc(db, "meals", mealId);
    const snapshot = await getDoc(mealRef);
    if (snapshot.exists()) {
        return { id: snapshot.id, ...snapshot.data() };
    }
    return null;
};