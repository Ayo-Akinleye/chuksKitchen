import WelcomeImageDiv from "../Components/WelcomeImageDiv";
import Form from "../Components/Form";
import ChuksName from "../Components/ChuksName";
import { Mail, LockKeyhole } from "lucide-react"
import Button from "../Components/Button";
import { Link } from "react-router-dom";


const Signin = () => {
    const signinFields = [
        { icon: Mail, name: "email", type: "email", label: "Email address", placeholder: "name@gmail.com" },
        { icon: LockKeyhole, name: "password", type: "password", label: "Password", placeholder: "********" },
    ]

    return (
        <section className='h-full grid grid-cols-1 md:grid-cols-2 font-inter bg-gray-100'>
            {/* Image Container */}
            <WelcomeImageDiv />

            {/* Sign in section */}
            <div className="flex justify-center items-center">
                <div className="flex flex-col w-95 p-2.5 mt-10 items-center justify-center gap-1">
                    <ChuksName />
                    <Form
                        title="Login Your Account"
                        fields={signinFields}
                        extras={<p className="text-sm text-blue-400 cursor-pointer ml-auto">Forgot Password?</p>}
                        buttonText="Continue"
                        className="mb-1"
                    />
                    <p className="text-xs">Or Continue with</p>
                    <Button text="Continue with Google" className="w-full font-normal! py-3 bg-white border border-gray-300 text-sm mt-3 mb-2" />
                    <Button text="Continue with Apple" className="w-full font-normal! py-3 bg-white border border-gray-300 text-sm my-2" />
                    <span className="flex gap-1 text-xs">
                        <p>Don't have an account?</p>
                        <Link to="/signup" className="text-blue-400 cursor-pointer">Create an account</Link>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Signin
