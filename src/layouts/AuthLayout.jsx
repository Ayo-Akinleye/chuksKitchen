import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const AuthLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex flex-1 flex-col">
                <Outlet />
            </main>
            <Footer/>
        </div>
    )
}

export default AuthLayout
