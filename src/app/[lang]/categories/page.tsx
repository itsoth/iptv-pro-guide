import Link from 'next/link'
import { LANGUAGES, CATEGORIES } from '@/lib/constants'
import { t } from '@/lib/translations'

export function generateStaticParams() {
  return LANGUAGES.map(lang => ({ lang: lang.code }))
}

export default function CategoriesPage({ params }: { params: { lang: string } }) {
  const { lang } = params
  const langData = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0]

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>📂 {t(lang, 'categories_heading')}</h1>
          <p>{t(lang, 'categories_subheading', { LANG_NAME: langData.name })}</p>
        </div>
      </section>
      <section className="content-area">
        <div className="container">
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
    </main>
  )
}
