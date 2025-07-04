// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { memo } from "react";


// COMPONENT EXPORT
function RoundButton({ onClick, icon, extraClass }) {
    return <>

        <p className={extraClass ? `roundButton ${extraClass}` : 'roundButton'} onClick={onClick}>
            <span className="checkMark">
                <strong>{icon || '✚'}</strong>
            </span>
        </p>

    </>
}


// EXPORT MEMO()
export default memo(RoundButton);