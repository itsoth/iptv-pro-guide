const fs = require('fs');
const path = require('path');

const WHATSAPP = '212630050938';
const SITE_URL = 'https://www.iptvproguide.com';
const SITE_NAME = 'IPTV Pro Guide';
const SITE_DESC = 'Your ultimate guide to IPTV technology, setup tutorials, app guides, and troubleshooting tips. Educational content only.';

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

function generateArticle(index) {
  const title = ALL_TITLES[index % ALL_TITLES.length];
  const baseSlug = slugify(title);
  const slug = `${baseSlug}-${Math.floor(index / ALL_TITLES.length) + 1}`;
  const date = randomDate(new Date('2024-01-01'), new Date('2026-12-31'));

  let category = CATEGORIES[index % CATEGORIES.length];
  let country = COUNTRIES[index % COUNTRIES.length];
  let app = APPS_PLAYERS[index % APPS_PLAYERS.length];
  let device = DEVICES[index % DEVICES.length];
  let faqItem = FAQ_QUESTIONS[index % FAQ_QUESTIONS.length];

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

  if (title.includes('How to Install') && APPS_PLAYERS.some(a => title.includes(a.substring(0, 10)))) {
    excerpt = `Step by step guide to install ${app} on any device. Complete ${app} setup tutorial with screenshots and troubleshooting tips for ${device}.`;
    content = `
<h2>Introduction</h2>
<p>Welcome to our complete guide on <strong>how to install and set up ${app}</strong> for IPTV streaming. ${app} is one of the most popular IPTV applications available, offering a user-friendly interface, powerful features, and wide device compatibility. This guide will walk you through the installation process on ${device} and other devices.</p>

<h2>What is ${app}?</h2>
<p>${app} is a feature-rich IPTV player that allows you to stream live TV channels, movies, series, and video on demand content from your IPTV provider. It supports M3U playlists, Xtream Codes API, and has built-in EPG support for TV guides. The app is available on multiple platforms including Android, iOS, Windows, and Smart TV.</p>

<h2>Key Features of ${app}</h2>
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

<h2>How to Install ${app} on ${device}</h2>
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

<h2>How to Install ${app} on Other Devices</h2>
<p>${app} can also be installed on many other devices. Here are quick guides for popular platforms:</p>
<p><strong>Firestick:</strong> Enable Apps from Unknown Sources in Developer Options. Install Downloader from Amazon Store. Enter the ${app} download URL in Downloader. Install and enter your IPTV credentials.</p>
<p><strong>Android TV:</strong> Open Google Play Store, search ${app}, install, open, and enter provider details.</p>
<p><strong>Samsung/LG Smart TV:</strong> Some versions may need sideloading. Check if available in your TV's app store or use Smart IPTV app instead.</p>
<p><strong>iPhone/iPad:</strong> Available on App Store. Download, install, enter your provider URL and credentials.</p>
<p><strong>Windows PC:</strong> Download from official website or Microsoft Store. Install and configure with your IPTV subscription.</p>

<h2>${app} Configuration Tips</h2>
<p>After installation, configure ${app} for the best experience:</p>
<ul>
<li><strong>EPG Setup:</strong> Enter your EPG URL in Settings to get TV schedules</li>
<li><strong>Video Player:</strong> Choose between built-in player or external player (VLC, MX Player)</li>
<li><strong>Buffer Size:</strong> Increase buffer size if you experience buffering issues</li>
<li><strong>Auto-Update:</strong> Enable auto-update for playlists and EPG</li>
<li><strong>Parental Control:</strong> Set PIN code for restricted content</li>
<li><strong>Network:</strong> Use wired Ethernet connection for best stability</li>
</ul>

<h2>Solving Common ${app} Problems</h2>
<p>If you encounter issues with ${app}, try these solutions:</p>
<ul>
<li><strong>App not loading:</strong> Clear cache, restart device, reinstall app</li>
<li><strong>No channels showing:</strong> Verify your subscription is active, reload playlist</li>
<li><strong>Buffering:</strong> Reduce video quality, use VPN, check internet speed</li>
<li><strong>EPG not working:</strong> Check EPG URL, refresh EPG data, restart app</li>
<li><strong>Audio issues:</strong> Check audio track, adjust audio delay, change player</li>
</ul>

<h2>Frequently Asked Questions about ${app}</h2>
<div class="faq-item"><h3>Is ${app} free?</h3><p>${app} offers a free version with basic features. The premium version unlocks additional features including recording, multi-screen, and advanced settings.</p></div>
<div class="faq-item"><h3>Can I use ${app} on multiple devices?</h3><p>Yes, you can install ${app} on multiple devices. You will need your IPTV subscription credentials for each device.</p></div>
<div class="faq-item"><h3>Does ${app} support catch-up TV?</h3><p>If your IPTV provider offers catch-up TV, ${app} can display and play catch-up content through the EPG interface.</p></div>
<div class="faq-item"><h3>How do I update ${app}?</h3><p>Update through your device app store or download the latest version from the official website.</p></div>

<h2>Need Help with ${app}?</h2>
<p>Contact us on WhatsApp for personalized ${app} setup assistance, free IPTV trials, and the best subscription deals.</p>
<div class="cta-section" style="margin:30px 0;padding:30px;text-align:center;background:linear-gradient(135deg,#0d47a1,#1a1a3e);border-radius:12px">
<h3 style="color:white;margin-bottom:10px">💬 Get ${app} Setup Help</h3>
<p style="color:#ccc;margin-bottom:20px">Contact us on WhatsApp for instant support, free trial, and best IPTV deals</p>
<a href="https://wa.me/${WHATSAPP}?text=Hi%21%20I%20need%20help%20installing%20${encodeURIComponent(app)}" target="_blank" style="display:inline-block;padding:12px 30px;background:#25d366;color:white;border-radius:50px;text-decoration:none;font-weight:700">💬 Chat on WhatsApp</a>
</div>
<p><strong>Related Guides:</strong> <a href="/articles/${slugify(`Best IPTV Apps for ${device} 2026`)}-1.html">Best IPTV Apps for ${device}</a> | <a href="/articles/${slugify(`How to Set Up IPTV on ${device}`)}-1.html">Setup IPTV on ${device}</a></p>
`;
  } else if (title.includes('Set Up IPTV on')) {
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

<h2>Need Help Setting Up IPTV on ${device}?</h2>
<p>Contact us on WhatsApp for personalized assistance, free IPTV trials, and the best subscription deals available.</p>
<div class="cta-section" style="margin:30px 0;padding:30px;text-align:center;background:linear-gradient(135deg,#0d47a1,#1a1a3e);border-radius:12px">
<h3 style="color:white;margin-bottom:10px">💬 Need ${device} IPTV Help?</h3>
<p style="color:#ccc;margin-bottom:20px">Get instant help on WhatsApp. Free trial and setup assistance included.</p>
<a href="https://wa.me/${WHATSAPP}?text=Hi%21%20I%20need%20help%20setting%20up%20IPTV%20on%20my%20${encodeURIComponent(device)}" target="_blank" style="display:inline-block;padding:12px 30px;background:#25d366;color:white;border-radius:50px;text-decoration:none;font-weight:700">💬 Chat on WhatsApp</a>
</div>
<p><strong>Related Guides:</strong> <a href="/articles/${slugify(`How to Install ${app} on Any Device`)}-1.html">How to Install ${app}</a> | <a href="/articles/${slugify(`Best IPTV Apps for ${device} 2026`)}-1.html">Best Apps for ${device}</a></p>
`;
  } else if (title.includes('Best IPTV Service Provider')) {
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

<h2>Get the Best IPTV Service for ${country.name}</h2>
<p>Contact us on WhatsApp to get a free trial and the best subscription deals for ${country.name} channels.</p>
<div class="cta-section" style="margin:30px 0;padding:30px;text-align:center;background:linear-gradient(135deg,#0d47a1,#1a1a3e);border-radius:12px">
<h3 style="color:white;margin-bottom:10px">🇲🇦 Best IPTV for ${country.name}</h3>
<p style="color:#ccc;margin-bottom:20px">Free trial available. Contact us on WhatsApp now!</p>
<a href="https://wa.me/${WHATSAPP}?text=Hi%21%20I%20want%20the%20best%20IPTV%20for%20${encodeURIComponent(country.name)}" target="_blank" style="display:inline-block;padding:12px 30px;background:#25d366;color:white;border-radius:50px;text-decoration:none;font-weight:700">💬 Chat on WhatsApp</a>
</div>
<p><strong>Related:</strong> <a href="/articles/${slugify(`How to Set Up IPTV on ${device}`)}-1.html">IPTV Setup Guide</a> | <a href="/articles/${slugify(`Best IPTV Apps for Smart TV 2026`)}-1.html">Best IPTV Apps</a></p>
`;
  } else if (FAQ_QUESTIONS.some(f => title.startsWith(f.q.substring(0, 20)))) {
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
<li><a href="/articles/${slugify('What is IPTV and how does it work')}-1.html">What is IPTV? Complete Guide</a></li>
<li><a href="/articles/${slugify('Best IPTV Services 2026')}-1.html">Best IPTV Services 2026</a></li>
<li><a href="/articles/${slugify('How to Set Up IPTV on Firestick')}-1.html">IPTV on Firestick Setup</a></li>
<li><a href="/articles/${slugify(`How to Install ${app} on Any Device`)}-1.html">Install ${app}</a></li>
</ul>

<h2>Need More Help?</h2>
<p>Contact our team on WhatsApp for personalized assistance with your IPTV questions.</p>
<div class="cta-section" style="margin:30px 0;padding:30px;text-align:center;background:linear-gradient(135deg,#0d47a1,#1a1a3e);border-radius:12px">
<h3 style="color:white;margin-bottom:10px">💬 Have IPTV Questions?</h3>
<p style="color:#ccc;margin-bottom:20px">We answer all your IPTV questions on WhatsApp. Free consultation!</p>
<a href="https://wa.me/${WHATSAPP}?text=Hi%21%20I%20have%20a%20question%20about%20${encodeURIComponent(faqItem.q.substring(0, 50))}" target="_blank" style="display:inline-block;padding:12px 30px;background:#25d366;color:white;border-radius:50px;text-decoration:none;font-weight:700">💬 Ask on WhatsApp</a>
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
<p>To get started with IPTV, you need: a stable internet connection (25+ Mbps for HD), a compatible device, an IPTV app, and a subscription from a reliable provider. Follow our <a href="/articles/${slugify(`How to Set Up IPTV on ${device}`)}-1.html">${device} setup guide</a> for detailed instructions.</p>

<h2>Best Apps to Use</h2>
<p>We recommend using <a href="/articles/${slugify(`How to Install ${app} on Any Device`)}-1.html">${app}</a> for the best streaming experience. It offers excellent features, regular updates, and great support for all devices.</p>

<h2>International Channels</h2>
<p>One of the biggest advantages of IPTV is access to international channels. Whether you are looking for <a href="/articles/${slugify(`Best IPTV Service Provider in ${country.name}`)}-1.html">${country.name} channels</a> or content from any other country, IPTV has you covered with thousands of channels worldwide.</p>

<div class="faq-item"><h3>Common Questions</h3><p>For answers to common IPTV questions, check our <a href="/articles/${slugify(faqItem.q.substring(0, 30))}-1.html">FAQ section</a> covering ${faqItem.q.toLowerCase()}.</p></div>

<h2>Get Started Today</h2>
<p>Contact us on WhatsApp for free trials, the best subscription deals, and personalized setup assistance.</p>
<div class="cta-section" style="margin:30px 0;padding:30px;text-align:center;background:linear-gradient(135deg,#0d47a1,#1a1a3e);border-radius:12px">
<h3 style="color:white;margin-bottom:10px">💬 Start Your IPTV Journey</h3>
<p style="color:#ccc;margin-bottom:20px">Free trial + setup help on WhatsApp. Join thousands of satisfied customers.</p>
<a href="https://wa.me/${WHATSAPP}?text=Hi%21%20I%20want%20to%20start%20with%20IPTV" target="_blank" style="display:inline-block;padding:12px 30px;background:#25d366;color:white;border-radius:50px;text-decoration:none;font-weight:700">💬 Chat on WhatsApp</a>
</div>
`;
  }

  const schemaArticle = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": excerpt.substring(0, 160),
    "author": { "@type": "Organization", "name": SITE_NAME, "url": SITE_URL },
    "datePublished": date,
    "publisher": { "@type": "Organization", "name": SITE_NAME, "url": SITE_URL, "logo": { "@type": "ImageObject", "url": SITE_URL + "/assets/img/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": SITE_URL + "/articles/" + slug + ".html" }
  });

  const schemaBreadcrumb = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": SITE_URL + "/" },
      { "@type": "ListItem", "position": 2, "name": "Articles", "item": SITE_URL + "/articles/" },
      { "@type": "ListItem", "position": 3, "name": category.name, "item": SITE_URL + "/categories/" + category.slug + ".html" },
      { "@type": "ListItem", "position": 4, "name": title, "item": SITE_URL + "/articles/" + slug + ".html" }
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
    "url": SITE_URL,
    "potentialAction": {
      "@type": "SearchAction",
      "target": SITE_URL + "/?q={search_term_string}",
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

  const html = `<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${title} - ${SITE_NAME}</title>
<meta name="description" content="${excerpt.substring(0, 160)}">
<meta name="keywords" content="${keywordStr}">
<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">
<meta name="googlebot" content="index, follow, max-snippet:-1, max-image-preview:large">
<meta name="bingbot" content="index, follow, max-snippet:-1, max-image-preview:large">
<link rel="canonical" href="${SITE_URL}/articles/${slug}.html">
<meta property="og:locale" content="en_US">
<meta property="og:type" content="article">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${excerpt.substring(0, 160)}">
<meta property="og:url" content="${SITE_URL}/articles/${slug}.html">
<meta property="og:site_name" content="${SITE_NAME}">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${excerpt.substring(0, 160)}">
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta http-equiv="X-Frame-Options" content="DENY">
<meta http-equiv="Referrer-Policy" content="strict-origin-when-cross-origin">
<meta name="format-detection" content="telephone=no">
<link rel="alternate" type="application/rss+xml" title="${SITE_NAME} RSS Feed" href="${SITE_URL}/rss.xml">
<script type="application/ld+json">${schemaArticle}</script>
<script type="application/ld+json">${schemaBreadcrumb}</script>
<script type="application/ld+json">${schemaFAQ}</script>
<script type="application/ld+json">${schemaWebSite}</script>
<script type="application/ld+json">${schemaOrg}</script>
<style>body{font-family:system-ui,-apple-system,Segoe UI,Roboto,Helvetica,Arial,sans-serif;background:#0f0f23;color:#e0e0e0;line-height:1.7;margin:0;padding:0}.container{max-width:1200px;margin:0 auto;padding:0 20px}.header{background:linear-gradient(135deg,#0f0f23,#16213e);padding:15px 0;position:sticky;top:0;z-index:1000;border-bottom:1px solid rgba(255,255,255,0.05)}.header .container{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:15px}.logo{font-size:28px;font-weight:800;color:#fff;text-decoration:none;display:flex;align-items:center;gap:10px}.logo span{color:#00c853}.nav{display:flex;gap:25px;flex-wrap:wrap}.nav a{color:#ccc;text-decoration:none;font-size:14px;font-weight:500;transition:color .3s;text-transform:uppercase;letter-spacing:1px}.nav a:hover,.nav a.active{color:#00c853}.lang-switch{display:flex;gap:5px;flex-wrap:wrap}.lang-switch a{padding:4px 10px;border-radius:4px;font-size:12px;font-weight:600;text-decoration:none;color:#aaa;border:1px solid #333;transition:all .3s}.lang-switch a.active,.lang-switch a:hover{color:#fff;border-color:#00c853;background:rgba(0,200,83,0.1)}.breadcrumb{padding:15px 0;font-size:13px;color:#888}.breadcrumb a{color:#00c853;text-decoration:none}.content-area{min-height:400px;padding:40px 0}.two-col{display:grid;grid-template-columns:1fr 300px;gap:30px}.article-content{background:linear-gradient(135deg,#1e1e3a,#16213e);border-radius:12px;padding:40px;border:1px solid rgba(255,255,255,0.05)}.article-content h1{font-size:32px;color:#fff;margin-bottom:20px}.article-content h2{font-size:24px;color:#fff;margin:30px 0 15px}.article-content h3{font-size:20px;color:#fff;margin:25px 0 12px}.article-content p{color:#bbb;margin-bottom:15px;font-size:16px;line-height:1.8}.article-content ul,.article-content li{color:#bbb;margin-bottom:8px}.article-content a{color:#00c853}.article-content blockquote{border-left:4px solid #00c853;padding:15px 20px;margin:20px 0;background:rgba(0,200,83,0.05);border-radius:0 8px 8px 0;color:#ccc;font-style:italic}.article-content table{width:100%;border-collapse:collapse;margin:20px 0;font-size:14px}.article-content td,.article-content th{padding:12px;text-align:left;border-bottom:1px solid rgba(255,255,255,0.1)}.article-content th{background:rgba(0,200,83,0.1);color:#00c853;font-weight:600}.sidebar{background:linear-gradient(135deg,#1e1e3a,#16213e);border-radius:12px;padding:25px;margin-bottom:25px;border:1px solid rgba(255,255,255,0.05)}.sidebar h3{color:#fff;font-size:18px;margin-bottom:15px;padding-bottom:10px;border-bottom:2px solid #00c853}.sidebar ul{list-style:none}.sidebar ul li{padding:8px 0;border-bottom:1px solid rgba(255,255,255,0.05)}.sidebar ul li a{color:#aaa;text-decoration:none;font-size:14px;transition:color .3s}.sidebar ul li a:hover{color:#00c853}.tag-cloud-sidebar{display:flex;flex-wrap:wrap;gap:6px}.tag-cloud-sidebar a{padding:4px 10px;background:rgba(255,255,255,0.05);border-radius:15px;color:#888;text-decoration:none;font-size:11px;transition:all .3s}.tag-cloud-sidebar a:hover{background:#00c853;color:#0f0f23}.faq-item{border-bottom:1px solid rgba(255,255,255,0.05);padding:15px 0}.faq-item h3{font-size:16px;color:#fff;cursor:pointer;display:flex;justify-content:space-between;align-items:center}.faq-item h3:after{content:'+';font-size:20px;color:#00c853}.faq-item.active h3:after{content:'-'}.faq-item p{color:#999;font-size:14px;margin-top:10px;display:none}.faq-item.active p{display:block}.card-meta{display:flex;justify-content:space-between;align-items:center;font-size:12px;color:#666;border-top:1px solid rgba(255,255,255,0.05);padding-top:12px}.card-meta a{color:#00c853;text-decoration:none}.newsletter-form{display:flex;gap:8px}.newsletter-form input{flex:1;padding:10px 15px;border:1px solid rgba(255,255,255,0.1);border-radius:8px;background:rgba(255,255,255,0.05);color:#fff;outline:0;font-size:13px}.newsletter-form input:focus{border-color:#00c853}.newsletter-form button{padding:10px 20px;background:#00c853;color:#0f0f23;border:none;border-radius:8px;font-weight:700;cursor:pointer;font-size:13px}.whatsapp-float{position:fixed;bottom:20px;right:20px;z-index:999;display:flex;flex-direction:column;align-items:center;gap:8px}.whatsapp-float a{display:flex;align-items:center;justify-content:center;width:60px;height:60px;background:#25d366;border-radius:50%;color:#fff;font-size:30px;text-decoration:none;box-shadow:0 4px 20px rgba(37,211,102,0.4);transition:all .3s;animation:pulse 2s infinite}@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(37,211,102,0.4)}70%{box-shadow:0 0 0 15px rgba(37,211,102,0)}to{box-shadow:0 0 0 0 rgba(37,211,102,0)}}.whatsapp-float a:hover{transform:scale(1.1)}.whatsapp-popup{position:fixed;bottom:90px;right:20px;width:320px;background:#fff;border-radius:12px;box-shadow:0 10px 50px rgba(0,0,0,0.5);z-index:998;display:none;overflow:hidden}.whatsapp-popup.show{display:block;animation:slideUp .3s ease}.whatsapp-popup-header{background:#075e54;color:#fff;padding:15px;display:flex;align-items:center;gap:10px}.whatsapp-popup-header h4{font-size:14px}.whatsapp-popup-header p{font-size:11px;opacity:.8}.whatsapp-popup-body{padding:20px;background:#e5ddd5;min-height:100px}.whatsapp-popup-body .msg{background:#fff;padding:10px 15px;border-radius:8px;font-size:13px;color:#333;margin-bottom:10px;max-width:80%}.whatsapp-popup-body .msg.reply{background:#dcf8c6;margin-left:auto}.whatsapp-popup-footer{display:flex;padding:10px;background:#f0f0f0;gap:8px}.whatsapp-popup-footer input{flex:1;padding:10px;border:1px solid #ddd;border-radius:20px;outline:0;font-size:13px}.whatsapp-popup-footer button{background:#075e54;color:#fff;border:none;padding:10px 18px;border-radius:20px;cursor:pointer;font-weight:600;font-size:13px}.footer{background:#0f0f23;padding:50px 0 20px;border-top:1px solid rgba(255,255,255,0.05)}.footer-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:30px;margin-bottom:30px}.footer h4{color:#fff;font-size:16px;margin-bottom:15px}.footer p,.footer a{color:#888;font-size:13px;line-height:2;text-decoration:none;display:block}.footer a:hover{color:#00c853}.footer-bottom{text-align:center;padding-top:20px;border-top:1px solid rgba(255,255,255,0.05);color:#666;font-size:13px}.disclaimer-notice{background:rgba(255,193,7,0.1);border:1px solid rgba(255,193,7,0.3);border-radius:8px;padding:15px;margin:30px 0;font-size:13px;color:#ffc107}.disclaimer-notice a{color:#00c853}.cookie-consent{position:fixed;bottom:0;left:0;right:0;background:#0f0f23;padding:15px 20px;z-index:9999;display:none;border-top:1px solid rgba(255,255,255,0.1)}.cookie-consent.show{display:block}.cookie-consent .container{display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap}.cookie-consent p{color:#aaa;font-size:13px}.btn-cookie{padding:8px 20px;background:#00c853;color:#0f0f23;border:none;border-radius:6px;font-weight:600;cursor:pointer;font-size:13px}.back-to-top{position:fixed;bottom:90px;right:20px;width:45px;height:45px;background:#1a73e8;color:#fff;border:none;border-radius:50%;cursor:pointer;display:none;align-items:center;justify-content:center;font-size:20px;z-index:99;transition:all .3s;box-shadow:0 4px 15px rgba(26,115,232,0.3)}.back-to-top.show{display:flex}.disclaimer-box{background:rgba(255,193,7,0.08);border:1px solid rgba(255,193,7,0.2);border-radius:8px;padding:15px;margin:30px 0;font-size:13px;color:#ffc107;line-height:1.6}.disclaimer-box a{color:#00c853}.card-meta{margin-bottom:20px}@media(max-width:768px){.two-col{grid-template-columns:1fr}.article-content{padding:20px}.header .container{flex-direction:column;gap:10px}.nav{gap:10px;justify-content:center}.nav a{font-size:12px}.lang-switch{justify-content:center}}</style>
</head>
<body>
<header class="header">
<div class="container">
<a href="/" class="logo">📺 <span>IPTV</span> Pro Guide</a>
<nav class="nav">
<a href="/">Home</a>
<a href="/articles/">Articles</a>
<a href="/categories/">Categories</a>
<a href="/about.html">About</a>
<a href="/contact.html">Contact</a>
</nav>
<div class="lang-switch">
<a href="#" data-lang="en" onclick="changeLang('en')" class="active">🇬🇧 EN</a>
<a href="#" data-lang="fr" onclick="changeLang('fr')">🇫🇷 FR</a>
<a href="#" data-lang="es" onclick="changeLang('es')">🇪🇸 ES</a>
<a href="#" data-lang="ar" onclick="changeLang('ar')">🇸🇦 AR</a>
<a href="#" data-lang="de" onclick="changeLang('de')">🇩🇪 DE</a>
<a href="#" data-lang="pt" onclick="changeLang('pt')">🇧🇷 PT</a>
<a href="#" data-lang="it" onclick="changeLang('it')">🇮🇹 IT</a>
<a href="#" data-lang="tr" onclick="changeLang('tr')">🇹🇷 TR</a>
<a href="#" data-lang="ru" onclick="changeLang('ru')">🇷🇺 RU</a>
<a href="#" data-lang="nl" onclick="changeLang('nl')">🇳🇱 NL</a>
</div>
</div>
</header>

<section class="breadcrumb">
<div class="container">
<a href="/">Home</a> <span>›</span> <a href="/articles/">Articles</a> <span>›</span> <a href="/categories/${category.slug}.html">${category.name}</a> <span>›</span> ${title}
</div>
</section>

<section class="content-area">
<div class="container">
<div class="two-col">
<div class="article-content">
<h1>${title}</h1>
<div class="card-meta" style="margin-bottom:20px">
<span>📅 ${date}</span>
<span>📂 <a href="/categories/${category.slug}.html">${category.name}</a></span>
<span>👁️ ${Math.floor(Math.random() * 2000) + 200} views</span>
</div>
${content}

<div class="disclaimer-box">
<strong>⚠️ Disclaimer:</strong> We do not host or stream any copyrighted content. All content is provided by third-party providers. Users are responsible for ensuring they have the rights to view content in their jurisdiction. This website is for educational and informational purposes only. <a href="/dmca.html">DMCA Notice</a> | <a href="/disclaimer.html">Full Disclaimer</a>
</div>
</div>
<aside>
<div class="sidebar">
<h3>📂 Category</h3>
<ul>
<li><a href="/categories/${category.slug}.html">${category.icon} ${category.name}</a></li>
</ul>
</div>
<div class="sidebar">
<h3>🌍 Country Guide</h3>
<ul>
<li><a href="/articles/${slugify(`Best IPTV Service Provider in ${country.name}`)}-1.html">🇲🇦 IPTV in ${country.name}</a></li>
</ul>
</div>
<div class="sidebar">
<h3>📱 Recommended App</h3>
<ul>
<li><a href="/articles/${slugify(`How to Install ${app} on Any Device`)}-1.html">📥 Install ${app}</a></li>
</ul>
</div>
<div class="sidebar">
<h3>🖥️ Device Setup</h3>
<ul>
<li><a href="/articles/${slugify(`How to Set Up IPTV on ${device}`)}-1.html">🔧 Setup ${device}</a></li>
</ul>
</div>
<div class="sidebar">
<h3>🏷️ Tags</h3>
<div class="tag-cloud-sidebar">
${keywordStr.split(', ').slice(0, 20).map(k => `<a href="/search.html?q=${encodeURIComponent(k)}">${k}</a>`).join('')}
</div>
</div>
<div class="sidebar">
<h3>💬 Need Help?</h3>
<p style="color:#888;font-size:13px;margin-bottom:12px">Contact us on WhatsApp for instant support and the best IPTV deals.</p>
<a href="https://wa.me/${WHATSAPP}?text=Hi%21%20I%20need%20help%20with%20${encodeURIComponent(title.substring(0, 60))}" target="_blank" style="display:block;padding:12px;background:#25d366;color:white;border-radius:8px;text-decoration:none;font-weight:600;text-align:center">💬 WhatsApp Support</a>
</div>
<div class="sidebar">
<h3>📧 Newsletter</h3>
<p style="color:#888;font-size:13px;margin-bottom:12px">Get the latest IPTV guides and tips</p>
<form class="newsletter-form">
<input type="email" placeholder="Your email" required>
<button type="submit">Subscribe</button>
</form>
</div>
</aside>
</div>
</div>
</section>

<footer class="footer">
<div class="container">
<div class="footer-grid">
<div><h4>${SITE_NAME}</h4><p>Your trusted source for IPTV guides, tutorials, and reviews. Educational content only.</p></div>
<div><h4>Quick Links</h4><a href="/">Home</a><a href="/articles/">Articles</a><a href="/categories/">Categories</a><a href="/about.html">About</a><a href="/contact.html">Contact</a></div>
<div><h4>Legal</h4><a href="/privacy-policy.html">Privacy Policy</a><a href="/terms.html">Terms of Service</a><a href="/dmca.html">DMCA Notice</a><a href="/disclaimer.html">Disclaimer</a></div>
<div><h4>Follow Us</h4><a href="https://wa.me/${WHATSAPP}" target="_blank">💬 WhatsApp</a></div>
</div>
<div class="footer-bottom"><p>© 2026 ${SITE_NAME}. All rights reserved. We do not host or stream any copyrighted content.</p></div>
</div>
</footer>

<div class="whatsapp-float">
<div class="tooltip">💬 Chat with us!</div>
<a href="#" id="whatsappBtn"><svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.165-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.93 9.93 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.889 0-3.633-.656-5.008-1.756l-3.4 1.06 1.06-3.4A7.94 7.94 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/></svg></a>
</div>

<div class="whatsapp-popup" id="whatsappPopup">
<div class="whatsapp-popup-header">
<img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%2325d366'/><text x='50' y='65' text-anchor='middle' font-size='40' fill='white'>📺</text></svg>" alt="Support">
<div><h4>IPTV Pro Support</h4><p>Typically replies within 5 minutes</p></div>
</div>
<div class="whatsapp-popup-body">
<div class="msg">👋 Hello! Welcome to IPTV Pro Guide. How can we help you today?</div>
<div class="msg reply">Hi! I'm interested in IPTV services. Can you tell me more?</div>
</div>
<div class="whatsapp-popup-footer">
<input type="text" id="whatsappInput" placeholder="Type a message..." value="Hi! I am interested in your IPTV services.">
<button id="whatsappSend">Send</button>
</div>
</div>

<div class="cookie-consent" id="cookieConsent">
<div class="container">
<p>We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.</p>
<button class="btn-cookie" onclick="localStorage.setItem('cookieConsent','true');this.parentElement.parentElement.style.display='none'">Accept</button>
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

async function generateAll() {
  const articlesDir = path.join(__dirname, 'articles');
  if (!fs.existsSync(articlesDir)) fs.mkdirSync(articlesDir, { recursive: true });

  const totalArticles = 25000;
  const articles = [];

  console.log(`Generating ${totalArticles} articles...`);

  for (let i = 0; i < totalArticles; i++) {
    const article = generateArticle(i);
    articles.push({
      slug: article.slug,
      title: article.title,
      excerpt: article.excerpt,
      date: article.date,
      category: article.category,
      categorySlug: article.categorySlug,
      tags: article.tags
    });

    fs.writeFileSync(path.join(articlesDir, `${article.slug}.html`), article.html);

    if ((i + 1) % 1000 === 0) {
      console.log(`Generated ${i + 1}/${totalArticles} articles`);
    }
  }

  fs.writeFileSync(path.join(articlesDir, 'articles.json'), JSON.stringify(articles));
  console.log(`\nDone! Generated ${articles.length} unique articles.`);

  generateSitemap(articles);
  generateRSS(articles);
  generateRobotsTxt();
  generateCategoryPages(articles);
  console.log('All done!');
}

function generateSitemap(articles) {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url><loc>${SITE_URL}/</loc><changefreq>daily</changefreq><priority>1.0</priority></url>
  <url><loc>${SITE_URL}/about.html</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>
  <url><loc>${SITE_URL}/contact.html</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>
  <url><loc>${SITE_URL}/privacy-policy.html</loc><changefreq>monthly</changefreq><priority>0.3</priority></url>
  <url><loc>${SITE_URL}/terms.html</loc><changefreq>monthly</changefreq><priority>0.3</priority></url>
  <url><loc>${SITE_URL}/dmca.html</loc><changefreq>monthly</changefreq><priority>0.3</priority></url>
  <url><loc>${SITE_URL}/disclaimer.html</loc><changefreq>monthly</changefreq><priority>0.3</priority></url>
  <url><loc>${SITE_URL}/articles/</loc><changefreq>daily</changefreq><priority>0.9</priority></url>
  <url><loc>${SITE_URL}/categories/</loc><changefreq>weekly</changefreq><priority>0.7</priority></url>`;

  CATEGORIES.forEach(cat => {
    xml += `\n  <url><loc>${SITE_URL}/categories/${cat.slug}.html</loc><changefreq>weekly</changefreq><priority>0.6</priority></url>`;
  });

  articles.forEach(a => {
    xml += `\n  <url><loc>${SITE_URL}/articles/${a.slug}.html</loc><lastmod>${a.date}</lastmod><changefreq>monthly</changefreq><priority>0.8</priority></url>`;
  });

  xml += '\n</urlset>';
  fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), xml);
  console.log('Sitemap generated');
}

function generateRSS(articles) {
  const latest = articles.slice(0, 200);
  let rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${SITE_NAME}</title>
<link>${SITE_URL}/</link>
<description>${SITE_DESC}</description>
<language>en</language>
<lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
<atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml"/>`;

  latest.forEach(a => {
    rss += `\n<item><title>${a.title}</title><link>${SITE_URL}/articles/${a.slug}.html</link><description>${a.excerpt.substring(0, 200)}</description><pubDate>${new Date(a.date).toUTCString()}</pubDate><guid>${SITE_URL}/articles/${a.slug}.html</guid><category>${a.category}</category></item>`;
  });

  rss += '\n</channel>\n</rss>';
  fs.writeFileSync(path.join(__dirname, 'rss.xml'), rss);
  console.log('RSS feed generated');
}

function generateRobotsTxt() {
  fs.writeFileSync(path.join(__dirname, 'robots.txt'), `# ${SITE_NAME} - Robots.txt
User-agent: *
Allow: /
Allow: /articles/
Allow: /categories/
Allow: /about.html
Allow: /contact.html
Allow: /privacy-policy.html
Allow: /terms.html
Allow: /dmca.html
Allow: /disclaimer.html
Disallow: /assets/
Disallow: /articles/articles.json
Disallow: /*?q=
Disallow: /search
Disallow: /search.html

Sitemap: ${SITE_URL}/sitemap.xml
Crawl-delay: 1

User-agent: Googlebot
Allow: /
Disallow: /assets/
Disallow: /*?q=
Disallow: /search

User-agent: Googlebot-Image
Allow: /

User-agent: Googlebot-Video
Allow: /

User-agent: Bingbot
Allow: /
Disallow: /assets/
Disallow: /*?q=
Disallow: /search

User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: Claude-Web
Disallow: /

User-agent: ImagesiftBot
Disallow: /
`);
  console.log('Robots.txt generated');
}

function generateCategoryPages(articles) {
  const catsDir = path.join(__dirname, 'categories');
  if (!fs.existsSync(catsDir)) fs.mkdirSync(catsDir, { recursive: true });

  CATEGORIES.forEach(cat => {
    const catArticles = articles.filter(a => a.categorySlug === cat.slug).slice(0, 100);
    const rows = catArticles.map(a => `
    <div class="article-row">
      <div class="thumb">${cat.icon}</div>
      <div class="info">
        <span class="card-category">${cat.name}</span>
        <h3><a href="/articles/${a.slug}.html">${a.title}</a></h3>
        <p>${a.excerpt.substring(0, 150)}</p>
        <div class="meta">📅 ${a.date}</div>
      </div>
    </div>`).join('');

    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>${cat.name} - ${SITE_NAME}</title>
<meta name="description" content="${catArticles.length} articles about ${cat.name.toLowerCase()}">
<meta name="robots" content="index, follow">
<link rel="canonical" href="${SITE_URL}/categories/${cat.slug}.html">
<meta http-equiv="X-Content-Type-Options" content="nosniff">
<meta http-equiv="X-Frame-Options" content="DENY">
<style>body{font-family:system-ui,-apple-system,sans-serif;background:#0f0f23;color:#e0e0e0;line-height:1.7;margin:0;padding:0}.container{max-width:1200px;margin:0 auto;padding:0 20px}.header{background:linear-gradient(135deg,#0f0f23,#16213e);padding:15px 0;position:sticky;top:0;z-index:1000;border-bottom:1px solid rgba(255,255,255,0.05)}.header .container{display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:15px}.logo{font-size:28px;font-weight:800;color:#fff;text-decoration:none;display:flex;align-items:center;gap:10px}.logo span{color:#00c853}.nav{display:flex;gap:25px;flex-wrap:wrap}.nav a{color:#ccc;text-decoration:none;font-size:14px;font-weight:500;transition:color .3s;text-transform:uppercase;letter-spacing:1px}.nav a:hover{color:#00c853}.page-header{background:linear-gradient(135deg,#0f0f23,#16213e);padding:50px 0;text-align:center;border-bottom:1px solid rgba(255,255,255,0.05)}.page-header h1{font-size:36px;color:#fff;margin-bottom:10px}.page-header p{color:#888;font-size:16px}.content-area{min-height:400px;padding:40px 0}.article-list{display:flex;flex-direction:column;gap:20px}.article-row{display:flex;gap:20px;background:linear-gradient(135deg,#1e1e3a,#16213e);border-radius:12px;padding:20px;border:1px solid rgba(255,255,255,0.05);transition:all .3s}.article-row:hover{transform:translateY(-2px);border-color:rgba(0,200,83,0.2)}.thumb{font-size:40px;display:flex;align-items:center;justify-content:center;min-width:60px}.info h3{margin:0 0 8px;font-size:16px}.info h3 a{color:#fff;text-decoration:none}.info h3 a:hover{color:#00c853}.info p{color:#999;font-size:13px;margin:0 0 8px}.info .meta{color:#666;font-size:12px}.card-category{display:inline-block;padding:2px 10px;background:rgba(0,200,83,0.15);color:#00c853;border-radius:20px;font-size:11px;font-weight:600;margin-bottom:8px}.footer{background:#0f0f23;padding:50px 0 20px;border-top:1px solid rgba(255,255,255,0.05)}.footer-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:30px;margin-bottom:30px}.footer h4{color:#fff;font-size:16px;margin-bottom:15px}.footer p,.footer a{color:#888;font-size:13px;line-height:2;text-decoration:none;display:block}.footer a:hover{color:#00c853}.footer-bottom{text-align:center;padding-top:20px;border-top:1px solid rgba(255,255,255,0.05);color:#666;font-size:13px}.whatsapp-float{position:fixed;bottom:20px;right:20px;z-index:999}.whatsapp-float a{display:flex;align-items:center;justify-content:center;width:60px;height:60px;background:#25d366;border-radius:50%;color:#fff;text-decoration:none;box-shadow:0 4px 20px rgba(37,211,102,0.4);transition:all .3s;animation:pulse 2s infinite}@keyframes pulse{0%{box-shadow:0 0 0 0 rgba(37,211,102,0.4)}70%{box-shadow:0 0 0 15px rgba(37,211,102,0)}to{box-shadow:0 0 0 0 rgba(37,211,102,0)}}@media(max-width:768px){.header .container{flex-direction:column;gap:10px}.nav{gap:10px;justify-content:center}.nav a{font-size:12px}}</style>
</head>
<body>
<header class="header"><div class="container">
<a href="/" class="logo">📺 <span>IPTV</span> Pro Guide</a>
<nav class="nav"><a href="/">Home</a><a href="/articles/">Articles</a><a href="/categories/">Categories</a><a href="/about.html">About</a><a href="/contact.html">Contact</a></nav>
</div></header>
<section class="page-header"><div class="container"><h1>${cat.icon} ${cat.name}</h1><p>${catArticles.length} articles</p></div></section>
<section class="content-area"><div class="container">
<div class="article-list">${rows || '<p style="color:#888;padding:20px">Articles coming soon...</p>'}</div>
</div></section>
<footer class="footer"><div class="container">
<div class="footer-grid">
<div><h4>${SITE_NAME}</h4><p>Your trusted source for IPTV guides.</p></div>
<div><h4>Quick Links</h4><a href="/">Home</a><a href="/articles/">Articles</a><a href="/categories/">Categories</a></div>
<div><h4>Legal</h4><a href="/privacy-policy.html">Privacy Policy</a><a href="/terms.html">Terms</a><a href="/dmca.html">DMCA</a><a href="/disclaimer.html">Disclaimer</a></div>
</div>
<div class="footer-bottom"><p>© 2026 ${SITE_NAME}. All rights reserved.</p></div>
</div></footer>
<div class="whatsapp-float"><a href="https://wa.me/${WHATSAPP}?text=Hi%21%20I%20need%20help%20with%20IPTV" target="_blank"><svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.165-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.93 9.93 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.889 0-3.633-.656-5.008-1.756l-3.4 1.06 1.06-3.4A7.94 7.94 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/></svg></a></div>
<script defer src="/assets/js/main.js"></script>
</body>
</html>`;

    fs.writeFileSync(path.join(catsDir, `${cat.slug}.html`), html);
  });
  console.log(`Generated ${CATEGORIES.length} category pages`);
}

generateAll().catch(console.error);