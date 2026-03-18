import { useState } from "react"
import ChuksName from "./ChuksName"
import Button from "./Button"
import { NavLink } from "react-router-dom"
import { Menu, X } from 'lucide-react';


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const linkStyle = "hover:text-orange-500";
    const activeLinkStyle = `${linkStyle} text-orange-400`

    return (
        <header
            className='relative h-15 w-full bg-white! flex items-center py-4.5 px-5 md:px-12'
        >
            <ChuksName className="mr-7" />

            {/* Desktop Nav */}
            <nav className="hidden lg:flex w-full flex-1 items-center justify-center px-3 py-2.5 gap-30 list-none">
                <NavLink to="/homepage"
                    className={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>
                    Home
                </NavLink>

                <NavLink to="/explore"
                    className={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>
                    Explore
                </NavLink>

                <NavLink to="/myorders"
                    className={({ isActive }) => isActive ? activeLinkStyle : linkStyle}>
                    My Orders
                </NavLink>

                <NavLink to="/myaccount"
                    className={({ isActive }) => isActive ? `${linkStyle} text-orange-400` : linkStyle}>
                    Account
                </NavLink>
                <Button text="Login" className="bg-orange-500 text-white py-1.5! ml-auto" />
            </nav>

            {/* menu button and close button */}
            <button
                className="text-orange-500 text-xl lg:hidden ml-auto"
                onClick={() => setMenuOpen(prev => !prev)}
                aria-label="Toggle menu"
            >
                {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Mobile Menu */}
            {menuOpen && (
                <nav className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col items-start gap-4 px-5 py-5 lg:hidden z-50">
                    <NavLink to="/homepage" className={({ isActive }) => isActive ? activeLinkStyle : linkStyle} onClick={() => setMenuOpen(false)}>Home</NavLink>
                    <NavLink to="/explore" className={({ isActive }) => isActive ? activeLinkStyle : linkStyle} onClick={() => setMenuOpen(false)}>Explore</NavLink>
                    <NavLink to="/myorders" className={({ isActive }) => isActive ? activeLinkStyle : linkStyle} onClick={() => setMenuOpen(false)}>My Orders</NavLink>
                    <NavLink to="/myaccount" className={({ isActive }) => isActive ? activeLinkStyle : linkStyle} onClick={() => setMenuOpen(false)}>Account</NavLink>
                    <Button text="Login" className="bg-orange-500 text-white py-1.5! w-30" />
                </nav>
            )}
        </header>
    )
}

export default Header
