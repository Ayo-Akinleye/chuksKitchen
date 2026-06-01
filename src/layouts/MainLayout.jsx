import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const MainLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex flex-1 flex-col pt-15">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}
export default MainLayout