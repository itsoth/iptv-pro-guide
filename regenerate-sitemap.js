const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://iptvproguide.netlify.app';
const SITE_NAME = 'IPTV Pro Guide';

const LANGUAGES = [
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' },
  { code: 'ar', name: 'العربية' },
  { code: 'de', name: 'Deutsch' },
  { code: 'pt', name: 'Português' },
  { code: 'it', name: 'Italiano' },
  { code: 'tr', name: 'Türkçe' },
  { code: 'ru', name: 'Русский' },
  { code: 'nl', name: 'Nederlands' }
];

const CATEGORIES = [
  'app-guides', 'country-guides', 'device-guides', 'faq',
  'iptv-guides', 'reviews', 'setup-tutorials', 'sports',
  'technology', 'troubleshooting'
];

// Collect all articles from all languages
const allArticles = [];
const langArticleMap = {};

LANGUAGES.forEach(lang => {
  const langDir = path.join(__dirname, lang.code);
  if (!fs.existsSync(langDir)) return;

  const files = fs.readdirSync(langDir).filter(f => f.endsWith('.html') && f !== 'index.html' && !f.startsWith('about') && !f.startsWith('contact') && !f.startsWith('privacy') && !f.startsWith('terms') && !f.startsWith('dmca') && !f.startsWith('disclaimer') && !f.startsWith('search'));

  const articles = files.map(f => ({
    slug: f.replace('.html', ''),
    lang: lang.code
  }));

  langArticleMap[lang.code] = articles;
  articles.forEach(a => allArticles.push(a));
});

// Generate sitemap
function generateSitemap() {
  let xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xhtml="http://www.w3.org/1999/xhtml">\n`;

  LANGUAGES.forEach(lang => {
    xml += `  <url><loc>${SITE_URL}/${lang.code}/</loc><changefreq>daily</changefreq><priority>1.0</priority>\n`;
    LANGUAGES.forEach(l => {
      xml += `    <xhtml:link rel="alternate" hreflang="${l.code}" href="${SITE_URL}/${l.code}/"/>\n`;
    });
    xml += `  </url>\n\n`;

    xml += `  <url><loc>${SITE_URL}/blog/${lang.code}/</loc><changefreq>daily</changefreq><priority>0.9</priority>\n`;
    LANGUAGES.forEach(l => {
      xml += `    <xhtml:link rel="alternate" hreflang="${l.code}" href="${SITE_URL}/blog/${l.code}/"/>\n`;
    });
    xml += `  </url>\n\n`;

    ['about.html', 'contact.html', 'privacy-policy.html', 'terms.html', 'dmca.html', 'disclaimer.html'].forEach(page => {
      xml += `  <url><loc>${SITE_URL}/${lang.code}/${page}</loc><changefreq>monthly</changefreq><priority>0.5</priority></url>\n`;
    });

    CATEGORIES.forEach(cat => {
      xml += `  <url><loc>${SITE_URL}/${lang.code}/categories/${cat}.html</loc><changefreq>weekly</changefreq><priority>0.6</priority></url>\n`;
    });
  });

  const uniqueSlugs = [...new Set(allArticles.map(a => a.slug))];
  uniqueSlugs.forEach(slug => {
    xml += `  <url><loc>${SITE_URL}/en/${slug}.html</loc><changefreq>monthly</changefreq><priority>0.8</priority>\n`;
    LANGUAGES.forEach(l => {
      xml += `    <xhtml:link rel="alternate" hreflang="${l.code}" href="${SITE_URL}/${l.code}/${slug}.html"/>\n`;
    });
    xml += `  </url>\n\n`;
  });

  xml += `</urlset>`;
  fs.writeFileSync(path.join(__dirname, 'sitemap.xml'), xml);
  console.log(`Sitemap generated with ${uniqueSlugs.length} article URLs across ${LANGUAGES.length} languages`);
}

// Generate RSS feeds
function generateRSS() {
  LANGUAGES.forEach(lang => {
    const articles = (langArticleMap[lang.code] || []).slice(0, 200);
    let rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${SITE_NAME} (${lang.name})</title>
<link>${SITE_URL}/${lang.code}/</link>
<description>Your ultimate guide to IPTV technology, setup tutorials, app guides, and troubleshooting tips. Educational content only. - ${lang.name}</description>
<language>${lang.code}</language>
<atom:link href="${SITE_URL}/rss-${lang.code}.xml" rel="self" type="application/rss+xml"/>\n`;

    articles.forEach(a => {
      rss += `  <item><title>${a.slug.replace(/-/g, ' ')}</title><link>${SITE_URL}/${lang.code}/${a.slug}.html</link><description>IPTV guide article for ${lang.name} users.</description><pubDate>${new Date().toUTCString()}</pubDate><guid>${SITE_URL}/${lang.code}/${a.slug}.html</guid><category>IPTV</category></item>\n`;
    });

    rss += `</channel>
</rss>`;
    fs.writeFileSync(path.join(__dirname, `rss-${lang.code}.xml`), rss);
  });
  console.log('RSS feeds generated for all languages');
}

// Generate robots.txt
function generateRobots() {
  let robots = `User-agent: *
Allow: /

Sitemap: ${SITE_URL}/sitemap.xml\n`;
  LANGUAGES.forEach(lang => {
    robots += `Sitemap: ${SITE_URL}/rss-${lang.code}.xml\n`;
  });
  fs.writeFileSync(path.join(__dirname, 'robots.txt'), robots);
  console.log('robots.txt generated');
}

generateSitemap();
generateRSS();
generateRobots();
console.log('Done!');
