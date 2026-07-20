const CONTENT_TRANSLATIONS = {
  nl: {
    appInstall: (vars) => {
      const { app, device } = vars;
      return `
<h2>Introductie</h2>
<p>Welkom bij onze uitgebreide gids voor het <strong>installeren en configureren van ${app}</strong> voor IPTV-streaming. ${app} is een van de populairste IPTV-applicaties en biedt een gebruiksvriendelijke interface, krachtige functies en brede apparaatcompatibiliteit. Deze gids leidt u stap voor stap door het installatieproces op ${device} en andere apparaten.</p>

<h2>Wat is ${app}?</h2>
<p>${app} is een functierijke IPTV-speler waarmee u live tv-kanalen, films, series en video-on-demand-content van uw IPTV-provider kunt streamen. Het ondersteunt M3U-afspeellijsten, Xtream Codes API en heeft ingebouwde EPG-ondersteuning voor tv-gidsen. De app is beschikbaar op meerdere platforms, waaronder Android, iOS, Windows en Smart TV.</p>

<h2>Belangrijkste functies van ${app}</h2>
<ul>
<li>Ondersteuning voor M3U-lijsten en Xtream Codes API</li>
<li>Ingebouwde elektronische programmagids (EPG)</li>
<li>Ouderlijk toezicht en contentfiltering</li>
<li>Ondersteuning voor meerdere schermen en apparaten</li>
<li>Opname- en catch-up TV-functionaliteit</li>
<li>Aanpasbare kanaallijsten en favorieten</li>
<li>Integratie met externe speler</li>
<li>Automatische update van kanaallijsten</li>
</ul>

<h2>Installatie van ${app} op ${device}</h2>
<p>Volg deze stappen om ${app} op uw ${device} te installeren voor de beste IPTV-ervaring:</p>
<ol>
<li>Zet uw ${device} aan en zorg dat deze verbonden is met internet</li>
<li>Open de app-winkel of de juiste downloadbron voor uw apparaat</li>
<li>Zoek naar "${app}" in de zoekbalk</li>
<li>Selecteer de officiële ${app}-app uit de resultaten</li>
<li>Klik op Installeren / Downloaden en wacht tot de installatie is voltooid</li>
<li>Open na installatie de ${app}-app</li>
<li>Voer uw IPTV-providergegevens in (M3U-URL, Xtream Codes of Portal-URL)</li>
<li>Wacht tot de kanaallijst is geladen en begin met kijken</li>
</ol>

<h2>Installatie op andere apparaten</h2>
<p>${app} kan ook op vele andere apparaten worden geïnstalleerd. Hier zijn snelle handleidingen voor populaire platforms:</p>
<p><strong>Firestick:</strong> Schakel Apps uit onbekende bronnen in bij Opties voor ontwikkelaars. Installeer Downloader vanuit de Amazon Store. Voer de download-URL van ${app} in Downloader in. Installeer en voer uw IPTV-gegevens in.</p>
<p><strong>Android TV:</strong> Open Google Play Store, zoek naar ${app}, installeer, open en voer de providergegevens in.</p>
<p><strong>Samsung/LG Smart TV:</strong> Sommige versies vereisen mogelijk sideloading. Controleer of de app beschikbaar is in de app-winkel van uw tv of gebruik Smart IPTV.</p>
<p><strong>iPhone/iPad:</strong> Beschikbaar in de App Store. Download, installeer, voer de URL en gegevens van uw provider in.</p>
<p><strong>Windows PC:</strong> Download van de officiële website of Microsoft Store. Installeer en configureer met uw IPTV-abonnement.</p>

<h2>Configuratietips</h2>
<p>Configureer ${app} na installatie voor de beste ervaring:</p>
<ul>
<li><strong>EPG-instelling:</strong> Voer uw EPG-URL in bij Instellingen voor tv-programmaschema's</li>
<li><strong>Videospeler:</strong> Kies tussen de ingebouwde speler of een externe speler (VLC, MX Player)</li>
<li><strong>Buffergrootte:</strong> Vergroot de buffergrootte als u problemen met bufferen heeft</li>
<li><strong>Automatische update:</strong> Schakel automatische update van afspeellijsten en EPG in</li>
<li><strong>Ouderlijk toezicht:</strong> Stel een pincode in voor beperkte content</li>
<li><strong>Netwerk:</strong> Gebruik een bekabelde Ethernet-verbinding voor betere stabiliteit</li>
</ul>

<h2>Problemen oplossen</h2>
<p>Als u problemen ondervindt met ${app}, probeer dan deze oplossingen:</p>
<ul>
<li><strong>App laadt niet:</strong> Wis de cache, start het apparaat opnieuw op, installeer de app opnieuw</li>
<li><strong>Geen kanalen weergegeven:</strong> Controleer of uw abonnement actief is, laad de afspeellijst opnieuw</li>
<li><strong>Bufferen:</strong> Verlaag de videokwaliteit, gebruik een VPN, controleer uw internetsnelheid</li>
<li><strong>EPG werkt niet:</strong> Controleer de EPG-URL, werk EPG-gegevens bij, start de app opnieuw</li>
<li><strong>Audioproblemen:</strong> Controleer de audiotrack, pas de audiovertraging aan, wissel van speler</li>
</ul>

<h2>Veelgestelde vragen over ${app}</h2>
<div class="faq-item"><h3>Is ${app} gratis?</h3><p>${app} biedt een gratis versie met basisfuncties. De premiumversie ontgrendelt extra functies zoals opname, meerdere schermen en geavanceerde instellingen.</p></div>
<div class="faq-item"><h3>Kan ik ${app} op meerdere apparaten gebruiken?</h3><p>Ja, u kunt ${app} op meerdere apparaten installeren. U heeft de gegevens van uw IPTV-abonnement nodig voor elk apparaat.</p></div>
<div class="faq-item"><h3>Ondersteunt ${app} catch-up TV?</h3><p>Als uw IPTV-provider catch-up TV aanbiedt, kan ${app} gemiste content weergeven en afspelen via de EPG-interface.</p></div>
<div class="faq-item"><h3>Hoe werk ik ${app} bij?</h3><p>Werk bij via de app-winkel van uw apparaat of download de nieuwste versie van de officiële website.</p></div>`;
    },
    deviceSetup: (vars) => {
      const { device, app } = vars;
      return `
<h2>Introductie</h2>
<p>Deze uitgebreide gids laat u zien <strong>hoe u IPTV instelt op ${device}</strong>. Of u nu een beginner of een ervaren gebruiker bent, deze stap-voor-stap handleiding helpt u om IPTV binnen enkele minuten aan de praat te krijgen op uw ${device}.</p>

<h2>Wat u nodig heeft voordat u begint</h2>
<ul>
<li>Een werkende internetverbinding (minimaal 25 Mbps voor HD)</li>
<li>Een actief IPTV-abonnement</li>
<li>De gegevens van uw IPTV-provider (M3U-URL, Xtream Codes of Portal-URL)</li>
<li>Het apparaat ${device} volledig opgeladen of aangesloten</li>
<li>Een stabiele WiFi- of Ethernet-verbinding</li>
</ul>

<h2>Stap 1: Kies een IPTV-app voor ${device}</h2>
<p>De eerste stap is het selecteren van de juiste IPTV-app voor uw ${device}. Wij raden deze populaire opties aan:</p>
<ul>
<li><strong>IPTV Smarters Pro</strong> - Beste allround app, werkt op alle apparaten</li>
<li><strong>TiviMate</strong> - Beste voor Android TV-boxen en Firestick</li>
<li><strong>GSE Smart IPTV</strong> - Beste voor iPhone/iPad-gebruikers</li>
<li><strong>Perfect Player</strong> - Lichtgewicht en snel</li>
<li><strong>OTT Navigator</strong> - Rijk aan functies met uitstekende EPG-ondersteuning</li>
</ul>

<h2>Stap 2: Installeer de IPTV-app op ${device}</h2>
<p>${device === 'Amazon Fire TV Stick' ? "Ga naar Instellingen > Mijn Fire TV > Opties voor ontwikkelaars > Apps uit onbekende bronnen > Schakel Downloader in. Installeer Downloader vanuit de Amazon Appstore. Open Downloader en voer de URL van uw gekozen IPTV-app in. Download en installeer het APK-bestand." : "Open de app-winkel op uw " + device + ". Zoek naar uw gekozen IPTV-app. Tik op Installeren/Downloaden. Wacht tot de installatie is voltooid."}</p>

<h2>Stap 3: Configureer uw IPTV-abonnement</h2>
<p>Open de geïnstalleerde IPTV-app. U ziet een welkomstscherm met opties om uw abonnementsgegevens in te voeren:</p>
<ul>
<li><strong>M3U-lijst-URL:</strong> Kopieer en plak de M3U-link van uw IPTV-service</li>
<li><strong>Xtream Codes API:</strong> Voer de server-URL, gebruikersnaam en wachtwoord in</li>
<li><strong>Portal-URL:</strong> Voer de MAG/STB-portal-URL in als u dit systeem gebruikt</li>
</ul>
<p>Nadat u uw gegevens heeft ingevoerd, klikt u op Inloggen of Lijst laden. Uw kanalen worden automatisch geladen.</p>

<h2>Stap 4: Personaliseer uw IPTV-ervaring</h2>
<p>Zodra uw kanalen zijn geladen, kunt u de ervaring personaliseren:</p>
<ul>
<li>Maak een favorietenlijst met uw favoriete kanalen</li>
<li>Stel EPG (TV-gids) in met de EPG-URL van uw provider</li>
<li>Organiseer kanalen in aangepaste groepen</li>
<li>Stel indien nodig ouderlijk toezicht in</li>
<li>Configureer de videospeler-instellingen</li>
<li>Schakel automatische update van kanaallijsten in</li>
</ul>

<h2>Problemen met IPTV-installatie op ${device} oplossen</h2>
<ul>
<li><strong>Geen kanalen laden:</strong> Controleer het abonnement, laad de lijst opnieuw, start de app opnieuw</li>
<li><strong>Bufferen:</strong> Verlaag de kwaliteit, gebruik Ethernet, sluit achtergrond-apps</li>
<li><strong>App crasht:</strong> Wis de cache, werk de app bij, installeer opnieuw</li>
<li><strong>Audioproblemen:</strong> Controleer de audio-instellingen, wissel van speler</li>
<li><strong>EPG werkt niet:</strong> Werk EPG bij, controleer de URL, neem contact op met de provider</li>
</ul>

<h2>Veelgestelde vragen</h2>
<div class="faq-item"><h3>Kan ik IPTV gebruiken op mijn ${device}?</h3><p>Ja, IPTV werkt perfect op ${device}. Volg gewoon de bovenstaande stappen om een IPTV-app te installeren en uw abonnementsgegevens in te voeren.</p></div>
<div class="faq-item"><h3>Welke internetsnelheid heb ik nodig voor IPTV op ${device}?</h3><p>Voor HD-content: minimaal 25 Mbps. Voor 4K: minimaal 50 Mbps. Een bekabelde verbinding wordt aanbevolen voor betere prestaties.</p></div>
<div class="faq-item"><h3>Heb ik een VPN nodig voor IPTV op ${device}?</h3><p>Een VPN kan helpen om ISP-throttling te omzeilen en uw privacy te beschermen. Kies een snelle VPN met servers in de buurt van uw locatie.</p></div>`;
    },
    countryGuide: (vars) => {
      const { country, device, app } = vars;
      const langName = country.lang === 'ar' ? 'Arabisch' : country.lang === 'fr' ? 'Frans' : country.lang === 'es' ? 'Spaans' : country.lang === 'de' ? 'Duits' : country.lang === 'pt' ? 'Portugees' : country.lang === 'nl' ? 'Nederlands' : country.lang === 'tr' ? 'Turks' : country.lang === 'ru' ? 'Russisch' : 'Engels';
      return `
<h2>Introductie</h2>
<p>Bent u op zoek naar de <strong>beste IPTV-serviceprovider in ${country.name}</strong>? Deze uitgebreide gids helpt u het perfecte IPTV-abonnement te vinden voor het kijken naar ${country.name}-kanalen, lokale content en internationale programma's. Of u nu in ${country.name} woont of in het buitenland verblijft, wij hebben de beste aanbevelingen voor u.</p>

<h2>Waarom kiezen voor IPTV in ${country.name}?</h2>
<p>IPTV wordt steeds populairder in ${country.name} om verschillende redenen:</p>
<ul>
<li><strong>Kostenbesparing:</strong> IPTV is over het algemeen goedkoper dan traditionele kabel of satelliet</li>
<li><strong>Kanaalvariëteit:</strong> Toegang tot honderden ${country.name}-kanalen plus internationale content</li>
<li><strong>Flexibiliteit:</strong> Kijk op elk apparaat - tv, telefoon, tablet of computer</li>
<li><strong>Geen contracten:</strong> Maandelijkse abonnementen zonder langetermijnverplichtingen</li>
<li><strong>HD- en 4K-kwaliteit:</strong> Geniet van haarscherpe beeldkwaliteit</li>
<li><strong>Catch-up en VOD:</strong> Bekijk gemiste programma's en duizenden films on-demand</li>
</ul>

<h2>Beste IPTV-provider voor ${country.name}-kanalen</h2>
<p>Let bij het kiezen van een IPTV-provider voor ${country.name} op deze belangrijke kenmerken:</p>
<ul>
<li><strong>Lokale kanalen:</strong> Toegang tot ${country.name}-nieuws-, sport- en entertainmentkanalen</li>
<li><strong>Taalondersteuning:</strong> Interface en content in het ${langName}</li>
<li><strong>Betrouwbare servers:</strong> Snelle en stabiele streaming met minimale buffering</li>
<li><strong>Betaalmogelijkheden:</strong> In ${country.name} beschikbare betaalmethoden</li>
<li><strong>Ondersteuning:</strong> Klantenservice die de behoeften in ${country.name} begrijpt</li>
</ul>

<h2>Waar u op moet letten</h2>
<p>Onze aanbevolen IPTV-providers voor ${country.name} bieden deze functies:</p>
<ul>
<li><strong>Uitgebreide kanaallijst:</strong> ${Math.floor(Math.random() * 5000) + 5000}+ live kanalen inclusief alle grote ${country.name}-netwerken</li>
<li><strong>VOD-bibliotheek:</strong> ${Math.floor(Math.random() * 10000) + 10000}+ films en tv-programma's</li>
<li><strong>4K- en FHD-kwaliteit:</strong> Ultra HD- en Full HD-streamingopties</li>
<li><strong>EPG-gids:</strong> Elektronische programmagids voor eenvoudige kanaalnavigatie</li>
<li><strong>Anti-freeze-technologie:</strong> Stabiele servers met minimale buffering</li>
<li><strong>24/7 klantenservice:</strong> Hulp beschikbaar wanneer u het nodig heeft</li>
<li><strong>Gratis proefversie:</strong> Test de service voordat u zich abonneert</li>
<li><strong>Multi-apparaat:</strong> Kijk tegelijkertijd op meerdere apparaten</li>
</ul>

<h2>Zo bekijkt u ${country.name}-kanalen in het buitenland</h2>
<p>Als u een expat uit ${country.name} bent of naar het buitenland reist, kunt u met IPTV al uw favoriete ${country.name}-kanalen overal ter wereld bekijken. Zo doet u dat:</p>
<ol>
<li>Kies een betrouwbare IPTV-provider met ${country.name}-kanalen</li>
<li>Abonneer u op hun service (gebruik eerst de gratis proefversie)</li>
<li>Installeer de IPTV-app op uw apparaat</li>
<li>Voer uw abonnementsgegevens in</li>
<li>Begin onmiddellijk met het kijken naar ${country.name}-tv-kanalen</li>
</ol>

<h2>IPTV voor sportfans in ${country.name}</h2>
<p>Sportfans in ${country.name} zijn dol op IPTV vanwege de toegang tot live sportevenementen van over de hele wereld. Bekijk ${country.name === 'United States' ? 'de NFL, NBA, MLB, NHL' : country.name === 'United Kingdom' ? 'de Premier League, de Champions League' : country.name === 'France' ? 'de Ligue 1, het Top 14' : country.name === 'Spain' ? 'La Liga, de ACB' : country.name === 'Germany' ? 'de Bundesliga, de DEL' : country.name === 'Italy' ? 'de Serie A, de Lega Basket' : country.name === 'Brazil' ? 'de Brasileirão, de NBA' : 'lokale en internationale sporten'} live met IPTV.</p>

<h2>Veelgestelde vragen over IPTV in ${country.name}</h2>
<div class="faq-item"><h3>Is IPTV legaal in ${country.name}?</h3><p>De IPTV-technologie zelf is legaal. Kies altijd gelicentieerde providers die de juiste contentrechten hebben. Wij raden aan om legitieme IPTV-diensten te gebruiken.</p></div>
<div class="faq-item"><h3>Wat is de beste IPTV-app voor gebruikers in ${country.name}?</h3><p>Populaire opties zijn TiviMate, IPTV Smarters Pro, GSE Smart IPTV en Perfect Player. Ze werken allemaal uitstekend voor ${country.name}-kanalen.</p></div>
<div class="faq-item"><h3>Kan ik ${country.name}-tv in het buitenland kijken met IPTV?</h3><p>Ja! IPTV werkt overal ter wereld met een internetverbinding. U kunt ${country.name}-kanalen vanuit elk land bekijken.</p></div>
<div class="faq-item"><h3>Hoeveel kost IPTV in ${country.name}?</h3><p>De prijzen variëren per provider. Reken op ongeveer 5-15 $ per maand voor een kwaliteitsservice met ${country.name}-kanalen.</p></div>`;
    },
    faqArticle: (vars) => {
      const { faqItem, app, slugify } = vars;
      return `
<h2>${faqItem.q}</h2>
<p>${faqItem.a}</p>

<h2>Gedetailleerde uitleg</h2>
<p>Dit is een van de meest gestelde vragen over IPTV-technologie. Inzicht in ${faqItem.q.toLowerCase()} is essentieel voor de beste IPTV-ervaring. In deze uitgebreide gids geven we gedetailleerde informatie en praktische tips om het meeste uit uw IPTV-service te halen.</p>

<h2>Belangrijke punten om te onthouden</h2>
<ul>
<li>Gebruik altijd een betrouwbare internetverbinding voor de beste prestaties</li>
<li>Kies een gerenommeerde IPTV-provider met goede beoordelingen</li>
<li>Houd uw IPTV-apps up-to-date met de nieuwste versies</li>
<li>Gebruik indien nodig een VPN voor extra privacy</li>
<li>Test diensten met gratis proefversies voordat u zich vastlegt</li>
</ul>

<h2>Gerelateerde IPTV-onderwerpen</h2>
<ul>
<li><a href="/${vars.langCode}/${vars.slugify('What is IPTV and how does it work')}-1.html">Wat is IPTV? Volledige gids</a></li>
<li><a href="/${vars.langCode}/${vars.slugify('Best IPTV Services 2026')}-1.html">Beste IPTV-diensten 2026</a></li>
<li><a href="/${vars.langCode}/${vars.slugify('How to Set Up IPTV on Firestick')}-1.html">IPTV op Firestick</a></li>
<li><a href="/${vars.langCode}/${vars.slugify(`How to Install ${app} on Any Device`)}-1.html">${app} installeren</a></li>
</ul>`;
    },
    generic: (vars) => {
      const { title, device, app, country, faqItem } = vars;
      return `
<h2>Introductie tot ${title}</h2>
<p>IPTV-technologie heeft een revolutie teweeggebracht in de manier waarop we televisie kijken. In tegenstelling tot traditionele kabel of satelliet, streamt IPTV content via internetnetwerken en biedt het meer flexibiliteit, meer kanalen en betere prijzen. Het instellen van IPTV is eenvoudig en kan op vrijwel elk apparaat met een internetverbinding worden gedaan.</p>

<h2>Waarom kiezen voor IPTV?</h2>
<p>IPTV biedt talloze voordelen ten opzichte van traditionele tv: lagere kosten, meer kanalen, betere kwaliteit en de mogelijkheid om op elk apparaat te kijken. Met duizenden kanalen van over de hele wereld is IPTV de toekomst van televisie.</p>

<h2>Aan de slag</h2>
<p>Om te beginnen met IPTV heeft u nodig: een stabiele internetverbinding (25+ Mbps voor HD), een compatibel apparaat, een IPTV-app en een abonnement bij een betrouwbare provider. Volg onze <a href="/${vars.langCode}/${vars.slugify(`How to Set Up IPTV on ${device}`)}-1.html">installatiehandleiding voor ${device}</a> voor gedetailleerde instructies.</p>

<h2>Beste apps om te gebruiken</h2>
<p>Wij raden aan om <a href="/${vars.langCode}/${vars.slugify(`How to Install ${app} on Any Device`)}-1.html">${app}</a> te gebruiken voor de beste streamingervaring. Het biedt uitstekende functies, regelmatige updates en geweldige ondersteuning voor alle apparaten.</p>

<h2>Internationale kanalen</h2>
<p>Een van de grootste voordelen van IPTV is de toegang tot internationale kanalen. Of u nu op zoek bent naar <a href="/${vars.langCode}/${vars.slugify(`Best IPTV Service Provider in ${country.name}`)}-1.html">${country.name}-kanalen</a> of content uit een ander land, IPTV biedt duizenden kanalen wereldwijd.</p>

<div class="faq-item"><h3>Veelgestelde vragen</h3><p>Voor antwoorden op veelgestelde vragen over IPTV, raadpleeg onze <a href="/${vars.langCode}/${vars.slugify(faqItem.q.substring(0, 30))}-1.html">FAQ-sectie</a> over ${faqItem.q.toLowerCase()}.</p></div>`;
    },
    translateTitle: (title, vars) => {
      const { app, device, country, faqItem } = vars;
      const exact = {
        'How to Install IPTV on Any Device - Universal Guide': 'IPTV installeren op elk apparaat - Universele gids',
        'IPTV Subscription Guide 2026: Everything You Need to Know': 'IPTV-abonnementsgids 2026: Alles wat u moet weten',
        'IPTV vs Cable vs Satellite: Complete Comparison Guide': 'IPTV vs kabel vs satelliet: Volledige vergelijkingsgids',
        'Best IPTV Service Providers Worldwide 2026': 'Beste IPTV-serviceproviders wereldwijd 2026',
        'IPTV for Beginners: Complete Getting Started Guide': 'IPTV voor beginners: Volledige startgids',
        'How to Watch Live Sports on IPTV: Complete Sports Guide': 'Live sport kijken op IPTV: Volledige sportgids',
        'IPTV VPN Setup: Best VPNs for IPTV Streaming 2026': 'IPTV VPN-installatie: Beste VPN\'s voor IPTV-streaming 2026',
        'How to Create Perfect IPTV Playlist - M3U Editor Guide': 'De perfecte IPTV-afspeellijst maken - M3U-editor gids',
        'IPTV Panel Setup: Complete Reseller Guide': 'IPTV-paneelinstallatie: Volledige reseller-gids',
        'IPTV Movie Streaming: Best VOD Services 2026': 'IPTV-films streamen: Beste VOD-diensten 2026',
        'IPTV for Kids: Family-Friendly Streaming Guide': 'IPTV voor kinderen: Gezinsvriendelijke streaminggids',
        'IPTV for Expats: Watch Home Country TV Abroad': 'IPTV voor expats: Bekijk tv uit uw thuisland in het buitenland',
        'IPTV Business Solutions: Commercial IPTV for Hotels': 'IPTV-oplossingen voor bedrijven: Commerciële IPTV voor hotels',
        'IPTV Multi-Room Setup: Watch TV in Every Room': 'IPTV multiroom-installatie: Kijk tv in elke kamer',
        'How to Fix All IPTV Problems: Ultimate Troubleshooting': 'Alle IPTV-problemen oplossen: Ultieme probleemoplossing',
        'IPTV Sports Packages: Best Sports Channels Worldwide': 'IPTV-sportpakketten: Beste sportkanalen wereldwijd',
        'IPTV 4K Streaming: How to Watch Ultra HD Content': 'IPTV 4K-streaming: Ultra HD-content bekijken',
        'Best IPTV Apps for Android TV Box 2026': 'Beste IPTV-apps voor Android TV Box 2026',
        'Best IPTV Apps for Firestick 2026': 'Beste IPTV-apps voor Firestick 2026',
        'Best IPTV Apps for Samsung Smart TV 2026': 'Beste IPTV-apps voor Samsung Smart TV 2026',
        'Best IPTV Apps for LG WebOS TV 2026': 'Beste IPTV-apps voor LG WebOS TV 2026',
        'Best IPTV Apps for iPhone and iPad 2026': 'Beste IPTV-apps voor iPhone en iPad 2026',
        'Best IPTV Apps for Apple TV 2026': 'Beste IPTV-apps voor Apple TV 2026',
        'Best IPTV Apps for Windows PC 2026': 'Beste IPTV-apps voor Windows PC 2026',
        'Best IPTV Apps for Mac 2026': 'Beste IPTV-apps voor Mac 2026',
        'Best IPTV Apps for Roku 2026': 'Beste IPTV-apps voor Roku 2026',
        'Best IPTV Apps for MAG Box 2026': 'Beste IPTV-apps voor MAG Box 2026',
        'Best IPTV Apps for Formuler 2026': 'Beste IPTV-apps voor Formuler 2026',
        'Best IPTV Apps for Chromecast 2026': 'Beste IPTV-apps voor Chromecast 2026',
        'Best IPTV Apps for Nvidia Shield 2026': 'Beste IPTV-apps voor Nvidia Shield 2026',
        'Best IPTV Apps for Xbox 2026': 'Beste IPTV-apps voor Xbox 2026',
        'Best IPTV Apps for PlayStation 2026': 'Beste IPTV-apps voor PlayStation 2026',
        'Best IPTV Apps for Linux 2026': 'Beste IPTV-apps voor Linux 2026',
        'Best IPTV Apps for Android Smartphone 2026': 'Beste IPTV-apps voor Android-smartphone 2026',
        'Best IPTV Apps for Smart TV 2026': 'Beste IPTV-apps voor Smart TV 2026'
      };
      if (exact[title]) return exact[title];
      if (title.startsWith('How to Install ') && title.includes(' on Any Device - Complete Setup Guide')) {
        return 'Hoe installeer je ' + title.replace('How to Install ', '').replace(' on Any Device - Complete Setup Guide', '') + ' op elk apparaat - Volledige installatiegids';
      }
      if (title.startsWith('How to Set Up IPTV on ') && title.endsWith(' - Step by Step Guide')) {
        return 'Hoe stel je IPTV in op ' + title.replace('How to Set Up IPTV on ', '').replace(' - Step by Step Guide', '') + ' - Stap-voor-stap handleiding';
      }
      if (title.startsWith('Best IPTV Service Provider in ') && title.includes(' Channels 2026')) {
        var c = title.replace('Best IPTV Service Provider in ', '').split(' for ')[0];
        return 'Beste IPTV-serviceprovider in ' + c + ' voor ' + c + '-kanalen 2026';
      }
      if (title.endsWith(' - Complete Guide & Answer')) {
        return title.replace(' - Complete Guide & Answer', '') + ' - Volledige gids en antwoord';
      }
      return title;
    },
    translateExcerpt: (type, vars) => {
      const { app, device, country, faqItem } = vars;
      const excerpts = {
        appInstall: 'Stap-voor-stap handleiding voor het installeren van ' + app + ' op elk apparaat. Volledige tutorial voor het instellen van ' + app + ' met schermafbeeldingen en tips voor het oplossen van problemen voor ' + device + '.',
        deviceSetup: 'Volledige stap-voor-stap handleiding voor het instellen van IPTV op ' + device + '. Leer hoe u IPTV-apps installeert, afspeellijsten configureert en direct begint met kijken op ' + device + '.',
        countryGuide: 'Vind de beste IPTV-serviceprovider in ' + country.name + '. Vergelijk de beste IPTV-diensten voor ' + country.name + '-kanalen, prijzen en functies. Bekijk overal ' + country.name + '-tv.',
        faqArticle: faqItem.q + ' - Gedetailleerd antwoord en volledige gids over IPTV. Leer alles over deze veelgestelde IPTV-vraag.',
        generic: 'IPTV-technologie heeft een revolutie teweeggebracht in de manier waarop we tv kijken. Volledige gids over IPTV-installatie, apps en probleemoplossing voor ' + device + '.'
      };
      return excerpts;
    },
    translateWhatsApp: (type, vars) => {
      const { app, device, country, faqItem } = vars;
      const messages = {
        appInstall: 'Hallo! Ik heb hulp nodig bij het installeren van ' + encodeURIComponent(app),
        deviceSetup: 'Hallo! Ik heb hulp nodig bij het instellen van IPTV op ' + encodeURIComponent(device),
        countryGuide: 'Hallo! Ik wil de beste IPTV voor ' + encodeURIComponent(country.name),
        faqArticle: 'Hallo! Ik heb een vraag over ' + encodeURIComponent(faqItem.q.substring(0, 50)),
        generic: 'Hallo! Ik wil beginnen met IPTV'
      };
      return messages;
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CONTENT_TRANSLATIONS };
}
