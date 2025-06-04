// COMPONENT EXPORT
export default function Toggle({
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

            {(textOn || textOff) && <p>{value ? textOn : textOff}</p>}
        </div>

    </>
}