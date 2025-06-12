// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { memo } from "react";


// ASSETS
import { toTop } from "../assets/utilityFunctions";


// COMPONENTS+
import Button from "../layouts/Button";


// EXPORT
function PageBottomButtons({ toContacts }) {

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
                    text='Contattaci ▶'
                    path='/contacts'
                    extraClass={'buttonSolid1'}
                />
            }
        </div>

    </>
}


// EXPORT MEMO()
export default memo(PageBottomButtons);