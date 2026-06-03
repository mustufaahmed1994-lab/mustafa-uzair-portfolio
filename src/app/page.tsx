import Hero from '@/components/sections/Hero'
import { ImpactBar } from '@/components/sections/ImpactBar'
import { WorkIndex } from '@/components/sections/WorkIndex'
import { CapabilitiesGrid } from '@/components/sections/CapabilitiesGrid'
import { ContactFooter } from '@/components/sections/ContactFooter'
import Nav from '@/components/ui/Nav'

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <ImpactBar />
        <WorkIndex />
        <CapabilitiesGrid />
        <ContactFooter />
      </main>
    </>
  )
}
