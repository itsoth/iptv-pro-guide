const fs = require('fs');

// Check Spanish articles
const esFiles = fs.readdirSync('./es').filter(f => f.endsWith('.html')).slice(0, 10);
console.log('=== SPANISH (es) META DESCRIPTIONS ===');
esFiles.forEach(f => {
  const html = fs.readFileSync('./es/' + f, 'utf8');
  const m = html.match(/<meta name="description" content="([^"]+)"/);
  if (m) console.log(f.substring(0, 60) + ': ' + m[1].substring(0, 100));
});

// Check French articles  
const frFiles = fs.readdirSync('./fr').filter(f => f.endsWith('.html')).slice(0, 5);
console.log('\n=== FRENCH (fr) META DESCRIPTIONS ===');
frFiles.forEach(f => {
  const html = fs.readFileSync('./fr/' + f, 'utf8');
  const m = html.match(/<meta name="description" content="([^"]+)"/);
  if (m) console.log(f.substring(0, 60) + ': ' + m[1].substring(0, 100));
});

// Check Arabic articles
const arFiles = fs.readdirSync('./ar').filter(f => f.endsWith('.html')).slice(0, 5);
console.log('\n=== ARABIC (ar) META DESCRIPTIONS ===');
arFiles.forEach(f => {
  const html = fs.readFileSync('./ar/' + f, 'utf8');
  const m = html.match(/<meta name="description" content="([^"]+)"/);
  if (m) console.log(f.substring(0, 60) + ': ' + m[1].substring(0, 100));
});

// Check titles
console.log('\n=== SPANISH TITLES ===');
const esFiles2 = fs.readdirSync('./es').filter(f => f.endsWith('.html')).slice(0, 10);
esFiles2.forEach(f => {
  const html = fs.readFileSync('./es/' + f, 'utf8');
  const m = html.match(/<title>([^<]+)<\/title>/);
  if (m) console.log(f.substring(0, 60) + ': ' + m[1].substring(0, 80));
});

console.log('\n=== FRENCH TITLES ===');
frFiles.forEach(f => {
  const html = fs.readFileSync('./fr/' + f, 'utf8');
  const m = html.match(/<title>([^<]+)<\/title>/);
  if (m) console.log(f.substring(0, 60) + ': ' + m[1].substring(0, 80));
});
