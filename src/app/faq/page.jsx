// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { memo } from "react";


// COMPONENTS
import Section from "../../../layouts/Section";
import Accordion from "../../../layouts/Accordion";
import PageBottomButtons from "../../../components/PageBottomButtons";


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
        <PageBottomButtons toContacts={true} />

    </>
}


memo// EXPORT MEMO()
export default memo(FaqPage);