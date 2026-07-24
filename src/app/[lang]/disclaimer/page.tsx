import { LANGUAGES } from '@/lib/constants'
import { t } from '@/lib/translations'

export function generateStaticParams() {
  return LANGUAGES.map(lang => ({ lang: lang.code }))
}

export default function DisclaimerPage({ params }: { params: { lang: string } }) {
  const { lang } = params

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>{t(lang, 'static_disclaimer_heading')}</h1>
        </div>
      </section>
      <section className="content-area">
        <div className="container">
          <div className="article-content" style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2>General Disclaimer</h2>
            <p>The information provided on IPTV Pro Guide is for general informational and educational purposes only. While we strive to keep the information accurate and up-to-date, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability, or availability of the information contained on this website.</p>

            <h2>No Legal Advice</h2>
            <p>The content on this website is not intended to constitute legal advice. Users are responsible for understanding and complying with the laws and regulations in their jurisdiction regarding IPTV technology and streaming services.</p>

            <h2>No Endorsement</h2>
            <p>References to any specific IPTV service, application, device, or provider do not constitute endorsement. We provide information about various options to help users make informed decisions based on their individual needs.</p>

            <h2>External Links</h2>
            <p>This website may contain links to external websites. We have no control over the content, privacy policies, or practices of these third-party sites and assume no responsibility for them.</p>

            <h2>Professional Advice</h2>
            <p>You should consult with appropriate professionals for advice specific to your situation. Reliance on any information provided on this website is solely at your own risk.</p>

            <h2>Changes to This Disclaimer</h2>
            <p>We reserve the right to update or change this disclaimer at any time. Changes will be posted on this page with an updated revision date.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
