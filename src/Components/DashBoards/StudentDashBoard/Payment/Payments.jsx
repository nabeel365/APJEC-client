import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Payments = () => {
  const { user } = useContext(AuthContext);
  const [paymentHistory, setPaymentHistory] = useState([]);
  const [selectedPayment, setSelectedPayment] = useState(null);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/payments?email=${user?.email}`)
      .then((response) => response.json())
      .then((data) => {
        setPaymentHistory(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user]);

  const closeModal = () => setSelectedPayment(null);

  return (
    <div className="bg-[#F6F6F2] w-screen min-h-screen py-10 px-2 sm:px-6 lg:px-16">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-[#2b6777]">Payment History</h1>
        <p className="text-[#388087] mt-2 text-sm sm:text-base lg:text-lg">
          Track your payments for the courses you've enrolled in at APJEC.
        </p>
      </div>

      {/* Payment History Table */}
      <div className="overflow-x-auto shadow-md rounded-lg">
        <table className="table-auto w-full text-left border-collapse">
          <thead className="bg-[#388087] text-white">
            <tr>
              <th className="px-2 py-2 text-xs sm:text-sm">Class Image</th>
              <th className="px-2 py-2 text-xs sm:text-sm">Class Name</th>
              <th className="px-2 py-2 text-xs sm:text-sm">Payment ID</th>
              <th className="px-2 py-2 text-xs sm:text-sm">Date</th>
              <th className="px-2 py-2 text-xs sm:text-sm">Status</th>
              <th className="px-2 py-2 text-xs sm:text-sm">Amount</th>
              <th className="px-2 py-2 text-xs sm:text-sm">Transaction ID</th>
              <th className="px-2 py-2 text-xs sm:text-sm">Mode</th>
              <th className="px-2 py-2 text-xs sm:text-sm">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {paymentHistory.map((payment) => (
              <tr key={payment._id} className="hover:bg-[#BADFE7]">
                <td className="px-2 py-2 text-center">
                  <img
                    src={payment.image}
                    alt={payment.name}
                    className="w-12 h-12 sm:w-16 sm:h-16 object-cover rounded-lg"
                  />
                </td>
                <td className="px-2 py-2 text-xs sm:text-sm truncate">{payment.name}</td>
                <td className="px-2 py-2 text-xs sm:text-sm truncate">{payment._id}</td>
                <td className="px-2 py-2 text-xs sm:text-sm">
                  {new Date(payment.date).toLocaleDateString()}
                </td>
                <td className="px-2 py-2 text-xs sm:text-sm">
                  <span
                    className={`inline-flex items-center gap-1 ${
                      payment.status === 'paid' ? 'text-green-600' : 'text-red-600'
                    }`}
                  >
                    {payment.status === 'paid' ? <FaCheckCircle /> : <FaTimesCircle />}
                    {payment.status.charAt(0).toUpperCase() + payment.status.slice(1)}
                  </span>
                </td>
                <td className="px-2 py-2 text-xs sm:text-sm">₹ {payment.price}</td>
                <td className="px-2 py-2 text-xs sm:text-sm truncate">{payment.transactionId}</td>
                <td className="px-2 py-2 text-xs sm:text-sm truncate">
                  {payment.modeOfPayment || 'Not specified'}
                </td>
                <td className="px-2 py-2 text-xs sm:text-sm">
                  <button
                    className="bg-[#388087] text-white py-1 px-3 rounded-full hover:bg-[#2b6777] transition-colors"
                    onClick={() => setSelectedPayment(payment)}
                  >
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal for Payment Details */}
      {selectedPayment && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-lg">
            <h2 className="text-xl sm:text-2xl font-bold text-[#2b6777]">Payment Details</h2>
            <div className="mt-4 text-xs sm:text-sm">
              <p><strong>Class Name:</strong> {selectedPayment.name}</p>
              <p><strong>Payment ID:</strong> {selectedPayment._id}</p>
              <p><strong>Amount Paid:</strong> ₹ {selectedPayment.price}</p>
              <p><strong>Transaction ID:</strong> {selectedPayment.transactionId}</p>
              <p><strong>Date:</strong> {new Date(selectedPayment.date).toLocaleDateString()}</p>
              <p><strong>Status:</strong> {selectedPayment.status === 'paid' ? 'Paid' : 'Pending'}</p>
              <p><strong>Mode:</strong> {selectedPayment.modeOfPayment || 'Not specified'}</p>
              <div className="mt-4">
                <strong>Class Image:</strong>
                <img
                  src={selectedPayment.image}
                  alt="Class"
                  className="w-24 h-24 sm:w-32 sm:h-32 object-cover mt-2 rounded-lg"
                />
              </div>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                className="bg-[#388087] text-white py-2 px-4 rounded-lg hover:bg-[#2b6777]"
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
