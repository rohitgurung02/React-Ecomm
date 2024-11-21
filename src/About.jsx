import React, {useEffect} from "react";
import HeroSection from "./components/HeroSection";
import { useGlobalContext } from "./Context";

const About = () => {

  // const data = {
  //   name: "Developers and Designer",
  //   image: "./images/about1.svg",
  // };
  const { updateAboutPage } = useGlobalContext();

  useEffect(() => {
    updateAboutPage();
  }, [])

  return <HeroSection/>;
};

export default About;
