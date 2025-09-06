import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ScoreCard from "../components/ScoreCard";
import ChartCard from "../components/ChartCard";
import "../styles/Home.css";


function Home() {
  const factors = [
    {
      name: "Health",
      tagline: "Stay consistent with your fitness goals",
      score: 85,
      image: "https://source.unsplash.com/600x400/?fitness,health",
    },
    {
      name: "Finance",
      tagline: "Track and grow your wealth smartly",
      score: 74,
      image: "https://source.unsplash.com/600x400/?finance,money",
    },
    {
      name: "Productivity",
      tagline: "Stay focused and manage time effectively",
      score: 90,
      image: "https://source.unsplash.com/600x400/?workspace,productivity",
    },
    {
      name: "Emotional Wellbeing",
      tagline: "Balance your mind and emotions daily",
      score: 78,
      image: "https://source.unsplash.com/600x400/?peace,meditation",
    },
  ];

  return (
    <div className="home-container">
      {/* Sidebar Navbar */}
      <Navbar />

      {/* Dashboard */}
      <div className="dashboard">
        <h1 className="dashboard-title">LifeSync Dashboard</h1>

        {/* Overall Score */}
        <div className="overall-score-card">
          <h2>Overall Score</h2>
          <div className="overall-score-value">82</div>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "82%" }}></div>
          </div>
          <p className="score-subtext">Great balance across all areas 👏</p>
        </div>

        {/* Factor Cards */}
        {factors.map((factor, index) => (
          <div key={index} className="factor-card-vertical">
            <div className="card-left">
              <h3 className="factor-title">{factor.name}</h3>
              <p className="factor-tagline"><em>{factor.tagline}</em></p>
              <div className="factor-score-circle">{factor.score}</div>
            </div>
            <div className="card-right">
              <img src={factor.image} alt={factor.name} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;