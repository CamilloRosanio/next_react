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

    // Default Logo
    const defaultDarkModeLogo = '/default/default-logo-dark-mode.png';
    const defaultLightModeLogo = '/default/default-logo-light-mode.png';

    // Logo
    const logoDarkMode = '/logo/logo-h50-dark-mode.png';
    const logoLightMode = '/logo/logo-h50-light-mode.png';

    // Image onError
    const logoSrc = darkMode ?
        (imgError ? defaultDarkModeLogo : logoDarkMode)
        :
        (imgError ? defaultLightModeLogo : logoLightMode);

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