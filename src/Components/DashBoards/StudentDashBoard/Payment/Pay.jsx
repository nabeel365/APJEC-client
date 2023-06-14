import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Checkout from './Checkout';
import { useParams } from 'react-router-dom';
import useSelectedClasses from '../../../../Hooks/useSelectedClasses';

const stripePromise = loadStripe(import.meta.env.VITE_PK);

// console.log(VITE_PK);

const Pay = () => {

    const [selectedClass] = useSelectedClasses()

    const { id } = useParams();
    console.log(id);


    const payForClass = selectedClass?.find(isClass => isClass._id == id);

    console.log(payForClass);

    const price = payForClass?.price;

    const name = payForClass?.name;

    const image = payForClass?.image;







    // useEffect(() => {
    //     fetch(`https://art-server-two.vercel.app/classes/${id}`)
    //     .then(res => res.json())
    //     .then(data => console.log(data) )


    // })

    // const price = classes;
    // console.log(classes[0].price);

    return (
        <div className='w-full'>
            <h1 className="text-3xl font-bold">
                Paying
                <span className="text-green-500"> $ {price} </span>
                for class
                <span className="text-blue-500"> {name} </span>
            </h1>
            <Elements stripe={stripePromise}>
                <Checkout
                    id={id}
                    price={price}
                    name={name}
                    image={image}
                ></Checkout>

            </Elements>


        </div>
    );
};

export default Pay;

