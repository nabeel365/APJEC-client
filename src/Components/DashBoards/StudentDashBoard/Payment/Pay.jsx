import React from 'react';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
import Checkout from './Checkout';
import useClasses from '../../../../Hooks/useClasses';

// const stripePromise = loadStripe(import.meta.env.VITE_PK);

const Pay = () => {

    const [classes] = useClasses();

    const price = classes.price

    return (
        <div>
            {/* <Elements stripe={stripePromise}>
            <Checkout 
            price={price}
            ></Checkout>

            </Elements> */}

            pay 
        </div>
    );
};

export default Pay;