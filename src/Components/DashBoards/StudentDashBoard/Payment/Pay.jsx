import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkout from './Checkout';
import useClasses from '../../../../Hooks/useClasses';

const stripePromise = loadStripe(import.meta.env.VITE_PK);

// console.log(VITE_PK);

const Pay = () => {

    const [classes] = useClasses();

    const price = classes;
    console.log();

    return (
        <div className='w-full'>
            <Elements stripe={stripePromise}>
            <Checkout 
            price={price}
            ></Checkout>

            </Elements>

            
        </div>
    );
};

export default Pay;