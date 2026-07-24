import Link from 'next/link'
import { LANGUAGES } from '@/lib/constants'

export default function NotFound() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '40px 20px',
      textAlign: 'center',
      background: 'linear-gradient(135deg,#0a0a1a 0,#0f0f2a 50%,#0a0a1a 100%)'
    }}>
      <div style={{ maxWidth: 600 }}>
        <div style={{
          fontSize: 120,
          fontWeight: 900,
          background: 'linear-gradient(135deg,#10b981,#3b82f6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          lineHeight: 1,
          marginBottom: 10,
          animation: 'pulse 2s infinite'
        }}>404</div>
        <h1 style={{ fontSize: 28, color: '#fff', marginBottom: 15 }}>Oops! Page Not Found</h1>
        <p style={{ color: '#a0a0b8', fontSize: 16, marginBottom: 30, lineHeight: 1.6 }}>
          The page you are looking for does not exist or has been moved.<br />
          Try visiting our blog or select your language below.
        </p>
        <Link href="/" style={{
          display: 'inline-block',
          padding: '14px 32px',
          background: 'linear-gradient(135deg,#10b981,#059669)',
          color: '#fff',
          borderRadius: 50,
          textDecoration: 'none',
          fontWeight: 600,
          margin: '0 8px 8px',
          transition: 'all .3s'
        }}>🏠 Home</Link>
        <Link href="/en/blog" style={{
          display: 'inline-block',
          padding: '14px 32px',
          background: 'transparent',
          border: '2px solid #10b981',
          color: '#10b981',
          borderRadius: 50,
          textDecoration: 'none',
          fontWeight: 600,
          margin: '0 8px 8px',
          transition: 'all .3s'
        }}>📝 English Blog</Link>
        <div style={{ marginTop: 30, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8 }}>
          {LANGUAGES.map(l => (
            <Link key={l.code} href={`/${l.code}`} style={{
              padding: '6px 14px',
              background: 'rgba(16,185,129,.1)',
              color: '#10b981',
              borderRadius: 20,
              textDecoration: 'none',
              fontSize: 13,
              transition: 'all .3s'
            }}>{l.flag} {l.name}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}
