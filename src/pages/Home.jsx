import HeroesSection from '../components/HeroesSection'
import AgritechHighlight from '../components/Section5'
import Header from '../components/Header'
import Hero from '../assets/Hero.jpg'

function Home() {
  return (
    <div>
       <Header />
       <div className='w-full h-auto flex flex-col min-h-screen relative'>
        <img src={Hero} alt="hero section image" className='w-full h-full absolute object-cover object-left lg:object-center -z-0' style={{
          transform: 'scaleX(-1)'
        }} />
        <div className='w-full h-auto flex flex-col mt-60 relative z-20 px-5 md:px-10 lg:px-20 gap-7'>
          <h1 className='font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl xl:leading-20'>Cultivating a Greener <br /> Future, One Farm at a <br /> Time</h1>
          <div className='w-full h-auto flex flex-col'>
            <div className='w-full h-auto flex flex-col gap-6'>
              <h1 className='font-bold text-white text-sm'>We combines sustainability with technology to empower farms and protect the planet. Discover the future of eco-friendly Kisan Kumbh today.</h1>
              <div className='w-full h-auto flex flex-col'>
                <button className='font-semibold bg-blur bg-transparent text-white border border-white w-40 py-2 rounded-2xl'>Register for Event</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AgritechHighlight />
      <HeroesSection />
    </div>

     
     
    
  )
}

export default Home