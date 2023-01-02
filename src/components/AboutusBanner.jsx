import React from 'react'
import AboutusImage from '../assets/aboutus.jpg';

const AboutusBanner = () => {
  return (
    <div className='w-full '>
      <div className='w-full h-[700px] bg-primary/40 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={AboutusImage} />
      </div>

      <div className='max-w-[1240px] mx-auto text-white relative'>
        <div className='px-4 py-12'>
          <h2 className='text-3xl pt-8 text-secondary uppercase text-center'>About Our Team</h2>
          <h3 className='text-5xl font-bold py-6 text-center'>About E-logical : Custom Website Design and Development</h3>
          <p className='py-4 text-3xl text-secondary'>E-logical is a web development company that specializes in creating custom websites for businesses and individuals. Our team of experienced web developers are dedicated to delivering high-quality, user-friendly websites that are tailored to meet the specific needs and goals of our clients.</p>
        </div>
        </div>
        </div>
  )
}

export default AboutusBanner