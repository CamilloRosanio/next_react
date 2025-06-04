/* NOTE
DEPENDENCY: determina il map dei Link nel componente SocialMedia.
ATTENZIONE: se il campo "contact" resta vuoto, il link non verrà incluso nel map.
*/


// DATA
const socialInfo = {
    whatsapp: {
        contact: 'debug',
        hrefMobile: 'whatsapp://send?phone=',
        hrefDesktop: 'https://web.whatsapp.com/send?phone=',
    },
    telegram: {
        // Telegram Channel Name
        contact: 'debug',
        hrefMobile: 'tg://resolve?domain=',
        hrefDesktop: 'https://t.me/',
    },
    facebook: {
        // Profile ID
        contact: 'debug',
        hrefMobile: 'fb://profile/',
        hrefDesktop: 'https://www.facebook.com/',
    },
    instagram: {
        // Username
        contact: 'debug',
        hrefMobile: 'instagram://user?username=',
        hrefDesktop: 'https://www.instagram.com/',
    },
    tiktok: {
        // Username
        contact: 'debug',
        hrefMobile: 'href="tiktok://@',
        hrefDesktop: 'https://www.tiktok.com/@',
    },
    linkedin: {
        // Profile ID
        contact: 'debug',
        hrefMobile: 'linkedin://profile/',
        hrefDesktop: 'https://www.linkedin.com/in/',
    },
    youtube: {
        // Channel ID
        contact: 'debug',
        hrefMobile: 'vnd.youtube://channel/',
        hrefDesktop: 'https://www.youtube.com/channel/',
    },
    trustpilot: {
        // User ID
        contact: 'debug',
        hrefMobile: 'trustpilot://review/',
        hrefDesktop: 'https://www.trustpilot.com/review/',
    },
    internationalPrefix: {
        contact: '0039',
        hrefMobile: '',
        hrefDesktop: '',
    },
    x: {
        // Username
        contact: 'debug',
        hrefMobile: 'twitter://user?screen_name=',
        hrefDesktop: 'https://x.com/',
    },
};


// DATA EXPORT
export default socialInfo;
