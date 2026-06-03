import Link from 'next/link';
import CapabilitiesGrid from '@/components/sections/CapabilitiesGrid';

export const metadata = {
  title: 'Capabilities | Mustafa Uzair',
  description: 'Product design, brand strategy, design systems, and growth design capabilities.',
};

export default function CapabilitiesPage() {
  return (
    <div className="min-h-screen bg-midnight pt-16">
      <CapabilitiesGrid />
      <div className="px-6 md:px-12 pb-24 max-w-7xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-muted hover:text-cream transition-colors font-mono text-sm group">
          <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span> Back to home
        </Link>
      </div>
    </div>
  );
}
