import React from 'react'

const Stats = () => {
  return (
    <div className='w-full my-32'>
        <div className='max-w-[1240px] mx-auto'>
            <div className='text-center'>
            <h2 className='text-5xl font-bold'>Rapid Results for Our Clients</h2>
            <p className='text-3xl py-6 text-white'>At our web development business, we are proud of the results we have achieved for our clients. Here are a few statistics that showcase our achievements:</p>
        </div>

        <div className='grid lg:grid-cols-3 gap-1 px-2 text-center'>
            <div className='border py-8 bg-hover rounded-xl shadow-xl'>
                <p className='text-6xl font-bold text-background'>40%</p>
                <p className='text-white font-bold text-2xl mt-2'>Increased traffic</p>
                <p className='text-white font-thin text-lg mt-2'>We have helped our clients increase their website traffic by an average of 40% through a combination of SEO, marketing, and user experience optimization.</p>
            </div>
            <div className='border py-8 bg-hover rounded-xl shadow-xl'>
                <p className='text-6xl font-bold text-background'>25%</p>
                <p className='text-white font-bold text-2xl mt-2'>Improved conversion rates</p>
                <p className='text-white font-thin text-lg mt-2'>Our clients have seen an average conversion rate increase of 25% after implementing our recommendations for website design, layout, and calls to action.</p>
            </div>
            <div className='border py-8 bg-hover rounded-xl shadow-xl'>
                <p className='text-6xl font-bold text-background'>95%</p>
                <p className='text-white font-bold text-2xl mt-2'>Greater customer satisfaction</p>
                <p className='text-white font-thin text-lg mt-2'>Our clients consistently rate us at 95% satisfaction or higher. We pride ourselves on delivering top-quality websites and excellent customer service.</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Stats