// SCROLL TO TOP
function toTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

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

// VALIDATION ORARI PUBBLICO - ALL (testa se l'intero Object è vuoto)
function isValidDays(objOrari) {
    return Object.values(objOrari).every(array =>
        array.every(item => item.start === '' && item.end === '')
    );
}

// VALIDATION ORARI PUBBLICO - DAYS (testa se il singolo giorno presenta orari vuoti)
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

// VALIDATION FASCE ORARIE
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


// FUNCTIONS EXPORT
export {
    toTop,
    getEmail,
    getPhone,
    isValidHours,
    allowedTime
};


