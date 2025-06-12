// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { memo } from "react";


// COMPONENTS
import Section from "../../../layouts/Section";
import PageBottomButtons from "../../../components/PageBottomButtons";


// COMPONENT EXPORT
function AboutUsPage() {
    return <>

        <h1 className='space2'>Chisiamo</h1>

        <Section title='Sezione 1'>
            <p>Contenuto della sezione.</p>
        </Section>

        <Section title='Sezione 2'>
            <p>Contenuto della sezione.</p>
        </Section>

        {/* BOTTOM BUTTONS */}
        <PageBottomButtons toContacts={true} />

    </>
}


memo// EXPORT MEMO()
export default memo(AboutUsPage);