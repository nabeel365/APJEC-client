import React, { useContext } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
import Swal from 'sweetalert2';

const Checkout = ({ price, name, id, image }) => {
    const { user } = useContext(AuthContext);

    const handlePayment = () => {
        const payment = {
            email: user?.email,
            price,
            name,
            image,
            date: new Date(),
            status: 'paid',
        };

        // Save payment data to the backend
        fetch(`${import.meta.env.VITE_BACKEND_URL}/payments`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payment),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: 'Payment Data Saved Successfully',
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            })
            .catch((error) => console.error('Error saving payment:', error));
    };

    return (
        <div className="text-center mt-6">
            <p className="text-lg text-[#388087] mb-4">
                Click the button below once you have completed your UPI payment.
            </p>
            <button
                onClick={handlePayment}
                className="bg-green-500 hover:bg-green-600 text-white py-3 px-6 rounded-lg transition duration-300"
            >
                Confirm Payment
            </button>
        </div>
    );
};

export default Checkout;
