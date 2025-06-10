/*******************************************************************
# GENERAL
*******************************************************************/

// SCROLL TO TOP
function toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// DEBOUNCE
function debounce(callback, delay) {
    let timer;
    return (value) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            callback(value);
        }, delay)
    }
}



/*******************************************************************
# FILTERS
*******************************************************************/

// SPLIT QUERY
function splitQuery(query) {
    const splitted = query.trim().split(/\s+/);
    return splitted;
}

// GET KEYS
function getKeys(dataArray) {
    const keyTypesMap = new Map();
    const keyValuesMap = new Map();
    const keyNumberValues = new Map();
    const typeConflicts = new Set();

    for (const obj of dataArray) {
        for (const [key, value] of Object.entries(obj)) {
            if (value === null || value === undefined) continue;

            let type = typeof value;

            if (Array.isArray(value)) {
                type = 'array';
            } else if (type === 'object') {
                continue;
            }

            // CONFLICT HANDLER
            if (keyTypesMap.has(key)) {
                const existingTypes = keyTypesMap.get(key);
                if (!existingTypes.has(type)) {
                    typeConflicts.add(key);
                }
                existingTypes.add(type);
            } else {
                keyTypesMap.set(key, new Set([type]));
            }

            // ARRAYS VALUES
            if (type === 'array') {
                if (!keyValuesMap.has(key)) {
                    keyValuesMap.set(key, new Set());
                }
                value.forEach(item => {
                    keyValuesMap.get(key).add(item);
                });
            }

            // NUMBER MAX / MIN
            if (type === 'number') {
                if (!keyNumberValues.has(key)) {
                    keyNumberValues.set(key, []);
                }
                keyNumberValues.get(key).push(value);
            }
        }
    }

    if (typeConflicts.size > 0) {
        console.error("KEY TYPE CONFLICT:", [...typeConflicts]);
    }

    const result = [];

    for (const [key, types] of keyTypesMap.entries()) {
        if (typeConflicts.has(key)) continue;

        const type = [...types][0];
        const item = { key, type };

        // Handling Arrays (sorting if the value is an array of strings)
        if (type === 'array' && keyValuesMap.has(key)) {
            let arrayValues = [...keyValuesMap.get(key)];
            // Check if the array contains only strings
            if (arrayValues.every(val => typeof val === 'string')) {
                arrayValues = arrayValues.sort((a, b) => a.localeCompare(b));
            }
            item.value = arrayValues;
        }

        // Handling Number Max / Min
        if (type === 'number' && keyNumberValues.has(key)) {
            const numbers = keyNumberValues.get(key);
            const min = Math.min(...numbers);
            const max = Math.max(...numbers);
            item.value = [min, max];
        }

        result.push(item);
    }

    return result;
}



/*******************************************************************
# CONTACTS
*******************************************************************/

// GET EMAIL
function getEmail(emailData, emailEnc) {

    // debug
    // console.log('ACTION: getEmail');

    return emailData.replaceAll(emailEnc, '');
}

// GET PHONE
function getPhone(phoneData, phoneEnc) {

    // debug
    // console.log('ACTION: getPhone');

    return phoneData.replaceAll(phoneEnc, '');
}

// VALIDATION - ORARI PUBBLICO - ALL (testa se l'intero Object è vuoto)
function isValidDays(objOrari) {
    return Object.values(objOrari).every(array =>
        array.every(item => item.start === '' && item.end === '')
    );
}

// VALIDATION - ORARI PUBBLICO - DAYS (testa se il singolo giorno presenta orari vuoti)
const isValidHours = (orariPubblico) => {
    return Object.entries(orariPubblico)
        .filter(([day, slots]) =>
            slots.length > 0 && slots.every(slot =>
                slot.start && slot.end && slot.start !== '' && slot.end !== ''
            )
        )
        .reduce((cleanData, [day, slots]) => {
            cleanData[day] = slots;
            return cleanData;
        }, {});
};

// VALIDATION - FASCE ORARIE
function allowedTime(allowedHours, gmtValue) {

    if (!allowedHours || Object.keys(allowedHours).length === 0) {
        return true;
    }

    // GET GMT DATE
    const currentDate = new Date();
    const timeGMT = new Date(currentDate.getTime() + (gmtValue * 60 * 60 * 1000));

    // GET SLOT DAY
    const giorniSettimana = ['Domenica', 'Lunedì', 'Martedì', 'Mercoledì', 'Giovedì', 'Venerdì', 'Sabato'];
    const currentDay = giorniSettimana[timeGMT.getDay()];

    // GET SLOT TIME
    const currentHour = timeGMT.getHours().toString().padStart(2, '0');
    const currentMinute = timeGMT.getMinutes().toString().padStart(2, '0');
    const currentTime = `${currentHour}:${currentMinute}`;

    // GET SLOTS (solo se il giorno esiste in allowedHours)
    const fasceOrarie = allowedHours[currentDay];

    // VALIDATION - DAY
    if (!fasceOrarie || fasceOrarie.length === 0) {
        return false;
    }

    // POSITIVE RESPONSE
    for (let fascia of fasceOrarie) {
        const start = fascia.start;
        const end = fascia.end;

        if (currentTime >= start && currentTime <= end) {
            return true;
        }
    }

    // NEGATIVE RESPONSE
    return false;
};



/*******************************************************************
# EXPORT
*******************************************************************/

export {
    toTop,
    debounce,
    splitQuery,
    getKeys,
    getEmail,
    getPhone,
    isValidHours,
    allowedTime,
};


