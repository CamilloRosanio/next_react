// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { useState, memo } from 'react';


// ASSETS
import utilityContent from '../assets/data/utilityContent';
import { toTop, getEmail } from '../assets/utilityFunctions';


// COMPONENTS
import Checkbox from '../layouts/Checkbox';
import Button1 from '../layouts/Button';
import ErrorMsg from '../layouts/ErrorMsg';


// EXPORT
function ContactForm({ info }) {

    // SUPPORT
    console.log('MOUNTING: Contact Form');

    // Form Fields
    const fieldsDefault = {
        name: '',
        surname: '',
        email: '',
        phone: '',
        message: '',
        privacy1: false,
        privacy2: false,
        privacy3: false,
    };

    // USE-STATE
    const [errorMsg, setErrorMsg] = useState('');
    const [success, setSuccess] = useState(false);
    const [fields, setFields] = useState(fieldsDefault);


    // SUPPORT

    // Field Length Limit
    const minLengthLimit = 2;
    const maxLengthLimit = 70;

    // Handle On Change
    const handleOnChange = (e) => {
        const receivedValue = (e.target.type === 'checkbox' ? e.target.checked : e.target.value);
        setFields({
            ...fields,
            [e.target.name]: receivedValue,
        });
    }

    // Set Privacy Values
    const setPrivacy1 = () => {
        if (fields.privacy1 == false) {
            setFields({
                ...fields,
                privacy1: true,
            });
        } else if (fields.privacy1 == true) {
            setFields({
                ...fields,
                privacy1: false,
            });
        }
    };
    const setPrivacy2 = () => {
        if (fields.privacy2 == false) {
            setFields({
                ...fields,
                privacy2: true,
            });
        } else if (fields.privacy2 == true) {
            setFields({
                ...fields,
                privacy2: false,
            });
        }
    };
    const setPrivacy3 = () => {
        if (fields.privacy3 == false) {
            setFields({
                ...fields,
                privacy3: true,
            });
        } else if (fields.privacy3 == true) {
            setFields({
                ...fields,
                privacy3: false,
            });
        }
    };

    // Set Success Value
    const setSuccessValue = () => {
        if (!success) {
            setSuccess(true);
        } else if (success) {
            setSuccess(false);
        }
    };

    // Data Validation
    const dataValidation = () => {

        // NAME
        if (fields.name.length < minLengthLimit) {
            setErrorMsg(utilityContent.errorMsg.contactForm.nameShort);
            return false;
        } else if (fields.name.length > maxLengthLimit) {
            setErrorMsg(utilityContent.errorMsg.contactForm.nameLong);
            return false;
        }

        // SURNAME
        if (fields.surname.length < minLengthLimit) {
            setErrorMsg(utilityContent.errorMsg.contactForm.surnameShort);
            return false;
        } else if (fields.surname.length > maxLengthLimit) {
            setErrorMsg(utilityContent.errorMsg.contactForm.surnameLong);
            return false;
        }

        // EMAIL
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(fields.email) || fields.email.length < 8 || fields.email.length > maxLengthLimit) {
            setErrorMsg(utilityContent.errorMsg.contactForm.email);
            return false;
        }

        // PHONE
        if (fields.phone.length < 8) {
            setErrorMsg(utilityContent.errorMsg.contactForm.phoneShort);
            return false;
        } else if (fields.phone.length > 25) {
            setErrorMsg(utilityContent.errorMsg.contactForm.phoneLong);
            return false;
        }

        // MESSAGE
        if (fields.message.length > 600) {
            setErrorMsg(utilityContent.errorMsg.contactForm.message);
            return false;
        }

        // PRIVACY
        if (!fields.privacy1) {
            setErrorMsg(utilityContent.errorMsg.contactForm.privacy1);
            return false;
        }

        // POSITIVE RESPONSE
        setErrorMsg("");
        return true;
    };

    // Handle Submit
    const handleSubmit = (e) => {

        e.preventDefault();

        // VALIDATION
        const dataOk = dataValidation();

        // POSITIVE VALIDATION
        if (dataOk) {

            // DEBUG
            alert(`
                FORM INFO:\n
                Nome: ${fields.name}\n
                Cognome: ${fields.surname}\n
                Email: ${fields.email}\n
                Telefono: ${fields.phone}\n
                Messaggio: ${fields.message}\n
                Privacy1: ${fields.privacy1}\n
                Privacy2: ${fields.privacy2}\n
                Privacy3: ${fields.privacy3}\n
            `);

            // EMAIL JS
            getEmail(info.contactEmail, info.encodeEmail);

            // RESET
            setFields(fieldsDefault);
            setErrorMsg('');
            setSuccess(true);
            toTop();
        }
    }

    return <>

        {info.contactEmail &&

            <div>
                <h3 className='space1'><span className='listSymbol'>{utilityContent.listSymbol} </span>{utilityContent.contactForm.textContent.title}</h3>

                <div className="card space2">

                    {!success ?
                        // FORM
                        < form
                            action=""
                            className='contactForm'
                            onSubmit={handleSubmit}
                            autoComplete='on'
                        >

                            <div className='space1'>
                                {/* NAME */}
                                <input
                                    type="text"
                                    name='name'
                                    id='fieldName'
                                    placeholder={utilityContent.contactForm.textContent.name}
                                    value={fields.name}
                                    onChange={handleOnChange}
                                    className='input'
                                    autoComplete='on'
                                    onInvalid={(e) => e.target.setCustomValidity(utilityContent.errorMsg.requiredField)}
                                    onInput={(e) => e.target.setCustomValidity('')}
                                    required
                                />

                                {/* SURNAME */}
                                <input
                                    type="text"
                                    name='surname'
                                    id='fieldSurname'
                                    placeholder={utilityContent.contactForm.textContent.surname}
                                    value={fields.surname}
                                    onChange={handleOnChange}
                                    className='input'
                                    autoComplete='on'
                                    onInvalid={(e) => e.target.setCustomValidity(utilityContent.errorMsg.requiredField)}
                                    onInput={(e) => e.target.setCustomValidity('')}
                                    required
                                />
                            </div>

                            <div className='space1'>
                                {/* EMAIL */}
                                <input
                                    type="text"
                                    name='email'
                                    id='fieldEmail'
                                    placeholder={utilityContent.contactForm.textContent.email}
                                    value={fields.email}
                                    onChange={handleOnChange}
                                    className='input'
                                    autoComplete='on'
                                    onInvalid={(e) => e.target.setCustomValidity(utilityContent.errorMsg.requiredField)}
                                    onInput={(e) => e.target.setCustomValidity('')}
                                    required
                                />

                                {/* PHONE */}
                                <input
                                    type="number"
                                    name='phone'
                                    id='fieldPhone'
                                    placeholder={utilityContent.contactForm.textContent.phone}
                                    value={fields.phone}
                                    onChange={handleOnChange}
                                    className='input'
                                    autoComplete='on'
                                />
                            </div>

                            <div className='space1'>
                                {/* MESSAGE */}
                                <textarea
                                    type="textarea"
                                    name='message'
                                    placeholder={utilityContent.contactForm.textContent.message}
                                    value={fields.message}
                                    onChange={handleOnChange}
                                    className='fieldMessage input space1'
                                />
                            </div>

                            {/* PRIVACY */}
                            <div className='flexCol space2'>
                                <Checkbox
                                    value={fields.privacy1}
                                    setValue={setPrivacy1}
                                    text={utilityContent.disclaimers.Privacy1}
                                    extraClass=''
                                />
                                <Checkbox
                                    value={fields.privacy2}
                                    setValue={setPrivacy2}
                                    text={utilityContent.disclaimers.Privacy2}
                                    extraClass=''
                                />
                                <Checkbox
                                    value={fields.privacy3}
                                    setValue={setPrivacy3}
                                    text={utilityContent.disclaimers.Privacy3}
                                    extraClass=''
                                />
                            </div>

                            {/* ERROR MESSAGE */}
                            {errorMsg == '' ? '' :
                                <ErrorMsg
                                    text={errorMsg}
                                    extraClass='space2'
                                />
                            }

                            {/* BUTTON */}
                            <div className='buttonContainerContacts'>
                                <button className='button color2'>
                                    {utilityContent.contactForm.textContent.submitButton}
                                </button>
                            </div>
                        </form>

                        :

                        // FEEDBACK
                        <div>
                            <div className='flexCol'>
                                <h4>{utilityContent.contactForm.textContent.sentConfirmation}</h4>
                                <p className='space2'>{utilityContent.contactForm.textContent.sentThankYou}</p>

                            </div>
                            < Button1
                                text='TORNA AL FORM'
                                onClick={setSuccessValue}
                                extraClass={'color2'}
                            />
                        </div>
                    }
                </div>
            </div >
        }
    </>
}


// EXPORT MEMO()
export default memo(ContactForm);