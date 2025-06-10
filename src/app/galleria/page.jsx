// NOTES
// Questo Component è solo lato SERVER, ed ha lo scopo di fornire "galleryPics" dal SERVER ai componenti CLIENT.


// ASSETS
import galleryPics from '../../../assets/data/gallery';


// COMPONENTS
import GalleryClient from '../../../components/GalleryClient';


// EXPORT
export default function GalleryPage() {
    return (
        <div>
            <GalleryClient images={galleryPics} />
        </div>
    );
}

