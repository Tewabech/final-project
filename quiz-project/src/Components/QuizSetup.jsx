import { useState } from "react";
import axios from "axios";

function QuizSetup({ startQuiz }) {
  const [category, setCategory] = useState("9"); // default: General Knowledge
  const [difficulty, setDifficulty] = useState("easy");
  const [amount, setAmount] = useState(5);

  const categories = [
    { id: "9", name: "General Knowledge" },
    { id: "17", name: "Science & Nature" },
    { id: "23", name: "History" },
    { id: "11", name: "Entertainment: Film" },
  ];

  const difficulties = ["easy", "medium", "hard"];

  const handleStart = async () => {
    try {
      const res = await axios.get("https://opentdb.com/api.php", {
        params: {
          amount,
          category,
          difficulty,
          type: "multiple",
        },
      });
      startQuiz(res.data.results);
    } catch (err) {
      console.error("Error fetching quiz questions:", err);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <h1 className="text-4xl font-bold mb-6">Quiz Setup</h1>

      <div className="mb-4">
        <label className="mr-2 font-semibold">Category:</label>
        <select
          className="border rounded px-2 py-1"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat.id} value={cat.id}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <label className="mr-2 font-semibold">Difficulty:</label>
        <select
          className="border rounded px-2 py-1"
          value={difficulty}
          onChange={(e) => setDifficulty(e.target.value)}
        >
          {difficulties.map((diff) => (
            <option key={diff} value={diff}>
              {diff.charAt(0).toUpperCase() + diff.slice(1)}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label className="mr-2 font-semibold">Number of Questions:</label>
        <input
          type="number"
          min="1"
          max="20"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="border rounded px-2 py-1 w-20 text-center"
        />
      </div>

      <button
        onClick={handleStart}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
      >
        Start Quiz
      </button>
    </div>
  );
}

export default QuizSetup;