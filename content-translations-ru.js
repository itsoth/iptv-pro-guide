const CONTENT_TRANSLATIONS_RU = {
  ru: {
    appInstall: (vars) => {
      const { app, device } = vars;
      return `
<h2>Введение</h2>
<p>Добро пожаловать в наше полное руководство по <strong>установке и настройке ${app}</strong> для IPTV-стриминга. ${app} — одно из самых популярных IPTV-приложений, предлагающее удобный интерфейс, мощные функции и широкую совместимость с устройствами. Это руководство шаг за шагом проведёт вас через процесс установки на ${device} и другие устройства.</p>

<h2>Что такое ${app}?</h2>
<p>${app} — это многофункциональный IPTV-плеер, который позволяет транслировать телеканалы в прямом эфире, фильмы, сериалы и видео по запросу от вашего IPTV-провайдера. Он поддерживает плейлисты M3U, API Xtream Codes и имеет встроенную поддержку EPG для телепрограмм. Приложение доступно на нескольких платформах, включая Android, iOS, Windows и Smart TV.</p>

<h2>Ключевые возможности ${app}</h2>
<ul>
<li>Поддержка списков M3U и API Xtream Codes</li>
<li>Встроенная электронная программа передач (EPG)</li>
<li>Родительский контроль и фильтрация контента</li>
<li>Поддержка нескольких экранов и устройств</li>
<li>Функции записи и catch-up TV</li>
<li>Настраиваемые списки каналов и избранное</li>
<li>Интеграция внешнего плеера</li>
<li>Автоматическое обновление списков каналов</li>
</ul>

<h2>Установка ${app} на ${device}</h2>
<p>Выполните следующие шаги для установки ${app} на ваш ${device} для наилучшего IPTV-опыта:</p>
<ol>
<li>Включите ваш ${device} и убедитесь, что он подключён к интернету</li>
<li>Откройте магазин приложений или соответствующий источник загрузки для вашего устройства</li>
<li>Найдите "${app}" в строке поиска</li>
<li>Выберите официальное приложение ${app} из результатов</li>
<li>Нажмите Установить / Загрузить и дождитесь завершения установки</li>
<li>После установки откройте приложение ${app}</li>
<li>Введите данные вашего IPTV-провайдера (URL M3U, Xtream Codes или URL портала)</li>
<li>Дождитесь загрузки списка каналов и начинайте просмотр</li>
</ol>

<h2>Установка на других устройствах</h2>
<p>${app} также можно установить на многих других устройствах. Вот краткие руководства для популярных платформ:</p>
<p><strong>Firestick:</strong> Включите приложения из неизвестных источников в параметрах разработчика. Установите Downloader из Amazon Store. Введите URL загрузки ${app} в Downloader. Установите и введите ваши IPTV-данные.</p>
<p><strong>Android TV:</strong> Откройте Google Play Store, найдите ${app}, установите, откройте и введите данные провайдера.</p>
<p><strong>Samsung/LG Smart TV:</strong> Некоторые версии могут потребовать боковой загрузки. Проверьте наличие в магазине приложений вашего телевизора или используйте Smart IPTV.</p>
<p><strong>iPhone/iPad:</strong> Доступно в App Store. Загрузите, установите, введите URL и данные вашего провайдера.</p>
<p><strong>Windows PC:</strong> Загрузите с официального сайта или Microsoft Store. Установите и настройте с вашей IPTV-подпиской.</p>

<h2>Советы по настройке</h2>
<p>После установки настройте ${app} для наилучшего опыта:</p>
<ul>
<li><strong>Настройка EPG:</strong> Введите URL EPG в настройках для получения телепрограммы</li>
<li><strong>Видеоплеер:</strong> Выберите между встроенным плеером или внешним (VLC, MX Player)</li>
<li><strong>Размер буфера:</strong> Увеличьте размер буфера при проблемах с буферизацией</li>
<li><strong>Автообновление:</strong> Включите автоматическое обновление плейлистов и EPG</li>
<li><strong>Родительский контроль:</strong> Установите PIN-код для ограниченного контента</li>
<li><strong>Сеть:</strong> Используйте проводное Ethernet-подключение для лучшей стабильности</li>
</ul>

<h2>Устранение неполадок</h2>
<p>Если вы столкнулись с проблемами в ${app}, попробуйте эти решения:</p>
<ul>
<li><strong>Приложение не загружается:</strong> Очистите кеш, перезагрузите устройство, переустановите приложение</li>
<li><strong>Не отображаются каналы:</strong> Проверьте активность подписки, перезагрузите плейлист</li>
<li><strong>Буферизация:</strong> Уменьшите качество видео, используйте VPN, проверьте скорость интернета</li>
<li><strong>EPG не работает:</strong> Проверьте URL EPG, обновите данные EPG, перезапустите приложение</li>
<li><strong>Проблемы со звуком:</strong> Проверьте аудиодорожку, отрегулируйте задержку звука, смените плеер</li>
</ul>

<h2>Часто задаваемые вопросы о ${app}</h2>
<div class="faq-item"><h3>${app} бесплатен?</h3><p>${app} предлагает бесплатную версию с базовыми функциями. Премиум-версия открывает дополнительные возможности, такие как запись, мультиэкран и расширенные настройки.</p></div>
<div class="faq-item"><h3>Могу ли я использовать ${app} на нескольких устройствах?</h3><p>Да, вы можете установить ${app} на нескольких устройствах. Вам понадобятся данные вашей IPTV-подписки для каждого устройства.</p></div>
<div class="faq-item"><h3>Поддерживает ли ${app} catch-up TV?</h3><p>Если ваш IPTV-провайдер предлагает catch-up TV, ${app} может отображать и воспроизводить пропущенный контент через интерфейс EPG.</p></div>
<div class="faq-item"><h3>Как обновить ${app}?</h3><p>Обновите через магазин приложений вашего устройства или загрузите последнюю версию с официального сайта.</p></div>`;
    },
    deviceSetup: (vars) => {
      const { device, app } = vars;
      return `
<h2>Введение</h2>
<p>Это полное руководство покажет вам, <strong>как настроить IPTV на ${device}</strong>. Независимо от того, новичок вы или опытный пользователь, эта пошаговая инструкция поможет запустить IPTV на вашем ${device} за считанные минуты.</p>

<h2>Что вам понадобится перед началом</h2>
<ul>
<li>Работающее интернет-соединение (минимум 25 Мбит/с для HD)</li>
<li>Активная IPTV-подписка</li>
<li>Данные вашего IPTV-провайдера (URL M3U, Xtream Codes или URL портала)</li>
<li>Устройство ${device} полностью заряжено или подключено к сети</li>
<li>Стабильное WiFi- или Ethernet-подключение</li>
</ul>

<h2>Шаг 1: Выберите IPTV-приложение для ${device}</h2>
<p>Первый шаг — выбрать подходящее IPTV-приложение для вашего ${device}. Мы рекомендуем эти популярные варианты:</p>
<ul>
<li><strong>IPTV Smarters Pro</strong> — лучшее универсальное приложение, работает на всех устройствах</li>
<li><strong>TiviMate</strong> — лучшее для Android TV Box и Firestick</li>
<li><strong>GSE Smart IPTV</strong> — лучшее для пользователей iPhone/iPad</li>
<li><strong>Perfect Player</strong> — лёгкое и быстрое</li>
<li><strong>OTT Navigator</strong> — многофункциональное с отличной поддержкой EPG</li>
</ul>

<h2>Шаг 2: Установите IPTV-приложение на ${device}</h2>
<p>${device === 'Amazon Fire TV Stick' ? 'Перейдите в Настройки > Мой Fire TV > Параметры разработчика > Установка приложений из неизвестных источников > Включите Downloader. Установите Downloader из Amazon Appstore. Откройте Downloader и введите URL выбранного IPTV-приложения. Загрузите и установите APK-файл.' : 'Откройте магазин приложений на вашем ' + device + '. Найдите выбранное IPTV-приложение. Нажмите Установить/Загрузить. Дождитесь завершения установки.'}</p>

<h2>Шаг 3: Настройте вашу IPTV-подписку</h2>
<p>Откройте установленное IPTV-приложение. Вы увидите экран приветствия с опциями для ввода данных подписки:</p>
<ul>
<li><strong>URL списка M3U:</strong> Скопируйте и вставьте ссылку M3U, предоставленную вашим IPTV-сервисом</li>
<li><strong>API Xtream Codes:</strong> Введите URL сервера, имя пользователя и пароль</li>
<li><strong>URL портала:</strong> Введите URL портала MAG/STB, если используете эту систему</li>
</ul>
<p>После ввода данных нажмите Войти или Загрузить список. Ваши каналы загрузятся автоматически.</p>

<h2>Шаг 4: Настройте ваш IPTV-опыт</h2>
<p>После загрузки каналов настройте просмотр под себя:</p>
<ul>
<li>Создайте список избранных каналов</li>
<li>Настройте EPG (телепрограмму) с URL EPG вашего провайдера</li>
<li>Организуйте каналы в пользовательские группы</li>
<li>Установите родительский контроль при необходимости</li>
<li>Настройте параметры видеоплеера</li>
<li>Включите автоматическое обновление списков каналов</li>
</ul>

<h2>Устранение неполадок при настройке IPTV на ${device}</h2>
<ul>
<li><strong>Каналы не загружаются:</strong> Проверьте подписку, перезагрузите список, перезапустите приложение</li>
<li><strong>Буферизация:</strong> Уменьшите качество, используйте Ethernet, закройте фоновые приложения</li>
<li><strong>Приложение вылетает:</strong> Очистите кеш, обновите приложение, переустановите</li>
<li><strong>Проблемы со звуком:</strong> Проверьте настройки звука, смените плеер</li>
<li><strong>EPG не работает:</strong> Обновите EPG, проверьте URL, свяжитесь с провайдером</li>
</ul>

<h2>Часто задаваемые вопросы</h2>
<div class="faq-item"><h3>Могу ли я использовать IPTV на моём ${device}?</h3><p>Да, IPTV отлично работает на ${device}. Просто выполните указанные выше шаги по установке IPTV-приложения и вводу данных подписки.</p></div>
<div class="faq-item"><h3>Какая скорость интернета нужна для IPTV на ${device}?</h3><p>Для HD-контента: минимум 25 Мбит/с. Для 4K: минимум 50 Мбит/с. Рекомендуется проводное подключение для лучшей производительности.</p></div>
<div class="faq-item"><h3>Нужен ли мне VPN для IPTV на ${device}?</h3><p>VPN может помочь обойти ограничения интернет-провайдера и защитить вашу конфиденциальность. Выберите быстрый VPN с серверами рядом с вашим местоположением.</p></div>`;
    },
    countryGuide: (vars) => {
      const { country, device, app } = vars;
      const langName = country.lang === 'ar' ? 'арабский' : country.lang === 'fr' ? 'французский' : country.lang === 'es' ? 'испанский' : country.lang === 'de' ? 'немецкий' : country.lang === 'pt' ? 'португальский' : country.lang === 'nl' ? 'нидерландский' : country.lang === 'tr' ? 'турецкий' : country.lang === 'ru' ? 'русский' : 'английский';
      return `
<h2>Введение</h2>
<p>Вы ищете <strong>лучшего поставщика услуг IPTV в ${country.name}</strong>? Это полное руководство поможет вам найти идеальную IPTV-подписку для просмотра каналов ${country.name}, местного контента и международных программ. Живёте ли вы в ${country.name} или находитесь за границей, у нас есть лучшие рекомендации для вас.</p>

<h2>Почему стоит выбрать IPTV в ${country.name}?</h2>
<p>IPTV становится всё популярнее в ${country.name} по нескольким причинам:</p>
<ul>
<li><strong>Экономия:</strong> IPTV обычно дешевле традиционного кабельного или спутникового ТВ</li>
<li><strong>Разнообразие каналов:</strong> Доступ к сотням каналов ${country.name} плюс международный контент</li>
<li><strong>Гибкость:</strong> Смотрите на любом устройстве — ТВ, телефоне, планшете или компьютере</li>
<li><strong>Без контрактов:</strong> Ежемесячная подписка без долгосрочных обязательств</li>
<li><strong>Качество HD и 4K:</strong> Наслаждайтесь кристально чистым изображением</li>
<li><strong>Catch-up и VOD:</strong> Смотрите пропущенные программы и тысячи фильмов по запросу</li>
</ul>

<h2>Лучший IPTV-провайдер для каналов ${country.name}</h2>
<p>При выборе IPTV-провайдера для ${country.name} обратите внимание на эти ключевые характеристики:</p>
<ul>
<li><strong>Местные каналы:</strong> Доступ к новостным, спортивным и развлекательным каналам ${country.name}</li>
<li><strong>Языковая поддержка:</strong> Интерфейс и контент на ${langName} языке</li>
<li><strong>Надёжные серверы:</strong> Быстрый и стабильный стриминг с минимальной буферизацией</li>
<li><strong>Способы оплаты:</strong> Доступные в ${country.name} методы оплаты</li>
<li><strong>Поддержка:</strong> Клиентская служба, понимающая потребности ${country.name}</li>
</ul>

<h2>Основные функции</h2>
<p>Наши рекомендуемые IPTV-провайдеры для ${country.name} предлагают следующие возможности:</p>
<ul>
<li><strong>Обширный список каналов:</strong> ${Math.floor(Math.random() * 5000) + 5000}+ каналов в прямом эфире, включая все основные сети ${country.name}</li>
<li><strong>Библиотека VOD:</strong> ${Math.floor(Math.random() * 10000) + 10000}+ фильмов и телепрограмм</li>
<li><strong>Качество 4K и FHD:</strong> Варианты стриминга Ultra HD и Full HD</li>
<li><strong>Гид EPG:</strong> Электронная программа передач для удобной навигации по каналам</li>
<li><strong>Технология анти-фриз:</strong> Стабильные серверы с минимальной буферизацией</li>
<li><strong>Поддержка клиентов 24/7:</strong> Помощь доступна в любое время</li>
<li><strong>Бесплатная пробная версия:</strong> Протестируйте сервис перед подпиской</li>
<li><strong>Несколько устройств:</strong> Смотрите на нескольких устройствах одновременно</li>
</ul>

<h2>Как смотреть каналы ${country.name} за границей</h2>
<p>Если вы экспат из ${country.name} или путешествуете за рубежом, IPTV позволяет смотреть все ваши любимые каналы ${country.name} из любой точки мира. Вот как:</p>
<ol>
<li>Выберите надёжного IPTV-провайдера с каналами ${country.name}</li>
<li>Подпишитесь на их услугу (сначала воспользуйтесь бесплатной пробной версией)</li>
<li>Установите IPTV-приложение на ваше устройство</li>
<li>Введите данные вашей подписки</li>
<li>Начните смотреть каналы ${country.name} мгновенно</li>
</ol>

<h2>IPTV для спортивных фанатов в ${country.name}</h2>
<p>Спортивные фанаты в ${country.name} любят IPTV за доступ к прямым трансляциям спортивных событий со всего мира. Смотрите ${country.name === 'United States' ? 'NFL, NBA, MLB, NHL' : country.name === 'United Kingdom' ? 'АПЛ, Лигу чемпионов' : country.name === 'France' ? 'Лигу 1, Top 14' : country.name === 'Spain' ? 'Ла Лигу, ACB' : country.name === 'Germany' ? 'Бундеслигу, DEL' : country.name === 'Italy' ? 'Серию A, Lega Basket' : country.name === 'Brazil' ? 'Бразилейран, NBA' : 'местные и международные виды спорта'} в прямом эфире с IPTV.</p>

<h2>Часто задаваемые вопросы об IPTV в ${country.name}</h2>
<div class="faq-item"><h3>Легален ли IPTV в ${country.name}?</h3><p>Сама технология IPTV легальна. Всегда выбирайте лицензированных провайдеров, имеющих соответствующие права на контент. Мы рекомендуем использовать легитимные IPTV-сервисы.</p></div>
<div class="faq-item"><h3>Какое IPTV-приложение лучше всего для пользователей в ${country.name}?</h3><p>Популярные варианты включают TiviMate, IPTV Smarters Pro, GSE Smart IPTV и Perfect Player. Все они отлично работают для каналов ${country.name}.</p></div>
<div class="faq-item"><h3>Могу ли я смотреть ТВ ${country.name} за границей с IPTV?</h3><p>Да! IPTV работает в любой точке мира при наличии интернет-соединения. Вы можете смотреть каналы ${country.name} из любой страны.</p></div>
<div class="faq-item"><h3>Сколько стоит IPTV в ${country.name}?</h3><p>Цены варьируются в зависимости от провайдера. Ожидайте оплату от 5 до 15 долларов в месяц за качественный сервис с каналами ${country.name}.</p></div>`;
    },
    faqArticle: (vars) => {
      const { faqItem, app, slugify } = vars;
      return `
<h2>${faqItem.q}</h2>
<p>${faqItem.a}</p>

<h2>Подробное объяснение</h2>
<p>Это один из наиболее часто задаваемых вопросов о технологии IPTV. Понимание ${faqItem.q.toLowerCase()} необходимо для получения наилучшего IPTV-опыта. В этом полном руководстве мы предоставляем подробную информацию и практические советы, которые помогут вам максимально эффективно использовать ваш IPTV-сервис.</p>

<h2>Ключевые моменты</h2>
<ul>
<li>Всегда используйте надёжное интернет-соединение для лучшей производительности</li>
<li>Выбирайте авторитетного IPTV-провайдера с хорошими отзывами</li>
<li>Поддерживайте ваши IPTV-приложения в актуальном состоянии</li>
<li>Используйте VPN для повышения конфиденциальности при необходимости</li>
<li>Тестируйте сервисы с бесплатными пробными версиями перед покупкой</li>
</ul>

<h2>Связанные темы IPTV</h2>
<ul>
<li><a href="/${vars.langCode}/${vars.slugify('What is IPTV and how does it work')}-1.html">Что такое IPTV? Полное руководство</a></li>
<li><a href="/${vars.langCode}/${vars.slugify('Best IPTV Services 2026')}-1.html">Лучшие IPTV-сервисы 2026</a></li>
<li><a href="/${vars.langCode}/${vars.slugify('How to Set Up IPTV on Firestick')}-1.html">IPTV на Firestick</a></li>
<li><a href="/${vars.langCode}/${vars.slugify(`How to Install ${app} on Any Device`)}-1.html">Установить ${app}</a></li>
</ul>`;
    },
    generic: (vars) => {
      const { title, device, app, country, faqItem } = vars;
      return `
<h2>Введение в ${title}</h2>
<p>Технология IPTV произвела революцию в том, как мы смотрим телевидение. В отличие от традиционного кабельного или спутникового ТВ, IPTV передаёт контент через интернет-сети, предлагая большую гибкость, больше каналов и лучшие цены. Настройка IPTV проста и может быть выполнена практически на любом устройстве с подключением к интернету.</p>

<h2>Почему стоит выбрать IPTV?</h2>
<p>IPTV предлагает множество преимуществ по сравнению с традиционным ТВ: более низкие затраты, больше каналов, лучшее качество и возможность просмотра на любом устройстве. С тысячами каналов со всего мира IPTV — это будущее телевидения.</p>

<h2>Как начать</h2>
<p>Чтобы начать пользоваться IPTV, вам понадобятся: стабильное интернет-соединение (25+ Мбит/с для HD), совместимое устройство, IPTV-приложение и подписка от надёжного провайдера. Следуйте нашему <a href="/${vars.langCode}/${vars.slugify(`How to Set Up IPTV on ${device}`)}-1.html">руководству по настройке для ${device}</a> для получения подробных инструкций.</p>

<h2>Лучшие приложения для использования</h2>
<p>Мы рекомендуем использовать <a href="/${vars.langCode}/${vars.slugify(`How to Install ${app} on Any Device`)}-1.html">${app}</a> для наилучшего стримингового опыта. Он предлагает отличные функции, регулярные обновления и прекрасную поддержку всех устройств.</p>

<h2>Международные каналы</h2>
<p>Одно из самых больших преимуществ IPTV — доступ к международным каналам. Ищете ли вы <a href="/${vars.langCode}/${vars.slugify(`Best IPTV Service Provider in ${country.name}`)}-1.html">каналы ${country.name}</a> или контент из любой другой страны, IPTV покрывает всё с тысячами каналов по всему миру.</p>

<div class="faq-item"><h3>Часто задаваемые вопросы</h3><p>Ответы на распространённые вопросы об IPTV смотрите в нашем <a href="/${vars.langCode}/${vars.slugify(faqItem.q.substring(0, 30))}-1.html">разделе FAQ</a> о ${faqItem.q.toLowerCase()}.</p></div>`;
    },
    translateTitle: (title, vars) => {
      const { app, device, country, faqItem } = vars;
      const exact = {
        'How to Install IPTV on Any Device - Universal Guide': 'Как установить IPTV на любое устройство - Универсальное руководство',
        'IPTV Subscription Guide 2026: Everything You Need to Know': 'Руководство по подписке IPTV 2026: всё, что нужно знать',
        'IPTV vs Cable vs Satellite: Complete Comparison Guide': 'IPTV vs Кабель vs Спутник: полное руководство по сравнению',
        'Best IPTV Service Providers Worldwide 2026': 'Лучшие поставщики услуг IPTV в мире 2026',
        'IPTV for Beginners: Complete Getting Started Guide': 'IPTV для начинающих: полное руководство по началу работы',
        'How to Watch Live Sports on IPTV: Complete Sports Guide': 'Как смотреть спорт в прямом эфире через IPTV: полное спортивное руководство',
        'IPTV VPN Setup: Best VPNs for IPTV Streaming 2026': 'Настройка VPN для IPTV: лучшие VPN для IPTV-стриминга 2026',
        'How to Create Perfect IPTV Playlist - M3U Editor Guide': 'Как создать идеальный плейлист IPTV - руководство по редактору M3U',
        'IPTV Panel Setup: Complete Reseller Guide': 'Настройка панели IPTV: полное руководство для реселлера',
        'IPTV Movie Streaming: Best VOD Services 2026': 'IPTV-стриминг фильмов: лучшие сервисы VOD 2026',
        'IPTV for Kids: Family-Friendly Streaming Guide': 'IPTV для детей: семейное руководство по стримингу',
        'IPTV for Expats: Watch Home Country TV Abroad': 'IPTV для экспатов: смотрите ТВ родной страны за рубежом',
        'IPTV Business Solutions: Commercial IPTV for Hotels': 'Бизнес-решения IPTV: коммерческое IPTV для отелей',
        'IPTV Multi-Room Setup: Watch TV in Every Room': 'Настройка IPTV в нескольких комнатах: смотрите ТВ в каждой комнате',
        'How to Fix All IPTV Problems: Ultimate Troubleshooting': 'Как исправить все проблемы IPTV: полное устранение неисправностей',
        'IPTV Sports Packages: Best Sports Channels Worldwide': 'Спортивные пакеты IPTV: лучшие спортивные каналы мира',
        'IPTV 4K Streaming: How to Watch Ultra HD Content': 'IPTV-стриминг 4K: как смотреть контент Ultra HD',
        'Best IPTV Apps for Android TV Box 2026': 'Лучшие IPTV-приложения для Android TV Box 2026',
        'Best IPTV Apps for Firestick 2026': 'Лучшие IPTV-приложения для Firestick 2026',
        'Best IPTV Apps for Samsung Smart TV 2026': 'Лучшие IPTV-приложения для Samsung Smart TV 2026',
        'Best IPTV Apps for LG WebOS TV 2026': 'Лучшие IPTV-приложения для LG WebOS TV 2026',
        'Best IPTV Apps for iPhone and iPad 2026': 'Лучшие IPTV-приложения для iPhone и iPad 2026',
        'Best IPTV Apps for Apple TV 2026': 'Лучшие IPTV-приложения для Apple TV 2026',
        'Best IPTV Apps for Windows PC 2026': 'Лучшие IPTV-приложения для Windows PC 2026',
        'Best IPTV Apps for Mac 2026': 'Лучшие IPTV-приложения для Mac 2026',
        'Best IPTV Apps for Roku 2026': 'Лучшие IPTV-приложения для Roku 2026',
        'Best IPTV Apps for MAG Box 2026': 'Лучшие IPTV-приложения для MAG Box 2026',
        'Best IPTV Apps for Formuler 2026': 'Лучшие IPTV-приложения для Formuler 2026',
        'Best IPTV Apps for Chromecast 2026': 'Лучшие IPTV-приложения для Chromecast 2026',
        'Best IPTV Apps for Nvidia Shield 2026': 'Лучшие IPTV-приложения для Nvidia Shield 2026',
        'Best IPTV Apps for Xbox 2026': 'Лучшие IPTV-приложения для Xbox 2026',
        'Best IPTV Apps for PlayStation 2026': 'Лучшие IPTV-приложения для PlayStation 2026',
        'Best IPTV Apps for Linux 2026': 'Лучшие IPTV-приложения для Linux 2026',
        'Best IPTV Apps for Android Smartphone 2026': 'Лучшие IPTV-приложения для Android-смартфонов 2026',
        'Best IPTV Apps for Smart TV 2026': 'Лучшие IPTV-приложения для Smart TV 2026'
      };
      if (exact[title]) return exact[title];
      if (title.startsWith('How to Install ') && title.includes(' on Any Device - Complete Setup Guide')) {
        return 'Как установить ' + title.replace('How to Install ', '').replace(' on Any Device - Complete Setup Guide', '') + ' на любое устройство - Полное руководство по установке';
      }
      if (title.startsWith('How to Set Up IPTV on ') && title.endsWith(' - Step by Step Guide')) {
        return 'Как настроить IPTV на ' + title.replace('How to Set Up IPTV on ', '').replace(' - Step by Step Guide', '') + ' - Пошаговое руководство';
      }
      if (title.startsWith('Best IPTV Service Provider in ') && title.includes(' Channels 2026')) {
        var c = title.replace('Best IPTV Service Provider in ', '').split(' for ')[0];
        return 'Лучший поставщик услуг IPTV в ' + c + ' для каналов ' + c + ' 2026';
      }
      if (title.endsWith(' - Complete Guide & Answer')) {
        return title.replace(' - Complete Guide & Answer', '') + ' - Полное руководство и ответ';
      }
      return title;
    },
    translateExcerpt: (type, vars) => {
      const { app, device, country, faqItem } = vars;
      const excerpts = {
        appInstall: 'Пошаговое руководство по установке ' + app + ' на любое устройство. Полное руководство по настройке ' + app + ' со скриншотами и советами по устранению неполадок для ' + device + '.',
        deviceSetup: 'Полное пошаговое руководство по настройке IPTV на ' + device + '. Узнайте, как устанавливать IPTV-приложения, настраивать плейлисты и начинать просмотр на ' + device + '.',
        countryGuide: 'Найдите лучшего поставщика услуг IPTV в ' + country.name + '. Сравните лучшие IPTV-сервисы для каналов ' + country.name + ', цены и функции. Смотрите ТВ ' + country.name + ' где угодно.',
        faqArticle: faqItem.q + ' - Подробный ответ и полное руководство по IPTV. Узнайте всё об этом популярном вопросе об IPTV.',
        generic: 'Технология IPTV произвела революцию в том, как мы смотрим телевизор. Полное руководство по настройке IPTV, приложениям и устранению неполадок для ' + device + '.'
      };
      return excerpts;
    },
    translateWhatsApp: (type, vars) => {
      const { app, device, country, faqItem } = vars;
      const messages = {
        appInstall: 'Здравствуйте! Мне нужна помощь в установке ' + encodeURIComponent(app),
        deviceSetup: 'Здравствуйте! Мне нужна помощь в настройке IPTV на ' + encodeURIComponent(device),
        countryGuide: 'Здравствуйте! Хочу лучший IPTV для ' + encodeURIComponent(country.name),
        faqArticle: 'Здравствуйте! У меня вопрос о ' + encodeURIComponent(faqItem.q.substring(0, 50)),
        generic: 'Здравствуйте! Хочу начать пользоваться IPTV'
      };
      return messages;
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CONTENT_TRANSLATIONS_RU };
}
