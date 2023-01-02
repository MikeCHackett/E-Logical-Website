import React from 'react'
import HeroBg from '../assets/herobg2.jpg';
import { CgWebsite } from 'react-icons/cg'
import { CiMobile3 } from 'react-icons/ci';
import { AiOutlineFileSearch, AiOutlineShoppingCart } from 'react-icons/ai';
import { SiWebpack } from 'react-icons/si';
import { GiAutoRepair } from 'react-icons/gi';
import Globe from '../components/Globe';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='w-full h-screen mt-20 justify-between'>
        <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
            <div className='flex flex-col justify-center md:items-start w-full'>
                <Globe />
                <p className='pt-4 text-4xl'>Creative Designs & Websites</p>
                <h1 className='py-3 uppercase text-hover text-6xl md:text-7xl font-bold'>E-logical</h1>
                <p className='text-4xl'>Modern solutions to web applications</p>
                <Link to='/aboutus'><button className='button m-2 text-lg w-[200px] h-[40px] font-body'>Get Started</button></Link>
            </div>
                <img className='h-[900px] border rounded-2xl w-[1500px]' src={HeroBg} alt='/' />
            <div className='absolute flex flex-col py-4 sm:min-w-[500px] z-0 bottom-[5%] mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-primary border border-white-300 rounded-xl text-center shadow-xl'>
                <p className='items-center text-4xl font-thin'>Web Design</p>
                <div className='grid grid-rows-3 grid-flow-col gap-4 px-2'>
                    <p className='flex px-4 text-xl py-2 font-semibold text-background'><CgWebsite className='h-8 w-8 mr-2 text-green hover:text-white' /> Website Development</p>
                    <p className='flex px-4 text-xl py-2 font-semibold text-background'><CiMobile3 className='h-8 w-8 mr-2 text-green hover:text-white' /> Mobile-App Development</p>
                    <p className='flex px-4 text-xl py-2 font-semibold text-background'><SiWebpack className='h-8 w-8 mr-2 text-green hover:text-white' /> Web Hosting</p>
                    <p className='flex px-4 text-xl py-2 font-semibold text-background'><AiOutlineFileSearch className='h-8 w-8 mr-2 text-green hover:text-white' /> Search Engine Optimization</p>
                    <p className='flex px-4 text-xl py-2 font-semibold text-background'><AiOutlineShoppingCart className='h-8 w-8 mr-2 text-green hover:text-white' />E-commerce Development</p>
                    <p className='flex text-xl px-4 py-2 font-semibold text-background'><GiAutoRepair className='h-8 w-8  mr-2 text-green hover:text-white' />Website Maintenance</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero