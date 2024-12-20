import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const { userLogIn, googleSignIn, resetPassword } = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [emailForReset, setEmailForReset] = useState('');

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || 'dashboard';

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmitData = (data) => {
        userLogIn(data.email, data.password)
            .then(() => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Login Successful!',
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate(from, { replace: true });
                // navigate("dashbaord");
            })
            .catch((error) => {
                setError(error.message);
            });
    };

    const handlePasswordReset = () => {
        if (!emailForReset) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please enter your email to reset your password!',
            });
            return;
        }

        resetPassword(emailForReset)
            .then(() => {
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Password reset email sent!',
                    text: 'Check your inbox for further instructions.',
                    showConfirmButton: true,
                });
                setIsModalOpen(false);
                setEmailForReset('');
            })
            .catch((error) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: error.message,
                });
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-[#BADFE7] to-[#C2EDCE]">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h2 className="text-2xl font-bold text-center mb-6 text-[#2b6777]">APJEC</h2>
                <p className="text-sm text-center text-gray-500 mb-8">
                    Log in to access your personalized dashboard and course materials.
                </p>

                <form onSubmit={handleSubmit(handleSubmitData)}>
                    {/* Email Field */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium text-gray-700">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#388087] focus:outline-none"
                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className="text-red-500 text-sm">Email is required</span>}
                    </div>

                    {/* Password Field */}
                    <div className="mb-4 relative">
                        <label htmlFor="password" className="block font-medium text-gray-700">Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#388087] focus:outline-none"
                            {...register("password", {
                                required: true,
                                minLength: 6,
                                pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/, // At least one uppercase and special character
                            })}
                        />
                        <button
                            type="button"
                            className="absolute top-2 right-3 text-gray-500"
                            onClick={handleTogglePasswordVisibility}
                        >
                            {showPassword ? <FaEyeSlash /> : <FaEye />}
                        </button>
                        {errors.password && (
                            <span className="text-red-500 text-sm">
                                Password must be 6+ characters, include a capital letter and a special character.
                            </span>
                        )}
                    </div>

                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-[#2b6777] text-white font-semibold py-2 rounded-lg hover:bg-[#388087] transition"
                    >
                        Log In
                    </button>
                </form>

                {/* Error Message */}
                {error && <p className="text-red-500 text-center mt-2">{error}</p>}

                {/* Forgot Password Link */}
                <p className="text-right text-sm text-gray-600 mt-4">
                    <button
                        className="text-[#388087] hover:underline focus:outline-none"
                        onClick={() => setIsModalOpen(true)}
                    >
                        Forgot password?
                    </button>
                </p>

                {/* Register Redirect */}
                <p className="text-center text-sm text-gray-600 mt-4">
                    New here?{" "}
                    <Link to="/register" className="text-[#388087] hover:underline">
                        Create an account
                    </Link>
                </p>

                {/* Divider */}
                <div className="flex items-center my-6">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="px-4 text-gray-500 text-sm">OR</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                {/* Google Sign-In */}
                <button
                    onClick={googleSignIn}
                    className="w-full flex items-center justify-center bg-[#BADFE7] text-[#2b6777] font-semibold py-2 rounded-lg hover:bg-[#C2EDCE] transition"
                >
                    <FaGoogle className="mr-2" /> Sign in with Google
                </button>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
                        <h3 className="text-lg font-bold text-center mb-4">Reset Password</h3>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-lg mb-4 focus:ring-2 focus:ring-[#388087] focus:outline-none"
                            value={emailForReset}
                            onChange={(e) => setEmailForReset(e.target.value)}
                        />
                        <div className="flex justify-between">
                            <button
                                onClick={handlePasswordReset}
                                className="bg-[#2b6777] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#388087] transition"
                            >
                                Send
                            </button>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-lg hover:bg-gray-400 transition"
                            >
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
