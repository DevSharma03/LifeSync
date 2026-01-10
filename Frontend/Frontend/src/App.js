import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Pages
import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import QuestionsPage from "./pages/Questionnaire";
import CompletionPage from "./pages/CompletionPage";

import DashboardLayout from "./pages/DashboardLayout";
import Home from "./pages/Home";
import Health from "./pages/Health";
import Finance from "./pages/Finance";
import Mind from "./pages/Mind";
import Productivity from "./pages/Productivity";
import ChatBotPage from "./pages/ChatBotPage";
import Profile from "./pages/Profile";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <Routes>
        {/* =====================
            Public Routes
        ====================== */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* =====================
            Protected Questionnaire Flow
        ====================== */}
        <Route
          path="/questions"
          element={
            <ProtectedRoute>
              <QuestionsPage />
            </ProtectedRoute>
          }
        />

        <Route
          path="/completion"
          element={
            <ProtectedRoute>
              <CompletionPage />
            </ProtectedRoute>
          }
        />

        {/* =====================
            Protected Dashboard
        ====================== */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }
        >
          <Route path="home" element={<Home />} />

          <Route path="health" element={<Health />} />
          <Route path="finance" element={<Finance />} />
          <Route path="mind" element={<Mind />} />
          <Route path="productivity" element={<Productivity />} />
          <Route path="ai" element={<ChatBotPage />} />
          <Route path="profile" element={<Profile />} />
        </Route>

        {/* =====================
            Fallback
        ====================== */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;

