import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import pages
import Home from "./pages/Home";
import Health from "./pages/Health";
import Finance from "./pages/Finance";
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import QuestionsPage from "./pages/Questionnaire.js";
import CompletionPage from "./pages/CompletionPage";
import DashboardLayout from "./pages/DashboardLayout.js";
import Mind from "./pages/Mind.js";
import Productivity from "./pages/Productivity.js";
import ChatBotPage from "./pages/ChatBotPage.js";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/completion" element={<CompletionPage />} />

        {/* Protected routes */}
        <Route
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="/home" element={<Home />} />
          <Route path="/health" element={<Health />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/mind" element={<Mind />} />
          <Route path="/productivity" element={<Productivity />} />
          <Route path="/ai" element={<ChatBotPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
