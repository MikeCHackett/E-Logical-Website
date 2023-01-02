import React from 'react'
import { RxCheck } from 'react-icons/rx';

const Features = () => {
  return (
    <div className='w-full my-32'>
      <div className='max-w-[1240px] mx-auto px-2'>
        <h2 className='text-5xl text-white font-bold text-center'>All-in-one Features</h2>
        <p className='text-2xl py-8 text-white text-center'>Our all-in-one web development package is designed to provide your business with everything you need to succeed online. With our comprehensive set of services, you'll be able to get your website up and running, attract and engage clients, and expand your business.</p>

        <div className='grid sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-4'>



            <div className='flex'>
              <div>
              <RxCheck className='w-7 h-7 mr-4 text-green' />
              </div>
              <div className=''>
                <h3 className='font-bold text-lg'>Website design and development:</h3>
                <p className='text-lg pt-2 pb-4'>We'll work with you to create a professional, functional website that meets your business needs and goals.</p>
              </div>
            </div>

            <div className='flex'>
              <div>
              <RxCheck className='w-7 h-7 mr-4 text-green' />
              </div>
              <div className=''>
                <h3 className='font-bold text-lg'>Custom graphics and branding:</h3>
                <p className='text-lg pt-2 pb-4'>We'll help you establish a cohesive visual identity that reflects your brand and differentiates you from the competition.</p>
              </div>
            </div>

            <div className='flex'>
              <div>
              <RxCheck className='w-7 h-7 mr-4 text-green' />
              </div>
              <div className=''>
                <h3 className='font-bold text-lg'>Search engine optimization (SEO):</h3>
                <p className='text-lg pt-2 pb-4'>We'll optimize your website for search engines to help you attract more qualified traffic and improve your search engine rankings.</p>
              </div>
            </div>

            <div className='flex'>
              <div>
              <RxCheck className='w-7 h-7 mr-4 text-green' />
              </div>
              <div className=''>
                <h3 className='font-bold text-lg'>Marketing and advertising support:</h3>
                <p className='text-lg pt-2 pb-4'>We'll help you develop and implement a marketing strategy that aligns with your business goals and budget.</p>
              </div>
            </div>

            <div className='flex'>
              <div>
              <RxCheck className='w-7 h-7 mr-4 text-green' />
              </div>
              <div className=''>
                <h3 className='font-bold text-lg'>Email marketing and social media integration:</h3>
                <p className='text-lg pt-2 pb-4'>We'll integrate your website with your email marketing and social media platforms to help you reach and engage your audience.</p>
              </div>
            </div>

            <div className='flex'>
              <div>
              <RxCheck className='w-7 h-7 mr-4 text-green' />
              </div>
              <div className=''>
                <h3 className='font-bold text-lg'>Ongoing support and maintenance:</h3>
                <p className='text-lg pt-2 pb-4'>We'll provide ongoing support and maintenance to ensure that your website stays up to date and performs at its best.</p>
              </div>
            </div>

            <div className='flex'>
              <div>
              <RxCheck className='w-7 h-7 mr-4 text-green' />
              </div>
              <div className=''>
                <h3 className='font-bold text-lg'>Content creation:</h3>
                <p className='text-lg pt-2 pb-4'>Providing high-quality content is essential for attracting and engaging customers online. We could include services such as blog writing, social media content creation, and email marketing content development in our all-in-one packages.</p>
              </div>
            </div>

            <div className='flex'>
              <div>
              <RxCheck className='w-7 h-7 mr-4 text-green' />
              </div>
              <div className=''>
                <h3 className='font-bold text-lg'>Analytics and reporting:</h3>
                <p className='text-lg pt-2 pb-4'>Understanding how your website and marketing efforts are performing is key to making informed decisions about your business. We include services such as website analytics tracking and reporting, as well as marketing campaign tracking and reporting, in our all-in-one packages.</p>
              </div>
            </div>







          </div>
        </div>
      </div>
  )
}

export default Features
