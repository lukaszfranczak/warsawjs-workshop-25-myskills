import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Description from './components/Description/AppDescription';
import QuestionView from './pages/QuestionView';


const App = () => {
  return (
    <div  className='App'>
      <header>
        <Header />
        <Description />
        <QuestionView />
      </header>
    </div>
  );
}

export default App;
