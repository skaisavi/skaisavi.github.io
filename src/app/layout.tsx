import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Skaiste Savitri — Frontend Developer',
  description:
    'Frontend developer based in the UK crafting seamless, beautiful digital experiences. Open to full-time, freelance & contract roles.',
  openGraph: {
    type: 'website',
    title: 'Skaiste Savitri — Frontend Developer',
    description:
      'Frontend developer based in the UK crafting seamless, beautiful digital experiences.',
    images: ['https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80'],
    url: 'https://skaistesavitri.dev',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skaiste Savitri — Frontend Developer',
    description:
      'Frontend developer based in the UK crafting seamless, beautiful digital experiences.',
    images: ['https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&q=80'],
  },
  alternates: {
    canonical: 'https://skaistesavitri.dev',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  )
}
