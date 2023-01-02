import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='w-full mt-24 bg-card text-white py-y px-2'>
        <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-black py-8'>
            <div>
                <h6 className='font-thin text-2xl text-green uppercase pt-2'>Solutions</h6>
                    <ul>
                        <li className='py-1'>Marketing</li>
                        <li className='py-1'>E-commerce</li>
                        <li className='py-1'>Hosting</li>
                        <li className='py-1'>Maintenance</li>
                        <Link to='/contact'><li className='py-1'>Contact Us</li></Link>
                    </ul>
            </div>

            <div>
                <h6 className='font-thin text-2xl text-green uppercase pt-2'>Legal</h6>
                    <ul>
                        <li className='py-1'>Claims</li>
                        <li className='py-1'>Privacy</li>
                        <li className='py-1'>Terms</li>
                        <li className='py-1'>Policies</li>
                        <li className='py-1'>Conditions</li>
                    </ul>
            </div>

            <div>
                <h6 className='font-thin text-2xl text-green uppercase pt-2'>Support</h6>
                    <ul>
                        <Link to='pricings'><li className='py-1'>Pricing</li></Link>
                        <Link to='contact'><li className='py-1'>Help</li></Link>
                        <Link to='guides'><li className='py-1'>Guides</li></Link>
                        <Link to='/signin'><li className='py-1'>Sign In</li></Link>
                        <Link to='/signup'><li className='py-1'>Sign Up</li></Link>
                    </ul>
            </div>

            <div>
                <h6 className='font-thin text-2xl text-green uppercase pt-2'>Company</h6>
                    <ul>
                    <Link to='/services'><li className='py-1'>Services</li></Link>
                        <Link to='/news'><li className='py-1'>News</li></Link>
                        <Link to='/blog'><li className='py-1'>Blog</li></Link>
                        <Link to='aboutus'><li className='py-1'>About</li></Link>
                        <Link to='careers'><li className='py-1'>Careers</li></Link>
                    </ul>
            </div>

            <div className='col-span-2 pt-8 md:pt-2'>
                <p className='font-thin text-2xl text-green uppercase pt-2'>Subscribe to our newsletter</p>
                <p className='py-4'>The latest news in our tech, resources and more.</p>
                <form className='flex flex-col sm:flex-row'>
                    <input className='w-full p-2 mr-4 text-hover rounded-xl mb-4' type='email' placeholder='Type Email...' />
                    <Link to='/news'><button className='items-center bg-hover rounded-xl w-[8rem] text-xl text-white button py-2 mb-4'>Subscribe</button></Link>
                </form>
            </div>

        </div>

        <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center'>
            <p className='py-4 text-green'>2022 Dhax, LLC. All rights reserved.</p>
            <div className='flex text-background cursor-pointer justify-between sm:w-[300px] pt-4 text-2xl'>
                <FaFacebook className='hover:text-white' />
                <FaGithub className='hover:text-white' />
                <FaInstagram className='hover:text-white' />
                <FaLinkedin className='hover:text-white' />
                <FaTwitter className='hover:text-white' />
            </div>
        </div>
    </div>
  )
}

export default Footer