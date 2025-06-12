// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { createContext, useContext, useState, useEffect } from 'react';


// CREATE CONTEXT
const MainContext = createContext();


// ASSETS
import products from '../assets/data/products.js';
import { switchBoolean, getUniqueValues } from '../assets/utilityFunctions.js';


// PROVIDER EXPORT
export const MainContextProvider = ({ children }) => {

    // USE-STATE
    const [darkMode, setDarkMode] = useState(true);
    const [windowWidth, setWindowWidth] = useState(570);
    const [deviceType, setDeviceType] = useState('');
    const [hideMenu, setHideMenu] = useState(true);

    // SUPPORT
    const categories = getUniqueValues('category', products);
    const tags = getUniqueValues('tags', products);

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
            products,
            categories,
            tags,
        }}>
            {children}
        </MainContext.Provider>
    </>
}


// USE CONTEXT EXPORT
export const useMainContext = () => useContext(MainContext);