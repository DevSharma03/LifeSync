import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import "../styles/HealthFitnessTracker.css";

/* ================= DATE & TIME ================= */
const todayKey = () => new Date().toISOString().split("T")[0];

const getTimeSlot = () => {
  const h = new Date().getHours();
  if (h >= 6 && h < 12) return "Morning";
  if (h >= 12 && h < 18) return "Afternoon";
  return "Night";
};

/* ================= QUESTIONS (7) ================= */
const MAIN_QUESTIONS = [
  {
    key: "yesterday_activity",
    question: "How active were you yesterday?",
    options: [
      { label: "🛋️ Very inactive", value: 1 },
      { label: "🚶 Light", value: 2 },
      { label: "🙂 Moderate", value: 3 },
      { label: "🏃 Very active", value: 4 },
    ],
  },
  {
    key: "sedentary_hours",
    question: "How long do you usually sit per day?",
    options: [
      { label: "< 4 hrs", value: 3 },
      { label: "4–6 hrs", value: 5 },
      { label: "6–8 hrs", value: 7 },
      { label: "8+ hrs", value: 9 },
    ],
  },
  {
    key: "planned_exercise",
    question: "How much exercise do you plan today?",
    options: [
      { label: "None", value: 0 },
      { label: "10–20 min", value: 15 },
      { label: "20–40 min", value: 30 },
      { label: "40+ min", value: 50 },
    ],
  },
  {
    key: "energy_level",
    question: "How is your energy level today?",
    options: [
      { label: "😴 Low", value: 1 },
      { label: "😐 Medium", value: 2 },
      { label: "🙂 Good", value: 3 },
      { label: "⚡ High", value: 4 },
    ],
  },
  {
    key: "confidence",
    question: "How confident do you feel today?",
    options: [
      { label: "😕 Low", value: 1 },
      { label: "🙂 Average", value: 2 },
      { label: "💪 Confident", value: 3 },
      { label: "🔥 Very confident", value: 4 },
    ],
  },
  {
    key: "work_type",
    question: "What best describes your work today?",
    options: [
      { label: "💻 Desk", value: "desk" },
      { label: "🔄 Mixed movement", value: "mixed" },
      { label: "🏗️ Physically active", value: "active" },
    ],
  },
  {
    key: "energy_check",
    question: "How is your energy right now?",
    options: [
      { label: "😴 Low", value: 1 },
      { label: "🙂 Good", value: 3 },
      { label: "⚡ High", value: 4 },
    ],
  },
];

/* ================= COMPONENT ================= */
export default function HealthFitnessTracker({ token, onClose }) {
  const [profile, setProfile] = useState({});
  const [answers, setAnswers] = useState({});
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [mode, setMode] = useState("view");
  const [loading, setLoading] = useState(true);

  // Goals
  const [stepGoal, setStepGoal] = useState(8000);
  const [calGoal, setCalGoal] = useState(300);
  const [editStep, setEditStep] = useState(false);
  const [editCal, setEditCal] = useState(false);

  const today = todayKey();
  const slot = getTimeSlot();

  /* ================= FETCH PROFILE ================= */
  const fetchProfile = useCallback(async () => {
    if (!token) return setLoading(false);

    try {
      const res = await axios.get(
        "http://localhost:5000/api/lifesync/profile",
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const f = res.data.features || {};
      setProfile(f);
      setStepGoal(f.daily_step_goal || 8000);
      setCalGoal(f.daily_calorie_goal || 300);

      const mainDone = localStorage.getItem("fitness_main_done");
      const lastTime = Number(localStorage.getItem("fitness_last_time")) || 0;
      const slotDone = localStorage.getItem(`fitness_${slot}_${today}`);

      if (!mainDone) setMode("main");
      else if (!slotDone && Date.now() - lastTime >= 4 * 60 * 60 * 1000)
        setMode("main");
      else setMode("view");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, [token, slot, today]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  useEffect(() => {
    setCurrent(0);
    setAnswers({});
    setSelected(null);
  }, [mode]);

  /* ================= NEXT ================= */
  const handleNext = async () => {
    if (selected === null) return;

    const q = MAIN_QUESTIONS[current];
    const updated = { ...answers, [q.key]: q.options[selected].value };
    setAnswers(updated);
    setSelected(null);

    if (current < MAIN_QUESTIONS.length - 1) {
      setCurrent(current + 1);
      return;
    }

    const steps = Math.max(
      2000,
      Math.round(4000 + (updated.planned_exercise || 0) * 50)
    );

    const payload = {
      steps_count: steps,
      distance_walked_km: Number((steps * 0.0008).toFixed(2)),
      calories_burned: Math.round(steps * 0.04),
    };

    await axios.post(
      "http://localhost:5000/api/lifesync/update-profile-partial",
      payload,
      { headers: { Authorization: `Bearer ${token}` } }
    );

    setProfile((p) => ({ ...p, ...payload }));
    localStorage.setItem("fitness_last_time", Date.now());
    localStorage.setItem("fitness_main_done", "true");
    localStorage.setItem(`fitness_${slot}_${today}`, "done");

    setMode("view");
  };

  /* ================= SAVE GOALS ================= */
  const saveStepGoal = async () => {
    await axios.post(
      "http://localhost:5000/api/lifesync/update-profile-partial",
      { daily_step_goal: stepGoal },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setEditStep(false);
  };

  const saveCalGoal = async () => {
    await axios.post(
      "http://localhost:5000/api/lifesync/update-profile-partial",
      { daily_calorie_goal: calGoal },
      { headers: { Authorization: `Bearer ${token}` } }
    );
    setEditCal(false);
  };

  if (loading || !token) return null;

  const stepProgress = Math.min(
    Math.round(((profile.steps_count || 0) / stepGoal) * 100),
    100
  );
  const calProgress = Math.min(
    Math.round(((profile.calories_burned || 0) / calGoal) * 100),
    100
  );

  /* ================= RENDER ================= */
  return (
    <div className="fitness_overlay">
      <div className="fitness_modal">
        <h3>Fitness Tracker</h3>

        {mode === "main" && (
          <>
            <div className="fitness_question_box">
              <h2>{MAIN_QUESTIONS[current].question}</h2>
            </div>

            <div className="fitness_options">
              {MAIN_QUESTIONS[current].options.map((o, i) => (
                <button
                  key={i}
                  className={`fitness_option ${selected === i ? "active" : ""}`}
                  onClick={() => setSelected(i)}
                >
                  {o.label}
                </button>
              ))}
            </div>

            <button className="fitness_next" onClick={handleNext}>
              {current === MAIN_QUESTIONS.length - 1 ? "Finish" : "Next"}
            </button>
          </>
        )}

        {mode === "view" && (
          <div className="fitness_dashboard">
            {/* METRICS */}
            <div className="fitness_cards">
              <div className="fitness_card highlight">
                <span className="card_heading">Steps</span>
                <span className="card_icon">👟</span>
                <span className="card_value">{profile.steps_count}</span>
                <span className="card_unit">steps</span>
              </div>

              <div className="fitness_card">
                <span className="card_heading">Distance</span>
                <span className="card_icon">📏</span>
                <span className="card_value">{profile.distance_walked_km}</span>
                <span className="card_unit">km</span>
              </div>

              <div className="fitness_card">
                <span className="card_heading">Calories</span>
                <span className="card_icon">🔥</span>
                <span className="card_value">{profile.calories_burned}</span>
                <span className="card_unit">kcal</span>
              </div>
            </div>

            {/* STEP GOAL */}
            <div className="fitness_goal_card">
              <div className="goal_header">
                <span>Daily Step Goal</span>
                <span className="goal_percent">{stepProgress}%</span>
              </div>

              <div className="fitness_progress">
                <div style={{ width: `${stepProgress}%` }} />
              </div>

              <div className="fitness_goal_edit">
                {editStep ? (
                  <>
                    <input
                      type="number"
                      value={stepGoal}
                      onChange={(e) => setStepGoal(+e.target.value)}
                    />
                    <button onClick={saveStepGoal}>Save</button>
                  </>
                ) : (
                  <button onClick={() => setEditStep(true)}>Edit Goal</button>
                )}
              </div>
            </div>

            {/* CALORIE GOAL */}
            <div className="fitness_goal_card">
              <div className="goal_header">
                <span>Daily Calorie Goal</span>
                <span className="goal_percent">{calProgress}%</span>
              </div>

              <div className="fitness_progress">
                <div style={{ width: `${calProgress}%` }} />
              </div>

              <div className="fitness_goal_edit">
                {editCal ? (
                  <>
                    <input
                      type="number"
                      value={calGoal}
                      onChange={(e) => setCalGoal(+e.target.value)}
                    />
                    <button onClick={saveCalGoal}>Save</button>
                  </>
                ) : (
                  <button onClick={() => setEditCal(true)}>Edit Goal</button>
                )}
              </div>
            </div>

            {/* STATUS */}
            <div className="fitness_status">
              <span className="status_icon">✅</span>
              <div>
                <strong>{slot} check-in completed</strong>
                <p>Come back later for the next update 💪</p>
              </div>
            </div>
          </div>
        )}

        <button className="fitness_close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
