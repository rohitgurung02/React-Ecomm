import React from "react";
import HeroSection from "./components/HeroSection";

const Home = () => {
  const data = {
    name: "Web Designer",
    image: "./images/hero.svg",
  };
  return <HeroSection {...data} />;
};

export default Home;
