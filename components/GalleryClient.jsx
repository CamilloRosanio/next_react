// // READY FOR CLIENT SIDE
"use client";


// // UTILITY
import { memo } from "react";


// // ASSETS
import { toTop } from "../assets/utilityFunctions";


// // COMPONENTS
import Section from "../layouts/Section";
import Gallery from '../layouts/Gallery';
import Button from "../layouts/Button";


// EXPORT
function GalleryClient({ images }) {

    return <>

        <h1 className='space2'>Gallery</h1>

        <Section title='Most recent'>
            <p>Look at our most recent pictures.</p>
        </Section>

        {images && <Gallery imgList={images} />}

        {/* BOTTOM BUTTONS */}
        <div className='bottomButtonsContainer'>
            < Button
                text='▲'
                onClick={toTop}
                extraClass={'color2'}
            />

            < Button
                text='Contattaci ▶'
                path='/contacts'
                extraClass={'color1'}
            />
        </div>

    </>
}


// EXPORT MEMO()
export default memo(GalleryClient);
