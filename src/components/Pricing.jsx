import React from 'react'
import { FiCheckSquare, FiDollarSign } from 'react-icons/fi';
import {Link} from 'react-router-dom';


const Pricing = () => {
  return (
    <div className='w-full text-white my-24'>
        <div className='w-full h-[800px] bg-black absolute mix-blend-overlay'>
        </div>

        <div className='max-w-[1240px] mx-auto py-12'>
            <div className='text-center py-8 text-secondary'>
                <h2 className='text-3xl uppercase'>Pricing Packages</h2>
                <h3 className='text-5xl font-bold py-8'>Find the right solutions to your business needs.</h3>
                <p className='text-3xl'>We offer three custom built packages including different features best fit for your business.</p>
            </div>

            <div className='grid md:grid-cols-2'>
                <div className='bg-card text-hover m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase px-3 py-1 bg-secondary text-black font-bold rounded-2xl text-md'>Standard</span>
                    <div className='flex justify-center'>
                        <p className='text-5xl font-thin py-4 flex'><FiDollarSign className='pb-2 text-green'/>500<span className='text-2xl flex flex-col justify-end'>/mo</span></p>
                    </div>
                    <p className='text-xl'>Our standard service is perfect for businesses that need a professional, functional website that is optimized for search engines and user experience. This service includes design, development, testing, and deployment of a custom website, as well as ongoing support and maintenance.</p>
                    <div className='text-xl relative py-8' >
                        <p className='flex py-4'><FiCheckSquare className='w-8 mr-5 text-green' />Custom website design and development.</p>
                        <p className='flex py-4'><FiCheckSquare className='w-8 mr-5 text-green' />Search engine optimization (SEO).</p>
                        <p className='flex py-4'><FiCheckSquare className='w-8 mr-5 text-green' />User experience (UX) optimization.</p>
                        <p className='flex py-4'><FiCheckSquare className='w-8 mr-5 text-green' />Testing and deployment.</p>
                        <p className='flex py-4'><FiCheckSquare className='w-8 mr-5 text-green' />Ongoing support and maintenance.</p>
                        <Link to='/contact'><button className='text-white w-full py-4 my-4 bg-hover text-2xl button'>Get Started</button></Link>
                    </div>
                </div>


                <div className='bg-card text-hover m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase px-3 py-1 bg-secondary text-black font-bold rounded-2xl text-md'>Economical</span>
                    <div className='flex justify-center'>
                        <p className='text-5xl font-thin py-4 flex'><FiDollarSign className='pb-2 text-green'/>1000<span className='text-2xl flex flex-col justify-end'>/mo</span></p>
                    </div>
                    <p className='text-xl'>Our economical service is tailored to businesses that want a cost-effective solution without sacrificing quality. This service includes all the features of our standard service, as well as additional resources and support to help you get the most out of your website.</p>
                    <div className='text-xl relative py-8' >
                        <p className='flex py-4'><FiCheckSquare className='w-8 mr-5 text-green' />All features of standard service.</p>
                        <p className='flex py-4'><FiCheckSquare className='w-8 mr-5 text-green' />Additional resources and support.</p>
                        <p className='flex py-5'><FiCheckSquare className='w-8 mr-5 text-green' />Custom brand and logo redesign.</p>
                        <p className='flex py-5'><FiCheckSquare className='w-8 mr-5 text-green' />Improved SEO and UX.</p>
                        <p className='flex py-5'><FiCheckSquare className='w-8 mr-5 text-green' />Custom advanced features.</p>
                        <Link to='/contact'><button className='text-white w-full py-4 my-4 bg-hover text-2xl button'>Get Started</button></Link>
                    </div>
                </div>


                <div className='bg-card text-hover m-4 p-8 rounded-xl shadow-2xl relative'>
                    <span className='uppercase px-3 py-1 bg-secondary text-black font-bold rounded-2xl text-md'>Premium</span>
                    <div className='flex justify-center'>
                        <p className='text-5xl font-thin py-4 flex'><FiDollarSign className='pb-2 text-green'/>1500<span className='text-2xl flex flex-col justify-end'>/mo</span></p>
                    </div>
                    <p className='text-xl'>Our premium service is ideal for businesses that want the highest level of support and customization. This service includes all the features of our standard and economical services, as well as personalized consulting and training to help you achieve your business goals.</p>
                    <div className='text-xl relative py-8' >
                        <p className='flex py-4'><FiCheckSquare className='w-8 mr-5 text-green' />All features of standard and economical services.</p>
                        <p className='flex py-4'><FiCheckSquare className='w-8 mr-5 text-green' />Personalized consulting and training.</p>
                        <p className='flex py-4'><FiCheckSquare className='w-8 mr-5 text-green' />Advanced SEO and UX optimization.</p>
                        <p className='flex py-4'><FiCheckSquare className='w-8 mr-5 text-green' />Customized features and functionality.</p>
                        <Link to='/contact'><button className='text-white w-full py-4 my-4 bg-hover text-2xl button'>Get Started</button></Link>
                    </div>
                </div>




            </div>
        </div>
    </div>
  )
}

export default Pricing