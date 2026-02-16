import React from 'react'

const Footer = () => {
    return (
        <div className='flex flex-col w-360 h-112.25 bg-[#724330] text-white px-27.5 py-16.25 gap-8'>

            {/* main footer info */}
            <div className='w-full flex flex-row gap-25.25 '>
                <div className='w-[229.25px] h-[218px]'>
                    <h2 className='font-island text-[#FF7A18] text-[37.02px]'>Chuks Kitchen</h2>
                    <p className='font-jost text-[24px] leading-9'>Bringing the authentic flavors of Nigerian home cooking to your table, with passion and care.</p>
                </div>


                <div>
                    <h1 className='font-jost text-[24px]'>Quick Links</h1>
                    <ul className='font-poppins text-[12px] opacity-75 leading-[20px] '>
                        <li>Home</li>
                        <li>Explore</li>
                        <li>My Order</li>
                        <li>Account</li>
                        <li>Contact</li>
                    </ul>
                </div>

                <div>
                    <h1 className='font-jost text-[24px]'>Contact Us</h1>
                    <p className='opacity-75'>+234 801 234 5678</p>
                    <p className='opacity-75'>hello@chukskitchen.com</p>
                    <p className='opacity-75'>123 Taste Blvd, Lagos, Nigeria</p>
                </div>

                <ul className=' opacity-75'>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>LinkedIn</li>
                    <li>Instagram</li>
                </ul>
            </div>

            {/* Copyright info */}
            <div>
                <p>© 2020 Lift Media. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer
