// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { useState, useEffect } from 'react';


// EXPORT
export default function Checkbox({
    value,
    setValue,
    text,
    extraClass,
}) {

    // USE-STATE
    const [cross, setCross] = useState('');

    // USE-EFFECT
    useEffect(() => {
        if (value) {
            setCross('✚');
        } else if (!value) {
            setCross('');
        }
    }, [value]);

    return <>

        <div className='flexLine checkboxContainer' onClick={setValue}>

            <div
                className={extraClass ? `checkbox ${extraClass}` : 'checkbox'}
            >
                <p className='checkMark'>{cross}</p>
            </div>

            {text == '' ? <p className='missingData'>Disclaimer Text</p> : <p className='checkboxText'>{text}</p>}
        </div>

    </>
}