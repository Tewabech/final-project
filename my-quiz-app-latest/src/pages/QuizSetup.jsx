// src/pages/QuizSetup.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function QuizSetup() {
  const navigate = useNavigate();
  const [category, setCategory] = useState("9"); // Default: General Knowledge
  const [difficulty, setDifficulty] = useState("easy");
  const [amount, setAmount] = useState(5);

  const handleStart = () => {
    // Navigate to Quiz page with selected preferences
    navigate("/quiz", {
      state: { category, difficulty, amount },
    });
  };

  return (
    <div className="max-w-md mx-auto bg-white p-6 rounded-2xl shadow-md mt-10">
      <h1 className="text-2xl font-bold mb-6 text-center">🧠 Quiz Setup</h1>

      {/* Category */}
      <label className="block mb-3">
        <span className="font-medium">Category</span>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full mt-1 p-2 border rounded-lg"
        >
          <option value="9">General Knowledge</option>
          <option value="17">Science & Nature</option>
          <option value="23">History</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
        </select>
      </label>

      {/* Difficulty */}
      <label className="block mb-3">
        <span className="font-medium">Difficulty</span>
        <select
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
          className="w-full mt-1 p-2 border rounded-lg"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </label>

      {/* Number of Questions */}
      <label className="block mb-5">
        <span className="font-medium">Number of Questions</span>
        <input
          type="number"
          min="1"
          max="20"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full mt-1 p-2 border rounded-lg"
        />
      </label>

      <button
        onClick={handleStart}
        className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition"
      >
        Start Quiz
      </button>
    </div>
  );
}