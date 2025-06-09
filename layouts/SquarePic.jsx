// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { memo } from "react";


// COMPONENTS
import PicOverlay from "./PicOverlay";


// EXPORT
function SquarePic({ path, selectedPic, setSelectedPic, defaultText }) {

    // SUPPORT

    // Get File Name
    function getFileName(path) {
        if (path) {
            const fileWithExtension = path.split('/').pop();
            const fileName = fileWithExtension.split('.').slice(0, -1).join('.');
            return fileName;
        }
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

        {path ?
            <>
                {/* SQUARE PICTURE */}
                <div className="squarePicContainer" onClick={() => { path && openOverlay(path) }}>

                    <img src={path} alt={getFileName(path)} className="squarePic" />

                </div>

                {/* OVERLAY */}
                {selectedPic === path && <PicOverlay path={path} onClose={closeOverlay} />}
            </>

            :

            <>
                {/* DEFAULT */}
                < div className="squarePicDefault">
                    <h4>{defaultText}</h4>
                </div >
            </>
        }







    </>
}


// EXPORT MEMO()
export default memo(SquarePic);