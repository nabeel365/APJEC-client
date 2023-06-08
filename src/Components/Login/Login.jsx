import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {

    // useform 
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const { userLogIn, googleSignIn } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [error, setError] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };


    // navigate 
    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || '/';



    const handleSubmitData = (data) => {

        userLogIn(data.email, data.password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error)
                setError(error.message)
            })

            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Login Successful !!!',
                showConfirmButton: false,
                timer: 1500
              })

        navigate(from, { replace: true })



    };

    const handleGoogleSingIn = () => {
        googleSignIn()
        .then(result => {
            const socialUser = result.user;
            console.log(socialUser);

            navigate(from, { replace: true })

        })
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-blue-500 to-purple-500">
            <div className="bg-white p-8 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
                <form onSubmit={handleSubmit(handleSubmitData)}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
                            value={email}
                            {...register("email", { required: true })}

                            onChange={handleEmailChange}
                        // required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block font-medium mb-1">Password</label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
                                value={password}
                                {...register("password", { required: true, minLength: 6, maxLength: 12, pattern: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/, pattern: /^(?=.*[A-Z])/ })}

                                onChange={handlePasswordChange}
                            // required
                            />
                            <button
                                type="button"
                                className="absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-500"
                                onClick={handleTogglePasswordVisibility}
                            >
                                {showPassword ? (


                                    <FaEyeSlash></FaEyeSlash>

                                ) :

                                    <FaEye></FaEye>


                                }


                            </button>
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-4 py-2 rounded focus:outline-none"
                    >
                        Login
                    </button>
                    <p className='text-error'> {error} </p>
                </form>
                <div className="mt-4 text-center">
                    New to our Website ?  <Link to="/register" className="text-blue-500 hover:underline">Create an account</Link>
                </div>

                <br />

                <div className="flex flex-col items-center">
                    <p className="mb-2">Or login with:</p>
                    <button onClick={handleGoogleSingIn} className="flex items-center justify-center w-10 h-10 bg-white rounded-full shadow-md mt-2">
                        <FaGoogle className="text-blue-500 text-lg" />
                    </button>
                </div>



            </div>
        </div>
    );

};

export default Login;
