import './globals.css'
import type { Metadata } from 'next'
import { Navbar } from '../components/ui'

export const metadata: Metadata = {
  title: 'Dana Point Disco — Silent Disco Rentals in OC & North SD',
  description: 'Retro surf vibes. Three music channels. Zero noise complaints. 100% fun.',
  openGraph: {
    title: 'Dana Point Disco — Silent Disco Rentals',
    description: 'Retro surf vibes. Three music channels. Zero noise complaints. 100% fun.',
    type: 'website',
    url: 'https://example.com',
  }
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-body">
        <Navbar />
        <div className="pt-16">{children}</div>
      </body>
    </html>
  )
}
