const fs = require('fs');
const content = fs.readFileSync('./content-translations.js', 'utf8');

const langs = ['fr', 'es', 'ar', 'de', 'pt', 'it', 'tr', 'ru', 'nl'];
const funcs = ['translateTitle', 'translateExcerpt', 'translateWhatsApp'];

langs.forEach(lang => {
  // Find the language section
  const idx = content.indexOf(`  ${lang}: {`);
  if (idx === -1) {
    console.log(`${lang}: NOT FOUND`);
    return;
  }
  // Find the next language section start
  const rest = content.substring(idx);
  const endIdx = rest.search(/\n  [a-z]{2}: \{/);
  const section = endIdx === -1 ? rest : rest.substring(0, endIdx);
  
  const has = {};
  funcs.forEach(f => {
    has[f] = section.includes(`    ${f}:`);
  });
  
  console.log(`${lang}: ${has.translateTitle ? 'has translateTitle' : 'MISSING translateTitle'}, ${has.translateExcerpt ? 'has translateExcerpt' : 'MISSING translateExcerpt'}, ${has.translateWhatsApp ? 'has translateWhatsApp' : 'MISSING translateWhatsApp'}`);
});
