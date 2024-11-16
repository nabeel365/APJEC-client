import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';
import { Link } from 'react-router-dom';

const MyEnrolledClasses = () => {
  const { user } = useContext(AuthContext);
  const [paymentData, setPaymentData] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/payments?email=${user?.email}`)
      .then((response) => response.json())
      .then((data) => {
        setPaymentData(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [user]);

  return (
    <div className="bg-[#F6F6F2] min-h-screen py-10 px-5 md:px-20">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-[#2b6777]">My Enrolled Classes</h1>
        <p className="text-[#388087] mt-2 text-lg">
          Keep track of the classes you've enrolled in and manage your schedule efficiently.
        </p>
      </div>

      {/* Enrolled Classes Table */}
      {paymentData.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-[#2b6777] text-white">
                <th className="px-6 py-3">Class Image</th>
                <th className="px-6 py-3">Class Name</th>
                <th className="px-6 py-3">Email</th>
                <th className="px-6 py-3">Payment Status</th>
                <th className="px-6 py-3">Amount Paid</th>
                <th className="px-6 py-3">Date</th>
                <th className="px-6 py-3">Actions</th>
              </tr>
            </thead>
            <tbody>
              {paymentData.map((payment, index) => (
                <tr
                  key={payment._id}
                  className={`${index % 2 === 0 ? 'bg-[#BADFE7]' : 'bg-[#C2EDCE]'}`}
                >
                  <td className="px-6 py-4 text-center">
                    <img
                      src={payment.image}
                      alt={payment.name}
                      className="h-16 w-16 rounded-md border-2 border-[#388087] object-cover"
                    />
                  </td>
                  <td className="px-6 py-4 text-[#2b6777] font-semibold">{payment.name}</td>
                  <td className="px-6 py-4 text-[#388087]">{payment.email}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-white text-sm ${
                        payment.status === 'Paid'
                          ? 'bg-[#388087]'
                          : 'bg-[#E63946]'
                      }`}
                    >
                      {payment.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-[#2b6777] font-bold">₹{payment.price}</td>
                  <td className="px-6 py-4 text-[#388087]">{payment.date}</td>
                  <td className="px-6 py-4 text-center">
                    {payment.status === 'paid' && (
                      <Link to={`/classes/start/${payment.classId}`}>
                        <button className="bg-[#2b6777] hover:bg-[#388087] text-white font-bold py-2 px-4 rounded">
                          Start Class
                        </button>
                      </Link>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center mt-10">
          <p className="text-xl text-[#388087]">You have not enrolled in any classes yet.</p>
          <p className="mt-2 text-sm text-[#2b6777]">Browse and enroll in a class to get started!</p>
        </div>
      )}
    </div>
  );
};

export default MyEnrolledClasses;
