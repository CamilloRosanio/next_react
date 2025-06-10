// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { memo } from "react";


// COMPONENTS
import Section from "../layouts/Section";
import Gallery from '../layouts/Gallery';
import PageBottomButtons from "./PageBottomButtons";


// EXPORT
function GalleryClient({ images }) {

    return <>

        <h1 className='space2'>Gallery</h1>

        <Section title='Most recent'>
            <p>Look at our most recent pictures.</p>
        </Section>

        {images && <Gallery imgList={images} />}

        {/* BOTTOM BUTTONS */}
        <PageBottomButtons toContacts={true} />

    </>
}


// EXPORT MEMO()
export default memo(GalleryClient);
