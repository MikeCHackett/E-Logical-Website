import React from 'react'
import HistoryImage from '../assets/history.jpg';

const OurHistory = () => {
  return (
    <div className='w-full h-[93vh]'>
      <div className='w-1/2 h-screen rounded-3xl bg-black/40 absolute'>
        <img className='w-full z-0 rounded-3xl h-screen object-cover mix-blend-overlay' src={HistoryImage} />
      </div>

      <div className='max-w-[1240px] mx-auto relative text-white'>
        <div className='grid grid-cols-1 px-10 py-32'>
        <h2 className='text-6xl title py-16 pt-16 text-green uppercase text-center'>Meet Our Team: Your Trusted Web Development Professionals</h2>
        <p className='text-center text-white text-2xl'>Our company is a web development firm with over 2 years of experience in the industry. We specialize in building custom websites and web-based applications that are tailored to the specific needs of our clients. Our team is made up of skilled and experienced developers who are passionate about creating high-quality, user-friendly websites that help businesses succeed online. We have worked with a variety of clients in different industries, and we pride ourselves on our ability to understand the unique requirements of each project. Whether you need a simple brochure website or a complex e-commerce platform, we have the expertise to deliver a solution that meets your needs. In addition to our technical skills, we also place a strong emphasis on customer service. We believe that open communication and collaboration are key to the success of any project, and we strive to maintain a close working relationship with our clients throughout the development process. With a focus on clean, modern design and a user-centered approach to development, we strive to create websites that not only look great but are also easy to navigate and use. We believe that a website should be more than just an online brochure, and work closely with our clients to ensure that their website is an integral part of their overall business strategy. In addition to custom website design and development, we also offer a range of related services including search engine optimization (SEO), social media integration, and ongoing maintenance and support. We are excited to work with you and help bring your web development vision to life. Contact us today to learn more about how we can help your business succeed online.</p>
      </div>
      </div>
    </div>
  )
}

export default OurHistory