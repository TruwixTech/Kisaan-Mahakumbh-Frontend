import AboutEvent from '../components/HomePageComponents/AboutEvent'
import HeroesSection from '../components/HomePageComponents/HeroesSection'
import HeroSection from '../components/HomePageComponents/HeroSection'
import AgritechHighlight from '../components/HomePageComponents/Section5'


function Home() {
  return (
    <>
      <HeroSection />
      <AboutEvent />
      <AgritechHighlight />
      <HeroesSection />
    </>
  )
}

export default Home