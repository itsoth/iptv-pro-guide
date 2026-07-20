const fs = require('fs');
const dirs = ['es', 'ar', 'fr', 'de', 'pt', 'it', 'tr', 'ru', 'nl'];

dirs.forEach(dir => {
  const files = fs.readdirSync('./' + dir).filter(f => f.endsWith('.html')).slice(0, 3);
  files.forEach(f => {
    const html = fs.readFileSync('./' + dir + '/' + f, 'utf8');
    const m = html.match(/<meta name="description" content="([^"]+)"/);
    if (m) {
      const desc = m[1].substring(0, 80);
      const hasFrench = /français|technologie|révolutionné|dépannage|IPTV/i.test(desc);
      const isCorrect = dir === 'fr' ? desc.includes('fran') || desc.includes('Vous') || desc.includes('Étape') : 
                         dir === 'es' ? desc.includes('espa') || desc.includes('Paso') || desc.includes('Encuentre') :
                         dir === 'ar' ? desc.includes('\u0627') || desc.includes('\u0644') :
                         dir === 'de' ? desc.includes('IPTV') || desc.includes('Installieren') || desc.includes('Schritt') :
                         dir === 'pt' ? desc.includes('passo') || desc.includes('guia') :
                         dir === 'it' ? desc.includes('guida') || desc.includes('passo') :
                         dir === 'tr' ? desc.includes('rehber') || desc.includes('adım') :
                         dir === 'ru' ? desc.includes('руководство') || desc.includes('установк') :
                         dir === 'nl' ? desc.includes('handleiding') || desc.includes('stap') : true;
      const langName = {es:'Spanish',ar:'Arabic',fr:'French',de:'German',pt:'Portuguese',it:'Italian',tr:'Turkish',ru:'Russian',nl:'Dutch'}[dir];
      if (hasFrench) {
        console.log('FRENCH LEAK in ' + dir + '/' + f + ': ' + desc);
      } else if (!isCorrect) {
        console.log('SUSPICIOUS in ' + dir + '/' + f + ': ' + desc);
      } else {
        console.log('OK - ' + langName + ' ' + dir + '/' + f);
      }
    }
  });
});
