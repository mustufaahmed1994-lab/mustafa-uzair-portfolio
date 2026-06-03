export const metadata = {
  title: '0-to-1 Product Incubation | Mustafa Uzair',
  description: 'Cross-platform consumer and medical apps — UI/UX, app store deployment, CAC reduction.',
};

const projects = [
  { name: 'MemoryMag', type: 'Consumer App', desc: 'Memory preservation and journaling app. Full UI/UX design and app store deployment.' },
  { name: 'EZMedrex', type: 'Medical App', desc: 'Prescription management and medication tracking. HIPAA-aligned UX design.' },
  { name: 'BeachLyfe', type: 'Lifestyle App', desc: 'Beach lifestyle and activity booking platform. Mobile-first product design.' },
  { name: 'ActiveSOS', type: 'Safety App', desc: 'Emergency response and community safety app. Critical UX for high-stakes scenarios.' },
  { name: 'Pavblock', type: 'Community App', desc: 'Neighbor-to-neighbor coordination platform. Community-driven product design.' },
];

export default function ProductsPage() {
  return (
    <main className="pt-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="py-16 border-b border-muted/20 mb-16">
          <p className="t-label text-muted uppercase tracking-[0.3em] mb-4">02 — 0-to-1 Product Incubation</p>
          <h1 className="t-hero text-paper mb-6">Consumer & Mobile Apps</h1>
          <p className="t-body text-muted max-w-2xl">
            Taking products from concept to market. UI/UX design, app store deployment, and growth strategies that lower CAC.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
