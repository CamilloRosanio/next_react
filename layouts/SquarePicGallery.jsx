// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { memo } from "react";


// COMPONENTS
import PicOverlay from "./PicOverlay";


// EXPORT
function SquarePicGallery({ path, selectedPic, setSelectedPic }) {

    // SUPPORT

    // Get Image Name
    function getImgName(path) {
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

            <img src={path} alt={getImgName(path)} className="squarePic" />

        </div>

        {/* OVERLAY */}
        {selectedPic === path && <PicOverlay path={path} onClose={closeOverlay} />}

    </>
}


// EXPORT MEMO()
export default memo(SquarePicGallery);