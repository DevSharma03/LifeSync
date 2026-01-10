import React, { useState } from "react";
import "../styles/MenstrualCycleTracker.css";

/* ================= CONFIG ================= */
const STORAGE_KEY = "lifesync_menstrual_profile";
const MAX_CYCLES = 4;

/* ================= QUESTIONS ================= */
const ONBOARD_QUESTIONS = [
  {
    key: "typicalCycle",
    question: "How long is your cycle usually?",
    options: [
      { label: "21–24 days", value: 23 },
      { label: "25–28 days", value: 28 },
      { label: "29–32 days", value: 30 },
      { label: "33–35 days", value: 34 },
      { label: "Not sure", value: 28 },
    ],
  },
  {
    key: "periodLength",
    question: "How many days does your period usually last?",
    options: [
      { label: "3–4 days", value: 4 },
      { label: "5–6 days", value: 5 },
      { label: "7+ days", value: 7 },
    ],
  },
  {
    key: "regularity",
    question: "How regular is your cycle?",
    options: [
      { label: "Very regular", value: "regular" },
      { label: "Sometimes irregular", value: "mixed" },
      { label: "Often irregular", value: "irregular" },
    ],
  },
];

/* ================= HELPERS ================= */
const daysBetween = (a, b) =>
  Math.round(
    (new Date(b).getTime() - new Date(a).getTime()) / (1000 * 60 * 60 * 24)
  );

/* ================= COMPONENT ================= */
export default function MenstrualCycleTracker({ onClose }) {
  const stored = JSON.parse(localStorage.getItem(STORAGE_KEY)) || {};

  const [mode, setMode] = useState(stored.onboarding ? "track" : "onboard");
  const [answers, setAnswers] = useState(stored.onboarding || {});
  const [qIndex, setQIndex] = useState(0);

  const [entries, setEntries] = useState(stored.entries || []);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  /* ================= PERSIST ================= */
  const saveProfile = (data) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  };

  /* ================= ONBOARD FLOW ================= */
  const handleAnswer = (value) => {
    const updated = {
      ...answers,
      [ONBOARD_QUESTIONS[qIndex].key]: value,
    };

    setAnswers(updated);

    if (qIndex < ONBOARD_QUESTIONS.length - 1) {
      setQIndex(qIndex + 1);
    } else {
      saveProfile({ onboarding: updated, entries: [] });
      setMode("track");
    }
  };

  /* ================= SAVE PERIOD ================= */
  const savePeriod = () => {
    if (!startDate || !endDate) return;
    if (new Date(endDate) < new Date(startDate)) return;

    const periodDuration = daysBetween(startDate, endDate) + 1;
    const updated = [...entries, { startDate, endDate, periodDuration }].slice(
      -MAX_CYCLES
    );

    setEntries(updated);
    saveProfile({ onboarding: answers, entries: updated });

    setStartDate("");
    setEndDate("");
  };

  /* ================= DERIVED DATA ================= */
  const cycleLengths = [];
  for (let i = 1; i < entries.length; i++) {
    cycleLengths.push(
      daysBetween(entries[i - 1].startDate, entries[i].startDate)
    );
  }

  const avgCycle =
    cycleLengths.length > 0
      ? (cycleLengths.reduce((a, b) => a + b, 0) / cycleLengths.length).toFixed(
          1
        )
      : answers.typicalCycle;

  const avgPeriod =
    entries.length > 0
      ? (
          entries.reduce((a, b) => a + b.periodDuration, 0) / entries.length
        ).toFixed(1)
      : answers.periodLength;

  const last = cycleLengths.at(-1);
  const prev = cycleLengths.at(-2);

  const trend =
    last && prev
      ? last > prev
        ? "Cycle length increasing"
        : last < prev
        ? "Cycle length decreasing"
        : "Cycle length stable"
      : "Not enough data yet";

  /* ================= RENDER ================= */
  return (
    <div className="menstrual_overlay">
      <div className="menstrual_modal">
        {/* HEADER */}
        <div className="menstrual_header">
          <h3>Menstrual Cycle Tracker</h3>
          <button onClick={onClose}>✕</button>
        </div>

        {/* ================= ONBOARDING ================= */}
        {mode === "onboard" && (
          <>
            <div className="menstrual_question">
              <h4>{ONBOARD_QUESTIONS[qIndex].question}</h4>
            </div>

            <div className="menstrual_options">
              {ONBOARD_QUESTIONS[qIndex].options.map((opt, i) => (
                <button
                  key={i}
                  className="menstrual_option"
                  onClick={() => handleAnswer(opt.value)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </>
        )}

        {/* ================= TRACKING ================= */}
        {mode === "track" && (
          <>
            <div className="menstrual_form modern">
              <div>
                <label>Period Start Date</label>
                <input
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>

              <div>
                <label>Period End Date</label>
                <input
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>

              <button className="menstrual_save" onClick={savePeriod}>
                Save Period
              </button>
            </div>

            <div className="menstrual_insights_cards">
              <span
                className={`menstrual_badge ${
                  cycleLengths.length < 2 ? "bad" : "good"
                }`}
              >
                {cycleLengths.length < 2
                  ? "Estimated (baseline)"
                  : "Based on actual cycles"}
              </span>

              <div className="insight_card">
                <strong>Average Cycle</strong>
                <span>{avgCycle} days</span>
              </div>

              <div className="insight_card">
                <strong>Average Period</strong>
                <span>{avgPeriod} days</span>
              </div>

              <div className="insight_card">
                <strong>Trend</strong>
                <span>{trend}</span>
              </div>
            </div>

            {cycleLengths.length === 0 && (
              <div className="menstrual_empty">
                Your cycle length will be calculated once your next period
                starts.
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
