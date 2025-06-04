// UTILITY
import { useState, useEffect } from 'react';
import Link from 'next/link';


// CONTEXTS
import { useMainContext } from "../contexts/MainContext.jsx";


// ASSETS
import navLinks from '../assets/data/navLinks.js';
import { listSymbol } from '../assets/data/utilityContent.js';


// COMPONENTS
import Toggle from './Toggle';


// COMPONENT EXPORT
export default function Navbar() {

    // DATA - CONTEXT
    const mainContext = useMainContext();

    // DATA - SUPPORT
    const navUtility = navLinks.filter(link => link.type == 'utility');
    const navContent = navLinks.filter(link => link.type == 'content');

    // USE-STATE
    const [hidden, setHidden] = useState(true);
    const [windowSize, setwindowSize] = useState(window.innerWidth);
    const [mobile, setMobile] = useState(window.innerWidth <= 576);

    // USE-EFFECT RESIZE
    useEffect(() => {
        const handleResize = () => {
            setwindowSize(window.innerWidth);
            setMobile(window.innerWidth <= 576);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // HIDE MENU
    const showMenu = () => {
        if (hidden) {
            setHidden(false);
        } else if (!hidden) {
            setHidden(true);
        }
    };

    return <>

        {!mobile ?

            // DESKTOP / TABLET NAVBAR
            <nav>
                {/* PAGES */}
                {navContent.map(link => <Link key={link.page} href={link.path} className="hyperlink">{link.page}</Link>)}

                {/*  DROP-DOWN */}
                <button className="dropDownButton" onClick={showMenu}>
                    ☰
                </button>
                {/* UTILITY PAGES */}
                <div className={hidden ? 'hidden' : 'dropDown'}>

                    {navUtility.map(link => <Link key={link.page} href={link.path} target="_blank" className="hyperlink">{listSymbol} {link.page}</Link>)}

                    <div>
                        <Toggle
                            value={mainContext.darkMode}
                            setValue={mainContext.switchMode}
                            iconSx='☼'
                            iconDx='☾'
                        />
                    </div>
                </div>

            </nav>

            :

            // MOBILE NAVBAR
            <nav>

                {/*  DROP-DOWN */}
                <button className="dropDownButton" onClick={showMenu}>
                    ☰
                </button>

                <div className={hidden ? 'hidden' : 'dropDown'}>
                    {/* PAGES */}
                    {navContent.map(link => <Link key={link.page} href={link.path} className="hyperlink">{listSymbol} {link.page}</Link>)}
                    {/* UTILITY PAGES */}
                    {navUtility.map(link => <Link key={link.page} href={link.path} target="_blank" className="hyperlink">{listSymbol} {link.page}</Link>)}

                    <div>
                        <Toggle
                            value={mainContext.darkMode}
                            setValue={mainContext.switchMode}
                            iconSx='☼'
                            iconDx='☾'
                        />
                    </div>
                </div>
            </nav>

        }

    </>
}