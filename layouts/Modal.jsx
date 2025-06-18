// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { useEffect } from "react";
import { createPortal } from "react-dom";


// ## LANGUAGE
// CONTEXTS
// import { useMainContext } from "../contexts/MainContext";


// ASSETS
import utilityContent from "../assets/data/utilityContent";


// COMPONENTS
import Button from "./Button";


// EXPORT
export default function Modal({ closeModal, text, confirm }) {

    // ## LANGUAGE
    // DATA - CONTEXT
    // const { utilityContent } = useMainContext();

    // INIT USE-EFFECT
    useEffect(() => {
        document.body.style.overflow = "hidden";
        return () => {
            document.body.style.overflow = "";
        };
    }, []);

    return createPortal(

        <div className="modalOverlay">
            <div className="modal card">

                <h3 className="space1">Conferma</h3>

                <p className="modalText space3">{text}</p>

                {/* BUTTONS */}
                <div className="modalButtonsContainer">
                    <Button
                        text={utilityContent.modal.confirmText}
                        onClick={() => {
                            confirm();
                            closeModal();
                        }}
                        extraClass='color1'
                    />

                    <Button
                        text={utilityContent.modal.cancelText}
                        onClick={() => closeModal()}
                        extraClass='closeModal'
                    />
                </div>
            </div>
        </div>

        , document.body);
}