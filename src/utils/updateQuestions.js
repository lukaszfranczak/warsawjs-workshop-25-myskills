
const getQuestionById = id => question => question.id === id;

export default function updateQuestions(prevState, id, newValue) {
    const { questions = [] } = prevState;
    const foundIndex = questions.findIndex(getQuestionById(id));

    const prevQuestions = questions.slice(0, foundIndex);
    const nextQuestions = questions.slice(foundIndex + 1);

    const oldQuestion = questions[foundIndex];
    const updatedQuestion = { 
        ...oldQuestion,
        currentValue: newValue
    };

    return [...prevQuestions, updatedQuestion ,...nextQuestions];
}