// src/pages/Dashboard.jsx
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [scores, setScores] = useState([]);

  useEffect(() => {
    // Get logged-in user from localStorage
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (!currentUser) {
      navigate('/login'); // redirect to login if not logged in
      return;
    }
    setUser(currentUser);

    // Get past scores
    const allScores = JSON.parse(localStorage.getItem('scores')) || {};
    const userScores = allScores[currentUser.username] || [];

    // Sort by date (newest first) and show only 5 most recent
    const recentScores = [...userScores]
      .sort((a, b) => new Date(b.date) - new Date(a.date))
      .slice(0, 5);

    setScores(recentScores);
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('currentUser');
    navigate('/login');
  };

  const handleStartQuiz = () => {
    navigate('/quiz-setup');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      {user && (
        <>
          <h1 className="text-3xl font-bold mb-4">Welcome, {user.name}!</h1>

          <div className="mb-6 flex space-x-4">
            <button
              onClick={handleStartQuiz}
              className="bg-gray-700 text-white px-6 py-3 rounded hover:bg-gray-800 transition">
              New Quiz
            </button>
            <button
              onClick={handleLogout}
              className="bg-gray-700 text-white px-4 py-3 rounded hover:bg-gray-800 transition">
              Logout
            </button>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md">
            <h2 className="text-xl font-bold mb-4">Recent Quiz Scores</h2>
            {scores.length === 0 ? (
              <p className="text-gray-700">You have not taken any quizzes yet.</p>
            ) : (
              <ul className="space-y-2">
                {scores.map((score, idx) => (
                  <li key={idx} className="p-2 border rounded bg-gray-50">
                    <span className="font-semibold">Quiz {idx + 1}:</span>{" "}
                    {score.correct} / {score.total} <br />
                    <span className="text-sm text-gray-600">{score.date}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Dashboard;