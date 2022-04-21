import header from '../images/illustration-hero.svg';
import PrimaryButton from './elements/PrimaryButton';

function PaymentDetails() {

    return (
        <div>
            <img className='rounded-t-3xl' src={header} alt='' />
            <div className='text-center p-6 xxs:p-8 sm:p-9'>
                <h1 className='text-2xl font-bold py-5'>Payment complete</h1>
                <p className='text-desaturated-blue sm:px-6'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>
                <PrimaryButton className='w-full mt-20' >Return to Plans</PrimaryButton>
            </div>
            
        </div>
    );
}

export default PaymentDetails;