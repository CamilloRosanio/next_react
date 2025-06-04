// READY FOR CLIENT SIDE
"use client";


// COMPONENT EXPORT
export default function Button1({
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