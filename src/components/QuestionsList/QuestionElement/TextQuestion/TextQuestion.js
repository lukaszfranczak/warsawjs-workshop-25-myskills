import React from 'react';

import './TextQuestion.css';

const TextQuestion = ({ question, type } = {}) => {
    return (
        <div className='question'>
            {question}
            <input type={type} className='question'></input>
        </div>
    )
}

export default TextQuestion;