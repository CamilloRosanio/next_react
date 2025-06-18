// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { memo } from "react";


// ## LANGUAGE
// CONTEXTS
// import { useMainContext } from "../contexts/MainContext";


// ASSETS
import { listSymbol } from "../assets/data/utilityContent";


// EXPORT
function Section({ children, title }) {

    // ## LANGUAGE
    // DATA - CONTEXT
    // const { utilityContent } = useMainContext();
    // const listSymbol = utilityContent.listSymbol;

    return <>

        <div className="section">

            {title && <h2><span className='listSymbol'>{listSymbol} </span> {title}</h2>}

            {children}
        </div>

    </>
}


// EXPORT MEMO()
export default memo(Section);