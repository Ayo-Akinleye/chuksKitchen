import { useState } from "react"

const categories = [
    { label: 'Popular', href: '#Popular' },
    { label: 'Jollof Rice & Entrees', href: "#Jollof" },
    { label: 'Swallow & Soups', href: '#Swallow' },
    { label: 'Grills  Sides', href: '' },
    { label: 'Beverages', href: '' },
    { label: 'Desserts', href: '' }
]


const MenuCategory = () => {
    const [active, SetActive] = useState('Popular');

    const baseStyles = 'cursor-pointer';

    const hoverStyles = 'hover:bg-orange-200 hover:border-l-4 hover:border-l-orange-500 cursor-pointer';
    const activeStyles = 'bg-orange-200 border-l-4 border-l-orange-500';

    return (
        <div className='bg-white flex flex-col gap-4 rounded-t-lg m-12 py-7 text-2xl'>
            <h1 className='font-semibold ml-4'>Menu Categories</h1>
            <ul className='font-medium flex flex-col gap-2.5'>
                {categories.map((category) => (
                    <li
                        key={category.label}
                        className={` ${baseStyles} ${active === category.label ? activeStyles : hoverStyles} `}
                        onClick={() => SetActive(category.label)}
                    >
                        <a href={category.href} className="ml-4">{category.label}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default MenuCategory
