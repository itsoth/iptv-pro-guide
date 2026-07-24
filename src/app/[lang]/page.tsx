import Link from 'next/link'
import { LANGUAGES, CATEGORIES, FAQ_QUESTIONS, SITE_NAME, TOTAL_ARTICLES } from '@/lib/constants'
import { t } from '@/lib/translations'
import { generateArticle } from '@/lib/article-data'

export function generateStaticParams() {
  return LANGUAGES.map(lang => ({ lang: lang.code }))
}

export default function HomePage({ params }: { params: { lang: string } }) {
  const { lang } = params
  const langData = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0]
  const articles = Array.from({ length: 6 }, (_, i) => generateArticle(i, lang))

  return (
    <main>
      <section style={{
        textAlign: 'center',
        padding: '80px 20px',
        position: 'relative',
        background: 'linear-gradient(135deg,#0a0a1a 0,#0f0f2a 50%,#0a0a1a 100%)'
      }}>
        <h1 style={{ fontSize: 48, fontWeight: 900, color: '#fff', marginBottom: 16, letterSpacing: -1, lineHeight: 1.2 }}>
          <span style={{ background: 'linear-gradient(135deg,#10b981,#3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            IPTV Pro Guide
          </span>
        </h1>
        <p style={{ color: '#a0a0b8', fontSize: 18, maxWidth: 600, margin: '0 auto 30px', lineHeight: 1.7 }}>
          {t(lang, 'site_desc')}
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 40, flexWrap: 'wrap' }}>
          <div><div style={{ fontSize: 36, fontWeight: 900, background: 'linear-gradient(135deg,#10b981,#3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{TOTAL_ARTICLES * 10}+</div><div style={{ color: '#6b6b80', fontSize: 13 }}>Articles</div></div>
          <div><div style={{ fontSize: 36, fontWeight: 900, background: 'linear-gradient(135deg,#10b981,#3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>10</div><div style={{ color: '#6b6b80', fontSize: 13 }}>Languages</div></div>
          <div><div style={{ fontSize: 36, fontWeight: 900, background: 'linear-gradient(135deg,#10b981,#3b82f6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>{CATEGORIES.length}</div><div style={{ color: '#6b6b80', fontSize: 13 }}>Categories</div></div>
        </div>
      </section>

      <section className="content-area" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <h2 style={{ fontSize: 28, marginBottom: 30, textAlign: 'center' }}>📝 Featured Articles</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: 20 }}>
            {articles.map((article) => (
              <article key={article.slug} className="article-row" style={{ flexDirection: 'column', padding: 24 }}>
                <span className="card-category">{article.category}</span>
                <h3 style={{ margin: '8px 0', fontSize: 18 }}><Link href={`/${lang}/${article.slug}`} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>{article.title}</Link></h3>
                <p style={{ color: 'var(--text-muted)', fontSize: 13, lineHeight: 1.6 }}>{article.excerpt.substring(0, 120)}...</p>
                <div className="meta" style={{ color: 'var(--text-muted)', fontSize: 12 }}>📅 {article.date}</div>
              </article>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: 30 }}>
            <Link href={`/${lang}/blog`} style={{
              display: 'inline-block',
              padding: '12px 30px',
              background: 'linear-gradient(135deg,#10b981,#059669)',
              color: '#fff',
              borderRadius: 50,
              textDecoration: 'none',
              fontWeight: 600,
              transition: 'all .3s'
            }}>View All Articles →</Link>
          </div>
        </div>
      </section>

      <section className="content-area" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <h2 style={{ fontSize: 28, marginBottom: 30, textAlign: 'center' }}>📂 Categories</h2>
          <div className="cat-grid">
            {CATEGORIES.map(cat => (
              <Link key={cat.slug} href={`/${lang}/categories/${cat.slug}`} className="cat-card" style={{ textDecoration: 'none' }}>
                <div className="cat-icon">{cat.icon}</div>
                <div className="cat-info">
                  <h3>{cat.name}</h3>
                  <p>{cat.desc}</p>
                  <span className="cat-link">{t(lang, 'categories_browse')} →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="content-area" style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container" style={{ maxWidth: 800, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, marginBottom: 30, textAlign: 'center' }}>❓ Frequently Asked Questions</h2>
          {FAQ_QUESTIONS.slice(0, 6).map((faq, i) => (
            <div key={i} className="faq-item">
              <h3>{faq.q}</h3>
              <p>{faq.a}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-section" style={{ margin: 0, borderRadius: 0 }}>
        <div className="container">
          <h3 style={{ fontSize: 28, marginBottom: 10 }}>💬 {t(lang, 'article_cta_heading')}</h3>
          <p>{t(lang, 'article_cta_desc')}</p>
          <a href={`https://wa.me/212630050938`} target="_blank" rel="noopener noreferrer">💬 {t(lang, 'article_cta_btn')}</a>
        </div>
      </section>
    </main>
  )
}
