import WorkIndex from '@/components/sections/WorkIndex';

export const metadata = {
  title: 'Work | Mustafa Uzair',
  description: 'Selected work across enterprise ecosystems, product incubation, B2B SaaS, and brand identity.',
};

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-midnight pt-16">
      <WorkIndex />
    </div>
  );
}
