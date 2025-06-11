// NOTES
// Il "value" dell'input è collegato a "externalValue" così da poter essere resettato anche da azioni esterne alla Searchbar.
// In questo modo è possibile anche implementare la funzione "potenziata" di ricerca per ARRAY di STRINGS.


// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { useEffect, useState, useCallback } from 'react';


// ASSETS
import { debounce } from '../assets/utilityFunctions';


// COMPONENTS
import RoundButton from './RoundButton';


// EXPORT
export default function Searchbar({ placeholder, onDebouncedChange, reset, externalValue }) {

    // USE-STATE
    const [localValue, setLocalValue] = useState("");

    // USE-CALLBACK
    const debouncedChange = useCallback(
        debounce((localValue) => {
            onDebouncedChange(localValue);
        }, 500),
        [onDebouncedChange]
    );

    // USE-EFFECT

    // Debounce
    useEffect(() => {
        debouncedChange(localValue);
    }, [localValue, debouncedChange]);

    // Reset to resetted External Value
    useEffect(() => {
        setLocalValue(externalValue);
    }, [externalValue]);

    return (
        <div className="filterContainer">
            <input
                type="text"
                placeholder={placeholder}
                className="searchbarInput"
                value={localValue}
                onChange={e => setLocalValue(e.target.value)}
            />

            {/* RESET BUTTON */}
            <RoundButton
                onClick={() => setLocalValue(externalValue)}
            />
        </div>
    );
}
