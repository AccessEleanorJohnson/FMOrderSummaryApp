import icon from '../images/icon-music.svg';

function OrderSummaryPlanSelect () {

    return (
        <div className='my-4 py-4 bg-very-pale-blue rounded-xl flex justify-around items-center' id='plan-selector'>
            <div className='flex items-center'>
                <img className='pr-4' src={icon} alt='' />
                <div className=''>
                    <h3 className='font-bold p-1'>Annual Plan</h3>
                    <p className='text-desaturated-blue'>$59.99/year</p>
                </div>
            </div>    
            <a className='text-bright-blue hover:text-bright-blue/80 underline hover:no-underline font-bold' href='#'>Change</a>
        </div>
    );
}

export default OrderSummaryPlanSelect;