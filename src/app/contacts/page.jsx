// READY FOR CLIENT SIDE
"use client";

// ASSETS
import businessInfo from "../../../assets/data/businessInfo";
import { toTop } from '../../../assets/utilityFunctions.js';


// COMPONENTS
import Button1 from "../../../layouts/Button";
import ContactForm from "../../../components/ContactForm";
import CallUs from "../../../components/CallUs";
import OpenMaps from "../../../components/OpenMaps";


// EXPORT
export default function ContactsPage() {

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

        <div className='buttonContainerContacts'>
            < Button1
                text='▲'
                onClick={toTop}
                extraClass={'color2'}
            />
        </div>
    </>
}