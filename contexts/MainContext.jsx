// CLIENT SIDE ON
// Permette di utilizzare gli HOOKS, COMPONENTS e CONTEXT di React lato Client, allineando React Js a Next Js.
"use client";


// UTILITY
import { createContext, useContext, useState, useEffect } from 'react';


// CREATE CONTEXT
const MainContext = createContext();


// ASSETS


// PROVIDER EXPORT
export const MainContextProvider = ({ children }) => {

    // USE-STATE
    const [darkMode, setDarkMode] = useState(true);
    const [windowWidth, setWindowWidth] = useState(570);
    const [deviceType, setDeviceType] = useState('');

    // SUPPORT

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

    return <>
        <MainContext.Provider value={{
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