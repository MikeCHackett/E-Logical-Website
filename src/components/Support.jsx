import React from 'react'
import { BiSupport } from 'react-icons/bi';
import { GoFileMedia } from 'react-icons/go';
import { MdSecurity } from 'react-icons/md';
import { BsBoxArrowRight } from 'react-icons/bs';
import SupportImage from '../assets/support.jpg';
import {Link} from 'react-router-dom';


const Support = () => {
  return (
    <div className='w-full mt-24'>
      <div className='w-full h-[700px] bg-primary/40 absolute'>
        <img className='w-full h-full object-cover mix-blend-overlay' src={SupportImage} />
      </div>
      <div className='max-w-[1240px] mx-auto text-white relative'>
        <div className='px-4 py-12'>
          <h2 className='text-3xl pt-8 text-secondary uppercase text-center'>Support</h2>
          <h3 className='text-5xl font-bold py-6 text-center'>Finding the right support for your team</h3>
          <p className='py-4 text-3xl text-secondary'>Our web development business is dedicated to providing top-quality support to our clients. We offer a range of support services to ensure that your website is always up and running, secure, and effective at achieving your business goals.</p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-6 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
          <div className='bg-white rounded-xl shadow-2xl '>
            <div className='p-8'>
              <BiSupport className="w-20 h-20 p-4 bg-hover text-background rounded-xl mt-[-4rem]" />
              <h3 className='font-bold text-3xl text-hover my-4'>Technical Support</h3>
              <p className='text-background font-thin py-12 text-xl'>Our technical support team is available to troubleshoot and resolve any issues that may arise with your website. Whether you're experiencing a technical problem or just have a question about how to use a feature, we're here to help.</p>
            </div>
            <div className='bg-secondary rounded-xl pl-8 py-4'>
            <Link to='/contact'><p className='flex items-center text-xl hover:text-background text-hover font-bold'>Contact Us <BsBoxArrowRight className='w-5 ml-2' /></p></Link>
            </div>
          </div>

          <div className='bg-white rounded-xl shadow-2xl '>
            <div className='p-8'>
              <MdSecurity className="w-20 h-20 p-4 bg-hover text-background rounded-xl mt-[-4rem]" />
              <h3 className='font-bold text-3xl text-hover my-4'>Web Security</h3>
              <p className='text-background py-5 font-thin text-xl'>Ensuring the security of your website is crucial for protecting your business and your customers. Our web security services include regular security scans, vulnerability assessments, and secure hosting to help protect your website from threats such as malware and hacking.</p>
            </div>
            <div className='bg-secondary rounded-xl pl-8 py-4'>
            <Link to='/contact'><p className='flex items-center text-xl hover:text-background text-hover font-bold'>Contact Us <BsBoxArrowRight className='w-5 ml-2' /></p></Link>
            </div>
          </div>

          <div className='bg-white rounded-xl shadow-2xl '>
            <div className='p-8'>
              <GoFileMedia className="w-20 h-20 p-4 bg-hover text-background rounded-xl mt-[-4rem]" />
              <h3 className='font-bold text-3xl text-hover my-4'>Media Integration</h3>
              <p className='text-background py-1.5 font-thin text-xl'>We understand the importance of incorporating multimedia elements into your website to enhance the user experience and engage your audience. Our media integration services include the integration of video, audio, and other media types into your website to help you effectively communicate your message.</p>
            </div>
            <div className='bg-secondary rounded-xl pl-8 py-4'>
            <Link to='/contact'><p className='flex items-center text-xl hover:text-background text-hover font-bold'>Contact Us <BsBoxArrowRight className='w-5 ml-2' /></p></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support
