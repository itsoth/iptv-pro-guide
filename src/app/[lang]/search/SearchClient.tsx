'use client'
import { useState } from 'react'
import { TOTAL_ARTICLES } from '@/lib/constants'
import { t } from '@/lib/translations'
import { generateArticle } from '@/lib/article-data'

export default function SearchClient({ lang }: { lang: string }) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<{ slug: string; title: string; excerpt: string; date: string; category: string; categorySlug: string }[]>([])
  const [searched, setSearched] = useState(false)

  const allArticles = Array.from({ length: TOTAL_ARTICLES }, (_, i) => generateArticle(i, lang))

  const searchArticles = () => {
    if (!query.trim()) return
    setSearched(true)
    const q = query.toLowerCase()
    const found = allArticles.filter(a =>
      a.title.toLowerCase().includes(q) || a.excerpt.toLowerCase().includes(q) || a.category.toLowerCase().includes(q)
    ).slice(0, 50)
    setResults(found)
  }

  return (
    <>
      <div className="search-box" style={{ maxWidth: 600, margin: '0 auto' }}>
        <input
          type="text"
          id="searchInput"
          placeholder={t(lang, 'search_placeholder')}
          autoComplete="off"
          value={query}
          onChange={e => setQuery(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && searchArticles()}
        />
        <button onClick={searchArticles}>🔍 {t(lang, 'search_btn')}</button>
      </div>
      <div id="results" style={{ maxWidth: 800, margin: '20px auto 0' }}>
        {searched && results.length === 0 && (
          <div style={{ textAlign: 'center', padding: 40 }}>
            <h3 style={{ color: 'var(--text-primary)', marginBottom: 10 }}>{t(lang, 'search_no_results_title')}</h3>
            <p style={{ color: 'var(--text-muted)' }}>{t(lang, 'search_no_results_text')}</p>
          </div>
        )}
        {results.map(article => (
          <div key={article.slug} className="result-card">
            <span className="card-category">{article.category}</span>
            <h3><a href={`/${lang}/${article.slug}`} style={{ color: 'var(--text-primary)', textDecoration: 'none' }}>{article.title}</a></h3>
            <p>{article.excerpt.substring(0, 150)}</p>
            <div className="meta">📅 {article.date}</div>
          </div>
        ))}
      </div>
    </>
  )
}
