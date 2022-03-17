import OrderSummaryPlanSelect from './OrderSummaryPlanSelect';

function OrderSummaryForm() {

    return (
        <form className='pb-6 flex flex-col'>
            <OrderSummaryPlanSelect />
            <button className='block my-5 py-4 text-white font-bold bg-bright-blue hover:bg-bright-blue/80 rounded-xl shadow-xl shadow-bright-blue/20'>Proceed to Payment</button>
            <a className='p-2 text-desaturated-blue hover:text-black text-sm font-bold hover:underline' href='#'>Cancel Order</a>
        </form>
    );
}

export default OrderSummaryForm;