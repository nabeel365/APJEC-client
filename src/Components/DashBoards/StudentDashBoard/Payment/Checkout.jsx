// import React from 'react';

// const Checkout = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default Checkout;




import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../../../Providers/AuthProvider';
// import './Checkout.css';

const Checkout = ({price}) => {

// console.log(cart);

 
  const {user} = useContext(AuthContext)

  const stripe = useStripe();
  const elements = useElements();

  const [cardError, setCardError] = useState('');
  const [clientSecret, setClientSecret] = useState('');
  const [processing, setProcessing] = useState(false);
  const [transactionId, setTransactionId] = useState('');




  useEffect( () => {

    console.log(price);
    if(price > 0){
      fetch('http://localhost:5000/create-payment-intent',{
        method: 'POST',
       headers: {
          
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({price})
               })
               .then(res=>res.json())
               .then(data=> {
                setClientSecret(data.clientSecret)
                console.log(data.clientSecret);
               })
    }

              }, [price])




   



  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }

    // Get a reference to a mounted CardElement. Elements knows how
    // to find your CardElement because there can only ever be one of
    // each type of element.
    const card = elements.getElement(CardElement);

    if (card == null) {
      return;
    }


    // payment method ????    

    const {error, paymentMethod} = await stripe.createPaymentMethod({
      type: 'card',
      card

    })

    if (error) {
      console.log('error', error)
      setCardError(error.message);
    }
    else {
      setCardError('');
      console.log('payment method', paymentMethod)
    }
    setProcessing(true)


    // confirm card payment 

    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
      clientSecret,
      {
          payment_method: {
              card: card,
              billing_details: {
                  email: user?.email || 'unknown',
                  name: user?.displayName || 'anonymous',
                  money: "paid"
              },
          },
      },
  );

  if (confirmError) {
      console.log(confirmError);
  }

  console.log(paymentIntent);
  setProcessing(false)


  // payment status

  if (paymentIntent.status === 'succeeded') {
    setTransactionId(paymentIntent.id);

    const payment = {
      email: user?.email,
      transactionId: paymentIntent.id,
      price,
      date: new Date(),
      money: "paid"
      
     
  }

  fetch('http://localhost:5000/payments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({payment})
  })
    .then(response => response.json())
    .then(data => {
      console.log(data);

      // result. b4 insertedId 

      if (data.insertedId) {
        // display confirm
        console.log('done');

        alert('Payment Successful')
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  


  }
    



  }



  return (
    <div className='max-w-full'>

 <form  onSubmit={handleSubmit} >
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
        />
        <button className='btn btn-primary' type="submit" disabled={!stripe || !clientSecret || processing}>
          Pay
        </button>
      </form>


      {cardError && <p className='text-error'>{cardError}</p>}

      {transactionId && <p className="text-success">Transaction complete with transactionId: {transactionId}</p>}
   


{/*  */}


{/* <form onSubmit={handleSubmit} className="w-2/3 ">
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
)} */}



{/*  */}



    </div>
  );
};

export default Checkout;


