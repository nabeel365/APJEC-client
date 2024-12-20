import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useSelectedClasses from '../../../../Hooks/useSelectedClasses';
import Swal from 'sweetalert2';

const Pay = () => {
  const { id } = useParams(); // Fetch class ID from route params
  const [selectedClass] = useSelectedClasses(); // Fetch selected classes
  console.log(id,selectedClass);
  
  const [paymentLink, setPaymentLink] = useState('');
  const [loading, setLoading] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [price, setPrice] = useState(0);
  const [classDetails, setClassDetails] = useState({});

  useEffect(() => {
    // Find the class details by ID
    const foundClass = selectedClass?.find((c) => c._id === id);
    if (foundClass) {
      setPrice(foundClass.price); // Set class price
      setClassDetails(foundClass);
    }
  }, [id, selectedClass]);

  const generatePaymentLink = () => {
    setLoading(true);
    fetch(`${import.meta.env.VITE_BACKEND_URL}/generate-payment-link`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        amount: price, // Class price dynamically set
        email: classDetails.email || 'user@example.com', // Replace dynamically with user info
        purpose: `Payment for ${classDetails.name || 'Class'}`,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.paymentLink) {
          setPaymentLink(data.paymentLink); // Store the payment link
          Swal.fire('Success', 'Payment Link Generated!', 'success');
        } else {
          Swal.fire('Error', 'Failed to generate payment link', 'error');
        }
        setLoading(false);
        setShowConfirm(true);
      })
      .catch((err) => {
        console.error(err);
        Swal.fire('Error', 'Something went wrong!', 'error');
        setLoading(false);
      });
  };

  return (
    <div className="bg-[#F6F6F2] min-h-screen py-16 px-8 md:px-16">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#2b6777]">Pay Using BulkPe</h1>
        <p className="text-lg text-[#388087]">
          Securely pay ₹{price} for {classDetails.name || 'your class'}.
        </p>
      </div>

      {/* Payment Button */}
      <div className="text-center">
        {!paymentLink ? (
          <button
            className="bg-green-500 text-white py-3 px-6 rounded hover:bg-green-600"
            onClick={generatePaymentLink}
            disabled={loading || price === 0}
          >
            {loading ? 'Generating...' : `Pay ₹${price}`}
          </button>
        ) : (
          <a href={paymentLink} target="_blank" rel="noreferrer">
            <button className="bg-blue-500 text-white py-3 px-6 rounded hover:bg-blue-600">
              Proceed to Payment
            </button>
          </a>
        )}
      </div>

      {/* Confirm Payment Section */}
      {showConfirm && (
        <ConfirmPayment
          email={classDetails.email || 'user@example.com'}
          price={price}
        />
      )}
    </div>
  );
};

// ConfirmPayment Component
const ConfirmPayment = ({ price, email }) => {
  const [transactionId, setTransactionId] = useState('');

  const handleConfirmPayment = () => {
    if (!transactionId) {
      Swal.fire('Error', 'Please enter your transaction ID', 'error');
      return;
    }

    fetch(`${import.meta.env.VITE_BACKEND_URL}/confirm-payment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, price, transactionId }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          Swal.fire('Success', 'Payment Confirmed Successfully!', 'success');
        } else {
          Swal.fire('Error', 'Payment verification failed!', 'error');
        }
      })
      .catch((err) => {
        console.error(err);
        Swal.fire('Error', 'Something went wrong!', 'error');
      });
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6 text-center max-w-md mx-auto mt-6">
      <h3 className="text-2xl font-semibold text-[#2b6777] mb-4">
        Confirm Your Payment
      </h3>
      <p className="mb-4">Enter the transaction ID provided by your UPI app:</p>
      <input
        type="text"
        placeholder="Transaction ID"
        value={transactionId}
        onChange={(e) => setTransactionId(e.target.value)}
        className="w-full border p-3 rounded mb-4"
      />
      <button
        onClick={handleConfirmPayment}
        className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600"
      >
        Confirm Payment
      </button>
    </div>
  );
};

export default Pay;
