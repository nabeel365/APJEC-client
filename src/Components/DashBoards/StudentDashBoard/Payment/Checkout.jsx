
// import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
// import React, { useContext, useEffect, useState } from 'react';
// import { AuthContext } from '../../../../Providers/AuthProvider';
// import Swal from 'sweetalert2';
// // import './Checkout.css';

// const Checkout = ({ price, name, id }) => {

//   console.log(price);
//   console.log(id);


//   const { user } = useContext(AuthContext)

//   const stripe = useStripe();
//   const elements = useElements();

//   const [cardError, setCardError] = useState('');
//   const [clientSecret, setClientSecret] = useState('');
//   const [processing, setProcessing] = useState(false);
//   const [transactionId, setTransactionId] = useState('');




//   useEffect(() => {

//     console.log(price);
//     if (price > 0) {
//       fetch('https://art-server-two.vercel.app/create-payment-intent', {
//         method: 'POST',
//         headers: {

//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ price })
//       })
//         .then(res => res.json())
//         .then(data => {
//           setClientSecret(data.clientSecret)
//           console.log(data.clientSecret);
//         })
//     }

//   }, [price])

//   // console.log(cl);






//   const handleSubmit = async (event) => {
//     // Block native form submission.
//     event.preventDefault();

//     if (!stripe || !elements) {
//       // Stripe.js has not loaded yet. Make sure to disable
//       // form submission until Stripe.js has loaded.
//       return;
//     }

//     // Get a reference to a mounted CardElement. Elements knows how
//     // to find your CardElement because there can only ever be one of
//     // each type of element.
//     const card = elements.getElement(CardElement);

//     if (card == null) {
//       return;
//     }


//     // payment method ????    

//     const { error, paymentMethod } = await stripe.createPaymentMethod({
//       type: 'card',
//       card

//     })

//     if (error) {
//       console.log('error', error)
//       setCardError(error.message);
//     }
//     else {
//       setCardError('');
//       console.log('payment method', paymentMethod)
//     }
//     setProcessing(true)


//     // confirm card payment 

//     const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
//       clientSecret,
//       {
//         payment_method: {
//           card: card,
//           billing_details: {
//             email: user?.email || 'unknown',
//             name: user?.displayName || 'anonymous',
//             // paymentStatus: "paid"
//           },
//         },
//       },
//     );

//     if (confirmError) {
//       console.log(confirmError);
//     }

//     console.log(paymentIntent);
//     setProcessing(false)


//     // payment status

//     if (paymentIntent.status === 'succeeded') {
//       setTransactionId(paymentIntent.id);

//       const payment = {
//         email: user?.email,
//         transactionId: paymentIntent.id,
//         price,
//         date: new Date(),
//         status: "paid",
//         name: name


//       }

//       fetch('https://art-server-two.vercel.app/payments', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ payment })
//       })
//         .then(response => response.json())
//         .then(data => {
//           console.log(data);

//           // result. b4 insertedId 

//           if (data.insertedId) {
//             // display confirm
//             console.log('done');

//             // alert('Payment Successful')
//             Swal.fire({
//               position: 'center',
//               icon: 'success',
//               title: 'Payment Successful',
//               showConfirmButton: false,
//               timer: 1500
//             })
//           }
//         })
//         .catch(error => {
//           console.error('Error:', error);
//         });

//       }
// // 




// // 

    




//   }



//   return (
//     <div className=''>


//       <form onSubmit={handleSubmit} className="w-2/3 ">
//         <div className="rounded-lg overflow-hidden shadow-lg p-6 bg-white">
//           <div className="mb-4">
//             <CardElement
//               options={{
//                 style: {
//                   base: {
//                     fontSize: '16px',
//                     color: '#424770',
//                     '::placeholder': {
//                       color: '#aab7c4',
//                     },
//                   },
//                   invalid: {
//                     color: '#9e2146',
//                   },
//                 },
//               }}
//               className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
//             />
//           </div>
//           <button
//             className="btn btn-primary w-full py-2 px-4 text-white rounded-lg shadow-md disabled:opacity-50"
//             type="submit"
//             disabled={!stripe || !clientSecret || processing}
//           >
//             Pay
//           </button>
//         </div>
//       </form>

//       {cardError && <p className='text-error'>{cardError}</p>}

//       {transactionId && (
//         <p className="text-success">
//           Transaction complete with transactionId: {transactionId}
//         </p>
//       )}






//     </div>
//   );
// };

// export default Checkout;






import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
import Swal from 'sweetalert2';
import useClasses from '../../../../Hooks/useClasses';
import useSelectedClasses from '../../../../Hooks/useSelectedClasses';

const Checkout = ({ price, name , id, image}) => {
  const { user } = useContext(AuthContext);
  const stripe = useStripe();
  const elements = useElements();

  const [selectedClass] = useSelectedClasses();


  console.log(id);
  // const [classes] = useClasses();
  // const [selectedClass] = useSelectedClasses();

  // const paidClass = selectedClass?.find(c => c._id == id);

  // console.log(paidClass);

  const [classes, setClasses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://art-server-two.vercel.app/selected-classes');
        const data = await response.json();
        setClasses(data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);


  console.log(classes);

  // console.log(classes?.[classes.length - 1]);

  const paidClass = selectedClass?.find(c => c._id === id); 



  console.log(paidClass?.enroled);

  const enrolled = paidClass?.enroled;
  console.log(enrolled);

  const available_seats = paidClass?.available_seats;
  console.log(paidClass?.available_seats);

  const delId = paidClass?._id;
  console.log(delId);

// \



// \
  


  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');

  useEffect(() => {
    if (price > 0) {
      fetch('https://art-server-two.vercel.app/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ price })
      })
      .then(res => res.json())
      .then(data => {
        setClientSecret(data.clientSecret);
      });
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
      card
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
            name: user?.displayName || 'anonymous'
          },
        },
      },
    );

    if (confirmError) {
      console.log(confirmError);
    }

    setProcessing(false);

    if (paymentIntent.status === 'succeeded') {
      setTransactionId(paymentIntent.id);

      const payment = {
        email: user?.email,
        transactionId: paymentIntent.id,
        price,
        date: new Date(),
        status: 'paid',
        name: name,
        image: image
      };

      fetch('https://art-server-two.vercel.app/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ payment })
      })
      .then(response => response.json())
      .then(data => {
        if (data.insertedId) {

           // del from selected class 
          //  handleDeleteClass();

          updateSeatsAndEnroled(); 

          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Payment Successful',
            showConfirmButton: false,
            timer: 1500
          });

         
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    }
  };

  const updateSeatsAndEnroled = () => {
    // const courseId = id; 
    const courseId = paidClass?._id; 
    const updateSeatsQuery = {
      // available_seats: available_seats,
      enroled: enrolled 

    }

    // Execute the update query
    fetch(`https://art-server-two.vercel.app/classes/${courseId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(updateSeatsQuery)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Seats and enroled updated successfully');
    })
    .catch(error => {
      console.log('Error updating available seats and enroled:', error);
    });
  };




  // delete my from my selected class 

  const handleDeleteClass = (delId) => {
    console.log('deleted', delId);
    fetch(`https://art-server-two.vercel.app/selected-classes/${delId}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          // refetch();
          // Swal.fire({
          //   position: 'top-center',
          //   icon: 'success',
          //   title: 'Deleted',
          //   showConfirmButton: false,
          //   timer: 1500,
          // });
        }
      });
  };




  return (
    <div className=''>
      
      <form onSubmit={handleSubmit} className="w-2/3">
        <div className="rounded-lg overflow-hidden shadow-lg p-6 bg-white">
          <div className="mb-4">
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
              className="p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:border-blue-300"
            />
          </div>
          <button
            className="btn btn-primary w-full py-2 px-4 text-white rounded-lg shadow-md disabled:opacity-50"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
        </div>
      </form>

      {cardError && <p className='text-error'>{cardError}</p>}

      {transactionId && (
        <p className="text-success">
          Transaction complete with transactionId: {transactionId}
        </p>
      )}
    </div>
  );
};

export default Checkout;
