import React from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { useState } from 'react';

const FAQ = ({question, answer}) => {
    const [isAnswerShowing, setIsAnswerShowing] = useState(false);


  return (
    <div className='faq' onClick={() => setIsAnswerShowing(prev => !prev)}>
        <div className='faq__div'>
            <h4>{question}</h4>
            <button className='faq__icon'>
                {
                  isAnswerShowing ? <AiOutlineMinus /> : <AiOutlinePlus />
                }
            </button>
        </div>

        {isAnswerShowing && <p className='faq__p'>{answer}</p>}
    </div>
  )
}

export default FAQ