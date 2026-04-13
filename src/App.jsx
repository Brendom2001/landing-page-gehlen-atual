import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import AuthoritySection from './components/AuthoritySection'
import ProceduresSection from './components/ProceduresSection'
import BenefitsSection from './components/BenefitsSection'
import TestimonialsSection from './components/TestimonialsSection'
import OfferSection from './components/OfferSection'
import ScarcitySection from './components/ScarcitySection'
import AboutSection from './components/AboutSection'
import FinalCTA from './components/FinalCTA'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import MobileCtaBar from './components/MobileCtaBar'

export default function App() {
  return (
    <div className="font-dm bg-brand-bg overflow-x-hidden">
      <Navbar />
      <main className="pb-20 md:pb-0">
        <HeroSection />
        <ProceduresSection />
        <AuthoritySection />
        <BenefitsSection />
        <TestimonialsSection />
        <OfferSection />
        <ScarcitySection />
        <AboutSection />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
      <MobileCtaBar />
    </div>
  )
}
