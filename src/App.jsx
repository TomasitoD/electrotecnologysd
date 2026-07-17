import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppFloat from './components/WhatsAppFloat'
import Hero from './components/sections/Hero'
import TrustBar from './components/sections/TrustBar'
import Categories from './components/sections/Categories'
import WhyUs from './components/sections/WhyUs'
import HowToBuy from './components/sections/HowToBuy'
import Reviews from './components/sections/Reviews'
import FindUs from './components/sections/FindUs'
import FinalCTA from './components/sections/FinalCTA'
import { initScrollReveal } from './lib/scrollReveal'

export default function App() {
  useEffect(() => {
    const cleanup = initScrollReveal()
    return cleanup
  }, [])

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Categories />
        <WhyUs />
        <HowToBuy />
        <Reviews />
        <FindUs />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
