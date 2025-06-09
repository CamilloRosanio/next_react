// NOTES


// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { useState, useEffect, useMemo } from "react";


// ENV


// CONTEXTS
import { useMainContext } from "../../../contexts/MainContext";


// ASSETS


// SUPPORT


// COMPONENTS
import ProductCard from "../../../components/ProductCard";


// EXPORT
export default function ProductsPage() {

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

        <ProductCard />

    </>
}