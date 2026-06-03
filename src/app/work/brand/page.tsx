import Link from 'next/link';

const brandProjects = [
  { name: 'Legacy Blinds', type: 'Brand Repositioning', color: '#F59E0B', tagline: 'Premium window treatments, reborn', challenge: 'A 20-year-old manufacturing business with a dated brand struggling to compete with modern interior design brands. Strong product quality, invisible brand presence.', solution: 'Complete visual identity overhaul: new logotype with architectural letterforms, warm premium palette (deep navy, aged gold, cream), bespoke pattern system. Digital-first rollout.', result: 'Brand perception shifted from commodity to premium. 40% increase in direct inquiries from interior designers.', deliverables: ['Logo & Wordmark', 'Color System', 'Typography', 'Pattern Library', 'Website Design', 'Marketing Templates'] },
  { name: 'PavBlock', type: 'Brand Identity', color: '#10B981', tagline: 'Community infrastructure, human-first', challenge: 'A neighborhood coordination platform needing a brand that feels approachable and trustworthy — not corporate, not startup-y — for suburban communities.', solution: 'Warm, civic identity: rounded logotype suggesting community circles, calming green-teal palette, illustrated icons of neighborhood touchpoints. Friendly but structured.', result: 'Launched in multiple US municipalities. Brand consistently described as "welcoming" and "trustworthy" in research sessions.', deliverables: ['Logo System', 'App Icon', 'Illustration Style', 'Color + Type', 'Marketing Site', 'Social Templates'] },
  { name: 'DARTE', type: 'Lifestyle Brand', color: '#EC4899', tagline: 'Where art meets daily life', challenge: 'A creative lifestyle brand at the intersection of art, fashion, and culture. Needed a visual identity that felt editorial, collectible, and culturally aware — not generic.', solution: 'High-contrast identity system: geometric logotype with variable weight, bold color story (charcoal, electric coral, bone white), editorial grid system for content.', result: 'Brand resonated with target audience (18-35 creative class). 10K+ Instagram followers organically in first 3 months.', deliverables: ['Logotype', 'Brand Story', 'Editorial Grid', 'Content Templates', 'Packaging Concepts', 'Brand Guidelines'] },
];

const principles = [
  { icon: '◈', title: 'Distinctiveness over beauty', body: 'The best identities are immediately recognizable and ownable. Every decision is filtered through whether this could be mistaken for anyone else.' },
  { icon: '◎', title: 'Systems over executions', body: 'A logo is 5% of a brand. The 95% is how it scales, flexes, and maintains coherence across packaging, digital ads, pitch decks, and social posts.' },
  { icon: '⬡', title: 'Strategy before aesthetics', body: 'Brand design without positioning, audience understanding, and competitive mapping is decoration. I start with 2 weeks of strategic discovery before opening Figma.' },
  { icon: '△', title: 'Every brand needs a reason to exist', body: 'The strongest brands have a point of view, not just a personality. I help clients find and sharpen that perspective — then design it.' },
];

export default function BrandCaseStudy() {
  return (
    <div className="min-h-screen bg-midnight text-cream pt-24">
      <div className="px-6 md:px-12 mb-12">
        <Link href="/#work" className="inline-flex items-center gap-2 text-muted hover:text-cream transition-colors font-mono text-sm group">
          <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span> Back to work
        </Link>
      </div>

      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <span className="text-xs font-mono tracking-[0.3em] uppercase block mb-8" style={{ color: '#F59E0B' }}>◈ Brand Identity & Visual Systems · 2021–2025</span>
        <h1 className="font-display text-5xl md:text-8xl font-bold text-cream leading-none mb-8">
          DARTE &<br /><em className="not-italic" style={{ color: '#F59E0B' }}>Brand</em>
        </h1>
        <p className="text-secondary text-xl md:text-2xl max-w-3xl leading-relaxed mb-12">
          Full brand identity systems for startups and SMEs — from strategic positioning through logo, type, color, and go-to-market creative, built to scale across every touchpoint.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[{ v: '8+', l: 'Brands Built' }, { v: '100%', l: 'Full Identity' }, { v: '4yr', l: 'Track Record' }, { v: '3 sec', l: 'Recognition Test' }].map((s) => (
            <div key={s.l} className="border border-white/5 rounded-2xl p-6" style={{ background: 'rgba(22,22,30,0.6)' }}>
              <div className="font-display text-4xl font-bold mb-1" style={{ color: '#F59E0B' }}>{s.v}</div>
              <div className="text-cream font-medium text-sm">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <h2 className="font-display text-4xl font-bold text-cream mb-12">Selected Brand Projects</h2>
        <div className="space-y-8">
          {brandProjects.map((project, i) => (
            <div key={project.name} className="border border-white/5 rounded-2xl p-8 md:p-10" style={{ background: 'rgba(22,22,30,0.5)' }}>
              <div className="flex flex-col md:flex-row md:items-start gap-8">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-display text-xl font-bold flex-shrink-0"
                  style={{ background: project.color + '20', color: project.color, border: '1px solid ' + project.color + '30' }}>
                  0{i+1}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="font-display text-2xl font-bold text-cream">{project.name}</h3>
                    <span className="text-xs font-mono px-3 py-1 rounded-full" style={{ color: project.color, background: project.color + '15', border: '1px solid ' + project.color + '30' }}>{project.type}</span>
                  </div>
                  <p className="font-medium text-secondary mb-6 italic">{project.tagline}</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    <div>
                      <p className="text-xs font-mono tracking-widest text-muted uppercase mb-2">Challenge</p>
                      <p className="text-secondary text-sm leading-relaxed">{project.challenge}</p>
                    </div>
                    <div>
                      <p className="text-xs font-mono tracking-widest text-muted uppercase mb-2">Solution</p>
                      <p className="text-secondary text-sm leading-relaxed">{project.solution}</p>
                    </div>
                    <div>
                      <p className="text-xs font-mono tracking-widest text-muted uppercase mb-2">Result</p>
                      <p className="text-secondary text-sm leading-relaxed">{project.result}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.deliverables.map((d) => (
                      <span key={d} className="text-xs font-mono px-2.5 py-1 rounded-md border border-white/5 text-muted" style={{ background: 'rgba(255,255,255,0.02)' }}>{d}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <h2 className="font-display text-4xl font-bold text-cream mb-4">My Brand Philosophy</h2>
        <p className="text-secondary text-lg mb-12 max-w-2xl">After 4+ years and 8+ identities, these are the principles I return to on every engagement.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {principles.map((p) => (
            <div key={p.title} className="border border-white/5 rounded-2xl p-8 hover:border-amber-500/20 transition-all duration-300" style={{ background: 'rgba(22,22,30,0.5)' }}>
              <div className="text-2xl mb-4" style={{ color: '#F59E0B' }}>{p.icon}</div>
              <h3 className="font-display text-xl font-bold text-cream mb-3">{p.title}</h3>
              <p className="text-secondary text-sm leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="flex items-center justify-between">
          <Link href="/work/saas" className="text-muted hover:text-cream transition-colors font-mono text-sm group">
            <span className="group-hover:-translate-x-1 inline-block transition-transform">←</span> Locus & B2B
          </Link>
          <Link href="/#work" className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-violet-500/30 text-violet-400 hover:bg-violet-500/10 transition-all duration-300 font-mono text-sm group">
            View all work <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
