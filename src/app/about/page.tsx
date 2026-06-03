export const metadata = {
  title: 'About | Mustafa Uzair',
  description: 'Head of Growth & Product Marketing | Brand Strategy. Karachi, Pakistan.',
};

export default function AboutPage() {
  return (
    <main className="pt-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="py-16 border-b border-muted/20 mb-16">
          <p className="t-label text-muted uppercase tracking-[0.3em] mb-4">About</p>
          <h1 className="t-hero text-paper mb-6">Mustafa Uzair</h1>
          <p className="t-display text-muted font-light">
            Head of Growth & Product Marketing | Brand Strategy
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
          <div>
            <p className="t-label text-muted uppercase tracking-[0.3em] mb-6">Executive Profile</p>
            <p className="t-body text-paper leading-relaxed mb-6">
              Tested in the high stakes world of venture capital. I believe true design requires both museum quality aesthetics and rigorous commercial intent. Over the last eight years I have proven that high fidelity art directly drives unit economics.
            </p>
            <p className="t-body text-muted leading-relaxed">
              I do not just make things look beautiful. I engineer visual stories that capture human psychology and dictate market leadership.
            </p>
          </div>
          <div>
            <p className="t-label text-muted uppercase tracking-[0.3em] mb-6">Recognition</p>
            <div className="space-y-6">
              <div>
                <div className="t-title text-paper mb-1">Harvard Business School</div>
                <p className="t-label text-muted">Case Study 822-098 — Brand-led growth at Bazaar Technologies</p>
              </div>
              <div>
                <div className="t-title text-paper mb-1">$100M+ Institutional Backing</div>
                <p className="t-label text-muted">Tiger Global & Dragoneer — Part of core scale-up team</p>
              </div>
              <div>
                <div className="t-title text-paper mb-1">2.4M Businesses Digitized</div>
                <p className="t-label text-muted">Easy Khata — 500 cities across Pakistan</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16">
          <p className="t-label text-muted uppercase tracking-[0.3em] mb-8">Career</p>
          <div className="space-y-8 border-l border-muted/20 pl-8">
            {[
              { company: 'FORJWELL', role: 'Marketing Director', period: 'June 2026 – Present', desc: 'Lead global marketing strategy and brand architecture for the enterprise and parent company Forjocean.' },
              { company: 'JUMPPACE', role: 'Head of Growth & Product Marketing (Co-Founder, Rizznart)', period: 'Jan 2024 – Jan 2026', desc: 'Co-founded Rizznart. Built growth engines lowering CAC via organic and creator-led distribution.' },
              { company: 'BAZAAR TECHNOLOGIES', role: 'Creative Brand Manager', period: '2021 – 2023', desc: '30% surge in brand awareness. 80% improvement in sentiment. 25% customer acquisition uplift. HBS Case Study.' },
            ].map((job) => (
              <div key={job.company} className="relative">
                <div className="absolute -left-10 top-1 w-2 h-2 bg-accent rounded-full" />
                <p className="t-label text-muted uppercase tracking-widest mb-1">{job.period}</p>
                <h3 className="t-title text-paper mb-1">{job.role}</h3>
                <p className="t-label text-muted mb-2">{job.company}</p>
                <p className="t-body text-muted">{job.desc}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-16">
          <p className="t-label text-muted uppercase tracking-[0.3em] mb-6">Education</p>
          <div>
            <h3 className="t-title text-paper mb-1">Indus Valley School of Art and Architecture (IVS)</h3>
            <p className="t-body text-muted mb-1">Bachelor in Communication Design</p>
            <p className="t-label text-muted">GPA: 4.0 &middot; Distinction in Thesis</p>
          </div>
        </div>
      </div>
    </main>
  );
}
