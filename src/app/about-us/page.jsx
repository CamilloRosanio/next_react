// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { memo } from "react";


// ASSETS
import { toTop } from "../../../assets/utilityFunctions";


// COMPONENTS
import Section from "../../../layouts/Section";
import Button from "../../../layouts/Button";


// COMPONENT EXPORT
function AboutUsPage() {
    return <>

        <h1 className='space2'>About us</h1>

        <Section title='Section 1'>
            <p>Text content of this section.</p>
        </Section>

        <Section title='Section 2'>
            <p>LText content of this section.</p>
        </Section>

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


memo// EXPORT MEMO()
export default memo(AboutUsPage);