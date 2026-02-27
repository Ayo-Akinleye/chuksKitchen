import ChuksName from "./ChuksName"
import ArrowImage from "../assets/arrow-icon.png"

const Footer = () => {
    return (
        <div className='flex flex-col h-112.25 bg-[#724330] text-white  py-16.25 gap-1'>

            {/* main footer info */}
            <div className='w-full h-57.75 flex flex-row px-27.5 gap-25.25'>
                <div className='w-[229.25px] h-54.5'>
                    <ChuksName />
                    <p className='font-jost text-[24px] leading-9'>Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.</p>
                </div>

                {/* Quick link */}
                <div>
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
                <div className="flex flex-col">
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
            <div className='flex px-27.5 opacity-75 h-21 items-center justify-between'>
                <p>© 2026 Joy-in-tech. All rights reserved.</p>
                <a href="#">
                    <img src={ArrowImage} alt="Scroll to top" className="w-10 cursor-pointer" />
                </a>
            </div>
        </div>
    )
}

export default Footer
