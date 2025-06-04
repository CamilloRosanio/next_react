// UTILITY
import Link from 'next/link';


// CONTEXTS
import { useMainContext } from "../contexts/MainContext";


// COMPONENTS
import Navbar from '../layouts/Navbar.jsx';


// COMPONENT EXPORT
export default function Header() {

    // DATA - CONTEXT
    const mainContext = useMainContext();

    // SUPPORT
    const imgLogoHeader = 'logo/logo-h50-white-default.png';
    const imgLogoHeaderDark = 'logo/logo-h50-grey-default.png';

    return <>

        <header>

            {/* LOGO */}
            <div className="imgContainer">
                <Link href="/">
                    {/* <img src={mainContext.darkMode ? imgLogoHeader : imgLogoHeaderDark} alt="logo" /> */}

                    <img src={imgLogoHeader} alt="logo" />
                </Link>
            </div>

            <Navbar />

        </header>

    </>
}