// src/pages/QuestionsPage.js
import React, { useState } from "react";
import "../styles/questionnaire.css";
import CompletionPage from "./CompletionPage";

/**
 * IMPORTANT:
 * Keys MUST match FastAPI schema exactly
 */

const questions = [
  // 🩺 HEALTH (5)
  {
    key: "sleep_quality",
    question: "How good is your sleep on most days?",
    options: [
      { label: "😵 Very poor", value: 20 },
      { label: "😕 Below average", value: 40 },
      { label: "🙂 Good", value: 70 },
      { label: "😴 Excellent", value: 100 },
    ],
  },
  {
    key: "physical_activity_consistency",
    question: "How regularly do you exercise or stay physically active?",
    options: [
      { label: "🛋️ Rarely", value: 20 },
      { label: "🚶 Sometimes", value: 40 },
      { label: "🏃 Regularly", value: 70 },
      { label: "💪 Very consistent", value: 100 },
    ],
  },
  {
    key: "diet_quality",
    question: "How healthy and balanced is your daily diet?",
    options: [
      { label: "🍔 Poor", value: 20 },
      { label: "🍟 Average", value: 40 },
      { label: "🥗 Healthy", value: 70 },
      { label: "🌱 Very clean", value: 100 },
    ],
  },
  {
    key: "daily_energy_level",
    question: "How energetic do you feel throughout the day?",
    options: [
      { label: "😴 Very low", value: 20 },
      { label: "😕 Low", value: 40 },
      { label: "🙂 Good", value: 70 },
      { label: "⚡ High", value: 100 },
    ],
  },
  {
    key: "sedentary_level",
    question: "How much time do you spend sitting or inactive daily?",
    options: [
      { label: "🏃 Very active", value: 20 },
      { label: "🚶 Moderately active", value: 40 },
      { label: "🪑 Mostly sitting", value: 70 },
      { label: "🛋️ Very sedentary", value: 100 },
    ],
  },

  // 🧠 MIND & EMOTIONAL (5)
  {
    key: "stress_level",
    question: "How stressed do you usually feel?",
    options: [
      { label: "😌 Very calm", value: 20 },
      { label: "🙂 Mild stress", value: 40 },
      { label: "😟 High stress", value: 70 },
      { label: "😫 Extremely stressed", value: 100 },
    ],
  },
  {
    key: "anxiety_level",
    question: "How often do you feel anxious or worried?",
    options: [
      { label: "😌 Rarely", value: 20 },
      { label: "😐 Sometimes", value: 40 },
      { label: "😟 Often", value: 70 },
      { label: "😰 Constantly", value: 100 },
    ],
  },
  {
    key: "mood_stability",
    question: "How stable is your mood day to day?",
    options: [
      { label: "😖 Very unstable", value: 20 },
      { label: "😕 Somewhat unstable", value: 40 },
      { label: "🙂 Stable", value: 70 },
      { label: "😄 Very stable", value: 100 },
    ],
  },
  {
    key: "mindfulness_habit",
    question: "How consistent are you with meditation or relaxation practices?",
    options: [
      { label: "❌ Never", value: 20 },
      { label: "🧘 Occasionally", value: 40 },
      { label: "😊 Regularly", value: 70 },
      { label: "✨ Daily", value: 100 },
    ],
  },
  {
    key: "social_support",
    question: "How supported do you feel by family or friends?",
    options: [
      { label: "😞 Very unsupported", value: 20 },
      { label: "😐 Some support", value: 40 },
      { label: "🙂 Well supported", value: 70 },
      { label: "💖 Very strong support", value: 100 },
    ],
  },

  // 💼 PRODUCTIVITY (3)
  {
    key: "focus_ability",
    question: "How well can you focus on important tasks?",
    options: [
      { label: "😵 Very poor", value: 20 },
      { label: "😕 Low", value: 40 },
      { label: "🙂 Good", value: 70 },
      { label: "🎯 Excellent", value: 100 },
    ],
  },
  {
    key: "task_completion_reliability",
    question: "How often do you complete tasks you plan?",
    options: [
      { label: "❌ Rarely", value: 20 },
      { label: "😐 Sometimes", value: 40 },
      { label: "🙂 Mostly", value: 70 },
      { label: "✅ Almost always", value: 100 },
    ],
  },
  {
    key: "distraction_level",
    question: "How easily do distractions pull you away from work?",
    options: [
      { label: "😌 Rarely distracted", value: 20 },
      { label: "😐 Sometimes", value: 40 },
      { label: "😕 Often", value: 70 },
      { label: "📱 Constantly distracted", value: 100 },
    ],
  },

  // 💰 FINANCE (2)
  {
    key: "financial_discipline",
    question: "How well do you manage and track your expenses?",
    options: [
      { label: "💸 Very poor", value: 20 },
      { label: "😐 Somewhat", value: 40 },
      { label: "📊 Good", value: 70 },
      { label: "💎 Excellent", value: 100 },
    ],
  },
  {
    key: "financial_stress",
    question: "How stressed do you feel about money?",
    options: [
      { label: "😌 Not stressed", value: 20 },
      { label: "😐 Mild stress", value: 40 },
      { label: "😟 High stress", value: 70 },
      { label: "😰 Extreme stress", value: 100 },
    ],
  },
];

export default function QuestionsPage() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState({});
  const [completed, setCompleted] = useState(false);

  const handleNext = () => {
    if (selected === null) return;

    const q = questions[current];

    setAnswers((prev) => ({
      ...prev,
      [q.key]: q.options[selected].value,
    }));

    if (current === questions.length - 1) {
      setCompleted(true);
    } else {
      setCurrent(current + 1);
      setSelected(null);
    }
  };

  const progress = Math.round(((current + 1) / questions.length) * 100);

  if (completed) {
    return <CompletionPage answers={answers} />;
  }

  return (
    <div className="questionnaire-container">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>

      <div className="question-box">
        <h2>{questions[current].question}</h2>

        <div className="options">
          {questions[current].options.map((option, index) => (
            <button
              key={index}
              className={`option-btn ${selected === index ? "selected" : ""}`}
              onClick={() => setSelected(index)}
            >
              {option.label}
            </button>
          ))}
        </div>

        <button
          className="next-btn"
          onClick={handleNext}
          disabled={selected === null}
        >
          {current === questions.length - 1 ? "Finish ✅" : "Next ➡️"}
        </button>
      </div>
    </div>
  );
}
