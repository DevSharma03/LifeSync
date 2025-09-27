// src/pages/Landing.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/landing.css";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="landing-container">
      <div className="content-box">
        <h1 className="landing-title">LifeSync</h1>
        <p className="landing-subtitle">
          Balance health, productivity & lifestyle seamlessly
        </p>
        <button
          className="landing-button"
          onClick={() => navigate("/login")}
        >
          Get Started →
        </button>
      </div>
    </div>
  );
};

export default Landing;
