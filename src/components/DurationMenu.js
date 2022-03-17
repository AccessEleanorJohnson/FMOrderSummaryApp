import { useState } from 'react';

function DurationMenu (props) {
    const [focusOn, setFocusOn] = useState('');

    const durationToTimeSpan = (duration) => {
        return duration === 'Annual' ? 'year' : 'month';
    }

    const onClick = (e) => {
        console.log(e);
        props.onSelect(e.target.attributes.for.value);
    }

    // Create a visable focus since the radio that is actually focused in hidden
    const onFocus = (e) => {
        // console.log(e.target.value)
        setFocusOn(`${e.target.value}`)
    }

    const onBlur = () => {
        setFocusOn('');
    }
    
    return (
        <div className='flex flex-col items-center xxs:flex-row m-4'>
            {props.options.map(option => {
                return (
                    <div key={option.duration} className={`inline m-1 p-4 pb-0 w-full xxs:w-1/2 bg-very-pale-blue rounded-xl ${focusOn === option.duration && 'outline outline-bright-blue'}`}>

                        <label htmlFor={option.duration}
                        onClick={onClick}
                        className='block cursor-pointer underline text-desaturated-blue hover:text-bright-blue/80 hover:font-extrabold font-bold first-line:text-bright-blue hover:firstline:text-bright-blue/80 first-line:underline'>
                            {/* Content of the label */}
                            {`${option.duration}`}
                            <br />
                            {`$${option.price}/${durationToTimeSpan(option.duration)}`}
                        </label>

                        {/* Hidden radio input */}
                        <input type='radio' id={option.duration} name='duration' value={option.duration} onFocus={onFocus} onBlur={onBlur} className='opacity-0' />
                    </div>
                );
            })}
        </div> 
    );
}

export default DurationMenu;