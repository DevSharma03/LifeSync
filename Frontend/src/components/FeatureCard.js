import React from "react";
import "../styles/featurecard.css";

export default function FeatureCard({ title, desc, color }) {
  return (
    <div className="feature-card" style={{ borderTop: `5px solid ${color}` }}>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
