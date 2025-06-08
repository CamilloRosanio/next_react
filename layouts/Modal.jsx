// READY FOR CLIENT SIDE
"use client";


// REACT
import { useEffect } from "react";


// UTILITY
import { createPortal } from "react-dom";


// COMPONENTS
import Button from "./Button";


// EXPORT
export default function Modal({ closeModal, text, confirm }) {

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

                <h3 className="space1">Conferma necessaria</h3>

                <p className="modalText space3">{text}</p>

                {/* BUTTONS */}
                <div className="modalButtonsContainer">
                    <Button
                        text='CONFERMA'
                        onClick={() => {
                            confirm();
                            closeModal();
                        }}
                        extraClass='color3'
                    />

                    <Button
                        text='ANNULLA'
                        onClick={() => closeModal()}
                        extraClass='closeModal'
                    />
                </div>
            </div>
        </div>

        , document.body);
}