import React from 'react'
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Support from '../components/Support';
import Features from '../components/Features';
import Pricing from '../components/Pricing';
import Arrow from '../components/Arrow';
import BackToTopButton from '../components/BackToTop';
import Tech from '../components/Tech';

function Home() {
  return (
    <>
    <Arrow />
    <BackToTopButton />
    <Hero />
    <Stats />
    <Support />
    <Features />
    <Tech />
    <Pricing />
    </>
  )
}

export default Home
