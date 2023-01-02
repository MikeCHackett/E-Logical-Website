import React from 'react'
import GitImage from '../assets/git.png';
import CssImage from '../assets/css3.png';
import JavaScriptImage from '../assets/js.png';
import HtmlImage from '../assets/html5.png';
import NextImage from '../assets/nextjs.png';
import NodejsImage from '../assets/nodejs.png';
import ReactImage from '../assets/reactjs.png';
import FigmaImage from '../assets/figma.png';

const Tech = () => {
  return (
    <div className='w-full bg-card h-[600px]'>
        <div className=''>
        <div className='flex flex-col items-center'>
            <h1 className='text-white text-5xl pt-6 uppercase shadow-lg rounded-md font-bold'>Technologies we use</h1>
            <p className='text-white text-2xl pt-4 shadow-lg rounded-md'>At E-logical web services, we use a variety of technologies to build and maintain high-quality websites for our clients.</p>

        <div className='flex justify-center mt-32 border-b-2'>
            <img className='w-[15%] aspect-auto object-contain bg-card mix-color-blend-light' src={GitImage} />
            <img className='w-[15%] aspect-auto object-contain bg-card mix-color-blend-light' src={CssImage} />
            <img className='w-[15%] aspect-auto object-contain bg-card mix-color-blend-light' src={JavaScriptImage} />
            <img className='w-[15%] aspect-auto object-contain bg-card mix-color-blend-light' src={HtmlImage} />
            <img className='w-[15%] aspect-auto object-contain bg-card mix-color-blend-light' src={NextImage} />
            <img className='w-[15%] aspect-auto object-contain bg-card mix-color-blend-light' src={NodejsImage} />
            <img className='w-[15%] aspect-auto object-contain bg-card mix-color-blend-light' src={ReactImage} />
            <img className='w-[15%] aspect-auto object-contain bg-card mix-color-blend-light' src={FigmaImage} />
        </div>

            <p className='text-white w-[800px] text-2xl pt-6'>Overall, our team has a wealth of expertise in a wide range of web development technologies, and we are always looking to stay up-to-date with the latest and greatest tools and techniques in the industry.</p>
        </div>
    </div>
    </div>
  )
}

export default Tech