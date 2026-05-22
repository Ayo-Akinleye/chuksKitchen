import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer";

const Layout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <main className="flex flex-1 flex-col">
                <Outlet />
            </main>
            <Footer className="flex flex-1" />
        </div>
    )
}

export default Layout
