import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmail, signInWithGoogle } from '../services/auth';
import WelcomeImageDiv from "../Components/WelcomeImageDiv";
import Form from "../Components/Form";
import ChuksName from "../Components/ChuksName";
import { Mail, LockKeyhole } from "lucide-react"
import Button from "../Components/Button";
import { Link } from "react-router-dom";
import GoogleIcon from "../assets/googleLogo.png";
import AppleIcon from '../assets/appleIcon.png';


const Signin = () => {
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const signinFields = [
        { icon: Mail, name: "email", type: "email", label: "Email address", placeholder: "name@gmail.com" },
        { icon: LockKeyhole, name: "password", type: "password", label: "Password", placeholder: "********" },
    ];

    const handleSignin = async (formData) => {
        setError("");

        setLoading(true);

        try {
            await signInWithEmail(formData.email, formData.password);
            navigate("/");
        } catch (err) {
            setError(err.message)
        } finally {
            setLoading(false);
        }
    };

    const handleGoogle = async () => {
        setLoading(true);
        try {
            await signInWithGoogle();
            navigate("/");
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className='grid grid-cols-1 lg:grid-cols-2 font-inter bg-gray-100 h-full'>
            {/* Image Container */}
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

            {/* Sign in section */}
            <div className="flex flex-1 justify-center h-full items-center w-full px-2 py-4">
                <div className="flex flex-col w-full md:w-95 p-2.5 mt-10 items-center justify-center gap-1">
                    <ChuksName />
                    <Form
                        title="Login Your Account"
                        fields={signinFields}
                        onSubmit={handleSignin}
                        extras={
                            <p className="text-sm text-blue-400 cursor-pointer ml-auto hover:underline">
                                Forgot Password?
                            </p>
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

                    <span className="flex gap-1 text-xs mb-3">
                        <p>Don't have an account?</p>
                        <Link to="/signup" className="text-blue-400 cursor-pointer hover:underline">Create an account</Link>
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Signin
