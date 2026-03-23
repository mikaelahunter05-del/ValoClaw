import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import PainAgitation from '@/components/sections/PainAgitation'
import DreamOutcome from '@/components/sections/DreamOutcome'
import Vehicle from '@/components/sections/Vehicle'
import WhyNotDIY from '@/components/sections/WhyNotDIY'
import OfferStack from '@/components/sections/OfferStack'
import SocialProof from '@/components/sections/SocialProof'
import HowItWorks from '@/components/sections/HowItWorks'
import FAQ from '@/components/sections/FAQ'
import FinalCTA from '@/components/sections/FinalCTA'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PainAgitation />
        <DreamOutcome />
        <Vehicle />
        <WhyNotDIY />
        <OfferStack />
        <SocialProof />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  )
}
