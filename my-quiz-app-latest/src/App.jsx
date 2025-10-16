// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import QuizSetup from "./pages/QuizSetup";
import Quiz from "./pages/Quiz";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header"; // ✅ Import Header

function App() {
  return (
    <Router>
      <div className="flex flex-col h-screen bg-gray-50 text-gray-900">
        {/* ✅ Header always visible */}
        <Header />

        {/* ✅ Main content fills the space between header & footer */}
        <main className="flex-grow flex items-center justify-center px-4 overflow-hidden">
          <div className="w-full max-w-4xl">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/quiz-setup" element={<QuizSetup />} />
              <Route path="/quiz" element={<Quiz />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </div>
        </main>

        {/* ✅ Footer always visible */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;