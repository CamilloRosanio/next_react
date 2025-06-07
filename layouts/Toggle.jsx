// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { memo } from "react";


// EXPORT
function Toggle({
    value,
    setValue,
    textOn,
    textOff,
    iconSx,
    iconDx,
}) {

    return <>

        <div className="toggle">
            {iconSx && <span>{iconSx}</span>}

            <div onClick={setValue} className={value ? 'toggleContainer on' : 'toggleContainer'}>
                <div className={value ? 'togglePoint on' : 'togglePoint'}></div>
            </div>

            {iconDx && <span>{iconDx}</span>}

            {(textOn && textOff) && <p>{value ? textOn : textOff}</p>}
        </div>

    </>
}


// EXPORT MEMO()
export default memo(Toggle);