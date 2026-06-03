import WebGLCanvas from '@/components/canvas/WebGLCanvas';
import Hero from '@/components/sections/Hero';
import ImpactBar from '@/components/sections/ImpactBar';
import WorkIndex from '@/components/sections/WorkIndex';
import CapabilitiesGrid from '@/components/sections/CapabilitiesGrid';
import ContactFooter from '@/components/sections/ContactFooter';

export default function Home() {
  return (
    <>
      <WebGLCanvas />
      <Hero />
      <ImpactBar />
      <WorkIndex />
      <CapabilitiesGrid />
      <ContactFooter />
    </>
  );
}
