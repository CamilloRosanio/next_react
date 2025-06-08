// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { useEffect, useRef, memo } from "react";
import { createPortal } from "react-dom";


// COMPONENTS
import RoundButton from "./RoundButton";


// EXPORT
function PicOverlay({ picPath, onClose }) {

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
        <div className="galleryPicOverlay" ref={overlayRef} onClick={handleClickOutside}>

            <div className="OverlayCloseContainer">
                <RoundButton onClick={onClose} />
            </div>


            <img src={picPath} alt="full image" className="galleryOverlayImg" />
        </div>,
        document.body
    );
}


// EXPORT MEMO()
export default memo(PicOverlay);