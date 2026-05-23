import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signUpWithEmail, signInWithGoogle } from "../services/auth";
import WelcomeImageDiv from "../Components/WelcomeImageDiv";
import Form from "../Components/Form";
import ChuksName from "../Components/ChuksName";
import { Mail, LockKeyhole, Phone } from "lucide-react"
import Button from "../Components/Button";
import { Link } from "react-router-dom";
import CheckInput from "../Components/CheckInput";
import GoogleIcon from "../assets/googleLogo.png";
import AppleIcon from '../assets/appleIcon.png';


const Signup = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const signupFields = [
        { icon: Mail, name: "email", type: "email", label: "Email", placeholder: "name@gmail.com" },
        { icon: Phone, name: "phonenumber", type: "text", label: "Phone number", placeholder: "8123340690" },
        { icon: LockKeyhole, name: "password", type: "password", label: "Password", placeholder: "********" },
        { icon: LockKeyhole, name: "confirmpassword", type: "password", label: "Confirm password", placeholder: "********" }
    ];

    const handleSignup = async (formData) => {
        setError("");

        if (formData.password !== formData.confirmpassword) {
            setError("Passwords do not match");
            return;
        }

        setLoading(true);
        try {
            await signUpWithEmail(formData.email, formData.password, formData.phonenumber);
            navigate("/homepage");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const handleGoogle = async () => {
        setLoading(true);
        try {
            await signInWithGoogle();
            navigate("/homepage");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className='grid grid-cols-1 lg:grid-cols-2 font-inter bg-gray-100 h-full'>
            {/* Image Container hidden on mobile and tablet view */}
            <WelcomeImageDiv
                className="hidden flex-1 lg:block"
                overlay
                content={
                    <>
                        <h1 className="font-bold text-4xl">Chuks Kitchen</h1>
                        <p className="w-100 text-center font-medium text-2xl">Your journey to delicious, authentic Nigerian meals starts here. Sign up or log in to order your favorites today!</p>
                    </>
                }
            />

            {/* Sign up section */}
            <div className="flex flex-1 justify-center items-center h-full w-full px-2 py-4">
                <div className="flex flex-col w-full h-full md:w-95 p-2.5 mt-10 items-center justify-center gap-1">
                    <ChuksName />
                    <Form
                        title="Create Your Account"
                        fields={signupFields}
                        onSubmit={handleSignup}
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
                        buttonText={loading ? "Please wait..." : "Continue"}
                        className="mb-2"
                    />

                    {/* CONTENT OUTSIDE THE FORM */}
                    {error && <p className="text-red-500 text-xs text-center">{error}</p>}

                    <p className="text-xs">Or Continue with</p>

                    <Button
                        text="Continue with Google"
                        className="w-full font-normal! py-3 bg-white border border-gray-300 text-sm mt-3 mb-2"
                        icon={GoogleIcon}
                        onClick={handleGoogle}
                    />

                    <span className="flex gap-1 text-xs">
                        <p>Already have an account?</p>
                        <Link to="/signin" className="text-blue-400 cursor-pointer hover:underline">Sign in</Link>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Signup
