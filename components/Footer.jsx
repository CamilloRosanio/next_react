// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { memo } from "react";


// ## LANGUAGE
// CONTEXTS
// import { useMainContext } from "../contexts/MainContext";


// ASSETS
import navLinks from "../assets/data/navLinks";


// COMPONENTS
import SocialMedia from './SocialMedia';


// EXPORT
function Footer() {

    // ## LANGUAGE
    // DATA - CONTEXT
    // const { navLinks } = useMainContext();

    // SUPPORT
    const navUtility = navLinks.filter(link => link.type == 'utility');

    return <>

        <footer>

            <div className='flexLine'>
                {navUtility.map(link => <a key={link.page} href={link.path} target="_blank" className="hyperlink navLink">{link.page}</a>)}
            </div>

            <SocialMedia />

        </footer>

    </>
}


// EXPORT MEMO()
export default memo(Footer);