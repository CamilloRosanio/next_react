// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { memo } from "react";


// COMPONENTS
import RoundButton from "./RoundButton"


// EXPORT
function Select({ placeholder, options, value, setValue }) {

    // NOTA: utilizzare solo come Select per filtri di ricerca e non come Field non controllato

    return <>

        <div className="filterContainer">

            {/* OPTIONS */}
            <select
                onChange={e => setValue(e.target.value)}
                value={value}
                className='select'
            >
                <option value=''>{placeholder || '▼ Filter by..'}</option>

                {options ? options.map((option, index) => (
                    <option
                        key={index}
                        value={option}
                    >
                        {option}
                    </option>
                ))

                    :

                    null
                }
            </select>

            {/* RESET BUTTON */}
            <RoundButton
                onClick={() => { setValue('') }}
                extraClass='roundButtonWarning'
            />
        </div>
    </>
}


// EXPORT MEMO()
export default memo(Select);



