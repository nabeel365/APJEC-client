
import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../../../Providers/AuthProvider';

const MyEnrolledClasses = () => {
  const { user } = useContext(AuthContext);
  const [paymentData, setPaymentData] = useState(null);

  useEffect(() => {
    fetch(`https://art-server-two.vercel.app/payments?email=${user?.email}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPaymentData(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [user]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Enrolled Classes</h1>

      {paymentData && (
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Class Image</th>
              <th className="px-4 py-2">Class Name</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Payment Status</th>
              <th className="px-4 py-2">Amount Paid</th>
              <th className="px-4 py-2">Date</th>
            </tr>
          </thead>
          <tbody>
            {paymentData.map(payment => (
              <tr key={payment._id}>

                <td className="border px-4 py-2"><img className="h-16 w-auto" src={payment.image} alt={payment.name} /> </td>
                <td className="border px-4 py-2">{payment.name}</td>
                <td className="border px-4 py-2">{payment.email}</td>
                <td className="border px-4 py-2">{payment.status}</td>
                <td className="border px-4 py-2">$ {payment.price}</td>
                <td className="border px-4 py-2">{payment.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyEnrolledClasses;
