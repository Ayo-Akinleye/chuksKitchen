import WelcomeImageDiv from "../Components/WelcomeImageDiv";
import Form from "../Components/Form";
import ChuksName from "../Components/ChuksName";
import { Mail, LockKeyhole, Phone } from "lucide-react"
import Button from "../Components/Button";
import { Link } from "react-router-dom";
import CheckInput from "../Components/checkInput";


const Signup = () => {
    const signupFields = [
        { icon: Mail, name: "email", type: "email", label: "Email", placeholder: "name@gmail.com" },
        { icon: Phone, name: "phonenumber", type: "text", label: "Phone number", placeholder: "8123340690" },
        { icon: LockKeyhole, name: "password", type: "password", label: "Password", placeholder: "********" },
        { icon: LockKeyhole, name: "confirmpassword", type: "password", label: "Confirm password", placeholder: "********" }
    ]

    return (
        <section className='h-full grid grid-cols-1 md:grid-cols-2 font-inter bg-gray-100'>
            {/* Image Container */}
            <WelcomeImageDiv
                overlay
                content={
                    <>
                        <h1 className="font-bold text-4xl">Chuks Kitchen</h1>
                        <p className="w-100 text-center font-medium text-2xl">Your journey to delicious, authentic Nigerian meals starts here. Sign up or log in to order your favorites today!</p>
                    </>
                }
            />

            {/* Sign up section */}
            <div className="flex justify-center items-center">
                <div className="flex flex-col w-95 p-2.5 mt-10 items-center justify-center gap-1">
                    <ChuksName />
                    <Form
                        title="Create Your Account"
                        fields={signupFields}
                        extras={
                            <>
                                <CheckInput />
                                <p className="text-xs">I agree to the
                                    <span className="text-blue-400 cursor-pointer mx-1 font-medium">Terms & Conditions</span>
                                    and
                                    <span className="text-blue-400  cursor-pointer mx-1 font-medium">Privacy Policy</span>
                                </p>
                            </>
                        }
                        buttonText="Continue"
                        className="mb-2"
                    />
                    <p className="text-xs">Or Continue with</p>
                    <Button text="Continue with Google" className="w-full font-normal! py-3 bg-white border border-gray-300 text-sm mt-3 mb-2" />
                    <Button text="Continue with Apple" className="w-full font-normal! py-3 bg-white border border-gray-300 text-sm my-2" />
                    <span className="flex gap-1 text-xs">
                        <p>Already have an account?</p>
                        <Link to="/signin" className="text-blue-400 cursor-pointer">Sign in</Link>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Signup
