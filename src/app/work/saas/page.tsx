export const metadata = {
  title: 'B2B SaaS & Strategy | Mustafa Uzair',
  description: 'Growth strategy and design systems for B2B SaaS companies.',
};

const projects = [
  { name: 'Feature8', type: 'UI/UX Launch', desc: 'Full product UI/UX design system and launch. Designed onboarding flows and reduced time-to-value.' },
  { name: 'Locus.sh', type: 'Creative Content', desc: 'Creative content direction for a logistics SaaS leader. Drove enterprise positioning.' },
  { name: 'Legacy Blinds', type: 'Brand Strategy', desc: 'Brand repositioning and digital strategy for a premium home furnishings brand.' },
];

export default function SaasPage() {
  return (
    <main className="pt-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="py-16 border-b border-muted/20 mb-16">
          <p className="t-label text-muted uppercase tracking-[0.3em] mb-4">03 — B2B SaaS & Strategy</p>
          <h1 className="t-hero text-paper mb-6">Enterprise Growth</h1>
          <p className="t-body text-muted max-w-2xl">
            Design-driven growth strategy for B2B SaaS. Translating complex products into clear value propositions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.name} className="border border-muted/20 p-8 hover:border-muted/50 transition-colors">
              <p className="t-label text-muted uppercase tracking-widest mb-2">{project.type}</p>
              <h2 className="t-title text-paper mb-4">{project.name}</h2>
              <p className="t-body text-muted">{project.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
