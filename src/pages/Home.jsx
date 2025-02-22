import AboutEvent from "../components/HomePageComponents/AboutEvent";
import HeroesSection from "../components/HomePageComponents/HeroesSection";
import HeroSection from "../components/HomePageComponents/HeroSection";
import Partners from "../components/HomePageComponents/Partners";
import Section4 from "../components/HomePageComponents/Section4";
import AgritechHighlight from "../components/HomePageComponents/Section5";
import { useEffect } from "react";
import Section6 from "../components/HomePageComponents/Section6";
import ContactComponent from "../components/ContactComponent";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <HeroSection />
      <AboutEvent />
      <Partners />
      <Section4 />
      <AgritechHighlight />
      <HeroesSection />
      <Section6 />
      <div className='md:pt-10 md:px-10 lg:px-20 px-5  py-8 bg-[#e7e7e7]'>
        <ContactComponent />
      </div>
    </>
  );
}

export default Home;
