// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { useEffect, useRef, memo } from "react";
import { createPortal } from "react-dom";


// COMPONENTS
import RoundButton from "./RoundButton";


// EXPORT
function PicOverlay({ path, onClose }) {

    // SUPPORT

    // Overlay DOM Ref
    const overlayRef = useRef(null);

    // Close from Overlay
    const handleClickOutside = (e) => {
        if (e.target === overlayRef.current) {
            onClose();
        }
    };

    // INIT USE-EFFECT
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return createPortal(
        <div className="PicOverlay" ref={overlayRef} onClick={handleClickOutside}>

            <div className="OverlayCloseContainer">
                <RoundButton onClick={onClose} />
            </div>


            <img src={path} alt={`Full image: ${path}`} className="OverlayImg" />
        </div>,
        document.body
    );
}


// EXPORT MEMO()
export default memo(PicOverlay);