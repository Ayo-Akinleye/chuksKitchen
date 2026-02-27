
const Button = ({ text, type = "button", onClick, className = "", icon }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`py-2 px-5 border-black rounded-lg cursor-pointer font-semibold ${className}`}
        >
            {icon && <img src={icon} alt="" className="w-5 h-5" />}
            {text}
        </button>
    )
}

export default Button
