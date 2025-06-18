// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { useState, useEffect, memo } from 'react';


// ASSETS
import utilityContent from '../assets/data/utilityContent';
import { toTop, throttler } from '../assets/utilityFunctions';


// COMPONENTS
import Checkbox from '../layouts/Checkbox';
import Button from '../layouts/Button';
import RoundButton from '../layouts/RoundButton';
import ErrorMsg from '../layouts/ErrorMsg';


// EXPORT
function ContactForm({ info }) {

    // Form Fields
    const localStorageFields = JSON.parse(localStorage.getItem('formFields'));

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
    const [fields, setFields] = useState(localStorageFields || fieldsDefault);

    // SUPPORT
    const submitContent = utilityContent.contactForm.submitContent;

    // Field Length Limit
    const minLengthLimit = 3;
    const maxLengthLimit = 50;
    const minEmailLength = 8;
    const minPhoneLength = 7;
    const maxPhoneLength = 25;
    const msgMax = 255;

    // Handle On Change
    const handleOnChange = (e) => {

        // Aggiornamento Fields
        const receivedValue = (e.target.type === 'checkbox' ? e.target.checked : e.target.value);
        setFields({
            ...fields,
            [e.target.name]: receivedValue,
        });

        // debug
        // console.log(`${e.target.name}: ${receivedValue}`)
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



        if (!emailRegex.test(fields.email) || fields.email.length < minEmailLength || fields.email.length > maxLengthLimit) {
            setErrorMsg(utilityContent.errorMsg.contactForm.email);
            return false;
        }

        // PHONE
        if (fields.phone.length < minPhoneLength) {
            setErrorMsg(utilityContent.errorMsg.contactForm.phoneShort);
            return false;
        } else if (fields.phone.length > maxPhoneLength) {
            setErrorMsg(utilityContent.errorMsg.contactForm.phoneLong);
            return false;
        }

        // MESSAGE
        if (fields.message.length > msgMax) {
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

    // Send Email
    const sendEmail = async (fields, setErrorMsg) => {
        try {
            setErrorMsg(submitContent.loadingMsg);

            const response = await fetch('/api/nodemailer', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(fields),
            });

            if (!response.ok) {
                const data = await response.json();
                setErrorMsg(data?.error || submitContent.errorMsg);
                return false;
            }

            setErrorMsg(submitContent.successMsg);
            return true;
        } catch (error) {
            console.error(submitContent.errorMsg, error);
            setErrorMsg(submitContent.networkErrorMsg);
            return false;
        }
    };

    // Handle Submit
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Fields Validation Check
        const dataOk = dataValidation();

        if (dataOk) {

            // debug
            // alert(`
            //     FORM INFO:\n
            //     Nome: ${fields.name}\n
            //     Cognome: ${fields.surname}\n
            //     Email: ${fields.email}\n
            //     Telefono: ${fields.phone}\n
            //     Messaggio: ${fields.message}\n
            //     Privacy1: ${fields.privacy1}\n
            //     Privacy2: ${fields.privacy2}\n
            //     Privacy3: ${fields.privacy3}\n
            // `);

            // Send Email
            const success = await sendEmail(fields, setErrorMsg);

            if (success) {
                setFields(fieldsDefault);
                setErrorMsg('');
                setSuccess(true);
                toTop();
            }
        }
    };

    // Throttled Submit
    const throttledSubmit = throttler(handleSubmit, 3000);

    // USE-EFFECT
    useEffect(() => {
        // Aggiornamento Fields su Local Storage
        localStorage.setItem("formFields", JSON.stringify(fields));
    }, [fields])

    // INIT USE-EFFECT
    useEffect(() => {

        // Privacy Default Reset
        setFields({
            ...fields,
            privacy1: false,
            privacy2: false,
            privacy3: false,
        })
    }, [])

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
                            onSubmit={throttledSubmit}
                            autoComplete='on'
                        >

                            <div className='formFields'>
                                <div className='flexLine'>
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

                                    <RoundButton onClick={() => setFields({ ...fields, name: '' })} />
                                </div>

                                {/* ALERT */}
                                {(fields.name.length > 0 && fields.name.length < minLengthLimit) && <p><span className='warning'>✖</span> Nome troppo corto</p>}
                                {fields.name.length > maxLengthLimit && <p><span className='warning'>✖</span> Nome troppo lungo</p>}



                                <div className='flexLine'>
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

                                    <RoundButton onClick={() => setFields({ ...fields, surname: '' })} />
                                </div>

                                {/* ALERT */}
                                {(fields.surname.length > 0 && fields.surname.length < minLengthLimit) && <p><span className='warning'>✖</span> Cognome troppo corto</p>}
                                {fields.surname.length > maxLengthLimit && <p><span className='warning'>✖</span> Cognome troppo lungo</p>}



                                <div className='flexLine'>
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

                                    <RoundButton onClick={() => setFields({ ...fields, email: '' })} />
                                </div>

                                {/* ALERT */}
                                {(fields.email.length > 0 && fields.email.length < minEmailLength) && <p><span className='warning'>✖</span> Email troppo corta</p>}
                                {fields.email.length > maxLengthLimit && <p><span className='warning'>✖</span> Email troppo lunga</p>}
                                {(!fields.email.includes('@') && fields.email.length > 0) && <p><span className='warning'>✖</span> Manca il carattere "@"</p>}



                                <div className='flexLine'>
                                    {/* PHONE */}
                                    <input
                                        type="text"
                                        name='phone'
                                        id='fieldPhone'
                                        placeholder={utilityContent.contactForm.textContent.phone}
                                        value={fields.phone}
                                        onChange={handleOnChange}
                                        className='input'
                                        autoComplete='on'
                                    />

                                    <RoundButton onClick={() => setFields({ ...fields, phone: '' })} />
                                </div>

                                {/* ALERT */}
                                {(fields.phone.length > 0 && fields.phone.length < minPhoneLength) && <p><span className='warning'>✖</span> Numero di telefono troppo corto</p>}
                                {fields.phone.length > maxPhoneLength && <p><span className='warning'>✖</span> Numero di telefono troppo lungo</p>}
                            </div>



                            <div className='space2 flexCol'>
                                {/* MESSAGE */}
                                <textarea
                                    type="textarea"
                                    name='message'
                                    placeholder={utilityContent.contactForm.textContent.message}
                                    value={fields.message}
                                    onChange={handleOnChange}
                                    className='fieldMessage input space1'
                                />

                                <div className='charCounter'>
                                    {/* ALERT */}
                                    {fields.message.length > msgMax && <p><span className='warning'>✖</span> Messaggio troppo lungo</p>}

                                    {/* CHARACTERS COUNTER */}
                                    <p className={`counter ${fields.message.length > msgMax && 'warning'}`}>{fields.message.length} / {msgMax}</p>
                                </div>
                            </div>

                            {/* PRIVACY */}
                            <div className='flexCol space4'>
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
                                <button className='button buttonSolid1'>
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
                            < Button
                                text='TORNA AL FORM'
                                onClick={setSuccessValue}
                                extraClass={'buttonSolid2'}
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