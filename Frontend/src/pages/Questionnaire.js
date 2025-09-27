// src/pages/QuestionsPage.js
import React, { useState } from "react";
import "../styles/questionnaire.css";
import CompletionPage from "./CompletionPage"; // new page after quiz

const questions = [
  // Health Questions
  {
    question: "How many hours of sleep do you usually get per night?",
    options: ["🛌 Less than 5 hours", "😴 5–6 hours", "🌙 7–8 hours", "💤 More than 8 hours"],
  },
  {
    question: "How often do you exercise or stay active per week?",
    options: ["🛋️ Rarely", "🚶 1–2 times", "🏃 3–4 times", "💪 5+ times"],
  },
  {
    question: "How would you describe your daily diet?",
    options: ["🍔 Mostly fast food", "🥗 Balanced but occasional junk", "🥦 Mostly healthy", "🌱 Fully plant-based/clean"],
  },
  {
    question: "How hydrated are you daily?",
    options: ["🥤 Rarely drink water", "💧 2–3 glasses", "💦 4–6 glasses", "🌊 7+ glasses"],
  },
  {
    question: "Do you experience stress or anxiety frequently?",
    options: ["😟 Always", "😐 Sometimes", "🙂 Rarely", "😌 Almost never"],
  },

  // Productivity Questions
  {
    question: "How do you plan your daily tasks?",
    options: ["❌ I don’t plan", "📝 To-do lists occasionally", "📅 I use planners or apps", "⏱️ I track tasks and time carefully"],
  },
  {
    question: "How often do distractions affect your work/study?",
    options: ["😵 Constantly", "😕 Often", "🙂 Sometimes", "😌 Rarely"],
  },
  {
    question: "How satisfied are you with your current productivity?",
    options: ["😩 Very low", "😐 Moderate", "🙂 Good", "😎 Excellent"],
  },

  // Emotional Wellbeing / Mind Questions
  {
    question: "How would you rate your mood in a typical week?",
    options: ["😔 Mostly sad/stressed", "😐 Mixed emotions", "🙂 Mostly positive", "😄 Very happy"],
  },
  {
    question: "Do you practice mindfulness, meditation, or gratitude journaling?",
    options: ["❌ Never", "🧘 Occasionally", "😊 Weekly", "✨ Daily"],
  },
  {
    question: "How strong is your support system (family, friends, peers)?",
    options: ["😞 Weak", "😐 Average", "🙂 Good", "💖 Very strong"],
  },
  {
    question: "How often do you feel overwhelmed by responsibilities?",
    options: ["😫 Always", "😕 Often", "🙂 Sometimes", "😌 Rarely"],
  },

  // Finance Questions
  {
    question: "Do you track your income and expenses?",
    options: ["❌ Never", "📝 Sometimes", "📊 Often", "💻 Always"],
  },
  {
    question: "How would you describe your saving habits?",
    options: ["💸 I rarely save", "🏦 I save occasionally", "💰 I save regularly", "💎 I have a structured plan"],
  },
  {
    question: "How comfortable are you with budgeting or financial planning?",
    options: ["😖 Not at all", "😐 Somewhat", "🙂 Comfortable", "😎 Very confident"],
  },
];

export default function Questionnaire() {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [completed, setCompleted] = useState(false); // new

  const handleNext = () => {
    if (selected !== null) {
      setAnswers([...answers, questions[current].options[selected]]);
      if (current < questions.length - 1) {
        setCurrent(current + 1);
        setSelected(null);
      } else {
        // Mark quiz as completed
        setCompleted(true);
      }
    }
  };

  const progress = ((current + 1) / questions.length) * 100;

  if (completed) {
    return <CompletionPage answers={answers} />; // Show completion page
  }

  return (
    <div className="questionnaire-container">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }}></div>
      </div>

      <div className="question-box">
        <h2>{questions[current].question}</h2>
        <div className="options">
          {questions[current].options.map((option, i) => (
            <button
              key={i}
              className={`option-btn ${selected === i ? "selected" : ""}`}
              onClick={() => setSelected(i)}
            >
              {option}
            </button>
          ))}
        </div>
        <button className="next-btn" onClick={handleNext} disabled={selected === null}>
          Next ➡️
        </button>
      </div>
    </div>
  );
}
