import type { Metadata } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'
import { SmoothScrollProvider } from '@/components/providers/SmoothScrollProvider'
import { WebGLCanvas } from '@/components/canvas/WebGLCanvas'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Mustafa Uzair — Design, Brand Strategy & Growth',
  description: 'Executive portfolio of Mustafa Uzair. Head of Growth & Product Marketing specialising in brand strategy, design systems, and commercial outcomes.',
  keywords: ['brand strategy', 'product marketing', 'design', 'growth', 'Mustafa Uzair'],
  authors: [{ name: 'Mustafa Uzair' }],
  openGraph: {
    title: 'Mustafa Uzair — Design, Brand Strategy & Growth',
    description: 'Turning design into commercial outcomes. Part of the core team that scaled Bazaar Technologies to $100M+.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`} suppressHydrationWarning>
      <body suppressHydrationWarning>
        <WebGLCanvas />
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  )
}
