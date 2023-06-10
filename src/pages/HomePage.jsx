import React from "react";
import { About, Prime, Activity, Hero, Navbar, Shared } from "../components";

const HomePage = () => {
  return (
    <>
      <div className="cloud-gradient bg-cover bg-center bg-no-repeat text-black-200">
        <Navbar />
        <Hero />
      </div>
      <div className="absolute right-[-147.5px] top-[1069.96px] -z-30 h-60 w-60 bg-about-ornament" />
      <div className="absolute left-[-152.5px] top-[1310.04px] -z-30 h-60 w-60 bg-about-ornament" />
      <About />
      <Prime />
      <Activity />
      <Shared />
    </>
  );
};

export default HomePage;
