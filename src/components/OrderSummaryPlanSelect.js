import { useState } from 'react';
import DurationMenu from './DurationMenu';

import icon from '../images/icon-music.svg';

function OrderSummaryPlanSelect () {

    // Tempary test data to test functionality on this component and DurationMenu
    const planOptions = [
        {
            duration: 'Annual',
            price: 59.99
        },
        {
            duration: 'Monthly',
            price: 6
        },
    ];
    const [displayDurationMenu, setDisplayDurationMenu] = useState(false);
    const [selectedOption, setSelectedOption] = useState(0);

    // Switches from displaying the selected option to displaying the DurationMenu
    const onClickHandler = (e) => {
        e.preventDefault();
        toggleDurationMenu();
    }

    // Handler takes 'duration' property passed up from DurationMenu and makes it the selected option
    const onSelectHandler = (selected) => {
        toggleDurationMenu();
        setSelectedOption(selected === 'Annual' ? 0 : 1);
    }

    // Toggle function shared by handlers
    const toggleDurationMenu = () => {
        setDisplayDurationMenu(!displayDurationMenu);
    }

    const durationToTimeSpan = (duration) => {
        return duration === 'Annual' ? 'year' : 'month';
    }

    return (
        <>  
            {displayDurationMenu && <DurationMenu options={planOptions} onSelect={onSelectHandler} /> }  

            {!displayDurationMenu && 
                <div className='my-4 py-4 bg-very-pale-blue rounded-xl flex justify-around items-center' id='plan-selector'>
                    <div className='flex items-center'>
                        <img className='pr-4' src={icon} alt='' />
                        <div className=''>
                            <h3 className='font-bold p-1'>{planOptions[selectedOption].duration} Plan</h3>
                            <p className='text-desaturated-blue'>${`${planOptions[selectedOption].price}/${durationToTimeSpan(planOptions[selectedOption].duration)}`}</p>
                        </div>
                    </div>    
                    <button className='text-bright-blue hover:text-bright-blue/80 underline hover:no-underline font-bold' onClick={onClickHandler} >Change</button>
                </div>
            }
        </>    
    );
}

export default OrderSummaryPlanSelect;