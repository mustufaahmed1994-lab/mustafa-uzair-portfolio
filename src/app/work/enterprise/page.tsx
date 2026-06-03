export const metadata = {
  title: 'Enterprise Ecosystems | Mustafa Uzair',
  description: 'The Bazaar Suite — standardizing brand at scale.',
};

const projects = [
  { name: 'Easy Khata', role: 'Creative Brand Lead', desc: 'Digital bookkeeping for 2.4M small businesses. Led brand system standardization and growth campaigns driving 25% customer acquisition uplift.' },
  { name: 'Bazaar Pro', role: 'Creative Brand Manager', desc: 'B2B wholesale marketplace. Brand architecture and identity system aligned with enterprise-grade positioning.' },
  { name: 'Shipper', role: 'Brand Designer', desc: 'Logistics platform. Visual identity aligned with Bazaar ecosystem brand standards.' },
  { name: 'Bazaar Agent & Warehouse', role: 'Brand Designer', desc: 'Field and inventory management. Cohesive brand extension within the Bazaar product suite.' },
];

export default function EnterprisePage() {
  return (
    <main className="pt-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="py-16 border-b border-muted/20 mb-16">
          <p className="t-label text-muted uppercase tracking-[0.3em] mb-4">01 — Enterprise Ecosystems</p>
          <h1 className="t-hero text-paper mb-6">The Bazaar Suite</h1>
          <p className="t-body text-muted max-w-2xl">
            Standardizing brand identity across a $100M+ funded B2B marketplace. HBS Case Study 822-098.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {projects.map((project) => (
            <div key={project.name} className="border border-muted/20 p-8 hover:border-muted/50 transition-colors">
              <p className="t-label text-muted uppercase tracking-widest mb-2">{project.role}</p>
              <h2 className="t-title text-paper mb-4">{project.name}</h2>
              <p className="t-body text-muted">{project.desc}</p>
            </div>
          ))}
        </div>
        <div className="py-12 border-t border-muted/20">
          <p className="t-label text-muted uppercase tracking-[0.3em] mb-8">Impact</p>
          <div className="grid grid-cols-3 gap-8">
            <div><div className="t-display text-paper mb-2">2.4M</div><p className="t-label text-muted">Businesses Digitized</p></div>
            <div><div className="t-display text-paper mb-2">$100M+</div><p className="t-label text-muted">Funding Raised</p></div>
            <div><div className="t-display text-paper mb-2">HBS</div><p className="t-label text-muted">Case Study 822-098</p></div>
          </div>
        </div>
      </div>
    </main>
  );
}
