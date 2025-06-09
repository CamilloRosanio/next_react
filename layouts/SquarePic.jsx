// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { useState, useEffect, memo } from "react";


// ENV


// CONTEXTS
import { useMainContext } from "../contexts/MainContext";


// ASSETS


// SUPPORT


// COMPONENTS
import PicOverlay from "./PicOverlay";


// EXPORT
function SquarePic({ path, selectedPic, setSelectedPic }) {

    // SUPPORT

    // Get File Name
    function getFileName(path) {
        const fileWithExtension = path.split('/').pop();
        const fileName = fileWithExtension.split('.').slice(0, -1).join('.');
        return fileName;
    }

    // Overlay - Open
    const openOverlay = (path) => {
        setSelectedPic(path);
    };

    // Overlay - Close
    const closeOverlay = () => {
        setSelectedPic(null);
    };

    return <>

        {/* SQUARE PICTURE */}
        <div className="squarePicContainer" onClick={() => openOverlay(path)}>

            <img src={path} alt={getFileName(path)} className="squarePic" />

        </div>

        {/* OVERLAY */}
        {selectedPic === path && <PicOverlay path={path} onClose={closeOverlay} />}

    </>
}


// EXPORT MEMO()
export default memo(SquarePic);