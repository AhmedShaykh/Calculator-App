import React , { useState , useEffect } from 'react';
import './App.css';
import QuestionCard from './Components/QuestionCard';
import { QuizApi } from './Services/QuizApi';
import { QuizType , QuestionType } from './Types/QuizTypes';

function App() {

  let [quiz, setQuiz] = useState<QuizType[]>([]);
  // let [currentStep, setCurrentStep] = useState(0);
  // let [score, setScore] = useState(0);

  useEffect(() => {
    async function fetchData() {
      const questions: QuestionType[] = await QuizApi(5,'easy');
      console.log(questions);
      setQuiz(questions)
    }
    fetchData();
  }, []);

  return (
    <div className="App">
      <QuestionCard 
      options={quiz[0].options}
      question={quiz[0].question}
      />
    </div>
  );
}

export default App;