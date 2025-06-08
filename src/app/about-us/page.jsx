// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { memo } from "react";


// ASSETS
import pagesContent from "../../../assets/data/pagesContent";


// COMPONENTS
import Accordion from "../../../layouts/Accordion";


// COMPONENT EXPORT
function AboutUsPage() {
    return <>

        <h1 className='space2'>About us</h1>

        <Accordion
            accordionContent={pagesContent.aboutUs.accordions.aboutUs}
        />

    </>
}


memo// EXPORT MEMO()
export default memo(AboutUsPage);