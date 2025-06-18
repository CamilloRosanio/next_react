// NOTES
// DEPENDENCY: determina il contenuto della lista dei prodotti e/o servizi.


// DATA
const productsDb = [
    {
        id: "1",
        name: "Caffettiera Espresso Pro",
        description: "Macchina per caffè espresso con sistema a pressione avanzato.",
        category: "Elettrodomestici",
        img: "/products-img/product-pic-1.png",
        tags: ["caffè", "espresso", "caffettiera"],
        price: 129.99,
        available: true
    },
    {
        id: "100",
        name: "Macchinetta Espresso Pro",
        description: "Macchina per caffè espresso da ufficio.",
        category: "Ristorazione",
        tags: ["caffè", "espresso", "macchina"],
        price: 87.50,
        available: true
    },
    {
        id: "2",
        name: "Corso Yoga Online",
        category: "Formazione"
    },
    {
        id: "3",
        name: "Zaino Trekking 40L",
        description: "Zaino leggero e resistente, ideale per escursioni e campeggio.",
        category: "Sport",
        price: 59.5,
        available: false
    },
    {
        id: "4",
        name: "Libro: Storie di Fantasia",
        description: "Raccolta di racconti fantasy per tutte le età.",
        category: "Libri",
        tags: ["fantasy", "racconti", "letteratura"]
    },
    {
        id: "5",
        name: "Servizio di Pulizie Casa",
        category: "Servizi",
        price: 80,
        available: true
    },
    {
        id: "6",
        name: "Auricolari Wireless X200",
        description: "Auricolari bluetooth con cancellazione rumore e 10 ore di autonomia.",
        category: "Elettronica",
        img: "/products-img/product-pic-2.jpg",
        price: 89.99,
        available: true
    },
    {
        id: "7",
        name: "Tavolo da Giardino Pieghevole",
        category: "Giardinaggio",
        tags: ["outdoor", "arredo", "pieghevole"]
    },
    {
        id: "8",
        name: "Abbonamento Mensile Palestra",
        description: "Accesso illimitato a tutte le attrezzature e corsi per 30 giorni.",
        category: "Fitness",
        price: 45,
        available: true
    },
    {
        id: "9",
        name: "Olio Extra Vergine di Oliva 1L",
        description: "Olio italiano di alta qualità, spremitura a freddo.",
        category: "Alimentari",
        img: "/products-img/product-pic-3.png",
        price: 12.3
    },
    {
        id: "10",
        name: "Lezione di Chitarra Online",
        description: "Lezione individuale via webcam per principianti e intermedi.",
        category: "Formazione",
        tags: ["musica", "strumenti", "lezione"],
        price: 30,
        available: true
    }
];


// DATA EXPORT
export default productsDb;