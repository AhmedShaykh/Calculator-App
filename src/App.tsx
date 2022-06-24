import React , { useEffect } from 'react';
import './App.css';
import { QuizApi } from './Services/QuizApi';

function App() {

  useEffect(() => {
    async function fetchData() {
      const questions = await QuizApi(5,'easy');
      console.log(questions);
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