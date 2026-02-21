
const FormInput = ({ type, label, name, placeholder, icon: Icon, className = "" }) => {
    return (
        <div className="flex flex-col gap-1 items-start">
            <label
                htmlFor={name}
                className="text-sm font-medium text-gray-700"
            >
                {label}
            </label>

            {/* icon with input */}
            <div
                className="flex border border-gray-400 text-gray-900 w-full px-5 py-2 items-center gap-2 rounded-lg focus-within:border-2 focus-within:border-blue-400"
            >
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

export default FormInput
