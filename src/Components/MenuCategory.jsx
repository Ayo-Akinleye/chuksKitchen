
const MenuCategory = () => {
    return (
        <div className='bg-white flex flex-col gap-4 rounded-t-lg m-12 py-7 text-2xl'>
            <h1 className='font-semibold ml-4'>Menu Categories</h1>
            <ul className='font-medium flex flex-col gap-2.5'>
                <li className='hover:bg-orange-200 hover:border-l-4 hover:border-l-orange-500 cursor-pointer'>
                    <a href='#Popular' className='ml-4'>Popular</a>
                </li>
                <li className='hover:bg-orange-200 hover:border-l-4 hover:border-l-orange-500 cursor-pointer'>
                    <a href="#Jollof" className='ml-4'>Jollof Rice & Entrees</a>
                </li>
                <li className='hover:bg-orange-200 hover:border-l-4 hover:border-l-orange-500 cursor-pointer'>
                    <a href="#Swallow" className='ml-4'>Swallow & Soups</a>
                </li>
                <li className='hover:bg-orange-200 hover:border-l-4 hover:border-l-orange-500 cursor-pointer'>
                    <a href="" className='ml-4'>Grills & sides</a>
                </li>
                <li className='hover:bg-orange-200 hover:border-l-4 hover:border-l-orange-500 cursor-pointer'>
                    <a href="" className='ml-4'>Beverages</a>
                </li>
                <li className='hover:bg-orange-200 hover:border-l-4 hover:border-l-orange-500 cursor-pointer'>
                    <a href="" className='ml-4'>Desserts</a>
                </li>
            </ul>
        </div>
    )
}

export default MenuCategory
