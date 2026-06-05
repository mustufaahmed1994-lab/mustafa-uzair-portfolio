—import type { Metadata } from 'next'
import { Inter, Syne } from 'next/font/google'
import './globals.css'
import Nav from '@/components/ui/Nav'

// Display / heading font — geometric sans with editorial character
const syne = Syne({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

// UI / body font — neutral, legible, trusted
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mustafa Uzair — Product Designer & Brand Strategist',
  description: 'Senior product designer and brand strategist with 8+ years shipping design systems, consumer apps, and enterprise products at scale. HBS-educated. Based in Karachi.',
  keywords: ['product designer', 'brand strategist', 'UX designer', 'design systems', 'Bazaar', 'Pakistan'],
  openGraph: {
    title: 'Mustafa Uzair — Product Designer & Brand Strategist',
    description: 'Portfolio: design systems, consumer apps, B2B SaaS, brand identity.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${syne.variable} ${inter.variable}`}>
      <body className="bg-midnight text-cream antialiased">
        <Nav />
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  )
}
