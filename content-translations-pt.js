const CONTENT_TRANSLATIONS = {
  pt: {
    appInstall: (vars) => {
      const { app, device } = vars;
      return `
<h2>Introdução</h2>
<p>Bem-vindo ao nosso guia completo para <strong>instalar e configurar o ${app}</strong> para streaming IPTV. O ${app} é um dos aplicativos IPTV mais populares, oferecendo uma interface fácil de usar, recursos poderosos e ampla compatibilidade com dispositivos. Este guia vai te acompanhar passo a passo na instalação no ${device} e em outros dispositivos.</p>

<h2>O que é o ${app}?</h2>
<p>O ${app} é um player IPTV repleto de recursos que permite transmitir canais de TV ao vivo, filmes, séries e conteúdo de vídeo sob demanda do seu provedor IPTV. Ele suporta listas de reprodução M3U, API Xtream Codes e possui suporte EPG integrado para guias de TV. O aplicativo está disponível em várias plataformas, incluindo Android, iOS, Windows e Smart TV.</p>

<h2>Principais recursos do ${app}</h2>
<ul>
<li>Suporte para listas M3U e API Xtream Codes</li>
<li>Guia eletrônico de programação (EPG) integrado</li>
<li>Controle parental e filtragem de conteúdo</li>
<li>Suporte multi-tela e multi-dispositivo</li>
<li>Funções de gravação e catch-up TV</li>
<li>Listas de canais personalizáveis e favoritos</li>
<li>Integração com player externo</li>
<li>Atualização automática das listas de canais</li>
</ul>

<h2>Instalação do ${app} no ${device}</h2>
<p>Siga estes passos para instalar o ${app} no seu ${device} para a melhor experiência IPTV:</p>
<ol>
<li>Ligue o seu ${device} e certifique-se de que está conectado à Internet</li>
<li>Abra a loja de aplicativos ou a fonte de download adequada para o seu dispositivo</li>
<li>Pesquise "${app}" na barra de busca</li>
<li>Selecione o aplicativo oficial do ${app} nos resultados</li>
<li>Clique em Instalar / Baixar e aguarde a conclusão da instalação</li>
<li>Após instalado, abra o aplicativo ${app}</li>
<li>Insira os dados do seu provedor IPTV (URL M3U, Xtream Codes ou URL do portal)</li>
<li>Aguarde o carregamento da lista de canais e comece a assistir</li>
</ol>

<h2>Instalação em outros dispositivos</h2>
<p>O ${app} também pode ser instalado em muitos outros dispositivos. Aqui estão guias rápidos para plataformas populares:</p>
<p><strong>Firestick:</strong> Ative Aplicativos de origens desconhecidas nas Opções do desenvolvedor. Instale o Downloader pela Amazon Store. Insira a URL de download do ${app} no Downloader. Instale e insira suas credenciais IPTV.</p>
<p><strong>Android TV:</strong> Abra a Google Play Store, pesquise por ${app}, instale, abra e insira os dados do provedor.</p>
<p><strong>Samsung/LG Smart TV:</strong> Algumas versões podem precisar de sideloading. Verifique se está disponível na loja de aplicativos da sua TV ou use o Smart IPTV.</p>
<p><strong>iPhone/iPad:</strong> Disponível na App Store. Baixe, instale, insira a URL e as credenciais do seu provedor.</p>
<p><strong>Windows PC:</strong> Baixe do site oficial ou da Microsoft Store. Instale e configure com sua assinatura IPTV.</p>

<h2>Dicas de configuração</h2>
<p>Após a instalação, configure o ${app} para a melhor experiência:</p>
<ul>
<li><strong>Configuração EPG:</strong> Insira sua URL EPG nas Configurações para obter as programações de TV</li>
<li><strong>Player de vídeo:</strong> Escolha entre o player integrado ou um externo (VLC, MX Player)</li>
<li><strong>Tamanho do buffer:</strong> Aumente o tamanho do buffer se estiver com problemas de buffering</li>
<li><strong>Atualização automática:</strong> Ative a atualização automática das listas de reprodução e EPG</li>
<li><strong>Controle parental:</strong> Defina um PIN para conteúdo restrito</li>
<li><strong>Rede:</strong> Use uma conexão Ethernet com fio para maior estabilidade</li>
</ul>

<h2>Solução de problemas</h2>
<p>Se você encontrar problemas com o ${app}, tente estas soluções:</p>
<ul>
<li><strong>O aplicativo não carrega:</strong> Limpe o cache, reinicie o dispositivo, reinstale o aplicativo</li>
<li><strong>Nenhum canal é exibido:</strong> Verifique se sua assinatura está ativa, recarregue a lista de reprodução</li>
<li><strong>Buffering:</strong> Reduza a qualidade do vídeo, use VPN, verifique a velocidade da Internet</li>
<li><strong>EPG não funciona:</strong> Verifique a URL EPG, atualize os dados EPG, reinicie o aplicativo</li>
<li><strong>Problemas de áudio:</strong> Verifique a faixa de áudio, ajuste o atraso de áudio, troque de player</li>
</ul>

<h2>FAQ sobre o ${app}</h2>
<div class="faq-item"><h3>O ${app} é gratuito?</h3><p>O ${app} oferece uma versão gratuita com recursos básicos. A versão premium desbloqueia recursos adicionais como gravação, multi-tela e configurações avançadas.</p></div>
<div class="faq-item"><h3>Posso usar o ${app} em vários dispositivos?</h3><p>Sim, você pode instalar o ${app} em vários dispositivos. Você precisará das credenciais da sua assinatura IPTV para cada dispositivo.</p></div>
<div class="faq-item"><h3>O ${app} é compatível com catch-up TV?</h3><p>Se o seu provedor IPTV oferecer catch-up TV, o ${app} pode exibir e reproduzir o conteúdo de recuperação através da interface EPG.</p></div>
<div class="faq-item"><h3>Como atualizar o ${app}?</h3><p>Atualize pela loja de aplicativos do seu dispositivo ou baixe a versão mais recente do site oficial.</p></div>`;
    },
    deviceSetup: (vars) => {
      const { device, app } = vars;
      return `
<h2>Introdução</h2>
<p>Este guia completo vai te mostrar <strong>como configurar IPTV no ${device}</strong>. Seja você um iniciante ou um usuário experiente, este tutorial passo a passo vai te ajudar a deixar o IPTV funcionando no seu ${device} em minutos.</p>

<h2>O que você precisa antes de começar</h2>
<ul>
<li>Uma conexão de Internet funcionando (mínimo de 25 Mbps para HD)</li>
<li>Uma assinatura IPTV ativa</li>
<li>Os dados do seu provedor IPTV (URL M3U, Xtream Codes ou URL do portal)</li>
<li>O dispositivo ${device} completamente carregado ou conectado</li>
<li>Uma conexão WiFi ou Ethernet estável</li>
</ul>

<h2>Passo 1: Escolher um aplicativo IPTV para ${device}</h2>
<p>O primeiro passo é selecionar o aplicativo IPTV certo para o seu ${device}. Recomendamos estas opções populares:</p>
<ul>
<li><strong>IPTV Smarters Pro</strong> - Melhor aplicativo versátil, funciona em todos os dispositivos</li>
<li><strong>TiviMate</strong> - Melhor para Android TV Box e Firestick</li>
<li><strong>GSE Smart IPTV</strong> - Melhor para usuários de iPhone/iPad</li>
<li><strong>Perfect Player</strong> - Leve e rápido</li>
<li><strong>OTT Navigator</strong> - Rico em recursos com excelente suporte a EPG</li>
</ul>

<h2>Passo 2: Instalar o aplicativo IPTV no ${device}</h2>
<p>${device === 'Amazon Fire TV Stick' ? "Vá em Configurações > Meu Fire TV > Opções do desenvolvedor > Instalar aplicativos desconhecidos > Ative o Downloader. Instale o Downloader pela Amazon Appstore. Abra o Downloader e insira a URL do aplicativo IPTV escolhido. Baixe e instale o arquivo APK." : "Abra a loja de aplicativos no seu " + device + ". Pesquise pelo aplicativo IPTV escolhido. Toque em Instalar/Baixar. Aguarde a conclusão da instalação."}</p>

<h2>Passo 3: Configurar sua assinatura IPTV</h2>
<p>Abra o aplicativo IPTV instalado. Você verá uma tela de boas-vindas com opções para inserir os dados da sua assinatura:</p>
<ul>
<li><strong>URL da lista M3U:</strong> Copie e cole o link M3U fornecido pelo seu serviço IPTV</li>
<li><strong>API Xtream Codes:</strong> Insira a URL do servidor, nome de usuário e senha</li>
<li><strong>URL do portal:</strong> Insira a URL do portal MAG/STB se você usar esse sistema</li>
</ul>
<p>Após inserir seus dados, clique em Entrar ou Carregar lista. Seus canais serão carregados automaticamente.</p>

<h2>Passo 4: Personalizar sua experiência IPTV</h2>
<p>Assim que seus canais estiverem carregados, personalize a experiência:</p>
<ul>
<li>Crie uma lista de canais favoritos</li>
<li>Configure o EPG (Guia de TV) com a URL EPG do seu provedor</li>
<li>Organize os canais em grupos personalizados</li>
<li>Defina o controle parental, se necessário</li>
<li>Configure as opções do player de vídeo</li>
<li>Ative a atualização automática das listas de canais</li>
</ul>

<h2>Solução de problemas de configuração IPTV no ${device}</h2>
<ul>
<li><strong>Nenhum canal carrega:</strong> Verifique a assinatura, recarregue a lista, reinicie o aplicativo</li>
<li><strong>Buffering:</strong> Reduza a qualidade, use Ethernet, feche aplicativos em segundo plano</li>
<li><strong>O aplicativo trava:</strong> Limpe o cache, atualize o aplicativo, reinstale</li>
<li><strong>Problemas de áudio:</strong> Verifique as configurações de áudio, troque de player</li>
<li><strong>EPG não funciona:</strong> Atualize o EPG, verifique a URL, entre em contato com o provedor</li>
</ul>

<h2>Perguntas frequentes</h2>
<div class="faq-item"><h3>Posso usar IPTV no meu ${device}?</h3><p>Sim, o IPTV funciona perfeitamente no ${device}. Basta seguir os passos acima para instalar um aplicativo IPTV e inserir os dados da sua assinatura.</p></div>
<div class="faq-item"><h3>Qual velocidade de Internet eu preciso para IPTV no ${device}?</h3><p>Para conteúdo HD: mínimo de 25 Mbps. Para 4K: mínimo de 50 Mbps. Recomenda-se uma conexão com fio para melhor desempenho.</p></div>
<div class="faq-item"><h3>Eu preciso de um VPN para IPTV no ${device}?</h3><p>Um VPN pode ajudar a evitar a limitação do provedor de Internet e proteger sua privacidade. Escolha um VPN rápido com servidores próximos à sua localização.</p></div>`;
    },
    countryGuide: (vars) => {
      const { country, device, app } = vars;
      const langName = country.lang === 'ar' ? 'Árabe' : country.lang === 'fr' ? 'Francês' : country.lang === 'es' ? 'Espanhol' : country.lang === 'de' ? 'Alemão' : country.lang === 'pt' ? 'Português' : country.lang === 'nl' ? 'Holandês' : country.lang === 'tr' ? 'Turco' : country.lang === 'ru' ? 'Russo' : 'Inglês';
      return `
<h2>Introdução</h2>
<p>Você está procurando o <strong>melhor provedor de serviços IPTV em ${country.name}</strong>? Este guia completo vai te ajudar a encontrar a assinatura IPTV perfeita para assistir canais ${country.name}, conteúdo local e programação internacional. Esteja você morando em ${country.name} ou seja um expatriado no exterior, temos as melhores recomendações para você.</p>

<h2>Por que escolher IPTV em ${country.name}?</h2>
<p>A IPTV está se tornando cada vez mais popular em ${country.name} por vários motivos:</p>
<ul>
<li><strong>Economia de custos:</strong> A IPTV geralmente é mais barata que o cabo ou satélite tradicional</li>
<li><strong>Variedade de canais:</strong> Acesso a centenas de canais ${country.name} mais conteúdo internacional</li>
<li><strong>Flexibilidade:</strong> Assista em qualquer dispositivo - TV, celular, tablet ou computador</li>
<li><strong>Sem contratos:</strong> Assinaturas mensais sem compromissos de longo prazo</li>
<li><strong>Qualidade HD e 4K:</strong> Desfrute de qualidade de imagem cristalina</li>
<li><strong>Catch-up e VOD:</strong> Veja programas perdidos e milhares de filmes sob demanda</li>
</ul>

<h2>Melhor provedor IPTV para canais ${country.name}</h2>
<p>Ao escolher um provedor IPTV para ${country.name}, procure por estas características principais:</p>
<ul>
<li><strong>Canais locais:</strong> Acesso a canais de notícias, esportes e entretenimento ${country.name}</li>
<li><strong>Suporte de idioma:</strong> Interface e conteúdo em ${langName}</li>
<li><strong>Servidores confiáveis:</strong> Streaming rápido e estável com mínimo de buffering</li>
<li><strong>Opções de pagamento:</strong> Métodos de pagamento disponíveis em ${country.name}</li>
<li><strong>Suporte:</strong> Atendimento ao cliente que entende as necessidades de ${country.name}</li>
</ul>

<h2>Recursos principais</h2>
<p>Nossos provedores IPTV recomendados para ${country.name} oferecem estes recursos:</p>
<ul>
<li><strong>Lista de canais extensa:</strong> ${Math.floor(Math.random() * 5000) + 5000}+ canais ao vivo incluindo todas as principais redes ${country.name}</li>
<li><strong>Biblioteca VOD:</strong> ${Math.floor(Math.random() * 10000) + 10000}+ filmes e programas de TV</li>
<li><strong>Qualidade 4K e FHD:</strong> Opções de streaming Ultra HD e Full HD</li>
<li><strong>Guia EPG:</strong> Guia eletrônico de programação para navegação fácil pelos canais</li>
<li><strong>Tecnologia anti-congelamento:</strong> Servidores estáveis com mínimo de buffering</li>
<li><strong>Suporte ao cliente 24/7:</strong> Ajuda disponível quando você precisar</li>
<li><strong>Teste gratuito:</strong> Experimente o serviço antes de assinar</li>
<li><strong>Multi-dispositivo:</strong> Assista em vários dispositivos simultaneamente</li>
</ul>

<h2>Como assistir canais ${country.name} no exterior</h2>
<p>Se você é um expatriado ${country.name} ou está viajando para o exterior, a IPTV permite que você assista a todos os seus canais ${country.name} favoritos de qualquer lugar do mundo. Veja como:</p>
<ol>
<li>Escolha um provedor IPTV confiável com canais ${country.name}</li>
<li>Assine o serviço (use o teste gratuito primeiro)</li>
<li>Instale o aplicativo IPTV no seu dispositivo</li>
<li>Insira os dados da sua assinatura</li>
<li>Comece a assistir canais ${country.name} instantaneamente</li>
</ol>

<h2>IPTV para fãs de esportes em ${country.name}</h2>
<p>Os fãs de esportes em ${country.name} amam a IPTV pelo acesso a eventos esportivos ao vivo de todo o mundo. Assista ${country.name === 'United States' ? 'a NFL, NBA, MLB, NHL' : country.name === 'United Kingdom' ? 'a Premier League, a Champions League' : country.name === 'France' ? 'a Ligue 1, o Top 14' : country.name === 'Spain' ? 'La Liga, a ACB' : country.name === 'Germany' ? 'a Bundesliga, a DEL' : country.name === 'Italy' ? 'a Serie A, a Lega Basket' : country.name === 'Brazil' ? 'o Brasileirão, a NBA' : 'esportes locais e internacionais'} ao vivo com IPTV.</p>

<h2>Perguntas frequentes sobre IPTV em ${country.name}</h2>
<div class="faq-item"><h3>IPTV é legal em ${country.name}?</h3><p>A tecnologia IPTV em si é legal. Escolha sempre provedores licenciados que tenham os direitos de conteúdo adequados. Recomendamos usar serviços IPTV legítimos.</p></div>
<div class="faq-item"><h3>Qual é o melhor aplicativo IPTV para usuários em ${country.name}?</h3><p>As opções populares incluem TiviMate, IPTV Smarters Pro, GSE Smart IPTV e Perfect Player. Todos funcionam muito bem para canais ${country.name}.</p></div>
<div class="faq-item"><h3>Posso assistir TV ${country.name} no exterior com IPTV?</h3><p>Sim! A IPTV funciona em qualquer lugar do mundo com uma conexão de Internet. Você pode assistir canais ${country.name} de qualquer país.</p></div>
<div class="faq-item"><h3>Quanto custa a IPTV em ${country.name}?</h3><p>Os preços variam conforme o provedor. Espere pagar entre $5-15/mês por um serviço de qualidade com canais ${country.name}.</p></div>`;
    },
    faqArticle: (vars) => {
      const { faqItem, app, slugify } = vars;
      return `
<h2>${faqItem.q}</h2>
<p>${faqItem.a}</p>

<h2>Explicação detalhada</h2>
<p>Esta é uma das perguntas mais frequentes sobre a tecnologia IPTV. Compreender ${faqItem.q.toLowerCase()} é essencial para obter a melhor experiência IPTV. Neste guia completo, fornecemos informações detalhadas e dicas práticas para ajudar você a aproveitar ao máximo seu serviço IPTV.</p>

<h2>Pontos-chave para lembrar</h2>
<ul>
<li>Sempre use uma conexão de Internet confiável para melhor desempenho</li>
<li>Escolha um provedor IPTV de boa reputação com boas avaliações</li>
<li>Mantenha seus aplicativos IPTV atualizados para as versões mais recentes</li>
<li>Use um VPN para maior privacidade, se necessário</li>
<li>Teste os serviços com testes gratuitos antes de se comprometer</li>
</ul>

<h2>Tópicos IPTV relacionados</h2>
<ul>
<li><a href="/${vars.langCode}/${vars.slugify('What is IPTV and how does it work')}-1.html">O que é IPTV? Guia completo</a></li>
<li><a href="/${vars.langCode}/${vars.slugify('Best IPTV Services 2026')}-1.html">Melhores serviços IPTV 2026</a></li>
<li><a href="/${vars.langCode}/${vars.slugify('How to Set Up IPTV on Firestick')}-1.html">IPTV no Firestick</a></li>
<li><a href="/${vars.langCode}/${vars.slugify(`How to Install ${app} on Any Device`)}-1.html">Instalar ${app}</a></li>
</ul>`;
    },
    generic: (vars) => {
      const { title, device, app, country, faqItem } = vars;
      return `
<h2>Introdução a ${title}</h2>
<p>A tecnologia IPTV revolucionou a forma como assistimos TV. Ao contrário do cabo ou satélite tradicional, a IPTV transmite conteúdo através de redes de Internet, oferecendo maior flexibilidade, mais canais e melhores preços. Configurar a IPTV é simples e pode ser feito em praticamente qualquer dispositivo com conexão à Internet.</p>

<h2>Por que escolher IPTV?</h2>
<p>A IPTV oferece inúmeras vantagens sobre a TV tradicional: custos mais baixos, mais canais, melhor qualidade e a possibilidade de assistir em qualquer dispositivo. Com milhares de canais disponíveis de todo o mundo, a IPTV é o futuro da televisão.</p>

<h2>Como começar</h2>
<p>Para começar com a IPTV, você precisa: de uma conexão de Internet estável (25+ Mbps para HD), um dispositivo compatível, um aplicativo IPTV e uma assinatura de um provedor confiável. Siga nosso <a href="/${vars.langCode}/${vars.slugify(`How to Set Up IPTV on ${device}`)}-1.html">guia de configuração para ${device}</a> para instruções detalhadas.</p>

<h2>Melhores aplicativos para usar</h2>
<p>Recomendamos usar o <a href="/${vars.langCode}/${vars.slugify(`How to Install ${app} on Any Device`)}-1.html">${app}</a> para a melhor experiência de streaming. Ele oferece recursos excelentes, atualizações regulares e ótimo suporte para todos os dispositivos.</p>

<h2>Canais internacionais</h2>
<p>Uma das maiores vantagens da IPTV é o acesso a canais internacionais. Quer você esteja procurando <a href="/${vars.langCode}/${vars.slugify(`Best IPTV Service Provider in ${country.name}`)}-1.html">canais ${country.name}</a> ou conteúdo de qualquer outro país, a IPTV te atende com milhares de canais ao redor do mundo.</p>

<div class="faq-item"><h3>Perguntas comuns</h3><p>Para respostas a perguntas comuns sobre IPTV, consulte nossa <a href="/${vars.langCode}/${vars.slugify(faqItem.q.substring(0, 30))}-1.html">seção de FAQ</a> sobre ${faqItem.q.toLowerCase()}.</p></div>`;
    },
    translateTitle: (title, vars) => {
      const { app, device, country, faqItem } = vars;
      const exact = {
        'How to Install IPTV on Any Device - Universal Guide': 'Como Instalar IPTV em Qualquer Dispositivo - Guia Universal',
        'IPTV Subscription Guide 2026: Everything You Need to Know': 'Guia de Assinatura IPTV 2026: Tudo Que Você Precisa Saber',
        'IPTV vs Cable vs Satellite: Complete Comparison Guide': 'IPTV vs Cabo vs Satélite: Guia de Comparação Completo',
        'Best IPTV Service Providers Worldwide 2026': 'Melhores Provedores de Serviço IPTV do Mundo 2026',
        'IPTV for Beginners: Complete Getting Started Guide': 'IPTV para Iniciantes: Guia Completo para Começar',
        'How to Watch Live Sports on IPTV: Complete Sports Guide': 'Como Assistir Esportes Ao Vivo na IPTV: Guia Completo de Esportes',
        'IPTV VPN Setup: Best VPNs for IPTV Streaming 2026': 'Configuração de VPN para IPTV: Melhores VPNs para Streaming IPTV 2026',
        'How to Create Perfect IPTV Playlist - M3U Editor Guide': 'Como Criar a Lista de Reprodução IPTV Perfeita - Guia do Editor M3U',
        'IPTV Panel Setup: Complete Reseller Guide': 'Configuração de Painel IPTV: Guia Completo para Revendedores',
        'IPTV Movie Streaming: Best VOD Services 2026': 'Streaming de Filmes IPTV: Melhores Serviços VOD 2026',
        'IPTV for Kids: Family-Friendly Streaming Guide': 'IPTV para Crianças: Guia de Streaming Familiar',
        'IPTV for Expats: Watch Home Country TV Abroad': 'IPTV para Expatriados: Assista TV do Seu País no Exterior',
        'IPTV Business Solutions: Commercial IPTV for Hotels': 'Soluções IPTV para Empresas: IPTV Comercial para Hotéis',
        'IPTV Multi-Room Setup: Watch TV in Every Room': 'Configuração IPTV Multiroom: Assista TV em Todos os Cômodos',
        'How to Fix All IPTV Problems: Ultimate Troubleshooting': 'Como Resolver Todos os Problemas de IPTV: Solução de Problemas Definitiva',
        'IPTV Sports Packages: Best Sports Channels Worldwide': 'Pacotes de Esportes IPTV: Melhores Canais de Esportes do Mundo',
        'IPTV 4K Streaming: How to Watch Ultra HD Content': 'Streaming IPTV 4K: Como Assistir Conteúdo Ultra HD',
        'Best IPTV Apps for Android TV Box 2026': 'Melhores Aplicativos IPTV para Android TV Box 2026',
        'Best IPTV Apps for Firestick 2026': 'Melhores Aplicativos IPTV para Firestick 2026',
        'Best IPTV Apps for Samsung Smart TV 2026': 'Melhores Aplicativos IPTV para Samsung Smart TV 2026',
        'Best IPTV Apps for LG WebOS TV 2026': 'Melhores Aplicativos IPTV para LG WebOS TV 2026',
        'Best IPTV Apps for iPhone and iPad 2026': 'Melhores Aplicativos IPTV para iPhone e iPad 2026',
        'Best IPTV Apps for Apple TV 2026': 'Melhores Aplicativos IPTV para Apple TV 2026',
        'Best IPTV Apps for Windows PC 2026': 'Melhores Aplicativos IPTV para Windows PC 2026',
        'Best IPTV Apps for Mac 2026': 'Melhores Aplicativos IPTV para Mac 2026',
        'Best IPTV Apps for Roku 2026': 'Melhores Aplicativos IPTV para Roku 2026',
        'Best IPTV Apps for MAG Box 2026': 'Melhores Aplicativos IPTV para MAG Box 2026',
        'Best IPTV Apps for Formuler 2026': 'Melhores Aplicativos IPTV para Formuler 2026',
        'Best IPTV Apps for Chromecast 2026': 'Melhores Aplicativos IPTV para Chromecast 2026',
        'Best IPTV Apps for Nvidia Shield 2026': 'Melhores Aplicativos IPTV para Nvidia Shield 2026',
        'Best IPTV Apps for Xbox 2026': 'Melhores Aplicativos IPTV para Xbox 2026',
        'Best IPTV Apps for PlayStation 2026': 'Melhores Aplicativos IPTV para PlayStation 2026',
        'Best IPTV Apps for Linux 2026': 'Melhores Aplicativos IPTV para Linux 2026',
        'Best IPTV Apps for Android Smartphone 2026': 'Melhores Aplicativos IPTV para Smartphone Android 2026',
        'Best IPTV Apps for Smart TV 2026': 'Melhores Aplicativos IPTV para Smart TV 2026'
      };
      if (exact[title]) return exact[title];
      if (title.startsWith('How to Install ') && title.includes(' on Any Device - Complete Setup Guide')) {
        return 'Como instalar ' + title.replace('How to Install ', '').replace(' on Any Device - Complete Setup Guide', '') + ' em qualquer dispositivo - Guia de configuração completo';
      }
      if (title.startsWith('How to Set Up IPTV on ') && title.endsWith(' - Step by Step Guide')) {
        return 'Como configurar IPTV em ' + title.replace('How to Set Up IPTV on ', '').replace(' - Step by Step Guide', '') + ' - Guia passo a passo';
      }
      if (title.startsWith('Best IPTV Service Provider in ') && title.includes(' Channels 2026')) {
        var c = title.replace('Best IPTV Service Provider in ', '').split(' for ')[0];
        return 'Melhor provedor de serviço IPTV em ' + c + ' para canais ' + c + ' 2026';
      }
      if (title.endsWith(' - Complete Guide & Answer')) {
        return title.replace(' - Complete Guide & Answer', '') + ' - Guia completo e resposta';
      }
      return title;
    },
    translateExcerpt: (type, vars) => {
      const { app, device, country, faqItem } = vars;
      const excerpts = {
        appInstall: 'Guia passo a passo para instalar o ' + app + ' em qualquer dispositivo. Tutorial completo de configuração do ' + app + ' com capturas de tela e dicas de solução de problemas para ' + device + '.',
        deviceSetup: 'Guia completo passo a passo para configurar IPTV no ' + device + '. Aprenda a instalar aplicativos IPTV, configurar listas de reprodução e começar a assistir no ' + device + '.',
        countryGuide: 'Encontre o melhor provedor de serviço IPTV em ' + country.name + '. Compare os melhores serviços IPTV para canais ' + country.name + ', preços e recursos. Assista TV ' + country.name + ' em qualquer lugar.',
        faqArticle: faqItem.q + ' - Resposta detalhada e guia completo sobre IPTV. Aprenda tudo sobre esta pergunta comum de IPTV.',
        generic: 'A tecnologia IPTV revolucionou a forma como assistimos TV. Guia completo sobre configuração de IPTV, aplicativos e solução de problemas para ' + device + '.'
      };
      return excerpts;
    },
    translateWhatsApp: (type, vars) => {
      const { app, device, country, faqItem } = vars;
      const messages = {
        appInstall: 'Olá! Preciso de ajuda para instalar o ' + encodeURIComponent(app),
        deviceSetup: 'Olá! Preciso de ajuda para configurar IPTV no ' + encodeURIComponent(device),
        countryGuide: 'Olá! Quero o melhor IPTV para ' + encodeURIComponent(country.name),
        faqArticle: 'Olá! Tenho uma pergunta sobre ' + encodeURIComponent(faqItem.q.substring(0, 50)),
        generic: 'Olá! Quero começar com IPTV'
      };
      return messages;
    }
  }
};

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { CONTENT_TRANSLATIONS };
}
