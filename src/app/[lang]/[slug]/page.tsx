import Link from 'next/link'
import { LANGUAGES, CATEGORIES, TOTAL_ARTICLES, FAQ_QUESTIONS } from '@/lib/constants'
import { t } from '@/lib/translations'
import { generateArticle } from '@/lib/article-data'

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = []
  for (const lang of LANGUAGES) {
    for (let i = 0; i < TOTAL_ARTICLES; i++) {
      const article = generateArticle(i, lang.code)
      params.push({ lang: lang.code, slug: article.slug })
    }
  }
  return params
}

export default function ArticlePage({ params }: { params: { lang: string; slug: string } }) {
  const { lang, slug } = params
  const index = parseInt(slug.split('-').pop() || '1', 10)
  const i = (index - 1) * CATEGORIES.length
  const article = generateArticle(i, lang)
  const cat = CATEGORIES.find(c => c.slug === article.categorySlug) || CATEGORIES[0]
  const faqItem = FAQ_QUESTIONS[i % FAQ_QUESTIONS.length]
  const country = i % 2 === 0 ? { name: 'United States', code: 'us', lang: 'en' } : { name: 'United Kingdom', code: 'gb', lang: 'en' }
  const app = i % 2 === 0 ? 'IPTV Smarters Pro' : 'TiviMate'
  const device = i % 2 === 0 ? 'Amazon Fire TV Stick' : 'Nvidia Shield TV Pro'

  return (
    <main>
      <section className="breadcrumb">
        <div className="container">
          <Link href={`/${lang}/`}>{t(lang, 'breadcrumb_home')}</Link>
          <span> › </span>
          <Link href={`/${lang}/blog`}>{t(lang, 'breadcrumb_blog')}</Link>
          <span> › </span>
          <Link href={`/${lang}/categories/${cat.slug}`}>{cat.name}</Link>
          <span> › </span>
          {article.title}
        </div>
      </section>

      <section className="content-area">
        <div className="container">
          <div className="two-col">
            <div className="article-content" dangerouslySetInnerHTML={{ __html: article.html }} />

            <aside>
              <div className="sidebar">
                <h2>📂 {t(lang, 'sidebar_category')}</h2>
                <ul>
                  <li><Link href={`/${lang}/categories/${cat.slug}`}>{cat.icon} {cat.name}</Link></li>
                </ul>
              </div>
              <div className="sidebar">
                <h2>🌍 {t(lang, 'sidebar_country')}</h2>
                <ul>
                  <li><Link href={`/${lang}/${slug}`}>🌍 IPTV in {country.name}</Link></li>
                </ul>
              </div>
              <div className="sidebar">
                <h2>📱 {t(lang, 'sidebar_app')}</h2>
                <ul>
                  <li><Link href={`/${lang}/${slug}`}>📥 Install {app}</Link></li>
                </ul>
              </div>
              <div className="sidebar">
                <h2>🖥️ {t(lang, 'sidebar_device')}</h2>
                <ul>
                  <li><Link href={`/${lang}/${slug}`}>🔧 Setup {device}</Link></li>
                </ul>
              </div>
              <div className="sidebar">
                <h2>🏷️ {t(lang, 'sidebar_tags')}</h2>
                <div className="tag-cloud-sidebar">
                  {article.tags.slice(0, 20).map((tag: string) => (
                    <Link key={tag} href={`/${lang}/search?q=${encodeURIComponent(tag)}`}>{tag}</Link>
                  ))}
                </div>
              </div>
              <div className="sidebar">
                <h2>💬 {t(lang, 'sidebar_help_title')}</h2>
                <p style={{ color: '#888', fontSize: 13, marginBottom: 12 }}>{t(lang, 'sidebar_help_desc')}</p>
                <a href={`https://wa.me/212630050938?text=Hi%21%20I%20need%20help%20with%20${encodeURIComponent(article.title.substring(0, 60))}`} target="_blank" rel="noopener noreferrer" style={{ display: 'block', padding: 12, background: '#25d366', color: 'white', borderRadius: 8, textDecoration: 'none', fontWeight: 600, textAlign: 'center' }}>💬 {t(lang, 'sidebar_help_btn')}</a>
              </div>
              <div className="sidebar">
                <h2>📧 {t(lang, 'sidebar_newsletter_title')}</h2>
                <p style={{ color: '#888', fontSize: 13, marginBottom: 12 }}>{t(lang, 'sidebar_newsletter_desc')}</p>
                <form className="newsletter-form" action="#">
                  <input type="email" placeholder={t(lang, 'sidebar_newsletter_placeholder')} required />
                  <button type="submit">{t(lang, 'sidebar_newsletter_btn')}</button>
                </form>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  )
}
