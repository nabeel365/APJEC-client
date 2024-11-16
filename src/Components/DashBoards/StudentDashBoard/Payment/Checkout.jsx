import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useSelectedClasses from '../../../../Hooks/useSelectedClasses';

const Checkout = ({ price, name, id, image }) => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();

  const [selectedClass] = useSelectedClasses();
  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  const paidClass = selectedClass?.find(c => c._id === id);
  const enrolled = paidClass?.enroled;
  const available_seats = paidClass?.available_seats;
  const delId = paidClass?._id;

  useEffect(() => {
    if (price > 0) {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/create-payment-intent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ price }),
      })
        .then((res) => res.json())
        .then((data) => setClientSecret(data.clientSecret));
    }
  }, [price]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card,
    });

    if (error) {
      setCardError(error.message);
    } else {
      setCardError('');
    }

    setProcessing(true);

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'unknown',
            name: user?.displayName || 'anonymous',
          },
        },
      }
    );

    setProcessing(false);

    if (confirmError) {
      console.log(confirmError);
    }

    if (paymentIntent.status === 'succeeded') {
      setTransactionId(paymentIntent.id);

      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        status: 'paid',
        name: name,
        image: image,
      };

      fetch(`${import.meta.env.VITE_BACKEND_URL}/payments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ payment }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.insertedId) {
            updateSeatsAndEnrolled();
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: 'Payment Successful',
              showConfirmButton: false,
              timer: 1500,
            });
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  const updateSeatsAndEnrolled = () => {
    const courseId = paidClass?._id;
    const updateSeatsQuery = {
      enroled: enrolled + 1, // Update enrollment count
      available_seats: available_seats - 1, // Update available seats
    };

    fetch(`${import.meta.env.VITE_BACKEND_URL}/classes/${courseId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateSeatsQuery),
    })
      .then((response) => response.json())
      .then(() => {
        console.log('Seats and enrollment updated successfully');
      })
      .catch((error) => {
        console.log('Error updating available seats and enrollment:', error);
      });
  };

  return (
    <div className="bg-[#F6F6F2] min-h-screen py-12 px-6 md:px-20">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-[#2b6777]">Complete Your Payment</h1>
        <p className="text-[#388087] mt-2 text-lg">
          Please enter your card details below to complete the payment for {name}.
        </p>
      </div>

      {/* Payment Form */}
      <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto bg-white rounded-lg shadow-lg p-8">
        <div className="mb-6">
          <CardElement
            options={{
              style: {
                base: {
                  fontSize: '16px',
                  color: '#424770',
                  '::placeholder': {
                    color: '#aab7c4',
                  },
                },
                invalid: {
                  color: '#9e2146',
                },
              },
            }}
            className="p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:border-[#388087]"
          />
        </div>

        {/* Error Message */}
        {cardError && <p className="text-red-500 text-sm">{cardError}</p>}

        {/* Payment Button */}
        <button
          className="w-full py-3 px-4 bg-[#388087] text-white rounded-lg shadow-md hover:bg-[#2b6777] disabled:opacity-50"
          type="submit"
          disabled={!stripe || !clientSecret || processing}
        >
          {processing ? 'Processing...' : 'Pay ₹' + price}
        </button>

        {/* Success Message */}
        {transactionId && (
          <p className="text-green-500 mt-4 text-center">
            Payment Successful! Transaction ID: {transactionId}
          </p>
        )}
      </form>
    </div>
  );
};

export default Checkout;
