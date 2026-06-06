import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";
import useCart from "../hooks/useCart";
import mealImages from "../data/mealImages";
import { Trash2 } from "lucide-react";

const MyOrders = () => {
    const navigate = useNavigate();
    const { cart, totalItems, totalPrice, updateQuantity, removeFromCart } = useCart();

    // Empty cart state
    if (cart.length === 0) {
        return (
            <section className="min-h-screen flex flex-col items-center justify-center gap-4">
                <h2 className="text-2xl font-semibold text-gray-700">Your cart is empty</h2>
                <p className="text-gray-400 text-sm">Add some delicious meals to get started</p>
                <Button
                    text="Explore Menu"
                    className="bg-orange-500 text-white w-fit px-6 py-2"
                    onClick={() => navigate("/explore")}
                />
            </section>
        );
    }

    return (
        <div className="min-h-screen bg-gray-100 px-5 md:px-12 py-10">
            <h1 className="font-bold text-3xl text-[#1F2937] mb-8">My Cart</h1>

            <div className="flex flex-col lg:flex-row gap-8">

                {/* Cart items */}
                <div className="flex flex-col gap-4 flex-1">
                    {cart.map(item => (
                        <div key={item.id} className="flex items-center gap-4 bg-white rounded-xl p-4 shadow-sm">

                            {/* Image */}
                            <img
                                src={mealImages[item.image]}
                                alt={item.name}
                                className="w-20 h-20 rounded-lg object-cover shrink-0"
                            />

                            <div className="flex flex-col flex-1 gap-2 flex-wrap">
                                {/* name + quality control */}
                                <div className="flex flex-col lg:flex-row gap-1 lg:gap-3 items-center">
                                    <p className="font-semibold text-[#1F2937]">{item.name}</p>

                                    <div className="flex items-center gap-2">
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold hover:bg-orange-100 cursor-pointer"
                                        >
                                            -
                                        </button>
                                        <span className="w-6 text-center font-semibold">{item.quantity}</span>
                                        <button
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                            className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center font-bold hover:bg-orange-100 cursor-pointer"
                                        >
                                            +
                                        </button>
                                    </div>
                                </div>


                                {/* subtotal + remove */}
                                <div className="flex items-center gap-3">
                                    {/* Subtotal */}
                                    <p className=" font-medium ml-auto">
                                        ₦{(item.price * item.quantity).toLocaleString()}
                                    </p>

                                    {/* Remove */}
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="text-red-400 hover:text-red-600 cursor-pointer"
                                    >
                                        <Trash2 size={18} />
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>


                {/* Order summary */}
                <div className="bg-white rounded-xl p-6 shadow-sm h-fit w-full lg:w-80 flex flex-col gap-4">
                    <h2 className="font-bold text-xl text-[#1F2937]">Order Summary</h2>

                    <div className="flex justify-between text-sm text-gray-500">
                        <span>Items ({totalItems})</span>
                        <span>₦{totalPrice.toLocaleString()}</span>
                    </div>

                    <div className="flex justify-between text-sm text-gray-500">
                        <span>Delivery fee</span>
                        <span>₦500</span>
                    </div>

                    <hr className="border-gray-100" />

                    <div className="flex justify-between font-bold text-[#1F2937]">
                        <span>Total</span>
                        <span>₦{(totalPrice + 500).toLocaleString()}</span>
                    </div>

                    <Button
                        text="Proceed to Checkout"
                        className="bg-orange-500 text-white w-full py-3 font-medium!"
                    />

                    <button
                        onClick={() => navigate("/explore")}
                        className="text-center text-sm text-orange-500 hover:underline cursor-pointer"
                    >
                        Continue Shopping
                    </button>
                </div>

            </div>
        </div>
    );
};

export default MyOrders;