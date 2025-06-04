// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { useState } from 'react';


// ASSETS
import { listSymbol } from '../assets/data/utilityContent';


// COMPONENT EXPORT
export default function Accordion({ accordionContent }) {

    // USE-STATE
    const [activeSection, setActiveSection] = useState(null);

    // SUPPORT

    // Handle Click
    const handleClick = (sectionKey) => {
        setActiveSection(activeSection === sectionKey ? null : sectionKey);
    };

    return <>
        <ul className="accordion">
            {Object.keys(accordionContent).map((sectionKey) => (
                <li
                    key={sectionKey}
                    onClick={() => handleClick(sectionKey)}
                    className="accordionItem card space1"
                >
                    <div className="accordionHeader">
                        <h4><span className='listSymbol'>{listSymbol}</span> {accordionContent[sectionKey].title}</h4>
                    </div>
                    <div
                        className={`accordionText ${activeSection === sectionKey ? 'open' : ''}`}
                    >
                        <p>{accordionContent[sectionKey].text}</p>
                    </div>
                </li>
            ))}
        </ul>
    </>
}