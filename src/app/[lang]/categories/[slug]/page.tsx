import Link from 'next/link'
import { LANGUAGES, CATEGORIES, TOTAL_ARTICLES } from '@/lib/constants'
import { t } from '@/lib/translations'
import { generateArticle } from '@/lib/article-data'

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = []
  for (const lang of LANGUAGES) {
    for (const cat of CATEGORIES) {
      params.push({ lang: lang.code, slug: cat.slug })
    }
  }
  return params
}

export default function CategoryPage({ params }: { params: { lang: string; slug: string } }) {
  const { lang, slug } = params
  const cat = CATEGORIES.find(c => c.slug === slug) || CATEGORIES[0]
  const langData = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0]

  const allArticles = Array.from({ length: TOTAL_ARTICLES }, (_, i) => generateArticle(i, lang))
  const catArticles = allArticles.filter(a => a.categorySlug === slug)

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>{cat.icon} {cat.name}</h1>
          <p>{catArticles.length} {t(lang, 'blog_subheading', { LANG_NAME: langData.name })}</p>
        </div>
      </section>
      <section className="content-area">
        <div className="container">
          <div className="article-list">
            {catArticles.slice(0, 100).map(article => (
              <div key={article.slug} className="article-row">
                <div className="thumb">{cat.icon}</div>
                <div className="info">
                  <span className="card-category">{cat.name}</span>
                  <h2><Link href={`/${lang}/${article.slug}`}>{article.title}</Link></h2>
                  <p>{article.excerpt.substring(0, 150)}</p>
                  <div className="meta">📅 {article.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
