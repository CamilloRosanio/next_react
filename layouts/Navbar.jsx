// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { useRef, useEffect, memo } from 'react';
import Link from 'next/link';


// CONTEXTS
import { useMainContext } from "../contexts/MainContext.jsx";


// ASSETS
import navLinks from '../assets/data/navLinks.js';
import utilityContent from '../assets/data/utilityContent.js';


// COMPONENTS
import Toggle from './Toggle';


// EXPORT
function Navbar() {

    // DATA - CONTEXT
    const { darkMode, switchMode, deviceType, hideMenu, setHideMenu, } = useMainContext();
    const listSymbol = utilityContent.listSymbol;

    // ## LANGUAGE
    // const { languageOptions, language, setLanguage, navLinks, utilityContent } = useMainContext();

    // SUPPORT
    const navUtility = navLinks.filter(link => link.type == 'utility');
    const navContent = navLinks.filter(link => link.type == 'content');
    const navbarRef = useRef();
    const navbarRefMobile = useRef();


    // Hide Menu
    const showMenu = () => {
        if (hideMenu) {
            setHideMenu(false);
        } else if (!hideMenu) {
            setHideMenu(true);
        }
    };

    // INIT USE-EFFECT
    useEffect(() => {
        const handleClickOutsideMenu = (event) => {
            if (navbarRef.current && !navbarRef.current.contains(event.target)) {
                setHideMenu(true);
            }

            if (navbarRefMobile.current && !navbarRefMobile.current.contains(event.target)) {
                setHideMenu(true);
            }
        };

        document.addEventListener('mousedown', handleClickOutsideMenu);

        return () => {
            document.removeEventListener('mousedown', handleClickOutsideMenu);
        };
    }, []);

    return <>

        {deviceType !== 'mobile' ?

            // DESKTOP / TABLET
            <nav ref={navbarRef}>
                {/* PAGES */}
                {navContent.map(link => <Link key={link.page} href={link.path} className="hyperlink" onClick={() => setHideMenu(true)} >{link.page}</Link>)}

                {/*  DROP-DOWN */}
                <button className="dropDownButton" onClick={() => showMenu()}>
                    ☰
                </button>
                {/* UTILITY PAGES */}
                <div className={hideMenu ? 'hidden' : 'dropDown'} >

                    {navUtility.map(link => <Link key={link.page} href={link.path} target="_blank" className="hyperlink" onClick={() => setHideMenu(true)} >{listSymbol} {link.page}</Link>)}

                    <div>
                        <Toggle
                            value={darkMode}
                            setValue={switchMode}
                            iconSx='☼'
                            iconDx='☾'
                        />
                    </div>

                    {/* ## LANGUAGE */}
                    {/* {languageOptions.length > 1 &&
                        <div className='languageOptions'>
                            {languageOptions.map((lang, index) =>
                                <p key={index} className={`languageOpt${language === lang ? ' selected' : ''}`} onClick={() => setLanguage(lang)}>{lang}</p>
                            )}
                        </div>
                    } */}

                </div>

            </nav>

            :

            // MOBILE
            <nav ref={navbarRefMobile}>

                {/*  DROP-DOWN */}
                <button className="dropDownButton" onClick={() => showMenu()}>
                    ☰
                </button>

                <div className={hideMenu ? 'hidden' : 'dropDown'} >
                    {/* PAGES */}
                    {navContent.map(link => <Link key={link.page} href={link.path} className="hyperlink" onClick={() => setHideMenu(true)}>{listSymbol} {link.page}</Link>)}
                    {/* UTILITY PAGES */}
                    {navUtility.map(link => <Link key={link.page} href={link.path} target="_blank" className="hyperlink" onClick={() => setHideMenu(true)}>{listSymbol} {link.page}</Link>)}

                    <div>
                        <Toggle
                            value={darkMode}
                            setValue={switchMode}
                            iconSx='☼'
                            iconDx='☾'
                        />
                    </div>

                    {/* ## LANGUAGE */}
                    {/* {language &&
                        <div className='languageOptions'>
                            {languageOptions.map((l, index) =>
                                <p key={index} className={`languageOpt${language === l ? ' selected' : ''}`} onClick={() => setLanguage(l)}>{l}</p>
                            )}
                        </div>
                    } */}

                </div>
            </nav>

        }

    </>
}


// EXPORT MEMO()
export default memo(Navbar);