// NOTES
// DEPENDENCY: determina o meno il mount di alcuni componenti.


// DATA
const utilityContent = {
    listSymbol: 'english',
    disclaimers: {
        Privacy1: 'english',
        Privacy2: 'english',
        Privacy3: 'english',
    },
    contactForm: {
        textContent: {
            title: 'english',
            name: 'english',
            surname: 'english',
            email: '* la tua email',
            phone: '* il tuo telefono',
            message: 'Lascia un messaggio..',
            submitButton: 'INVIA ▶',
            sentConfirmation: 'Messaggio inviato',
            sentThankYou: 'Grazie per averci contattato. Riceverai una risposta quanto prima alla Email o al Numero di Telefono da te indicato.',
            sentBackButton: 'TORNA AL FORM ▶',
        },
        submitContent: {
            loadingMsg: 'english',
            emailSubject: 'WEBSITE | Contatto Organico:',
            errorMsg: 'Errore durante l\'invio della Email',
            successMsg: 'Email inviata con successo.',
            networkErrorMsg: 'Errore di rete durante l\'invio.',
        }
    },
    callUs: {
        textContent: {
            title: 'English CALL',
            subTitle: 'Talk with us',
            slotsDefinedOff: 'We ar ehere for you.',
            slotsDefinedOn: 'You can call us at those hours:',
            callButton: 'CALL ▶',
        },

    },
    orariPubblico: {
        // WARNING: il formato delle fasce orarie per il pubblico deve rispettare il formato HH:MM.
        Monday: [
            { start: '09:00', end: '13:00' },
            { start: '14:00', end: '18:00' },
        ],
        Tuesday: [
            { start: '09:00', end: '13:00' },
            { start: '14:00', end: '18:00' },
        ],
        Wednesday: [
            { start: '09:00', end: '13:00' },
            { start: '14:00', end: '18:00' },
        ],
        Thursday: [
            { start: '09:00', end: '13:00' },
            { start: '14:00', end: '18:00' },
        ],
        Friday: [
            { start: '09:00', end: '13:00' },
            { start: '14:00', end: '18:00' },
        ],
        Saturday: [
            { start: '09:00', end: '12:00' },
        ],
        Domenica: [
            { start: '09:00', end: '12:00' },
        ],
    },
    openMaps: {
        textContent: {
            title: 'english',
            subTitle: 'english',
            paragraph: 'Parla direttamente con noi e scopri tutti i servizi dedicati ai nostri clienti.',
            mapButton: 'english',
        },
    },
    errorMsg: {
        requiredField: 'english',
        contactForm: {
            nameShort: 'english',
            nameLong: 'Nome troppo lungo. Sono accettati massimo 70 caratteri',
            surnameShort: 'Cognome troppo corto. Sono accettati minimo 2 caratteri',
            surnameLong: 'Cognome troppo lungo. Sono accettati massimo 70 caratteri',
            email: 'Errore nella Email, controlla e riprova',
            phoneShort: 'english',
            phoneLong: 'Numero di Telefono troppo lungo. Sono accettati massimo 25 caratteri',
            message: 'Messaggio troppo lungo. Sono accettati massimo 600 caratteri',
            privacy1: 'Devi accettare la Normativa sulla Privacy per continuare',
        },
        callUs: {
            allowedTime: 'Chiamando al di fuori delle fasce indicate, potremmo non essere disponibili',
        },
    },
    bottomButtons: {
        toContactsText: 'english',
    }
};


// DATA EXPORT
export default utilityContent;


// DATA EXPORT - DESTRUCTURED
export const {
    listSymbol,
    orariPubblico,
    disclaimers,
    contactForm,
    callUs,
    openMaps,
    errorMsg,
} = utilityContent;