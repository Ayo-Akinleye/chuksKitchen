import { doc, setDoc, deleteDoc, onSnapshot, collection } from "firebase/firestore";
import { db } from "../firebase";

// Add or update a meal in cart
export const addToCart = async (userId, meal) => {
    const cartRef = doc(db, "users", userId, "cart", meal.id);
    await setDoc(cartRef, {
        id: meal.id,
        name: meal.name,
        price: meal.price,
        image: meal.image,
        quantity: meal.quantity || 1
    });
};

// Increase or decrease quantity
export const updateQuantity = async (userId, mealId, quantity) => {
    if (quantity <= 0) {
        await removeFromCart(userId, mealId);
        return;
    }
    const cartRef = doc(db, "users", userId, "cart", mealId);
    await setDoc(cartRef, { quantity }, { merge: true });
};

// Remove a meal from cart
export const removeFromCart = async (userId, mealId) => {
    await deleteDoc(doc(db, "users", userId, "cart", mealId));
};

// Listen to cart in real time
export const subscribeToCart = (userId, callback) => {
    const cartRef = collection(db, "users", userId, "cart");
    return onSnapshot(cartRef, (snapshot) => {
        const items = snapshot.docs.map(doc => doc.data());
        callback(items);
    });
};