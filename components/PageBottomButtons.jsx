// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { memo } from "react";


// ## LANGUAGE
// CONTEXTS
// import { useMainContext } from "../contexts/MainContext";


// ASSETS
import utilityContent from "../assets/data/utilityContent";
import { toTop } from "../assets/utilityFunctions";


// COMPONENTS
import Button from "../layouts/Button";


// EXPORT
function PageBottomButtons({ toContacts }) {

    // ## LANGUAGE
    // DATA - CONTEXT
    // const { utilityContent } = useMainContext();

    return <>

        {/* BOTTOM BUTTONS */}
        <div className='bottomButtonsContainer'>
            < Button
                text='▲'
                onClick={toTop}
                extraClass={'button2'}
            />


            {toContacts &&
                < Button
                    text={utilityContent.bottomButtons.toContactsText}
                    path='/contacts'
                    extraClass={'buttonSolid1'}
                />
            }
        </div>

    </>
}


// EXPORT MEMO()
export default memo(PageBottomButtons);