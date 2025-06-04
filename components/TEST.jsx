// CLIENT SIDE ON
// Permette di utilizzare gli HOOKS, COMPONENTS e CONTEXT di React lato Client, allineando React Js a Next Js.
"use client";

// CONTEXTS
import { useMainContext } from "../contexts/MainContext.jsx";


// COMPONENT EXPORT
export default function TEST() {

    // DATA - CONTEXT
    const { darkMode, switchMode, windowWidth, deviceType } = useMainContext();

    return (
        <>
            <h1>CONTEXT DATA</h1>
            <p>Window Width: {windowWidth}px</p>
            <p>Device Type: {deviceType}</p>
            <p>Dark Mode: {darkMode ? 'ON' : 'OFF'}</p>
            <button className="debug" onClick={switchMode}>
                Switch Mode
            </button>

        </>
    );
}
