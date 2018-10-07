import React from 'react';
import TextQuestion from './TextQuestion/TextQuestion';

import './QuestionElement.css';

const QuestionElement = ({ id, question, type, onValueChange } = {} ) => {
    return (
        <li id={id} className='question'>
            {type==='text'
                ? <TextQuestion question={question} type={type} onValueChange={onValueChange}/>
                : null}
            {/* {question} */}
            {/* <input type={type} onChange={onValueChange(id)}></input> */}
        </li>
    )
}

export default QuestionElement;