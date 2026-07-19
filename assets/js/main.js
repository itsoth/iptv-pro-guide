(function(){'use strict';
var WHATSAPP_NUMBER='212630050938',WHATSAPP_MESSAGE='Hi%20IPTV%20Pro%20Guide!%20I%20need%20help%20with%20IPTV.';
var SITE_URL='https://iptvproguide.netlify.app';

function initChangeLang(){
  // Language dropdown links are already pre-rendered from generator.
  // They already point to the correct language prefix URLs.
  // We just need to ensure the current language link is marked active.
  var pathParts = window.location.pathname.split('/').filter(Boolean);
  var LANGUAGES = ['en','fr','es','ar','de','pt','it','tr','ru','nl'];
  var currentLang = 'en';
  if (pathParts.length > 0 && LANGUAGES.includes(pathParts[0])) {
    currentLang = pathParts[0];
  }
  document.querySelectorAll('.lang-switch a').forEach(function(a){
    a.classList.remove('active');
    if (a.getAttribute('data-lang') === currentLang) {
      a.classList.add('active');
    }
  });
}

function initWhatsApp(){
  var waBtn=document.querySelector('.whatsapp-float a');if(waBtn)waBtn.href='https://wa.me/'+WHATSAPP_NUMBER+'?text='+WHATSAPP_MESSAGE;
  var waPopup=document.querySelector('#whatsappPopup');var waFloat=document.querySelector('.whatsapp-float a');
  if(waFloat){waFloat.addEventListener('click',function(e){e.preventDefault();if(waPopup)waPopup.classList.toggle('show');else window.open('https://wa.me/'+WHATSAPP_NUMBER+'?text='+WHATSAPP_MESSAGE,'_blank')})}
  var sendBtn=document.querySelector('#whatsappSend');
  if(sendBtn){sendBtn.addEventListener('click',function(){var input=document.querySelector('#whatsappInput');if(input&&input.value.trim()){window.open('https://wa.me/'+WHATSAPP_NUMBER+'?text='+encodeURIComponent(input.value.trim()),'_blank');input.value=''}})}
  document.addEventListener('click',function(e){if(waPopup&&!e.target.closest('.whatsapp-float')&&!e.target.closest('.whatsapp-popup'))waPopup.classList.remove('show')})
}

function initCookieConsent(){
  var cc=document.getElementById('cookieConsent');if(cc&&!localStorage.getItem('cookieConsent'))cc.classList.add('show');
  var btn=document.querySelector('.btn-cookie');if(btn)btn.addEventListener('click',function(){localStorage.setItem('cookieConsent','true');var cc2=document.getElementById('cookieConsent');if(cc2)cc2.classList.remove('show')})
}

function initBackToTop(){
  var btn=document.getElementById('backToTop');if(!btn)return;
  window.addEventListener('scroll',function(){btn.classList.toggle('show',window.scrollY>300)});
  btn.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})})
}

function initFaq(){
  document.querySelectorAll('.faq-item h3').forEach(function(h3){h3.addEventListener('click',function(){this.parentElement.classList.toggle('active')})})
}

function initSearchInput(){
  var inputs=document.querySelectorAll('#searchInput,#searchBtn');
  if(inputs.length){document.querySelector('#searchInput,#searchBtn').forEach(function(inp){if(inp)inp.addEventListener('keyup',function(e){if(e.key==='Enter')searchArticles()})})}
}

function searchArticles(){
  var input=document.querySelector('#searchInput');
  if(input&&input.value.trim()){
    var pathParts = window.location.pathname.split('/').filter(Boolean);
    var LANGUAGES = ['en','fr','es','ar','de','pt','it','tr','ru','nl'];
    var lang = 'en';
    if (pathParts.length > 0 && LANGUAGES.includes(pathParts[0])) {
      lang = pathParts[0];
    }
    window.location.href='/'+lang+'/search.html?q='+encodeURIComponent(input.value.trim());
  } else {
    var input2=document.querySelector('#searchInput2');
    if(input2&&input2.value.trim()){
      var pathParts = window.location.pathname.split('/').filter(Boolean);
      var LANGUAGES = ['en','fr','es','ar','de','pt','it','tr','ru','nl'];
      var lang = 'en';
      if (pathParts.length > 0 && LANGUAGES.includes(pathParts[0])) {
        lang = pathParts[0];
      }
      window.location.href='/'+lang+'/search.html?q='+encodeURIComponent(input2.value.trim());
    }
  }
}

function initArticleList(){
  var list=document.getElementById('articleList');if(!list)return;
  var pathParts = window.location.pathname.split('/').filter(Boolean);
  var LANGUAGES = ['en','fr','es','ar','de','pt','it','tr','ru','nl'];
  var currentLang = 'en';
  var langPrefix = '';
  if (pathParts.length > 0 && LANGUAGES.includes(pathParts[0])) {
    currentLang = pathParts[0];
    langPrefix = '/' + currentLang;
  }
  var jsonUrl = '/en/articles.json'; // fallback
  for (var i = 0; i < LANGUAGES.length; i++) {
    if (LANGUAGES[i] === currentLang) {
      jsonUrl = '/' + currentLang + '/articles.json';
      break;
    }
  }
  if (!jsonUrl) jsonUrl = '/en/articles.json';

  var page = parseInt(new URLSearchParams(window.location.search).get('page'))||1;
  var perPage = 24;

  fetch(jsonUrl).then(function(r){return r.json()}).then(function(articles){
    var start = (page - 1) * perPage;var end = start + perPage;var pageArticles = articles.slice(start, end);
    if (pageArticles.length === 0) {
      if (page > 1) {window.location.search = 'page=1';return}
      list.innerHTML = '<p style="color:#888;padding:20px">No articles found.</p>';
      return;
    }
    var html = '';
    for (var i = 0; i < pageArticles.length; i++) {
      var a = pageArticles[i];
      html += '<div class="article-card"><span class="badge">'+a.category+'</span><h3><a href="/'+currentLang+'/'+a.slug+'.html">'+a.title.substring(0,80)+'</a></h3><p>'+a.excerpt.substring(0,100)+'...</p><div class="card-meta"><span>'+a.date+'</span><a href="/'+currentLang+'/'+a.slug+'.html" class="read-more">Read More</a></div></div>';
    }
    list.innerHTML = html;
    var totalPages = Math.ceil(articles.length / perPage);
    if (totalPages > 1) {
      var pagHtml = '';
      pagHtml += (page > 1) ? '<a href="?page=' + (page - 1) + '">&laquo; Prev</a>' : '';
      for (var p = Math.max(1, page - 2); p <= Math.min(page + 2, totalPages); p++) {
        pagHtml += '<a href="?page=' + p + '" ' + (p === page ? 'class="active"' : '') + '>' + p + '</a>'
      }
      pagHtml += (page < totalPages) ? '<a href="?page=' + (page + 1) + '">Next &raquo;</a>' : '';
      var pagContainer = document.querySelector('.pagination');
      if (pagContainer) {pagContainer.innerHTML = pagHtml}
    } else {
      var pagContainer2 = document.querySelector('.pagination');
      if (pagContainer2) {pagContainer2.innerHTML = ''}
    }
  }).catch(function(e){list.innerHTML='<p style="color:#888;padding:20px">Failed to load articles. Please try again.</p>'});
}

document.addEventListener('DOMContentLoaded', function() {
  initWhatsApp();
  initCookieConsent();
  initBackToTop();
  initFaq();
  initSearchInput();
  initArticleList();
  initChangeLang();
});
})();
