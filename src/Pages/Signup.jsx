import WelcomeImageDiv from "../Components/WelcomeImageDiv";
import Form from "../Components/Form";
import ChuksName from "../Components/ChuksName";
import { Mail, LockKeyhole, Phone } from "lucide-react"
import Button from "../Components/Button";
import { Link } from "react-router-dom";


const Signup = () => {
    const signupFields = [
        { icon: Mail, name: "email", type: "email", label: "Email address", placeholder: "name@gmail.com" },
        { icon: Phone, name: "phonenumber", type: "number", label: "Phone number", placeholder: "8123340690" },
        { icon: LockKeyhole, name: "password", type: "password", label: "Password", placeholder: "********" },
        { icon: LockKeyhole, name: "confirmpassword", type: "password", label: "Confirm password", placeholder: "********" }
    ]

    return (
        <section className='h-full grid grid-cols-1 md:grid-cols-2'>
            {/* Image Container */}
            <WelcomeImageDiv />

            {/* Sign up section */}
            <div className="flex flex-col m-auto items-center justify-center">
                <ChuksName />
                <Form
                    title="Create Your Account"
                    fields={signupFields}
                    extras={<p>I agree to the Terms & Conditions and Privacy Policy</p>}
                    buttonText="Continue"
                />
                <p className="text-sm">Or Continue with</p>
                <Button text="Continue with Google" className="" />
                <Button text="Continue with Apple" />
                <span className="flex gap-1 text-sm">
                    <p>Already have an account?</p>
                    <Link to="/signin" className="text-blue-400 cursor-pointer">Sign in</Link>
                </span>
            </div>
        </section>
    )
}

export default Signup
