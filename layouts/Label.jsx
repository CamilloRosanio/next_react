// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { memo } from "react";


// ASSETS
import { addRemove } from "../assets/utilityFunctions";


// EXPORT
function Label({ item, isSelectedList, setIsSelectedList, action }) {

    return (
        <>
            <li
                className={`label ${(action && isSelectedList.includes(item)) ? "on" : ""}`}
                onClick={() => { if (action) { addRemove(item, isSelectedList, setIsSelectedList); } }}
            >
                # {item}
            </li>
        </>
    );
}

export default memo(Label);
