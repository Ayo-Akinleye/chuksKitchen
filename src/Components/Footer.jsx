import ChuksName from "./ChuksName"
import ArrowImage from "../assets/arrow-icon.png"

const Footer = () => {
    return (
        <div className='flex flex-col h-auto bg-[#724330] text-white pt-10 pb-7 gap-1 text-center md:text-start'>

            {/* main footer info */}
            <div className='w-full h-auto flex flex-col md:flex-row px-27.5 justify-between'>
                <div className='h-auto'>
                    <ChuksName className="text-center text-3xl! md:text-[40px]!" />
                    <p className='font-jost hidden lg:block text-[24px] leading-9 w-60'>Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.</p>
                </div>

                {/* Quick link */}
                <div className="hidden lg:block">
                    <h1 className='font-jost text-[24px] leading-9 mb-1'>Quick Links</h1>
                    <ul className='font-poppins text-xs opacity-75 leading-5 space-y-4 '>
                        <li>Home</li>
                        <li>Explore</li>
                        <li>My Order</li>
                        <li>Account</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Contact us */}
                <div className="flex flex-col mb-2">
                    <h1 className='font-jost text-[24px] leading-9 mb-1'>Contact Us</h1>
                    <span className='font-poppins text-xs opacity-75 leading-5 space-y-4 '>
                        <p className='opacity-75'>+234 801 234 5678</p>
                        <p className='opacity-75'>hello@chukskitchen.com</p>
                        <p className='opacity-75'>123 Taste Blvd, Lagos, Nigeria</p>
                    </span>
                </div>

                <ul className='text-white font-poppins text-xs opacity-75 leading-5 space-y-4'>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                    <li>Instagram</li>
                </ul>
            </div>

            {/* Copyright info */}
            <div className='flex px-27.5 opacity-75 h-21 items-center gap-2 justify-between'>
                <p>© 2026 Joy-in-tech. All rights reserved.</p>
                <a href="#">
                    <img src={ArrowImage} alt="Scroll to top" className="w-10 cursor-pointer" />
                </a>
            </div>
        </div>
    )
}

export default Footer
