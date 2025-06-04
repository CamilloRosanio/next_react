// READY FOR CLIENT SIDE
"use client";

// CONTEXTS
import { useMainContext } from "../contexts/MainContext.jsx";


// EXPORT
export default function TEST() {

    // DATA - CONTEXT
    const { darkMode, switchMode, windowWidth, deviceType } = useMainContext();

    return (
        <>
            <h4>CONTEXT DATA</h4>
            <p>Window Width: {windowWidth}px</p>
            <p>Device Type: {deviceType}</p>
            <p>Dark Mode: {darkMode ? 'ON' : 'OFF'}</p>

            <button className="debug" onClick={switchMode}>
                Switch Mode
            </button>
        </>
    );
}
