// NOTES
/* DEPENDENCY: determina il map dei Link nel componente SocialMedia.
ATTENZIONE: se il campo "contact" resta vuoto, il link non verrà incluso nel map. */


// DATA
const socialInfo = {
    internationalPrefix: {
        contact: '0039',
        hrefMobile: '',
        hrefDesktop: '',
    },
    whatsapp: {
        contact: 'example',
        hrefMobile: 'whatsapp://send?phone=',
        hrefDesktop: 'https://web.whatsapp.com/send?phone=',
    },
    telegram: {
        // Telegram Channel Name
        contact: 'example',
        hrefMobile: 'tg://resolve?domain=',
        hrefDesktop: 'https://t.me/',
    },
    facebook: {
        // Profile ID
        contact: 'example',
        hrefMobile: 'fb://profile/',
        hrefDesktop: 'https://www.facebook.com/',
    },
    instagram: {
        // Username
        contact: 'example',
        hrefMobile: 'instagram://user?username=',
        hrefDesktop: 'https://www.instagram.com/',
    },
    tiktok: {
        // Username
        contact: 'example',
        hrefMobile: 'href="tiktok://@',
        hrefDesktop: 'https://www.tiktok.com/@',
    },
    linkedin: {
        // Profile ID
        contact: 'example',
        hrefMobile: 'linkedin://profile/',
        hrefDesktop: 'https://www.linkedin.com/in/',
    },
    youtube: {
        // Channel ID
        contact: 'example',
        hrefMobile: 'vnd.youtube://channel/',
        hrefDesktop: 'https://www.youtube.com/channel/',
    },
    trustpilot: {
        // User ID
        contact: 'example',
        hrefMobile: 'trustpilot://review/',
        hrefDesktop: 'https://www.trustpilot.com/review/',
    },
    x: {
        // Username
        contact: 'example',
        hrefMobile: 'twitter://user?screen_name=',
        hrefDesktop: 'https://x.com/',
    },
};


// DATA EXPORT
export default socialInfo;
