import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Payments = () => {
  const { user } = useContext(AuthContext);
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState(null); // To store selected payment details for modal

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/payments?email=${user?.email}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPaymentHistory(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [user]);

  // Close the modal
  const closeModal = () => setSelectedPayment(null);

  return (
    <div className="bg-[#F6F6F2] min-h-screen py-12 px-6 md:px-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-[#2b6777]">Payment History</h1>
        <p className="text-[#388087] mt-2 text-lg">
          Track your payments for the courses you've enrolled in at APJEC.
        </p>
      </div>

      {/* Payment History Table */}
      <div className="overflow-x-auto max-w-full mb-8">
        <div className="max-h-[500px] overflow-y-auto"> {/* Add max height and enable vertical scroll */}
          <table className="table-auto w-full border-collapse">
            <thead className="bg-[#388087] text-white">
              <tr>
                <th className="px-6 py-3 text-left">Class Image</th>
                <th className="px-6 py-3 text-left">Paid for Class</th>
                <th className="px-6 py-3 text-left">Payment ID</th>
                <th className="px-6 py-3 text-left">Date</th>
                <th className="px-6 py-3 text-left">Payment Status</th>
                <th className="px-6 py-3 text-left">Amount Paid</th>
                <th className="px-6 py-3 text-left">Transaction ID</th>
                <th className="px-6 py-3 text-left">Mode of Payment</th> {/* New Column */}
                <th className="px-6 py-3 text-left">Details</th>
              </tr>
            </thead>
            <tbody>
              {paymentHistory.map((payment) => (
                <tr key={payment._id} className="hover:bg-[#BADFE7] transition-all duration-300">
                  <td className="border-b px-6 py-4 text-center">
                    <img src={payment.image} alt={payment.name} className="w-16 h-16 object-cover rounded-lg" />
                  </td>
                  <td className="border-b px-6 py-4">{payment.name}</td>
                  <td className="border-b px-6 py-4">{payment._id}</td>
                  <td className="border-b px-6 py-4">{new Date(payment.date).toLocaleDateString()}</td>
                  <td className="border-b px-6 py-4">
                    <span className={`inline-flex items-center gap-2 ${payment.status === 'paid' ? 'text-green-500' : 'text-red-500'}`}>
                      {payment.status === 'paid' ? <FaCheckCircle /> : <FaTimesCircle />}
                      {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                    </span>
                  </td>
                  <td className="border-b px-6 py-4">₹ {payment.price}</td>
                  <td className="border-b px-6 py-4">{payment.transactionId}</td>
                  <td className="border-b px-6 py-4">{payment.modeOfPayment || 'Not specified'}</td> {/* Display Mode of Payment */}
                  <td className="border-b px-6 py-4">
                    <button
                      className="bg-[#388087] text-white py-1 px-4 rounded-full hover:bg-[#2b6777] transition duration-300"
                      onClick={() => setSelectedPayment(payment)} // Show details on click
                    >
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal for Payment Details */}
      {selectedPayment && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-8 rounded-lg max-w-3xl w-full">
            <h2 className="text-2xl font-bold text-[#2b6777]">Payment Details</h2>
            <div className="mt-4">
              <p><strong>Class Name:</strong> {selectedPayment.name}</p>
              <p><strong>Payment ID:</strong> {selectedPayment._id}</p>
              <p><strong>Amount Paid:</strong> ₹ {selectedPayment.price}</p>
              <p><strong>Transaction ID:</strong> {selectedPayment.transactionId}</p>
              <p><strong>Date:</strong> {new Date(selectedPayment.date).toLocaleDateString()}</p>
              <p><strong>Payment Status:</strong> {selectedPayment.status === 'paid' ? 'Paid' : 'Pending'}</p>
              <p><strong>Mode of Payment:</strong> {selectedPayment.modeOfPayment || 'Not specified'}</p> {/* Show Mode of Payment */}
              <p><strong>Class Image:</strong></p>
              <img src={selectedPayment.image} alt="Class" className="w-48 h-48 object-cover mt-2" />
            </div>
            <div className="mt-6 flex justify-end">
              <button
                className="bg-[#388087] text-white py-2 px-4 rounded-lg hover:bg-[#2b6777] transition duration-300"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payments;
