import React from "react";
import HeroSection from "./components/HeroSection";

const About = () => {
  const data = {
    name: "Developers and Designer",
    image: "./images/about1.svg",
  };
  return <HeroSection {...data} />;
};

export default About;
