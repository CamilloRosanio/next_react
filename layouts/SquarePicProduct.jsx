// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { memo } from "react";


// EXPORT
function SquarePicProduct({ path, defaultText }) {

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

    return <>

        {validPath ?
            <>
                {/* SQUARE PICTURE */}
                <div className="squarePicContainer">

                    <img src={path} alt={getFileName(path)} className="squarePic" />

                </div>
            </>
            :
            <div className="squarePicContainer">
                {/* DEFAULT IMG */}
                < div className="squarePicDefault">
                    <h5>{defaultText || 'immagine'}</h5>
                </div >
            </div>
        }

    </>
}


// EXPORT MEMO()
export default memo(SquarePicProduct);