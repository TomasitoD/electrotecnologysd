import Hero from '../components/sections/Hero'
import TrustBar from '../components/sections/TrustBar'
import Categories from '../components/sections/Categories'
import WhyUs from '../components/sections/WhyUs'
import HowToBuy from '../components/sections/HowToBuy'
import Reviews from '../components/sections/Reviews'
import FindUs from '../components/sections/FindUs'
import FinalCTA from '../components/sections/FinalCTA'

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBar />
      <Categories />
      <WhyUs />
      <HowToBuy />
      <Reviews />
      <FindUs />
      <FinalCTA />
    </>
  )
}
