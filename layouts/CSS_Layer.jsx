// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { useEffect } from "react";


// CONTEXTS
import { useMainContext } from "../contexts/MainContext.jsx";


// COMPONENT EXPORT
export default function CSS_Layer({ children }) {

    // DATA - CONTEXT
    const { darkMode } = useMainContext();

    // USE-EFFECT

    // Light Mode CSS
    useEffect(() => {
        const linkId = "light-mode-css";
        const existingLink = document.getElementById(linkId);

        if (!darkMode && !existingLink) {
            const link = document.createElement("link");
            link.id = linkId;
            link.rel = "stylesheet";
            link.href = "/css/lightMode.css";
            document.head.appendChild(link);
        }

        if (darkMode && existingLink) {
            document.head.removeChild(existingLink);
        }
    }, [darkMode])

    return (
        <>
            <div id='cssLayer'>
                {children}
            </div>
        </>
    );
}