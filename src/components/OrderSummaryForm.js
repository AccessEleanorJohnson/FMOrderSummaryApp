import OrderSummaryPlanSelect from './OrderSummaryPlanSelect';

import './OrderSummaryForm.css';

function OrderSummaryForm() {

    return (
        <div className='order-summary-form'>
            <OrderSummaryPlanSelect />
            <button className='order-summary-form__button order-summary-form__button--active'>Proceed to Payment</button>
            <a className='order-summary-form__cancel order-summary-form__cancel--active' href='#'>Cancel Order</a>
        </div>
    );
}

export default OrderSummaryForm;