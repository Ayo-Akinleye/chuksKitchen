
const Input = ({ type, label, name, placeholder, icon: Icon, className = "" }) => {
    return (
        <div className="flex flex-col gap-1 items-start">
            <label
                htmlFor={name}
                className="text-sm text-gray-800"
            >
                {label}
            </label>
            <div className="flex border border-gray-400 text-gray-900 w-full px-5 py-1.5 items-center gap-2 rounded-lg">
                {Icon && <Icon size={18} className="text-gray-800" />}
                <input
                    required
                    type={type}
                    name={name}
                    id={name}
                    placeholder={placeholder}
                    className={`outline-none ${className}`}
                />
            </div>

        </div>
    )
}

export default Input
