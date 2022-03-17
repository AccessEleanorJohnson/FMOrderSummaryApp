import OrderSummaryForm from './OrderSummaryForm';
import header from '../images/illustration-hero.svg';

function OrderSummary () {

    return (
        <>
            <img className='rounded-t-3xl' src={header} alt='' />
            <div className='text-center p-6 xxs:p-8 sm:p-9'>
                <h1 className='text-2xl font-bold py-5'>Order Summary</h1>
                <p className='text-desaturated-blue sm:px-6'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>

                <OrderSummaryForm />

            </div>
        </>
    );

}

export default OrderSummary;