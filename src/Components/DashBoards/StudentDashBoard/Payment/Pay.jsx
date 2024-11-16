import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkout from './Checkout';
import { useParams } from 'react-router-dom';
import useSelectedClasses from '../../../../Hooks/useSelectedClasses';

// Load Stripe public key
const stripePromise = loadStripe(import.meta.env.VITE_PK);

const Pay = () => {
    const [selectedClass] = useSelectedClasses();
    const { id } = useParams();

    // Find the class based on the provided ID
    const payForClass = selectedClass?.find(isClass => isClass._id == id);

    // Get price, name, and image of the selected class
    const price = payForClass?.price;
    const name = payForClass?.name;
    const image = payForClass?.image;

    return (
        <div className="bg-[#F6F6F2] min-h-screen py-16 px-8 md:px-16">
            {/* Title Section */}
            <div className="max-w-4xl mx-auto text-center mb-8">
                <h1 className="text-3xl font-bold text-[#2b6777]">
                    Payment for <span className="text-[#388087]">{name}</span>
                </h1>
                <p className="mt-4 text-lg text-[#388087]">
                    You are about to pay <span className="text-green-500">₹ {price}</span> for the course. Please complete your payment to confirm your enrollment.
                </p>
            </div>

            {/* Payment Section */}
            <div className="bg-white rounded-lg shadow-lg p-8 mx-auto max-w-2xl">
                <div className="flex justify-center mb-6">
                    <img src={image} alt={name} className="w-28 h-28 object-cover rounded-lg border-2 border-[#388087]" />
                </div>

                <div className="text-center mb-6">
                    <h2 className="text-2xl font-semibold text-[#2b6777]">Class Details</h2>
                    <p className="text-lg text-[#388087] mt-2">{name}</p>
                    <p className="text-lg text-[#388087] mt-2">Amount: <span className="font-bold text-green-500">₹ {price}</span></p>
                </div>

                {/* Stripe Elements Component */}
                <Elements stripe={stripePromise}>
                    <Checkout id={id} price={price} name={name} image={image} />
                </Elements>

                {/* Alternative Payment Methods Section */}
                <div className="mt-8 text-center">
                    <p className="text-lg text-[#388087] mb-4">Or pay via another method:</p>

                    {/* Google Pay Button */}
                    <button className="bg-[#4285F4] text-white py-3 px-6 rounded-lg mb-4 hover:bg-[#2b5bb7] transition duration-300">
                        <span className="font-semibold">Pay with Google Pay</span>
                    </button>

                    {/* PhonePe Button */}
                    <button className="bg-[#006A4E] text-white py-3 px-6 rounded-lg mb-4 hover:bg-[#004c34] transition duration-300">
                        <span className="font-semibold">Pay with PhonePe</span>
                    </button>

                    {/* UPI Button */}
                    <button className="bg-[#75d1d2] text-white py-3 px-6 rounded-lg mb-4 hover:bg-[#55b1b3] transition duration-300">
                        <span className="font-semibold">Pay with UPI</span>
                    </button>

                    {/* Paytm Button */}
                    <button className="bg-[#F36C1C] text-white py-3 px-6 rounded-lg mb-4 hover:bg-[#d44b0a] transition duration-300">
                        <span className="font-semibold">Pay with Paytm</span>
                    </button>
                </div>

                {/* Additional Information */}
                <div className="mt-6 text-center">
                    <p className="text-gray-600 text-sm">
                        By clicking "Pay", you agree to our <span className="text-[#388087] cursor-pointer">Terms of Service</span> and <span className="text-[#388087] cursor-pointer">Privacy Policy</span>.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Pay;
