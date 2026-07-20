  de: {
    appInstall: (vars) => {
      const { app, device } = vars;
      return `
<h2>Einleitung</h2>
<p>Willkommen zu unserer vollständigen Anleitung zur <strong>Installation und Einrichtung von ${app}</strong> für IPTV-Streaming. ${app} ist eine der beliebtesten IPTV-Anwendungen auf dem Markt und bietet eine benutzerfreundliche Oberfläche, leistungsstarke Funktionen und breite Gerätekompatibilität. Diese Anleitung führt Sie Schritt für Schritt durch die Installation auf ${device} und anderen Geräten.</p>

<h2>Was ist ${app}?</h2>
<p>${app} ist ein funktionsreicher IPTV-Player, mit dem Sie Live-Fernsehkanäle, Filme, Serien und Video-on-Demand-Inhalte von Ihrem IPTV-Anbieter streamen können. Er unterstützt M3U-Playlists, Xtream Codes API und verfügt über eine integrierte EPG-Unterstützung für TV-Programmführer. Die App ist auf mehreren Plattformen verfügbar, darunter Android, iOS, Windows und Smart TV.</p>

<h2>Hauptfunktionen von ${app}</h2>
<ul>
<li>Unterstützung für M3U-Listen und Xtream Codes API</li>
<li>Integrierter elektronischer Programmführer (EPG)</li>
<li>Kindersicherung und Inhaltsfilterung</li>
<li>Multi-Screen- und Multi-Geräte-Unterstützung</li>
<li>Aufnahme- und Catch-up-TV-Funktionen</li>
<li>Anpassbare Senderlisten und Favoriten</li>
<li>Integration externer Player</li>
<li>Automatische Aktualisierung der Senderlisten</li>
</ul>

<h2>Installation von ${app} auf ${device}</h2>
<p>Folgen Sie diesen Schritten, um ${app} auf Ihrem ${device} für das beste IPTV-Erlebnis zu installieren:</p>
<ol>
<li>Schalten Sie Ihren ${device} ein und stellen Sie sicher, dass er mit dem Internet verbunden ist</li>
<li>Öffnen Sie den App Store oder die entsprechende Download-Quelle für Ihr Gerät</li>
<li>Suchen Sie in der Suchleiste nach "${app}"</li>
<li>Wählen Sie die offizielle ${app}-App aus den Ergebnissen</li>
<li>Klicken Sie auf Installieren / Herunterladen und warten Sie, bis die Installation abgeschlossen ist</li>
<li>Öffnen Sie nach der Installation die ${app}-App</li>
<li>Geben Sie Ihre IPTV-Anbieterdaten ein (M3U-URL, Xtream Codes oder Portal-URL)</li>
<li>Warten Sie, bis die Senderliste geladen ist, und beginnen Sie mit dem Anschauen</li>
</ol>

<h2>Installation auf anderen Geräten</h2>
<p>${app} kann auch auf vielen anderen Geräten installiert werden. Hier sind kurze Anleitungen für beliebte Plattformen:</p>
<p><strong>Firestick:</strong> Aktivieren Sie Apps aus unbekannten Quellen in den Entwickleroptionen. Installieren Sie Downloader aus dem Amazon Store. Geben Sie die Download-URL von ${app} in Downloader ein. Installieren Sie die App und geben Sie Ihre IPTV-Zugangsdaten ein.</p>
<p><strong>Android TV:</strong> Öffnen Sie den Google Play Store, suchen Sie nach ${app}, installieren Sie die App, öffnen Sie sie und geben Sie die Anbieterdaten ein.</p>
<p><strong>Samsung/LG Smart TV:</strong> Einige Versionen erfordern möglicherweise ein Sideloading. Prüfen Sie, ob die App im App Store Ihres TVs verfügbar ist, oder nutzen Sie stattdessen Smart IPTV.</p>
<p><strong>iPhone/iPad:</strong> Verfügbar im App Store. Laden Sie die App herunter, installieren Sie sie und geben Sie die URL und Zugangsdaten Ihres Anbieters ein.</p>
<p><strong>Windows PC:</strong> Laden Sie die App von der offiziellen Website oder dem Microsoft Store herunter. Installieren und konfigurieren Sie sie mit Ihrem IPTV-Abonnement.</p>

<h2>Konfigurationstipps</h2>
<p>Konfigurieren Sie ${app} nach der Installation für das beste Erlebnis:</p>
<ul>
<li><strong>EPG-Einrichtung:</strong> Geben Sie Ihre EPG-URL in den Einstellungen ein, um TV-Programmzeiten zu erhalten</li>
<li><strong>Videoplayer:</strong> Wählen Sie zwischen dem integrierten Player oder einem externen Player (VLC, MX Player)</li>
<li><strong>Puffergröße:</strong> Erhöhen Sie die Puffergröße, wenn Sie Probleme mit Pufferungen haben</li>
<li><strong>Automatische Aktualisierung:</strong> Aktivieren Sie die automatische Aktualisierung von Playlists und EPG</li>
<li><strong>Kindersicherung:</strong> Legen Sie eine PIN für eingeschränkte Inhalte fest</li>
<li><strong>Netzwerk:</strong> Verwenden Sie eine kabelgebundene Ethernet-Verbindung für bessere Stabilität</li>
</ul>

<h2>Fehlerbehebung</h2>
<p>Wenn Sie Probleme mit ${app} haben, versuchen Sie diese Lösungen:</p>
<ul>
<li><strong>App lädt nicht:</strong> Leeren Sie den Cache, starten Sie das Gerät neu, installieren Sie die App neu</li>
<li><strong>Keine Sender angezeigt:</strong> Prüfen Sie, ob Ihr Abonnement aktiv ist, laden Sie die Playlist neu</li>
<li><strong>Pufferung:</strong> Reduzieren Sie die Videoqualität, verwenden Sie ein VPN, überprüfen Sie Ihre Internetgeschwindigkeit</li>
<li><strong>EPG funktioniert nicht:</strong> Überprüfen Sie die EPG-URL, aktualisieren Sie die EPG-Daten, starten Sie die App neu</li>
<li><strong>Audio-Probleme:</strong> Überprüfen Sie die Audiospur, passen Sie die Audioverzögerung an, wechseln Sie den Player</li>
</ul>

<h2>Häufig gestellte Fragen zu ${app}</h2>
<div class="faq-item"><h3>Ist ${app} kostenlos?</h3><p>${app} bietet eine kostenlose Version mit grundlegenden Funktionen. Die Premium-Version schaltet zusätzliche Funktionen wie Aufnahme, Multi-Screen und erweiterte Einstellungen frei.</p></div>
<div class="faq-item"><h3>Kann ich ${app} auf mehreren Geräten nutzen?</h3><p>Ja, Sie können ${app} auf mehreren Geräten installieren. Sie benötigen die Zugangsdaten Ihres IPTV-Abonnements für jedes Gerät.</p></div>
<div class="faq-item"><h3>Unterstützt ${app} Catch-up-TV?</h3><p>Wenn Ihr IPTV-Anbieter Catch-up-TV anbietet, kann ${app} die verpassten Inhalte über die EPG-Oberfläche anzeigen und abspielen.</p></div>
<div class="faq-item"><h3>Wie aktualisiere ich ${app}?</h3><p>Aktualisieren Sie die App über den App Store Ihres Geräts oder laden Sie die neueste Version von der offiziellen Website herunter.</p></div>`;
    },
    deviceSetup: (vars) => {
      const { device, app } = vars;
      return `
<h2>Einleitung</h2>
<p>Diese umfassende Anleitung zeigt Ihnen, <strong>wie Sie IPTV auf ${device} einrichten</strong>. Egal, ob Sie Anfänger oder erfahrener Benutzer sind – dieses Schritt-für-Schritt-Tutorial hilft Ihnen, IPTV in wenigen Minuten auf Ihrem ${device} zum Laufen zu bringen.</p>

<h2>Was Sie vor dem Start benötigen</h2>
<ul>
<li>Eine funktionierende Internetverbindung (mindestens 25 Mbps für HD)</li>
<li>Ein aktives IPTV-Abonnement</li>
<li>Die Details Ihres IPTV-Anbieters (M3U-URL, Xtream Codes oder Portal-URL)</li>
<li>Das Gerät ${device} vollständig aufgeladen oder angeschlossen</li>
<li>Eine stabile WiFi- oder Ethernet-Verbindung</li>
</ul>

<h2>Schritt 1: Wählen Sie eine IPTV-App für ${device}</h2>
<p>Der erste Schritt ist die Auswahl der richtigen IPTV-App für Ihren ${device}. Wir empfehlen diese beliebten Optionen:</p>
<ul>
<li><strong>IPTV Smarters Pro</strong> - Beste Allround-App, funktioniert auf allen Geräten</li>
<li><strong>TiviMate</strong> - Am besten für Android-TV-Boxen und Firestick</li>
<li><strong>GSE Smart IPTV</strong> - Am besten für iPhone/iPad-Benutzer</li>
<li><strong>Perfect Player</strong> - Leichtgewichtig und schnell</li>
<li><strong>OTT Navigator</strong> - Funktionsreich mit ausgezeichneter EPG-Unterstützung</li>
</ul>

<h2>Schritt 2: Installieren Sie die IPTV-App auf ${device}</h2>
<p>${device === 'Amazon Fire TV Stick' ? "Gehen Sie zu Einstellungen > Mein Fire TV > Entwickleroptionen > Apps aus unbekannten Quellen > Aktivieren Sie Downloader. Installieren Sie Downloader aus dem Amazon Appstore. Öffnen Sie Downloader und geben Sie die URL Ihrer gewählten IPTV-App ein. Laden Sie die APK-Datei herunter und installieren Sie sie." : "Öffnen Sie den App Store auf Ihrem " + device + ". Suchen Sie nach Ihrer gewählten IPTV-App. Tippen Sie auf Installieren/Herunterladen. Warten Sie, bis die Installation abgeschlossen ist."}</p>

<h2>Schritt 3: Konfigurieren Sie Ihr IPTV-Abonnement</h2>
<p>Öffnen Sie die installierte IPTV-App. Sie sehen einen Startbildschirm mit Optionen zur Eingabe Ihrer Abonnementdaten:</p>
<ul>
<li><strong>M3U-Listen-URL:</strong> Kopieren und fügen Sie den M3U-Link Ihres IPTV-Dienstes ein</li>
<li><strong>Xtream Codes API:</strong> Geben Sie die Server-URL, den Benutzernamen und das Passwort ein</li>
<li><strong>Portal-URL:</strong> Geben Sie die MAG/STB-Portal-URL ein, wenn Sie dieses System verwenden</li>
</ul>
<p>Nachdem Sie Ihre Daten eingegeben haben, klicken Sie auf Anmelden oder Liste laden. Ihre Sender werden automatisch geladen.</p>

<h2>Schritt 4: Passen Sie Ihr IPTV-Erlebnis an</h2>
<p>Sobald Ihre Sender geladen sind, passen Sie das Erlebnis an:</p>
<ul>
<li>Erstellen Sie eine Favoritenliste mit Ihren Lieblingssendern</li>
<li>Richten Sie EPG (TV-Programmführer) mit der EPG-URL Ihres Anbieters ein</li>
<li>Organisieren Sie die Sender in benutzerdefinierten Gruppen</li>
<li>Legen Sie bei Bedarf die Kindersicherung fest</li>
<li>Konfigurieren Sie die Videoplayer-Einstellungen</li>
<li>Aktivieren Sie die automatische Aktualisierung der Senderlisten</li>
</ul>

<h2>Fehlerbehebung bei der IPTV-Einrichtung auf ${device}</h2>
<ul>
<li><strong>Keine Sender werden geladen:</strong> Überprüfen Sie das Abonnement, laden Sie die Liste neu, starten Sie die App neu</li>
<li><strong>Pufferung:</strong> Reduzieren Sie die Qualität, verwenden Sie Ethernet, schließen Sie Hintergrund-Apps</li>
<li><strong>App stürzt ab:</strong> Leeren Sie den Cache, aktualisieren Sie die App, installieren Sie sie neu</li>
<li><strong>Audio-Probleme:</strong> Überprüfen Sie die Audioeinstellungen, wechseln Sie den Player</li>
<li><strong>EPG funktioniert nicht:</strong> Aktualisieren Sie das EPG, überprüfen Sie die URL, kontaktieren Sie den Anbieter</li>
</ul>

<h2>Häufig gestellte Fragen</h2>
<div class="faq-item"><h3>Kann ich IPTV auf meinem ${device} nutzen?</h3><p>Ja, IPTV funktioniert einwandfrei auf ${device}. Befolgen Sie einfach die obigen Schritte, um eine IPTV-App zu installieren und Ihre Abonnementdaten einzugeben.</p></div>
<div class="faq-item"><h3>Welche Internetgeschwindigkeit brauche ich für IPTV auf ${device}?</h3><p>Für HD-Inhalte: mindestens 25 Mbps. Für 4K: mindestens 50 Mbps. Eine kabelgebundene Verbindung wird für eine bessere Leistung empfohlen.</p></div>
<div class="faq-item"><h3>Brauche ich ein VPN für IPTV auf ${device}?</h3><p>Ein VPN kann helfen, ISP-Drosselung zu umgehen und Ihre Privatsphäre zu schützen. Wählen Sie ein schnelles VPN mit Servern in Ihrer Nähe.</p></div>`;
    },
    countryGuide: (vars) => {
      const { country, device, app } = vars;
      const langName = country.lang === 'ar' ? 'Arabisch' : country.lang === 'fr' ? 'Französisch' : country.lang === 'es' ? 'Spanisch' : country.lang === 'de' ? 'Deutsch' : country.lang === 'pt' ? 'Portugiesisch' : country.lang === 'nl' ? 'Niederländisch' : country.lang === 'tr' ? 'Türkisch' : country.lang === 'ru' ? 'Russisch' : 'Englisch';
      return `
<h2>Einleitung</h2>
<p>Suchen Sie nach dem <strong>besten IPTV-Dienstanbieter in ${country.name}</strong>? Diese umfassende Anleitung hilft Ihnen, das perfekte IPTV-Abonnement zu finden, um ${country.name}-Sender, lokale Inhalte und internationale Programme anzusehen. Egal, ob Sie in ${country.name} leben oder im Ausland sind – wir haben die besten Empfehlungen für Sie.</p>

<h2>Warum IPTV in ${country.name} wählen?</h2>
<p>IPTV wird in ${country.name} aus mehreren Gründen immer beliebter:</p>
<ul>
<li><strong>Kostenersparnis:</strong> IPTV ist in der Regel günstiger als herkömmliches Kabel oder Satellit</li>
<li><strong>Sendervielfalt:</strong> Zugriff auf hunderte ${country.name}-Sender plus internationale Inhalte</li>
<li><strong>Flexibilität:</strong> Sehen Sie auf jedem Gerät – TV, Telefon, Tablet oder Computer</li>
<li><strong>Keine Vertragsbindung:</strong> Monatliche Abonnements ohne langfristige Verpflichtungen</li>
<li><strong>HD- und 4K-Qualität:</strong> Genießen Sie gestochen scharfe Bildqualität</li>
<li><strong>Catch-up und VOD:</strong> Sehen Sie verpasste Sendungen und tausende Filme auf Abruf</li>
</ul>

<h2>Bester IPTV-Anbieter für ${country.name}-Sender</h2>
<p>Achten Sie bei der Auswahl eines IPTV-Anbieters für ${country.name} auf diese Hauptmerkmale:</p>
<ul>
<li><strong>Lokale Sender:</strong> Zugriff auf ${country.name}-Nachrichten-, Sport- und Unterhaltungssender</li>
<li><strong>Sprachunterstützung:</strong> Benutzeroberfläche und Inhalte auf ${langName}</li>
<li><strong>Zuverlässige Server:</strong> Schnelles und stabiles Streaming mit minimaler Pufferung</li>
<li><strong>Zahlungsoptionen:</strong> In ${country.name} verfügbare Zahlungsmethoden</li>
<li><strong>Support:</strong> Kundendienst, der die Bedürfnisse in ${country.name} versteht</li>
</ul>

<h2>Wichtige Funktionen</h2>
<p>Unsere empfohlenen IPTV-Anbieter für ${country.name} bieten diese Funktionen:</p>
<ul>
<li><strong>Umfangreiche Senderliste:</strong> ${Math.floor(Math.random() * 5000) + 5000}+ Live-Sender einschließlich aller wichtigen ${country.name}-Netzwerke</li>
<li><strong>VOD-Bibliothek:</strong> ${Math.floor(Math.random() * 10000) + 10000}+ Filme und TV-Sendungen</li>
<li><strong>4K- und FHD-Qualität:</strong> Ultra HD- und Full HD-Streaming-Optionen</li>
<li><strong>EPG-Programmführer:</strong> Elektronischer Programmführer für einfache Sender-Navigation</li>
<li><strong>Anti-Einfrier-Technologie:</strong> Stabile Server mit minimaler Pufferung</li>
<li><strong>24/7-Kundensupport:</strong> Hilfe, wenn Sie sie brauchen</li>
<li><strong>Kostenlose Testversion:</strong> Testen Sie den Dienst vor dem Abschluss eines Abonnements</li>
<li><strong>Multi-Gerät:</strong> Gleichzeitiges Ansehen auf mehreren Geräten</li>
</ul>

<h2>So sehen Sie ${country.name}-Sender im Ausland</h2>
<p>Wenn Sie ein ${country.name}-Expat sind oder ins Ausland reisen, ermöglicht Ihnen IPTV, alle Ihre Lieblingssender aus ${country.name} von überall auf der Welt zu sehen. So geht's:</p>
<ol>
<li>Wählen Sie einen zuverlässigen IPTV-Anbieter mit ${country.name}-Sendern</li>
<li>Abonnieren Sie dessen Dienst (nutzen Sie zuerst die kostenlose Testversion)</li>
<li>Installieren Sie die IPTV-App auf Ihrem Gerät</li>
<li>Geben Sie Ihre Abonnementdaten ein</li>
<li>Beginnen Sie sofort mit dem Anschauen von ${country.name}-TV-Sendern</li>
</ol>

<h2>IPTV für Sportfans in ${country.name}</h2>
<p>Sportfans in ${country.name} lieben IPTV für den Zugang zu Live-Sportereignissen aus der ganzen Welt. Sehen Sie ${country.name === 'United States' ? 'die NFL, NBA, MLB, NHL' : country.name === 'United Kingdom' ? 'die Premier League, die Champions League' : country.name === 'France' ? 'die Ligue 1, das Top 14' : country.name === 'Spain' ? 'La Liga, die ACB' : country.name === 'Germany' ? 'die Bundesliga, die DEL' : country.name === 'Italy' ? 'die Serie A, die Lega Basket' : country.name === 'Brazil' ? 'die Brasileirão, die NBA' : 'lokale und internationale Sportarten'} live mit IPTV.</p>

<h2>Häufig gestellte Fragen zu IPTV in ${country.name}</h2>
<div class="faq-item"><h3>Ist IPTV in ${country.name} legal?</h3><p>Die IPTV-Technologie an sich ist legal. Wählen Sie immer lizenzierte Anbieter, die über die entsprechenden Inhaltsrechte verfügen. Wir empfehlen die Nutzung legitimer IPTV-Dienste.</p></div>
<div class="faq-item"><h3>Welche ist die beste IPTV-App für Benutzer in ${country.name}?</h3><p>Beliebte Optionen sind TiviMate, IPTV Smarters Pro, GSE Smart IPTV und Perfect Player. Alle funktionieren hervorragend für ${country.name}-Sender.</p></div>
<div class="faq-item"><h3>Kann ich ${country.name}-TV im Ausland mit IPTV sehen?</h3><p>Ja! IPTV funktioniert überall auf der Welt mit einer Internetverbindung. Sie können ${country.name}-Sender von jedem Land aus sehen.</p></div>
<div class="faq-item"><h3>Wie viel kostet IPTV in ${country.name}?</h3><p>Die Preise variieren je nach Anbieter. Rechnen Sie mit etwa 5-15 $ pro Monat für einen qualitativ hochwertigen Dienst mit ${country.name}-Sendern.</p></div>`;
    },
    faqArticle: (vars) => {
      const { faqItem, app, slugify } = vars;
      return `
<h2>${faqItem.q}</h2>
<p>${faqItem.a}</p>

<h2>Ausführliche Erklärung</h2>
<p>Dies ist eine der am häufigsten gestellten Fragen zur IPTV-Technologie. Das Verständnis von ${faqItem.q.toLowerCase()} ist entscheidend, um das beste IPTV-Erlebnis zu erhalten. In diesem umfassenden Leitfaden liefern wir detaillierte Informationen und praktische Tipps, damit Sie das Beste aus Ihrem IPTV-Dienst herausholen.</p>

<h2>Wichtige Punkte zum Merken</h2>
<ul>
<li>Verwenden Sie immer eine zuverlässige Internetverbindung für die beste Leistung</li>
<li>Wählen Sie einen seriösen IPTV-Anbieter mit guten Bewertungen</li>
<li>Halten Sie Ihre IPTV-Apps auf dem neuesten Stand</li>
<li>Verwenden Sie bei Bedarf ein VPN für mehr Privatsphäre</li>
<li>Testen Sie Dienste mit kostenlosen Testversionen, bevor Sie sich festlegen</li>
</ul>

<h2>Verwandte IPTV-Themen</h2>
<ul>
<li><a href="/${vars.langCode}/${vars.slugify('What is IPTV and how does it work')}-1.html">Was ist IPTV? Vollständiger Leitfaden</a></li>
<li><a href="/${vars.langCode}/${vars.slugify('Best IPTV Services 2026')}-1.html">Beste IPTV-Dienste 2026</a></li>
<li><a href="/${vars.langCode}/${vars.slugify('How to Set Up IPTV on Firestick')}-1.html">IPTV auf Firestick</a></li>
<li><a href="/${vars.langCode}/${vars.slugify(`How to Install ${app} on Any Device`)}-1.html">${app} installieren</a></li>
</ul>`;
    },
    generic: (vars) => {
      const { title, device, app, country, faqItem } = vars;
      return `
<h2>Einführung in ${title}</h2>
<p>Die IPTV-Technologie hat die Art und Weise revolutioniert, wie wir fernsehen. Anders als herkömmliches Kabel oder Satellit überträgt IPTV Inhalte über Internetnetzwerke und bietet mehr Flexibilität, mehr Sender und bessere Preise. Die Einrichtung von IPTV ist einfach und kann auf praktisch jedem Gerät mit Internetverbindung durchgeführt werden.</p>

<h2>Warum IPTV wählen?</h2>
<p>IPTV bietet zahlreiche Vorteile gegenüber herkömmlichem Fernsehen: niedrigere Kosten, mehr Sender, bessere Qualität und die Möglichkeit, auf jedem Gerät zu sehen. Mit tausenden von Sendern aus der ganzen Welt ist IPTV die Zukunft des Fernsehens.</p>

<h2>Erste Schritte</h2>
<p>Um mit IPTV zu beginnen, benötigen Sie: eine stabile Internetverbindung (25+ Mbps für HD), ein kompatibles Gerät, eine IPTV-App und ein Abonnement bei einem zuverlässigen Anbieter. Folgen Sie unserer <a href="/${vars.langCode}/${vars.slugify(`How to Set Up IPTV on ${device}`)}-1.html">Einrichtungsanleitung für ${device}</a> für detaillierte Anweisungen.</p>

<h2>Beste Apps zur Nutzung</h2>
<p>Wir empfehlen die Verwendung von <a href="/${vars.langCode}/${vars.slugify(`How to Install ${app} on Any Device`)}-1.html">${app}</a> für das beste Streaming-Erlebnis. Die App bietet hervorragende Funktionen, regelmäßige Updates und großartigen Support für alle Geräte.</p>

<h2>Internationale Sender</h2>
<p>Einer der größten Vorteile von IPTV ist der Zugang zu internationalen Sendern. Egal, ob Sie <a href="/${vars.langCode}/${vars.slugify(`Best IPTV Service Provider in ${country.name}`)}-1.html">${country.name}-Sender</a> oder Inhalte aus anderen Ländern suchen – IPTV bietet Ihnen tausende Sender weltweit.</p>

<div class="faq-item"><h3>Häufige Fragen</h3><p>Antworten auf häufige Fragen zu IPTV finden Sie in unserem <a href="/${vars.langCode}/${vars.slugify(faqItem.q.substring(0, 30))}-1.html">FAQ-Bereich</a> zu ${faqItem.q.toLowerCase()}.</p></div>`;
    },
    translateTitle: (title, vars) => {
      const { app, device, country, faqItem } = vars;
      const exact = {
        'How to Install IPTV on Any Device - Universal Guide': 'So installieren Sie IPTV auf jedem Gerät – Universelle Anleitung',
        'IPTV Subscription Guide 2026: Everything You Need to Know': 'IPTV-Abonnement-Guide 2026: Alles, was Sie wissen müssen',
        'IPTV vs Cable vs Satellite: Complete Comparison Guide': 'IPTV vs. Kabel vs. Satellit: Vollständiger Vergleichsleitfaden',
        'Best IPTV Service Providers Worldwide 2026': 'Beste IPTV-Dienstanbieter weltweit 2026',
        'IPTV for Beginners: Complete Getting Started Guide': 'IPTV für Anfänger: Vollständiger Einstiegsleitfaden',
        'How to Watch Live Sports on IPTV: Complete Sports Guide': 'Live-Sport auf IPTV sehen: Vollständiger Sportführer',
        'IPTV VPN Setup: Best VPNs for IPTV Streaming 2026': 'IPTV-VPN-Einrichtung: Beste VPNs für IPTV-Streaming 2026',
        'How to Create Perfect IPTV Playlist - M3U Editor Guide': 'Die perfekte IPTV-Playlist erstellen – M3U-Editor-Anleitung',
        'IPTV Panel Setup: Complete Reseller Guide': 'IPTV-Panel-Einrichtung: Vollständiger Wiederverkäufer-Leitfaden',
        'IPTV Movie Streaming: Best VOD Services 2026': 'IPTV-Film-Streaming: Beste VOD-Dienste 2026',
        'IPTV for Kids: Family-Friendly Streaming Guide': 'IPTV für Kinder: Familienfreundlicher Streaming-Guide',
        'IPTV for Expats: Watch Home Country TV Abroad': 'IPTV für Expats: Heimatland-TV im Ausland sehen',
        'IPTV Business Solutions: Commercial IPTV for Hotels': 'IPTV-Geschäftslösungen: Kommerzielles IPTV für Hotels',
        'IPTV Multi-Room Setup: Watch TV in Every Room': 'IPTV-Multiroom-Einrichtung: Fernsehen in jedem Raum',
        'How to Fix All IPTV Problems: Ultimate Troubleshooting': 'Alle IPTV-Probleme beheben: Ultimative Fehlerbehebung',
        'IPTV Sports Packages: Best Sports Channels Worldwide': 'IPTV-Sportpakete: Beste Sportsender weltweit',
        'IPTV 4K Streaming: How to Watch Ultra HD Content': 'IPTV-4K-Streaming: So sehen Sie Ultra-HD-Inhalte',
        'Best IPTV Apps for Android TV Box 2026': 'Beste IPTV-Apps für Android TV Box 2026',
        'Best IPTV Apps for Firestick 2026': 'Beste IPTV-Apps für Firestick 2026',
        'Best IPTV Apps for Samsung Smart TV 2026': 'Beste IPTV-Apps für Samsung Smart TV 2026',
        'Best IPTV Apps for LG WebOS TV 2026': 'Beste IPTV-Apps für LG WebOS TV 2026',
        'Best IPTV Apps for iPhone and iPad 2026': 'Beste IPTV-Apps für iPhone und iPad 2026',
        'Best IPTV Apps for Apple TV 2026': 'Beste IPTV-Apps für Apple TV 2026',
        'Best IPTV Apps for Windows PC 2026': 'Beste IPTV-Apps für Windows PC 2026',
        'Best IPTV Apps for Mac 2026': 'Beste IPTV-Apps für Mac 2026',
        'Best IPTV Apps for Roku 2026': 'Beste IPTV-Apps für Roku 2026',
        'Best IPTV Apps for MAG Box 2026': 'Beste IPTV-Apps für MAG Box 2026',
        'Best IPTV Apps for Formuler 2026': 'Beste IPTV-Apps für Formuler 2026',
        'Best IPTV Apps for Chromecast 2026': 'Beste IPTV-Apps für Chromecast 2026',
        'Best IPTV Apps for Nvidia Shield 2026': 'Beste IPTV-Apps für Nvidia Shield 2026',
        'Best IPTV Apps for Xbox 2026': 'Beste IPTV-Apps für Xbox 2026',
        'Best IPTV Apps for PlayStation 2026': 'Beste IPTV-Apps für PlayStation 2026',
        'Best IPTV Apps for Linux 2026': 'Beste IPTV-Apps für Linux 2026',
        'Best IPTV Apps for Android Smartphone 2026': 'Beste IPTV-Apps für Android-Smartphones 2026',
        'Best IPTV Apps for Smart TV 2026': 'Beste IPTV-Apps für Smart TV 2026'
      };
      if (exact[title]) return exact[title];
      if (title.startsWith('How to Install ') && title.includes(' on Any Device - Complete Setup Guide')) {
        return 'So installieren Sie ' + title.replace('How to Install ', '').replace(' on Any Device - Complete Setup Guide', '') + ' auf jedem Gerät – Vollständige Einrichtungsanleitung';
      }
      if (title.startsWith('How to Set Up IPTV on ') && title.endsWith(' - Step by Step Guide')) {
        return 'So richten Sie IPTV auf ' + title.replace('How to Set Up IPTV on ', '').replace(' - Step by Step Guide', '') + ' ein – Schritt-für-Schritt-Anleitung';
      }
      if (title.startsWith('Best IPTV Service Provider in ') && title.includes(' Channels 2026')) {
        var c = title.replace('Best IPTV Service Provider in ', '').split(' for ')[0];
        return 'Bester IPTV-Dienstanbieter in ' + c + ' für ' + c + '-Sender 2026';
      }
      if (title.endsWith(' - Complete Guide & Answer')) {
        return title.replace(' - Complete Guide & Answer', '') + ' – Vollständiger Leitfaden und Antwort';
      }
      return title;
    },
    translateExcerpt: (type, vars) => {
      const { app, device, country, faqItem } = vars;
      const excerpts = {
        appInstall: 'Schritt-für-Schritt-Anleitung zur Installation von ' + app + ' auf jedem Gerät. Vollständiges Tutorial zur Einrichtung von ' + app + ' mit Screenshots und Tipps zur Fehlerbehebung für ' + device + '.',
        deviceSetup: 'Vollständige Schritt-für-Schritt-Anleitung zur Einrichtung von IPTV auf ' + device + '. Erfahren Sie, wie Sie IPTV-Apps installieren, Playlists konfigurieren und sofort mit dem Anschauen auf ' + device + ' beginnen.',
        countryGuide: 'Finden Sie den besten IPTV-Dienstanbieter in ' + country.name + '. Vergleichen Sie die besten IPTV-Dienste für ' + country.name + '-Sender, Preise und Funktionen. Sehen Sie ' + country.name + '-TV überall.',
        faqArticle: faqItem.q + ' – Ausführliche Antwort und vollständiger Leitfaden zu IPTV. Erfahren Sie alles über diese häufige IPTV-Frage.'
      };
      return excerpts;
    },
    translateWhatsApp: (type, vars) => {
      const { app, device, country, faqItem } = vars;
      const messages = {
        appInstall: 'Hallo! Ich brauche Hilfe bei der Installation von ' + encodeURIComponent(app),
        deviceSetup: 'Hallo! Ich brauche Hilfe bei der Einrichtung von IPTV auf ' + encodeURIComponent(device),
        countryGuide: 'Hallo! Ich möchte den besten IPTV-Anbieter für ' + encodeURIComponent(country.name),
        faqArticle: 'Hallo! Ich habe eine Frage zu ' + encodeURIComponent(faqItem.q.substring(0, 50)),
        generic: 'Hallo! Ich möchte mit IPTV beginnen'
      };
      return messages;
    }
  }
