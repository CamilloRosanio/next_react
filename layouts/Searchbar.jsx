// NOTES
/* Il valore dell'input nella Searchbar è una STRING (localValue), in quanto un input accetta solo STRING.
La Searchbar è però munita di una funzione avanzata (splitQuery) che splitta "localValue" in base agli spazi (anche consecutivi),
facendo il RETURN di un ARRAY di STRING che sarà poi impiegato come FILTER per query che contengono l'una OR l'altra parola nell'ARRAY.
IMPORTANTE: lo useState([]) dell'eventuale filtro di ricerca deve essere un ARRAY, non STRING.*/


// READY FOR CLIENT SIDE
"use client";


// UTILITY
import { useEffect, useState, useCallback } from 'react';


// ASSETS
import { splitQuery, debounce } from '../assets/utilityFunctions';


// COMPONENTS
import RoundButton from './RoundButton';


// EXPORT
export default function Searchbar({ placeholder, onDebouncedChange, reset }) {

    // USE-STATE
    const [localValue, setLocalValue] = useState("");

    // USE-CALLBACK
    const debouncedChange = useCallback(
        debounce((localValue) => {
            onDebouncedChange(splitQuery(localValue));
        }, 500),
        [onDebouncedChange]
    );

    // USE-EFFECT
    useEffect(() => {
        debouncedChange(localValue);
    }, [localValue, debouncedChange]);

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
                onClick={() => { reset(''); setLocalValue(''); }}
            />
        </div>
    );
}
