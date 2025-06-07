// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { memo } from "react";


// ASSETS
import { listSymbol } from "../assets/data/utilityContent";


// EXPORT
function Section({ children, title }) {

    return <>

        <div className="section">

            <h2><span className='listSymbol'>{listSymbol} </span> {title}</h2>

            {children}
        </div>

    </>
}


// EXPORT MEMO()
export default memo(Section);