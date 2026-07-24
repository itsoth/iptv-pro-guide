import { LANGUAGES } from '@/lib/constants'
import { t } from '@/lib/translations'
import SearchClient from './SearchClient'

export function generateStaticParams() {
  return LANGUAGES.map(lang => ({ lang: lang.code }))
}

export default function SearchPage({ params }: { params: { lang: string } }) {
  const { lang } = params
  const langData = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0]

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>🔍 {t(lang, 'search_title')}</h1>
          <p>{t(lang, 'search_subtitle', { LANG_NAME: langData.name })}</p>
        </div>
      </section>
      <section className="content-area">
        <div className="container">
          <SearchClient lang={lang} />
        </div>
      </section>
    </main>
  )
}
