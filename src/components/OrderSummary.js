import { useState } from 'react';
import { Link } from 'react-router-dom';
import OrderSummaryForm from './OrderSummaryForm';
import header from '../images/illustration-hero.svg';
import PaymentDetails from './PaymentDetails';

function OrderSummary () {
    const planOptions = [
        {   
            id: 0,
            duration: 'Annual',
            price: 59.99
        },
        {
            id: 1,
            duration: 'Monthly',
            price: 6
        },
    ];

    const [proceed, setProceed] = useState(false);
    const [plan, setPlan] = useState(planOptions[0]);

    
    const confirmHandler = (planNum) => {
        setProceed(true);
        setPlan(planOptions[planNum]);
        console.log(plan);
    }

    return (

        <div className='text-center'>
            <img className='rounded-t-3xl' src={header} alt='' />
            
            {!proceed &&  
                <div className='text-center p-6 pb-2 xxs:px-8 sm:px-9'>
                    <h1 className='text-2xl font-bold py-5'>Order Summary</h1>
                    <p className='text-desaturated-blue sm:px-6'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>

                    <OrderSummaryForm onConfirm={confirmHandler} planOptions={planOptions} />

                </div>
            }

            {proceed && <PaymentDetails plan={plan} />}

            <Link className='inline-block p-2 mb-4 text-desaturated-blue hover:text-black text-sm font-bold hover:underline' to='#'>Cancel Order</Link>
        </div>

    );

}

export default OrderSummary;