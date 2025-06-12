// NOTES
// DEPENDENCY: determina il contenuto della pagina "/gallery".


// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { useState, memo } from "react";


// COMPONENTS
import SquarePicGallery from "./SquarePicGallery";


// // EXPORT
function Gallery({ imgList }) {

    // USE-STATE
    const [selectedPic, setSelectedPic] = useState(null);

    return <>

        <div className="gallery">

            {imgList.map((path, index) => (
                <SquarePicGallery
                    key={index}
                    path={path}
                    selectedPic={selectedPic}
                    setSelectedPic={setSelectedPic}
                />
            ))}

        </div>

    </>
}


// EXPORT MEMO()
export default memo(Gallery);
