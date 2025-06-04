// READY FOR CLIENT SIDE
"use client";


// ASSETS
import navLinks from '../assets/data/navLinks';


// COMPONENTS
import SocialMedia from './SocialMedia';


// EXPORT
export default function Footer() {

    // SUPPORT
    const navUtility = navLinks.filter(link => link.type == 'utility');

    return <>

        <footer>

            <div className='flexLine'>
                {navUtility.map(link => <a key={link.page} href={link.path} target="_blank" className="hyperlink">{link.page}</a>)}
            </div>

            <SocialMedia />

        </footer>

    </>
}