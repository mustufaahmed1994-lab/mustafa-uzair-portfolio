import { ContactFooter } from '@/components/sections/ContactFooter';

export const metadata = {
  title: 'Contact | Mustafa Uzair',
  description: 'Get in touch — executive roles, consulting, brand strategy, design, and development.',
};

export default function ContactPage() {
  return (
    <main className="pt-24">
      <div className="px-8 py-16 border-b border-muted/20">
        <div className="max-w-7xl mx-auto">
          <p className="t-label text-muted uppercase tracking-[0.3em] mb-4">Contact</p>
          <h1 className="t-hero text-paper mb-6">Let's Work Together</h1>
          <p className="t-body text-muted max-w-2xl">
            Open to executive marketing roles, fractional CMO engagements, and high-ticket brand strategy & development projects.
          </p>
        </div>
      </div>
      <div className="px-8 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <p className="t-label text-muted uppercase tracking-[0.3em] mb-8">I work with</p>
            <div className="space-y-4">
              {[
                'VC-backed startups scaling brand to product-market fit',
                'Enterprise brands repositioning for growth markets',
                'Founders who need a creative growth partner',
                'Agencies looking for senior design-strategy leadership',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-1 h-1 bg-accent rounded-full mt-2 shrink-0" />
                  <p className="t-body text-muted">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <p className="t-label text-muted uppercase tracking-[0.3em] mb-8">Engagements</p>
            <div className="space-y-6">
              {[
                { title: 'Executive Roles', desc: 'CMO, VP Marketing, Head of Growth for growth-stage companies.' },
                { title: 'Fractional Leadership', desc: 'Part-time CMO or Head of Growth for early-stage founders.' },
                { title: 'Project-Based', desc: 'Brand identity, product design, or growth strategy projects.' },
                { title: 'Advisory', desc: 'Strategic guidance on brand architecture and go-to-market.' },
              ].map((item) => (
                <div key={item.title}>
                  <h3 className="t-title text-paper mb-1">{item.title}</h3>
                  <p className="t-body text-muted">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <ContactFooter />
    </main>
  );
}
