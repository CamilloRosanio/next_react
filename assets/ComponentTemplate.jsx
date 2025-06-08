// NOTES


// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { useState, useEffect, memo } from "react";


// ENV


// CONTEXTS
import { useMainContext } from "../contexts/MainContext";


// ASSETS


// SUPPORT


// COMPONENTS


// EXPORT
function Component() {

  // USE-ROUTER

  // DATA - CONTEXT
  const mainContext = useMainContext();

  // USE-STATE
  const [customState, setCustomState] = useState('');

  // SUPPORT

  // USE-EFFECT
  useEffect(() => {

    // debug
    return console.log('USE-STATE');
  }, [customState]);

  // INIT USE-EFFECT
  useEffect(() => {

    // debug
    return console.log('INIT USE-STATE');
  }, []);

  return <>

    Page Content

  </>
}


// EXPORT MEMO()
export default memo(Component);