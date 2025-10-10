// src/pages/QuizSetup.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function QuizSetup() {
  const navigate = useNavigate();

  const [quizOptions, setQuizOptions] = useState({
    category: '9', // Default: General Knowledge
    difficulty: 'easy',
    amount: 5,
  });

  const categories = [
    { id: '9', name: 'General Knowledge' },
    { id: '17', name: 'Science & Nature' },
    { id: '23', name: 'History' },
    { id: '11', name: 'Entertainment: Film' },
  ];

  const handleChange = (e) => {
    setQuizOptions({ ...quizOptions, [e.target.name]: e.target.value });
  };

  const startQuiz = () => {
    // Navigate to Quiz page with query parameters
    const params = new URLSearchParams(quizOptions).toString();
    navigate(`/quiz?${params}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Set Up Your Quiz</h1>

      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-sm space-y-4">
        {/* Category */}
        <div>
          <label className="block mb-1 font-medium">Select Topic</label>
          <select
            name="category"
            value={quizOptions.category}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          >
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
        </div>

        {/* Difficulty */}
        <div>
          <label className="block mb-1 font-medium">Select Difficulty</label>
          <select
            name="difficulty"
            value={quizOptions.difficulty}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        {/* Number of Questions */}
        <div>
          <label className="block mb-1 font-medium">Number of Questions</label>
          <input
            type="number"
            name="amount"
            min="1"
            max="20"
            value={quizOptions.amount}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:border-blue-500"
          />
        </div>

        {/* Start Button */}
        <button
          onClick={startQuiz}
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          Start Quiz
        </button>
      </div>
    </div>
  );
}

export default QuizSetup;