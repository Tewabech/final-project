import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Quiz() {
  const location = useLocation();
  const navigate = useNavigate();
  const { category, difficulty, amount } = location.state || {};

  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [loading, setLoading] = useState(true);
  const [offlineMode, setOfflineMode] = useState(false);

  // 🧠 Local mock data fallback
  const mockQuestions = [
    {
      question: "What is the capital of France?",
      correct_answer: "Paris",
      incorrect_answers: ["London", "Berlin", "Madrid"],
    },
    {
      question: "Which planet is known as the Red Planet?",
      correct_answer: "Mars",
      incorrect_answers: ["Earth", "Venus", "Jupiter"],
    },
    {
      question: "Who wrote 'Romeo and Juliet'?",
      correct_answer: "William Shakespeare",
      incorrect_answers: ["Charles Dickens", "Mark Twain", "Jane Austen"],
    },
    {
      question: "What is 5 + 7?",
      correct_answer: "12",
      incorrect_answers: ["10", "11", "13"],
    },
    {
      question: "What is the largest ocean on Earth?",
      correct_answer: "Pacific Ocean",
      incorrect_answers: ["Indian Ocean", "Atlantic Ocean", "Arctic Ocean"],
    },
  ];

  // 🧩 Fetch from API or fallback
  useEffect(() => {
    const fetchQuestions = async () => {
      setLoading(true);
      try {
        const url = `https://opentdb.com/api.php?amount=${amount || 5}&category=${category || 9}&difficulty=${difficulty || "easy"}&type=multiple`;
        const res = await fetch(url);
        if (!res.ok) throw new Error("Network error");
        const data = await res.json();

        if (!data.results || data.results.length === 0) {
          throw new Error("No questions returned");
        }

        const formatted = data.results.map((q) => ({
          question: q.question,
          correct_answer: q.correct_answer,
          incorrect_answers: q.incorrect_answers,
        }));

        setQuestions(formatted);
      } catch (error) {
        console.warn("⚠️ API failed, switching to offline mode:", error.message);
        setQuestions(mockQuestions);
        setOfflineMode(true);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, [category, difficulty, amount]);

  // 🧮 Handle answer selection
  const handleAnswer = (answer) => {
    if (answer === questions[current].correct_answer) {
      setScore(score + 1);
    }

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      setShowScore(true);
      saveScore();
    }
  };

  // 💾 Save user score
  const saveScore = () => {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser) return;

    const allScores = JSON.parse(localStorage.getItem("scores")) || {};
    const userScores = allScores[currentUser.username] || [];

    userScores.push({
      correct: score,
      total: questions.length,
      date: new Date().toLocaleString(),
    });

    allScores[currentUser.username] = userScores;
    localStorage.setItem("scores", JSON.stringify(allScores));
  };

  if (loading) {
    return <div className="text-center mt-10 text-lg">Loading questions...</div>;
  }

  if (showScore) {
    const percentage = ((score / questions.length) * 100).toFixed(2);
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
        <p className="text-lg mb-2">
          You scored {score} out of {questions.length}
        </p>
        <p className="text-lg font-semibold text-black-600 mb-6">
          Score: {percentage}%
        </p>
        <button
          onClick={() => navigate("/dashboard")}
          className="bg-black text-white px-6 py-3 rounded hover:bg-gray-700 transition"
        >
          Back to Dashboard
        </button>
      </div>
    );
  }

  const q = questions[current];
  const answers = [...q.incorrect_answers, q.correct_answer].sort(
    () => Math.random() - 0.5
  );

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
      {/* ⚠️ Offline warning */}
      {offlineMode && (
        <div className="bg-yellow-200 text-yellow-800 px-4 py-2 rounded mb-4 shadow">
          ⚠️ Using offline questions due to network or API issue.
        </div>
      )}

      <h2
        className="text-xl font-semibold mb-6 text-center"
        dangerouslySetInnerHTML={{ __html: q.question }}
      />

      <div className="grid grid-cols-1 gap-3 w-full max-w-md mb-6">
        {answers.map((a, idx) => (
          <button
            key={idx}
            onClick={() => handleAnswer(a)}
            className="bg-black text-white py-3 rounded hover:bg-gray-700 transition"
            dangerouslySetInnerHTML={{ __html: a }}
          />
        ))}
      </div>

      {/* Navigation buttons */}
      <div className="flex justify-between w-full max-w-md">
        <button
          onClick={() => setCurrent(current - 1)}
          disabled={current === 0}
          className={`px-6 py-3 rounded text-white transition ${
            current === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-black hover:bg-gray-700"
          }`}
        >
          Previous
        </button>

        {current < questions.length - 1 && (
          <button
            onClick={() => setCurrent(current + 1)}
            className="bg-black text-white px-6 py-3 rounded hover:bg-gray-700 transition"
          >
            Next
          </button>
        )}
      </div>

      <div className="mt-6 text-gray-700">
        Question {current + 1} / {questions.length}
      </div>
    </div>
  );
}