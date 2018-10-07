import React from 'react';
import TextQuestion from './TextQuestion/TextQuestion';

import './QuestionElement.css';

const QuestionElement = ( {id, question, type} = {} ) => {
    return (
        <li id={id} className='question'>
            {/* {type==='text'
                ? <TextQuestion question={question} type={type}/>
                : null} */}
            {question}
            <input type={type}></input>
        </li>
    )
}

export default QuestionElement;