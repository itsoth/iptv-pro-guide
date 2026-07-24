import { LANGUAGES } from '@/lib/constants'
import { t } from '@/lib/translations'

export function generateStaticParams() {
  return LANGUAGES.map(lang => ({ lang: lang.code }))
}

export default function TermsPage({ params }: { params: { lang: string } }) {
  const { lang } = params

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>{t(lang, 'static_terms_heading')}</h1>
        </div>
      </section>
      <section className="content-area">
        <div className="container">
          <div className="article-content" style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2>Acceptance of Terms</h2>
            <p>By accessing and using IPTV Pro Guide, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, please do not use our website.</p>

            <h2>Educational Purpose</h2>
            <p>IPTV Pro Guide is an educational resource only. We provide information about IPTV technology, setup guides, and troubleshooting tips. We do not host, stream, or distribute any copyrighted content. All content on this website is for informational and educational purposes only.</p>

            <h2>User Responsibilities</h2>
            <ul>
              <li>You are responsible for ensuring that your use of IPTV technology complies with local laws and regulations</li>
              <li>You must verify that any IPTV service you subscribe to has proper rights to the content they provide</li>
              <li>You agree not to use this website for any illegal purpose</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>All content on IPTV Pro Guide, including text, graphics, logos, and images, is our property unless otherwise stated. You may not reproduce, distribute, or modify our content without prior written consent.</p>

            <h2>Limitation of Liability</h2>
            <p>IPTV Pro Guide is provided &quot;as is&quot; without any warranties. We are not liable for any damages arising from your use of this website or the information provided herein.</p>

            <h2>Changes to Terms</h2>
            <p>We reserve the right to update these terms at any time. Changes will be posted on this page. Continued use of the website after changes constitutes acceptance of the new terms.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
