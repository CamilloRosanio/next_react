// READY FOR CLIENT SIDE
"use client";


// ASSETS
import pagesContent from "../../../assets/data/pagesContent";


// COMPONENTS
import Accordion from "../../../layouts/Accordion";


// COMPONENT EXPORT
export default function AboutUsPage() {
    return <>

        <h1 className='space2'>{pagesContent.aboutUs.pageTitle}</h1>

        <Accordion
            accordionContent={pagesContent.aboutUs.accordions.aboutUs}
        />

    </>
}