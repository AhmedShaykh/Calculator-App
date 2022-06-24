import React , { useState , useEffect } from 'react';
import './App.css';
import { QuizApi } from './Services/QuizApi';
import { QuizType } from './Types/QuizTypes';

function App() {

  let [quiz, setQuiz] = useState<QuizType[]>([]);
  // let [currentStep, setCurrentStep] = useState(0);
  // let [score, setScore] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const questions = await QuizApi(5,'easy');
      console.log(questions);
      setQuiz(questions)
    }
    fetchData();
  }, []);

  return (
    <div className="App-header">
      <h1>
        Hello React TypeScript :)
      </h1>
    </div>
  );
}

export default App;