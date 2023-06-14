// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../../../Providers/AuthProvider';

// const Payments = () => {

//   const { user } = useContext(AuthContext);

//     const [paymentHistory, setPaymentHistory] = useState();
    
//   useEffect(() => {
//     fetch(`http://localhost:5000/payments?email=${user?.email}`)
//       .then(response => response.json())
//       .then(data => {
//         console.log(data);
//         setPaymentHistory(data);
//       })
//       .catch(error => {
//         console.error(error);
//       });
//   }, [user]);


//   console.log(paymentHistory);

//     return (
//         <div>
//              Payment History
//         </div>
//     );
// };

// export default Payments;



import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';

const Payments = () => {
  const { user } = useContext(AuthContext);
  const [paymentHistory, setPaymentHistory] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/payments?email=${user?.email}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setPaymentHistory(data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [user]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-4">Payment History</h1>

      <table className="table-auto w-full">
        <thead>
          <tr>
            <th className="px-4 py-2">Class Image</th>
            <th className="px-4 py-2">Paid for class</th>
            <th className="px-4 py-2">Payment ID</th>
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Payment Status</th>
            <th className="px-4 py-2">Amount Paid</th>
            <th className="px-4 py-2">Transaction Id</th>
          </tr>
        </thead>
        <tbody>
          {paymentHistory.map(payment => (
            <tr key={payment._id}>
              <td className="border px-4 py-2"><img src={payment.image} alt="" /></td>
              <td className="border px-4 py-2">{payment.name}</td>
              <td className="border px-4 py-2">{payment._id}</td>
              <td className="border px-4 py-2">{payment.date}</td>
              <td className="border px-4 py-2">{payment.status}</td>
              <td className="border px-4 py-2">$ {payment.price}</td>
              <td className="border px-4 py-2">{payment.transactionId}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Payments;
