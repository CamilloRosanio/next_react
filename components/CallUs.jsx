// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { useState, memo } from 'react';


// ## LANGUAGE
// CONTEXTS
// import { useMainContext } from "../contexts/MainContext";


// ASSETS
import { isValidHours, getPhone, allowedTime } from '../assets/utilityFunctions';
import utilityContent from '../assets/data/utilityContent';


// COMPONENTS
import Button from '../layouts/Button';
import ErrorMsg from '../layouts/ErrorMsg';


// EXPORT
function CallUs({ info }) {

    // ## LANGUAGE
    // DATA - CONTEXT
    // const { utilityContent } = useMainContext();

    // USE-STATE
    const [telTo, setTelTo] = useState(null);
    const [errorMsg, setErrorMsg] = useState('');

    // SUPPORT

    // Data Cleaning
    const validHours = utilityContent.orariPubblico && isValidHours(utilityContent.orariPubblico, 0);

    // Call Now
    const callNow = () => {

        // debug
        // console.log(`
        //     CALL INFO:\n
        //     Phone ENC: ${info.encodePhone}\n
        //     Phone: ${info.contactPhone}\n
        //     Hours: ${utilityContent.orariPubblico}
        // `);

        // DATA
        const phone = getPhone(info.contactPhone, info.encodePhone);
        const authorization = allowedTime(utilityContent.orariPubblico, 1);

        // TEL
        if (authorization) {
            setErrorMsg('');
            alert('orario OK');
            setTelTo(`tel:${phone}`);
        } else {
            setErrorMsg(utilityContent.errorMsg.callUs.allowedTime);
            setTelTo(null);
        }
    }

    return <>

        {info.contactPhone &&

            <div>

                <h3 className='space1'><span className='listSymbol'>{utilityContent.listSymbol} </span>{utilityContent.callUs.textContent.title}</h3>

                <div className='card space2'>
                    <h4 className='space1'>{utilityContent.callUs.textContent.subTitle}</h4>

                    {/* SLOTS */}
                    <div className='callHours space2'>
                        <p className='space2'>{!validHours ? utilityContent.callUs.textContent.slotsDefinedOff : utilityContent.callUs.textContent.slotsDefinedOn}</p>

                        {validHours &&
                            // DAY SLOTS
                            <ul className='daySlots space4'>
                                {Object.entries(validHours).map(([day, slots]) => (
                                    <li key={day} className='slot'>
                                        <h5 className='day'>{day}</h5>
                                        <div className='hours'>
                                            {slots.map((slot, index) => (
                                                <p key={index}>{slot.start} - {slot.end}</p>
                                            ))}
                                        </div>
                                    </li>
                                ))}
                            </ul>

                        }
                    </div>

                    {/* ERROR MESSAGE */}
                    {errorMsg == '' ? '' :
                        <ErrorMsg
                            text={errorMsg}
                            extraClass='space2'
                        />
                    }

                    <div className='buttonContainerContacts' onClick={callNow}>
                        <a href={telTo}>
                            < Button
                                text={utilityContent.callUs.textContent.callButton}
                                extraClass={'buttonSolid1'}
                            />
                        </a>
                    </div>
                </div>
            </div>
        }
    </>
}


// EXPORT MEMO()
export default memo(CallUs);