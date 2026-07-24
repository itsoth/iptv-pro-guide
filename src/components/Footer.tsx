import Link from 'next/link'
import { SITE_NAME, WHATSAPP } from '@/lib/constants'
import { t } from '@/lib/translations'

export default function Footer({ lang }: { lang: string }) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h2>{SITE_NAME}</h2>
            <p>{t(lang, 'footer_desc')}</p>
          </div>
          <div>
            <h2>{t(lang, 'footer_quicklinks')}</h2>
            <Link href={`/${lang}/`}>{t(lang, 'nav_home')}</Link>
            <Link href={`/${lang}/blog`}>{t(lang, 'nav_blog')}</Link>
            <Link href={`/${lang}/categories`}>{t(lang, 'nav_categories')}</Link>
            <Link href={`/${lang}/about`}>{t(lang, 'nav_about')}</Link>
            <Link href={`/${lang}/contact`}>{t(lang, 'nav_contact')}</Link>
          </div>
          <div>
            <h2>{t(lang, 'footer_legal')}</h2>
            <Link href={`/${lang}/privacy-policy`}>{t(lang, 'footer_privacy')}</Link>
            <Link href={`/${lang}/terms`}>{t(lang, 'footer_terms')}</Link>
            <Link href={`/${lang}/dmca`}>{t(lang, 'footer_dmca')}</Link>
            <Link href={`/${lang}/disclaimer`}>{t(lang, 'footer_disclaimer')}</Link>
          </div>
          <div>
            <h2>{t(lang, 'footer_follow')}</h2>
            <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">💬 {t(lang, 'footer_whatsapp')}</a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t(lang, 'footer_copyright')}</p>
        </div>
      </div>
    </footer>
  )
}
