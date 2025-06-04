// READY FOR CLIENT SIDE
"use client";


// ASSETS
const imgWarning = '/miscellaneous/warning-gold.png';


// COMPONENT EXPORT
export default function ErrorMsg({
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