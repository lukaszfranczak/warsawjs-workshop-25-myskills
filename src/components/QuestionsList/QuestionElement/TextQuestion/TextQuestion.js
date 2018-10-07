import React from 'react';

import './TextQuestion.css';

const TextQuestion = ({ question, type, id, onValueChange } = {}) => {
    return (
        <div id={id} className='question'>
            {question}
            <input type={type} className='question' onChange={onValueChange(id)}></input>
        </div>
    )
}

export default TextQuestion;