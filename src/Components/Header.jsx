import ChuksName from "./ChuksName"
import Button from "./Button"
import { NavLink } from "react-router-dom"

const Header = () => {
    const linkStyle = "hover:text-orange-500";

    return (
        <header
            className='h-15 w-full bg-white! flex items-center py-4.5 px-12 justify-between'
        >
            <ChuksName />
            <nav className="w-full flex flex-1 items-center justify-between px-3 py-2.5 list-none">
                <NavLink to="/homepage"
                    className={({ isActive }) => isActive ? `${linkStyle} text-orange-400` : linkStyle}>
                    Home
                </NavLink>

                <NavLink to="/explore"
                    className={({ isActive }) => isActive ? `${linkStyle} text-orange-400` : linkStyle}>
                    Explore
                </NavLink>

                <NavLink to="/myorders"
                    className={({ isActive }) => isActive ? `${linkStyle} text-orange-400` : linkStyle}>
                    My Orders
                </NavLink>

                <NavLink to="/myaccount"
                    className={({ isActive }) => isActive ? `${linkStyle} text-orange-400` : linkStyle}>
                    Account
                </NavLink>

                <Button text="Login" className="bg-orange-500 text-white py-1.5! ml-auto" />
            </nav>
        </header>
    )
}

export default Header
