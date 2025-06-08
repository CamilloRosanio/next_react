// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { useState, memo } from 'react';


// ASSETS
import { listSymbol } from '../assets/data/utilityContent';


// COMPONENT EXPORT
function Accordion({ title, text }) {

    // USE-STATE
    const [open, setOpen] = useState(false);

    // SUPPORT

    // Handle open
    const handleOpen = () => {
        setOpen(prev => !prev);
    };

    return <>
        {(title && text) &&
            <div className="accordion card space2" onClick={() => handleOpen()}>

                <div className="accordionHeader">
                    <h3>
                        {!open ?
                            <span className='listSymbol'>✚</span>
                            :
                            <span className='listSymbol solid'>−</span>
                        } {title}
                    </h3>
                </div>

                {open &&
                    <div className='accordionText'>
                        <p>{text}</p>
                    </div>
                }
            </div>
        }
    </>
}


// EXPORT MEMO()
export default memo(Accordion);