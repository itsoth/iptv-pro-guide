const fs = require('fs');
const path = require('path');
const { TRANSLATIONS } = require('./translations');
const { CONTENT_TRANSLATIONS } = require('./content-translations');
function t(langCode, key, replacements) {
  const lang = TRANSLATIONS[langCode] || TRANSLATIONS.en;
  let str = lang[key] || TRANSLATIONS.en[key] || key;
  if (replacements) {
    for (const [k, v] of Object.entries(replacements)) {
      str = str.replace(new RegExp('\\[' + k + '\\]', 'g'), v);
    }
  }
  return str;
}

const WHATSAPP = '212630050938';
const SITE_URL = 'https://iptvproguide.netlify.app';
const SITE_NAME = 'IPTV Pro Guide';
const SITE_DESC = 'Your ultimate guide to IPTV technology, setup tutorials, app guides, and troubleshooting tips. Educational content only.';

const TARGET_LANG = process.argv.find(a => a.startsWith('--lang='))?.split('=')[1];

const LANGUAGES = [
  { code: 'en', name: 'English', flag: '🇬🇧', dir: 'ltr', locale: 'en_US' },
  { code: 'fr', name: 'Français', flag: '🇫🇷', dir: 'ltr', locale: 'fr_FR' },
  { code: 'es', name: 'Español', flag: '🇪🇸', dir: 'ltr', locale: 'es_ES' },
  { code: 'ar', name: 'العربية', flag: '🇸🇦', dir: 'rtl', locale: 'ar_SA' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪', dir: 'ltr', locale: 'de_DE' },
  { code: 'pt', name: 'Português', flag: '🇧🇷', dir: 'ltr', locale: 'pt_BR' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹', dir: 'ltr', locale: 'it_IT' },
  { code: 'tr', name: 'Türkçe', flag: '🇹🇷', dir: 'ltr', locale: 'tr_TR' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺', dir: 'ltr', locale: 'ru_RU' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱', dir: 'ltr', locale: 'nl_NL' }
];

const COUNTRIES = [
  { name: 'United States', code: 'us', lang: 'en' }, { name: 'United Kingdom', code: 'gb', lang: 'en' },
  { name: 'Canada', code: 'ca', lang: 'en' }, { name: 'Australia', code: 'au', lang: 'en' },
  { name: 'France', code: 'fr', lang: 'fr' }, { name: 'Spain', code: 'es', lang: 'es' },
  { name: 'Germany', code: 'de', lang: 'de' }, { name: 'Italy', code: 'it', lang: 'it' },
  { name: 'Portugal', code: 'pt', lang: 'pt' }, { name: 'Netherlands', code: 'nl', lang: 'nl' },
  { name: 'Turkey', code: 'tr', lang: 'tr' }, { name: 'Russia', code: 'ru', lang: 'ru' },
  { name: 'Brazil', code: 'br', lang: 'pt' }, { name: 'Argentina', code: 'ar', lang: 'es' },
  { name: 'Mexico', code: 'mx', lang: 'es' }, { name: 'India', code: 'in', lang: 'en' },
  { name: 'Saudi Arabia', code: 'sa', lang: 'ar' }, { name: 'UAE', code: 'ae', lang: 'ar' },
  { name: 'Egypt', code: 'eg', lang: 'ar' }, { name: 'Morocco', code: 'ma', lang: 'fr' },
  { name: 'Algeria', code: 'dz', lang: 'fr' }, { name: 'Tunisia', code: 'tn', lang: 'fr' },
  { name: 'Japan', code: 'jp', lang: 'en' }, { name: 'South Korea', code: 'kr', lang: 'en' },
  { name: 'China', code: 'cn', lang: 'en' }, { name: 'Pakistan', code: 'pk', lang: 'en' },
  { name: 'Bangladesh', code: 'bd', lang: 'en' }, { name: 'Nigeria', code: 'ng', lang: 'en' },
  { name: 'South Africa', code: 'za', lang: 'en' }, { name: 'Kenya', code: 'ke', lang: 'en' },
  { name: 'Sweden', code: 'se', lang: 'en' }, { name: 'Norway', code: 'no', lang: 'en' },
  { name: 'Denmark', code: 'dk', lang: 'en' }, { name: 'Poland', code: 'pl', lang: 'en' },
  { name: 'Greece', code: 'gr', lang: 'en' }, { name: 'Romania', code: 'ro', lang: 'en' },
  { name: 'Switzerland', code: 'ch', lang: 'de' }, { name: 'Austria', code: 'at', lang: 'de' },
  { name: 'Belgium', code: 'be', lang: 'nl' }, { name: 'Ireland', code: 'ie', lang: 'en' },
  { name: 'New Zealand', code: 'nz', lang: 'en' }, { name: 'Singapore', code: 'sg', lang: 'en' },
  { name: 'Malaysia', code: 'my', lang: 'en' }, { name: 'Indonesia', code: 'id', lang: 'en' },
  { name: 'Philippines', code: 'ph', lang: 'en' }, { name: 'Thailand', code: 'th', lang: 'en' },
  { name: 'Vietnam', code: 'vn', lang: 'en' }, { name: 'Israel', code: 'il', lang: 'en' },
  { name: 'Qatar', code: 'qa', lang: 'ar' }, { name: 'Kuwait', code: 'kw', lang: 'ar' },
  { name: 'Oman', code: 'om', lang: 'ar' }, { name: 'Bahrain', code: 'bh', lang: 'ar' },
  { name: 'Jordan', code: 'jo', lang: 'ar' }, { name: 'Lebanon', code: 'lb', lang: 'ar' },
  { name: 'Iraq', code: 'iq', lang: 'ar' }, { name: 'Syria', code: 'sy', lang: 'ar' },
  { name: 'Yemen', code: 'ye', lang: 'ar' }, { name: 'Libya', code: 'ly', lang: 'ar' },
  { name: 'Sudan', code: 'sd', lang: 'ar' }, { name: 'Ethiopia', code: 'et', lang: 'en' },
  { name: 'Tanzania', code: 'tz', lang: 'en' }, { name: 'Uganda', code: 'ug', lang: 'en' },
  { name: 'Ghana', code: 'gh', lang: 'en' }, { name: 'Ivory Coast', code: 'ci', lang: 'fr' },
  { name: 'Senegal', code: 'sn', lang: 'fr' }, { name: 'Cameroon', code: 'cm', lang: 'fr' },
  { name: 'DR Congo', code: 'cd', lang: 'fr' }, { name: 'Angola', code: 'ao', lang: 'pt' },
  { name: 'Mozambique', code: 'mz', lang: 'pt' }, { name: 'Chile', code: 'cl', lang: 'es' },
  { name: 'Colombia', code: 'co', lang: 'es' }, { name: 'Peru', code: 'pe', lang: 'es' },
  { name: 'Venezuela', code: 've', lang: 'es' }, { name: 'Cuba', code: 'cu', lang: 'es' },
  { name: 'Dominican Rep', code: 'do', lang: 'es' }, { name: 'Puerto Rico', code: 'pr', lang: 'es' },
  { name: 'Costa Rica', code: 'cr', lang: 'es' }, { name: 'Panama', code: 'pa', lang: 'es' },
  { name: 'Guatemala', code: 'gt', lang: 'es' }, { name: 'Honduras', code: 'hn', lang: 'es' },
  { name: 'El Salvador', code: 'sv', lang: 'es' }, { name: 'Nicaragua', code: 'ni', lang: 'es' },
  { name: 'Ecuador', code: 'ec', lang: 'es' }, { name: 'Bolivia', code: 'bo', lang: 'es' },
  { name: 'Paraguay', code: 'py', lang: 'es' }, { name: 'Uruguay', code: 'uy', lang: 'es' },
  { name: 'Ukraine', code: 'ua', lang: 'ru' }, { name: 'Czech Rep', code: 'cz', lang: 'en' },
  { name: 'Hungary', code: 'hu', lang: 'en' }, { name: 'Croatia', code: 'hr', lang: 'en' },
  { name: 'Serbia', code: 'rs', lang: 'en' }, { name: 'Bulgaria', code: 'bg', lang: 'en' },
  { name: 'Slovakia', code: 'sk', lang: 'en' }, { name: 'Slovenia', code: 'si', lang: 'en' },
  { name: 'Lithuania', code: 'lt', lang: 'en' }, { name: 'Latvia', code: 'lv', lang: 'en' },
  { name: 'Estonia', code: 'ee', lang: 'en' }, { name: 'Finland', code: 'fi', lang: 'en' },
  { name: 'Iceland', code: 'is', lang: 'en' }, { name: 'Hong Kong', code: 'hk', lang: 'en' },
  { name: 'Taiwan', code: 'tw', lang: 'en' }, { name: 'Macau', code: 'mo', lang: 'en' },
  { name: 'Sri Lanka', code: 'lk', lang: 'en' }, { name: 'Nepal', code: 'np', lang: 'en' },
  { name: 'Myanmar', code: 'mm', lang: 'en' }, { name: 'Cambodia', code: 'kh', lang: 'en' },
  { name: 'Mongolia', code: 'mn', lang: 'en' }, { name: 'Kazakhstan', code: 'kz', lang: 'ru' },
  { name: 'Uzbekistan', code: 'uz', lang: 'ru' }, { name: 'Afghanistan', code: 'af', lang: 'en' },
  { name: 'Iran', code: 'ir', lang: 'en' }, { name: 'Mauritania', code: 'mr', lang: 'fr' },
  { name: 'Madagascar', code: 'mg', lang: 'fr' }, { name: 'Mali', code: 'ml', lang: 'fr' },
  { name: 'Burkina Faso', code: 'bf', lang: 'fr' }, { name: 'Niger', code: 'ne', lang: 'fr' },
  { name: 'Chad', code: 'td', lang: 'fr' }, { name: 'Benin', code: 'bj', lang: 'fr' },
  { name: 'Rwanda', code: 'rw', lang: 'en' }, { name: 'Somalia', code: 'so', lang: 'en' },
  { name: 'Zambia', code: 'zm', lang: 'en' }, { name: 'Zimbabwe', code: 'zw', lang: 'en' },
  { name: 'Malawi', code: 'mw', lang: 'en' }, { name: 'Botswana', code: 'bw', lang: 'en' },
  { name: 'Namibia', code: 'na', lang: 'en' }, { name: 'Mauritius', code: 'mu', lang: 'en' },
  { name: 'Seychelles', code: 'sc', lang: 'en' }, { name: 'Fiji', code: 'fj', lang: 'en' },
  { name: 'Papua New Guinea', code: 'pg', lang: 'en' }, { name: 'Bahamas', code: 'bs', lang: 'en' },
  { name: 'Barbados', code: 'bb', lang: 'en' }, { name: 'Trinidad', code: 'tt', lang: 'en' },
  { name: 'Jamaica', code: 'jm', lang: 'en' }, { name: 'Bermuda', code: 'bm', lang: 'en' }
];

const APPS_PLAYERS = [
  'IPTV Smarters Pro', 'TiviMate', 'Perfect Player', 'GSE Smart IPTV', 'OTT Navigator',
  'IPTV Extreme Pro', 'Lazy IPTV', 'SS IPTV', 'Net IPTV', 'One IPTV',
  'IP Television', 'ProgTV', 'IPTV Pro', 'XCIPTV Player', 'STBEmu Pro',
  'Duplex IPTV', 'iMPlayer', 'IPTV Manager', 'IPTV Stream Player', 'IPTV Master',
  'IPTV Channel Editor', 'IPTV Playlist Manager', 'Kodi', 'VLC Media Player',
  'PVR Live', 'IP TV', 'Smart IPTV', 'IPTV Smarter', 'IPTV App', 'IPTV Player'
];

const DEVICES = [
  'Amazon Fire TV Stick', 'Fire TV Stick 4K', 'Fire TV Stick 4K Max', 'Fire TV Cube',
  'Android TV Box', 'Nvidia Shield TV Pro', 'Nvidia Shield TV', 'Mi Box S',
  'Mi TV Stick', 'Chromecast with Google TV', 'Google TV Streamer',
  'Apple TV 4K', 'Apple TV HD', 'Roku Express', 'Roku Streaming Stick', 'Roku Ultra',
  'Samsung Smart TV', 'LG Smart TV (WebOS)', 'Sony Bravia TV (Android TV)',
  'Hisense Smart TV', 'TCL Roku TV', 'Panasonic Smart TV', 'Philips Smart TV',
  'Sharp Smart TV', 'Vizio Smart TV', 'Xiaomi Smart TV', 'Sky Q Box',
  'Virgin Media TV 360', 'BT TV Box Pro', 'Now TV Smart Stick',
  'MAG 322', 'MAG 324', 'MAG 424', 'MAG 524', 'Formuler Z8', 'Formuler Z10 Pro',
  'Formuler Z11 Pro', 'Dreamlink T3', 'Dreamlink T6', 'BuzzTV XRS4900',
  'BuzzTV XR4000', 'Enigma2 Box', 'Dreambox', 'VU+ Duo 4K', 'Zgemma H9S',
  'Android Smartphone', 'iPhone', 'iPad', 'Android Tablet', 'Windows PC',
  'MacBook / Mac', 'Linux PC', 'Raspberry Pi', 'Xbox One', 'Xbox Series X|S',
  'PlayStation 4', 'PlayStation 5', 'Samsung Galaxy Tab', 'Huawei MediaPad',
  'Lenovo Tab', 'Amazon Fire HD Tablet', 'Nokia Streaming Box'
];

const CATEGORIES = [
  { name: 'IPTV Guides', slug: 'iptv-guides', icon: '📖', desc: 'Comprehensive IPTV technology guides' },
  { name: 'Setup Tutorials', slug: 'setup-tutorials', icon: '🔧', desc: 'Step by step installation guides' },
  { name: 'App Guides', slug: 'app-guides', icon: '📱', desc: 'How to install and use IPTV apps' },
  { name: 'Device Guides', slug: 'device-guides', icon: '🖥️', desc: 'IPTV setup for all devices' },
  { name: 'Troubleshooting', slug: 'troubleshooting', icon: '🛠️', desc: 'Fix common IPTV problems' },
  { name: 'FAQ', slug: 'faq', icon: '❓', desc: 'Frequently asked questions about IPTV' },
  { name: 'Reviews', slug: 'reviews', icon: '⭐', desc: 'Service reviews and comparisons' },
  { name: 'Technology', slug: 'technology', icon: '💡', desc: 'IPTV technology explained' },
  { name: 'Sports', slug: 'sports', icon: '⚽', desc: 'Live sports streaming guides' },
  { name: 'Country Guides', slug: 'country-guides', icon: '🌍', desc: 'IPTV for every country' }
];

const FAQ_QUESTIONS = [
  { q: 'What is IPTV and how does it work?', a: 'IPTV (Internet Protocol Television) delivers television content over internet networks instead of traditional cable or satellite. It works by streaming video content in data packets over IP networks, allowing viewers to watch live TV, on-demand content, and recorded programs on various devices.' },
  { q: 'What internet speed do I need for IPTV?', a: 'For SD content: 10 Mbps minimum. For HD (720p/1080p): 25 Mbps minimum. For 4K UHD: 50 Mbps minimum. For multiple simultaneous streams, add 15-25 Mbps per additional stream. A wired connection is always recommended over WiFi.' },
  { q: 'Is IPTV legal?', a: 'IPTV technology itself is completely legal. Many legitimate services like Hulu Live, YouTube TV, and Sling TV use IPTV technology. Legal IPTV services have proper licensing for the content they distribute. Always verify that the service provider has rights to the content.' },
  { q: 'What is the best IPTV app?', a: 'The best app depends on your device and needs. Popular options include TiviMate (best for Android TV/Firestick), IPTV Smarters Pro (great for all devices), Perfect Player (lightweight), GSE Smart IPTV (iOS/Android), and OTT Navigator (feature-rich).' },
  { q: 'How do I set up IPTV on Firestick?', a: '1. Go to Settings > My Fire TV > Developer Options > Install Unknown Apps > Turn ON Downloader. 2. Install Downloader from Amazon Store. 3. Open Downloader and enter the URL for your IPTV app (e.g., TiviMate). 4. Install the app. 5. Enter your IPTV subscription details (portal URL, M3U link, or Xtream codes).' },
  { q: 'Why is my IPTV buffering?', a: 'Common causes: slow internet, WiFi interference, server congestion, or old devices. Solutions: use Ethernet, close background apps, reduce streaming quality, use a VPN, restart your router, or contact your provider about server load.' },
  { q: 'How do I fix IPTV freezing?', a: 'Freezing is often caused by unstable connections or server issues. Try: switching to a wired connection, lowering video quality, using a VPN, clearing app cache, updating the app, or changing DNS to Cloudflare (1.1.1.1) or Google (8.8.8.8).' },
  { q: 'Can I watch IPTV on multiple devices?', a: 'Most IPTV providers allow multiple connections. Some offer multi-screen plans for simultaneous viewing on different devices. Check with your provider about connection limits. Some plans allow 1-5 devices simultaneously.' },
  { q: 'What is an M3U playlist?', a: 'An M3U (MP3 URL) playlist is a text file containing links to IPTV channels and streams. It includes channel names, URLs, logos, and EPG data. Most IPTV apps can load M3U playlists to display available channels in a user-friendly interface.' },
  { q: 'What are Xtream Codes?', a: 'Xtream Codes is an API system used by IPTV resellers and providers to manage subscriptions. Users enter a DNS/URL, username, and password into their app instead of an M3U link. It provides a more secure and feature-rich experience.' },
  { q: 'How do I use IPTV on Smart TV?', a: 'Samsung/LG: Download Smart IPTV or SS IPTV from app store, then upload your M3U playlist. Android TV: Install TiviMate or IPTV Smarters Pro from Play Store. WebOS/Orsay: Use Smart IPTV app with your playlist URL.' },
  { q: 'What is EPG in IPTV?', a: 'EPG (Electronic Program Guide) shows TV schedules for channels. It displays program names, start times, descriptions, and durations. Most IPTV apps support EPG data through XMLTV files or built-in guide sources.' },
  { q: 'Do I need a VPN for IPTV?', a: 'A VPN is recommended but not mandatory. Benefits include: bypassing ISP throttling, accessing geo-restricted content, protecting privacy, and avoiding bandwidth shaping. Choose a VPN with fast servers and no-logs policy.' },
  { q: 'How do I install IPTV on Android TV?', a: 'Open Google Play Store, search for your IPTV app (e.g., TiviMate, IPTV Smarters Pro), install it. Open the app, enter your provider details (M3U URL, Xtream codes, or portal URL). Your channels will load automatically.' },
  { q: 'What is catch-up TV in IPTV?', a: 'Catch-up TV lets you watch previously aired programs on demand. If enabled by your provider, you can select a channel and browse programs from the past 3-7 days. Click on any past program to play it.' },
  { q: 'How do I record IPTV streams?', a: 'Some IPTV apps support recording (e.g., TiviMate, PVR Live). You need sufficient storage space. In TiviMate: long-press the channel > Record. Some providers also offer cloud DVR features.' },
  { q: 'What devices support IPTV?', a: 'IPTV works on almost any device: Smart TVs (Samsung, LG, Sony, Hisense, TCL), streaming devices (Firestick, Roku, Apple TV, Chromecast), Android TV boxes, MAG boxes, Formuler, gaming consoles, smartphones, tablets, PCs, and Raspberry Pi.' },
  { q: 'How do I add channels to my IPTV?', a: 'You can add channels by: editing your M3U playlist file, using channel editor apps, requesting from your provider, or using the channel management features in apps like TiviMate or OTT Navigator.' },
  { q: 'What is the difference between IPTV and OTT?', a: 'IPTV is delivered over managed/private networks (ISP controlled) while OTT (Over-The-Top) uses public internet. IPTV offers better quality control. OTT includes services like Netflix, YouTube, and Hulu. Both stream over IP networks.' },
  { q: 'How do I fix IPTV audio sync issues?', a: 'Try: switching audio track, adjusting audio delay in app settings (usually -100ms to +100ms), updating the app, changing video player, using hardware acceleration settings, or reinstalling the app.' },
  { q: 'Can I use IPTV without internet?', a: 'No, IPTV requires an active internet connection. However, some features like IPTV recording can be watched offline after recording, or downloaded VOD content from some providers.' },
  { q: 'How do I create my own IPTV playlist?', a: 'Use a text editor to create an M3U file with format: #EXTM3U then #EXTINF:-1 tvg-name="Channel Name" tvg-logo="URL" group-title="Category",http://stream-url. Save as playlist.m3u and upload to your IPTV app.' },
  { q: 'What is parental control in IPTV?', a: 'Parental control allows you to restrict access to certain channels or content. Most IPTV apps offer PIN-protected parental controls. You can lock specific channels, categories, or set viewing time limits.' },
  { q: 'How do I update IPTV channel list?', a: 'Your channel list updates by: reloading the playlist in your app, refreshing EPG data, or contacting your provider. Some apps auto-update. In TiviMate: Menu > Update Playlists/EPG. App data refreshes when you restart.' },
  { q: 'What is VOD in IPTV?', a: 'VOD (Video On Demand) is a library of movies, TV shows, and series available to watch anytime. IPTV providers include thousands of titles organized by genre, year, and quality. Content is updated regularly.' },
  { q: 'How do I use IPTV on iPhone/iPad?', a: 'Download GSE Smart IPTV, IPTV Smarters Pro, or IP Television from App Store. Enter your provider URL/login details. On iOS, you may need to use Safari to install enterprise apps from your provider.' },
  { q: 'What is multi-screen in IPTV?', a: 'Multi-screen allows watching different channels on different devices simultaneously. Some providers offer multi-screen subscriptions (2-5 screens). It is ideal for families or households with multiple TV viewers.' },
  { q: 'How do I fix IPTV no sound issue?', a: 'Check: audio track selection, device volume, app audio settings, audio output format (PCM/RAW), HDMI cable, Bluetooth connections. Try switching between stereo/surround in app settings or reinstalling the app.' },
  { q: 'What is a reseller in IPTV?', a: 'A reseller purchases IPTV subscriptions in bulk from providers and sells smaller packages to end users. Resellers often offer support, customized packages, and competitive pricing. They use reseller panels to manage clients.' },
  { q: 'How do I pay for IPTV subscription?', a: 'Payments are accepted via: PayPal, Credit/Debit cards, Cryptocurrency (Bitcoin, Ethereum), Bank transfer, Western Union, or local payment methods. Always use secure payment methods and verify provider legitimacy.' }
];

const APPS_TITLES = APPS_PLAYERS.map(a => `How to Install ${a} on Any Device - Complete Setup Guide`);
const DEVICE_TITLES = DEVICES.map(d => `How to Set Up IPTV on ${d} - Step by Step Guide`);
const COUNTRY_TITLES = COUNTRIES.map(c => `Best IPTV Service Provider in ${c.name} for ${c.name} Channels 2026`);
const FAQ_TITLES = FAQ_QUESTIONS.map(f => `${f.q} - Complete Guide & Answer`);

const ALL_TITLES = [
  ...APPS_TITLES,
  ...DEVICE_TITLES,
  ...COUNTRY_TITLES,
  ...FAQ_TITLES,
  'How to Install IPTV on Any Device - Universal Guide',
  'IPTV Subscription Guide 2026: Everything You Need to Know',
  'IPTV vs Cable vs Satellite: Complete Comparison Guide',
  'Best IPTV Service Providers Worldwide 2026',
  'IPTV for Beginners: Complete Getting Started Guide',
  'How to Watch Live Sports on IPTV: Complete Sports Guide',
  'IPTV VPN Setup: Best VPNs for IPTV Streaming 2026',
  'How to Create Perfect IPTV Playlist - M3U Editor Guide',
  'IPTV Panel Setup: Complete Reseller Guide',
  'IPTV Movie Streaming: Best VOD Services 2026',
  'IPTV for Kids: Family-Friendly Streaming Guide',
  'IPTV for Expats: Watch Home Country TV Abroad',
  'IPTV Business Solutions: Commercial IPTV for Hotels',
  'IPTV Multi-Room Setup: Watch TV in Every Room',
  'How to Fix All IPTV Problems: Ultimate Troubleshooting',
  'IPTV Sports Packages: Best Sports Channels Worldwide',
  'IPTV 4K Streaming: How to Watch Ultra HD Content',
  'Best IPTV Apps for Android TV Box 2026',
  'Best IPTV Apps for Firestick 2026',
  'Best IPTV Apps for Samsung Smart TV 2026',
  'Best IPTV Apps for LG WebOS TV 2026',
  'Best IPTV Apps for iPhone and iPad 2026',
  'Best IPTV Apps for Apple TV 2026',
  'Best IPTV Apps for Windows PC 2026',
  'Best IPTV Apps for Mac 2026',
  'Best IPTV Apps for Roku 2026',
  'Best IPTV Apps for MAG Box 2026',
  'Best IPTV Apps for Formuler 2026',
  'Best IPTV Apps for Chromecast 2026',
  'Best IPTV Apps for Nvidia Shield 2026',
  'Best IPTV Apps for Xbox 2026',
  'Best IPTV Apps for PlayStation 2026',
  'Best IPTV Apps for Linux 2026',
  'Best IPTV Apps for Android Smartphone 2026',
  'Best IPTV Apps for Smart TV 2026'
];

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
}

function randomDate(start, end) {
  const d = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

function pickRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function getArticleBody(langCode, type, vars) {
  const translations = CONTENT_TRANSLATIONS[langCode];
  if (translations && translations[type]) {
    return translations[type](Object.assign({ slugify: slugify, langCode: langCode }, vars));
  }
  return null;
}

function generateArticle(index, langCode) {
  const lang = LANGUAGES.find(l => l.code === langCode) || LANGUAGES[0];
  const enTitle = ALL_TITLES[index % ALL_TITLES.length];
  const baseSlug = slugify(enTitle);
  const slug = `${baseSlug}-${Math.floor(index / ALL_TITLES.length) + 1}`;
  const date = randomDate(new Date('2024-01-01'), new Date('2026-12-31'));

  let category = CATEGORIES[index % CATEGORIES.length];
  let country = COUNTRIES[index % COUNTRIES.length];
  let app = APPS_PLAYERS[index % APPS_PLAYERS.length];
  let device = DEVICES[index % DEVICES.length];
  let faqItem = FAQ_QUESTIONS[index % FAQ_QUESTIONS.length];

  // Translate title
  const translations = CONTENT_TRANSLATIONS[langCode];
  let title = enTitle;
  if (translations && translations.translateTitle) {
    const translated = translations.translateTitle(enTitle, { app, device, country, faqItem });
    if (translated) title = translated;
  }

  const keywords = [
    'IPTV', 'Internet Protocol Television', 'IPTV service', 'IPTV subscription',
    'IPTV provider', 'IPTV streaming', 'best IPTV', 'IPTV guide', 'IPTV setup',
    'IPTV tutorial', 'IPTV app', 'IPTV player', 'IPTV on Firestick',
    'IPTV on Android', 'IPTV on Smart TV', 'IPTV on iPhone', 'IPTV on PC',
    'IPTV troubleshooting', 'IPTV buffering fix', 'IPTV freezing',
    'IPTV sports', 'IPTV movies', 'IPTV 4K', 'IPTV M3U', 'IPTV playlist',
    'IPTV Xtream', 'IPTV EPG', 'IPTV VPN', 'IPTV reseller',
    app, device, country.name, `IPTV ${country.name}`,
    `best IPTV in ${country.name}`, `IPTV service ${country.name}`,
    `IPTV channels ${country.name}`, `${app} setup`, `${app} install`,
    `${device} IPTV`, `setup ${app} on ${device}`,
    `IPTV ${country.name} channels`, `IPTV for ${country.name} expats`,
    `watch ${country.name} TV abroad`, `${country.name} TV channels online`
  ];

  const keywordStr = [...new Set(keywords)].sort(() => Math.random() - 0.5).slice(0, 40).join(', ');

  let excerpt, content;

  const getExcerpt = (type) => {
    const translations = CONTENT_TRANSLATIONS[langCode];
    if (translations && translations.translateExcerpt) {
      const ex = translations.translateExcerpt(type, { app, device, country, faqItem });
      if (ex && ex[type]) return ex[type];
    }
    return null;
  };

  const getWhatsApp = (type) => {
    const translations = CONTENT_TRANSLATIONS[langCode];
    if (translations && translations.translateWhatsApp) {
      const msgs = translations.translateWhatsApp(type, { app, device, country, faqItem });
      if (msgs && msgs[type]) return msgs[type];
    }
    return null;
  };

  const wa = (type) => {
    const msg = getWhatsApp(type);
    if (msg) return `https://wa.me/${WHATSAPP}?text=${msg}`;
    return null;
  };

  if (enTitle.includes('How to Install') && APPS_PLAYERS.some(a => enTitle.includes(a.substring(0, 10)))) {
    const translatedBody = getArticleBody(langCode, 'appInstall', { app, device });
    if (translatedBody) {
      excerpt = getExcerpt('appInstall') || `Guide étape par étape pour installer ${app} sur n'importe quel appareil. Tutoriel complet de configuration ${app} avec captures d'écran et conseils de dépannage pour ${device}.`;
      content = translatedBody + `
<h2>${t(langCode, 'article_get_help', { APP: app })}</h2>
<p>${t(langCode, 'article_need_help_desc')}</p>
<div class="cta-section" style="margin:30px 0;padding:30px;text-align:center;background:linear-gradient(135deg,#0d47a1,#1a1a3e);border-radius:12px">
<h3 style="color:white;margin-bottom:10px">💬 ${t(langCode, 'article_cta_heading')}</h3>
<p style="color:#ccc;margin-bottom:20px">${t(langCode, 'article_cta_desc')}</p>
<a href="${wa('appInstall') || `https://wa.me/${WHATSAPP}?text=Bonjour%21%20J%27ai%20besoin%20d%27aide%20pour%20installer%20${encodeURIComponent(app)}`}" target="_blank" style="display:inline-block;padding:12px 30px;background:#25d366;color:white;border-radius:50px;text-decoration:none;font-weight:700">💬 ${t(langCode, 'article_cta_btn')}</a>
</div>
<p><strong>${t(langCode, 'article_related')}</strong> <a href="/${langCode}/${slugify(`Best IPTV Apps for ${device} 2026`)}-1.html">Best IPTV Apps for ${device}</a> | <a href="/${langCode}/${slugify(`How to Set Up IPTV on ${device}`)}-1.html">Set Up IPTV on ${device}</a></p>
`;
    } else {
      excerpt = `Step by step guide to install ${app} on any device. Complete ${app} setup tutorial with screenshots and troubleshooting tips for ${device}.`;
      content = `
<h2>Introduction</h2>
<p>Welcome to our complete guide on <strong>how to install and set up ${app}</strong> for IPTV streaming. ${app} is one of the most popular IPTV applications available, offering a user-friendly interface, powerful features, and wide device compatibility. This guide will walk you through the installation process on ${device} and other devices.</p>

<h2>${t(langCode, 'article_what_is', { APP: app })}</h2>
<p>${app} is a feature-rich IPTV player that allows you to stream live TV channels, movies, series, and video on demand content from your IPTV provider. It supports M3U playlists, Xtream Codes API, and has built-in EPG support for TV guides. The app is available on multiple platforms including Android, iOS, Windows, and Smart TV.</p>

<h2>${t(langCode, 'article_key_features', { APP: app })}</h2>
<ul>
<li>Support for M3U and Xtream Codes API</li>
<li>Built-in EPG (Electronic Program Guide)</li>
<li>Parental control and content filtering</li>
<li>Multi-screen and multi-device support</li>
<li>Recording and catch-up TV features</li>
<li>Customizable channel lists and favorites</li>
<li>External player integration</li>
<li>Auto-update for channel lists</li>
</ul>

<h2>${t(langCode, 'article_install_on', { APP: app, DEVICE: device })}</h2>
<p>Follow these steps to install ${app} on your ${device} for the best IPTV experience:</p>
<ol>
<li>Turn on your ${device} and ensure it is connected to the internet</li>
<li>Open the app store or download source appropriate for your device</li>
<li>Search for "${app}" in the search bar</li>
<li>Select the official ${app} application from the results</li>
<li>Click Install / Download and wait for the installation to complete</li>
<li>Once installed, open the ${app} application</li>
<li>Enter your IPTV provider details (M3U URL, Xtream Codes, or Portal URL)</li>
<li>Wait for the channel list to load and start watching</li>
</ol>

<h2>${t(langCode, 'article_install_other', { APP: app })}</h2>
<p>${app} can also be installed on many other devices. Here are quick guides for popular platforms:</p>
<p><strong>Firestick:</strong> Enable Apps from Unknown Sources in Developer Options. Install Downloader from Amazon Store. Enter the ${app} download URL in Downloader. Install and enter your IPTV credentials.</p>
<p><strong>Android TV:</strong> Open Google Play Store, search ${app}, install, open, and enter provider details.</p>
<p><strong>Samsung/LG Smart TV:</strong> Some versions may need sideloading. Check if available in your TV app store or use Smart IPTV app instead.</p>
<p><strong>iPhone/iPad:</strong> Available on App Store. Download, install, enter your provider URL and credentials.</p>
<p><strong>Windows PC:</strong> Download from official website or Microsoft Store. Install and configure with your IPTV subscription.</p>

<h2>${t(langCode, 'article_config_tips', { APP: app })}</h2>
<p>After installation, configure ${app} for the best experience:</p>
<ul>
<li><strong>EPG Setup:</strong> Enter your EPG URL in Settings to get TV schedules</li>
<li><strong>Video Player:</strong> Choose between built-in player or external player (VLC, MX Player)</li>
<li><strong>Buffer Size:</strong> Increase buffer size if you experience buffering issues</li>
<li><strong>Auto-Update:</strong> Enable auto-update for playlists and EPG</li>
<li><strong>Parental Control:</strong> Set PIN code for restricted content</li>
<li><strong>Network:</strong> Use wired Ethernet connection for best stability</li>
</ul>

<h2>${t(langCode, 'article_troubleshooting', { APP: app })}</h2>
<p>If you encounter issues with ${app}, try these solutions:</p>
<ul>
<li><strong>App not loading:</strong> Clear cache, restart device, reinstall app</li>
<li><strong>No channels showing:</strong> Verify your subscription is active, reload playlist</li>
<li><strong>Buffering:</strong> Reduce video quality, use VPN, check internet speed</li>
<li><strong>EPG not working:</strong> Check EPG URL, refresh EPG data, restart app</li>
<li><strong>Audio issues:</strong> Check audio track, adjust audio delay, change player</li>
</ul>

<h2>${t(langCode, 'article_faq', { APP: app })}</h2>
<div class="faq-item"><h3>Is ${app} free?</h3><p>${app} offers a free version with basic features. The premium version unlocks additional features including recording, multi-screen, and advanced settings.</p></div>
<div class="faq-item"><h3>Can I use ${app} on multiple devices?</h3><p>Yes, you can install ${app} on multiple devices. You will need your IPTV subscription credentials for each device.</p></div>
<div class="faq-item"><h3>Does ${app} support catch-up TV?</h3><p>If your IPTV provider offers catch-up TV, ${app} can display and play catch-up content through the EPG interface.</p></div>
<div class="faq-item"><h3>How do I update ${app}?</h3><p>Update through your device app store or download the latest version from the official website.</p></div>

<h2>${t(langCode, 'article_get_help', { APP: app })}</h2>
<p>${t(langCode, 'article_need_help_desc')}</p>
<div class="cta-section" style="margin:30px 0;padding:30px;text-align:center;background:linear-gradient(135deg,#0d47a1,#1a1a3e);border-radius:12px">
<h3 style="color:white;margin-bottom:10px">💬 ${t(langCode, 'article_cta_heading')}</h3>
<p style="color:#ccc;margin-bottom:20px">${t(langCode, 'article_cta_desc')}</p>
<a href="https://wa.me/${WHATSAPP}?text=Hi%21%20I%20need%20help%20installing%20${encodeURIComponent(app)}" target="_blank" style="display:inline-block;padding:12px 30px;background:#25d366;color:white;border-radius:50px;text-decoration:none;font-weight:700">💬 ${t(langCode, 'article_cta_btn')}</a>
</div>
<p><strong>${t(langCode, 'article_related')}</strong> <a href="/${langCode}/${slugify(`Best IPTV Apps for ${device} 2026`)}-1.html">Best IPTV Apps for ${device}</a> | <a href="/${langCode}/${slugify(`How to Set Up IPTV on ${device}`)}-1.html">Setup IPTV on ${device}</a></p>
`;
    }
  } else if (enTitle.includes('Set Up IPTV on')) {
    const translatedBody = getArticleBody(langCode, 'deviceSetup', { device, app });
    if (translatedBody) {
      excerpt = getExcerpt('deviceSetup') || `Guide complet pas à pas pour configurer IPTV sur ${device}. Apprenez à installer des applications IPTV, configurer des listes de lecture et commencer à regarder sur ${device}.`;
      content = translatedBody + `
<h2>${t(langCode, 'article_need_help')}</h2>
<p>${t(langCode, 'article_need_help_desc')}</p>
<div class="cta-section" style="margin:30px 0;padding:30px;text-align:center;background:linear-gradient(135deg,#0d47a1,#1a1a3e);border-radius:12px">
<h3 style="color:white;margin-bottom:10px">💬 ${t(langCode, 'article_cta_heading')}</h3>
<p style="color:#ccc;margin-bottom:20px">${t(langCode, 'article_cta_desc')}</p>
<a href="${wa('deviceSetup') || `https://wa.me/${WHATSAPP}?text=Bonjour%21%20J%27ai%20besoin%20d%27aide%20pour%20configurer%20IPTV%20sur%20mon%20${encodeURIComponent(device)}`}" target="_blank" style="display:inline-block;padding:12px 30px;background:#25d366;color:white;border-radius:50px;text-decoration:none;font-weight:700">💬 ${t(langCode, 'article_cta_btn')}</a>
</div>
<p><strong>${t(langCode, 'article_related')}</strong> <a href="/${langCode}/${slugify(`How to Install ${app} on Any Device`)}-1.html">Comment installer ${app}</a> | <a href="/${langCode}/${slugify(`Best IPTV Apps for ${device} 2026`)}-1.html">Meilleures applis pour ${device}</a></p>
`;
    } else {
      excerpt = `Complete step by step guide to set up IPTV on ${device}. Learn how to install IPTV apps, configure playlists, and start watching on ${device}.`;
      content = `
<h2>Introduction</h2>
<p>This comprehensive guide will show you <strong>how to set up IPTV on ${device}</strong>. Whether you are a beginner or an experienced user, this step-by-step tutorial will help you get IPTV working on your ${device} in minutes.</p>

<h2>What You Need Before Starting</h2>
<ul>
<li>A working internet connection (minimum 25 Mbps for HD)</li>
<li>An active IPTV subscription</li>
<li>Your IPTV provider details (M3U URL, Xtream Codes, or Portal URL)</li>
<li>The ${device} device fully charged or plugged in</li>
<li>A stable WiFi or Ethernet connection</li>
</ul>

<h2>Step 1: Choose an IPTV App for ${device}</h2>
<p>The first step is selecting the right IPTV app for your ${device}. We recommend these popular options:</p>
<ul>
<li><strong>IPTV Smarters Pro</strong> - Best all-around app, works on all devices</li>
<li><strong>TiviMate</strong> - Best for Android TV boxes and Firestick</li>
<li><strong>GSE Smart IPTV</strong> - Best for iPhone/iPad users</li>
<li><strong>Perfect Player</strong> - Lightweight and fast</li>
<li><strong>OTT Navigator</strong> - Feature-rich with great EPG support</li>
</ul>

<h2>Step 2: Install the IPTV App on ${device}</h2>
<p>${device === 'Amazon Fire TV Stick' ? 'Go to Settings > My Fire TV > Developer Options > Install Unknown Apps > Turn ON Downloader. Install Downloader from the Amazon Appstore. Open Downloader and enter the URL for your chosen IPTV app. Download and install the APK file.' : `Open the app store on your ${device}. Search for your chosen IPTV app. Tap Install/Download. Wait for the installation to complete.`}</p>

<h2>Step 3: Configure Your IPTV Subscription</h2>
<p>Open the installed IPTV app. You will see a welcome screen with options to enter your subscription details:</p>
<ul>
<li><strong>M3U Playlist URL:</strong> Copy and paste the M3U link provided by your IPTV service</li>
<li><strong>Xtream Codes API:</strong> Enter the server URL, username, and password</li>
<li><strong>Portal URL:</strong> Enter the MAG/STB portal URL if using that system</li>
</ul>
<p>After entering your details, click Login or Load Playlist. Your channels will load automatically.</p>

<h2>Step 4: Customize Your IPTV Experience</h2>
<p>Once your channels are loaded, customize the experience:</p>
<ul>
<li>Create favorite channels list</li>
<li>Set up EPG (TV Guide) with your provider EPG URL</li>
<li>Organize channels into custom groups</li>
<li>Set parental controls if needed</li>
<li>Configure video player settings</li>
<li>Enable auto-update for channel lists</li>
</ul>

<h2>Troubleshooting ${device} IPTV Setup</h2>
<ul>
<li><strong>No channels loading:</strong> Verify subscription, reload playlist, restart app</li>
<li><strong>Buffering:</strong> Lower quality, use Ethernet, close background apps</li>
<li><strong>App crashing:</strong> Clear cache, update app, reinstall</li>
<li><strong>Audio problems:</strong> Check audio settings, change player</li>
<li><strong>EPG not working:</strong> Refresh EPG, check URL, contact provider</li>
</ul>

<h2>Frequently Asked Questions</h2>
<div class="faq-item"><h3>Can I use IPTV on my ${device}?</h3><p>Yes, IPTV works perfectly on ${device}. Simply follow the steps above to install an IPTV app and enter your subscription details.</p></div>
<div class="faq-item"><h3>What internet speed do I need for IPTV on ${device}?</h3><p>For HD content: 25 Mbps minimum. For 4K: 50 Mbps minimum. A wired connection is recommended for best performance.</p></div>
<div class="faq-item"><h3>Do I need a VPN for IPTV on ${device}?</h3><p>A VPN can help bypass ISP throttling and protect your privacy. Choose a fast VPN with servers near your location.</p></div>

<h2>${t(langCode, 'article_need_help')}</h2>
<p>${t(langCode, 'article_need_help_desc')}</p>
<div class="cta-section" style="margin:30px 0;padding:30px;text-align:center;background:linear-gradient(135deg,#0d47a1,#1a1a3e);border-radius:12px">
<h3 style="color:white;margin-bottom:10px">💬 ${t(langCode, 'article_cta_heading')}</h3>
<p style="color:#ccc;margin-bottom:20px">${t(langCode, 'article_cta_desc')}</p>
<a href="https://wa.me/${WHATSAPP}?text=Hi%21%20I%20need%20help%20setting%20up%20IPTV%20on%20my%20${encodeURIComponent(device)}" target="_blank" style="display:inline-block;padding:12px 30px;background:#25d366;color:white;border-radius:50px;text-decoration:none;font-weight:700">💬 ${t(langCode, 'article_cta_btn')}</a>
</div>
<p><strong>${t(langCode, 'article_related')}</strong> <a href="/${langCode}/${slugify(`How to Install ${app} on Any Device`)}-1.html">How to Install ${app}</a> | <a href="/${langCode}/${slugify(`Best IPTV Apps for ${device} 2026`)}-1.html">Best Apps for ${device}</a></p>
`;
    }
  } else if (enTitle.includes('Best IPTV Service Provider')) {
    const translatedBody = getArticleBody(langCode, 'countryGuide', { country, device, app });
    if (translatedBody) {
      excerpt = getExcerpt('countryGuide') || `Trouvez le meilleur fournisseur de services IPTV en ${country.name}. Comparez les meilleurs services IPTV pour les chaînes ${country.name}, les prix et les fonctionnalités. Regardez la TV ${country.name} partout.`;
      content = translatedBody + `
<h2>${t(langCode, 'article_cta_heading')}</h2>
<p>${t(langCode, 'article_need_help_desc')}</p>
<div class="cta-section" style="margin:30px 0;padding:30px;text-align:center;background:linear-gradient(135deg,#0d47a1,#1a1a3e);border-radius:12px">
<h3 style="color:white;margin-bottom:10px">💬 ${t(langCode, 'article_cta_heading')}</h3>
<p style="color:#ccc;margin-bottom:20px">${t(langCode, 'article_cta_desc')}</p>
<a href="${wa('countryGuide') || `https://wa.me/${WHATSAPP}?text=Bonjour%21%20Je%20veux%20le%20meilleur%20IPTV%20pour%20${encodeURIComponent(country.name)}`}" target="_blank" style="display:inline-block;padding:12px 30px;background:#25d366;color:white;border-radius:50px;text-decoration:none;font-weight:700">💬 ${t(langCode, 'article_cta_btn')}</a>
</div>
<p><strong>${t(langCode, 'article_related')}</strong> <a href="/${langCode}/${slugify(`How to Set Up IPTV on ${device}`)}-1.html">IPTV Setup Guide</a> | <a href="/${langCode}/${slugify(`Best IPTV Apps for Smart TV 2026`)}-1.html">Best IPTV Apps</a></p>
`;
    } else {
      excerpt = `Find the best IPTV service provider in ${country.name}. Compare top IPTV services for ${country.name} channels, pricing, and features. Watch ${country.name} TV anywhere.`;
      content = `
<h2>Introduction</h2>
<p>Are you looking for the <strong>best IPTV service provider in ${country.name}</strong>? This comprehensive guide will help you find the perfect IPTV subscription for watching ${country.name} channels, local content, and international programming. Whether you live in ${country.name} or are an expat abroad, we have the best recommendations for you.</p>

<h2>What You Need Before Starting</h2>
<ul>
<li>A working internet connection (minimum 25 Mbps for HD)</li>
<li>An active IPTV subscription</li>
<li>Your IPTV provider details (M3U URL, Xtream Codes, or Portal URL)</li>
<li>The ${device} device fully charged or plugged in</li>
<li>A stable WiFi or Ethernet connection</li>
</ul>

<h2>Step 1: Choose an IPTV App for ${device}</h2>
<p>The first step is selecting the right IPTV app for your ${device}. We recommend these popular options:</p>
<ul>
<li><strong>IPTV Smarters Pro</strong> - Best all-around app, works on all devices</li>
<li><strong>TiviMate</strong> - Best for Android TV boxes and Firestick</li>
<li><strong>GSE Smart IPTV</strong> - Best for iPhone/iPad users</li>
<li><strong>Perfect Player</strong> - Lightweight and fast</li>
<li><strong>OTT Navigator</strong> - Feature-rich with great EPG support</li>
</ul>

<h2>Step 2: Install the IPTV App on ${device}</h2>
<p>${device === 'Amazon Fire TV Stick' ? 'Go to Settings > My Fire TV > Developer Options > Install Unknown Apps > Turn ON Downloader. Install Downloader from the Amazon Appstore. Open Downloader and enter the URL for your chosen IPTV app. Download and install the APK file.' : `Open the app store on your ${device}. Search for your chosen IPTV app. Tap Install/Download. Wait for the installation to complete.`}</p>

<h2>Step 3: Configure Your IPTV Subscription</h2>
<p>Open the installed IPTV app. You will see a welcome screen with options to enter your subscription details:</p>
<ul>
<li><strong>M3U Playlist URL:</strong> Copy and paste the M3U link provided by your IPTV service</li>
<li><strong>Xtream Codes API:</strong> Enter the server URL, username, and password</li>
<li><strong>Portal URL:</strong> Enter the MAG/STB portal URL if using that system</li>
</ul>
<p>After entering your details, click Login or Load Playlist. Your channels will load automatically.</p>

<h2>Step 4: Customize Your IPTV Experience</h2>
<p>Once your channels are loaded, customize the experience:</p>
<ul>
<li>Create favorite channels list</li>
<li>Set up EPG (TV Guide) with your provider EPG URL</li>
<li>Organize channels into custom groups</li>
<li>Set parental controls if needed</li>
<li>Configure video player settings</li>
<li>Enable auto-update for channel lists</li>
</ul>

<h2>Troubleshooting ${device} IPTV Setup</h2>
<ul>
<li><strong>No channels loading:</strong> Verify subscription, reload playlist, restart app</li>
<li><strong>Buffering:</strong> Lower quality, use Ethernet, close background apps</li>
<li><strong>App crashing:</strong> Clear cache, update app, reinstall</li>
<li><strong>Audio problems:</strong> Check audio settings, change player</li>
<li><strong>EPG not working:</strong> Refresh EPG, check URL, contact provider</li>
</ul>

<h2>Frequently Asked Questions</h2>
<div class="faq-item"><h3>Can I use IPTV on my ${device}?</h3><p>Yes, IPTV works perfectly on ${device}. Simply follow the steps above to install an IPTV app and enter your subscription details.</p></div>
<div class="faq-item"><h3>What internet speed do I need for IPTV on ${device}?</h3><p>For HD content: 25 Mbps minimum. For 4K: 50 Mbps minimum. A wired connection is recommended for best performance.</p></div>
<div class="faq-item"><h3>Do I need a VPN for IPTV on ${device}?</h3><p>A VPN can help bypass ISP throttling and protect your privacy. Choose a fast VPN with servers near your location.</p></div>

<h2>${t(langCode, 'article_need_help')}</h2>
<p>${t(langCode, 'article_need_help_desc')}</p>
<div class="cta-section" style="margin:30px 0;padding:30px;text-align:center;background:linear-gradient(135deg,#0d47a1,#1a1a3e);border-radius:12px">
<h3 style="color:white;margin-bottom:10px">💬 ${t(langCode, 'article_cta_heading')}</h3>
<p style="color:#ccc;margin-bottom:20px">${t(langCode, 'article_cta_desc')}</p>
<a href="https://wa.me/${WHATSAPP}?text=Hi%21%20I%20need%20help%20setting%20up%20IPTV%20on%20my%20${encodeURIComponent(device)}" target="_blank" style="display:inline-block;padding:12px 30px;background:#25d366;color:white;border-radius:50px;text-decoration:none;font-weight:700">💬 ${t(langCode, 'article_cta_btn')}</a>
</div>
<p><strong>${t(langCode, 'article_related')}</strong> <a href="/${langCode}/${slugify(`How to Install ${app} on Any Device`)}-1.html">How to Install ${app}</a> | <a href="/${langCode}/${slugify(`Best IPTV Apps for ${device} 2026`)}-1.html">Best Apps for ${device}</a></p>
`;
    }
  } else if (enTitle.includes('Best IPTV Service Provider')) {
    const translatedBody = getArticleBody(langCode, 'countryGuide', { country, device, app });
    if (translatedBody) {
      excerpt = getExcerpt('countryGuide') || `Trouvez le meilleur fournisseur de services IPTV en ${country.name}. Comparez les meilleurs services IPTV pour les chaînes ${country.name}, les prix et les fonctionnalités. Regardez la TV ${country.name} partout.`;
      content = translatedBody + `
<h2>${t(langCode, 'article_cta_heading')}</h2>
<p>${t(langCode, 'article_need_help_desc')}</p>
<div class="cta-section" style="margin:30px 0;padding:30px;text-align:center;background:linear-gradient(135deg,#0d47a1,#1a1a3e);border-radius:12px">
<h3 style="color:white;margin-bottom:10px">💬 ${t(langCode, 'article_cta_heading')}</h3>
<p style="color:#ccc;margin-bottom:20px">${t(langCode, 'article_cta_desc')}</p>
<a href="${wa('countryGuide') || `https://wa.me/${WHATSAPP}?text=Bonjour%21%20Je%20veux%20le%20meilleur%20IPTV%20pour%20${encodeURIComponent(country.name)}`}" target="_blank" style="display:inline-block;padding:12px 30px;background:#25d366;color:white;border-radius:50px;text-decoration:none;font-weight:700">💬 ${t(langCode, 'article_cta_btn')}</a>
</div>
<p><strong>${t(langCode, 'article_related')}</strong> <a href="/${langCode}/${slugify(`How to Set Up IPTV on ${device}`)}-1.html">IPTV Setup Guide</a> | <a href="/${langCode}/${slugify(`Best IPTV Apps for Smart TV 2026`)}-1.html">Best IPTV Apps</a></p>
`;
    } else {
      excerpt = `Find the best IPTV service provider in ${country.name}. Compare top IPTV services for ${country.name} channels, pricing, and features. Watch ${country.name} TV anywhere.`;
      content = `
<h2>Introduction</h2>
<p>Are you looking for the <strong>best IPTV service provider in ${country.name}</strong>? This comprehensive guide will help you find the perfect IPTV subscription for watching ${country.name} channels, local content, and international programming. Whether you live in ${country.name} or are an expat abroad, we have the best recommendations for you.</p>

<h2>Why Choose IPTV in ${country.name}?</h2>
<p>IPTV is becoming increasingly popular in ${country.name} for several reasons:</p>
<ul>
<li><strong>Cost savings:</strong> IPTV is typically cheaper than traditional cable or satellite</li>
<li><strong>Channel variety:</strong> Access hundreds of ${country.name} channels plus international content</li>
<li><strong>Flexibility:</strong> Watch on any device - TV, phone, tablet, or computer</li>
<li><strong>No contracts:</strong> Monthly subscriptions with no long-term commitments</li>
<li><strong>HD & 4K quality:</strong> Enjoy crystal clear picture quality</li>
<li><strong>Catch-up & VOD:</strong> Watch missed shows and thousands of movies on demand</li>
</ul>

<h2>Best IPTV Provider for ${country.name} Channels</h2>
<p>When choosing an IPTV provider for ${country.name}, look for these key features:</p>
<ul>
<li><strong>Local channels:</strong> Access to ${country.name} news, sports, and entertainment channels</li>
<li><strong>Language support:</strong> ${country.lang === 'ar' ? 'Arabic' : country.lang === 'fr' ? 'French' : country.lang === 'es' ? 'Spanish' : country.lang === 'de' ? 'German' : country.lang === 'pt' ? 'Portuguese' : country.lang === 'nl' ? 'Dutch' : country.lang === 'tr' ? 'Turkish' : country.lang === 'ru' ? 'Russian' : 'English'} language interface and content</li>
<li><strong>Reliable servers:</strong> Fast and stable streaming with minimal buffering</li>
<li><strong>Payment options:</strong> Payment methods available in ${country.name}</li>
<li><strong>Support:</strong> Customer support that understands ${country.name} needs</li>
</ul>

<h2>Top Features to Look For</h2>
<p>Our recommended IPTV providers for ${country.name} offer these features:</p>
<ul>
<li><strong>Extensive Channel List:</strong> ${Math.floor(Math.random() * 5000) + 5000}+ live channels including all major ${country.name} networks</li>
<li><strong>VOD Library:</strong> ${Math.floor(Math.random() * 10000) + 10000}+ movies and TV shows</li>
<li><strong>4K & FHD Quality:</strong> Ultra HD and Full HD streaming options</li>
<li><strong>EPG Guide:</strong> Electronic program guide for easy channel browsing</li>
<li><strong>Anti-Freeze Technology:</strong> Stable servers with minimal buffering</li>
<li><strong>24/7 Customer Support:</strong> Help available whenever you need it</li>
<li><strong>Free Trial:</strong> Test the service before subscribing</li>
<li><strong>Multi-Device:</strong> Watch on multiple devices simultaneously</li>
</ul>

<h2>How to Watch ${country.name} Channels Abroad</h2>
<p>If you are a ${country.name} expat or traveling abroad, IPTV lets you watch all your favorite ${country.name} channels from anywhere in the world. Here is how:</p>
<ol>
<li>Choose a reliable IPTV provider with ${country.name} channels</li>
<li>Subscribe to their service (use free trial first)</li>
<li>Install the IPTV app on your device</li>
<li>Enter your subscription details</li>
<li>Start watching ${country.name} TV channels instantly</li>
</ol>

<h2>IPTV for ${country.name} Sports Fans</h2>
<p>Sports fans in ${country.name} love IPTV for access to live sports events from around the world. Watch ${country.name === 'United States' ? 'NFL, NBA, MLB, NHL' : country.name === 'United Kingdom' ? 'Premier League, Champions League' : country.name === 'France' ? 'Ligue 1, Top 14' : country.name === 'Spain' ? 'La Liga, ACB' : country.name === 'Germany' ? 'Bundesliga, DEL' : country.name === 'Italy' ? 'Serie A, Lega Basket' : country.name === 'Brazil' ? 'Brasileirão, NBA' : 'local and international'} sports live with IPTV.</p>

<h2>Frequently Asked Questions about IPTV in ${country.name}</h2>
<div class="faq-item"><h3>Is IPTV legal in ${country.name}?</h3><p>The IPTV technology itself is legal. Always choose licensed providers who have proper content rights. We recommend using legitimate IPTV services.</p></div>
<div class="faq-item"><h3>What is the best IPTV app for ${country.name} users?</h3><p>Popular choices include TiviMate, IPTV Smarters Pro, GSE Smart IPTV, and Perfect Player. All work great for ${country.name} channels.</p></div>
<div class="faq-item"><h3>Can I watch ${country.name} TV abroad with IPTV?</h3><p>Yes! IPTV works anywhere in the world with an internet connection. You can watch ${country.name} channels from any country.</p></div>
<div class="faq-item"><h3>How much does IPTV cost in ${country.name}?</h3><p>Prices vary by provider. Expect to pay between $5-15/month for a quality service with ${country.name} channels.</p></div>

<h2>${t(langCode, 'article_cta_heading')}</h2>
<p>${t(langCode, 'article_need_help_desc')}</p>
<div class="cta-section" style="margin:30px 0;padding:30px;text-align:center;background:linear-gradient(135deg,#0d47a1,#1a1a3e);border-radius:12px">
<h3 style="color:white;margin-bottom:10px">💬 ${t(langCode, 'article_cta_heading')}</h3>
<p style="color:#ccc;margin-bottom:20px">${t(langCode, 'article_cta_desc')}</p>
<a href="https://wa.me/${WHATSAPP}?text=Hi%21%20I%20want%20the%20best%20IPTV%20for%20${encodeURIComponent(country.name)}" target="_blank" style="display:inline-block;padding:12px 30px;background:#25d366;color:white;border-radius:50px;text-decoration:none;font-weight:700">💬 ${t(langCode, 'article_cta_btn')}</a>
</div>
<p><strong>${t(langCode, 'article_related')}</strong> <a href="/${langCode}/${slugify(`How to Set Up IPTV on ${device}`)}-1.html">IPTV Setup Guide</a> | <a href="/${langCode}/${slugify(`Best IPTV Apps for Smart TV 2026`)}-1.html">Best IPTV Apps</a></p>
`;
    }
  } else if (FAQ_QUESTIONS.some(f => title.startsWith(f.q.substring(0, 20)))) {
    const translatedBody = getArticleBody(langCode, 'faqArticle', { faqItem, app });
    if (translatedBody) {
      excerpt = getExcerpt('faqArticle') || `${faqItem.q} - Réponse détaillée et guide complet sur IPTV. Apprenez tout sur cette question IPTV courante.`;
      content = translatedBody + `
<h2>${t(langCode, 'article_need_help')}</h2>
<p>${t(langCode, 'article_need_help_desc')}</p>
<div class="cta-section" style="margin:30px 0;padding:30px;text-align:center;background:linear-gradient(135deg,#0d47a1,#1a1a3e);border-radius:12px">
<h3 style="color:white;margin-bottom:10px">💬 ${t(langCode, 'article_cta_heading')}</h3>
<p style="color:#ccc;margin-bottom:20px">${t(langCode, 'article_cta_desc')}</p>
<a href="${wa('faqArticle') || `https://wa.me/${WHATSAPP}?text=Bonjour%21%20J%27ai%20une%20question%20sur%20${encodeURIComponent(faqItem.q.substring(0, 50))}`}" target="_blank" style="display:inline-block;padding:12px 30px;background:#25d366;color:white;border-radius:50px;text-decoration:none;font-weight:700">💬 ${t(langCode, 'article_cta_btn')}</a>
</div>
`;
    } else {
      excerpt = `${faqItem.q} - Detailed answer and complete guide about IPTV. Learn everything about this common IPTV question.`;
      content = `
<h2>${faqItem.q}</h2>
<p>${faqItem.a}</p>

<h2>Detailed Explanation</h2>
<p>This is one of the most frequently asked questions about IPTV technology. Understanding ${faqItem.q.toLowerCase()} is essential for getting the best IPTV experience. In this comprehensive guide, we provide detailed information and practical tips to help you make the most of your IPTV service.</p>

<h2>Key Points to Remember</h2>
<ul>
<li>Always use a reliable internet connection for best performance</li>
<li>Choose a reputable IPTV provider with good reviews</li>
<li>Keep your IPTV apps updated to the latest versions</li>
<li>Use a VPN for enhanced privacy if needed</li>
<li>Test services with free trials before committing</li>
</ul>

<h2>Related IPTV Topics</h2>
<ul>
<li><a href="/${langCode}/${slugify('What is IPTV and how does it work')}-1.html">What is IPTV? Complete Guide</a></li>
<li><a href="/${langCode}/${slugify('Best IPTV Services 2026')}-1.html">Best IPTV Services 2026</a></li>
<li><a href="/${langCode}/${slugify('How to Set Up IPTV on Firestick')}-1.html">IPTV on Firestick Setup</a></li>
<li><a href="/${langCode}/${slugify(`How to Install ${app} on Any Device`)}-1.html">Install ${app}</a></li>
</ul>

<h2>${t(langCode, 'article_need_help')}</h2>
<p>${t(langCode, 'article_need_help_desc')}</p>
<div class="cta-section" style="margin:30px 0;padding:30px;text-align:center;background:linear-gradient(135deg,#0d47a1,#1a1a3e);border-radius:12px">
<h3 style="color:white;margin-bottom:10px">💬 ${t(langCode, 'article_cta_heading')}</h3>
<p style="color:#ccc;margin-bottom:20px">${t(langCode, 'article_cta_desc')}</p>
<a href="https://wa.me/${WHATSAPP}?text=Hi%21%20I%20have%20a%20question%20about%20${encodeURIComponent(faqItem.q.substring(0, 50))}" target="_blank" style="display:inline-block;padding:12px 30px;background:#25d366;color:white;border-radius:50px;text-decoration:none;font-weight:700">💬 ${t(langCode, 'article_cta_btn')}</a>
</div>
`;
    }
  } else {
    const translatedBody = getArticleBody(langCode, 'generic', { title, device, app, country, faqItem });
    if (translatedBody) {
      excerpt = getExcerpt('generic') || 'La technologie IPTV a révolutionné notre façon de regarder la télévision. Contrairement au câble ou au satellite traditionnel, lIPTV délivre du contenu sur les réseaux Internet, offrant une plus grande flexibilité, plus de chaînes et de meilleurs prix.';
      excerpt = excerpt.substring(0, 150);
      content = translatedBody + `
<h2>${t(langCode, 'article_cta_heading')}</h2>
<p>${t(langCode, 'article_need_help_desc')}</p>
<div class="cta-section" style="margin:30px 0;padding:30px;text-align:center;background:linear-gradient(135deg,#0d47a1,#1a1a3e);border-radius:12px">
<h3 style="color:white;margin-bottom:10px">💬 ${t(langCode, 'article_cta_heading')}</h3>
<p style="color:#ccc;margin-bottom:20px">${t(langCode, 'article_cta_desc')}</p>
<a href="${wa('generic') || `https://wa.me/${WHATSAPP}?text=Bonjour%21%20Je%20veux%20commencer%20avec%20IPTV`}" target="_blank" style="display:inline-block;padding:12px 30px;background:#25d366;color:white;border-radius:50px;text-decoration:none;font-weight:700">💬 ${t(langCode, 'article_cta_btn')}</a>
</div>
`;
    } else {
      const body1 = 'IPTV technology has revolutionized how we watch television. Unlike traditional cable or satellite, IPTV delivers content over internet networks, offering greater flexibility, more channels, and better prices. Whether you are a sports fan, movie lover, or news junkie, IPTV has something for everyone.';
      const body2 = 'Setting up IPTV is simple and can be done on virtually any device with an internet connection. From smart TVs and streaming boxes to smartphones and tablets, you can watch your favorite content anywhere, anytime.';
      excerpt = body1.substring(0, 150);
      content = `
<h2>Introduction to ${title}</h2>
<p>${body1} ${body2}</p>

<h2>Why Choose IPTV?</h2>
<p>IPTV offers numerous advantages over traditional television: lower costs, more channels, better quality, and the ability to watch on any device. With thousands of channels available from around the world, IPTV is the future of television.</p>

<h2>Getting Started</h2>
<p>To get started with IPTV, you need: a stable internet connection (25+ Mbps for HD), a compatible device, an IPTV app, and a subscription from a reliable provider. Follow our <a href="/${langCode}/${slugify(`How to Set Up IPTV on ${device}`)}-1.html">${device} setup guide</a> for detailed instructions.</p>

<h2>Best Apps to Use</h2>
<p>We recommend using <a href="/${langCode}/${slugify(`How to Install ${app} on Any Device`)}-1.html">${app}</a> for the best streaming experience. It offers excellent features, regular updates, and great support for all devices.</p>

<h2>International Channels</h2>
<p>One of the biggest advantages of IPTV is access to international channels. Whether you are looking for <a href="/${langCode}/${slugify(`Best IPTV Service Provider in ${country.name}`)}-1.html">${country.name} channels</a> or content from any other country, IPTV has you covered with thousands of channels worldwide.</p>

<div class="faq-item"><h3>Common Questions</h3><p>For answers to common IPTV questions, check our <a href="/${langCode}/${slugify(faqItem.q.substring(0, 30))}-1.html">FAQ section</a> covering ${faqItem.q.toLowerCase()}.</p></div>

<h2>${t(langCode, 'article_cta_heading')}</h2>
<p>${t(langCode, 'article_need_help_desc')}</p>
<div class="cta-section" style="margin:30px 0;padding:30px;text-align:center;background:linear-gradient(135deg,#0d47a1,#1a1a3e);border-radius:12px">
<h3 style="color:white;margin-bottom:10px">💬 ${t(langCode, 'article_cta_heading')}</h3>
<p style="color:#ccc;margin-bottom:20px">${t(langCode, 'article_cta_desc')}</p>
<a href="https://wa.me/${WHATSAPP}?text=Hi%21%20I%20want%20to%20start%20with%20IPTV" target="_blank" style="display:inline-block;padding:12px 30px;background:#25d366;color:white;border-radius:50px;text-decoration:none;font-weight:700">💬 ${t(langCode, 'article_cta_btn')}</a>
</div>
`;
    }
  }

  const hreflangTags = LANGUAGES.map(l => `<link rel="alternate" hreflang="${l.code}" href="${SITE_URL}/${l.code}/${slug}.html">`).join('\n');

  const schemaArticle = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": excerpt.substring(0, 160),
    "author": { "@type": "Organization", "name": SITE_NAME, "url": SITE_URL },
    "datePublished": date,
    "publisher": { "@type": "Organization", "name": SITE_NAME, "url": SITE_URL, "logo": { "@type": "ImageObject", "url": SITE_URL + "/assets/img/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": SITE_URL + "/" + langCode + "/" + slug + ".html" },
    "inLanguage": langCode
  });

  const schemaBreadcrumb = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": t(langCode, 'breadcrumb_home'), "item": SITE_URL + "/" + langCode + "/" },
      { "@type": "ListItem", "position": 2, "name": t(langCode, 'breadcrumb_blog'), "item": SITE_URL + "/blog/" + langCode + "/" },
      { "@type": "ListItem", "position": 3, "name": category.name, "item": SITE_URL + "/" + langCode + "/categories/" + category.slug + ".html" },
      { "@type": "ListItem", "position": 4, "name": title, "item": SITE_URL + "/" + langCode + "/" + slug + ".html" }
    ]
  });

  const schemaFAQ = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": FAQ_QUESTIONS.slice(0, 10).map(f => ({
      "@type": "Question",
      "name": f.q,
      "acceptedAnswer": { "@type": "Answer", "text": f.a }
    }))
  });

  const schemaWebSite = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE_NAME,
    "url": SITE_URL + "/" + langCode + "/",
    "inLanguage": langCode,
    "potentialAction": {
      "@type": "SearchAction",
      "target": SITE_URL + "/" + langCode + "/?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  });

  const schemaOrg = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": SITE_NAME,
    "url": SITE_URL,
    "logo": SITE_URL + "/assets/img/logo.png",
    "contactPoint": { "@type": "ContactPoint", "telephone": "+" + WHATSAPP, "contactType": "customer support" },
    "sameAs": ["https://wa.me/" + WHATSAPP]
  });

  const langLinks = LANGUAGES.map(l =>
    `<link rel="alternate" hreflang="${l.code}" href="${SITE_URL}/${l.code}/${slug}.html">`
  ).join('\n');

  const dir = langCode === 'ar' ? 'rtl' : 'ltr';

  const html = `<!DOCTYPE html>
<html lang="${langCode}" dir="${dir}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} - ${SITE_NAME}</title>
<meta name="description" content="${excerpt.substring(0, 160)}">
<meta name="keywords" content="${keywordStr}">
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
<link rel="canonical" href="${SITE_URL}/${langCode}/${slug}.html">
${langLinks}
<meta property="og:locale" content="${lang.locale}">
<meta property="og:type" content="article">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${excerpt.substring(0, 160)}">
<meta property="og:url" content="${SITE_URL}/${langCode}/${slug}.html">
<meta property="og:site_name" content="${SITE_NAME}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${excerpt.substring(0, 160)}">
<link rel="alternate" type="application/rss+xml" title="${SITE_NAME} (${langCode}) RSS Feed" href="${SITE_URL}/rss-${langCode}.xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<script type="application/ld+json">${schemaArticle}</script>
<script type="application/ld+json">${schemaBreadcrumb}</script>
<script type="application/ld+json">${schemaFAQ}</script>
<script type="application/ld+json">${schemaWebSite}</script>
<script type="application/ld+json">${schemaOrg}</script>
<link rel="stylesheet" href="/assets/css/style.css" media="print" onload="this.media='all'">
<noscript><link rel="stylesheet" href="/assets/css/style.css"></noscript>
</head>
<body>
<header class="header">
<div class="container">
<a href="/${langCode}/" class="logo">📺 <span>IPTV</span> Pro Guide</a>
<nav class="nav">
<a href="/${langCode}/">${t(langCode, 'nav_home')}</a>
<a href="/blog/${langCode}/">${t(langCode, 'nav_blog')}</a>
<a href="/${langCode}/categories/">${t(langCode, 'nav_categories')}</a>
<a href="/${langCode}/about.html">${t(langCode, 'nav_about')}</a>
<a href="/${langCode}/contact.html">${t(langCode, 'nav_contact')}</a>
</nav>
<div class="header-actions">
<button class="header-search-btn" onclick="openSearch()" aria-label="Search">🔍</button>
<button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle theme">🌙</button>
<div class="lang-switch">
${LANGUAGES.map(l => `<a href="/${l.code}/${slug}.html" data-lang="${l.code}"${l.code === langCode ? ' class="active"' : ''}>${l.flag} ${l.code.toUpperCase()}</a>`).join('\n')}
</div>
<button class="hamburger" onclick="toggleMobileNav()" aria-label="Menu">
<span></span><span></span><span></span>
</button>
</div>
</div>
</header>

<div class="mobile-overlay" id="mobileOverlay" onclick="closeMobileNav()"></div>
<nav class="mobile-nav" id="mobileNav">
<div class="nav">
<a href="/${langCode}/">${t(langCode, 'nav_home')}</a>
<a href="/blog/${langCode}/">${t(langCode, 'nav_blog')}</a>
<a href="/${langCode}/categories/">${t(langCode, 'nav_categories')}</a>
<a href="/${langCode}/about.html">${t(langCode, 'nav_about')}</a>
<a href="/${langCode}/contact.html">${t(langCode, 'nav_contact')}</a>
</div>
<div class="lang-switch">
${LANGUAGES.map(l => `<a href="/${l.code}/${slug}.html" data-lang="${l.code}"${l.code === langCode ? ' class="active"' : ''}>${l.flag} ${l.name}</a>`).join('\n')}
</div>
</nav>

<div class="search-overlay" id="searchOverlay">
<div class="search-overlay-content">
<button class="search-overlay-close" onclick="closeSearch()">&times;</button>
<h3 style="color:var(--text-primary);font-size:18px;font-weight:700;">🔍 ${t(langCode, 'search_title')}</h3>
<input type="text" id="searchOverlayInput" placeholder="${t(langCode, 'search_placeholder')}" autocomplete="off">
<div class="search-overlay-results" id="searchOverlayResults"></div>
</div>
</div>

<div class="reading-progress" id="readingProgress"></div>

<section class="breadcrumb">
<div class="container">
<a href="/${langCode}/">${t(langCode, 'breadcrumb_home')}</a> <span>›</span> <a href="/blog/${langCode}/">${t(langCode, 'breadcrumb_blog')}</a> <span>›</span> <a href="/${langCode}/categories/${category.slug}.html">${category.name}</a> <span>›</span> ${title}
</div>
</section>

<main>
<section class="content-area">
<div class="container">
<div class="two-col">
<div class="article-content">
<h1>${title}</h1>
<div class="card-meta" style="margin-bottom:20px">
<span>📅 ${date}</span>
<span>📂 <a href="/${langCode}/categories/${category.slug}.html">${category.name}</a></span>
<span>👁️ ${Math.floor(Math.random() * 2000) + 200} ${t(langCode, 'article_views')}</span>
</div>
${content}

<div class="disclaimer-box">
<strong>⚠️ ${t(langCode, 'article_disclaimer_title')}</strong> ${t(langCode, 'article_disclaimer_text')} <a href="/${langCode}/dmca.html">${t(langCode, 'article_dmca')}</a> | <a href="/${langCode}/disclaimer.html">${t(langCode, 'article_full_disclaimer')}</a>
</div>
</div>
<aside>
<div class="sidebar">
<h2>📂 ${t(langCode, 'sidebar_category')}</h2>
<ul>
<li><a href="/${langCode}/categories/${category.slug}.html">${category.icon} ${category.name}</a></li>
</ul>
</div>
<div class="sidebar">
<h2>🌍 ${t(langCode, 'sidebar_country')}</h2>
<ul>
<li><a href="/${langCode}/${slugify(`Best IPTV Service Provider in ${country.name}`)}-1.html">🇲🇦 IPTV in ${country.name}</a></li>
</ul>
</div>
<div class="sidebar">
<h2>📱 ${t(langCode, 'sidebar_app')}</h2>
<ul>
<li><a href="/${langCode}/${slugify(`How to Install ${app} on Any Device`)}-1.html">📥 Install ${app}</a></li>
</ul>
</div>
<div class="sidebar">
<h2>🖥️ ${t(langCode, 'sidebar_device')}</h2>
<ul>
<li><a href="/${langCode}/${slugify(`How to Set Up IPTV on ${device}`)}-1.html">🔧 Setup ${device}</a></li>
</ul>
</div>
<div class="sidebar">
<h2>🏷️ ${t(langCode, 'sidebar_tags')}</h2>
<div class="tag-cloud-sidebar">
${keywordStr.split(', ').slice(0, 20).map(k => `<a href="/${langCode}/search.html?q=${encodeURIComponent(k)}">${k}</a>`).join('')}
</div>
</div>
<div class="sidebar">
<h2>💬 ${t(langCode, 'sidebar_help_title')}</h2>
<p style="color:#888;font-size:13px;margin-bottom:12px">${t(langCode, 'sidebar_help_desc')}</p>
<a href="https://wa.me/${WHATSAPP}?text=Hi%21%20I%20need%20help%20with%20${encodeURIComponent(title.substring(0, 60))}" target="_blank" style="display:block;padding:12px;background:#25d366;color:white;border-radius:8px;text-decoration:none;font-weight:600;text-align:center">💬 ${t(langCode, 'sidebar_help_btn')}</a>
</div>
<div class="sidebar">
<h2>📧 ${t(langCode, 'sidebar_newsletter_title')}</h2>
<p style="color:#888;font-size:13px;margin-bottom:12px">${t(langCode, 'sidebar_newsletter_desc')}</p>
<form class="newsletter-form">
<input type="email" placeholder="${t(langCode, 'sidebar_newsletter_placeholder')}" required>
<button type="submit">${t(langCode, 'sidebar_newsletter_btn')}</button>
</form>
</div>
</aside>
</div>
</div>
</section>

<footer class="footer">
<div class="container">
<div class="footer-grid">
<div><h2>${SITE_NAME}</h2><p>${t(langCode, 'footer_desc')}</p></div>
<div><h2>${t(langCode, 'footer_quicklinks')}</h2><a href="/${langCode}/">${t(langCode, 'nav_home')}</a><a href="/blog/${langCode}/">${t(langCode, 'nav_blog')}</a><a href="/${langCode}/categories/">${t(langCode, 'nav_categories')}</a><a href="/${langCode}/about.html">${t(langCode, 'nav_about')}</a><a href="/${langCode}/contact.html">${t(langCode, 'nav_contact')}</a></div>
<div><h2>${t(langCode, 'footer_legal')}</h2><a href="/${langCode}/privacy-policy.html">${t(langCode, 'footer_privacy')}</a><a href="/${langCode}/terms.html">${t(langCode, 'footer_terms')}</a><a href="/${langCode}/dmca.html">${t(langCode, 'footer_dmca')}</a><a href="/${langCode}/disclaimer.html">${t(langCode, 'footer_disclaimer')}</a></div>
<div><h2>${t(langCode, 'footer_follow')}</h2><a href="https://wa.me/${WHATSAPP}" target="_blank">💬 ${t(langCode, 'footer_whatsapp')}</a></div>
</div>
<div class="footer-bottom"><p>${t(langCode, 'footer_copyright')}</p></div>
</div>
</footer>

<div class="whatsapp-float">
<div class="tooltip">${t(langCode, 'whatsapp_tooltip')}</div>
<a href="#" id="whatsappBtn"><svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.165-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.93 9.93 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.889 0-3.633-.656-5.008-1.756l-3.4 1.06 1.06-3.4A7.94 7.94 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/></svg></a>
</div>

<div class="whatsapp-popup" id="whatsappPopup">
<div class="whatsapp-popup-header">
<img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%2325d366'/><text x='50' y='65' text-anchor='middle' font-size='40' fill='white'>📺</text></svg>" alt="Support">
<div><h4>${t(langCode, 'whatsapp_popup_title')}</h4><p>${t(langCode, 'whatsapp_popup_subtitle')}</p></div>
</div>
<div class="whatsapp-popup-body">
<div class="msg">👋 ${t(langCode, 'whatsapp_greeting')}</div>
<div class="msg reply">${t(langCode, 'whatsapp_reply')}</div>
</div>
<div class="whatsapp-popup-footer">
<input type="text" id="whatsappInput" placeholder="${t(langCode, 'whatsapp_placeholder')}" value="${t(langCode, 'whatsapp_default')}">
<button id="whatsappSend">${t(langCode, 'whatsapp_send')}</button>
</div>
</div>

<div class="cookie-consent" id="cookieConsent">
<div class="container">
<p>${t(langCode, 'cookie_text')}</p>
<button class="btn-cookie">${t(langCode, 'cookie_accept')}</button>
</div>
</div>

<button class="back-to-top" id="backToTop" onclick="window.scrollTo({top:0,behavior:'smooth'})">↑</button>

<script defer src="/assets/js/main.js"></script>
<script>
document.addEventListener('DOMContentLoaded',function(){var cc=document.getElementById('cookieConsent');if(!localStorage.getItem('cookieConsent')&&cc)cc.classList.add('show');var faqs=document.querySelectorAll('.faq-item h3');faqs.forEach(function(h3){h3.addEventListener('click',function(){this.parentElement.classList.toggle('active')})})});
</script>
</body>
</html>`;

  return { slug, title, excerpt, date, category: category.name, categorySlug: category.slug, tags: keywordStr.split(', ').slice(0, 10), html };
}

function generateBlogPage(langCode, articles) {
  const lang = LANGUAGES.find(l => l.code === langCode) || LANGUAGES[0];
  const dir = langCode === 'ar' ? 'rtl' : 'ltr';
  const langArticles = articles.filter(a => a.lang === langCode);
  const rows = langArticles.slice(0, 50).map(a => `
    <div class="article-row">
      <div class="info">
        <span class="card-category">${a.category}</span>
        <h2><a href="/${langCode}/${a.slug}.html">${a.title}</a></h2>
        <p>${a.excerpt.substring(0, 150)}</p>
        <div class="meta">📅 ${a.date}</div>
      </div>
    </div>`).join('');

  const langLinks = LANGUAGES.map(l =>
    `<link rel="alternate" hreflang="${l.code}" href="${SITE_URL}/blog/${l.code}/">`
  ).join('\n');

  return `<!DOCTYPE html>
<html lang="${langCode}" dir="${dir}">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${t(langCode, 'blog_title', { LANG_NAME: lang.name })}</title>
<meta name="description" content="${t(langCode, 'blog_meta_desc', { LANG_NAME: lang.name })}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${SITE_URL}/blog/${langCode}/">
${langLinks}
<meta property="og:locale" content="${lang.locale}">
<meta property="og:type" content="website">
<meta property="og:title" content="${t(langCode, 'blog_title', { LANG_NAME: lang.name })}">
<meta property="og:url" content="${SITE_URL}/blog/${langCode}/">
<meta name="twitter:card" content="summary_large_image">
<link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>
<header class="header"><div class="container">
<a href="/${langCode}/" class="logo">📺 <span>IPTV</span> Pro Guide</a>
<nav class="nav"><a href="/${langCode}/">${t(langCode, 'nav_home')}</a><a href="/blog/${langCode}/" class="active">${t(langCode, 'nav_blog')}</a><a href="/${langCode}/categories/">${t(langCode, 'nav_categories')}</a><a href="/${langCode}/about.html">${t(langCode, 'nav_about')}</a><a href="/${langCode}/contact.html">${t(langCode, 'nav_contact')}</a></nav>
<div class="header-actions">
<button class="header-search-btn" onclick="openSearch()" aria-label="Search">🔍</button>
<button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle theme">🌙</button>
<div class="lang-switch">
${LANGUAGES.map(l => `<a href="/blog/${l.code}/" data-lang="${l.code}"${l.code === langCode ? ' class="active"' : ''}>${l.flag} ${l.code.toUpperCase()}</a>`).join('\n')}
</div>
<button class="hamburger" onclick="toggleMobileNav()" aria-label="Menu">
<span></span><span></span><span></span>
</button>
</div>
</div></header>
<div class="mobile-overlay" id="mobileOverlay" onclick="closeMobileNav()"></div>
<nav class="mobile-nav" id="mobileNav">
<div class="nav">
<a href="/${langCode}/">${t(langCode, 'nav_home')}</a>
<a href="/blog/${langCode}/" class="active">${t(langCode, 'nav_blog')}</a>
<a href="/${langCode}/categories/">${t(langCode, 'nav_categories')}</a>
<a href="/${langCode}/about.html">${t(langCode, 'nav_about')}</a>
<a href="/${langCode}/contact.html">${t(langCode, 'nav_contact')}</a>
</div>
<div class="lang-switch">
${LANGUAGES.map(l => `<a href="/blog/${l.code}/" data-lang="${l.code}"${l.code === langCode ? ' class="active"' : ''}>${l.flag} ${l.name}</a>`).join('\n')}
</div>
</nav>
<div class="search-overlay" id="searchOverlay">
<div class="search-overlay-content">
<button class="search-overlay-close" onclick="closeSearch()">&times;</button>
<h3 style="color:var(--text-primary);font-size:18px;font-weight:700;">🔍 ${t(langCode, 'search_title')}</h3>
<input type="text" id="searchOverlayInput" placeholder="${t(langCode, 'search_placeholder')}" autocomplete="off">
<div class="search-overlay-results" id="searchOverlayResults"></div>
</div>
</div>
<div class="reading-progress" id="readingProgress"></div>
<main>
<section class="page-header"><div class="container"><h1>📝 ${t(langCode, 'blog_heading')}</h1><p>${langArticles.length} ${t(langCode, 'blog_subheading', { LANG_NAME: lang.name })}</p></div></section>
<section class="content-area"><div class="container">
<div class="article-list">${rows || `<p style="color:#888;padding:20px">${t(langCode, 'blog_empty')}</p>`}</div>
</div></section>
</main>
<footer class="footer"><div class="container">
<div class="footer-grid">
<div><h2>${SITE_NAME}</h2><p>${t(langCode, 'footer_desc')}</p></div>
<div><h2>${t(langCode, 'footer_quicklinks')}</h2><a href="/${langCode}/">${t(langCode, 'nav_home')}</a><a href="/blog/${langCode}/">${t(langCode, 'nav_blog')}</a><a href="/${langCode}/categories/">${t(langCode, 'nav_categories')}</a></div>
<div><h2>${t(langCode, 'footer_legal')}</h2><a href="/${langCode}/privacy-policy.html">${t(langCode, 'footer_privacy')}</a><a href="/${langCode}/terms.html">${t(langCode, 'footer_terms')}</a><a href="/${langCode}/dmca.html">${t(langCode, 'footer_dmca')}</a><a href="/${langCode}/disclaimer.html">${t(langCode, 'footer_disclaimer')}</a></div>
</div>
<div class="footer-bottom"><p>${t(langCode, 'footer_copyright')}</p></div>
</div></footer>
<div class="whatsapp-float"><a href="https://wa.me/${WHATSAPP}?text=Hi%21%20I%20need%20help%20with%20IPTV" target="_blank"><svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.165-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.93 9.93 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.889 0-3.633-.656-5.008-1.756l-3.4 1.06 1.06-3.4A7.94 7.94 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/></svg></a></div>
<div class="cookie-consent" id="cookieConsent"><div class="container"><p>${t(langCode, 'cookie_text')}</p><button class="btn-cookie">${t(langCode, 'cookie_accept')}</button></div></div>
<style>.cookie-consent{position:fixed;bottom:0;left:0;right:0;background:#1a1a3e;padding:15px 80px 15px 20px;z-index:99999;display:none;border-top:1px solid rgba(255,255,255,0.1)}.cookie-consent.show{display:block}.cookie-consent .container{display:flex;align-items:center;justify-content:space-between;gap:20px}.cookie-consent p{color:#aaa;font-size:13px;margin:0}.btn-cookie{padding:8px 24px;background:#00c853;color:#fff;border:none;border-radius:6px;cursor:pointer;font-weight:600;white-space:nowrap;pointer-events:auto;position:relative;z-index:99999}</style>
<script defer src="/assets/js/main.js"></script>
</body>
</html>`;
}

function generateCategoryPage(langCode, cat, catArticles) {
  const lang = LANGUAGES.find(l => l.code === langCode) || LANGUAGES[0];
  const dir = langCode === 'ar' ? 'rtl' : 'ltr';
  const rows = catArticles.slice(0, 100).map(a => `
    <div class="article-row">
      <div class="thumb">${cat.icon}</div>
      <div class="info">
        <span class="card-category">${cat.name}</span>
        <h2><a href="/${langCode}/${a.slug}.html">${a.title}</a></h2>
        <p>${a.excerpt.substring(0, 150)}</p>
        <div class="meta">📅 ${a.date}</div>
      </div>
    </div>`).join('');

  return `<!DOCTYPE html>
<html lang="${langCode}" dir="${dir}">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${t(langCode, 'category_title', { CAT_NAME: cat.name, LANG_NAME: lang.name })}</title>
<meta name="description" content="${t(langCode, 'category_meta_desc', { COUNT: catArticles.length, CAT_NAME: cat.name.toLowerCase(), LANG_NAME: lang.name })}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${SITE_URL}/${langCode}/categories/${cat.slug}.html">
<link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>
<header class="header"><div class="container">
<a href="/${langCode}/" class="logo">📺 <span>IPTV</span> Pro Guide</a>
<nav class="nav"><a href="/${langCode}/">${t(langCode, 'nav_home')}</a><a href="/blog/${langCode}/">${t(langCode, 'nav_blog')}</a><a href="/${langCode}/categories/" class="active">${t(langCode, 'nav_categories')}</a><a href="/${langCode}/about.html">${t(langCode, 'nav_about')}</a><a href="/${langCode}/contact.html">${t(langCode, 'nav_contact')}</a></nav>
<div class="header-actions">
<button class="header-search-btn" onclick="openSearch()" aria-label="Search">🔍</button>
<button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle theme">🌙</button>
<div class="lang-switch">
${LANGUAGES.map(l => `<a href="/${l.code}/categories/${cat.slug}.html" data-lang="${l.code}"${l.code === langCode ? ' class="active"' : ''}>${l.flag} ${l.code.toUpperCase()}</a>`).join('\n')}
</div>
<button class="hamburger" onclick="toggleMobileNav()" aria-label="Menu">
<span></span><span></span><span></span>
</button>
</div>
</div></header>
<div class="mobile-overlay" id="mobileOverlay" onclick="closeMobileNav()"></div>
<nav class="mobile-nav" id="mobileNav">
<div class="nav">
<a href="/${langCode}/">${t(langCode, 'nav_home')}</a>
<a href="/blog/${langCode}/">${t(langCode, 'nav_blog')}</a>
<a href="/${langCode}/categories/" class="active">${t(langCode, 'nav_categories')}</a>
<a href="/${langCode}/about.html">${t(langCode, 'nav_about')}</a>
<a href="/${langCode}/contact.html">${t(langCode, 'nav_contact')}</a>
</div>
<div class="lang-switch">
${LANGUAGES.map(l => `<a href="/${l.code}/categories/${cat.slug}.html" data-lang="${l.code}"${l.code === langCode ? ' class="active"' : ''}>${l.flag} ${l.name}</a>`).join('\n')}
</div>
</nav>
<div class="search-overlay" id="searchOverlay">
<div class="search-overlay-content">
<button class="search-overlay-close" onclick="closeSearch()">&times;</button>
<h3 style="color:var(--text-primary);font-size:18px;font-weight:700;">🔍 ${t(langCode, 'search_title')}</h3>
<input type="text" id="searchOverlayInput" placeholder="${t(langCode, 'search_placeholder')}" autocomplete="off">
<div class="search-overlay-results" id="searchOverlayResults"></div>
</div>
</div>
<div class="reading-progress" id="readingProgress"></div>
<main>
<section class="page-header"><div class="container"><h1>${cat.icon} ${cat.name}</h1><p>${catArticles.length} ${t(langCode, 'blog_subheading', { LANG_NAME: lang.name })}</p></div></section>
<section class="content-area"><div class="container">
<div class="article-list">${rows || `<p style="color:#888;padding:20px">${t(langCode, 'blog_empty')}</p>`}</div>
</div></section>
</main>
<footer class="footer"><div class="container">
<div class="footer-grid">
<div><h2>${SITE_NAME}</h2><p>${t(langCode, 'footer_desc')}</p></div>
<div><h2>${t(langCode, 'footer_quicklinks')}</h2><a href="/${langCode}/">${t(langCode, 'nav_home')}</a><a href="/blog/${langCode}/">${t(langCode, 'nav_blog')}</a><a href="/${langCode}/categories/">${t(langCode, 'nav_categories')}</a></div>
<div><h2>${t(langCode, 'footer_legal')}</h2><a href="/${langCode}/privacy-policy.html">${t(langCode, 'footer_privacy')}</a><a href="/${langCode}/terms.html">${t(langCode, 'footer_terms')}</a><a href="/${langCode}/dmca.html">${t(langCode, 'footer_dmca')}</a><a href="/${langCode}/disclaimer.html">${t(langCode, 'footer_disclaimer')}</a></div>
</div>
<div class="footer-bottom"><p>${t(langCode, 'footer_copyright')}</p></div>
</div></footer>
<div class="whatsapp-float"><a href="https://wa.me/${WHATSAPP}?text=Hi%21%20I%20need%20help%20with%20IPTV" target="_blank"><svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.165-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.93 9.93 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.889 0-3.633-.656-5.008-1.756l-3.4 1.06 1.06-3.4A7.94 7.94 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/></svg></a></div>
<div class="cookie-consent" id="cookieConsent"><div class="container"><p>${t(langCode, 'cookie_text')}</p><button class="btn-cookie">${t(langCode, 'cookie_accept')}</button></div></div>
<script defer src="/assets/js/main.js"></script>
</body>
</html>`;
}

function generateCategoriesListing(langCode) {
  const lang = LANGUAGES.find(l => l.code === langCode) || LANGUAGES[0];
  const dir = langCode === 'ar' ? 'rtl' : 'ltr';
  const rows = CATEGORIES.map(c => `
    <div class="cat-card">
      <div class="cat-icon">${c.icon}</div>
      <div class="cat-info">
        <h3>${c.name.charAt(0).toUpperCase() + c.name.slice(1).replace(/-/g, ' ')}</h3>
        <p>Articles about ${c.name.replace(/-/g, ' ')}</p>
        <a href="/${langCode}/categories/${c.slug}.html" class="cat-link">${t(langCode, 'categories_browse')} →</a>
      </div>
    </div>`).join('');

  return `<!DOCTYPE html>
<html lang="${langCode}" dir="${dir}">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${t(langCode, 'categories_title', { LANG_NAME: lang.name })}</title>
<meta name="description" content="${t(langCode, 'categories_meta_desc', { LANG_NAME: lang.name })}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${SITE_URL}/${langCode}/categories/">
<link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>
<header class="header"><div class="container">
<a href="/${langCode}/" class="logo">📺 <span>IPTV</span> Pro Guide</a>
<nav class="nav"><a href="/${langCode}/">${t(langCode, 'nav_home')}</a><a href="/blog/${langCode}/">${t(langCode, 'nav_blog')}</a><a href="/${langCode}/categories/" class="active">${t(langCode, 'nav_categories')}</a><a href="/${langCode}/about.html">${t(langCode, 'nav_about')}</a><a href="/${langCode}/contact.html">${t(langCode, 'nav_contact')}</a></nav>
<div class="header-actions">
<button class="header-search-btn" onclick="openSearch()" aria-label="Search">🔍</button>
<button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle theme">🌙</button>
<div class="lang-switch">
${LANGUAGES.map(l => `<a href="/${l.code}/categories/" data-lang="${l.code}"${l.code === langCode ? ' class="active"' : ''}>${l.flag} ${l.code.toUpperCase()}</a>`).join('\n')}
</div>
<button class="hamburger" onclick="toggleMobileNav()" aria-label="Menu">
<span></span><span></span><span></span>
</button>
</div>
</div></header>
<div class="mobile-overlay" id="mobileOverlay" onclick="closeMobileNav()"></div>
<nav class="mobile-nav" id="mobileNav">
<div class="nav">
<a href="/${langCode}/">${t(langCode, 'nav_home')}</a>
<a href="/blog/${langCode}/">${t(langCode, 'nav_blog')}</a>
<a href="/${langCode}/categories/" class="active">${t(langCode, 'nav_categories')}</a>
<a href="/${langCode}/about.html">${t(langCode, 'nav_about')}</a>
<a href="/${langCode}/contact.html">${t(langCode, 'nav_contact')}</a>
</div>
<div class="lang-switch">
${LANGUAGES.map(l => `<a href="/${l.code}/categories/" data-lang="${l.code}"${l.code === langCode ? ' class="active"' : ''}>${l.flag} ${l.name}</a>`).join('\n')}
</div>
</nav>
<div class="search-overlay" id="searchOverlay">
<div class="search-overlay-content">
<button class="search-overlay-close" onclick="closeSearch()">&times;</button>
<h3 style="color:var(--text-primary);font-size:18px;font-weight:700;">🔍 ${t(langCode, 'search_title')}</h3>
<input type="text" id="searchOverlayInput" placeholder="${t(langCode, 'search_placeholder')}" autocomplete="off">
<div class="search-overlay-results" id="searchOverlayResults"></div>
</div>
</div>
<div class="reading-progress" id="readingProgress"></div>
<main>
<section class="page-header"><div class="container"><h1>📂 ${t(langCode, 'categories_heading')}</h1><p>${t(langCode, 'categories_subheading', { LANG_NAME: lang.name })}</p></div></section>
<section class="content-area"><div class="container">
<div class="cat-grid">${rows}</div>
</div></section>
</main>
<footer class="footer"><div class="container">
<div class="footer-grid">
<div><h2>${SITE_NAME}</h2><p>${t(langCode, 'footer_desc')}</p></div>
<div><h2>${t(langCode, 'footer_quicklinks')}</h2><a href="/${langCode}/">${t(langCode, 'nav_home')}</a><a href="/blog/${langCode}/">${t(langCode, 'nav_blog')}</a><a href="/${langCode}/categories/">${t(langCode, 'nav_categories')}</a></div>
<div><h2>${t(langCode, 'footer_legal')}</h2><a href="/${langCode}/privacy-policy.html">${t(langCode, 'footer_privacy')}</a><a href="/${langCode}/terms.html">${t(langCode, 'footer_terms')}</a><a href="/${langCode}/dmca.html">${t(langCode, 'footer_dmca')}</a><a href="/${langCode}/disclaimer.html">${t(langCode, 'footer_disclaimer')}</a></div>
</div>
<div class="footer-bottom"><p>${t(langCode, 'footer_copyright')}</p></div>
</div></footer>
<div class="whatsapp-float"><a href="https://wa.me/${WHATSAPP}?text=Hi%21%20I%20need%20help%20with%20IPTV" target="_blank"><svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.165-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.93 9.93 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.889 0-3.633-.656-5.008-1.756l-3.4 1.06 1.06-3.4A7.94 7.94 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/></svg></a></div>
<div class="cookie-consent" id="cookieConsent"><div class="container"><p>${t(langCode, 'cookie_text')}</p><button class="btn-cookie">${t(langCode, 'cookie_accept')}</button></div></div>
<script defer src="/assets/js/main.js"></script>
</body>
</html>`;
}

function generateSearchPages() {
  LANGUAGES.forEach(lang => {
    if (TARGET_LANG && lang.code !== TARGET_LANG) return;
    const dir = lang.code === 'ar' ? 'rtl' : 'ltr';
    const html = `<!DOCTYPE html>
<html lang="${lang.code}" dir="${dir}">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${t(lang.code, 'search_meta_title', { LANG_NAME: lang.name })}</title>
<meta name="description" content="${t(lang.code, 'search_meta_desc', { LANG_NAME: lang.name })}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${SITE_URL}/${lang.code}/search.html">
<link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>
<header class="header"><div class="container">
<a href="/${lang.code}/" class="logo">📺 <span>IPTV</span> Pro Guide</a>
<nav class="nav"><a href="/${lang.code}/">${t(lang.code, 'nav_home')}</a><a href="/blog/${lang.code}/">${t(lang.code, 'nav_blog')}</a><a href="/${lang.code}/categories/">${t(lang.code, 'nav_categories')}</a><a href="/${lang.code}/about.html">${t(lang.code, 'nav_about')}</a><a href="/${lang.code}/contact.html">${t(lang.code, 'nav_contact')}</a></nav>
<div class="header-actions">
<button class="header-search-btn" onclick="openSearch()" aria-label="Search">🔍</button>
<button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle theme">🌙</button>
<div class="lang-switch">
${LANGUAGES.map(l => `<a href="/${l.code}/search.html" data-lang="${l.code}"${l.code === lang.code ? ' class="active"' : ''}>${l.flag} ${l.code.toUpperCase()}</a>`).join('\n')}
</div>
<button class="hamburger" onclick="toggleMobileNav()" aria-label="Menu">
<span></span><span></span><span></span>
</button>
</div>
</div></header>
<div class="mobile-overlay" id="mobileOverlay" onclick="closeMobileNav()"></div>
<nav class="mobile-nav" id="mobileNav">
<div class="nav">
<a href="/${lang.code}/">${t(lang.code, 'nav_home')}</a>
<a href="/blog/${lang.code}/">${t(lang.code, 'nav_blog')}</a>
<a href="/${lang.code}/categories/">${t(lang.code, 'nav_categories')}</a>
<a href="/${lang.code}/about.html">${t(lang.code, 'nav_about')}</a>
<a href="/${lang.code}/contact.html">${t(lang.code, 'nav_contact')}</a>
</div>
<div class="lang-switch">
${LANGUAGES.map(l => `<a href="/${l.code}/search.html" data-lang="${l.code}"${l.code === lang.code ? ' class="active"' : ''}>${l.flag} ${l.name}</a>`).join('\n')}
</div>
</nav>
<div class="search-overlay" id="searchOverlay">
<div class="search-overlay-content">
<button class="search-overlay-close" onclick="closeSearch()">&times;</button>
<h3 style="color:var(--text-primary);font-size:18px;font-weight:700;">🔍 ${t(lang.code, 'search_title')}</h3>
<input type="text" id="searchOverlayInput" placeholder="${t(lang.code, 'search_placeholder')}" autocomplete="off">
<div class="search-overlay-results" id="searchOverlayResults"></div>
</div>
</div>
<div class="reading-progress" id="readingProgress"></div>
<main>
<section class="page-header"><div class="container"><h1>🔍 ${t(lang.code, 'search_title')}</h1><p>${t(lang.code, 'search_subtitle', { LANG_NAME: lang.name })}</p></div></section>
<section class="content-area"><div class="container">
<div class="search-box">
<input type="text" id="searchInput" placeholder="${t(lang.code, 'search_placeholder')}" autocomplete="off">
<button onclick="searchArticles()">🔍 ${t(lang.code, 'search_btn')}</button>
</div>
<div id="results"></div>
<div class="pagination" id="pagination"></div>
</div></section>
</main>
<footer class="footer"><div class="container">
<div class="footer-grid">
<div><h2>${SITE_NAME}</h2><p>${t(lang.code, 'footer_desc')}</p></div>
<div><h2>${t(lang.code, 'footer_quicklinks')}</h2><a href="/${lang.code}/">${t(lang.code, 'nav_home')}</a><a href="/blog/${lang.code}/">${t(lang.code, 'nav_blog')}</a><a href="/${lang.code}/categories/">${t(lang.code, 'nav_categories')}</a></div>
<div><h2>${t(lang.code, 'footer_legal')}</h2><a href="/${lang.code}/privacy-policy.html">${t(lang.code, 'footer_privacy')}</a><a href="/${lang.code}/terms.html">${t(lang.code, 'footer_terms')}</a><a href="/${lang.code}/dmca.html">${t(lang.code, 'footer_dmca')}</a><a href="/${lang.code}/disclaimer.html">${t(lang.code, 'footer_disclaimer')}</a></div>
</div>
<div class="footer-bottom"><p>${t(lang.code, 'footer_copyright')}</p></div>
</div></footer>
<div class="whatsapp-float"><a href="https://wa.me/${WHATSAPP}?text=Hi%21%20I%20need%20help%20with%20IPTV" target="_blank"><svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.165-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.93 9.93 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.889 0-3.633-.656-5.008-1.756l-3.4 1.06 1.06-3.4A7.94 7.94 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/></svg></a></div>
<div class="cookie-consent" id="cookieConsent"><div class="container"><p>${t(lang.code, 'cookie_text')}</p><button class="btn-cookie">${t(lang.code, 'cookie_accept')}</button></div></div>
<script src="https://cdn.jsdelivr.net/npm/fuse.js@7.0.0/dist/fuse.min.js"></script>
<script defer src="/assets/js/main.js"></script>
</body>
</html>`;
    fs.writeFileSync(path.join(__dirname, lang.code, 'search.html'), html);
  });
}

async function generateAll() {
  const totalArticles = 2500;
  const allArticles = [];

  // Generate articles for each language
  for (const lang of LANGUAGES) {
    if (TARGET_LANG && lang.code !== TARGET_LANG) continue;
    const langDir = path.join(__dirname, lang.code);
    if (!fs.existsSync(langDir)) fs.mkdirSync(langDir, { recursive: true });
    
    const blogDir = path.join(__dirname, 'blog', lang.code);
    if (!fs.existsSync(blogDir)) fs.mkdirSync(blogDir, { recursive: true });

    const catsDir = path.join(__dirname, lang.code, 'categories');
    if (!fs.existsSync(catsDir)) fs.mkdirSync(catsDir, { recursive: true });

    console.log(`Generating ${totalArticles} articles for ${lang.name} (${lang.code})...`);

    const langArticles = [];

    for (let i = 0; i < totalArticles; i++) {
      const article = generateArticle(i, lang.code);
      langArticles.push({ slug: article.slug, title: article.title, excerpt: article.excerpt, date: article.date, category: article.category, categorySlug: article.categorySlug, tags: article.tags, lang: lang.code });
      allArticles.push({ slug: article.slug, title: article.title, excerpt: article.excerpt, date: article.date, category: article.category, categorySlug: article.categorySlug, lang: lang.code });
      fs.writeFileSync(path.join(langDir, `${article.slug}.html`), article.html);

      if ((i + 1) % 5000 === 0) {
        console.log(`  ${lang.code}: Generated ${i + 1}/${totalArticles} articles`);
      }
    }

    // Generate JSON index for this language
    fs.writeFileSync(path.join(langDir, 'articles.json'), JSON.stringify(langArticles.slice(0, 1000)));

    // Generate blog page for this language
    const blogHtml = generateBlogPage(lang.code, langArticles);
    fs.writeFileSync(path.join(__dirname, 'blog', lang.code, 'index.html'), blogHtml);

    // Generate category pages for this language
    CATEGORIES.forEach(cat => {
      const catArticles = langArticles.filter(a => a.categorySlug === cat.slug);
      const catHtml = generateCategoryPage(lang.code, cat, catArticles);
      fs.writeFileSync(path.join(catsDir, `${cat.slug}.html`), catHtml);
    });

    // Generate categories listing page for this language
    const catsListingHtml = generateCategoriesListing(lang.code);
    fs.writeFileSync(path.join(catsDir, 'index.html'), catsListingHtml);

    console.log(`  ${lang.code}: Done! Blog and category pages generated.`);
  }

  // Generate sitemap with hreflang
  generateSitemap(allArticles);
  
  // Generate RSS feeds per language
  generateRSS(allArticles);
  
  // Generate robots.txt
  generateRobotsTxt();
  
  // Generate llm.txt
  generateLlmTxt();

  // Generate language selector index page
  generateIndexPage();

  // Generate static pages for each language
  generateStaticPages();

  // Generate search pages for each language
  generateSearchPages();

  console.log('\nAll done! Multi-language site generated successfully.');
}

function generateSitemap(allArticles) {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">`;

  // Add language-specific home pages
  LANGUAGES.forEach(lang => {
    xml += `\n  <url><loc>${SITE_URL}/${lang.code}/</loc><changefreq>daily</changefreq><priority>1.0</priority>`;
    LANGUAGES.forEach(l => {
      xml += `\n    <xhtml:link rel="alternate" hreflang="${l.code}" href="${SITE_URL}/${l.code}/"/>`;
    });
    xml += '\n  </url>';

    xml += `\n  <url><loc>${SITE_URL}/blog/${lang.code}/</loc><changefreq>daily</changefreq><priority>0.9</priority>`;
    LANGUAGES.forEach(l => {
      xml += `\n    <xhtml:link rel="alternate" hreflang="${l.code}" href="${SITE_URL}/blog/${l.code}/"/>`;
    });
    xml += '\n  </url>';

    // Static pages
    ['about.html', 'contact.html', 'privacy-policy.html', 'terms.html', 'dmca.html', 'disclaimer.html'].forEach(page => {
      xml += `\n  <url><loc>${SITE_URL}/${lang.code}/${page}</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>`;
    });

    // Category pages
    CATEGORIES.forEach(cat => {
      xml += `\n  <url><loc>${SITE_URL}/${lang.code}/categories/${cat.slug}.html</loc><changefreq>weekly</changefreq><priority>0.6</priority></url>`;
    });
  });

  // Articles with hreflang
  const uniqueSlugs = [...new Set(allArticles.map(a => a.slug))];
  uniqueSlugs.forEach(slug => {
    const article = allArticles.find(a => a.slug === slug);
    if (!article) return;
    xml += `\n  <url><loc>${SITE_URL}/en/${slug}.html</loc><lastmod>${article.date}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority>`;
    LANGUAGES.forEach(l => {
      xml += `\n    <xhtml:link rel="alternate" hreflang="${l.code}" href="${SITE_URL}/${l.code}/${slug}.html"/>`;
    });
    xml += '\n  </url>';
  });

  xml += '\n</urlset>';
  fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), xml);
  console.log('Sitemap generated with hreflang');
}

function generateRSS(allArticles) {
  LANGUAGES.forEach(lang => {
    if (TARGET_LANG && lang.code !== TARGET_LANG) return;
    const langArticles = allArticles.filter(a => a.lang === lang.code).slice(0, 200);
    let rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${SITE_NAME} (${lang.name})</title>
<link>${SITE_URL}/${lang.code}/</link>
<description>${SITE_DESC} - ${lang.name}</description>
<language>${lang.code}</language>
<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
<atom:link href="${SITE_URL}/rss-${lang.code}.xml" rel="self" type="application/rss+xml"/>`;

    langArticles.forEach(a => {
      rss += `\n<item><title>${a.title}</title><link>${SITE_URL}/${lang.code}/${a.slug}.html</link><description>${a.excerpt.substring(0, 200)}</description><pubDate>${new Date(a.date).toUTCString()}</pubDate><guid>${SITE_URL}/${lang.code}/${a.slug}.html</guid><category>${a.category}</category></item>`;
    });

    rss += '\n</channel>\n</rss>';
    fs.writeFileSync(path.join(__dirname, `rss-${lang.code}.xml`), rss);
  });
  console.log('RSS feeds generated for all languages');
}

function generateRobotsTxt() {
  let robots = `# ${SITE_NAME} - Robots.txt
User-agent: *
Allow: /
Disallow: /assets/
Disallow: /search
Disallow: /search.html

Sitemap: ${SITE_URL}/sitemap.xml
Crawl-delay: 1

User-agent: Googlebot
Allow: /
Disallow: /assets/
Disallow: /search

User-agent: Googlebot-Image
Allow: /

User-agent: Googlebot-Video
Allow: /

User-agent: Bingbot
Allow: /
Disallow: /assets/
Disallow: /search

User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: Claude-Web
Disallow: /

User-agent: ImagesiftBot
Disallow: /
`;

  // Add language-specific sitemaps
  LANGUAGES.forEach(lang => {
    robots += `\nSitemap: ${SITE_URL}/rss-${lang.code}.xml`;
  });

  fs.writeFileSync(path.join(__dirname, 'robots.txt'), robots);
  console.log('Robots.txt generated');
}

function generateLlmTxt() {
  let llm = `# ${SITE_NAME}
## URL: ${SITE_URL}
## Description: ${SITE_DESC}

## Languages
${LANGUAGES.map(l => `- ${l.flag} ${l.name} (${l.code}): ${SITE_URL}/${l.code}/`).join('\n')}

## Blog
${LANGUAGES.map(l => `- ${l.name} Blog: ${SITE_URL}/blog/${l.code}/`).join('\n')}

## Categories
${CATEGORIES.map(c => `- ${c.icon} ${c.name}`).join('\n')}

## Contact
- WhatsApp: https://wa.me/${WHATSAPP}

## Legal
- DMCA: ${SITE_URL}/en/dmca.html
- Disclaimer: ${SITE_URL}/en/disclaimer.html
- Privacy Policy: ${SITE_URL}/en/privacy-policy.html
- Terms: ${SITE_URL}/en/terms.html
`;
  fs.writeFileSync(path.join(__dirname, 'llm.txt'), llm);
  console.log('llm.txt generated');
}

function generateIndexPage() {
  const langCards = LANGUAGES.map(l => `
<a href="/${l.code}/" class="lang-card">
  <span class="flag">${l.flag}</span>
  <div class="info">
    <h3>${l.name}</h3>
    <p>${SITE_URL}/${l.code}/</p>
  </div>
</a>`).join('\n');

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${SITE_NAME} - Your Ultimate Guide to Internet Protocol Television</title>
<meta name="description" content="${SITE_DESC}">
<link rel="canonical" href="${SITE_URL}/">
${LANGUAGES.map(l => `<link rel="alternate" hreflang="${l.code}" href="${SITE_URL}/${l.code}/">`).join('\n')}
<link rel="alternate" hreflang="x-default" href="${SITE_URL}/">
<link rel="stylesheet" href="/assets/css/style.css">
<style>
body{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 20px;background:linear-gradient(135deg,#0a0a1a 0%,#0f0f2a 50%,#0a0a1a 100%)}
.hero{text-align:center;margin-bottom:50px;position:relative}
.hero h1{font-size:48px;font-weight:900;color:#fff;margin-bottom:16px;letter-spacing:-1px;line-height:1.2}
.hero h1 span{background:linear-gradient(135deg,#10b981,#3b82f6);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
.hero p{color:#a0a0b8;font-size:18px;max-width:600px;margin:0 auto 30px;line-height:1.7}
.hero-stats{display:flex;justify-content:center;gap:40px;margin-bottom:40px;flex-wrap:wrap}
.stat-item{text-align:center}
.stat-number{font-size:32px;font-weight:800;color:#10b981;display:block}
.stat-label{font-size:13px;color:#6b6b80;margin-top:4px}
.section-title{text-align:center;margin-bottom:30px}
.section-title h2{font-size:28px;color:#fff;font-weight:800}
.section-title p{color:#a0a0b8;font-size:15px;margin-top:8px}
.lang-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:15px;width:100%}
.lang-card{display:flex;align-items:center;gap:12px;padding:20px;background:linear-gradient(135deg,#1e1e3a,#16213e);border-radius:12px;border:1px solid rgba(255,255,255,0.05);text-decoration:none;color:#fff;transition:all .3s}
.lang-card:hover{transform:translateY(-3px);border-color:#10b981;box-shadow:0 8px 25px rgba(16,185,129,0.15)}
.lang-card .flag{font-size:32px}
.lang-card .info{text-align:left}
.lang-card .info h3{font-size:16px;margin-bottom:4px}
.lang-card .info p{font-size:12px;color:#888;margin:0}
.footer{margin-top:60px;color:#666;font-size:13px}
</style>
</head>
<body>
<div class="container">
<h1>📺 <span>${SITE_NAME}</span></h1>
<p>${SITE_DESC}<br>Select your language to get started:</p>
<div class="lang-grid">
${LANGUAGES.map(l => `
<a href="/${l.code}/" class="lang-card">
  <span class="flag">${l.flag}</span>
  <div class="info">
    <h3>${l.name}</h3>
    <p>${SITE_URL}/${l.code}/</p>
  </div>
</a>`).join('\n')}
</div>
<div class="footer">
<p>© 2026 ${SITE_NAME}. All rights reserved. | <a href="/en/dmca.html" style="color:#00c853">DMCA</a> | <a href="/en/privacy-policy.html" style="color:#00c853">Privacy</a></p>
</div>
</div>
</body>
</html>`;
  fs.writeFileSync(path.join(__dirname, 'index.html'), html);
  console.log('Index page generated (language selector)');
}

function generateStaticPages() {
  const pages = {
    'about.html': { title: 'About Us', heading: 'About IPTV Pro Guide', content: `
<p>IPTV Pro Guide is your trusted source for comprehensive IPTV information, tutorials, and reviews. We are dedicated to helping users understand and make the most of Internet Protocol Television technology.</p>
<h2>Our Mission</h2>
<p>Our mission is to provide accurate, up-to-date, and educational content about IPTV technology. We believe in empowering users with knowledge to make informed decisions about their television viewing options.</p>
<h2>What We Offer</h2>
<ul>
<li>Comprehensive IPTV setup guides for all devices</li>
<li>Detailed app installation tutorials</li>
<li>Country-specific IPTV recommendations</li>
<li>Troubleshooting guides for common issues</li>
<li>Honest reviews and comparisons</li>
<li>Multi-language content (10 languages)</li>
</ul>
<h2>Our Team</h2>
<p>Our team consists of IPTV enthusiasts, technology writers, and streaming experts who are passionate about helping users get the best IPTV experience possible.</p>
<h2>Contact Us</h2>
<p>Have questions or need help? Contact us on WhatsApp for personalized assistance.</p>` },
    'contact.html': { title: 'Contact Us', heading: 'Contact IPTV Pro Guide', content: `
<p>Have questions about IPTV? Need help with setup? Want the best IPTV deals? We are here to help!</p>
<h2>Contact Methods</h2>
<div class="cta-section" style="margin:30px 0;padding:30px;text-align:center;background:linear-gradient(135deg,#0d47a1,#1a1a3e);border-radius:12px">
<h3 style="color:white;margin-bottom:10px">💬 WhatsApp Support</h3>
<p style="color:#ccc;margin-bottom:20px">Fastest response. Typically replies within 5 minutes.</p>
<a href="https://wa.me/${WHATSAPP}?text=Hi%21%20I%20need%20help%20with%20IPTV" target="_blank" style="display:inline-block;padding:12px 30px;background:#25d366;color:white;border-radius:50px;text-decoration:none;font-weight:700">💬 Chat on WhatsApp</a>
</div>
<h2>Get Free Trial</h2>
<p>Contact us on WhatsApp to get a free IPTV trial and test our service before subscribing.</p>
<h2>Business Inquiries</h2>
<p>For business partnerships, reseller programs, or advertising opportunities, contact us on WhatsApp.</p>` },
    'privacy-policy.html': { title: 'Privacy Policy', heading: 'Privacy Policy', content: `
<p>Last updated: January 2026</p>
<h2>Information We Collect</h2>
<p>We do not collect any personal information from our visitors. Our website is purely educational and informational. We do not use tracking cookies or analytics services that collect personal data.</p>
<h2>Cookies</h2>
<p>We use a minimal cookie consent system to remember your cookie preferences. No personal data is stored in cookies.</p>
<h2>Third-Party Links</h2>
<p>Our website contains links to WhatsApp for communication purposes. We are not responsible for the privacy practices of third-party services.</p>
<h2>Data Security</h2>
<p>We implement appropriate security measures to protect against unauthorized access to our website.</p>
<h2>Contact</h2>
<p>For privacy-related questions, contact us on WhatsApp.</p>` },
    'terms.html': { title: 'Terms of Service', heading: 'Terms of Service', content: `
<p>Last updated: January 2026</p>
<h2>Acceptance of Terms</h2>
<p>By using this website, you agree to these terms of service. If you do not agree, please do not use our website.</p>
<h2>Educational Purpose</h2>
<p>This website is for educational and informational purposes only. We do not host, stream, or distribute any copyrighted content.</p>
<h2>User Responsibilities</h2>
<p>Users are responsible for ensuring they have the right to view content in their jurisdiction. We recommend using only licensed IPTV services.</p>
<h2>Intellectual Property</h2>
<p>All content on this website is original and protected by copyright laws. You may not reproduce or distribute our content without permission.</p>
<h2>Limitation of Liability</h2>
<p>We are not liable for any damages arising from the use of this website or the information provided herein.</p>
<h2>Changes to Terms</h2>
<p>We reserve the right to modify these terms at any time. Changes will be posted on this page.</p>` },
    'dmca.html': { title: 'DMCA Notice', heading: 'DMCA Notice', content: `
<p>IPTV Pro Guide respects the intellectual property rights of others. We do not host or stream any copyrighted content on our servers.</p>
<h2>Copyright Infringement Notification</h2>
<p>If you believe that any content on our website infringes your copyright, please contact us with the following information:</p>
<ul>
<li>A description of the copyrighted work you claim has been infringed</li>
<li>The URL of the infringing material on our website</li>
<li>Your contact information (name, address, phone number, email)</li>
<li>A statement that you have a good faith belief that the use is not authorized</li>
<li>A statement that the information in your notice is accurate</li>
</ul>
<h2>Contact for DMCA Notices</h2>
<p>Please contact us on WhatsApp for DMCA-related inquiries.</p>
<h2>No Hosting of Copyrighted Content</h2>
<p>Our website contains only educational content, guides, and tutorials about IPTV technology. We do not host, stream, or link to any copyrighted television channels or content.</p>` },
    'disclaimer.html': { title: 'Disclaimer', heading: 'Disclaimer', content: `
<p>Last updated: January 2026</p>
<h2>Educational Purpose Only</h2>
<p>IPTV Pro Guide is an educational website. All content is provided for informational purposes only. We do not promote or encourage the use of illegal IPTV services.</p>
<h2>No Copyrighted Content</h2>
<p>We do not host, stream, distribute, or link to any copyrighted content. Our website contains only original educational material about IPTV technology.</p>
<h2>Third-Party Services</h2>
<p>We may mention third-party IPTV services for educational purposes. We do not endorse any specific service. Users should verify the legality of services in their jurisdiction.</p>
<h2>Affiliate Disclosure</h2>
<p>We may earn commissions from some links on our website. This does not affect our editorial content or recommendations.</p>
<h2>Accuracy of Information</h2>
<p>While we strive for accuracy, we make no warranties about the completeness or reliability of the information on our website.</p>
<h2>Contact</h2>
<p>For questions about this disclaimer, contact us on WhatsApp.</p>` }
  };

  LANGUAGES.forEach(lang => {
    if (TARGET_LANG && lang.code !== TARGET_LANG) return;
    const langDir = path.join(__dirname, lang.code);
    if (!fs.existsSync(langDir)) fs.mkdirSync(langDir, { recursive: true });

    Object.entries(pages).forEach(([filename, page]) => {
      const dir = lang.code === 'ar' ? 'rtl' : 'ltr';
      const html = `<!DOCTYPE html>
<html lang="${lang.code}" dir="${dir}">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${t(lang.code, 'static_' + filename.replace('.html', '') + '_title', { LANG_NAME: lang.name })}</title>
<meta name="robots" content="index, follow">
<link rel="canonical" href="${SITE_URL}/${lang.code}/${filename}">
<link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>
<header class="header"><div class="container">
<a href="/${lang.code}/" class="logo">📺 <span>IPTV</span> Pro Guide</a>
<nav class="nav"><a href="/${lang.code}/">${t(lang.code, 'nav_home')}</a><a href="/blog/${lang.code}/">${t(lang.code, 'nav_blog')}</a><a href="/${lang.code}/categories/">${t(lang.code, 'nav_categories')}</a><a href="/${lang.code}/about.html">${t(lang.code, 'nav_about')}</a><a href="/${lang.code}/contact.html">${t(lang.code, 'nav_contact')}</a></nav>
<div class="header-actions">
<button class="header-search-btn" onclick="openSearch()" aria-label="Search">🔍</button>
<button class="theme-toggle" onclick="toggleTheme()" aria-label="Toggle theme">🌙</button>
<div class="lang-switch">
${LANGUAGES.map(l => `<a href="/${l.code}/${filename}" data-lang="${l.code}"${l.code === lang.code ? ' class="active"' : ''}>${l.flag} ${l.code.toUpperCase()}</a>`).join('\n')}
</div>
<button class="hamburger" onclick="toggleMobileNav()" aria-label="Menu">
<span></span><span></span><span></span>
</button>
</div>
</div></header>
<div class="mobile-overlay" id="mobileOverlay" onclick="closeMobileNav()"></div>
<nav class="mobile-nav" id="mobileNav">
<div class="nav">
<a href="/${lang.code}/">${t(lang.code, 'nav_home')}</a>
<a href="/blog/${lang.code}/">${t(lang.code, 'nav_blog')}</a>
<a href="/${lang.code}/categories/">${t(lang.code, 'nav_categories')}</a>
<a href="/${lang.code}/about.html">${t(lang.code, 'nav_about')}</a>
<a href="/${lang.code}/contact.html">${t(lang.code, 'nav_contact')}</a>
</div>
<div class="lang-switch">
${LANGUAGES.map(l => `<a href="/${l.code}/${filename}" data-lang="${l.code}"${l.code === lang.code ? ' class="active"' : ''}>${l.flag} ${l.name}</a>`).join('\n')}
</div>
</nav>
<div class="search-overlay" id="searchOverlay">
<div class="search-overlay-content">
<button class="search-overlay-close" onclick="closeSearch()">&times;</button>
<h3 style="color:var(--text-primary);font-size:18px;font-weight:700;">🔍 ${t(lang.code, 'search_title')}</h3>
<input type="text" id="searchOverlayInput" placeholder="${t(lang.code, 'search_placeholder')}" autocomplete="off">
<div class="search-overlay-results" id="searchOverlayResults"></div>
</div>
</div>
<div class="reading-progress" id="readingProgress"></div>
<main>
<section class="page-header"><div class="container"><h1>${t(lang.code, 'static_' + filename.replace('.html', '') + '_heading', { LANG_NAME: lang.name })}</h1></div></section>
<section class="content-area"><div class="container">${page.content}</div></section>
</main>
<footer class="footer"><div class="container">
<div class="footer-grid">
<div><h2>${SITE_NAME}</h2><p>${t(lang.code, 'footer_desc')}</p></div>
<div><h2>${t(lang.code, 'footer_quicklinks')}</h2><a href="/${lang.code}/">${t(lang.code, 'nav_home')}</a><a href="/blog/${lang.code}/">${t(lang.code, 'nav_blog')}</a><a href="/${lang.code}/categories/">${t(lang.code, 'nav_categories')}</a></div>
<div><h2>${t(lang.code, 'footer_legal')}</h2><a href="/${lang.code}/privacy-policy.html">${t(lang.code, 'footer_privacy')}</a><a href="/${lang.code}/terms.html">${t(lang.code, 'footer_terms')}</a><a href="/${lang.code}/dmca.html">${t(lang.code, 'footer_dmca')}</a><a href="/${lang.code}/disclaimer.html">${t(lang.code, 'footer_disclaimer')}</a></div>
</div>
<div class="footer-bottom"><p>${t(lang.code, 'footer_copyright')}</p></div>
</div></footer>
<div class="cookie-consent" id="cookieConsent"><div class="container"><p>${t(lang.code, 'cookie_text')}</p><button class="btn-cookie">${t(lang.code, 'cookie_accept')}</button></div></div>
<script defer src="/assets/js/main.js"></script>
</body>
</html>`;
      fs.writeFileSync(path.join(langDir, filename), html);
    });
  });
  console.log('Static pages generated for all languages');

  // Generate language index pages (e.g., /en/index.html -> redirects to /blog/en/)
  LANGUAGES.forEach(lang => {
    if (TARGET_LANG && lang.code !== TARGET_LANG) return;
    const langDir = path.join(__dirname, lang.code);
    const dir = lang.code === 'ar' ? 'rtl' : 'ltr';
    const html = `<!DOCTYPE html>
<html lang="${lang.code}" dir="${dir}">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${SITE_NAME} - ${lang.name}</title>
<meta name="description" content="IPTV Pro Guide - ${lang.name}. Best IPTV guides, reviews, and tutorials.">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${SITE_URL}/${lang.code}/">
<meta http-equiv="refresh" content="0; url=/blog/${lang.code}/">
<link rel="stylesheet" href="/assets/css/style.css">
</head>
<body>
<div class="container">
<h1>📺 ${SITE_NAME}</h1>
<p>Redirecting to <a href="/blog/${lang.code}/">${lang.name} Blog</a>...</p>
</div>
</body>
</html>`;
      fs.writeFileSync(path.join(langDir, 'index.html'), html);
    });
    console.log('Language index pages generated');
  }

generateAll().catch(console.error);
