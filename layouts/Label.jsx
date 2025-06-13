// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { memo } from "react";


// ASSETS
import { addRemove } from "../assets/utilityFunctions";


// EXPORT
function Label({ item, action, isSelected, setIsSelected }) {

    return (
        <>
            <div
                className={`label ${(action && isSelected.includes(item)) ? "on" : ""}`}
                onClick={() => { if (action) { addRemove(item, isSelected, setIsSelected); } }}
            >
                # {item}
            </div>
        </>
    );
}

export default memo(Label);
