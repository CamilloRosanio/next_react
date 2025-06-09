// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { useState, memo } from 'react';
import Link from 'next/link';


// CONTEXTS
import { useMainContext } from "../contexts/MainContext.jsx";


// ASSETS
import navLinks from '../assets/data/navLinks.js';
import { listSymbol } from '../assets/data/utilityContent.js';


// COMPONENTS
import Toggle from './Toggle';


// EXPORT
function Navbar() {

    // DATA - CONTEXT
    const { darkMode, switchMode, deviceType } = useMainContext();

    // USE-STATE
    const [hidden, setHidden] = useState(true);

    // SUPPORT
    const navUtility = navLinks.filter(link => link.type == 'utility');
    const navContent = navLinks.filter(link => link.type == 'content');

    // Hide Menu
    const showMenu = () => {
        if (hidden) {
            setHidden(false);
        } else if (!hidden) {
            setHidden(true);
        }
    };

    return <>

        {deviceType !== 'mobile' ?

            // DESKTOP / TABLET
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
                            value={darkMode}
                            setValue={switchMode}
                            iconSx='☼'
                            iconDx='☾'
                        />
                    </div>
                </div>

            </nav>

            :

            // MOBILE
            <nav>

                {/*  DROP-DOWN */}
                <button className="dropDownButton" onClick={showMenu}>
                    ☰
                </button>

                <div className={hidden ? 'hidden' : 'dropDown'}>
                    {/* PAGES */}
                    {navContent.map(link => <Link key={link.page} href={link.path} className="hyperlink" onClick={() => setHidden(true)}>{listSymbol} {link.page}</Link>)}
                    {/* UTILITY PAGES */}
                    {navUtility.map(link => <Link key={link.page} href={link.path} target="_blank" className="hyperlink" onClick={() => setHidden(true)}>{listSymbol} {link.page}</Link>)}

                    <div>
                        <Toggle
                            value={darkMode}
                            setValue={switchMode}
                            iconSx='☼'
                            iconDx='☾'
                        />
                    </div>
                </div>
            </nav>

        }

    </>
}


// EXPORT MEMO()
export default memo(Navbar);