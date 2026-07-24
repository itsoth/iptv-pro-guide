'use client'
import { useEffect } from 'react'
import { WHATSAPP } from '@/lib/constants'
import { t } from '@/lib/translations'

export default function ClientLayout({ children, lang }: { children: React.ReactNode; lang: string }) {
  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light') document.documentElement.setAttribute('data-theme', 'light')

    const closeSearch = (e: Event) => {
      if ((e.target as HTMLElement).closest('.search-overlay-close') || (e.target as HTMLElement).classList.contains('search-overlay')) {
        document.getElementById('searchOverlay')?.classList.remove('show')
      }
    }
    document.addEventListener('click', closeSearch)

    const handleCookie = () => {
      const btn = document.querySelector('.btn-cookie')
      if (btn) {
        btn.addEventListener('click', () => {
          localStorage.setItem('cookieConsent', 'true')
          document.getElementById('cookieConsent')?.classList.remove('show')
        })
      }
      if (!localStorage.getItem('cookieConsent')) {
        document.getElementById('cookieConsent')?.classList.add('show')
      }
    }
    handleCookie()

    const handleWhatsApp = () => {
      document.getElementById('whatsappBtn')?.addEventListener('click', (e) => {
        e.preventDefault()
        document.getElementById('whatsappPopup')?.classList.toggle('show')
      })
      document.getElementById('whatsappSend')?.addEventListener('click', () => {
        const input = document.getElementById('whatsappInput') as HTMLInputElement
        if (input?.value) {
          window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(input.value)}`, '_blank')
        }
      })
    }
    handleWhatsApp()

    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      const progress = document.getElementById('readingProgress')
      if (progress) progress.style.width = scrollPercent + '%'
      const backBtn = document.getElementById('backToTop')
      if (backBtn) backBtn.classList.toggle('visible', scrollTop > 300)
    }
    window.addEventListener('scroll', handleScroll)
    handleScroll()

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div className="mobile-overlay" id="mobileOverlay" onClick={() => { document.getElementById('mobileNav')?.classList.remove('show'); document.getElementById('mobileOverlay')?.classList.remove('show') }}></div>
      <nav className="mobile-nav" id="mobileNav">
        <div className="nav">
          {[
            { href: `/${lang}/`, label: t(lang, 'nav_home') },
            { href: `/${lang}/blog`, label: t(lang, 'nav_blog') },
            { href: `/${lang}/categories`, label: t(lang, 'nav_categories') },
            { href: `/${lang}/about`, label: t(lang, 'nav_about') },
            { href: `/${lang}/contact`, label: t(lang, 'nav_contact') },
          ].map(link => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </div>
      </nav>

      <div className="search-overlay" id="searchOverlay">
        <div className="search-overlay-content">
          <button className="search-overlay-close">&times;</button>
          <h3 style={{ color: 'var(--text-primary)', fontSize: 18, fontWeight: 700 }}>🔍 {t(lang, 'search_title')}</h3>
          <input type="text" id="searchOverlayInput" placeholder={t(lang, 'search_placeholder')} autoComplete="off" />
          <div className="search-overlay-results" id="searchOverlayResults"></div>
        </div>
      </div>

      <div className="reading-progress" id="readingProgress"></div>

      {children}

      <div className="whatsapp-float">
        <div className="tooltip">{t(lang, 'whatsapp_tooltip')}</div>
        <a href="#" id="whatsappBtn">
          <svg viewBox="0 0 24 24" width="30" height="30" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.165-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
            <path d="M12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.168L2 22l4.832-1.438A9.93 9.93 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.889 0-3.633-.656-5.008-1.756l-3.4 1.06 1.06-3.4A7.94 7.94 0 014 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
          </svg>
        </a>
      </div>

      <div className="whatsapp-popup" id="whatsappPopup">
        <div className="whatsapp-popup-header">
          <img src="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='50' fill='%2325d366'/><text x='50' y='65' text-anchor='middle' font-size='40' fill='white'>📺</text></svg>" alt="Support" />
          <div>
            <h4>{t(lang, 'whatsapp_popup_title')}</h4>
            <p>{t(lang, 'whatsapp_popup_subtitle')}</p>
          </div>
        </div>
        <div className="whatsapp-popup-body">
          <div className="msg">👋 {t(lang, 'whatsapp_greeting')}</div>
          <div className="msg reply">{t(lang, 'whatsapp_reply')}</div>
        </div>
        <div className="whatsapp-popup-footer">
          <input type="text" id="whatsappInput" placeholder={t(lang, 'whatsapp_placeholder')} defaultValue={t(lang, 'whatsapp_default')} />
          <button id="whatsappSend">{t(lang, 'whatsapp_send')}</button>
        </div>
      </div>

      <div className="cookie-consent" id="cookieConsent">
        <div className="container">
          <p>{t(lang, 'cookie_text')}</p>
          <button className="btn-cookie">{t(lang, 'cookie_accept')}</button>
        </div>
      </div>

      <button className="back-to-top" id="backToTop" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>↑</button>
    </>
  )
}
