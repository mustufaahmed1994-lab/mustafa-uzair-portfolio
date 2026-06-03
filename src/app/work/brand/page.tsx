export const metadata = {
  title: 'Brand Identity | Mustafa Uzair',
  description: 'DARTE Ecosystem — character design with strict fidelity and exact proportions.',
};

export default function BrandPage() {
  return (
    <main className="pt-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="py-16 border-b border-muted/20 mb-16">
          <p className="t-label text-muted uppercase tracking-[0.3em] mb-4">04 — Brand Identity</p>
          <h1 className="t-hero text-paper mb-6">DARTE Ecosystem</h1>
          <p className="t-body text-muted max-w-2xl">
            Character-first brand identity system. Strict fidelity to mascot proportions and personality across all touchpoints.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
          <div>
            <p className="t-label text-muted uppercase tracking-[0.3em] mb-6">Character Design</p>
            <h2 className="t-title text-paper mb-4">DARTE Mascot</h2>
            <p className="t-body text-muted mb-6">
              Developed with strict character fidelity and exact proportions. Every expression, pose, and context maintains 
              precise anatomical ratios to ensure brand consistency across digital and physical applications.
            </p>
            <div className="space-y-2">
              {['Character Design', 'Expression Library', 'Usage Guidelines', 'Motion Principles'].map((item) => (
                <div key={item} className="flex items-center gap-3 t-label text-muted">
                  <span className="w-1 h-1 bg-accent rounded-full" />
                  {item}
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="t-label text-muted uppercase tracking-[0.3em] mb-6">Identity System</p>
            <h2 className="t-title text-paper mb-4">Brand Architecture</h2>
            <p className="t-body text-muted mb-6">
              Comprehensive visual identity system built around the DARTE character. Color systems, typography, 
              and layout principles that scale across product, marketing, and merchandise.
            </p>
            <div className="space-y-2">
              {['Color System', 'Typography Scale', 'Logo Variants', 'Brand Guidelines'].map((item) => (
                <div key={item} className="flex items-center gap-3 t-label text-muted">
                  <span className="w-1 h-1 bg-accent rounded-full" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-muted/20 pt-12">
          <p className="t-label text-muted uppercase tracking-[0.3em] mb-4">Design Constraint</p>
          <p className="t-body text-muted max-w-2xl italic">
            "Strict character fidelity and exact proportions — non-negotiable across every brand expression."
          </p>
        </div>
      </div>
    </main>
  );
}
