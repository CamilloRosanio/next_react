// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { memo } from "react";


// COMPONENTS
import PicOverlay from "./PicOverlay";


// EXPORT
function SquarePic({ path, selectedPic, setSelectedPic, defaultText, galleryMode }) {

    // SUPPORT
    const validPath = (path && path !== '');

    // Get File Name
    function getFileName(path) {
        if (validPath) {
            const fileWithExtension = path.split('/').pop();
            const fileName = fileWithExtension.split('.').slice(0, -1).join('.');
            return fileName;
        }
    }

    // Overlay - Open
    const openOverlay = (path) => {
        if (selectedPic) {
            setSelectedPic(path);
        }
        return;
    };

    // Overlay - Close
    const closeOverlay = () => {
        if (selectedPic) {
            setSelectedPic(null);
        }
        return;
    };

    return <>

        {validPath ?
            <>
                {/* SQUARE PICTURE */}
                <div className="squarePicContainer" onClick={() => openOverlay(path)}>

                    <img src={path} alt={getFileName(path)} className="squarePic" />

                </div>

                {/* OVERLAY */}
                {(selectedPic && selectedPic === path) && <PicOverlay path={path} onClose={closeOverlay} />}
            </>
            :
            <div className="squarePicContainer" onClick={() => { path && openOverlay(path) }}>
                {/* DEFAULT */}
                {galleryMode ?
                    < div className="squarePicDefault gallery">
                        <h5>{defaultText || 'immagine'}</h5>
                    </div >
                    :
                    < div className="squarePicDefault index">
                        <h5>{defaultText || 'immagine'}</h5>
                    </div >
                }
            </div>
        }

    </>
}


// EXPORT MEMO()
export default memo(SquarePic);