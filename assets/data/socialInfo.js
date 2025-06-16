// NOTES
/* DEPENDENCY: determina il map dei Link nel componente SocialMedia.
ATTENZIONE: se il campo "contact" resta vuoto, il link non verrà incluso nel MAP. */


// DATA
const socialInfo = {
    internationalPrefix: {
        contact: '0039',
        hrefMobile: '',
        hrefDesktop: '',
    },
    whatsapp: {
        contact: 'mayweb',
        hrefMobile: 'whatsapp://send?phone=',
        hrefDesktop: 'https://web.whatsapp.com/send?phone=',
    },
    telegram: {
        // Telegram Channel Name
        contact: 'mayweb',
        hrefMobile: 'tg://resolve?domain=',
        hrefDesktop: 'https://t.me/',
    },
    facebook: {
        // Profile ID
        contact: 'mayweb',
        hrefMobile: 'fb://profile/',
        hrefDesktop: 'https://www.facebook.com/',
    },
    instagram: {
        // Username
        contact: 'mayweb',
        hrefMobile: 'instagram://user?username=',
        hrefDesktop: 'https://www.instagram.com/',
    },
    tiktok: {
        // Username
        contact: 'mayweb',
        hrefMobile: 'href="tiktok://@',
        hrefDesktop: 'https://www.tiktok.com/@',
    },
    linkedin: {
        // Profile ID
        contact: 'mayweb',
        hrefMobile: 'linkedin://profile/',
        hrefDesktop: 'https://www.linkedin.com/in/',
    },
    youtube: {
        // Channel ID
        contact: 'mayweb',
        hrefMobile: 'vnd.youtube://channel/',
        hrefDesktop: 'https://www.youtube.com/channel/',
    },
    trustpilot: {
        // User ID
        contact: 'mayweb',
        hrefMobile: 'trustpilot://review/',
        hrefDesktop: 'https://www.trustpilot.com/review/',
    },
    x: {
        // Username
        contact: 'mayweb',
        hrefMobile: 'twitter://user?screen_name=',
        hrefDesktop: 'https://x.com/',
    },
};


// DATA EXPORT
export default socialInfo;
