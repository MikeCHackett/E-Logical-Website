import React from 'react';
import SignImage from '../assets/sign.jpg';

const Signin = () => {
  return (
    <div className='w-full h-[93vh]'>
      <div className='w-full h-screen bg-secondary/40 absolute'>
        <img src={SignImage} className='w-full h-full object-cover mix-blend-overlay' />
      </div>
      <div className='max-w-[800px] py-44 mx-auto'>
        <div className='grid grid-cols-1'>
          <div className='rounded-lg bg-white text-background m-4 p-64 shadow-2xl relative'>
            <span className='uppercase px-3 py-1 bg-secondary top-5 absolute left-5 text-hover font-bold rounded-2xl text-md'>Sign In</span>
                    <div className='flex justify-center'></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signin