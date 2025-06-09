// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { createContext, useContext, useState, useEffect, useMemo } from 'react';


// CREATE CONTEXT
const MainContext = createContext();


// ASSETS
import products from '../assets/data/products.js';
import { getKeys } from '../assets/utilityFunctions.js';


// PROVIDER EXPORT
export const MainContextProvider = ({ children }) => {

    // USE-STATE
    const [darkMode, setDarkMode] = useState(true);
    const [windowWidth, setWindowWidth] = useState(570);
    const [deviceType, setDeviceType] = useState('');

    // SUPPORT

    // Products Unique Keys + Type
    const pKeys = useMemo(() => {
        return getKeys(products);
    }, []);

    // Mode Switch
    const switchMode = () => {
        setDarkMode(prev => !prev);
    };

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
    console.log('PRODUCTS:', products);
    console.log('PRODUCTS KEYS:', getKeys(products));

    return <>
        <MainContext.Provider value={{
            products,
            pKeys,
            darkMode,
            switchMode,
            windowWidth,
            deviceType,
        }}>
            {children}
        </MainContext.Provider>
    </>
}


// USE CONTEXT EXPORT
export const useMainContext = () => useContext(MainContext);