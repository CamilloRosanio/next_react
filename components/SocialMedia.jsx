// READY FOR CLIENT SIDE
"use client";


// CONTEXTS
import { useMainContext } from "../contexts/MainContext";


// ASSETS
import socialInfo from '../assets/data/socialInfo';

// Dark Mode Icons
const imgWhatsapp = '/socialMedia/icon-50-white-whatsapp.png';
const imgTelegram = '/socialMedia/icon-50-white-telegram.png';
const imgFacebook = '/socialMedia/icon-50-white-facebook.png';
const imgInstagram = '/socialMedia/icon-50-white-instagram.png';
const imgX = '/socialMedia/icon-50-white-x.png';
const imgTiktok = '/socialMedia/icon-50-white-tiktok.png';
const imgLinkedin = '/socialMedia/icon-50-white-linkedin.png';
const imgYoutube = '/socialMedia/icon-50-white-youtube.png';
const imgTrustpilot = '/socialMedia/icon-50-white-trustpilot.png';

// Light Mode Icons
const imgWhatsappDark = '/socialMedia/icon-50-grey-whatsapp.png';
const imgTelegramDark = '/socialMedia/icon-50-grey-telegram.png';
const imgFacebookDark = '/socialMedia/icon-50-grey-facebook.png';
const imgInstagramDark = '/socialMedia/icon-50-grey-instagram.png';
const imgXDark = '/socialMedia/icon-50-grey-x.png';
const imgTiktokDark = '/socialMedia/icon-50-grey-tiktok.png';
const imgLinkedinDark = '/socialMedia/icon-50-grey-linkedin.png';
const imgYoutubeDark = '/socialMedia/icon-50-grey-youtube.png';
const imgTrustpilotDark = '/socialMedia/icon-50-grey-trustpilot.png';


// EXPORT
export default function SocialMedia() {

    // DATA - CONTEXT
    const { darkMode, deviceType } = useMainContext();

    // SUPPORT
    const info = socialInfo;

    return <>

        <div className='socialMedia'>

            {/* WHATSAPP */}
            {(info.whatsapp && info.whatsapp.contact !== '') &&
                <a
                    href={`${deviceType == 'desktop' ? info.whatsapp.hrefDesktop : info.whatsapp.hrefMobile}${info.internationalPrefix.contact}${info.whatsapp.contact}`}
                    target="_blank"><img src={darkMode ? imgWhatsapp : imgWhatsappDark} alt="whatsapp icon" />
                </a>
            }

            {/* TELEGRAM */}
            {(info.telegram && info.telegram.contact !== '') &&
                <a
                    href={`${deviceType == 'desktop' ? info.telegram.hrefDesktop : info.telegram.hrefMobile}${info.telegram.contact}`}
                    target="_blank"><img src={darkMode ? imgTelegram : imgTelegramDark} alt="telegram icon" />
                </a>
            }

            {/* FACEBOOK */}
            {(info.facebook && info.facebook.contact !== '') &&
                <a
                    href={`${deviceType == 'desktop' ? info.facebook.hrefDesktop : info.facebook.hrefMobile}${info.facebook.contact}`}
                    target="_blank"><img src={darkMode ? imgFacebook : imgFacebookDark} alt="facebook icon" />
                </a>
            }

            {/* INSTAGRAM */}
            {(info.instagram && info.instagram.contact !== '') &&
                <a
                    href={`${deviceType == 'desktop' ? info.instagram.hrefDesktop : info.instagram.hrefMobile}${info.instagram.contact}`}
                    target="_blank"><img src={darkMode ? imgInstagram : imgInstagramDark} alt="instagram icon" />
                </a>
            }

            {/* X (ex Twitter) */}
            {(info.x && info.x.contact !== '') &&
                <a
                    href={`${deviceType == 'desktop' ? info.x.hrefDesktop : info.x.hrefMobile}${info.x.contact}`}
                    target="_blank"><img src={darkMode ? imgX : imgXDark} alt="x icon" />
                </a>
            }


            {/* TIKTOK */}
            {(info.tiktok && info.tiktok.contact !== '') &&
                <a
                    href={`${deviceType == 'desktop' ? info.tiktok.hrefDesktop : info.tiktok.hrefMobile}${info.tiktok.contact}`}
                    target="_blank"><img src={darkMode ? imgTiktok : imgTiktokDark} alt="tiktok icon" />
                </a>
            }

            {/* LINKEDIN */}
            {(info.linkedin && info.linkedin.contact !== '') &&
                <a
                    href={`${deviceType == 'desktop' ? info.linkedin.hrefDesktop : info.linkedin.hrefMobile}${info.linkedin.contact}`}
                    target="_blank"><img src={darkMode ? imgLinkedin : imgLinkedinDark} alt="linkedin icon" />
                </a>
            }

            {/* YOUTUBE */}
            {(info.youtube && info.youtube.contact !== '') &&
                <a
                    href={`${deviceType == 'desktop' ? info.youtube.hrefDesktop : info.youtube.hrefMobile}${info.youtube.contact}`}
                    target="_blank"><img src={darkMode ? imgYoutube : imgYoutubeDark} alt="youtube icon" />
                </a>
            }

            {/* TRUSTPILOT */}
            {(info.trustpilot && info.trustpilot.contact !== '') &&
                <a
                    href={`${deviceType == 'desktop' ? info.trustpilot.hrefDesktop : info.trustpilot.hrefMobile}${info.trustpilot.contact}`}
                    target="_blank"><img src={darkMode ? imgTrustpilot : imgTrustpilotDark} alt="trustpilot icon" />
                </a>
            }
        </div>
    </>
}