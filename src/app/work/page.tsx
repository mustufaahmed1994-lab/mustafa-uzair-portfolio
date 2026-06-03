import { WorkIndex } from '@/components/sections/WorkIndex';

export const metadata = {
  title: 'Work | Mustafa Uzair',
  description: 'Selected work across enterprise ecosystems, product incubation, B2B SaaS, and brand identity.',
};

export default function WorkPage() {
  return (
    <main className="pt-24">
      <div className="px-8 py-16 border-b border-muted/20">
        <div className="max-w-7xl mx-auto">
          <p className="t-label text-muted uppercase tracking-[0.3em] mb-4">Portfolio</p>
          <h1 className="t-hero text-paper">Selected Work</h1>
        </div>
      </div>
      <WorkIndex />
    </main>
  );
}
