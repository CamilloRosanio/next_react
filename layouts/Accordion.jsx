// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { useState, useRef, memo } from 'react';


// COMPONENT EXPORT
function Accordion({ title, text }) {

    // USE-STATE
    const [open, setOpen] = useState(false);

    // SUPPORT
    const accordionRef = useRef();

    // Handle open
    const handleOpen = () => {
        setOpen(prev => !prev);
        if (accordionRef.current) {
            accordionRef.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return <>
        {(title && text) &&
            <div className="accordion card space2" ref={accordionRef} onClick={() => handleOpen()}>

                <div className="accordionHeader">
                    <h4>
                        {!open ?
                            <span className='listSymbol'>▶</span>
                            :
                            <span className='listSymbol'>▼</span>
                        } {title}
                    </h4>
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