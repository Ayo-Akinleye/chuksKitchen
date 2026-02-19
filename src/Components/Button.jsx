
const Button = ({ text, type = "button", onClick, className = "" }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`py-2 px-5 border-black rounded-lg cursor-pointer font-semibold ${className}`}
        >
            {text}
        </button>
    )
}

export default Button
