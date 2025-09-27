import React from "react";
import "../styles/Home.css"; 

export default function ScoreCard({ title, value, description, image, line }) {
  return (
    <div className="score-card">
      {image && <img src={image} alt={title} className="score-card-image" />}
      <h3>{title}</h3>
      <p className="score-value">{value}</p>
      <p className="score-description">{description}</p>
      {line && <p className="score-line">{line}</p>}
    </div>
  );
}
