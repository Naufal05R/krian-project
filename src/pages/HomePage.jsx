import React from 'react';
import { About, Prime, Hero, Navbar, Shared, GetStarted, WhatsNew, Objective } from '../components';
import Feedback from '../components/Feedback';

const HomePage = () => {
  return (
    <>
      <div className='cloud-gradient bg-cover bg-center bg-no-repeat text-black-200'>
        <Navbar />
        <Hero />
      </div>
      <div className='absolute right-[-147.5px] top-[1069.96px] -z-30 h-60 w-60 bg-about-ornament' />
      <div className='absolute left-[-152.5px] top-[1310.04px] -z-30 h-60 w-60 bg-about-ornament' />
      <About />
      <div className='absolute right-[-147.5px] top-[2069.96px] -z-30 h-60 w-60 bg-about-ornament' />
      <div className='absolute left-[-152.5px] top-[2310.04px] -z-30 h-60 w-60 bg-about-ornament' />
      <GetStarted />
      <div className='absolute right-[-147.5px] top-[3069.96px] -z-30 h-60 w-60 bg-about-ornament' />
      <div className='absolute left-[-152.5px] top-[3310.04px] -z-30 h-60 w-60 bg-about-ornament' />
      <WhatsNew />
      <div className='absolute right-[-147.5px] top-[4069.96px] -z-30 h-60 w-60 bg-about-ornament' />
      <div className='absolute left-[-152.5px] top-[4310.04px] -z-30 h-60 w-60 bg-about-ornament' />
      <Prime />
      <div className='absolute right-[-147.5px] top-[5069.96px] -z-30 h-60 w-60 bg-about-ornament' />
      <div className='absolute left-[-152.5px] top-[5310.04px] -z-30 h-60 w-60 bg-about-ornament' />
      <Objective />
      <div className='absolute right-[-147.5px] top-[6069.96px] -z-30 h-60 w-60 bg-about-ornament' />
      <div className='absolute left-[-152.5px] top-[6310.04px] -z-30 h-60 w-60 bg-about-ornament' />
      <Feedback />
      <div className='absolute right-[-147.5px] top-[7069.96px] -z-30 h-60 w-60 bg-about-ornament' />
      <div className='absolute left-[-152.5px] top-[7310.04px] -z-30 h-60 w-60 bg-about-ornament' />
    </>
  );
};

export default HomePage;
