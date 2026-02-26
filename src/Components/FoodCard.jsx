
const FoodCard = ({ src, desc }) => {
    return (
        <div className="flex flex-col bg-white w-96 h-80 items-center rounded-lg gap-7">
            <img src={src} alt="Image of a plate of food" className="rounded-lg w-full object-cover h-[65%]" />
            <p className="font-semibold text-2xl text-[#1F2937]">{desc}</p>
        </div>
    )
}

export default FoodCard
