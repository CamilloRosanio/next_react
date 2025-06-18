// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { memo } from "react";


// ASSETS
import { galleryPaths } from '../../../assets/data/galleryPaths.js';


// COMPONENTS
import Section from "../../../layouts/Section";
import Gallery from "../../../layouts/Gallery";
import PageBottomButtons from "../../../components/PageBottomButtons";


// EXPORT
function GalleryPage() {

    return <>
        <h1 className='space2'>Galleria</h1>

        <Section >
            <p>Dai uno sguardo alle nostre immagini più recenti.</p>
        </Section>

        {galleryPaths && <Gallery imgList={galleryPaths} />}

        {/* BOTTOM BUTTONS */}
        <PageBottomButtons toContacts={true} />
    </>;
}


// EXPORT MEMO()
export default memo(GalleryPage);

