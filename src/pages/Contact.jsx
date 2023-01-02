import React from 'react'
import Globe from '../components/Globe'


function Contact() {
  return (
    <div className='mx-auto h-screen'>
      <div className='bg-white'>
        <form className='flex flex-col'>
          <form type='text' placeholder='Your Name'></form>
          <form type='text' placeholder='Your Email'></form>
          <form type='text' placeholder='Your Message'></form>
        </form>
      </div>
    </div>
  )
}

export default Contact
