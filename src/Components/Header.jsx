import ChuksName from "./ChuksName"
import Button from "./Button"

const Header = () => {
    return (
        <header
            className='w-full flex items-center px-5'
        >
            <ChuksName />
            <nav>
                <ul className="flex items-center justify-between gap-2">
                    <li>Home</li>
                    <li>Explore</li>
                    <li>My Orders</li>
                    <li>Account</li>
                    <Button text="Login" />

                </ul>
            </nav>
        </header>
    )
}

export default Header
