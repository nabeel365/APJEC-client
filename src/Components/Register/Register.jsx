import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { newUser, profileUpdate, googleSignIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/';

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleShowPassword = () => setShowPassword(!showPassword);
  const handleShowConfirmPassword = () => setShowConfirmPassword(!showConfirmPassword);

  const onSubmitData = (data) => {
    newUser(data.email, data.password)
      .then(() => {
        profileUpdate(data.name, data.photoURL);
        Swal.fire({
          position: 'top-center',
          icon: 'success',
          title: 'Registration Successful!',
          showConfirmButton: false,
          timer: 1500,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: error.message,
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#BADFE7]">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-center text-2xl font-semibold text-[#2b6777] mb-6">Register to APJEC</h2>
        <form onSubmit={handleSubmit(onSubmitData)} className="space-y-4">
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-[#388087]" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register('name', { required: 'Name is required' })}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#388087]"
              placeholder="Enter your full name"
            />
            {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-[#388087]" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register('email', { required: 'Email is required' })}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#388087]"
              placeholder="Enter your email"
            />
            {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-[#388087]" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: { value: 6, message: 'Password must be at least 6 characters' },
                })}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#388087]"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500"
                onClick={handleShowPassword}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.password && <span className="text-red-500 text-sm">{errors.password.message}</span>}
          </div>

          {/* Confirm Password */}
          <div>
            <label className="block text-sm font-medium text-[#388087]" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                id="confirmPassword"
                {...register('confirmPassword', {
                  required: 'Please confirm your password',
                })}
                className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#388087]"
                placeholder="Confirm your password"
              />
              <button
                type="button"
                className="absolute right-3 top-3 text-gray-500"
                onClick={handleShowConfirmPassword}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
            {errors.confirmPassword && <span className="text-red-500 text-sm">{errors.confirmPassword.message}</span>}
          </div>

          {/* Photo URL */}
          <div>
            <label className="block text-sm font-medium text-[#388087]" htmlFor="photoURL">
              Photo URL
            </label>
            <input
              type="text"
              id="photoURL"
              {...register('photoURL', { required: 'Photo URL is required' })}
              className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#388087]"
              placeholder="Enter photo URL"
            />
            {errors.photoURL && <span className="text-red-500 text-sm">{errors.photoURL.message}</span>}
          </div>

          {/* Terms */}
          <div className="flex items-center space-x-2">
            <input
              type="checkbox"
              id="terms"
              {...register('terms', { required: 'You must accept the terms' })}
              className="h-4 w-4 text-[#388087] border-gray-300 rounded"
            />
            <label htmlFor="terms" className="text-sm text-gray-700">
              I agree to the{' '}
              <Link to="/terms" className="text-[#2b6777] underline">
                Terms and Conditions
              </Link>
            </label>
          </div>
          {errors.terms && <span className="text-red-500 text-sm">{errors.terms.message}</span>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#388087] text-white py-2 px-4 rounded hover:bg-[#2b6777] transition duration-200"
          >
            Register
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={googleSignIn}
            className="w-full bg-[#C2EDCE] text-[#2b6777] py-2 px-4 rounded flex items-center justify-center space-x-2 hover:bg-[#BADFE7] transition duration-200"
          >
            <FaGoogle />
            <span>Register with Google</span>
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-[#2b6777] font-semibold underline">
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
