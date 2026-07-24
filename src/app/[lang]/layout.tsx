import { LANGUAGES, SITE_NAME, SITE_URL } from '@/lib/constants'
import { t } from '@/lib/translations'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ClientLayout from '@/components/ClientLayout'

export function generateStaticParams() {
  return LANGUAGES.map(lang => ({ lang: lang.code }))
}

export default function LangLayout({ children, params }: { children: React.ReactNode; params: { lang: string } }) {
  const { lang } = params
  const langData = LANGUAGES.find(l => l.code === lang) || LANGUAGES[0]
  return (
    <div lang={lang} dir={langData.dir}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": SITE_NAME,
          "url": SITE_URL + "/" + lang + "/",
          "logo": SITE_URL + "/assets/img/logo.png",
          "contactPoint": { "@type": "ContactPoint", "telephone": "+212630050938", "contactType": "customer support" },
          "sameAs": ["https://wa.me/212630050938"]
        })
      }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          "name": SITE_NAME,
          "url": SITE_URL + "/" + lang + "/",
          "inLanguage": lang,
          "potentialAction": {
            "@type": "SearchAction",
            "target": SITE_URL + "/" + lang + "/?q={search_term_string}",
            "query-input": "required name=search_term_string"
          }
        })
      }} />
      <Header lang={lang} />
      <ClientLayout lang={lang}>
        {children}
      </ClientLayout>
      <Footer lang={lang} />
    </div>
  )
}
