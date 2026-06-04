import { useState, useEffect } from "react";
import { subscribeToCart, addToCart, updateQuantity, removeFromCart } from "../services/cart";
import useAuth from "./useAuth";

const useCart = () => {
    const { user } = useAuth();
    const [cart, setCart] = useState([]);

    useEffect(() => {
        if (!user) return;

        const unsubscribe = subscribeToCart(user.uid, (items) => {
            setCart(items);
        });

        return () => {
            unsubscribe();
            setCart([]);
        };
    }, [user]);

    const handleAddToCart = (meal) => {
        if (!user) return;
        addToCart(user.uid, meal);
    };

    const handleUpdateQuantity = (mealId, quantity) => {
        if (!user) return;
        updateQuantity(user.uid, mealId, quantity);
    };

    const handleRemoveFromCart = (mealId) => {
        if (!user) return;
        removeFromCart(user.uid, mealId);
    };

    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    return {
        cart,
        totalItems,
        totalPrice,
        addToCart: handleAddToCart,
        updateQuantity: handleUpdateQuantity,
        removeFromCart: handleRemoveFromCart
    };
};

export default useCart;