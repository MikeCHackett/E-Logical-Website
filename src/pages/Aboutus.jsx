import React from 'react';
import FAQs from '../components/FAQs';
import AboutusBanner from '../components/AboutusBanner';
import OurHistory from '../components/OurHistory';
import BackToTopButton from '../components/BackToTop';

const Aboutus = () => {
  return (
    <>
    <AboutusBanner />
    <BackToTopButton />
    <div className='p-20'></div>
    <FAQs />
    <OurHistory />
    </>
  )
}

export default Aboutus