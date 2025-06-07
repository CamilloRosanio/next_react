// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { memo } from "react";


// COMPONENT EXPORT
function Button({
    text,
    onClick,
    extraClass,
}) {
    return <>

        <button type='button' onClick={onClick} className={extraClass ? `button ${extraClass}` : 'button'}>
            {text.toUpperCase()}
        </button>

    </>
}


// EXPORT MEMO()
export default memo(Button);