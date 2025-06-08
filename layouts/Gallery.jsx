// NOTES
// DEPENDENCY: determina il contenuto della pagina "/gallery".


// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { useState, memo } from "react";


// ASSETS
import { toTop } from "../assets/utilityFunctions";


// COMPONENTS
import Button from "./Button";
import PicOverlay from "./PicOverlay";


// EXPORT
function Gallery({ imgList }) {

    // USE-STATE
    const [selectedPic, setSelectedPic] = useState(null);

    // SUPPORT

    // Overlay - Open
    const openOverlay = (picPath) => {
        setSelectedPic(picPath);
    };

    // Overlay - Close
    const closeOverlay = () => {
        setSelectedPic(null);
    };

    return <>

        <div className="gallery space2">

            {/* GALLERY */}
            {imgList.map((picPath, index) => (
                <div className="galleryPicContainer" key={index} onClick={() => openOverlay(picPath)}>
                    <img src={picPath} alt={`pic-${index}`} className="galleryPic" />
                </div>
            ))}

            {/* OVERLAY */}
            {selectedPic && <PicOverlay picPath={selectedPic} onClose={closeOverlay} />}

        </div>

    </>
}


// EXPORT MEMO()
export default memo(Gallery);