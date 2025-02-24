import { useState } from 'react';
import 'tailwindcss/tailwind.css';

  export default function Question() {
    const questions = [
      { question: 'What is the capital of France?', answer: 'Paris' },
      { question: 'What is 2 + 2?', answer: '4' },
      // Add more questions as needed
    ];

    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [userAnswer, setUserAnswer] = useState('');
    const [evaluation, setEvaluation] = useState('');

    const handleSubmit = () => {
      if (userAnswer.toLowerCase() === questions[currentQuestionIndex].answer.toLowerCase()) {
        setEvaluation('Correct!');
      } else {
        setEvaluation('Incorrect!');
      }
    };

    const handleNextQuestion = () => {
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setUserAnswer('');
      setEvaluation('');
    };

    return (
      <div className="p-4 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
        <div className="text-xl font-medium text-black">
          Question {currentQuestionIndex + 1} of {questions.length}
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Question:</label>
          <div className="text-lg">{questions[currentQuestionIndex].question}</div>
        </div>
        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Your Answer:</label>
          <input 
            type="text" 
            value={userAnswer} 
            onChange={(e) => setUserAnswer(e.target.value)} 
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button 
          onClick={handleSubmit} 
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit Answer
        </button>
        {evaluation && (
          <div>
            <div className="text-lg font-medium text-black mt-4">{evaluation}</div>
            {currentQuestionIndex < questions.length - 1 && (
              <button 
                onClick={handleNextQuestion} 
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-2"
              >
                Next Question
              </button>
            )}
          </div>
        )}
      </div>
    );
  }

