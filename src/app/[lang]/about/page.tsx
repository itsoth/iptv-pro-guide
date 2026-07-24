import { LANGUAGES } from '@/lib/constants'
import { t } from '@/lib/translations'

export function generateStaticParams() {
  return LANGUAGES.map(lang => ({ lang: lang.code }))
}

export default function AboutPage({ params }: { params: { lang: string } }) {
  const { lang } = params

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>{t(lang, 'static_about_heading')}</h1>
        </div>
      </section>
      <section className="content-area">
        <div className="container">
          <div className="article-content" style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2>{t(lang, 'static_about_mission_title')}</h2>
            <p>At IPTV Pro Guide, our mission is to provide comprehensive, accurate, and up-to-date information about IPTV technology. We believe that everyone deserves access to quality television content at affordable prices, and IPTV makes this possible.</p>
            <p>Founded in 2024, we have grown to become one of the largest educational resources for IPTV technology, serving millions of readers in 10 languages worldwide.</p>

            <h2>{t(lang, 'static_about_offer_title')}</h2>
            <ul>
              <li><strong>In-depth Guides:</strong> Detailed tutorials covering every aspect of IPTV technology</li>
              <li><strong>App Reviews:</strong> Honest reviews of the most popular IPTV applications</li>
              <li><strong>Device Setup:</strong> Step-by-step setup guides for all major devices</li>
              <li><strong>Troubleshooting:</strong> Solutions to common IPTV problems</li>
              <li><strong>Country Guides:</strong> IPTV information tailored to specific countries</li>
            </ul>

            <h2>{t(lang, 'static_about_team_title')}</h2>
            <p>Our team consists of IPTV enthusiasts, technology writers, and streaming experts who are passionate about helping people get the most out of their IPTV experience. We test every service, app, and device ourselves to provide accurate recommendations.</p>

            <h2>{t(lang, 'static_about_contact_title')}</h2>
            <p>Have questions or suggestions? We would love to hear from you! Visit our <a href={`/${lang}/contact`}>Contact page</a> to get in touch with our team.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
