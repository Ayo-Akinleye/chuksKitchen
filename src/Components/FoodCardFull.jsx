import Button from "./Button"

const FoodCardFull = ({
    className = "",
    src,
    title,
    desc,
    price,
    buttonText = "Add to cart",
    addedText = "Added to cart",
    plusButton,
    checkIcon,
    isAdded = false,
    onAdd,
}) => {
    return (
        <div className={`flex flex-col bg-white max-w-85 w-full rounded-lg items-center ${className}`}>
            {src && (
                <img src={src} alt={title || "Food image"} className="rounded-lg object-cover h-[50%] w-full" />
            )}

            {/* details */}
            <div className="flex flex-col p-4 gap-1 items-start justify-between flex-1">
                {/* food name */}
                {title && <h1 className='font-semibold text-2xl text-[#1F2937]'>{title}</h1>}

                {/* food description */}
                {desc && <p className='font-medium text-[16px] mb-8 text-[#1F2937]'>{desc}</p>}

                {(price || plusButton || buttonText) && (
                    <div className="w-full flex justify-between items-center mt-auto">
                        {price && <p className="font-medium text-[16px] text-orange-500">{price}</p>}

                        {plusButton && (
                            <span
                                className={`rounded-xl cursor-pointer transition-colors ${
                                    isAdded ? "bg-green-600" : "bg-orange-500"
                                }`}
                                onClick={onAdd}
                            >
                                {isAdded ? (checkIcon || "✓") : plusButton}
                            </span>
                        )}

                        {buttonText && !plusButton && (
                            <Button
                                text={isAdded ? addedText : buttonText}
                                onClick={onAdd}
                                className={`font-medium! text-white transition-colors ${
                                    isAdded ? "bg-green-600!" : "bg-orange-500!"
                                }`}
                            />
                        )}
                    </div>
                )}
            </div>
        </div>
    )
}

export default FoodCardFull
