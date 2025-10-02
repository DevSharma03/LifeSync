import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/CompletionPage.css";

export default function CompletionPage() {
  const navigate = useNavigate();

  // Redirect automatically after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="completion-container">
      <div className="completion-card">
        <h1>🎉 Thank You!</h1>
        <p>
          You’ve completed the questionnaire. LifeSync is ready to help you maintain overall life balance!
        </p>
        <button onClick={() => navigate("/home")}>Let’s Begin 🚀</button>
      </div>
    </div>
  );
}
