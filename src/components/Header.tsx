'use client'
import Link from 'next/link'
import { LANGUAGES } from '@/lib/constants'
import { t } from '@/lib/translations'

export default function Header({ lang }: { lang: string }) {
  return (
    <header className="header">
      <div className="container">
        <Link href={`/${lang}/`} className="logo">📺 <span>IPTV</span> Pro Guide</Link>
        <nav className="nav">
          <Link href={`/${lang}/`}>{t(lang, 'nav_home')}</Link>
          <Link href={`/${lang}/blog`}>{t(lang, 'nav_blog')}</Link>
          <Link href={`/${lang}/categories`}>{t(lang, 'nav_categories')}</Link>
          <Link href={`/${lang}/about`}>{t(lang, 'nav_about')}</Link>
          <Link href={`/${lang}/contact`}>{t(lang, 'nav_contact')}</Link>
        </nav>
        <div className="header-actions">
          <button className="header-search-btn" onClick={() => { const el = document.getElementById('searchOverlay'); if (el) el.classList.add('show') }} aria-label="Search">🔍</button>
          <button className="theme-toggle" onClick={() => { const html = document.documentElement; const isDark = html.getAttribute('data-theme') !== 'light'; html.setAttribute('data-theme', isDark ? 'light' : 'dark'); localStorage.setItem('theme', isDark ? 'light' : 'dark') }} aria-label="Toggle theme">🌙</button>
          <div className="lang-switch">
            {LANGUAGES.map(l => (
              <Link key={l.code} href={`/${l.code}`} data-lang={l.code} className={l.code === lang ? 'active' : ''}>{l.flag} {l.code.toUpperCase()}</Link>
            ))}
          </div>
          <button className="hamburger" onClick={() => { document.getElementById('mobileNav')?.classList.toggle('show'); document.getElementById('mobileOverlay')?.classList.toggle('show') }} aria-label="Menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
    </header>
  )
}
