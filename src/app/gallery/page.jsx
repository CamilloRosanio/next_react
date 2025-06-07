// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { memo } from "react";


// ASSETS
import pagesContent from "../../../assets/data/pagesContent";


// COMPONENTS
import Accordion from "../../../layouts/Accordion";


// COMPONENT EXPORT
function Gallery() {
    return <>

        <h1 className='space2'>{pagesContent.aboutUs.pageTitle}</h1>

        <Accordion
            accordionContent={pagesContent.aboutUs.accordions.aboutUs}
        />

    </>
}


// EXPORT MEMO()
export default memo(Gallery);