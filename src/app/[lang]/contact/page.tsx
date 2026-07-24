import { LANGUAGES, WHATSAPP } from '@/lib/constants'
import { t } from '@/lib/translations'

export function generateStaticParams() {
  return LANGUAGES.map(lang => ({ lang: lang.code }))
}

export default function ContactPage({ params }: { params: { lang: string } }) {
  const { lang } = params

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>{t(lang, 'static_contact_heading')}</h1>
        </div>
      </section>
      <section className="content-area">
        <div className="container">
          <div className="article-content" style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2>{t(lang, 'static_contact_methods')}</h2>

            <div className="cta-section" style={{ textAlign: 'left' }}>
              <h3>💬 {t(lang, 'static_contact_whatsapp')}</h3>
              <p>{t(lang, 'static_contact_whatsapp_desc')}</p>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">💬 {t(lang, 'static_contact_whatsapp')}</a>
            </div>

            <div className="cta-section" style={{ textAlign: 'left', marginTop: 20 }}>
              <h3>🎁 {t(lang, 'static_contact_trial')}</h3>
              <p>{t(lang, 'static_contact_trial_desc')}</p>
              <a href={`https://wa.me/${WHATSAPP}?text=Hi%21%20I%20want%20a%20free%20IPTV%20trial`} target="_blank" rel="noopener noreferrer">🎁 {t(lang, 'static_contact_trial')}</a>
            </div>

            <div className="cta-section" style={{ textAlign: 'left', marginTop: 20 }}>
              <h3>📧 {t(lang, 'static_contact_business')}</h3>
              <p>For partnership, advertising, or other business inquiries, please contact us via WhatsApp.</p>
              <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noopener noreferrer">📧 {t(lang, 'static_contact_business')}</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
