import { useState, useRef, useEffect } from "react"
import ChuksName from "./ChuksName"
import Button from "./Button"
import { NavLink, useNavigate } from "react-router-dom"
import { Menu, X, LogOut, User } from 'lucide-react';
import useAuth from "../hooks/useAuth";
import { logOut } from "../services/auth";


const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [profileOpen, setProfileOpen] = useState(false);
    const profileRef = useRef(null);
    const { user } = useAuth();
    const navigate = useNavigate();

    const linkStyle = "hover:text-orange-500";
    const activeLinkStyle = `${linkStyle} text-orange-400`

    // Close profile popup when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (profileRef.current && !profileRef.current.contains(e.target)) {
                setProfileOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleLogout = async () => {
        await logOut();
        setProfileOpen(false);
        navigate("/signin");
    };

    return (
        <header
            className='fixed h-15 w-full bg-white! flex items-center py-4.5 px-5 md:px-12 shadow-md z-50'
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

                {/* Avatar or Login button */}
                <div className="ml-auto relative" ref={profileRef}>
                    {user ? (
                        <>
                            {/* Avatar button */}
                            <button onClick={() => setProfileOpen(prev => !prev)}>
                                <img
                                    src={user.photoURL || `https://api.dicebear.com/10.x/initials/svg?seed=${user.displayName || user.email}`}
                                    alt="profile"
                                    className="w-9 h-9 rounded-full border-2 border-orange-400 cursor-pointer hover:opacity-80"
                                />
                            </button>

                            {/* Profile popup */}
                            {profileOpen && (
                                <div className="absolute right-0 top-12 w-64 bg-white rounded-xl shadow-lg border border-gray-100 p-4 z-50 flex flex-col gap-3">
                                    {/* User info */}
                                    <div className="flex items-center gap-3">
                                        <img
                                            src={user.photoURL || `https://api.dicebear.com/10.x/initials/svg?seed=${user.displayName || user.email}`}
                                            alt="profile"
                                            className="w-12 h-12 rounded-full border-2 border-orange-400"
                                        />
                                        <div className="flex flex-col">
                                            <p className="font-semibold text-sm text-gray-800">{user.displayName}</p>
                                            <p className="text-xs text-gray-500 break-all">{user.email}</p>
                                        </div>
                                    </div>

                                    {/* horizontal rule */}
                                    <hr className="border-gray-100" />

                                    {/* Profile link */}
                                    <button
                                        onClick={() => { navigate("/myaccount"); setProfileOpen(false); }}
                                        className="flex items-center gap-2 text-sm text-gray-700 hover:text-orange-500 cursor-pointer"
                                    >
                                        <User size={16} />
                                        View Profile
                                    </button>

                                    {/* Logout */}
                                    <button
                                        onClick={handleLogout}
                                        className="flex items-center gap-2 text-sm text-red-500 hover:text-red-600 cursor-pointer"
                                    >
                                        <LogOut size={16} />
                                        Sign out
                                    </button>
                                </div>
                            )}
                        </>
                    ) : (
                        <Button
                            text="Login"
                            className="bg-orange-500 text-white py-1.5!"
                            onClick={() => navigate("/signin")}
                        />
                    )}
                </div>

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

                    {/* Mobile avatar or login */}
                    {user ? (
                        <div className="flex items-center gap-3 w-full pt-2 border-t border-gray-100">
                            <img
                                src={user.photoURL || `https://api.dicebear.com/10.x/initials/svg?seed=${user.displayName || user.email}`}
                                alt="profile"
                                className="w-9 h-9 rounded-full border-2 border-orange-400"
                            />
                            <div className="flex flex-col flex-1">
                                <p className="font-semibold text-sm">{user.displayName}</p>
                                <p className="text-xs text-gray-500">{user.email}</p>
                            </div>
                            <button onClick={handleLogout}>
                                <LogOut size={18} className="text-red-500" />
                            </button>
                        </div>
                    ) : (
                        <Button
                            text="Login"
                            className="bg-orange-500 text-white py-1.5! w-30"
                            onClick={() => { navigate("/signin"); setMenuOpen(false); }}
                        />
                    )}
                </nav>
            )}
        </header>
    )
}

export default Header
