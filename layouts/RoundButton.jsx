// COMPONENT EXPORT
export default function RoundButton({ onClick, icon }) {
    return <>

        <p className="roundButton" onClick={onClick}>
            <span className="checkMark">
                <strong>{icon || '✚'}</strong>
            </span>
        </p>

    </>
}