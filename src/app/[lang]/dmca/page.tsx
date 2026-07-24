import { LANGUAGES } from '@/lib/constants'
import { t } from '@/lib/translations'

export function generateStaticParams() {
  return LANGUAGES.map(lang => ({ lang: lang.code }))
}

export default function DmcaPage({ params }: { params: { lang: string } }) {
  const { lang } = params

  return (
    <main>
      <section className="page-header">
        <div className="container">
          <h1>{t(lang, 'static_dmca_heading')}</h1>
        </div>
      </section>
      <section className="content-area">
        <div className="container">
          <div className="article-content" style={{ maxWidth: 800, margin: '0 auto' }}>
            <h2>DMCA Notice & Takedown Policy</h2>
            <p>IPTV Pro Guide respects the intellectual property rights of others. We do not host, stream, or distribute any copyrighted content on our servers. All content on this website is original and created for educational purposes.</p>

            <h2>No Copyrighted Content</h2>
            <p>We want to make it absolutely clear: IPTV Pro Guide does not host, store, or transmit any copyrighted video, audio, or media content. Our website contains only educational articles, guides, and tutorials about IPTV technology. We do not provide IPTV streams, channel links, or any form of copyrighted media.</p>

            <h2>Reporting Copyright Infringement</h2>
            <p>If you believe that any content on our website infringes upon your copyright, please contact us with the following information:</p>
            <ul>
              <li>A description of the copyrighted work you claim has been infringed</li>
              <li>The specific URL or location of the allegedly infringing material on our site</li>
              <li>Your contact information (name, email, phone number)</li>
              <li>A statement that you have a good faith belief that the use is not authorized</li>
              <li>A statement, made under penalty of perjury, that the information provided is accurate</li>
            </ul>

            <h2>Contact for DMCA</h2>
            <p>Please contact us via WhatsApp for any DMCA-related inquiries. We will respond promptly to any valid copyright infringement notices.</p>
          </div>
        </div>
      </section>
    </main>
  )
}
