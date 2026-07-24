import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'IPTV Pro Guide',
  description: 'Your ultimate guide to IPTV technology',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" dir="ltr">
      <body>{children}</body>
    </html>
  )
}
