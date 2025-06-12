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
            title='Titolo Accordion'
            text="Testo dell'accordion."
        />

        <Accordion
            title='Titolo Accordion'
            text="Testo dell'accordion."
        />

        <Accordion
            title='Titolo Accordion'
            text="Testo dell'accordion."
        />

        {/* BOTTOM BUTTONS */}
        <PageBottomButtons toContacts={true} />

    </>
}


memo// EXPORT MEMO()
export default memo(FaqPage);