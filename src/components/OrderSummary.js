// import OderSummaryForm from './OrderSummaryForm';
import './OrderSummary.css';
import header from '../images/illustration-hero.svg';

function OrderSummary (props) {

    return (
        <div className='order-summary'>
            <img className='order-summary__header' src={header} />
            <h2 className='order-summary__title'>Order Summary</h2>
            <p className='order-summary__text'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</p>

        </div>
    );

}

export default OrderSummary;