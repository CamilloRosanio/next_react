// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { memo } from "react";


// ASSETS
import { addRemove } from "../assets/utilityFunctions";


// EXPORT
function TagLabel({ item, isSelectedList }) {

    // SUPPORT
    const isSelected = isSelectedList.includes(item);

    return (
        <>
            <div
                className={`tagLabel ${isSelected ? 'on' : ''}`}
                onClick={() => addRemove(isSelectedList, item)}
            >
                # {item}
            </div>
        </>
    );
}

export default memo(TagLabel);
