// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { memo } from "react";


// ASSETS
const imgWarning = '/miscellaneous/warning-gold.png';


// EXPORT
function ErrorMsg({
    text,
    extraClass,
}) {
    return <>

        <div className={extraClass ? `errorMsg ${extraClass}` : 'errorMsg'}>
            <img src={imgWarning} alt="warning" />
            <p className='errorMsg'>{text}</p>
        </div>

    </>
}


// EXPORT MEMO()
export default memo(ErrorMsg);