// READY FOR CLIENT SIDE
"use client";


// UTILITY
import Link from 'next/link';
import { useState, memo } from 'react';


// CONTEXTS
import { useMainContext } from "../contexts/MainContext";


// COMPONENTS
import Navbar from '../layouts/Navbar.jsx';


// EXPORT
function Header() {

    // DATA - CONTEXT
    const { darkMode } = useMainContext();

    // USE-STATE
    const [imgError, setImgError] = useState(false);

    // SUPPORT

    // Default Logos
    const imgLogoDarkModeDefault = '/logo/logo-h50-white-default.png';
    const imgLogoLightModeDefault = '/logo/logo-h50-grey-default.png';

    // Logos
    const imgLogoDarkMode = '/logo/logo-h50-dark-mode.png';
    const imgLogoLightMode = '/logo/logo-h50-light-mode.png';

    // Image onError
    const logoSrc = darkMode ?
        (imgError ? imgLogoDarkModeDefault : imgLogoDarkMode)
        :
        (imgError ? imgLogoLightModeDefault : imgLogoLightMode);

    return <>

        <header>

            {/* LOGO */}
            <div className="imgContainer">
                <Link href="/">
                    <img
                        src={logoSrc}
                        alt="logo"
                        onError={() => setImgError(true)}
                    />
                </Link>
            </div>

            <Navbar />

        </header>

    </>
}


// EXPORT MEMO()
export default memo(Header);