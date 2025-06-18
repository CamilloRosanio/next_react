// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { memo } from "react";


// ASSETS
import businessInfo from "../../../assets/data/businessInfo";


// COMPONENTS
import ContactForm from "../../../components/ContactForm";
import CallUs from "../../../components/CallUs";
import OpenMaps from "../../../components/OpenMaps";
import PageBottomButtons from "../../../components/PageBottomButtons";


// EXPORT
function ContactsPage() {

    return <>

        <h1 className='space2'>Contatti</h1>

        <div className='flexCol space2'>

            {businessInfo.contactEmail &&
                <ContactForm
                    info={businessInfo}
                />}

            {businessInfo.contactPhone &&
                <CallUs
                    info={businessInfo}
                />}

            {businessInfo.coordinateSede &&
                <OpenMaps
                    info={businessInfo}
                />}
        </div>

        {/* BOTTOM BUTTONS */}
        <PageBottomButtons />
    </>
}


// EXPORT MEMO()
export default memo(ContactsPage);