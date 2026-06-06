import Button from "./Button"

const FoodCardFull = ({ className = "", src, title, desc, price, buttonText, plusButton, onAdd }) => {
    return (
        <div className={`flex flex-col bg-white max-w-85 w-full h-120 rounded-lg ${className}`}>
            {src && (
                <img src={src} alt={title || "Food image"} className="rounded-lg object-cover h-[50%] w-full" />
            )}


            {/* details */}
            <div className="flex flex-col p-4 gap-1 items-start justify-between flex-1">
                {/* food name */}
                {title && <h1 className={`font-semibold text-2xl text-[#1F2937]${className}`}>{title}</h1>}
                
                {/* food description */}
                {desc && <p className={`font-medium text-[16px] mb-8 text-[#1F2937]${className}`}>{desc}</p>}

                {(price || plusButton || buttonText) && (
                    <div className="w-full flex justify-between items-center mt-auto">
                        {price && <p className="font-medium text-[16px] text-orange-500">{price}</p>}

                        {plusButton && (
                            <span
                                className="bg-orange-500 rounded-xl cursor-pointer"
                                onClick={onAdd}
                            >
                                {plusButton}
                            </span>
                        )}

                        {buttonText && <Button text={buttonText} className="bg-orange-500 text-white font-medium!" />}
                    </div>
                )}
            </div>
        </div>
    )
}

export default FoodCardFull
