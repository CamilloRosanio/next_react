// NOTES
// DEPENDENCY: determina o meno il mount di alcuni componenti.


// DATA
const utilityContent = {
    listSymbol: '◤',
    disclaimers: {
        Privacy1: '* Autorizzo il trattamento dei dati personali contenuti nel mio curriculum vitae in base al D. Lgs. 196/2003 e al Regolamento UE 2016/679',
        Privacy2: 'Acconsento al trattamento dei dati per finalità di marketing, promozionali e commerciali.',
        Privacy3: 'Acconsento alla comunicazione dei dati a terzi per finalità di marketing, promozionali e commerciali.',
    },
    contactForm: {
        textContent: {
            title: 'Scrivici',
            name: '* il tuo nome',
            surname: '* il tuo cognome',
            email: '* la tua email',
            phone: '* il tuo telefono',
            message: 'Lascia un messaggio..',
            submitButton: 'INVIA ▶',
            sentConfirmation: 'Messaggio inviato',
            sentThankYou: 'Grazie per averci contattato. Riceverai una risposta quanto prima alla Email o al Numero di Telefono da te indicato.',
            sentBackButton: 'TORNA AL FORM ▶',
        },
        submitContent: {
            loadingMsg: 'Invio in corso..',
            emailSubject: 'WEBSITE | Contatto Organico:',
            errorMsg: 'Errore durante l\'invio della Email',
            successMsg: 'Email inviata con successo.',
            networkErrorMsg: 'Errore di rete durante l\'invio.',
        }
    },
    callUs: {
        textContent: {
            title: 'Chiamaci',
            subTitle: 'Parla direttamente con noi',
            slotsDefinedOff: 'Restiamo a tua disposizione.',
            slotsDefinedOn: 'Siamo disponibili nelle seguenti fasce orarie:',
            callButton: 'CHIAMA ▶',
        },
    },
    openMaps: {
        textContent: {
            title: 'Vieni a trovarci',
            subTitle: 'La nostra sede',
            paragraph: 'Parla direttamente con noi e scopri tutti i servizi dedicati ai nostri clienti.',
            mapButton: 'INDICAZIONI ▶',
        },
    },
    errorMsg: {
        requiredField: 'Campo obbligatorio',
        contactForm: {
            nameShort: 'Nome troppo corto. Sono accettati minimo 2 caratteri',
            nameLong: 'Nome troppo lungo. Sono accettati massimo 70 caratteri',
            surnameShort: 'Cognome troppo corto. Sono accettati minimo 2 caratteri',
            surnameLong: 'Cognome troppo lungo. Sono accettati massimo 70 caratteri',
            email: 'Errore nella Email, controlla e riprova',
            phoneShort: 'Numero di Telefono troppo corto. Sono accettati minimo 7 caratteri',
            phoneLong: 'Numero di Telefono troppo lungo. Sono accettati massimo 25 caratteri',
            message: 'Messaggio troppo lungo. Sono accettati massimo 600 caratteri',
            privacy1: 'Devi accettare la Normativa sulla Privacy per continuare',
        },
        callUs: {
            allowedTime: 'Chiamando al di fuori delle fasce indicate, potremmo non essere disponibili',
        },
    },
};


// DATA EXPORT
export default utilityContent;


// DATA EXPORT - DESTRUCTURED
export const {
    listSymbol,
    disclaimers,
    contactForm,
    callUs,
    openMaps,
    errorMsg,
} = utilityContent;