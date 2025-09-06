import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import QuestionsPage from "./pages/Questionnaire.js";
import CompletionPage from "./pages/CompletionPage";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/completion" element={<CompletionPage />} />
          <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
