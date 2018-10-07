import React, { Component } from 'react';
import QuestionsList from '../components/QuestionsList/QuestionsList';
import updateQuestions from '../utils/updateQuestions';

import database from '../dummy/db';

class QuestionView extends Component {

    state = {
        questions: [],
        lastChange: ''
    }

    componentDidMount() {
        this.setState({
            questions: database.questions
        })
    }

    onValueChange = (id) => (event) => {
        const value = event.target.value;
        const upd = updateQuestions(this.state, id, value);
        this.setState({
            lastChange: value
        })
    }

    render () {
        return (
            <section>
                <QuestionsList 
                    questions={this.state.questions} 
                    onValueChange={this.onValueChange}/>
            </section>
        )
    }
}

export default QuestionView;