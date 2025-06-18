// NOTES
// ## LANGUAGE
// [ Language ]: le opzioni per il cambio di lingua dei contenuti sono inizialmente non attive (commentate).


// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { createContext, useContext, useState, useEffect } from 'react';


// CREATE CONTEXT
const MainContext = createContext();


// ASSETS
import businessInfo from '../assets/data/businessInfo.js';
import { galleryPaths } from '../assets/data/galleryPaths.js';
import socialInfo from '../assets/data/socialInfo.js';
import { switchBoolean, getUniqueValues } from '../assets/utilityFunctions.js';


// PROVIDER EXPORT
export const MainContextProvider = ({ children }) => {

    // ## LANGUAGE
    const languageOptions = ['IT', 'EN',]
    const localStorageLanguage = JSON.parse(localStorage.getItem('language'));

    // USE-STATE
    const [darkMode, setDarkMode] = useState(true);
    const [windowWidth, setWindowWidth] = useState(570);
    const [deviceType, setDeviceType] = useState('');
    const [hideMenu, setHideMenu] = useState(true);
    const [language, setLanguage] = useState(localStorageLanguage || 'IT');
    const [assets, setAssets] = useState({
        businessInfo,
        galleryPaths,
        navLinks,
        socialInfo,
        utilityContent,
    });

    // SUPPORT
    const categories = getUniqueValues('category', assets.products);
    const tags = getUniqueValues('tags', assets.products);

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
    const switchLanguage = async (language) => {
        try {
            // Import dinamico dei contenuti
            const navbarLinks = await import(`../assets/data/languages/${language}/navLinks.js`);
            const productsArray = await import(`../assets/data/languages/${language}/products.js`);
            const utilityContentData = await import(`../assets/data/languages/${language}/utilityContent.js`);
            setAssets({
                ...assets,
                navLinks: navbarLinks.default,
                products: productsArray.default,
                utilityContent: utilityContentData.default,
            });
        } catch (error) {
            console.error(`Errore nel caricamento della lingua ${language}`, error);
        }
    };

    // USE-EFFECT
    useEffect(() => {
        // localStorage Language
        localStorage.setItem("language", JSON.stringify(language));

        // Switch Language
        switchLanguage(language);
    }, [language])

    // INIT USE-EFFECT
    useEffect(() => {
        handleWindowResize();
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    // debug
    // console.log('CONTEXT | PRODUCTS:', products);
    // console.log('CONTEXT | CATEGORIES:', categories);
    // console.log('CONTEXT | TAGS:', tags);

    return <>
        <MainContext.Provider value={{
            darkMode,
            switchMode,
            windowWidth,
            deviceType,
            hideMenu,
            setHideMenu,
            // ## LANGUAGE
            // languageOptions,
            // language,
            // setLanguage,
            products,
            categories,
            tags,
            assets,
        }}>
            {children}
        </MainContext.Provider>
    </>
}


// USE CONTEXT EXPORT
export const useMainContext = () => useContext(MainContext);