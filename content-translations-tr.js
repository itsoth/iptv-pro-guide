const CONTENT_TRANSLATIONS_TR = {
  tr: {
    appInstall: (vars) => {
      const { app, device } = vars;
      return `
<h2>Giriş</h2>
<p><strong>${app} uygulamasını kurma ve yapılandırma</strong> konulu kapsamlı rehberimize hoş geldiniz. ${app}, kullanıcı dostu arayüzü, güçlü özellikleri ve geniş cihaz uyumluluğu sunan en popüler IPTV uygulamalarından biridir. Bu rehber, ${device} ve diğer cihazlarda kurulum sürecinde size adım adım rehberlik edecektir.</p>

<h2>${app} Nedir?</h2>
<p>${app}, IPTV sağlayıcınızdan canlı TV kanalları, filmler, diziler ve isteğe bağlı video içerikleri akışı yapmanızı sağlayan, özelliklerle dolu bir IPTV oynatıcıdır. M3U oynatma listelerini, Xtream Codes API'sini destekler ve TV rehberleri için yerleşik EPG desteğine sahiptir. Uygulama Android, iOS, Windows ve Smart TV dahil birden çok platformda kullanılabilir.</p>

<h2>${app} Temel Özellikleri</h2>
<ul>
<li>M3U listeleri ve Xtream Codes API desteği</li>
<li>Yerleşik elektronik program rehberi (EPG)</li>
<li>Ebeveyn denetimi ve içerik filtreleme</li>
<li>Çoklu ekran ve çoklu cihaz desteği</li>
<li>Kayıt ve catch-up TV özellikleri</li>
<li>Özelleştirilebilir kanal listeleri ve favoriler</li>
<li>Harici oynatıcı entegrasyonu</li>
<li>Otomatik kanal listesi güncelleme</li>
</ul>

<h2>${app} ${device} Üzerine Kurulum</h2>
<p>En iyi IPTV deneyimi için ${app} uygulamasını ${device} cihazınıza kurmak üzere şu adımları izleyin:</p>
<ol>
<li>${device} cihazınızı açın ve internete bağlı olduğundan emin olun</li>
<li>Cihazınız için uygun uygulama mağazasını veya indirme kaynağını açın</li>
<li>Arama çubuğuna "${app}" yazın</li>
<li>Sonuçlardan resmi ${app} uygulamasını seçin</li>
<li>Yükle / İndir'e tıklayın ve kurulumun tamamlanmasını bekleyin</li>
<li>Kurulum tamamlandıktan sonra ${app} uygulamasını açın</li>
<li>IPTV sağlayıcı bilgilerinizi girin (M3U URL'si, Xtream Codes veya Portal URL'si)</li>
<li>Kanal listesinin yüklenmesini bekleyin ve izlemeye başlayın</li>
</ol>

<h2>Diğer Cihazlarda Kurulum</h2>
<p>${app} ayrıca diğer birçok cihaza da kurulabilir. İşte popüler platformlar için hızlı rehberler:</p>
<p><strong>Firestick:</strong> Geliştirici Seçenekleri'nden Bilinmeyen kaynaklardan uygulamaları etkinleştirin. Amazon Store'dan Downloader'ı yükleyin. Downloader'da ${app} indirme URL'sini girin. APK dosyasını kurun ve IPTV bilgilerinizi girin.</p>
<p><strong>Android TV:</strong> Google Play Store'u açın, ${app} arayın, kurun, açın ve sağlayıcı bilgilerinizi girin.</p>
<p><strong>Samsung/LG Smart TV:</strong> Bazı sürümler yandan yükleme gerektirebilir. TV'nizin uygulama mağazasında mevcut olup olmadığını kontrol edin veya Smart IPTV kullanın.</p>
<p><strong>iPhone/iPad:</strong> App Store'da mevcuttur. İndirin, kurun, sağlayıcı URL'sini ve bilgilerinizi girin.</p>
<p><strong>Windows PC:</strong> Resmi web sitesinden veya Microsoft Store'dan indirin. IPTV aboneliğinizle kurun ve yapılandırın.</p>

<h2>Yapılandırma İpuçları</h2>
<p>Kurulumdan sonra, en iyi deneyim için ${app} uygulamasını yapılandırın:</p>
<ul>
<li><strong>EPG Ayarları:</strong> TV yayın akışlarını almak için Ayarlar'dan EPG URL'nizi girin</li>
<li><strong>Video Oynatıcı:</strong> Yerleşik oynatıcı veya harici oynatıcı (VLC, MX Player) arasında seçim yapın</li>
<li><strong>Arabellek Boyutu:</strong> Arabellek sorunları yaşıyorsanız arabellek boyutunu artırın</li>
<li><strong>Otomatik Güncelleme:</strong> Oynatma listeleri ve EPG için otomatik güncellemeyi etkinleştirin</li>
<li><strong>Ebeveyn Denetimi:</strong> Kısıtlı içerikler için bir PIN belirleyin</li>
<li><strong>Ağ:</strong> Daha iyi kararlılık için kablolu Ethernet bağlantısı kullanın</li>
</ul>

<h2>Sorun Giderme</h2>
<p>${app} ile ilgili sorun yaşarsanız, şu çözümleri deneyin:</p>
<ul>
<li><strong>Uygulama yüklenmiyor:</strong> Önbelleği temizleyin, cihazı yeniden başlatın, uygulamayı yeniden kurun</li>
<li><strong>Kanal görüntülenmiyor:</strong> Aboneliğinizin aktif olduğunu kontrol edin, oynatma listesini yeniden yükleyin</li>
<li><strong>Arabellek sorunu:</strong> Video kalitesini düşürün, VPN kullanın, internet hızınızı kontrol edin</li>
<li><strong>EPG çalışmıyor:</strong> EPG URL'sini kontrol edin, EPG verilerini güncelleyin, uygulamayı yeniden başlatın</li>
<li><strong>Ses sorunları:</strong> Ses parçasını kontrol edin, ses gecikmesini ayarlayın, oynatıcıyı değiştirin</li>
</ul>

<h2>${app} Hakkında SSS</h2>
<div class="faq-item"><h3>${app} ücretsiz mi?</h3><p>${app}, temel özelliklerle ücretsiz bir sürüm sunar. Premium sürüm, kayıt, çoklu ekran ve gelişmiş ayarlar gibi ek özelliklerin kilidini açar.</p></div>
<div class="faq-item"><h3>${app} uygulamasını birden çok cihazda kullanabilir miyim?</h3><p>Evet, ${app} uygulamasını birden çok cihaza kurabilirsiniz. Her cihaz için IPTV abonelik bilgilerinize ihtiyacınız olacaktır.</p></div>
<div class="faq-item"><h3>${app} catch-up TV'yi destekliyor mu?</h3><p>IPTV sağlayıcınız catch-up TV sunuyorsa, ${app} EPG arayüzü üzerinden geçmiş içerikleri görüntüleyebilir ve oynatabilir.</p></div>
<div class="faq-item"><h3>${app} nasıl güncellenir?</h3><p>Cihazınızın uygulama mağazası üzerinden güncelleyin veya en son sürümü resmi web sitesinden indirin.</p></div>`;
    },
    deviceSetup: (vars) => {
      const { device, app } = vars;
      return `
<h2>Giriş</h2>
<p>Bu kapsamlı rehber, <strong>${device} üzerinde IPTV nasıl kurulur</strong> konusunu gösterecektir. İster yeni başlayan ister deneyimli bir kullanıcı olun, bu adım adım eğitim, IPTV'yi ${device} cihazınızda dakikalar içinde çalışır hale getirmenize yardımcı olacaktır.</p>

<h2>Başlamadan Önce İhtiyacınız Olanlar</h2>
<ul>
<li>Çalışan bir internet bağlantısı (HD için minimum 25 Mbps)</li>
<li>Aktif bir IPTV aboneliği</li>
<li>IPTV sağlayıcı bilgileriniz (M3U URL'si, Xtream Codes veya Portal URL'si)</li>
<li>Tamamen şarj edilmiş veya prize takılı ${device} cihazı</li>
<li>Kararlı bir WiFi veya Ethernet bağlantısı</li>
</ul>

<h2>Adım 1: ${device} İçin Bir IPTV Uygulaması Seçin</h2>
<p>İlk adım, ${device} cihazınız için doğru IPTV uygulamasını seçmektir. Bu popüler seçenekleri öneriyoruz:</p>
<ul>
<li><strong>IPTV Smarters Pro</strong> - En iyi çok amaçlı uygulama, tüm cihazlarda çalışır</li>
<li><strong>TiviMate</strong> - Android TV Box ve Firestick için en iyisi</li>
<li><strong>GSE Smart IPTV</strong> - iPhone/iPad kullanıcıları için en iyisi</li>
<li><strong>Perfect Player</strong> - Hafif ve hızlı</li>
<li><strong>OTT Navigator</strong> - Mükemmel EPG desteğiyle özellikler açısından zengin</li>
</ul>

<h2>Adım 2: ${device} Üzerine IPTV Uygulamasını Kurun</h2>
<p>${device === 'Amazon Fire TV Stick' ? "Ayarlar > Fire TV'm > Geliştirici Seçenekleri > Bilinmeyen kaynaklardan uygulamalar > Downloader'ı etkinleştirin'e gidin. Amazon Appstore'dan Downloader'ı kurun. Downloader'ı açın ve seçtiğiniz IPTV uygulamasının URL'sini girin. APK dosyasını indirin ve kurun." : "Cihazınızdaki uygulama mağazasını açın " + device + ". Seçtiğiniz IPTV uygulamasını arayın. Yükle/İndir'e dokunun. Kurulumun tamamlanmasını bekleyin."}</p>

<h2>Adım 3: IPTV Aboneliğinizi Yapılandırın</h2>
<p>Kurulu IPTV uygulamasını açın. Abonelik bilgilerinizi girmek için seçeneklerin bulunduğu bir karşılama ekranı göreceksiniz:</p>
<ul>
<li><strong>M3U Liste URL'si:</strong> IPTV hizmetiniz tarafından sağlanan M3U bağlantısını kopyalayıp yapıştırın</li>
<li><strong>Xtream Codes API:</strong> Sunucu URL'si, kullanıcı adı ve şifreyi girin</li>
<li><strong>Portal URL'si:</strong> Bu sistemi kullanıyorsanız MAG/STB portal URL'sini girin</li>
</ul>
<p>Bilgilerinizi girdikten sonra Oturum Aç veya Listeyi Yükle'ye tıklayın. Kanallarınız otomatik olarak yüklenecektir.</p>

<h2>Adım 4: IPTV Deneyiminizi Kişiselleştirin</h2>
<p>Kanallarınız yüklendikten sonra deneyiminizi kişiselleştirin:</p>
<ul>
<li>Favori kanal listenizi oluşturun</li>
<li>Sağlayıcınızın EPG URL'si ile EPG'yi (TV Rehberi) kurun</li>
<li>Kanalları özel gruplar halinde düzenleyin</li>
<li>Gerekirse ebeveyn denetimini ayarlayın</li>
<li>Video oynatıcı ayarlarını yapılandırın</li>
<li>Kanal listelerinin otomatik güncellenmesini etkinleştirin</li>
</ul>

<h2>${device} Üzerinde IPTV Kurulum Sorunlarını Giderme</h2>
<ul>
<li><strong>Kanal yüklenmiyor:</strong> Aboneliği kontrol edin, listeyi yeniden yükleyin, uygulamayı yeniden başlatın</li>
<li><strong>Arabellek sorunu:</strong> Kaliteyi düşürün, Ethernet kullanın, arka plan uygulamalarını kapatın</li>
<li><strong>Uygulama çöküyor:</strong> Önbelleği temizleyin, uygulamayı güncelleyin, yeniden kurun</li>
<li><strong>Ses sorunları:</strong> Ses ayarlarını kontrol edin, oynatıcıyı değiştirin</li>
<li><strong>EPG çalışmıyor:</strong> EPG'yi güncelleyin, URL'yi kontrol edin, sağlayıcıyla iletişime geçin</li>
</ul>

<h2>Sıkça Sorulan Sorular</h2>
<div class="faq-item"><h3>${device} cihazımda IPTV kullanabilir miyim?</h3><p>Evet, IPTV ${device} üzerinde mükemmel çalışır. Bir IPTV uygulaması kurmak ve abonelik bilgilerinizi girmek için yukarıdaki adımları izlemeniz yeterlidir.</p></div>
<div class="faq-item"><h3>${device} üzerinde IPTV için hangi internet hızı gerekli?</h3><p>HD içerik için: minimum 25 Mbps. 4K için: minimum 50 Mbps. Daha iyi performans için kablolu bağlantı önerilir.</p></div>
<div class="faq-item"><h3>${device} üzerinde IPTV için VPN'e ihtiyacım var mı?</h3><p>VPN, ISS kısıtlamasını aşmaya ve gizliliğinizi korumaya yardımcı olabilir. Konumunuza yakın sunuculara sahip hızlı bir VPN seçin.</p></div>`;
    },
    countryGuide: (vars) => {
      const { country, device, app } = vars;
      const langName = country.lang === 'ar' ? 'Arapça' : country.lang === 'fr' ? 'Fransızca' : country.lang === 'es' ? 'İspanyolca' : country.lang === 'de' ? 'Almanca' : country.lang === 'pt' ? 'Portekizce' : country.lang === 'nl' ? 'Felemenkçe' : country.lang === 'tr' ? 'Türkçe' : country.lang === 'ru' ? 'Rusça' : 'İngilizce';
      return `
<h2>Giriş</h2>
<p><strong>${country.name} içindeki en iyi IPTV hizmet sağlayıcısını</strong> mı arıyorsunuz? Bu kapsamlı rehber, ${country.name} kanallarını, yerel içerikleri ve uluslararası yayınları izlemek için mükemmel IPTV aboneliğini bulmanıza yardımcı olacaktır. İster ${country.name} içinde yaşayın ister yurt dışında bir gurbetçi olun, sizin için en iyi önerilere sahibiz.</p>

<h2>${country.name} İçinde Neden IPTV'yi Seçmelisiniz?</h2>
<p>IPTV, ${country.name} içinde birkaç nedenden dolayı giderek daha popüler hale geliyor:</p>
<ul>
<li><strong>Maliyet Tasarrufu:</strong> IPTV genellikle geleneksel kablo veya uydudan daha ucuzdur</li>
<li><strong>Kanal Çeşitliliği:</strong> ${country.name} kanallarına artı uluslararası içeriklere yüzlerce kanala erişim</li>
<li><strong>Esneklik:</strong> Herhangi bir cihazda izleyin - TV, telefon, tablet veya bilgisayar</li>
<li><strong>Sözleşmesiz:</strong> Uzun vadeli taahhütler olmadan aylık abonelik</li>
<li><strong>HD ve 4K Kalitesi:</strong> Kristal netliğinde görüntü kalitesinin keyfini çıkarın</li>
<li><strong>Catch-up ve VOD:</strong> Kaçırdığınız programları ve binlerce filmi isteğe bağlı izleyin</li>
</ul>

<h2>${country.name} Kanalları İçin En İyi IPTV Sağlayıcısı</h2>
<p>${country.name} için bir IPTV sağlayıcısı seçerken şu temel özelliklere bakın:</p>
<ul>
<li><strong>Yerel Kanallar:</strong> ${country.name} haber, spor ve eğlence kanallarına erişim</li>
<li><strong>Dil Desteği:</strong> ${langName} dilinde arayüz ve içerik</li>
<li><strong>Güvenilir Sunucular:</strong> Minimum arabellek ile hızlı ve kararlı akış</li>
<li><strong>Ödeme Seçenekleri:</strong> ${country.name} içinde mevcut ödeme yöntemleri</li>
<li><strong>Destek:</strong> ${country.name} ihtiyaçlarını anlayan müşteri hizmetleri</li>
</ul>

<h2>Aranacak Temel Özellikler</h2>
<p>${country.name} için önerilen IPTV sağlayıcılarımız şu özellikleri sunar:</p>
<ul>
<li><strong>Geniş Kanal Listesi:</strong> Tüm büyük ${country.name} ağları dahil ${Math.floor(Math.random() * 5000) + 5000}+ canlı kanal</li>
<li><strong>VOD Kütüphanesi:</strong> ${Math.floor(Math.random() * 10000) + 10000}+ film ve TV programı</li>
<li><strong>4K ve FHD Kalitesi:</strong> Ultra HD ve Full HD akış seçenekleri</li>
<li><strong>EPG Rehberi:</strong> Kolay kanal gezinmesi için elektronik program rehberi</li>
<li><strong>Donma Önleme Teknolojisi:</strong> Minimum arabellek ile kararlı sunucular</li>
<li><strong>7/24 Müşteri Desteği:</strong> İhtiyacınız olduğunda yardım mevcut</li>
<li><strong>Ücretsiz Deneme:</strong> Abone olmadan önce hizmeti test edin</li>
<li><strong>Çoklu Cihaz:</strong> Aynı anda birden çok cihazda izleyin</li>
</ul>

<h2>Yurt Dışında ${country.name} Kanalları Nasıl İzlenir</h2>
<p>${country.name} gurbetçisiyseniz veya yurt dışına seyahat ediyorsanız, IPTV tüm favori ${country.name} kanallarınızı dünyanın her yerinden izlemenize olanak tanır. İşte nasıl:</p>
<ol>
<li>${country.name} kanalları olan güvenilir bir IPTV sağlayıcısı seçin</li>
<li>Hizmetlerine abone olun (önce ücretsiz denemeyi kullanın)</li>
<li>Cihazınıza IPTV uygulamasını kurun</li>
<li>Abonelik bilgilerinizi girin</li>
<li>Hemen ${country.name} TV kanallarını izlemeye başlayın</li>
</ol>

<h2>${country.name} Spor Tutkunları İçin IPTV</h2>
<p>${country.name} içindeki spor tutkunları, dünyanın her yerinden canlı spor etkinliklerine erişim için IPTV'yi sever. IPTV ile ${country.name === 'United States' ? 'NFL, NBA, MLB, NHL' : country.name === 'United Kingdom' ? 'Premier Lig, Şampiyonlar Ligi' : country.name === 'France' ? 'Ligue 1, Top 14' : country.name === 'Spain' ? 'La Liga, ACB' : country.name === 'Germany' ? 'Bundesliga, DEL' : country.name === 'Italy' ? 'Serie A, Lega Basket' : country.name === 'Brazil' ? 'Brasileirão, NBA' : 'yerel ve uluslararası sporları'} canlı izleyin.</p>

<h2>${country.name} İçinde IPTV Hakkında Sıkça Sorulan Sorular</h2>
<div class="faq-item"><h3>${country.name} içinde IPTV yasal mı?</h3><p>IPTV teknolojisinin kendisi yasaldır. Uygun içerik haklarına sahip lisanslı sağlayıcıları seçin. Meşru IPTV hizmetlerini kullanmanızı öneririz.</p></div>
<div class="faq-item"><h3>${country.name} kullanıcıları için en iyi IPTV uygulaması hangisidir?</h3><p>Popüler seçenekler arasında TiviMate, IPTV Smarters Pro, GSE Smart IPTV ve Perfect Player bulunur. Hepsi ${country.name} kanalları için mükemmel çalışır.</p></div>
<div class="faq-item"><h3>Yurt dışında IPTV ile ${country.name} TV izleyebilir miyim?</h3><p>Evet! IPTV, internet bağlantısı olan dünyanın her yerinde çalışır. ${country.name} kanallarını herhangi bir ülkeden izleyebilirsiniz.</p></div>
<div class="faq-item"><h3>${country.name} içinde IPTV ne kadar?</h3><p>Fiyatlar sağlayıcıya göre değişir. ${country.name} kanalları olan kaliteli bir hizmet için aylık 5-15 $ arası ödemeyi bekleyin.</p></div>`;
    },
    faqArticle: (vars) => {
      const { faqItem, app, slugify } = vars;
      return `
<h2>${faqItem.q}</h2>
<p>${faqItem.a}</p>

<h2>Ayrıntılı Açıklama</h2>
<p>Bu, IPTV teknolojisi hakkında en sık sorulan sorulardan biridir. ${faqItem.q.toLowerCase()} konusunu anlamak, en iyi IPTV deneyimini elde etmek için çok önemlidir. Bu kapsamlı rehberde, IPTV hizmetinizden en iyi şekilde yararlanmanıza yardımcı olacak ayrıntılı bilgiler ve pratik ipuçları sunuyoruz.</p>

<h2>Hatırlanması Gereken Önemli Noktalar</h2>
<ul>
<li>En iyi performans için her zaman güvenilir bir internet bağlantısı kullanın</li>
<li>İyi değerlendirmelere sahip saygın bir IPTV sağlayıcısı seçin</li>
<li>IPTV uygulamalarınızı en son sürümlere güncel tutun</li>
<li>Gerektiğinde daha fazla gizlilik için VPN kullanın</li>
<li>Taahhüt etmeden önce hizmetleri ücretsiz denemelerle test edin</li>
</ul>

<h2>İlgili IPTV Konuları</h2>
<ul>
<li><a href="/${vars.langCode}/${vars.slugify('What is IPTV and how does it work')}-1.html">IPTV Nedir? Kapsamlı Rehber</a></li>
<li><a href="/${vars.langCode}/${vars.slugify('Best IPTV Services 2026')}-1.html">En İyi IPTV Hizmetleri 2026</a></li>
<li><a href="/${vars.langCode}/${vars.slugify('How to Set Up IPTV on Firestick')}-1.html">Firestick'te IPTV</a></li>
<li><a href="/${vars.langCode}/${vars.slugify(`How to Install ${app} on Any Device`)}-1.html">${app} Kurulumu</a></li>
</ul>`;
    },
    generic: (vars) => {
      const { title, device, app, country, faqItem } = vars;
      return `
<h2>${title} Giriş</h2>
<p>IPTV teknolojisi, televizyon izleme şeklimizde devrim yarattı. Geleneksel kablo veya uydudan farklı olarak IPTV, içeriği internet ağları üzerinden ileterek daha fazla esneklik, daha fazla kanal ve daha iyi fiyatlar sunar. IPTV kurulumu basittir ve internet bağlantısı olan hemen hemen her cihazda yapılabilir.</p>

<h2>Neden IPTV'yi Seçmelisiniz?</h2>
<p>IPTV, geleneksel TV'ye göre sayısız avantaj sunar: daha düşük maliyetler, daha fazla kanal, daha iyi kalite ve herhangi bir cihazda izleme imkanı. Dünyanın her yerinden binlerce kanalla IPTV, televizyonun geleceğidir.</p>

<h2>Başlarken</h2>
<p>IPTV'ye başlamak için ihtiyacınız olanlar: kararlı bir internet bağlantısı (HD için 25+ Mbps), uyumlu bir cihaz, bir IPTV uygulaması ve güvenilir bir sağlayıcıdan abonelik. Ayrıntılı talimatlar için <a href="/${vars.langCode}/${vars.slugify(`How to Set Up IPTV on ${device}`)}-1.html">${device} kurulum rehberimize</a> göz atın.</p>

<h2>Kullanılacak En İyi Uygulamalar</h2>
<p>En iyi akış deneyimi için <a href="/${vars.langCode}/${vars.slugify(`How to Install ${app} on Any Device`)}-1.html">${app}</a> kullanmanızı öneririz. Mükemmel özellikler, düzenli güncellemeler ve tüm cihazlar için harika destek sunar.</p>

<h2>Uluslararası Kanallar</h2>
<p>IPTV'nin en büyük avantajlarından biri uluslararası kanallara erişimdir. İster <a href="/${vars.langCode}/${vars.slugify(`Best IPTV Service Provider in ${country.name}`)}-1.html">${country.name} kanalları</a> ister başka bir ülkeden içerik arıyor olun, IPTV dünya çapında binlerce kanalla ihtiyacınızı karşılar.</p>

<div class="faq-item"><h3>Sık Sorulan Sorular</h3><p>IPTV hakkında sık sorulan soruların yanıtları için ${faqItem.q.toLowerCase()} konulu <a href="/${vars.langCode}/${vars.slugify(faqItem.q.substring(0, 30))}-1.html">SSS bölümümüze</a> bakın.</p></div>`;
    },
    translateTitle: (title, vars) => {
      const { app, device, country, faqItem } = vars;
      const exact = {
        'How to Install IPTV on Any Device - Universal Guide': 'Herhangi Bir Cihazda IPTV Nasıl Kurulur - Evrensel Rehber',
        'IPTV Subscription Guide 2026: Everything You Need to Know': 'IPTV Abonelik Rehberi 2026: Bilmeniz Gereken Her Şey',
        'IPTV vs Cable vs Satellite: Complete Comparison Guide': 'IPTV vs Kablo vs Uydu: Tam Karşılaştırma Rehberi',
        'Best IPTV Service Providers Worldwide 2026': 'Dünya Çapında En İyi IPTV Hizmet Sağlayıcıları 2026',
        'IPTV for Beginners: Complete Getting Started Guide': 'Yeni Başlayanlar İçin IPTV: Başlangıç Rehberi',
        'How to Watch Live Sports on IPTV: Complete Sports Guide': 'IPTV'de Canlı Spor Nasıl İzlenir: Tam Spor Rehberi',
        'IPTV VPN Setup: Best VPNs for IPTV Streaming 2026': 'IPTV VPN Kurulumu: IPTV Akışı İçin En İyi VPN'ler 2026',
        'How to Create Perfect IPTV Playlist - M3U Editor Guide': 'Mükemmel IPTV Oynatma Listesi Oluşturma - M3U Düzenleyici Rehberi',
        'IPTV Panel Setup: Complete Reseller Guide': 'IPTV Panel Kurulumu: Bayiler İçin Kapsamlı Rehber',
        'IPTV Movie Streaming: Best VOD Services 2026': 'IPTV Film Akışı: En İyi VOD Hizmetleri 2026',
        'IPTV for Kids: Family-Friendly Streaming Guide': 'Çocuklar İçin IPTV: Aile Dostu Akış Rehberi',
        'IPTV for Expats: Watch Home Country TV Abroad': 'Gurbetçiler İçin IPTV: Yurt Dışında Memleket TV'nizi İzleyin',
        'IPTV Business Solutions: Commercial IPTV for Hotels': 'IPTV İş Çözümleri: Oteller İçin Ticari IPTV',
        'IPTV Multi-Room Setup: Watch TV in Every Room': 'IPTV Çoklu Oda Kurulumu: Her Odada TV İzleyin',
        'How to Fix All IPTV Problems: Ultimate Troubleshooting': 'Tüm IPTV Sorunları Nasıl Çözülür: Nihai Sorun Giderme',
        'IPTV Sports Packages: Best Sports Channels Worldwide': 'IPTV Spor Paketleri: Dünyanın En İyi Spor Kanalları',
        'IPTV 4K Streaming: How to Watch Ultra HD Content': 'IPTV 4K Akışı: Ultra HD İçerik Nasıl İzlenir',
        'Best IPTV Apps for Android TV Box 2026': 'Android TV Box İçin En İyi IPTV Uygulamaları 2026',
        'Best IPTV Apps for Firestick 2026': 'Firestick İçin En İyi IPTV Uygulamaları 2026',
        'Best IPTV Apps for Samsung Smart TV 2026': 'Samsung Smart TV İçin En İyi IPTV Uygulamaları 2026',
        'Best IPTV Apps for LG WebOS TV 2026': 'LG WebOS TV İçin En İyi IPTV Uygulamaları 2026',
        'Best IPTV Apps for iPhone and iPad 2026': 'iPhone ve iPad İçin En İyi IPTV Uygulamaları 2026',
        'Best IPTV Apps for Apple TV 2026': 'Apple TV İçin En İyi IPTV Uygulamaları 2026',
        'Best IPTV Apps for Windows PC 2026': 'Windows PC İçin En İyi IPTV Uygulamaları 2026',
        'Best IPTV Apps for Mac 2026': 'Mac İçin En İyi IPTV Uygulamaları 2026',
        'Best IPTV Apps for Roku 2026': 'Roku İçin En İyi IPTV Uygulamaları 2026',
        'Best IPTV Apps for MAG Box 2026': 'MAG Box İçin En İyi IPTV Uygulamaları 2026',
        'Best IPTV Apps for Formuler 2026': 'Formuler İçin En İyi IPTV Uygulamaları 2026',
        'Best IPTV Apps for Chromecast 2026': 'Chromecast İçin En İyi IPTV Uygulamaları 2026',
        'Best IPTV Apps for Nvidia Shield 2026': 'Nvidia Shield İçin En İyi IPTV Uygulamaları 2026',
        'Best IPTV Apps for Xbox 2026': 'Xbox İçin En İyi IPTV Uygulamaları 2026',
        'Best IPTV Apps for PlayStation 2026': 'PlayStation İçin En İyi IPTV Uygulamaları 2026',
        'Best IPTV Apps for Linux 2026': 'Linux İçin En İyi IPTV Uygulamaları 2026',
        'Best IPTV Apps for Android Smartphone 2026': 'Android Akıllı Telefon İçin En İyi IPTV Uygulamaları 2026',
        'Best IPTV Apps for Smart TV 2026': 'Smart TV İçin En İyi IPTV Uygulamaları 2026'
      };
      if (exact[title]) return exact[title];
      if (title.startsWith('How to Install ') && title.includes(' on Any Device - Complete Setup Guide')) {
        return 'Herhangi bir cihazda ' + title.replace('How to Install ', '').replace(' on Any Device - Complete Setup Guide', '') + ' nasıl kurulur - Tam kurulum rehberi';
      }
      if (title.startsWith('How to Set Up IPTV on ') && title.endsWith(' - Step by Step Guide')) {
        return title.replace('How to Set Up IPTV on ', '').replace(' - Step by Step Guide', '') + ' üzerinde IPTV nasıl kurulur - Adım adım rehber';
      }
      if (title.startsWith('Best IPTV Service Provider in ') && title.includes(' Channels 2026')) {
        var c = title.replace('Best IPTV Service Provider in ', '').split(' for ')[0];
        return c + ' içindeki en iyi IPTV hizmet sağlayıcısı - ' + c + ' kanalları 2026';
      }
      if (title.endsWith(' - Complete Guide & Answer')) {
        return title.replace(' - Complete Guide & Answer', '') + ' - Tam rehber ve cevap';
      }
      return title;
    },
    translateExcerpt: (type, vars) => {
      const { app, device, country, faqItem } = vars;
      const excerpts = {
        appInstall: app + ' uygulamasını herhangi bir cihaza kurmak için adım adım rehber. ' + app + ' kurulumu için ekran görüntüleri ve ' + device + ' sorun giderme ipuçlarıyla eksiksiz eğitim.',
        deviceSetup: device + ' üzerinde IPTV kurulumu için eksiksiz adım adım rehber. ' + device + ' üzerinde IPTV uygulamalarını kurmayı, oynatma listelerini yapılandırmayı ve izlemeye başlamayı öğrenin.',
        countryGuide: country.name + ' içindeki en iyi IPTV hizmet sağlayıcısını bulun. ' + country.name + ' kanalları, fiyatları ve özellikleri için en iyi IPTV hizmetlerini karşılaştırın. Her yerde ' + country.name + ' TV izleyin.',
        faqArticle: faqItem.q + ' - IPTV hakkında ayrıntılı cevap ve kapsamlı rehber. Bu yaygın IPTV sorusu hakkında her şeyi öğrenin.',
        generic: 'IPTV teknolojisi televizyon izleme şeklimizde devrim yarattı. ' + device + ' için IPTV kurulumu, uygulamalar ve sorun giderme hakkında kapsamlı rehber.'
      };
      return excerpts;
    },
    translateWhatsApp: (type, vars) => {
      const { app, device, country, faqItem } = vars;
      const messages = {
        appInstall: 'Merhaba! ' + encodeURIComponent(app) + ' kurulumu için yardıma ihtiyacım var',
        deviceSetup: 'Merhaba! ' + encodeURIComponent(device) + ' üzerinde IPTV kurulumu için yardıma ihtiyacım var',
        countryGuide: 'Merhaba! ' + encodeURIComponent(country.name) + ' için en iyi IPTV'yi istiyorum',
        faqArticle: 'Merhaba! ' + encodeURIComponent(faqItem.q.substring(0, 50)) + ' hakkında bir sorum var',
        generic: 'Merhaba! IPTV'ye başlamak istiyorum'
      };
      return messages;
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CONTENT_TRANSLATIONS_TR };
}
