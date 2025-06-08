// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { memo } from "react";


// COMPONENT EXPORT
function Button({
    text,
    onClick,
    path,
    extraClass,
}) {

    // SUPPORT

    // Navigate to (in nuova scheda)
    const navTo = () => {
        if (path) {
            window.open(path, '_blank');
        }
    };

    // Handle click
    const handleClick = (event) => {
        if (typeof onClick === 'function') {
            onClick(event);
        } else {
            navTo();
        }
    };

    return (
        <button
            type='button'
            onClick={handleClick}
            className={extraClass ? `button ${extraClass}` : 'button'}
        >
            {text?.toUpperCase()}
        </button>
    );
}

// EXPORT MEMO()
export default memo(Button);
