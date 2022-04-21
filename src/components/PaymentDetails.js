import icon from '../images/icon-music.svg';
import PaymentDetailsForm from './PaymentDetailsForm';

function PaymentDetails(props) {
    
    const durationToTimeSpan = (duration) => {
        return duration === 'Annual' ? 'year' : 'month';
    }

    return (
        <>
            <div className='mb-4 py-2 bg-very-pale-blue'>
                <div className='max-w-[12rem] m-auto flex justify-around items-center flex items-center'>
                    <img className='pr-4' src={icon} alt='' />
                    <div>
                        <h3 className='font-bold p-1'>{props.plan.duration}</h3>
                        <p className='text-desaturated-blue'>{`$${props.plan.price}/${durationToTimeSpan(props.plan.duration)}`}</p>
                    </div>
                </div>  
            </div>      
            <PaymentDetailsForm />
        </>
    );
}

export default PaymentDetails;