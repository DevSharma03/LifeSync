import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Health.css";

import HealthDailyMealPlanner from "../components/HealthDailyMealPlanner";
import HealthFitnessTracker from "../components/HealthFitnessTracker";
import MenstrualCycleTracker from "../components/MenstrualCycleTracker";
import SleepCycleTracker from "../components/SleepCycleTracker";

/* ================= UTIL ================= */
const todayKey = () => new Date().toISOString().split("T")[0];

/* ================= CONSTANTS ================= */
const GLASS_LITERS = 0.5;
const DAILY_GLASS_GOAL = 10;

/* ================= ICON ================= */
const RobotIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="currentColor"
    viewBox="0 0 256 256"
  >
    <path d="M200,48H136V16a8,8,0,0,0-16,0V48H56A32,32,0,0,0,24,80V192a32,32,0,0,0,32,32H200a32,32,0,0,0,32-32V80A32,32,0,0,0,200,48Z" />
  </svg>
);

const HealthInfoCard = ({ title, description, imageUrl, children }) => (
  <div className="health_info_card">
    <div className="health_info_text">
      <p className="health_info_title">{title}</p>
      <p className="health_info_desc">{description}</p>
      {children}
    </div>
    <div
      className="health_info_image"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    />
  </div>
);

/* ================= MAIN ================= */
export default function Health() {
  const token = localStorage.getItem("token");

  /* ================= MODALS ================= */
  const [showMealModal, setShowMealModal] = useState(false);
  const [showFitnessModal, setShowFitnessModal] = useState(false);
  const [showMenstrualModal, setShowMenstrualModal] = useState(false);
  const [showSleepModal, setShowSleepModal] = useState(false);

  /* ================= HYDRATION ================= */
  const [waterLiters, setWaterLiters] = useState(0);

  const glassesDrank = Math.round(waterLiters / GLASS_LITERS);
  const dailyGoalLiters = DAILY_GLASS_GOAL * GLASS_LITERS;

  /* ================= DAILY RESET ================= */
  useEffect(() => {
    if (!token) return;

    const today = todayKey();
    const lastReset = localStorage.getItem("hydration_last_reset");
    if (lastReset === today) return;

    const resetHydration = async () => {
      try {
        await axios.post(
          "http://localhost:5000/api/lifesync/update-profile-partial",
          { water_intake_liters: 0 },
          { headers: { Authorization: `Bearer ${token}` } }
        );

        setWaterLiters(0);
        localStorage.setItem("hydration_last_reset", today);
      } catch (err) {
        console.error("Hydration reset failed:", err);
      }
    };

    resetHydration();
  }, [token]);

  /* ================= FETCH PROFILE ================= */
  useEffect(() => {
    if (!token) return;

    const fetchProfile = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/lifesync/profile",
          { headers: { Authorization: `Bearer ${token}` } }
        );
        setWaterLiters(res.data.features?.water_intake_liters || 0);
      } catch (err) {
        console.error("Profile fetch error:", err);
      }
    };

    fetchProfile();
  }, [token]);

  /* ================= UPDATE HYDRATION ================= */
  const updateHydration = async (newGlassCount) => {
    const newLiters = Number((newGlassCount * GLASS_LITERS).toFixed(2));
    if (newLiters === waterLiters) return;

    try {
      await axios.post(
        "http://localhost:5000/api/lifesync/update-profile-partial",
        { water_intake_liters: newLiters },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setWaterLiters(newLiters);
    } catch (err) {
      console.error("Hydration update failed:", err);
    }
  };

  const hydrationTip =
    waterLiters === 0
      ? "Start with your first glass 💧"
      : waterLiters < dailyGoalLiters / 2
      ? "Good start — keep sipping 💦"
      : waterLiters < dailyGoalLiters
      ? "Almost there — stay hydrated ✨"
      : "Amazing! You've reached today's goal 🎉";

  return (
    <div className="health_container">
      <main className="health_main">
        <h1 className="health_title">My Health & Wellness</h1>

        <button className="health_fab">
          <RobotIcon />
        </button>

        {/* ================= FITNESS ================= */}
        <section>
          <h2 className="health_section_title">Fitness & Activity</h2>
          <HealthInfoCard
            title="Daily Fitness Tracker"
            description="Track steps, calories, distance and set daily fitness goals."
            imageUrl="https://images.unsplash.com/photo-1554284126-aa88f22d8b74?auto=format&fit=crop&w=900&q=80"
          >
            <button
              className="health_btn_outline"
              onClick={() => setShowFitnessModal(true)}
            >
              🏃 Open Fitness Tracker
            </button>
          </HealthInfoCard>
        </section>

        {/* ================= SLEEP ================= */}
        <section>
          <h2 className="health_section_title">Sleep Tracking</h2>

          <HealthInfoCard
            title="Sleep Cycle Tracker"
            description="Log sleep and wake times to understand your sleep pattern."
            imageUrl="https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=900&q=80"
          >
            <button
              className="health_btn_outline"
              onClick={() => setShowSleepModal(true)}
            >
              😴 Track Sleep
            </button>
          </HealthInfoCard>
        </section>

        {/* ================= NUTRITION & HYDRATION ================= */}
        <section className="health_hydration_section">
          <h2 className="health_section_title">Nutrition & Hydration</h2>

          <HealthInfoCard
            title="Daily Meal Planner"
            description="Create your own balanced meal."
            imageUrl="https://images.unsplash.com/photo-1543353071-087092ec393a?auto=format&fit=crop&w=900&q=80"
          >
            <button
              className="health_btn_outline"
              onClick={() => setShowMealModal(true)}
            >
              🍽️ Create your own meal plan
            </button>
          </HealthInfoCard>

          <div className="health_hydration_card">
            <div className="health_hydration_left">
              <h3>Hydration</h3>

              <div className="health_glass_grid">
                {[...Array(DAILY_GLASS_GOAL)].map((_, i) => (
                  <button
                    key={i}
                    className={`health_glass ${
                      i < glassesDrank ? "filled" : ""
                    }`}
                    onClick={() => updateHydration(i + 1)}
                  >
                    💧
                  </button>
                ))}
              </div>

              <p className="health_hydration_count">
                {waterLiters} L / {dailyGoalLiters} L
              </p>

              <p className="health_hydration_tip">{hydrationTip}</p>
            </div>

            <div className="health_hydration_right">
              <div className="health_water_glass">
                <div
                  className="health_water_fill"
                  style={{
                    height: `${Math.min(
                      (waterLiters / dailyGoalLiters) * 100,
                      100
                    )}%`,
                  }}
                />
              </div>
            </div>
          </div>
        </section>

        {/* ================= MENSTRUAL ================= */}
        <section>
          <h2 className="health_section_title">Menstrual Cycle Tracking</h2>
          <HealthInfoCard
            title="Cycle Overview"
            description="Track your cycle, symptoms, and irregularities."
            imageUrl="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=900&q=80"
          >
            <button
              className="health_btn_outline"
              onClick={() => setShowMenstrualModal(true)}
            >
              🩸 Track Cycle
            </button>
          </HealthInfoCard>
        </section>

        {/* ================= MODALS ================= */}
        {showMealModal && (
          <HealthDailyMealPlanner onClose={() => setShowMealModal(false)} />
        )}

        {showFitnessModal && (
          <HealthFitnessTracker
            token={token}
            onClose={() => setShowFitnessModal(false)}
          />
        )}

        {showMenstrualModal && (
          <MenstrualCycleTracker onClose={() => setShowMenstrualModal(false)} />
        )}

        {showSleepModal && (
          <SleepCycleTracker onClose={() => setShowSleepModal(false)} />
        )}
      </main>
    </div>
  );
}
