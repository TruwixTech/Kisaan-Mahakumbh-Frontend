import React from "react";
import Section1 from "../components/AboutpageComponents/Section1";
import Section2 from "../components/AboutpageComponents/Section2";
import Partners from "../components/HomePageComponents/Partners";

function About() {
  return (
    <div className="w-full h-auto flex flex-col">
      <Section1 />
      <Section2 />
      <Partners />
    </div>
  );
}

export default About;
