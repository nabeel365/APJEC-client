import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';



const Register = () => {

    // use form 
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();

    const { newUser, profileUpdate, googleSignIn } = useContext(AuthContext);


    // navigate 
    const navigate = useNavigate();

    const location = useLocation();

    const from = location.state?.from?.pathname || '/';


   

    const onSubmitData = data => {
        // console.log(data);

        newUser(data.email, data.password, data.name, data.photoURL)
            .then(result => {
                const registeredUser = result.user;
                console.log(registeredUser);

                profileUpdate(name, photoURL);

                // 

                    const savedUser = { name: data.name, email: data.email, role: "student"}
                    fetch('https://art-server-two.vercel.app/users', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(savedUser)
                    })


                // 

                setEmail('');
                setPassword('');
                setConfirmPassword('');
                setPhotoURL('');
                setName('');
                setCheckbox('');

                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'SignUp Successful !!!',
                    showConfirmButton: false,
                    timer: 1500
                  })

                navigate(from, { replace: true })


                 


            })


    }



    const handleGoogleSingIn = () => {
        googleSignIn()
        .then(result => {
            const socialUser = result.user;
            console.log(socialUser);

            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'SignUp Successful !!!',
                showConfirmButton: false,
                timer: 1500
              })


            navigate(from, { replace: true })

        })
    }


    // console.log(watch("example"));






    const [checkbox, setCheckbox] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [gender, setGender] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [address, setAddress] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handlePhotoURLChange = (e) => {
        setPhotoURL(e.target.value);
    };

    const handleGenderChange = (e) => {
        setGender(e.target.value);
    };

    const handlePhoneNumberChange = (e) => {
        setPhoneNumber(e.target.value);
    };

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    // const handleSubmitBtn = (e) => {
    //     e.preventDefault();
    //     // Add your registration logic here
    // };

    return (
        <div className="flex flex-col items-center justify-center bg-gradient-to-b from-pink-500 to-purple-500 min-h-screen">
            <div className="bg-white p-8 rounded shadow-md w-full sm:w-96">
                <h2 className="text-2xl font-bold text-center mb-4">Registration</h2>
                <form onSubmit={handleSubmit(onSubmitData)}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-medium mb-1">
                            Name
                        </label>

                        <input
                            type="text"
                            id="name"
                            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
                            value={name}
                            {...register("name", { required: true })}
                            onChange={handleNameChange}


                        // required
                        />
                        {errors.name && <span className='text-error'>Name is required</span>}



                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
                            value={email}
                            {...register("email", { required: true })}

                            onChange={handleEmailChange}
                        // required
                        />
                        {errors.email && <span className='text-error'>Email is required</span>}

                    </div>



                    <div className="mb-4">
                        <label htmlFor="password" className="block font-medium mb-1">
                            Password
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
                                value={password}
                                {...register("password", { required: true, minLength: 6, maxLength: 12,  pattern: /^(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?])/, })}

                                onChange={handlePasswordChange}
                            // required
                            />
                            {errors.password?.type === 'required' && <span className='text-error'>Password is required</span>}
                            {errors.password?.type === 'minLength' && <span className='text-error'>Password must be atleast 6 characters long.</span>}
                            
                            {errors.password?.type === 'pattern' && <span className='text-error'>Password must contain any special character and Password must contain a capital letter.</span>}
                            {/* {errors.password?.type === 'pattern' && <span className='text-error'>Password must contain a capital letter.</span>} */}

                            <button
                                type="button"
                                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                                onClick={handleShowPassword}
                            >
                                {showPassword ? (

                                    <FaEyeSlash></FaEyeSlash>
                                ) : (

                                    <FaEye></FaEye>
                                )}
                            </button>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block font-medium mb-1">
                            Confirm Password
                        </label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                id="confirmPassword"
                                className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
                                value={confirmPassword}
                                {...register("confirmPassword", { required: true })}

                                onChange={handleConfirmPasswordChange}
                            // required
                            />
                            {errors.confirmPassword && <span className='text-error'>You need to confirm your Password</span>}

                            <button
                                type="button"
                                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
                                onClick={handleShowConfirmPassword}
                            >
                                {showConfirmPassword ? (
                                    <FaEyeSlash></FaEyeSlash>

                                ) : (
                                    <FaEye></FaEye>

                                )}
                            </button>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label htmlFor="photoURL" className="block font-medium mb-1">Photo URL</label>
                        <input
                            type="text"
                            id="photoURL"
                            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
                            value={photoURL}
                            {...register("photoURL", { required: true })}
                            onChange={handlePhotoURLChange}
                        // required
                        />
                        {errors.photoURL && <span className='text-error'>PhotoURL is required</span>}

                    </div>

                    {/* optional form fields to be added later  */}

                    <div className="flex items-center mb-4">
                        <input type="checkbox" id="terms" className="mr-2"
                            {...register("checkbox", { required: true })}
                        />

                        <label htmlFor="terms" className="text-gray-700">
                            I agree to the{' '}
                            <Link to="/terms" className="text-indigo-500">
                                Terms and Conditions
                            </Link>
                        </label>

                    </div>
                    {errors.checkbox && <span className='text-error'>You need to accept our Terms and Conditions.</span>}


                    {/* register */}


                    <input className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                        type="submit" value="Register" />


                    <p className="text-gray-600 text-center mt-4">
                        Already have an account?{' '}
                        <Link to="/login" className="text-indigo-500 font-semibold">
                            Login
                        </Link>
                    </p>
                </form>

                <button onClick={handleGoogleSingIn} className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4 w-full">
                    Sign up with Google
                </button>
            </div>
        </div>
    );
};

export default Register;









