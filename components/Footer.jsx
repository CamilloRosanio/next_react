// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { memo } from "react";


// ASSETS
import navLinks from '../assets/data/navLinks';


// COMPONENTS
import SocialMedia from './SocialMedia';


// EXPORT
function Footer() {

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