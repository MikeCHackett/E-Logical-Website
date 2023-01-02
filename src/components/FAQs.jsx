import React from 'react'
import { faqs } from '../data/data';
import { BsQuestionDiamond } from 'react-icons/bs';
import FAQ from './FAQ';

const FAQs = () => {
  return (
    <div className='faqs h-[1280px]'>
        <div className='flex-auto p-32 m-auto'>
            <h1 className='title'>Frequently Asked Questions<BsQuestionDiamond className='text-hover ml-6 text-5xl' title='FAQs' /></h1>
            <div className='py-24 faqs__wrapper'>
                {
                    faqs.map(({id, question, answer}) => {
                        return <FAQ key={id} question={question} answer={answer} />
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default FAQs