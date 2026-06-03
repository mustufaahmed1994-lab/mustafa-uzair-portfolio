import Link from 'next/link';

const metrics = [
  { value: '300K+', label: 'Active Retailers', sub: 'Across Pakistan' },
  { value: '5', label: 'Products Unified', sub: 'Single design system' },
  { value: '60%', label: 'Faster Handoff', sub: 'Dev cycle improvement' },
  { value: '2 yrs', label: 'Duration', sub: '2022 — 2024' },
];

const products = [
  { name: 'Easy Khata', tagline: 'Digital ledger for micro-retailers', description: 'Replaced paper khata books for 200K+ shopkeepers. Zero-learning-curve mobile app for first-time smartphone users — large tap targets, Urdu/English bilingual UI, offline-first.', impact: '200K+ users, 4.6★ Play Store', color: '#8B5CF6' },
  { name: 'Bazaar Pro', tagline: 'B2B wholesale ordering', description: 'Wholesale catalog and ordering with real-time inventory, credit lines, and delivery tracking. Made digital ordering feel as fast and trusted as calling a distributor.', impact: '40% order accuracy improvement', color: '#FF6B6B' },
  { name: 'Bazaar Shipper', tagline: 'Last-mile delivery ops', description: 'Real-time delivery tracking, proof-of-delivery, route optimization for riders. Designed for low-end Android devices with limited connectivity.', impact: '5,000+ daily active riders', color: '#06B6D4' },
  { name: 'Bazaar Agent', tagline: 'Field sales CRM', description: 'Visit scheduling, retailer onboarding, sales pipeline for field agents. Replaced spreadsheets with a CRM tailored to Pakistan informal retail dynamics.', impact: '30% agent productivity increase', color: '#F59E0B' },
  { name: 'Warehouse Ops', tagline: 'Inventory management', description: 'Barcode scanning, pick-pack-ship workflows, real-time inventory dashboards for warehouse staff.', impact: '99.2% order accuracy rate', color: '#10B981' },
];

const process = [
  { phase: '01', title: 'Discovery & Research', description: 'Spent 3 weeks in the field across Lahore, Karachi, Islamabad. 40+ user interviews. Mapped 12 distinct user archetypes with varying digital literacy.' },
  { phase: '02', title: 'Design System Architecture', description: 'Built a cross-product token system in Figma: 80+ components, 3 theme variants, bilingual (Urdu RTL / English LTR) layout rules. Every component documented.' },
  { phase: '03', title: 'Product Rollout', description: 'Shipped one product at a time in 6-week sprints: prototype → usability test → iterate → dev handoff. Maintained cross-product visual cohesion throughout.' },
  { phase: '04', title: 'Measurement & Iteration', description: 'Post-launch: tracked task completion rates, support tickets, feature adoption via Mixpanel. Shipped bi-weekly UI improvements based on heatmaps and session recordings.' },
];

export default function EnterpriseCaseStudy() {
  return (
    <div className="min-h-screen bg-midnight text-cream pt-24">
      <div className="px-6 md:px-12 mb-12">
        <Link href="/#work" className="inline-flex items-center gap-2 text-muted hover:text-cream transition-colors font-mono text-sm group">
          <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span> Back to work
        </Link>
      </div>

      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <span className="text-xs font-mono tracking-[0.3em] text-violet-400 uppercase block mb-8">◈ Enterprise Design Systems · 2022–2024</span>
        <h1 className="font-display text-5xl md:text-8xl font-bold text-cream leading-none mb-8">
          Bazaar<br /><em className="text-violet-400 not-italic">Suite</em>
        </h1>
        <p className="text-secondary text-xl md:text-2xl max-w-3xl leading-relaxed mb-12">
          Designing 5 interconnected products for Pakistan's largest B2B commerce network — from retail ledgers to warehouse operations — with a single unified design system.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {metrics.map((m) => (
            <div key={m.label} className="border border-white/5 rounded-2xl p-6" style={{ background: 'rgba(22,22,30,0.6)' }}>
              <div className="font-display text-4xl font-bold text-violet-400 mb-1">{m.value}</div>
              <div className="text-cream font-medium text-sm">{m.label}</div>
              <div className="text-muted text-xs mt-1 font-mono">{m.sub}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl font-bold text-cream mb-6">The Challenge</h2>
            <p className="text-secondary leading-relaxed mb-4">Bazaar operates in Pakistan's informal retail economy — a $150B market. When I joined, 5 products existed in silos: different design languages, inconsistent components, zero shared infrastructure.</p>
            <p className="text-secondary leading-relaxed">The ask: unify them under one design system without disrupting active shipping teams. Every product needed to feel native to its user — a warehouse picker is not a retailer, is not a field agent.</p>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-cream mb-6">My Role</h2>
            <div className="space-y-3">
              {['Lead Product Designer across all 5 products','Design system architecture and governance','User research (40+ interviews, field visits)','Design-engineering collaboration and handoff','Usability testing and iteration cycles'].map((role) => (
                <div key={role} className="flex items-start gap-3">
                  <span className="text-violet-400 mt-1 flex-shrink-0">◈</span>
                  <span className="text-secondary text-sm leading-relaxed">{role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <h2 className="font-display text-4xl font-bold text-cream mb-12">The 5 Products</h2>
        <div className="space-y-4">
          {products.map((p, i) => (
            <div key={p.name} className="border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all duration-300" style={{ background: 'rgba(22,22,30,0.5)' }}>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <span className="font-display text-5xl font-bold flex-shrink-0" style={{ color: p.color, opacity: 0.3 }}>0{i+1}</span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-2">
                    <h3 className="font-display text-2xl font-bold text-cream">{p.name}</h3>
                    <span className="text-xs font-mono px-3 py-1 rounded-full" style={{ color: p.color, background: p.color + '15', border: '1px solid ' + p.color + '30' }}>{p.tagline}</span>
                  </div>
                  <p className="text-secondary text-sm leading-relaxed mb-3">{p.description}</p>
                  <p className="text-xs font-mono" style={{ color: p.color }}>↳ {p.impact}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <h2 className="font-display text-4xl font-bold text-cream mb-12">The Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {process.map((p) => (
            <div key={p.phase} className="border border-white/5 rounded-2xl p-8" style={{ background: 'rgba(22,22,30,0.5)' }}>
              <div className="font-display text-5xl font-bold mb-4" style={{ color: 'rgba(255,255,255,0.06)' }}>{p.phase}</div>
              <h3 className="font-display text-xl font-bold text-cream mb-3">{p.title}</h3>
              <p className="text-secondary text-sm leading-relaxed">{p.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <div className="border border-violet-500/20 rounded-2xl p-10 md:p-16" style={{ background: 'linear-gradient(135deg, rgba(139,92,246,0.08), rgba(236,72,153,0.05))' }}>
          <h2 className="font-display text-4xl font-bold text-cream mb-6">The Outcome</h2>
          <p className="text-secondary text-lg leading-relaxed max-w-3xl">A unified design system shipped across 5 live products, used by 300K+ retailers and thousands of field agents. Design-to-dev handoff time dropped 60%. The system became Bazaar's standard for all future product work.</p>
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="flex items-center justify-between">
          <Link href="/#work" className="text-muted hover:text-cream transition-colors font-mono text-sm group">
            <span className="group-hover:-translate-x-1 inline-block transition-transform">←</span> All work
          </Link>
          <Link href="/work/products" className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-violet-500/30 text-violet-400 hover:bg-violet-500/10 transition-all duration-300 font-mono text-sm group">
            Next: Product Studio <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
