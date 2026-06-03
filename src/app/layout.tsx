import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Playfair_Display } from 'next/font/google';
import './globals.css';
import Nav from '@/components/ui/Nav';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const playfairDisplay = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  style: ['normal', 'italic'],
});

export const metadata: Metadata = {
  title: 'Mustafa Uzair — Product Designer & Brand Strategist',
  description: 'Senior product designer and brand strategist with 4+ years shipping design systems, consumer apps, and enterprise products at scale. HBS-educated. Based in Karachi.',
  keywords: ['product designer', 'brand strategist', 'UX designer', 'design systems', 'Bazaar', 'Pakistan'],
  openGraph: {
    title: 'Mustafa Uzair — Product Designer & Brand Strategist',
    description: 'Awwwwards-quality portfolio: design systems, consumer apps, B2B SaaS, brand identity.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} ${playfairDisplay.variable}`}>
      <body className="bg-midnight text-cream antialiased">
        {/* Nav is in root layout so it persists across ALL routes */}
        <Nav />
        <main className="relative">
          {children}
        </main>
      </body>
    </html>
  );
}
