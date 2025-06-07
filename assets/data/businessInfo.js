// NOTES
// DEPENDENCY: determina o meno il mount di alcuni componenti.


// DATA
const encodeEmail = '[/*encEmail/*]';
const encodePhone = '[/*encPhone/*]';

const businessInfo = {
    domain: '',
    ragioneSociale: '',
    pIva: '',
    legalIndirizzo: '',
    legalNumCivico: '',
    legalCap: '',
    legalCittà: '',
    legalProvincia: '',
    emailTitolareDati: encodeEmail + 'debug' + encodeEmail + '@' + encodeEmail + 'debug.debug',
    dataUpdatePrivacy: '',
    encodeEmail: encodeEmail,
    encodePhone: encodePhone,
    // DEPENDENCY: determina il mount del Contact Form
    contactEmail: encodeEmail + 'debug' + encodeEmail + '@' + encodeEmail + 'debug.debug',
    // DEPENDENCY: Determina il mount della sezione Call Us
    contactPhone: encodePhone + 'debug' + encodePhone,
    // DEPENDENCY: determina il mount della Mappa
    coordinateSede: '41.89024747398705, 12.492624564952488',
    // DEPENDENCY: Determina il mount della sotto-sezione Hours
    orariPubblico: {
        // WARNING: il formato delle fasce orarie per il pubblico deve rispettare il formato HH:MM.
        Lunedì: [
            { start: '09:00', end: '13:00' },
            { start: '14:00', end: '18:00' },
        ],
        Martedì: [
            { start: '09:00', end: '13:00' },
            { start: '14:00', end: '18:00' },
        ],
        Mercoledì: [
            { start: '09:00', end: '13:00' },
            { start: '14:00', end: '18:00' },
        ],
        Giovedì: [
            { start: '09:00', end: '13:00' },
            { start: '14:00', end: '18:00' },
        ],
        Venerdì: [
            { start: '09:00', end: '13:00' },
            { start: '14:00', end: '18:00' },
        ],
        Sabato: [
            { start: '09:00', end: '12:00' },
        ],
        Domenica: [
            { start: '09:00', end: '12:00' },
        ],
    },
};


// DATA EXPORT
export default businessInfo;