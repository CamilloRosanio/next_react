// NOTES
// DEPENDENCY: determina il contenuto della pagina "/gallery".


// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { useState, memo } from "react";


// COMPONENTS
import SquarePic from './SquarePic';


// // EXPORT
function Gallery({ imgList }) {

    // USE-STATE
    const [selectedPic, setSelectedPic] = useState(null);

    return <>

        <div className="gallery space2">

            {imgList.map((path, index) => (
                <SquarePic
                    key={index}
                    path={path}
                    selectedPic={selectedPic}
                    setSelectedPic={setSelectedPic}
                    defaultText='DEFAULT TEXT'
                />
            ))}

        </div>

    </>
}


// EXPORT MEMO()
export default memo(Gallery);
