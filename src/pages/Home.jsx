import HeroesSection from '../components/HeroesSection'
import AgritechHighlight from '../components/Section5'
import Header from '../components/Header'
import Hero from '../assets/Hero.jpg'

function Home() {
  return (
    <>

      <div className='w-full h-auto flex flex-col min-h-screen relative pb-8'>
        <img src={Hero} alt="hero section image" className='w-full h-full absolute object-cover object-left lg:object-center -z-0' style={{
          transform: 'scaleX(-1)'
        }} />
        <div className='relative z-40'>
          <Header />
        </div>
        <div
          className="w-full h-full flex flex-col min-h-screen absolute z-10"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.7) 0%, rgba(19, 19, 19, 0.49) 49%, rgba(131, 131, 131, 0) 100%)`,
            backgroundSize: '100% 100%',  // Adjust size as per requirement
            backgroundPosition: 'left center',  // Ensures the gradient starts from the left
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Your content */}
        </div>

        <div className='w-full h-auto flex flex-col mt-16 relative z-20 px-5 md:px-10 lg:px-20 gap-7'>
          <h1 className='font-bold text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl xl:leading-20'>Cultivating a Greener <br /> Future, One Farm at a <br /> Time</h1>
          <div className='w-full h-auto flex flex-col gap-6 md:flex-row'>
            <div className='w-full h-auto flex flex-col gap-6'>
              <h1 className='font-bold text-white text-sm md:pr-6 lg:pr-20 xl:pr-60 lg:text-lg xl:text-xl'>We combines sustainability with technology to empower farms and protect the planet. Discover the future of eco-friendly Kisan Kumbh today.</h1>
              <div className='w-full h-auto flex gap-6'>
                <button className='font-bold bg-blur bg-transparent text-white bg-white/10 border border-white/30 shadow-lg hover:bg-white/20 transition-all w-40 py-2 rounded-2xl xl:w-52 xl:py-3 xl:text-lg cursor-pointer'>Register for Event</button>
                <button className='font-bold bg-blur bg-white text-[#297F39] bg-transparent border border-[#297F39] w-20 py-2 rounded-xl xl:w-28 cursor-pointer xl:text-lg'>Join us</button>
              </div>
            </div>
            <div className='w-full h-auto flex md:w-auto xl:w-[650px] 2xl:w-[700px]'>
              <div className='w-full h-auto flex gap-3 rounded-xl p-3 border xl:p-5 2xl:p-8 bg-blur bg-transparent text-white bg-white/10 border border-white/30 shadow-lg hover:bg-white/20 transition-all'>
                <img src="" alt="" className='w-32 h-32 bg-white rounded-xl' />
                <div className='flex flex-1 h-auto flex flex-col text-white justify-around'>
                  <h1 className='text-sm sm:text-xl md:text-sm'>Growing Together for a Kisan Kumbh World</h1>
                  <p className='h-[1px] w-full bg-white'></p>
                  <p className='text-xs sm:text-lg md:text-sm'>Together, let's cultivate a sustainable future with practices that support robust farm yields and a healthier planet</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AgritechHighlight />
      <HeroesSection />
    </>
  )
}

export default Home