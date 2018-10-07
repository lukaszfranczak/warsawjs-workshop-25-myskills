import React from 'react';
import QuestionElement from './QuestionElement/QuestionElement';

import './QuestionsList.css';

// Hashmapa
// const Text = () => <strong>tekst</strong>;
// const Multi = () => <s>tekst</s>
// const components = {
//     text: <QuestionElement />,
//     multi: <QuestionElement />
// }

// Updater
// const updater = prevState => ({
//     counter: prevState.counter + 1
// });
// this.setState(updater);

const QuestionsList = ( {questions = []} = {} ) => {

    const rows = [];
    questions.questions.map((questionElement) => {
        rows.push(
            <QuestionElement {...questionElement} />
        )
    }
)

    return (
        <ul className='questionsList'>
            {rows}
        </ul>
    )
}

export default QuestionsList;