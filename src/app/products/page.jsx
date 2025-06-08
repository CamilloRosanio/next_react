// NOTES
// QueryArray è strettamente collegato al funzionamento della Searchbar "potenziata" per la ricerca di più parole insieme.


// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { useState, useEffect, memo, useMemo } from "react";


// CONTEXTS
import { useMainContext } from "../contexts/MainContext";


// ASSETS


// SUPPORT


// COMPONENTS


// EXPORT
function ProductsPage() {

    // USE-ROUTER

    // DATA - CONTEXT
    const mainContext = useMainContext();

    // USE-STATE
    const [queryArray, setQueryArray] = useState([]);

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
export default memo(ProductsPage);