import AboutEvent from "../components/HomePageComponents/AboutEvent";
import HeroesSection from "../components/HomePageComponents/HeroesSection";
import HeroSection from "../components/HomePageComponents/HeroSection";
import Partners from "../components/HomePageComponents/Partners";
import Section4 from "../components/HomePageComponents/Section4";
import AgritechHighlight from "../components/HomePageComponents/Section5";
import { useEffect } from "react";

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
    </>
  );
}

export default Home;
