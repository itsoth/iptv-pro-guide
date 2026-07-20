const CONTENT_TRANSLATIONS_IT = {
  it: {
    appInstall: (vars) => {
      const { app, device } = vars;
      return `
<h2>Introduzione</h2>
<p>Benvenuto nella nostra guida completa per <strong>installare e configurare ${app}</strong> per lo streaming IPTV. ${app} è una delle applicazioni IPTV più popolari, che offre un'interfaccia intuitiva, funzionalità potenti e un'ampia compatibilità con i dispositivi. Questa guida ti accompagnerà passo dopo passo nell'installazione su ${device} e altri dispositivi.</p>

<h2>Cos'è ${app}?</h2>
<p>${app} è un lettore IPTV ricco di funzionalità che ti permette di trasmettere canali TV in diretta, film, serie e contenuti video on-demand dal tuo fornitore IPTV. Supporta playlist M3U, API Xtream Codes e dispone di supporto EPG integrato per le guide TV. L'applicazione è disponibile su più piattaforme, tra cui Android, iOS, Windows e Smart TV.</p>

<h2>Caratteristiche principali di ${app}</h2>
<ul>
<li>Supporto per liste M3U e API Xtream Codes</li>
<li>Guida elettronica dei programmi (EPG) integrata</li>
<li>Controllo parentale e filtraggio dei contenuti</li>
<li>Supporto multi-schermo e multi-dispositivo</li>
<li>Funzioni di registrazione e catch-up TV</li>
<li>Liste canali personalizzabili e preferiti</li>
<li>Integrazione con lettore esterno</li>
<li>Aggiornamento automatico delle liste canali</li>
</ul>

<h2>Installazione di ${app} su ${device}</h2>
<p>Segui questi passaggi per installare ${app} sul tuo ${device} per la migliore esperienza IPTV:</p>
<ol>
<li>Accendi il tuo ${device} e assicurati che sia connesso a Internet</li>
<li>Apri il negozio di applicazioni o la fonte di download appropriata per il tuo dispositivo</li>
<li>Cerca "${app}" nella barra di ricerca</li>
<li>Seleziona l'applicazione ufficiale ${app} dai risultati</li>
<li>Clicca su Installa / Scarica e attendi il completamento dell'installazione</li>
<li>Una volta installata, apri l'applicazione ${app}</li>
<li>Inserisci i dati del tuo fornitore IPTV (URL M3U, Xtream Codes o URL del portale)</li>
<li>Attendi il caricamento della lista canali e inizia a guardare</li>
</ol>

<h2>Installazione su altri dispositivi</h2>
<p>${app} può essere installato anche su molti altri dispositivi. Ecco guide rapide per le piattaforme più popolari:</p>
<p><strong>Firestick:</strong> Attiva App da origini sconosciute in Opzioni sviluppatore. Installa Downloader dall'Amazon Store. Inserisci l'URL di download di ${app} in Downloader. Installa e inserisci le tue credenziali IPTV.</p>
<p><strong>Android TV:</strong> Apri Google Play Store, cerca ${app}, installa, apri e inserisci i dati del fornitore.</p>
<p><strong>Samsung/LG Smart TV:</strong> Alcune versioni potrebbero richiedere il sideloading. Verifica se disponibile nel negozio di app della tua TV o usa Smart IPTV.</p>
<p><strong>iPhone/iPad:</strong> Disponibile sull'App Store. Scarica, installa, inserisci l'URL e le credenziali del tuo fornitore.</p>
<p><strong>Windows PC:</strong> Scarica dal sito ufficiale o dal Microsoft Store. Installa e configura con il tuo abbonamento IPTV.</p>

<h2>Consigli di configurazione</h2>
<p>Dopo l'installazione, configura ${app} per la migliore esperienza:</p>
<ul>
<li><strong>Configurazione EPG:</strong> Inserisci l'URL EPG nelle Impostazioni per ottenere i palinsesti TV</li>
<li><strong>Lettore video:</strong> Scegli tra il lettore integrato o uno esterno (VLC, MX Player)</li>
<li><strong>Dimensione buffer:</strong> Aumenta la dimensione del buffer se riscontri problemi di buffering</li>
<li><strong>Aggiornamento automatico:</strong> Attiva l'aggiornamento automatico di playlist ed EPG</li>
<li><strong>Controllo parentale:</strong> Imposta un PIN per i contenuti riservati</li>
<li><strong>Rete:</strong> Usa una connessione Ethernet cablata per una maggiore stabilità</li>
</ul>

<h2>Risoluzione dei problemi</h2>
<p>Se incontri problemi con ${app}, prova queste soluzioni:</p>
<ul>
<li><strong>L'app non si carica:</strong> Svuota la cache, riavvia il dispositivo, reinstalla l'app</li>
<li><strong>Nessun canale visualizzato:</strong> Verifica che l'abbonamento sia attivo, ricarica la playlist</li>
<li><strong>Buffering:</strong> Riduci la qualità video, usa una VPN, controlla la velocità di Internet</li>
<li><strong>EPG non funziona:</strong> Verifica l'URL EPG, aggiorna i dati EPG, riavvia l'app</li>
<li><strong>Problemi audio:</strong> Controlla la traccia audio, regola il ritardo audio, cambia lettore</li>
</ul>

<h2>FAQ su ${app}</h2>
<div class="faq-item"><h3>${app} è gratuito?</h3><p>${app} offre una versione gratuita con funzionalità di base. La versione premium sblocca funzionalità aggiuntive come la registrazione, il multi-schermo e le impostazioni avanzate.</p></div>
<div class="faq-item"><h3>Posso usare ${app} su più dispositivi?</h3><p>Sì, puoi installare ${app} su più dispositivi. Avrai bisogno delle credenziali del tuo abbonamento IPTV per ciascun dispositivo.</p></div>
<div class="faq-item"><h3>${app} supporta il catch-up TV?</h3><p>Se il tuo fornitore IPTV offre il catch-up TV, ${app} può visualizzare e riprodurre i contenuti in recupero tramite l'interfaccia EPG.</p></div>
<div class="faq-item"><h3>Come si aggiorna ${app}?</h3><p>Aggiorna tramite il negozio di applicazioni del tuo dispositivo o scarica l'ultima versione dal sito ufficiale.</p></div>`;
    },
    deviceSetup: (vars) => {
      const { device, app } = vars;
      return `
<h2>Introduzione</h2>
<p>Questa guida completa ti mostrerà <strong>come configurare IPTV su ${device}</strong>. Che tu sia un principiante o un utente esperto, questo tutorial passo passo ti aiuterà a far funzionare IPTV sul tuo ${device} in pochi minuti.</p>

<h2>Cosa ti serve prima di iniziare</h2>
<ul>
<li>Una connessione Internet funzionante (almeno 25 Mbps per l'HD)</li>
<li>Un abbonamento IPTV attivo</li>
<li>I dati del tuo fornitore IPTV (URL M3U, Xtream Codes o URL del portale)</li>
<li>Il dispositivo ${device} completamente carico o collegato</li>
<li>Una connessione WiFi o Ethernet stabile</li>
</ul>

<h2>Passo 1: Scegliere un'applicazione IPTV per ${device}</h2>
<p>Il primo passo è selezionare l'applicazione IPTV giusta per il tuo ${device}. Raccomandiamo queste opzioni popolari:</p>
<ul>
<li><strong>IPTV Smarters Pro</strong> - Miglior applicazione polivalente, funziona su tutti i dispositivi</li>
<li><strong>TiviMate</strong> - Migliore per Android TV Box e Firestick</li>
<li><strong>GSE Smart IPTV</strong> - Migliore per utenti iPhone/iPad</li>
<li><strong>Perfect Player</strong> - Leggero e veloce</li>
<li><strong>OTT Navigator</strong> - Ricco di funzionalità con eccellente supporto EPG</li>
</ul>

<h2>Passo 2: Installare l'applicazione IPTV su ${device}</h2>
<p>${device === 'Amazon Fire TV Stick' ? "Vai su Impostazioni > Il mio Fire TV > Opzioni sviluppatore > Installa app da origini sconosciute > Attiva Downloader. Installa Downloader dall'Amazon Appstore. Apri Downloader e inserisci l'URL dell'applicazione IPTV scelta. Scarica e installa il file APK." : "Apri il negozio di applicazioni sul tuo " + device + ". Cerca l'applicazione IPTV scelta. Tocca Installa/Scarica. Attendi il completamento dell'installazione."}</p>

<h2>Passo 3: Configurare il tuo abbonamento IPTV</h2>
<p>Apri l'applicazione IPTV installata. Vedrai una schermata di benvenuto con le opzioni per inserire i dati del tuo abbonamento:</p>
<ul>
<li><strong>URL lista M3U:</strong> Copia e incolla il link M3U fornito dal tuo servizio IPTV</li>
<li><strong>API Xtream Codes:</strong> Inserisci l'URL del server, il nome utente e la password</li>
<li><strong>URL del portale:</strong> Inserisci l'URL del portale MAG/STB se usi quel sistema</li>
</ul>
<p>Dopo aver inserito i dati, clicca su Accedi o Carica lista. I tuoi canali si caricheranno automaticamente.</p>

<h2>Passo 4: Personalizzare la tua esperienza IPTV</h2>
<p>Una volta caricati i tuoi canali, personalizza l'esperienza:</p>
<ul>
<li>Crea una lista di canali preferiti</li>
<li>Configura l'EPG (Guida TV) con l'URL EPG del tuo fornitore</li>
<li>Organizza i canali in gruppi personalizzati</li>
<li>Imposta il controllo parentale se necessario</li>
<li>Configura le impostazioni del lettore video</li>
<li>Attiva l'aggiornamento automatico delle liste canali</li>
</ul>

<h2>Risoluzione dei problemi di configurazione IPTV su ${device}</h2>
<ul>
<li><strong>Nessun canale si carica:</strong> Verifica l'abbonamento, ricarica la lista, riavvia l'app</li>
<li><strong>Buffering:</strong> Riduci la qualità, usa Ethernet, chiudi le app in background</li>
<li><strong>L'app si blocca:</strong> Svuota la cache, aggiorna l'app, reinstalla</li>
<li><strong>Problemi audio:</strong> Controlla le impostazioni audio, cambia lettore</li>
<li><strong>EPG non funziona:</strong> Aggiorna EPG, verifica l'URL, contatta il fornitore</li>
</ul>

<h2>Domande frequenti</h2>
<div class="faq-item"><h3>Posso usare IPTV sul mio ${device}?</h3><p>Sì, IPTV funziona perfettamente su ${device}. Segui semplicemente i passaggi sopra per installare un'app IPTV e inserire i dati del tuo abbonamento.</p></div>
<div class="faq-item"><h3>Che velocità di Internet serve per IPTV su ${device}?</h3><p>Per contenuti HD: almeno 25 Mbps. Per 4K: almeno 50 Mbps. Si consiglia una connessione cablata per prestazioni migliori.</p></div>
<div class="faq-item"><h3>Ho bisogno di una VPN per IPTV su ${device}?</h3><p>Una VPN può aiutare a evitare la limitazione del provider Internet e proteggere la tua privacy. Scegli una VPN veloce con server vicino alla tua posizione.</p></div>`;
    },
    countryGuide: (vars) => {
      const { country, device, app } = vars;
      const langName = country.lang === 'ar' ? 'Arabo' : country.lang === 'fr' ? 'Francese' : country.lang === 'es' ? 'Spagnolo' : country.lang === 'de' ? 'Tedesco' : country.lang === 'pt' ? 'Portoghese' : country.lang === 'nl' ? 'Olandese' : country.lang === 'tr' ? 'Turco' : country.lang === 'ru' ? 'Russo' : 'Inglese';
      return `
<h2>Introduzione</h2>
<p>Stai cercando il <strong>miglior fornitore di servizi IPTV in ${country.name}</strong>? Questa guida completa ti aiuterà a trovare l'abbonamento IPTV perfetto per guardare i canali ${country.name}, i contenuti locali e la programmazione internazionale. Che tu viva in ${country.name} o sia un espatriato all'estero, abbiamo le migliori raccomandazioni per te.</p>

<h2>Perché scegliere IPTV in ${country.name}?</h2>
<p>L'IPTV sta diventando sempre più popolare in ${country.name} per diversi motivi:</p>
<ul>
<li><strong>Risparmio:</strong> L'IPTV è generalmente più economica del cavo o del satellite tradizionale</li>
<li><strong>Varietà di canali:</strong> Accedi a centinaia di canali ${country.name} più contenuti internazionali</li>
<li><strong>Flessibilità:</strong> Guarda su qualsiasi dispositivo - TV, telefono, tablet o computer</li>
<li><strong>Senza contratti:</strong> Abbonamenti mensili senza impegni a lungo termine</li>
<li><strong>Qualità HD e 4K:</strong> Goditi una qualità d'immagine cristallina</li>
<li><strong>Catch-up e VOD:</strong> Guarda programmi persi e migliaia di film on-demand</li>
</ul>

<h2>Miglior fornitore IPTV per canali ${country.name}</h2>
<p>Scegliendo un fornitore IPTV per ${country.name}, cerca queste caratteristiche chiave:</p>
<ul>
<li><strong>Canali locali:</strong> Accesso a canali di notizie, sport e intrattenimento ${country.name}</li>
<li><strong>Supporto linguistico:</strong> Interfaccia e contenuti in ${langName}</li>
<li><strong>Server affidabili:</strong> Streaming veloce e stabile con minimo buffering</li>
<li><strong>Opzioni di pagamento:</strong> Metodi di pagamento disponibili in ${country.name}</li>
<li><strong>Supporto:</strong> Servizio clienti che comprende le esigenze di ${country.name}</li>
</ul>

<h2>Caratteristiche principali</h2>
<p>I nostri fornitori IPTV consigliati per ${country.name} offrono queste caratteristiche:</p>
<ul>
<li><strong>Lista canali estesa:</strong> ${Math.floor(Math.random() * 5000) + 5000}+ canali in diretta inclusi tutti i principali network ${country.name}</li>
<li><strong>Biblioteca VOD:</strong> ${Math.floor(Math.random() * 10000) + 10000}+ film e programmi TV</li>
<li><strong>Qualità 4K e FHD:</strong> Opzioni di streaming Ultra HD e Full HD</li>
<li><strong>Guida EPG:</strong> Guida elettronica dei programmi per una facile navigazione dei canali</li>
<li><strong>Tecnologia anti-freeze:</strong> Server stabili con minimo buffering</li>
<li><strong>Assistenza clienti 24/7:</strong> Aiuto disponibile quando ne hai bisogno</li>
<li><strong>Prova gratuita:</strong> Prova il servizio prima di abbonarti</li>
<li><strong>Multi-dispositivo:</strong> Guarda su più dispositivi contemporaneamente</li>
</ul>

<h2>Come guardare i canali ${country.name} all'estero</h2>
<p>Se sei un espatriato ${country.name} o stai viaggiando all'estero, l'IPTV ti permette di guardare tutti i tuoi canali ${country.name} preferiti da qualsiasi parte del mondo. Ecco come:</p>
<ol>
<li>Scegli un fornitore IPTV affidabile con canali ${country.name}</li>
<li>Abbonati al loro servizio (usa prima la prova gratuita)</li>
<li>Installa l'applicazione IPTV sul tuo dispositivo</li>
<li>Inserisci i dati del tuo abbonamento</li>
<li>Inizia a guardare i canali TV ${country.name} immediatamente</li>
</ol>

<h2>IPTV per appassionati di sport in ${country.name}</h2>
<p>Gli appassionati di sport in ${country.name} amano l'IPTV per l'accesso a eventi sportivi in diretta da tutto il mondo. Guarda ${country.name === 'United States' ? 'la NFL, NBA, MLB, NHL' : country.name === 'United Kingdom' ? 'la Premier League, la Champions League' : country.name === 'France' ? 'la Ligue 1, il Top 14' : country.name === 'Spain' ? 'La Liga, l\'ACB' : country.name === 'Germany' ? 'la Bundesliga, la DEL' : country.name === 'Italy' ? 'la Serie A, la Lega Basket' : country.name === 'Brazil' ? 'il Brasileirão, la NBA' : 'sport locali e internazionali'} in diretta con IPTV.</p>

<h2>Domande frequenti su IPTV in ${country.name}</h2>
<div class="faq-item"><h3>L'IPTV è legale in ${country.name}?</h3><p>La tecnologia IPTV in sé è legale. Scegli sempre fornitori autorizzati che abbiano i diritti sui contenuti appropriati. Raccomandiamo di utilizzare servizi IPTV legittimi.</p></div>
<div class="faq-item"><h3>Qual è la migliore applicazione IPTV per gli utenti in ${country.name}?</h3><p>Le opzioni popolari includono TiviMate, IPTV Smarters Pro, GSE Smart IPTV e Perfect Player. Tutte funzionano molto bene per i canali ${country.name}.</p></div>
<div class="faq-item"><h3>Posso guardare la TV ${country.name} all'estero con IPTV?</h3><p>Sì! L'IPTV funziona ovunque nel mondo con una connessione Internet. Puoi guardare i canali ${country.name} da qualsiasi paese.</p></div>
<div class="faq-item"><h3>Quanto costa l'IPTV in ${country.name}?</h3><p>I prezzi variano a seconda del fornitore. Aspettati di pagare tra $5-15/mese per un servizio di qualità con canali ${country.name}.</p></div>`;
    },
    faqArticle: (vars) => {
      const { faqItem, app, slugify } = vars;
      return `
<h2>${faqItem.q}</h2>
<p>${faqItem.a}</p>

<h2>Spiegazione dettagliata</h2>
<p>Questa è una delle domande più frequenti sulla tecnologia IPTV. Comprendere ${faqItem.q.toLowerCase()} è essenziale per ottenere la migliore esperienza IPTV. In questa guida completa, forniamo informazioni dettagliate e consigli pratici per aiutarti a sfruttare al meglio il tuo servizio IPTV.</p>

<h2>Punti chiave da ricordare</h2>
<ul>
<li>Usa sempre una connessione Internet affidabile per prestazioni ottimali</li>
<li>Scegli un fornitore IPTV affidabile con buone recensioni</li>
<li>Mantieni le tue applicazioni IPTV aggiornate alle ultime versioni</li>
<li>Usa una VPN per una maggiore privacy se necessario</li>
<li>Prova i servizi con prove gratuite prima di impegnarti</li>
</ul>

<h2>Argomenti IPTV correlati</h2>
<ul>
<li><a href="/${vars.langCode}/${vars.slugify('What is IPTV and how does it work')}-1.html">Cos'è l'IPTV? Guida completa</a></li>
<li><a href="/${vars.langCode}/${vars.slugify('Best IPTV Services 2026')}-1.html">Migliori servizi IPTV 2026</a></li>
<li><a href="/${vars.langCode}/${vars.slugify('How to Set Up IPTV on Firestick')}-1.html">IPTV su Firestick</a></li>
<li><a href="/${vars.langCode}/${vars.slugify(`How to Install ${app} on Any Device`)}-1.html">Installare ${app}</a></li>
</ul>`;
    },
    generic: (vars) => {
      const { title, device, app, country, faqItem } = vars;
      return `
<h2>Introduzione a ${title}</h2>
<p>La tecnologia IPTV ha rivoluzionato il modo in cui guardiamo la televisione. A differenza del cavo o del satellite tradizionale, l'IPTV trasmette contenuti attraverso reti Internet, offrendo maggiore flessibilità, più canali e prezzi migliori. Configurare l'IPTV è semplice e può essere fatto su praticamente qualsiasi dispositivo con una connessione Internet.</p>

<h2>Perché scegliere IPTV?</h2>
<p>L'IPTV offre numerosi vantaggi rispetto alla televisione tradizionale: costi inferiori, più canali, migliore qualità e la possibilità di guardare su qualsiasi dispositivo. Con migliaia di canali disponibili da tutto il mondo, l'IPTV è il futuro della televisione.</p>

<h2>Per iniziare</h2>
<p>Per iniziare con l'IPTV, hai bisogno di: una connessione Internet stabile (25+ Mbps per l'HD), un dispositivo compatibile, un'applicazione IPTV e un abbonamento presso un fornitore affidabile. Segui la nostra <a href="/${vars.langCode}/${vars.slugify(`How to Set Up IPTV on ${device}`)}-1.html">guida di configurazione per ${device}</a> per istruzioni dettagliate.</p>

<h2>Migliori applicazioni da usare</h2>
<p>Raccomandiamo di usare <a href="/${vars.langCode}/${vars.slugify(`How to Install ${app} on Any Device`)}-1.html">${app}</a> per la migliore esperienza di streaming. Offre funzionalità eccellenti, aggiornamenti regolari e un ottimo supporto per tutti i dispositivi.</p>

<h2>Canali internazionali</h2>
<p>Uno dei maggiori vantaggi dell'IPTV è l'accesso ai canali internazionali. Che tu stia cercando <a href="/${vars.langCode}/${vars.slugify(`Best IPTV Service Provider in ${country.name}`)}-1.html">canali ${country.name}</a> o contenuti da qualsiasi altro paese, l'IPTV ti copre con migliaia di canali in tutto il mondo.</p>

<div class="faq-item"><h3>Domande comuni</h3><p>Per risposte a domande comuni sull'IPTV, consulta la nostra <a href="/${vars.langCode}/${vars.slugify(faqItem.q.substring(0, 30))}-1.html">sezione FAQ</a> su ${faqItem.q.toLowerCase()}.</p></div>`;
    },
    translateTitle: (title, vars) => {
      const { app, device, country, faqItem } = vars;
      const exact = {
        'How to Install IPTV on Any Device - Universal Guide': 'Come Installare IPTV su Qualsiasi Dispositivo - Guida Universale',
        'IPTV Subscription Guide 2026: Everything You Need to Know': 'Guida all\'Abbonamento IPTV 2026: Tutto Quello che Devi Sapere',
        'IPTV vs Cable vs Satellite: Complete Comparison Guide': 'IPTV vs Cavo vs Satellite: Guida al Confronto Completa',
        'Best IPTV Service Providers Worldwide 2026': 'Migliori Fornitori di Servizi IPTV nel Mondo 2026',
        'IPTV for Beginners: Complete Getting Started Guide': 'IPTV per Principianti: Guida Completa per Iniziare',
        'How to Watch Live Sports on IPTV: Complete Sports Guide': 'Come Guardare Sport in Diretta su IPTV: Guida Sportiva Completa',
        'IPTV VPN Setup: Best VPNs for IPTV Streaming 2026': 'Configurazione VPN per IPTV: Migliori VPN per lo Streaming IPTV 2026',
        'How to Create Perfect IPTV Playlist - M3U Editor Guide': 'Come Creare la Playlist IPTV Perfetta - Guida all\'Editor M3U',
        'IPTV Panel Setup: Complete Reseller Guide': 'Configurazione Pannello IPTV: Guida Completa per Rivenditori',
        'IPTV Movie Streaming: Best VOD Services 2026': 'Streaming di Film IPTV: Migliori Servizi VOD 2026',
        'IPTV for Kids: Family-Friendly Streaming Guide': 'IPTV per Bambini: Guida allo Streaming per Famiglie',
        'IPTV for Expats: Watch Home Country TV Abroad': 'IPTV per Espatriati: Guarda la TV del Tuo Paese all\'Estero',
        'IPTV Business Solutions: Commercial IPTV for Hotels': 'Soluzioni IPTV per le Aziende: IPTV Commerciale per Hotel',
        'IPTV Multi-Room Setup: Watch TV in Every Room': 'Configurazione IPTV Multi-Stanza: Guarda la TV in Ogni Stanza',
        'How to Fix All IPTV Problems: Ultimate Troubleshooting': 'Come Risolvere Tutti i Problemi IPTV: Risoluzione Definitiva',
        'IPTV Sports Packages: Best Sports Channels Worldwide': 'Pacchetti Sportivi IPTV: Migliori Canali Sportivi nel Mondo',
        'IPTV 4K Streaming: How to Watch Ultra HD Content': 'Streaming IPTV 4K: Come Guardare Contenuti Ultra HD',
        'Best IPTV Apps for Android TV Box 2026': 'Migliori App IPTV per Android TV Box 2026',
        'Best IPTV Apps for Firestick 2026': 'Migliori App IPTV per Firestick 2026',
        'Best IPTV Apps for Samsung Smart TV 2026': 'Migliori App IPTV per Samsung Smart TV 2026',
        'Best IPTV Apps for LG WebOS TV 2026': 'Migliori App IPTV per LG WebOS TV 2026',
        'Best IPTV Apps for iPhone and iPad 2026': 'Migliori App IPTV per iPhone e iPad 2026',
        'Best IPTV Apps for Apple TV 2026': 'Migliori App IPTV per Apple TV 2026',
        'Best IPTV Apps for Windows PC 2026': 'Migliori App IPTV per Windows PC 2026',
        'Best IPTV Apps for Mac 2026': 'Migliori App IPTV per Mac 2026',
        'Best IPTV Apps for Roku 2026': 'Migliori App IPTV per Roku 2026',
        'Best IPTV Apps for MAG Box 2026': 'Migliori App IPTV per MAG Box 2026',
        'Best IPTV Apps for Formuler 2026': 'Migliori App IPTV per Formuler 2026',
        'Best IPTV Apps for Chromecast 2026': 'Migliori App IPTV per Chromecast 2026',
        'Best IPTV Apps for Nvidia Shield 2026': 'Migliori App IPTV per Nvidia Shield 2026',
        'Best IPTV Apps for Xbox 2026': 'Migliori App IPTV per Xbox 2026',
        'Best IPTV Apps for PlayStation 2026': 'Migliori App IPTV per PlayStation 2026',
        'Best IPTV Apps for Linux 2026': 'Migliori App IPTV per Linux 2026',
        'Best IPTV Apps for Android Smartphone 2026': 'Migliori App IPTV per Smartphone Android 2026',
        'Best IPTV Apps for Smart TV 2026': 'Migliori App IPTV per Smart TV 2026'
      };
      if (exact[title]) return exact[title];
      if (title.startsWith('How to Install ') && title.includes(' on Any Device - Complete Setup Guide')) {
        return 'Come installare ' + title.replace('How to Install ', '').replace(' on Any Device - Complete Setup Guide', '') + ' su qualsiasi dispositivo - Guida di configurazione completa';
      }
      if (title.startsWith('How to Set Up IPTV on ') && title.endsWith(' - Step by Step Guide')) {
        return 'Come configurare IPTV su ' + title.replace('How to Set Up IPTV on ', '').replace(' - Step by Step Guide', '') + ' - Guida passo passo';
      }
      if (title.startsWith('Best IPTV Service Provider in ') && title.includes(' Channels 2026')) {
        var c = title.replace('Best IPTV Service Provider in ', '').split(' for ')[0];
        return 'Miglior fornitore di servizi IPTV in ' + c + ' per canali ' + c + ' 2026';
      }
      if (title.endsWith(' - Complete Guide & Answer')) {
        return title.replace(' - Complete Guide & Answer', '') + ' - Guida completa e risposta';
      }
      return title;
    },
    translateExcerpt: (type, vars) => {
      const { app, device, country, faqItem } = vars;
      const excerpts = {
        appInstall: 'Guida passo passo per installare ' + app + ' su qualsiasi dispositivo. Tutorial completo di configurazione di ' + app + ' con screenshot e suggerimenti per la risoluzione dei problemi su ' + device + '.',
        deviceSetup: 'Guida completa passo passo per configurare IPTV su ' + device + '. Impara come installare app IPTV, configurare playlist e iniziare a guardare su ' + device + '.',
        countryGuide: 'Trova il miglior fornitore di servizi IPTV in ' + country.name + '. Confronta i migliori servizi IPTV per canali ' + country.name + ', prezzi e funzionalità. Guarda la TV ' + country.name + ' ovunque.',
        faqArticle: faqItem.q + ' - Risposta dettagliata e guida completa sull\'IPTV. Scopri tutto su questa domanda comune sull\'IPTV.',
        generic: 'La tecnologia IPTV ha rivoluzionato il modo in cui guardiamo la televisione. Guida completa su configurazione IPTV, app e risoluzione dei problemi per ' + device + '.'
      };
      return excerpts;
    },
    translateWhatsApp: (type, vars) => {
      const { app, device, country, faqItem } = vars;
      const messages = {
        appInstall: 'Ciao! Ho bisogno di aiuto per installare ' + encodeURIComponent(app),
        deviceSetup: 'Ciao! Ho bisogno di aiuto per configurare IPTV su ' + encodeURIComponent(device),
        countryGuide: 'Ciao! Voglio il miglior IPTV per ' + encodeURIComponent(country.name),
        faqArticle: 'Ciao! Ho una domanda su ' + encodeURIComponent(faqItem.q.substring(0, 50)),
        generic: 'Ciao! Voglio iniziare con IPTV'
      };
      return messages;
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CONTENT_TRANSLATIONS_IT };
}
