// NOTES
// DEPENDENCY: determina il map delle immagini in Gallery.
// AUTOMATION: genera automaticamente un ARRAY dei paths delle immagini all'interno della cartella "/public/gallery".


// UTILITY
import fs from 'fs';
import path from 'path';


// SUPPORT

const galleryDir = path.join(process.cwd(), 'public', 'gallery');

const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.bmp', '.tiff', '.svg'];

let galleryPics = [];

try {
    const files = fs.readdirSync(galleryDir);
    galleryPics = files
        .filter(file => imageExtensions.includes(path.extname(file).toLowerCase()))
        .map(file => `/gallery/${file}`);
} catch (err) {
    console.error('Errore caricamento immagini:', err);
}


// EXPORT
export default galleryPics;


