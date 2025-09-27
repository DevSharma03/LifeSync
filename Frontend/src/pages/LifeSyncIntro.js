import React from "react";
import "../styles/LifeSyncIntro.css";

export default function LifeSyncIntro() {
  return (
    <div className="intro-container">
      <div className="intro-box">
        <h1>Welcome to LifeSync 🌟</h1>
        <p>
          LifeSync will help you maintain your <b>overall life balance</b> by giving personalized insights
          on <b>health, productivity, emotional well-being, and finances</b>.
        </p>
        <ul>
          <li>💪 Personalized Health & Fitness Insights</li>
          <li>📈 Productivity & Goal Tracking</li>
          <li>🧘 Emotional & Mental Well-being Guidance</li>
          <li>💰 Smart Finance & Budgeting Support</li>
        </ul>
        <p>Let’s start your journey to a balanced life!</p>
      </div>
    </div>
  );
}
