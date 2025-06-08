// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { memo } from "react";
import Link from "next/link";


// ASSETS
import { toTop } from "../../../assets/utilityFunctions";


// COMPONENTS
import Section from "../../../layouts/Section";
import Accordion from "../../../layouts/Accordion";
import Button from "../../../layouts/Button";


// COMPONENT EXPORT
function FaqPage() {
    return <>

        <h1 className='space2'>FAQ</h1>

        <Section title=''>
            <p>Rispondiamo a tutte le vostre domande più frequenti.</p>
        </Section>

        <Accordion
            title='Accordion title'
            text='Accordion text content.'
        />

        <Accordion
            title='Accordion title'
            text='Accordion text content.'
        />

        <Accordion
            title='Accordion title'
            text='Accordion text content.'
        />

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
                extraClass={'color2'}
            />
        </div>

    </>
}


memo// EXPORT MEMO()
export default memo(FaqPage);