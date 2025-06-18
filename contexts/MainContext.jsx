// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { createContext, useContext, useState, useEffect } from 'react';


// CREATE CONTEXT
const MainContext = createContext();


// ASSETS
import { switchBoolean, getUniqueValues } from '../assets/utilityFunctions.js';
import products from '../assets/data/products.js';

// ## LANGUAGE
// Import statico dei valori di DEFAULT dei contenuti
// import navLinks from '../assets/data/languages/IT/navLinks.js';
// import products from '../assets/data/languages/IT/products.js';
// import utilityContent from '../assets/data/languages/IT/utilityContent.js';


// PROVIDER EXPORT
export const MainContextProvider = ({ children }) => {

    // ## LANGUAGE
    // const languageOptions = ['IT',]

    // USE-STATE
    const [darkMode, setDarkMode] = useState(true);
    const [windowWidth, setWindowWidth] = useState(570);
    const [deviceType, setDeviceType] = useState('');
    const [hideMenu, setHideMenu] = useState(true);
    // ## LANGUAGE
    // const [language, setLanguage] = useState(languageOptions[0]);
    // const [loading, setLoading] = useState(false);
    // const [assets, setAssets] = useState({
    //     businessInfo,
    //     galleryPaths,
    //     socialInfo,
    //     navLinks: navLinks,
    //     products: products,
    //     utilityContent: utilityContent,
    // });

    // SUPPORT
    const categories = getUniqueValues('category', products || []);
    const tags = getUniqueValues('tags', products || []);
    // ## LANGUAGE
    // const categories = getUniqueValues('category', assets.products || []);
    // const tags = getUniqueValues('tags', assets.products || []);

    // Mode Switch
    function switchMode() { switchBoolean(setDarkMode); }

    // Update Device Type
    const updateDeviceType = (width) => {
        if (width > 768) {
            setDeviceType('desktop');
        } else if (width > 576) {
            setDeviceType('tablet');
        } else {
            setDeviceType('mobile');
        }
    };

    // Handle Window Resize
    const handleWindowResize = () => {
        const width = window.innerWidth;
        setWindowWidth(width);
        updateDeviceType(width);

        // debug
        // let device = 'mobile';
        // if (width > 768) device = 'desktop';
        // else if (width > 576) device = 'tablet';
        // console.log('WINDOW Pixels:', width, '| DEVICE Type:', device);
    };

    // ## LANGUAGE
    // const switchLanguage = async (lang) => {
    //     setLoading(true);
    //     try {
    //         const [navLinks, products, utilityContent] = await Promise.all([
    //             import(`../assets/data/languages/${lang}/navLinks.js`),
    //             import(`../assets/data/languages/${lang}/products.js`),
    //             import(`../assets/data/languages/${lang}/utilityContent.js`),
    //         ]);
    //         setAssets((prev) => ({
    //             ...prev,
    //             navLinks: navLinks.default,
    //             products: products.default,
    //             utilityContent: utilityContent.default,
    //         }));
    //     } catch (error) {
    //         console.error(`Errore nel caricamento della lingua ${lang}:`, error);
    //         setAssets((prev) => ({
    //             ...prev,
    //             navLinks: {},
    //             products: [],
    //             utilityContent: {},
    //         }));
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    // USE-EFFECT
    // ## LANGUAGE
    // useEffect(() => {
    //     switchLanguage(language);
    // }, [language]);

    // INIT USE-EFFECT
    useEffect(() => {

        // ## LANGUAGE
        // setAssets({
        //     ...assets,
        //     navLinks: navLinks,
        //     products: products,
        //     utilityContent: utilityContent,
        // })

        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    // debug
    // console.log('CONTEXT | PRODUCTS:', products);
    // console.log('CONTEXT | CATEGORIES:', categories);
    // console.log('CONTEXT | TAGS:', tags);

    // ## LANGUAGE
    // if (loading) return null;

    return <>

        <MainContext.Provider value={{
            darkMode,
            switchMode,
            windowWidth,
            deviceType,
            hideMenu,
            setHideMenu,
            products,
            categories,
            tags,
        }}>
            {children}
        </MainContext.Provider>

        {/* ## LANGUAGE */}
        {/* <MainContext.Provider value={{
            darkMode,
            switchMode,
            windowWidth,
            deviceType,
            hideMenu,
            setHideMenu,
            // # LANGUAGE
            // languageOptions,
            // language,
            // setLanguage,
            navLinks: assets.navLinks,
            products: assets.products,
            categories,
            tags,
            utilityContent: assets.utilityContent,
        }}>
            {children}
        </MainContext.Provider> */}
    </>
}


// USE CONTEXT EXPORT
export const useMainContext = () => useContext(MainContext);