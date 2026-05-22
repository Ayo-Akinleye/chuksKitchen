import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const Layout = () => {
    return (
        <div className="flex flex-col">
            <main className="flex-1 min-h-screen">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default Layout
