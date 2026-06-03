import Link from 'next/link';

const deliverables = [
  { title: 'Website Redesign', desc: 'Complete redesign of locus.sh — transforming a cluttered B2B site into a high-conversion narrative. Reduced bounce rate by 35% with clearer value hierarchy and enterprise-grade visual credibility.', metric: '35% Bounce Rate Drop', color: '#06B6D4' },
  { title: 'Product Landing Pages', desc: 'Individual landing pages for Route Optimization, Delivery Experience Platform, and Analytics Suite. Each page designed around a specific enterprise buyer persona with job-relevant social proof.', metric: '28% Demo Request Lift', color: '#8B5CF6' },
  { title: 'Case Study System', desc: 'Templated case study framework deployed across 12 client success stories — structured to address procurement committee concerns: security, scale, ROI, and integration complexity.', metric: '12 Case Studies', color: '#F59E0B' },
  { title: 'Brand Content Library', desc: 'Visual asset library for sales enablement: pitch decks, one-pagers, and social content adapted for logistics, e-commerce, and retail buyer contexts.', metric: '40+ Brand Assets', color: '#EC4899' },
  { title: 'B2B Email Sequences', desc: 'Designed and wrote multi-touch enterprise email sequences for outbound SDR teams — segmented by industry, company size, and buyer stage.', metric: '3 Email Sequences', color: '#10B981' },
];

const insights = [
  { number: '01', title: 'Enterprise buyers buy trust', body: 'Locus operates in supply chain — a domain where a bad vendor decision costs millions. Visual credibility, social proof from Fortune 500 logos, and specific claim language ("99.4% SLA") matter more than feature lists.' },
  { number: '02', title: 'Complexity is a feature, not a bug', body: 'Unlike B2C, complex enterprise products need to telegraph sophistication. The redesign showcased data density and configurability — not simplification — because that is what logistics technology buyers expect.' },
  { number: '03', title: 'Procurement isn\'t one person', body: 'B2B decisions involve 7+ stakeholders. Designed a multi-persona content system: technical depth for IT evaluators, ROI framing for CFOs, outcome stories for operations leaders.' },
  { number: '04', title: 'Sales enablement is product design', body: 'The most impactful design work wasn\'t the website — it was the sales toolkit. Giving SDRs and AEs assets that answer the right question at the right stage of the deal shortened sales cycles.' },
];

export default function SaasCaseStudy() {
  return (
    <div className="min-h-screen bg-midnight text-cream pt-24">
      <div className="px-6 md:px-12 mb-12">
        <Link href="/#work" className="inline-flex items-center gap-2 text-muted hover:text-cream transition-colors font-mono text-sm group">
          <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span> Back to work
        </Link>
      </div>

      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <span className="text-xs font-mono tracking-[0.3em] uppercase block mb-8" style={{ color: '#06B6D4' }}>◈ B2B SaaS & Creative Direction · 2023–2024</span>
        <h1 className="font-display text-5xl md:text-8xl font-bold text-cream leading-none mb-8">
          Locus &<br /><em className="not-italic" style={{ color: '#06B6D4' }}>Growth</em>
        </h1>
        <p className="text-secondary text-xl md:text-2xl max-w-3xl leading-relaxed mb-12">
          Creative direction for a $50M+ Series B supply chain SaaS — translating logistics technology complexity into high-conviction enterprise buyer narratives.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[{ v: '30+', l: 'Countries' }, { v: '$50M+', l: 'Series B' }, { v: '35%', l: 'Bounce Drop' }, { v: '28%', l: 'Demo Lift' }].map((s) => (
            <div key={s.l} className="border border-white/5 rounded-2xl p-6" style={{ background: 'rgba(22,22,30,0.6)' }}>
              <div className="font-display text-4xl font-bold mb-1" style={{ color: '#06B6D4' }}>{s.v}</div>
              <div className="text-cream font-medium text-sm">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl font-bold text-cream mb-6">The Brief</h2>
            <p className="text-secondary leading-relaxed mb-4">Locus had strong product-market fit — $50M+ in funding, enterprise clients across 30+ countries. But their digital presence didn't reflect their ambition. The website felt like a startup. The content felt generic. Sales teams lacked tools to close enterprise deals efficiently.</p>
            <p className="text-secondary leading-relaxed">My mandate: redesign the digital experience, build a scalable content system, and create sales enablement assets that helped a world-class logistics product sell itself.</p>
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-cream mb-6">The Approach</h2>
            <div className="space-y-3">
              {['Competitive audit of 20+ B2B SaaS websites in logistics/supply chain', 'Enterprise buyer persona development (7 stakeholder types)', 'Messaging hierarchy: headline → proof → CTA for each persona', 'Visual language system: data-forward, enterprise-grade, globally applicable', 'Sales enablement toolkit: pitch decks, one-pagers, email sequences'].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex-shrink-0" style={{ color: '#06B6D4' }}>◈</span>
                  <span className="text-secondary text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <h2 className="font-display text-4xl font-bold text-cream mb-12">What Was Delivered</h2>
        <div className="space-y-4">
          {deliverables.map((d, i) => (
            <div key={d.title} className="border border-white/5 rounded-2xl p-8 hover:border-white/10 transition-all duration-300 group" style={{ background: 'rgba(22,22,30,0.5)' }}>
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <span className="font-display text-5xl font-bold flex-shrink-0" style={{ color: d.color, opacity: 0.2 }}>0{i+1}</span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="font-display text-xl font-bold text-cream">{d.title}</h3>
                    <span className="text-xs font-mono px-3 py-1 rounded-full" style={{ color: d.color, background: d.color + '15', border: '1px solid ' + d.color + '30' }}>{d.metric}</span>
                  </div>
                  <p className="text-secondary text-sm leading-relaxed">{d.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <h2 className="font-display text-4xl font-bold text-cream mb-4">What I Learned</h2>
        <p className="text-secondary text-lg mb-12 max-w-2xl">B2B SaaS design is fundamentally about psychology — understanding how enterprise committees evaluate risk, build consensus, and justify spend.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {insights.map((ins) => (
            <div key={ins.number} className="border border-white/5 rounded-2xl p-8" style={{ background: 'rgba(22,22,30,0.5)' }}>
              <div className="font-display text-5xl font-bold mb-4" style={{ color: 'rgba(6,182,212,0.15)' }}>{ins.number}</div>
              <h3 className="font-display text-xl font-bold text-cream mb-3">{ins.title}</h3>
              <p className="text-secondary text-sm leading-relaxed">{ins.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="flex items-center justify-between">
          <Link href="/work/products" className="text-muted hover:text-cream transition-colors font-mono text-sm group">
            <span className="group-hover:-translate-x-1 inline-block transition-transform">←</span> Product Studio
          </Link>
          <Link href="/work/brand" className="inline-flex items-center gap-3 px-6 py-3 rounded-full border transition-all duration-300 font-mono text-sm group hover:opacity-80" style={{ color: '#F59E0B', borderColor: 'rgba(245,158,11,0.3)', background: 'rgba(245,158,11,0.05)' }}>
            Next: DARTE & Brand <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
