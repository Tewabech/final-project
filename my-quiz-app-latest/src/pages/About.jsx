export default function About() {
  return (
    <div className="max-w-3xl mx-auto mt-16 bg-white p-8 rounded-2xl shadow-md">
      <h2 className="text-3xl font-bold text-center text-black-700 mb-4">
        About QUIZZY
      </h2>

      <p className="text-gray-700 text-center mb-6">
        Welcome to <span className="font-semibold text-black-600">QUIZZY</span> —
        a fun and interactive way to test your knowledge and learn something new
        every day!
      </p>

      <div className="text-gray-800 space-y-4">
        <p>
          Quizzy is designed to make learning exciting and engaging through
          quick quizzes across various topics such as General Knowledge,
          Science, History, and more.
        </p>

        <p>
          You can choose your preferred category, set the difficulty level, and
          challenge yourself with multiple-choice questions. Each quiz gives
          instant feedback and shows your final score so you can track your
          progress.
        </p>

        <p>
          Whether you're preparing for exams, improving your general knowledge,
          or just having fun with friends — Quizzy helps you learn smarter and
          faster.
        </p>
      </div>

      <div className="mt-8 text-center text-gray-700">
        <p className="font-medium">
          📚 Keep learning, keep growing — one question at a time!
        </p>
      </div>
    </div>
  );
}