import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Quiz() {
  const location = useLocation();
  const navigate = useNavigate();
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const query = new URLSearchParams(location.search);
  const category = query.get('category') || '9';
  const difficulty = query.get('difficulty') || 'easy';
  const amount = query.get('amount') || '5';

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        setLoading(true);
        setError('');
        const url = `https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`;
        const res = await fetch(url);

        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();

        if (data.response_code !== 0 || !data.results.length) {
          throw new Error('No questions available for this selection.');
        }

        setQuestions(data.results);
      } catch (err) {
        console.error(err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [category, difficulty, amount]);

  const handleAnswer = (selected) => {
    const correct = questions[currentIndex].correct_answer;
    if (selected === correct) setScore(score + 1);
    setCurrentIndex(currentIndex + 1);
  };

  if (loading) return <p className="text-center mt-10 text-gray-700">Loading questions...</p>;

  if (error) return <p className="text-center mt-10 text-red-600">{error}</p>;

  if (currentIndex >= questions.length) {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
      const allScores = JSON.parse(localStorage.getItem('scores')) || {};
      const userScores = allScores[currentUser.username] || [];
      userScores.push({
        correct: score,
        total: questions.length,
        date: new Date().toLocaleString(),
      });
      allScores[currentUser.username] = userScores;
      localStorage.setItem('scores', JSON.stringify(allScores));
    }

    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
        <h2 className="text-3xl font-bold mb-4">Quiz Finished!</h2>
        <p className="text-xl mb-6">Your Score: {score} / {questions.length}</p>
        <button
          onClick={() => navigate('/dashboard')}
          className="bg-blue-500 text-white px-6 py-3 rounded hover:bg-blue-600 transition"
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  const q = questions[currentIndex];
  const answers = [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-xl">
        <h2
          className="text-xl font-bold mb-4"
          dangerouslySetInnerHTML={{ __html: q.question }}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {answers.map((ans, idx) => (
            <button
              key={idx}
              onClick={() => handleAnswer(ans)}
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
              dangerouslySetInnerHTML={{ __html: ans }}
            />
          ))}
        </div>
        <p className="mt-4 text-gray-700">
          Question {currentIndex + 1} of {questions.length}
        </p>
      </div>
    </div>
  );
}

export default Quiz;