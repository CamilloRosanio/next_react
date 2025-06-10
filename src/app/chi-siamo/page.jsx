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

        <h1 className='space2'>About us</h1>

        <Section title='Section 1'>
            <p>Text content of this section.</p>
        </Section>

        <Section title='Section 2'>
            <p>LText content of this section.</p>
        </Section>

        {/* BOTTOM BUTTONS */}
        <PageBottomButtons toContacts={true} />

    </>
}


memo// EXPORT MEMO()
export default memo(AboutUsPage);