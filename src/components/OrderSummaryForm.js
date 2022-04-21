import { useState } from 'react';
import OrderSummaryPlanSelect from './OrderSummaryPlanSelect';
import PrimaryButton from './elements/PrimaryButton';

function OrderSummaryForm(props) {

    const [plan, setPlan] = useState(0);

    const selectHandler = (plan) => {
        console.log(plan);
        setPlan(plan);
    }

    const clickHandler = (e) => {
        e.preventDefault();
        props.onConfirm(plan);
    }

    return (
        <form className='flex flex-col'>
            <OrderSummaryPlanSelect onPlanSelect={selectHandler} planOptions={props.planOptions} />
            <PrimaryButton type='submit' onClick={clickHandler} >Proceed to Payment</PrimaryButton>
        </form>
    );
}

export default OrderSummaryForm;