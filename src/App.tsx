import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'
import PainAgitation from '@/components/sections/PainAgitation'
import ChaosToOrder from '@/components/bridges/ChaosToOrder'
import DreamOutcome from '@/components/sections/DreamOutcome'
import MiniStats from '@/components/bridges/MiniStats'
import Vehicle from '@/components/sections/Vehicle'
import PullQuote from '@/components/bridges/PullQuote'
import WhyNotDIY from '@/components/sections/WhyNotDIY'
import OfferStack from '@/components/sections/OfferStack'
import Divider from '@/components/bridges/Divider'
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
        <ChaosToOrder />
        <DreamOutcome />
        <MiniStats />
        <Vehicle />
        <PullQuote />
        <WhyNotDIY />
        <OfferStack />
        <Divider />
        <SocialProof />
        <HowItWorks />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  )
}
