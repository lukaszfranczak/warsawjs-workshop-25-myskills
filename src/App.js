import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Description from './components/Description/AppDescription';
import QuestionsList from './components/QuestionsList/QuestionsList';

import QuestionView from './pages/QuestionView';

import data from './dummy/db';


const App = () => {
  return (
    <div  className='App'>
      <header>
        <Header />
        <Description />
        <QuestionsList questions={data}/>
      </header>
    </div>
  );
}

export default App;
