import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';



const Register = () => {

    // use form 
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
console.log(errors);
    console.log(watch("example"));




    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [photoUrl, setPhotoUrl] = useState('');
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

    const handlePhotoUrlChange = (e) => {
        setPhotoUrl(e.target.value);
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
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block font-medium mb-1">
                            Name
                        </label>
                        {/* <input
                            type="text"
                            id="name"
                            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
                            value={name}
                            {...register("customerName", { required: true })}
                            onChange={handleNameChange}
                            
                            {errors.customerName && <span>This field is required</span>}

                            // required
                        /> */}

<input {...register("name", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.name && <span>This field is required</span>}
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
                            {...register("email")} 
                            onChange={handleEmailChange} 
                            required
                        />
                    </div>


                    {/* Rest of the form fields */}

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
                                {...register("password")} 

                                onChange={handlePasswordChange}
                                required
                            />
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
                                {...register("confirmPassword")} 

                                onChange={handleConfirmPasswordChange}
                                required
                            />
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
                        <label htmlFor="photoUrl" className="block font-medium mb-1">Photo URL</label>
                        <input
                            type="text"
                            id="photoUrl"
                            className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
                            value={photoUrl}
                            {...register("photoUrl")}                             
                            onChange={handlePhotoUrlChange}
                            required
                        />
                    </div>

                    {/* optional form fields to be added later  */}

                    <div className="flex items-center mb-4">
                        <input type="checkbox" id="terms" className="mr-2" required />
                        <label htmlFor="terms" className="text-gray-700">
                            I agree to the{' '}
                            <Link to="/terms" className="text-indigo-500">
                                Terms and Conditions
                            </Link>
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="bg-indigo-500 hover:bg-indigo-600 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
                    >
                        Register
                    </button>
                    <p className="text-gray-600 text-center mt-4">
                        Already have an account?{' '}
                        <Link to="/login" className="text-indigo-500 font-semibold">
                            Login
                        </Link>
                    </p>
                </form>

                <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded mt-4 w-full">
                    Sign up with Google
                </button>
            </div>
        </div>
    );
};

export default Register;
