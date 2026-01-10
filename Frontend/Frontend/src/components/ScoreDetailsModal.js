import { useState, useEffect } from "react";
import "../styles/scoreDetail.css";

export default function ScoreDetailsModal({ type, score = 0, onClose }) {
  const [openSection, setOpenSection] = useState("how");

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  const DATA = {
    Finance: {
      title: "Finance Score",
      short:
        "Evaluates how well you manage expenses, savings, and financial discipline.",
      build:
        "The Finance Score is calculated by analyzing your budgeting behavior, expense tracking consistency, savings ratio, emergency fund readiness, and debt pressure. Positive habits like staying within budget and saving regularly increase the score, while overspending and high debt reduce it.",
      metrics: [
        { name: "Budget Adherence", impact: "High" },
        { name: "Savings Ratio", impact: "High" },
        { name: "Expense Tracking", impact: "Medium" },
        { name: "Emergency Fund", impact: "Medium" },
        { name: "Debt Pressure", impact: "Negative" },
      ],
      improve: [
        "Track expenses daily",
        "Save a fixed percentage every month",
        "Build an emergency fund (3–6 months)",
        "Reduce high-interest debt",
      ],
      reduce: [
        "Frequent overspending",
        "No emergency savings",
        "High credit dependency",
      ],
    },

    Health: {
      title: "Health Score",
      short:
        "Represents your physical health, lifestyle consistency, and daily habits.",
      build:
        "Calculated using sleep quality, exercise frequency, diet balance, hydration, daily activity, sedentary hours, and illness patterns.",
      metrics: [
        { name: "Sleep Consistency", impact: "High" },
        { name: "Exercise Frequency", impact: "High" },
        { name: "Diet & Hydration", impact: "Medium" },
        { name: "Sedentary Hours", impact: "Negative" },
      ],
      improve: [
        "Maintain regular sleep schedule",
        "Exercise at least 3–4 days/week",
        "Drink enough water daily",
      ],
      reduce: [
        "Irregular sleep",
        "Long sedentary hours",
        "Poor diet consistency",
      ],
    },

    Productivity: {
      title: "Productivity Score",
      short:
        "Measures how efficiently you plan, focus, and complete daily tasks.",
      build:
        "Based on task completion ratio, time efficiency, focus levels, energy levels, and priority task handling.",
      metrics: [
        { name: "Task Completion", impact: "High" },
        { name: "Focus Level", impact: "High" },
        { name: "Time Efficiency", impact: "Medium" },
        { name: "Productivity Gap", impact: "Negative" },
      ],
      improve: [
        "Plan tasks realistically",
        "Reduce distractions",
        "Focus on priority tasks first",
      ],
      reduce: ["Multitasking", "Poor planning", "Low focus sessions"],
    },

    Mind: {
      title: "Mind (Emotional) Score",
      short:
        "Reflects emotional stability, mental health, and mindfulness practices.",
      build:
        "Derived from stress, anxiety, mood stability, screen time, meditation, breathing exercises, and social support.",
      metrics: [
        { name: "Stress Level", impact: "High" },
        { name: "Mood Stability", impact: "High" },
        { name: "Meditation Practice", impact: "Medium" },
        { name: "Screen Time", impact: "Negative" },
      ],
      improve: [
        "Practice meditation regularly",
        "Reduce non-work screen time",
        "Maintain social connections",
      ],
      reduce: [
        "Chronic stress",
        "Irregular routines",
        "Excessive screen exposure",
      ],
    },
  };

  const data = DATA[type];
  if (!data) return null;

  const impactColor = (impact) => {
    if (impact === "High") return "impact-high";
    if (impact === "Medium") return "impact-medium";
    return "impact-low";
  };

  return (
    <div className="sd-overlay">
      <div className="sd-modal sd-large">
        <button className="sd-close" onClick={onClose}>
          ✕
        </button>

        {/* Header */}
        <h2>{data.title}</h2>
        <div className="sd-score-row">
          <span className="sd-score">{score}%</span>
          <span className="sd-badge">Good</span>
        </div>
        <p className="sd-description">{data.short}</p>

        {/* Accordion */}
        <div className="sd-accordion">
          <button onClick={() => setOpenSection("how")}>
            How this score is generated
          </button>
          {openSection === "how" && <p>{data.build}</p>}

          <button onClick={() => setOpenSection("metrics")}>
            Key contributing metrics
          </button>
          {openSection === "metrics" && (
            <div className="sd-metric-grid">
              {data.metrics.map((m, i) => (
                <div key={i} className="sd-metric-card">
                  <span>{m.name}</span>
                  <span className={impactColor(m.impact)}>
                    {m.impact} Impact
                  </span>
                </div>
              ))}
            </div>
          )}

          <button onClick={() => setOpenSection("improve")}>
            How to improve this score
          </button>
          {openSection === "improve" && (
            <ul>
              {data.improve.map((i, idx) => (
                <li key={idx}>{i}</li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
