import { LANGUAGES } from '@/lib/constants'
import { t } from '@/lib/translations'

export function generateStaticParams() {
  return LANGUAGES.map(lang => ({ lang: lang.code }))
}

export default function PrivacyPolicyPage({ params }: { params: { lang: string } }) {
  const { lang } = params

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>{t(lang, 'static_privacy_heading')}</h1>
          <p>{t(lang, 'static_privacy_updated')}</p>
        </div>
      </section>
      <section className="content-area">
        <div className="container">
          <div className="article-content" style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2>{t(lang, 'static_privacy_collect')}</h2>
            <p>We collect minimal information necessary to provide our service. This may include:</p>
            <ul>
              <li>Anonymous usage statistics through cookies</li>
              <li>Email address if you subscribe to our newsletter</li>
              <li>Information you voluntarily provide through contact forms</li>
            </ul>
            <p>We do not collect, store, or share any personal information beyond what is necessary for the functioning of this website.</p>

            <h2>{t(lang, 'static_privacy_cookies')}</h2>
            <p>This website uses cookies to improve your browsing experience. Cookies are small text files stored on your device that help us understand how you use our site. You can choose to disable cookies in your browser settings, though this may affect some functionality.</p>

            <h2>{t(lang, 'static_privacy_thirdparty')}</h2>
            <p>Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies before providing any personal information.</p>

            <h2>{t(lang, 'static_privacy_security')}</h2>
            <p>We implement reasonable security measures to protect your information. However, no method of transmission over the internet is 100% secure. We cannot guarantee absolute security of your data.</p>

            <h2>{t(lang, 'static_privacy_contact')}</h2>
            <p>If you have any questions about this privacy policy, please contact us through our <a href={`/${lang}/contact`}>Contact page</a>.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
