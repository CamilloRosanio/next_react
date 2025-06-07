// NOTES


// READY FOR CLIENT SIDE
"use client";


// METADATA
export const metadata = {
  title: 'Titolo Pagina',
  description: 'Descrizione pagina',
};


// UTILITY
import { useState, useEffect } from "react";


// ENV


// CONTEXTS
import { useMainContext } from "../contexts/MainContext";


// ASSETS


// SUPPORT


// COMPONENTS


// EXPORT
export default function NomePagina() {

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