import Button from "./Button"

const FoodCardFull = ({ className = "", src, title, desc, price, buttonText, plusButton }) => {
    return (
        <div className={`flex flex-col bg-white w-96 h-120 rounded-lg ${className}`}>
            <img src={src} alt="Image of a plate of food" className="rounded-lg object-cover h-[50%]" />

            {/* details */}
            <div className="flex flex-col p-4.25 gap-1 items-start justify-between">
                <>
                    <h1 className={`font-semibold text-2xl text-[#1F2937]${className}`}>{title}</h1>
                    <p className={`font-medium text-[16px] mb-8 text-[#1F2937]${className}`}>{desc}</p>
                </>

                {/* Price and button div */}
                <div className="w-full flex justify-between items-center mt-auto">
                    <p className="font-medium text-[16px] text-orange-500">{price}</p>
                    {plusButton && <span className="bg-orange-500 rounded-xl cursor-pointer">{plusButton}</span>}
                    {buttonText && <Button text={buttonText} className="bg- orange-500 text-white font-medium!" />}
                </div>
            </div>

        </div>
    )
}

export default FoodCardFull
