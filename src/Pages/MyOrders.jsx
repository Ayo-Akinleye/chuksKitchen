import Header from "../Components/Header";
import { useNavigate } from "react-router-dom";
import Button from "../Components/Button";

const MyOrders = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Header />
      <section className="min-h-screen flex items-center justify-center">
        <div>
          <h2>My Cart</h2>
          <div></div>
        </div>

        {/* no item in cart */}
        <div className="flex flex-col justify-center items-center gap-2">
          <h2 className="flex flex-row items-center justify-center text-xl">Your cart is empty. </h2>
          <Button
            type="submit"
            text="Go to Home"
            className="p-2 bg-orange-500 text-white w-fit"
            onClick={() => navigate("/homepage")}
          />
        </div>

      </section>
    </div>
  )
}

export default MyOrders
