// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { memo } from "react";


// ASSETS
import galleryPics from "../../../assets/data/gallery";


// COMPONENTS
import Section from "../../../layouts/Section";
import Gallery from "../../../layouts/Gallery";


// COMPONENT EXPORT
function GalleryPage() {
    return <>

        <h1 className='space2'>Gallery</h1>

        <Section title='Most recent'>
            <p>Look at our most recent pictures.</p>
        </Section>

        <Gallery imgList={galleryPics} />

    </>
}


// EXPORT MEMO()
export default memo(GalleryPage);