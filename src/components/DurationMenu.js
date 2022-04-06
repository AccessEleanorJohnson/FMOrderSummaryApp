function DurationMenu (props) {

    //Send selected value up to calling component
    const onChange = (e) => {
        console.log(e.target.value);
        props.onSelect(e.target.value);
    }

    const durationToTimeSpan = (duration) => {
        return duration === 'Annual' ? 'year' : 'month';
    }

    return (
        <div className='flex flex-col items-center xxs:flex-row m-4'>
            {props.options.map(option => {
                return (
                    <div key={option.duration} className='inline relative m-1 p-4 w-full xxs:w-1/2 bg-very-pale-blue rounded-xl'>

                        <label htmlFor={option.duration} 
                        
                        className='block relative cursor-pointer underline text-desaturated-blue font-bold first-line:text-bright-blue first-line:underline'>
                            {/* Content of the label */}
                            {`${option.duration}`}
                            <br />
                            {`$${option.price}/${durationToTimeSpan(option.duration)}`}
                        </label>

                        {/* Hidden checkbox input */}
                        <input type='checkbox' id={option.duration} name='duration' value={option.duration} onChange={onChange} className='appearance-none absolute h-full w-full top-0 left-0 z-10 rounded-xl cursor-pointer hover:border hover:border-bright-blue hover:border-4' />
                    </div>
                );
            })}
        </div> 
    );
}

export default DurationMenu;