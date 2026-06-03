import { CapabilitiesGrid } from '@/components/sections/CapabilitiesGrid';

export const metadata = {
  title: 'Capabilities | Mustafa Uzair',
  description: 'Consultation, Brand Strategy, Design, and Development for high-growth companies.',
};

const fullCapabilities = [
  {
    category: 'Consultation',
    items: [
      { title: 'Brand Architecture', desc: 'Designing identity systems that scale across product, marketing, and enterprise.' },
      { title: 'GTM Strategy', desc: 'Full-funnel go-to-market planning aligned with unit economics and growth targets.' },
      { title: 'Fractional CMO', desc: 'Executive marketing leadership for early-stage and growth-stage companies.' },
      { title: 'Growth Systems', desc: 'Acquisition loops, retention mechanics, and monetization frameworks.' },
    ],
  },
  {
    category: 'Brand Strategy',
    items: [
      { title: 'Positioning', desc: 'Finding and owning the white space where brand and market intersect.' },
      { title: 'Narrative Design', desc: 'Crafting the story that earns trust and commands premium pricing.' },
      { title: 'Competitive Moat', desc: 'Building defensible brand assets that compound over time.' },
      { title: 'Campaign Strategy', desc: 'Integrated campaigns mapped to commercial KPIs.' },
    ],
  },
  {
    category: 'Design',
    items: [
      { title: 'UI/UX Design', desc: 'Product interfaces that convert attention into action.' },
      { title: 'Visual Identity', desc: 'Logo, color, typography, and motion systems.' },
      { title: 'Creative Direction', desc: 'Museum-quality art direction for campaigns and content.' },
      { title: 'Design Systems', desc: 'Scalable component libraries for engineering teams.' },
    ],
  },
  {
    category: 'Development',
    items: [
      { title: 'Next.js / React', desc: 'Production-grade web applications with Vercel deployment.' },
      { title: 'Mobile Apps', desc: 'Cross-platform iOS and Android applications.' },
      { title: 'Performance', desc: 'Core Web Vitals optimization and edge deployment.' },
      { title: 'Integration', desc: 'API design, third-party integrations, and automation.' },
    ],
  },
];

export default function CapabilitiesPage() {
  return (
    <main className="pt-24">
      <div className="px-8 py-16 border-b border-muted/20">
        <div className="max-w-7xl mx-auto">
          <p className="t-label text-muted uppercase tracking-[0.3em] mb-4">Services</p>
          <h1 className="t-hero text-paper mb-6">Full Capabilities</h1>
          <p className="t-body text-muted max-w-2xl">
            Eight years of high-stakes execution across design, strategy, and engineering. Every capability battle-tested in VC-backed environments.
          </p>
        </div>
      </div>
      <CapabilitiesGrid />
      <div className="px-8 py-24">
        <div className="max-w-7xl mx-auto">
          {fullCapabilities.map((cat) => (
            <div key={cat.category} className="mb-16 border-b border-muted/10 pb-16 last:border-0">
              <h2 className="t-display text-paper mb-8">{cat.category}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {cat.items.map((item) => (
                  <div key={item.title}>
                    <h3 className="t-title text-paper mb-2">{item.title}</h3>
                    <p className="t-body text-muted">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
