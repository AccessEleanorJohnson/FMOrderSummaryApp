import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PrimaryButton from './elements/PrimaryButton';

function PaymentDetailsForm() {
    // Set up navigate and states for form inputs
    const navigate = useNavigate();

    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredCardNum, setEnteredCardNum] = useState('');
    const [enteredDate, setEnteredDate] = useState('');
    const [enteredCvv, setEnteredCvv] = useState('');

    const [nameTouched, setNameTouched] = useState(false);
    const [emailTouched, setEmailTouched] = useState(false);
    const [cardNumTouched, setCardNumTouched] = useState(false);
    const [dateTouched, setDateTouched] = useState(false);
    const [cvvTouched, setCvvTouched] = useState(false);

    // Input change handlers
    const nameChangeHandler = (e) => {
        setNameTouched(true);
        setEnteredName(e.target.value);
    }

    const emailChangeHandler = (e) => {
        setEmailTouched(true);
        setEnteredEmail(e.target.value);
    }

    const cardNumChangeHandler = (e) => {
        setCardNumTouched(true);
        setEnteredCardNum(e.target.value);
    }

    const dateChangeHandler = (e) => {
        setDateTouched(true);
        setEnteredDate(e.target.value);
    }

    const cvvChangeHandler = (e) => {
        setCvvTouched(true);
        setEnteredCvv(e.target.value);
    }

    // field validation
    const validateName = () => {
        if (enteredName.trim() === '') {
            console.log('No! name');
            return false;
        }
        return true;
    }

    const validateEmail = () => {
        if (enteredEmail.trim() === '') {
            console.log('No! email');
            return false;
        }
        return true;
    }

    const validateCardNum = () => {
        if (enteredCardNum.trim() === '' || !/^[0-9]{15,19}$/.test(enteredCardNum)) {
            console.log('No! card');
            return false;
        }
        return true;
    }

    const validateDate = () => {
        if (enteredDate.trim() === '' || !/^[0-9]{2}\/[0-9]{2}$/.test(enteredDate)) {
            console.log('No! date');
            return false;
        }
        return true;
    }

    const validateCvv = () => {
        if (enteredCvv.trim() === '' || !/^[0-9]{3,4}$/.test(enteredCvv)) {
            console.log('No! security');
            return false;
        }
        return true;
    }
    
    const canSubmit = () => {
        
        if (validateName() && validateEmail() && validateCardNum() && validateDate() && validateCvv()) {
            return true;
        }
        console.log('No! submit');
        return false;
        

    }

    // On submit validate and move to confirmation screen
    const onSubmitHandler = (e) => {
        e.preventDefault();

        setNameTouched(true);
        setEmailTouched(true);
        setCardNumTouched(true);
        setDateTouched(true);
        setCvvTouched(true);

        if (!canSubmit()) {
            return;
        }

        console.log(enteredName);
        console.log(enteredCardNum);
        console.log(enteredDate);
        console.log(enteredCvv);
        console.log(enteredEmail);

        navigate('../FMOrderSummaryApp/confirmation');
    }

    // Hide and show text for form validation
    const nameIsInvalid = nameTouched && !validateName();
    const nameClasses = nameIsInvalid ? 'text-red-600' : 'hidden';

    const emailIsInvalid = emailTouched && !validateEmail();
    const emailClasses = emailIsInvalid ? 'text-red-600' : 'hidden';

    const cardNumIsInvalid = cardNumTouched && !validateCardNum();
    const cardNumClasses = cardNumIsInvalid ? 'text-red-600' : 'hidden';

    const dateIsInvalid = dateTouched && !validateDate();
    const dateClasses = dateIsInvalid ? 'text-red-600' : 'hidden';

    const cvvIsInvalid = cvvTouched && !validateCvv();
    const cvvClasses = cvvIsInvalid ? 'text-red-600' : 'hidden';

    return (
        
            
        <form className='px-6 pb-1 text-left' onSubmit={onSubmitHandler}>
            <div>
                <label htmlFor='name' className='block font-medium'>Name</label>
                <input type='text' id='name' name='name' value={enteredName} onChange={nameChangeHandler} className='block p-2 border border-bright-blue rounded w-full' />
                <p className={nameClasses}>Required field</p>
            </div>
            
            <div className='py-2'>
                <label htmlFor='email' className='block'>Email</label>
                <input type='email' id='email' name='email' value={enteredEmail} onChange={emailChangeHandler} className='block p-2 border border-bright-blue rounded w-full' />
                <p className={emailClasses}>Must include and @ symbol</p>
            </div>
            

            <fieldset className='border border-desaturated-blue rounded p-2 pb-3 my-3'>
                <legend className='text-center text-desaturated-blue'>Card Details</legend>

                <label htmlFor='card-number' className='block'>Card Number</label>
                <input type='tel' id='card-number' name='card-number' maxLength='19' value={enteredCardNum} onChange={cardNumChangeHandler} className='block p-2 border border-bright-blue rounded w-full'/>
                <p className={cardNumClasses}>Must be at least 15 digits long</p>

                <div className='flex gap-x-4 flex-wrap'>
                    <div className='block pt-2'>
                        <label htmlFor='expirey-date' className='block'>Expirey Date</label>
                        <input type='text' id='expirey-date' name='expirey-date' value={enteredDate} onChange={dateChangeHandler} placeholder='mm/yy' className='p-2 border border-bright-blue rounded max-w-[6rem]' />
                        <p className={dateClasses}>Must be written in the format mm/yy</p>
                    </div>
                    <div className='block pt-2'>
                        <label htmlFor='cvv' className='block'>Security</label>
                        <input type='text' id='cvv' name='cvv' maxLength='4' value={enteredCvv} onChange={cvvChangeHandler} className='p-2 border border-bright-blue rounded max-w-[3rem]' />
                        <p className={cvvClasses}>Must be 3 or 4 digits</p>
                    </div>
                </div>
            </fieldset>

            <PrimaryButton type='submit' className='w-full' >Confirm and Pay</PrimaryButton>
        </form>
        
    );
}

export default PaymentDetailsForm;