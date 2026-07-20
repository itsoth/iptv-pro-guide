const fs = require('fs');

const frFiles = fs.readdirSync('./fr').filter(f => !f.startsWith('about') && !f.startsWith('contact') && !f.startsWith('privacy') && !f.startsWith('terms') && !f.startsWith('dmca') && !f.startsWith('disclaimer') && !f.startsWith('search') && !f.startsWith('articles.json')).slice(0, 5);

console.log('=== FRENCH ===');
frFiles.forEach(f => {
  const html = fs.readFileSync('./fr/' + f, 'utf8');
  const title = html.match(/<title>([^<]+)<\/title>/);
  const desc = html.match(/<meta name="description" content="([^"]+)"/);
  const ogtitle = html.match(/<meta property="og:title" content="([^"]+)"/);
  console.log(f.substring(0, 50) + ' => Title: ' + (title ? title[1].substring(0, 60) : 'N/A'));
  console.log('  Desc: ' + (desc ? desc[1].substring(0, 60) : 'N/A'));
  console.log('  OG: ' + (ogtitle ? ogtitle[1].substring(0, 60) : 'N/A'));
  console.log('');
});

const esFiles = fs.readdirSync('./es').filter(f => !f.startsWith('about') && !f.startsWith('contact') && !f.startsWith('privacy') && !f.startsWith('terms') && !f.startsWith('dmca') && !f.startsWith('disclaimer') && !f.startsWith('search') && !f.startsWith('articles.json')).slice(0, 5);

console.log('=== SPANISH ===');
esFiles.forEach(f => {
  const html = fs.readFileSync('./es/' + f, 'utf8');
  const title = html.match(/<title>([^<]+)<\/title>/);
  const desc = html.match(/<meta name="description" content="([^"]+)"/);
  console.log(f.substring(0, 50) + ' => Title: ' + (title ? title[1].substring(0, 60) : 'N/A'));
  console.log('  Desc: ' + (desc ? desc[1].substring(0, 60) : 'N/A'));
  console.log('');
});
