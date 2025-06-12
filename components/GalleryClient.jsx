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

        <h1 className='space2'>Galleria</h1>

        <Section >
            <p>Dai uno sguardo alle nostre immagini più recenti.</p>
        </Section>

        {images && <Gallery imgList={images} />}

        {/* BOTTOM BUTTONS */}
        <PageBottomButtons toContacts={true} />

    </>
}


// EXPORT MEMO()
export default memo(GalleryClient);
