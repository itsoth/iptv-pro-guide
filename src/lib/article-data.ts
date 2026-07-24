import { LANGUAGES, CATEGORIES, COUNTRIES, APPS_PLAYERS, DEVICES, FAQ_QUESTIONS, ALL_TITLES, TOTAL_ARTICLES, slugify, randomDate, pickRandom, WHATSAPP, SITE_URL, SITE_NAME } from './constants'
import { t } from './translations'

let CONTENT_TRANSLATIONS: Record<string, any> = {}
try {
  const mod = require('../../content-translations')
  CONTENT_TRANSLATIONS = mod.CONTENT_TRANSLATIONS || {}
} catch {}

function getArticleBody(langCode: string, type: string, vars: Record<string, any>): string | null {
  const translations = CONTENT_TRANSLATIONS[langCode]
  if (translations && translations[type]) {
    return translations[type](Object.assign({ slugify, langCode }, vars))
  }
  return null
}

export function generateArticle(index: number, langCode: string) {
  const lang = LANGUAGES.find(l => l.code === langCode) || LANGUAGES[0]
  const enTitle = ALL_TITLES[index % ALL_TITLES.length]
  const baseSlug = slugify(enTitle)
  const slug = `${baseSlug}-${Math.floor(index / ALL_TITLES.length) + 1}`
  const date = randomDate(new Date('2024-01-01'), new Date('2026-12-31'))

  let category = CATEGORIES[index % CATEGORIES.length]
  let country = COUNTRIES[index % COUNTRIES.length]
  let app = APPS_PLAYERS[index % APPS_PLAYERS.length]
  let device = DEVICES[index % DEVICES.length]
  let faqItem = FAQ_QUESTIONS[index % FAQ_QUESTIONS.length]

  const translations = CONTENT_TRANSLATIONS[langCode]
  let title = enTitle
  if (translations && translations.translateTitle) {
    const translated = translations.translateTitle(enTitle, { app, device, country, faqItem })
    if (translated) title = translated
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
  ]

  const keywordStr = [...new Set(keywords)].sort(() => Math.random() - 0.5).slice(0, 40).join(', ')

  let excerpt: string, content: string

  const getExcerpt = (type: string) => {
    const tr = CONTENT_TRANSLATIONS[langCode]
    if (tr && tr.translateExcerpt) {
      const ex = tr.translateExcerpt(type, { app, device, country, faqItem })
      if (ex && ex[type]) return ex[type]
    }
    return null
  }

  const getWhatsApp = (type: string) => {
    const tr = CONTENT_TRANSLATIONS[langCode]
    if (tr && tr.translateWhatsApp) {
      const msgs = tr.translateWhatsApp(type, { app, device, country, faqItem })
      if (msgs && msgs[type]) return msgs[type]
    }
    return null
  }

  const wa = (type: string) => {
    const msg = getWhatsApp(type)
    if (msg) return `https://wa.me/${WHATSAPP}?text=${msg}`
    return null
  }

  if (enTitle.includes('How to Install') && APPS_PLAYERS.some(a => enTitle.includes(a.substring(0, 10)))) {
    const translatedBody = getArticleBody(langCode, 'appInstall', { app, device })
    if (translatedBody) {
      excerpt = getExcerpt('appInstall') || `Guide étape par étape pour installer ${app} sur n'importe quel appareil. Tutoriel complet de configuration ${app} avec captures d'écran et conseils de dépannage pour ${device}.`
      content = translatedBody + `
<h2>${t(langCode, 'article_get_help', { APP: app })}</h2>
<p>${t(langCode, 'article_need_help_desc')}</p>
<div class="cta-section" style="margin:30px 0;padding:30px;text-align:center;background:linear-gradient(135deg,#0d47a1,#1a1a3e);border-radius:12px">
<h3 style="color:white;margin-bottom:10px">💬 ${t(langCode, 'article_cta_heading')}</h3>
<p style="color:#ccc;margin-bottom:20px">${t(langCode, 'article_cta_desc')}</p>
<a href="${wa('appInstall') || `https://wa.me/${WHATSAPP}?text=Bonjour%21%20J%27ai%20besoin%20d%27aide%20pour%20installer%20${encodeURIComponent(app)}`}" target="_blank" style="display:inline-block;padding:12px 30px;background:#25d366;color:white;border-radius:50px;text-decoration:none;font-weight:700">💬 ${t(langCode, 'article_cta_btn')}</a>
</div>
<p><strong>${t(langCode, 'article_related')}</strong> <a href="/${langCode}/${slugify(`Best IPTV Apps for ${device} 2026`)}-1">Best IPTV Apps for ${device}</a> | <a href="/${langCode}/${slugify(`How to Set Up IPTV on ${device}`)}-1">Set Up IPTV on ${device}</a></p>
`
    } else {
      excerpt = `Step by step guide to install ${app} on any device. Complete ${app} setup tutorial with screenshots and troubleshooting tips for ${device}.`
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
<p><strong>${t(langCode, 'article_related')}</strong> <a href="/${langCode}/${slugify(`Best IPTV Apps for ${device} 2026`)}-1">Best IPTV Apps for ${device}</a> | <a href="/${langCode}/${slugify(`How to Set Up IPTV on ${device}`)}-1">Setup IPTV on ${device}</a></p>
`
    }
  } else if (enTitle.includes('Set Up IPTV on')) {
    const translatedBody = getArticleBody(langCode, 'deviceSetup', { device, app })
    if (translatedBody) {
      excerpt = getExcerpt('deviceSetup') || `Guide complet pas à pas pour configurer IPTV sur ${device}. Apprenez à installer des applications IPTV, configurer des listes de lecture et commencer à regarder sur ${device}.`
      content = translatedBody + `
<h2>${t(langCode, 'article_need_help')}</h2>
<p>${t(langCode, 'article_need_help_desc')}</p>
<div class="cta-section" style="margin:30px 0;padding:30px;text-align:center;background:linear-gradient(135deg,#0d47a1,#1a1a3e);border-radius:12px">
<h3 style="color:white;margin-bottom:10px">💬 ${t(langCode, 'article_cta_heading')}</h3>
<p style="color:#ccc;margin-bottom:20px">${t(langCode, 'article_cta_desc')}</p>
<a href="${wa('deviceSetup') || `https://wa.me/${WHATSAPP}?text=Bonjour%21%20J%27ai%20besoin%20d%27aide%20pour%20configurer%20IPTV%20sur%20mon%20${encodeURIComponent(device)}`}" target="_blank" style="display:inline-block;padding:12px 30px;background:#25d366;color:white;border-radius:50px;text-decoration:none;font-weight:700">💬 ${t(langCode, 'article_cta_btn')}</a>
</div>
<p><strong>${t(langCode, 'article_related')}</strong> <a href="/${langCode}/${slugify(`How to Install ${app} on Any Device`)}-1">Comment installer ${app}</a> | <a href="/${langCode}/${slugify(`Best IPTV Apps for ${device} 2026`)}-1">Meilleures applis pour ${device}</a></p>
`
    } else {
      excerpt = `Complete step by step guide to set up IPTV on ${device}. Learn how to install IPTV apps, configure playlists, and start watching on ${device}.`
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
<p><strong>${t(langCode, 'article_related')}</strong> <a href="/${langCode}/${slugify(`How to Install ${app} on Any Device`)}-1">How to Install ${app}</a> | <a href="/${langCode}/${slugify(`Best IPTV Apps for ${device} 2026`)}-1">Best Apps for ${device}</a></p>
`
    }
  } else if (enTitle.includes('Best IPTV Service Provider')) {
    const translatedBody = getArticleBody(langCode, 'countryGuide', { country, device, app })
    if (translatedBody) {
      excerpt = getExcerpt('countryGuide') || `Trouvez le meilleur fournisseur de services IPTV en ${country.name}. Comparez les meilleurs services IPTV pour les chaînes ${country.name}, les prix et les fonctionnalités. Regardez la TV ${country.name} partout.`
      content = translatedBody + `
<h2>${t(langCode, 'article_cta_heading')}</h2>
<p>${t(langCode, 'article_need_help_desc')}</p>
<div class="cta-section" style="margin:30px 0;padding:30px;text-align:center;background:linear-gradient(135deg,#0d47a1,#1a1a3e);border-radius:12px">
<h3 style="color:white;margin-bottom:10px">💬 ${t(langCode, 'article_cta_heading')}</h3>
<p style="color:#ccc;margin-bottom:20px">${t(langCode, 'article_cta_desc')}</p>
<a href="${wa('countryGuide') || `https://wa.me/${WHATSAPP}?text=Bonjour%21%20Je%20veux%20le%20meilleur%20IPTV%20pour%20${encodeURIComponent(country.name)}`}" target="_blank" style="display:inline-block;padding:12px 30px;background:#25d366;color:white;border-radius:50px;text-decoration:none;font-weight:700">💬 ${t(langCode, 'article_cta_btn')}</a>
</div>
<p><strong>${t(langCode, 'article_related')}</strong> <a href="/${langCode}/${slugify(`How to Set Up IPTV on ${device}`)}-1">IPTV Setup Guide</a> | <a href="/${langCode}/${slugify(`Best IPTV Apps for Smart TV 2026`)}-1">Best IPTV Apps</a></p>
`
    } else {
      excerpt = `Find the best IPTV service provider in ${country.name}. Compare top IPTV services for ${country.name} channels, pricing, and features. Watch ${country.name} TV anywhere.`
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
<p><strong>${t(langCode, 'article_related')}</strong> <a href="/${langCode}/${slugify(`How to Set Up IPTV on ${device}`)}-1">IPTV Setup Guide</a> | <a href="/${langCode}/${slugify(`Best IPTV Apps for Smart TV 2026`)}-1">Best IPTV Apps</a></p>
`
    }
  } else if (FAQ_QUESTIONS.some(f => title.startsWith(f.q.substring(0, 20)))) {
    const translatedBody = getArticleBody(langCode, 'faqArticle', { faqItem, app })
    if (translatedBody) {
      excerpt = getExcerpt('faqArticle') || `${faqItem.q} - Réponse détaillée et guide complet sur IPTV. Apprenez tout sur cette question IPTV courante.`
      content = translatedBody + `
<h2>${t(langCode, 'article_need_help')}</h2>
<p>${t(langCode, 'article_need_help_desc')}</p>
<div class="cta-section" style="margin:30px 0;padding:30px;text-align:center;background:linear-gradient(135deg,#0d47a1,#1a1a3e);border-radius:12px">
<h3 style="color:white;margin-bottom:10px">💬 ${t(langCode, 'article_cta_heading')}</h3>
<p style="color:#ccc;margin-bottom:20px">${t(langCode, 'article_cta_desc')}</p>
<a href="${wa('faqArticle') || `https://wa.me/${WHATSAPP}?text=Bonjour%21%20J%27ai%20une%20question%20sur%20${encodeURIComponent(faqItem.q.substring(0, 50))}`}" target="_blank" style="display:inline-block;padding:12px 30px;background:#25d366;color:white;border-radius:50px;text-decoration:none;font-weight:700">💬 ${t(langCode, 'article_cta_btn')}</a>
</div>
`
    } else {
      excerpt = `${faqItem.q} - Detailed answer and complete guide about IPTV. Learn everything about this common IPTV question.`
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
<li><a href="/${langCode}/${slugify('What is IPTV and how does it work')}-1">What is IPTV? Complete Guide</a></li>
<li><a href="/${langCode}/${slugify('Best IPTV Services 2026')}-1">Best IPTV Services 2026</a></li>
<li><a href="/${langCode}/${slugify('How to Set Up IPTV on Firestick')}-1">IPTV on Firestick Setup</a></li>
<li><a href="/${langCode}/${slugify(`How to Install ${app} on Any Device`)}-1">Install ${app}</a></li>
</ul>

<h2>${t(langCode, 'article_need_help')}</h2>
<p>${t(langCode, 'article_need_help_desc')}</p>
<div class="cta-section" style="margin:30px 0;padding:30px;text-align:center;background:linear-gradient(135deg,#0d47a1,#1a1a3e);border-radius:12px">
<h3 style="color:white;margin-bottom:10px">💬 ${t(langCode, 'article_cta_heading')}</h3>
<p style="color:#ccc;margin-bottom:20px">${t(langCode, 'article_cta_desc')}</p>
<a href="https://wa.me/${WHATSAPP}?text=Hi%21%20I%20have%20a%20question%20about%20${encodeURIComponent(faqItem.q.substring(0, 50))}" target="_blank" style="display:inline-block;padding:12px 30px;background:#25d366;color:white;border-radius:50px;text-decoration:none;font-weight:700">💬 ${t(langCode, 'article_cta_btn')}</a>
</div>
`
    }
  } else {
    const translatedBody = getArticleBody(langCode, 'generic', { title, device, app, country, faqItem })
    if (translatedBody) {
      excerpt = getExcerpt('generic') || 'La technologie IPTV a révolutionné notre façon de regarder la télévision. Contrairement au câble ou au satellite traditionnel, lIPTV délivre du contenu sur les réseaux Internet, offrant une plus grande flexibilité, plus de chaînes et de meilleurs prix.'
      excerpt = excerpt.substring(0, 150)
      content = translatedBody + `
<h2>${t(langCode, 'article_cta_heading')}</h2>
<p>${t(langCode, 'article_need_help_desc')}</p>
<div class="cta-section" style="margin:30px 0;padding:30px;text-align:center;background:linear-gradient(135deg,#0d47a1,#1a1a3e);border-radius:12px">
<h3 style="color:white;margin-bottom:10px">💬 ${t(langCode, 'article_cta_heading')}</h3>
<p style="color:#ccc;margin-bottom:20px">${t(langCode, 'article_cta_desc')}</p>
<a href="${wa('generic') || `https://wa.me/${WHATSAPP}?text=Bonjour%21%20Je%20veux%20commencer%20avec%20IPTV`}" target="_blank" style="display:inline-block;padding:12px 30px;background:#25d366;color:white;border-radius:50px;text-decoration:none;font-weight:700">💬 ${t(langCode, 'article_cta_btn')}</a>
</div>
`
    } else {
      const body1 = 'IPTV technology has revolutionized how we watch television. Unlike traditional cable or satellite, IPTV delivers content over internet networks, offering greater flexibility, more channels, and better prices. Whether you are a sports fan, movie lover, or news junkie, IPTV has something for everyone.'
      const body2 = 'Setting up IPTV is simple and can be done on virtually any device with an internet connection. From smart TVs and streaming boxes to smartphones and tablets, you can watch your favorite content anywhere, anytime.'
      excerpt = body1.substring(0, 150)
      content = `
<h2>Introduction to ${title}</h2>
<p>${body1} ${body2}</p>

<h2>Why Choose IPTV?</h2>
<p>IPTV offers numerous advantages over traditional television: lower costs, more channels, better quality, and the ability to watch on any device. With thousands of channels available from around the world, IPTV is the future of television.</p>

<h2>Getting Started</h2>
<p>To get started with IPTV, you need: a stable internet connection (25+ Mbps for HD), a compatible device, an IPTV app, and a subscription from a reliable provider. Follow our <a href="/${langCode}/${slugify(`How to Set Up IPTV on ${device}`)}-1">${device} setup guide</a> for detailed instructions.</p>

<h2>Best Apps to Use</h2>
<p>We recommend using <a href="/${langCode}/${slugify(`How to Install ${app} on Any Device`)}-1">${app}</a> for the best streaming experience. It offers excellent features, regular updates, and great support for all devices.</p>

<h2>International Channels</h2>
<p>One of the biggest advantages of IPTV is access to international channels. Whether you are looking for <a href="/${langCode}/${slugify(`Best IPTV Service Provider in ${country.name}`)}-1">${country.name} channels</a> or content from any other country, IPTV has you covered with thousands of channels worldwide.</p>

<div class="faq-item"><h3>Common Questions</h3><p>For answers to common IPTV questions, check our <a href="/${langCode}/${slugify(faqItem.q.substring(0, 30))}-1">FAQ section</a> covering ${faqItem.q.toLowerCase()}.</p></div>

<h2>${t(langCode, 'article_cta_heading')}</h2>
<p>${t(langCode, 'article_need_help_desc')}</p>
<div class="cta-section" style="margin:30px 0;padding:30px;text-align:center;background:linear-gradient(135deg,#0d47a1,#1a1a3e);border-radius:12px">
<h3 style="color:white;margin-bottom:10px">💬 ${t(langCode, 'article_cta_heading')}</h3>
<p style="color:#ccc;margin-bottom:20px">${t(langCode, 'article_cta_desc')}</p>
<a href="https://wa.me/${WHATSAPP}?text=Hi%21%20I%20want%20to%20start%20with%20IPTV" target="_blank" style="display:inline-block;padding:12px 30px;background:#25d366;color:white;border-radius:50px;text-decoration:none;font-weight:700">💬 ${t(langCode, 'article_cta_btn')}</a>
</div>
`
    }
  }

  const schemaArticle = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": title,
    "description": excerpt.substring(0, 160),
    "author": { "@type": "Organization", "name": SITE_NAME, "url": SITE_URL },
    "datePublished": date,
    "publisher": { "@type": "Organization", "name": SITE_NAME, "url": SITE_URL, "logo": { "@type": "ImageObject", "url": SITE_URL + "/assets/img/logo.png" } },
    "mainEntityOfPage": { "@type": "WebPage", "@id": SITE_URL + "/" + langCode + "/" + slug },
    "inLanguage": langCode
  })

  const schemaBreadcrumb = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": t(langCode, 'breadcrumb_home'), "item": SITE_URL + "/" + langCode + "/" },
      { "@type": "ListItem", "position": 2, "name": t(langCode, 'breadcrumb_blog'), "item": SITE_URL + "/blog/" + langCode + "/" },
      { "@type": "ListItem", "position": 3, "name": category.name, "item": SITE_URL + "/" + langCode + "/categories/" + category.slug },
      { "@type": "ListItem", "position": 4, "name": title, "item": SITE_URL + "/" + langCode + "/" + slug }
    ]
  })

  return {
    slug,
    title,
    excerpt: excerpt.substring(0, 160),
    date,
    category: category.name,
    categorySlug: category.slug,
    tags: keywordStr.split(', ').slice(0, 10),
    html: `<h1>${title}</h1>
<div class="card-meta" style="margin-bottom:20px">
<span>📅 ${date}</span>
<span>📂 <a href="/${langCode}/categories/${category.slug}">${category.name}</a></span>
<span>👁️ ${Math.floor(Math.random() * 2000) + 200} ${t(langCode, 'article_views')}</span>
</div>
${content}
<div class="disclaimer-box">
<strong>⚠️ ${t(langCode, 'article_disclaimer_title')}</strong> ${t(langCode, 'article_disclaimer_text')} <a href="/${langCode}/dmca">${t(langCode, 'article_dmca')}</a> | <a href="/${langCode}/disclaimer">${t(langCode, 'article_full_disclaimer')}</a>
</div>`
  }
}

export type ArticleData = ReturnType<typeof generateArticle>
