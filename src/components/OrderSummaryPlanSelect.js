import icon from '../images/icon-music.svg';
import './OrderSummaryPlanSelect.css';

function OrderSummaryPlanSelect () {

    return (
        <div className='plan-selector'>
            <img className='plan-selector__icon' src={icon} />
            <div>
                <h3 className='plan-selector__title'>Annual Plan</h3>
                <p className='plan-selector__price'>$59.99/year</p>
            </div>
            <a className='plan-selector__change' href='#'>Change</a>
        </div>
    );
}

export default OrderSummaryPlanSelect;