import React, { useEffect } from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./Context";

const Home = () => {
  // const data = {
  //   name: "Web Designer",
  //   image: "./images/hero.svg",
  // };
  const { updateHomePage } = useGlobalContext();
  
  useEffect(() => {
    updateHomePage();
  }, [])

  return <HeroSection />;
};

export default Home;
