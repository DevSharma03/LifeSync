import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your layout and pages
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
// ... other imports

function App() {
  return (
    <Router>
      <Routes>
        {/* Standalone pages without the sidebar */}
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/questions" element={<QuestionsPage />} />
        <Route path="/completion" element={<CompletionPage />} />
        
        {/* Routes that will use the sidebar layout */}
        <Route element={<DashboardLayout />}>
          <Route path="/home" element={<Home />} />
          <Route path="/health" element={<Health />} />
          <Route path="/finance" element={<Finance />} />
          <Route path="/mind" element={<Mind />} />
          {/* Add other routes that need the navbar here */}
          <Route path="/productivity" element={<Productivity />} />
          {/* <Route path="/profile" element={<Profile />} /> */}
        </Route>

      </Routes>
    </Router>
  );
}

export default App;