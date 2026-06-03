import Link from 'next/link';

const apps = [
  {
    name: 'MemoryMag',
    category: 'Social / Memory Preservation',
    platform: 'iOS',
    color: '#EC4899',
    tagline: 'A living scrapbook for your most important memories',
    problem: 'People lose their most cherished moments to scattered photos, forgotten dates, and unmaintained journals. MemoryMag gives families a dedicated space to build, curate, and revisit memories together.',
    solution: 'Designed a warm, tactile UI that feels like a physical scrapbook — card-based memory entries, rich photo layouts, timeline browsing, and collaborative family sharing. Prioritized emotional design over feature density.',
    outcome: 'Launched on App Store with 4.5★ rating. Featured in Lifestyle category on launch week.',
    metrics: ['4.5★ App Store', 'iOS Launch', 'Family Sharing', '2024'],
  },
  {
    name: 'EZMedrex',
    category: 'Healthcare / Medical Dispensing',
    platform: 'iOS + Android',
    color: '#10B981',
    tagline: 'Automating the most error-prone task in pharmacy',
    problem: 'Manual medication dispensing causes 1.5M injuries annually in the US. Pharmacists and dispensing technicians need a digital workflow that reduces errors, speeds throughput, and meets FDA compliance requirements.',
    solution: 'Designed a dual-interface system: a clean dispensing workflow for technicians (barcode scan → verify → dispense) and a reporting dashboard for pharmacist oversight. Heavy accessibility focus — high contrast, large targets, audio confirmations.',
    outcome: 'Deployed across pilot pharmacy network. 0 dispensing errors in 6-month pilot period.',
    metrics: ['0 Pilot Errors', 'iOS + Android', 'FDA Compliant UI', '2024'],
  },
  {
    name: 'BeachLyfe',
    category: 'Lifestyle / Coastal Community',
    platform: 'iOS + Android',
    color: '#06B6D4',
    tagline: 'The social layer for beach lovers',
    problem: 'Coastal communities — surfers, divers, beachgoers — had no dedicated platform for conditions, spots, and local events. Generic social apps lack the context and culture of coastal lifestyle.',
    solution: 'Designed a community-first app: surf condition cards with real-time data integration, spot discovery maps, event listings, and a photo-forward social feed. Used a fresh, sun-bleached color palette and sandy textures.',
    outcome: 'Launched iOS + Android simultaneously. Growing organic community of coastal enthusiasts.',
    metrics: ['iOS + Android', 'Community Feed', 'Real-time Conditions', '2024'],
  },
  {
    name: 'ActiveSOS',
    category: 'Safety / Emergency Response',
    platform: 'iOS + Android',
    color: '#FF6B6B',
    tagline: 'One tap to safety — for active adventurers',
    problem: 'Hikers, cyclists, and outdoor enthusiasts face real danger in low-connectivity environments where standard emergency apps fail. Traditional SOS systems require cell service and have high friction during emergencies.',
    solution: 'Designed for extreme stress scenarios: giant tap targets, minimal steps to SOS activation, offline-capable GPS broadcasting, and automated emergency contact notifications. Color-coded alert states and haptic feedback.',
    outcome: 'Beta launched with outdoor sports communities. Featured in emergency preparedness publications.',
    metrics: ['Offline Capable', 'iOS + Android', '1-Tap SOS', '2024'],
  },
];

export default function ProductsCaseStudy() {
  return (
    <div className="min-h-screen bg-midnight text-cream pt-24">
      <div className="px-6 md:px-12 mb-12">
        <Link href="/#work" className="inline-flex items-center gap-2 text-muted hover:text-cream transition-colors font-mono text-sm group">
          <span className="group-hover:-translate-x-1 transition-transform inline-block">←</span> Back to work
        </Link>
      </div>

      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <span className="text-xs font-mono tracking-[0.3em] text-coral uppercase block mb-8">◈ 0-to-1 Product Incubation · 2023–2025</span>
        <h1 className="font-display text-5xl md:text-8xl font-bold text-cream leading-none mb-8">
          Product<br /><em className="text-coral not-italic" style={{ color: '#FF6B6B' }}>Studio</em>
        </h1>
        <p className="text-secondary text-xl md:text-2xl max-w-3xl leading-relaxed mb-12">
          Taking 4 products from blank canvas to App Store launch — consumer apps, healthcare tools, lifestyle platforms — each shipped in 90-day sprint cycles.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[{ v: '4', l: 'Apps Launched' }, { v: 'iOS+', l: 'Android' }, { v: '90d', l: 'Sprint Cycles' }, { v: '4.5★', l: 'Avg Rating' }].map((s) => (
            <div key={s.l} className="border border-white/5 rounded-2xl p-6" style={{ background: 'rgba(22,22,30,0.6)' }}>
              <div className="font-display text-4xl font-bold mb-1" style={{ color: '#FF6B6B' }}>{s.v}</div>
              <div className="text-cream font-medium text-sm">{s.l}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <div className="mb-12">
          <h2 className="font-display text-4xl font-bold text-cream mb-4">The 90-Day Sprint Model</h2>
          <p className="text-secondary text-lg max-w-2xl leading-relaxed">Each product followed the same intensive framework: 2 weeks discovery, 4 weeks design, 4 weeks with engineers, 4 weeks polish and launch prep.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { week: 'Wk 1–2', title: 'Discovery', desc: 'Competitive audit, user interviews, problem definition, market positioning' },
            { week: 'Wk 3–6', title: 'Design', desc: 'Wireframes → high fidelity → prototype → usability testing → final specs' },
            { week: 'Wk 7–10', title: 'Build', desc: 'Embedded with engineering: daily standups, Figma-to-code review, QA passes' },
            { week: 'Wk 11–13', title: 'Launch', desc: 'App Store assets, onboarding flow, launch marketing, post-launch iteration' },
          ].map((s) => (
            <div key={s.week} className="border border-white/5 rounded-2xl p-6" style={{ background: 'rgba(22,22,30,0.5)' }}>
              <div className="text-xs font-mono tracking-widest text-muted uppercase mb-2">{s.week}</div>
              <h3 className="font-display text-lg font-bold text-cream mb-2">{s.title}</h3>
              <p className="text-secondary text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-24">
        <h2 className="font-display text-4xl font-bold text-cream mb-12">The 4 Apps</h2>
        <div className="space-y-8">
          {apps.map((app, i) => (
            <div key={app.name} className="border border-white/5 rounded-2xl overflow-hidden" style={{ background: 'rgba(22,22,30,0.5)' }}>
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center font-display text-2xl font-bold"
                      style={{ background: app.color + '20', color: app.color, border: '1px solid ' + app.color + '30' }}>
                      0{i+1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <h3 className="font-display text-2xl font-bold text-cream">{app.name}</h3>
                      <span className="text-xs font-mono px-3 py-1 rounded-full" style={{ color: app.color, background: app.color + '15', border: '1px solid ' + app.color + '30' }}>{app.category}</span>
                      <span className="text-xs font-mono text-muted">{app.platform}</span>
                    </div>
                    <p className="font-medium text-secondary mb-6 italic">{app.tagline}</p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <div>
                        <p className="text-xs font-mono tracking-widest text-muted uppercase mb-2">Problem</p>
                        <p className="text-secondary text-sm leading-relaxed">{app.problem}</p>
                      </div>
                      <div>
                        <p className="text-xs font-mono tracking-widest text-muted uppercase mb-2">Solution</p>
                        <p className="text-secondary text-sm leading-relaxed">{app.solution}</p>
                      </div>
                      <div>
                        <p className="text-xs font-mono tracking-widest text-muted uppercase mb-2">Outcome</p>
                        <p className="text-secondary text-sm leading-relaxed mb-4">{app.outcome}</p>
                        <div className="flex flex-wrap gap-2">
                          {app.metrics.map((m) => (
                            <span key={m} className="text-xs font-mono px-2 py-1 rounded-md" style={{ color: app.color, background: app.color + '10', border: '1px solid ' + app.color + '20' }}>{m}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 md:px-12 max-w-7xl mx-auto mb-32">
        <div className="flex items-center justify-between">
          <Link href="/work/enterprise" className="text-muted hover:text-cream transition-colors font-mono text-sm group">
            <span className="group-hover:-translate-x-1 inline-block transition-transform">←</span> Bazaar Suite
          </Link>
          <Link href="/work/saas" className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-coral/30 hover:bg-coral/10 transition-all duration-300 font-mono text-sm group" style={{ color: '#FF6B6B', borderColor: 'rgba(255,107,107,0.3)' }}>
            Next: Locus & B2B <span className="group-hover:translate-x-1 inline-block transition-transform">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
