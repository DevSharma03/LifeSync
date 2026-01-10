import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import "../styles/Profile.css";

/**
 * Full editable feature list (aligned with ML schema)
 * Grouped for UI clarity
 */
const PROFILE_FIELDS = [
  // =======================
  // 🏥 HEALTH
  // =======================
  { key: "sleep_hours", label: "Sleep Hours (hrs/night)", group: "Health" },
  { key: "sleep_time_variance", label: "Sleep Time Variance", group: "Health" },
  { key: "exercise_days_per_week", label: "Exercise Days / Week", group: "Health" },
  { key: "diet_ratio", label: "Diet Quality (%)", group: "Health" },
  { key: "water_intake_liters", label: "Water Intake (Liters/Day)", group: "Health" },
  { key: "steps_count", label: "Steps per Day", group: "Health" },
  { key: "distance_walked_km", label: "Distance Walked (km/day)", group: "Health" },
  { key: "calories_burned", label: "Calories Burned (per day)", group: "Health" },
  { key: "sedentary_hours", label: "Sedentary Hours / Day", group: "Health" },
  { key: "illness_days_monthly", label: "Illness Days / Month", group: "Health" },

  // =======================
  // 🧠 MIND
  // =======================
  { key: "depression_score", label: "Depression Score", group: "Mind" },
  { key: "anxiety_score", label: "Anxiety Score", group: "Mind" },
  { key: "stress_score", label: "Stress Score", group: "Mind" },
  { key: "childhood_trauma_score", label: "Childhood Trauma Score", group: "Mind" },
  { key: "mood_stability_score", label: "Mood Stability", group: "Mind" },
  { key: "meditation_days_per_week", label: "Meditation Days / Week", group: "Mind" },
  { key: "meditation_completion_ratio", label: "Meditation Completion (%)", group: "Mind" },
  { key: "breathing_days_per_week", label: "Breathing Exercise Days / Week", group: "Mind" },
  { key: "breathing_completion_ratio", label: "Breathing Completion (%)", group: "Mind" },
  { key: "distraction_ratio", label: "Distraction Level (%)", group: "Mind" },
  { key: "screen_time_non_work_hours", label: "Screen Time (Non-Work hrs/day)", group: "Mind" },
  { key: "family_support_ratio", label: "Family Support (%)", group: "Mind" },
  { key: "friends_support_ratio", label: "Friends Support (%)", group: "Mind" },

  // =======================
  // 🚀 PRODUCTIVITY
  // =======================
  { key: "tasks_assigned", label: "Tasks Assigned", group: "Productivity" },
  { key: "tasks_completed", label: "Tasks Completed", group: "Productivity" },
  { key: "task_completion_ratio", label: "Task Completion (%)", group: "Productivity" },
  { key: "planned_task_hours", label: "Planned Work Hours / Day", group: "Productivity" },
  { key: "actual_task_hours", label: "Actual Work Hours / Day", group: "Productivity" },
  { key: "time_efficiency_ratio", label: "Time Efficiency (%)", group: "Productivity" },
  { key: "priority_task_completion_ratio", label: "Priority Task Completion (%)", group: "Productivity" },
  { key: "focus_level", label: "Focus Level (%)", group: "Productivity" },
  { key: "productivity_gap", label: "Productivity Gap (%)", group: "Productivity" },
  { key: "daily_energy_level", label: "Daily Energy Level (%)", group: "Productivity" },

  // =======================
  // 💰 FINANCE
  // =======================
  { key: "budget_limit", label: "Monthly Budget", group: "Finance" },
  { key: "total_expense", label: "Total Monthly Expense", group: "Finance" },
  { key: "budget_adherence_ratio", label: "Budget Adherence (%)", group: "Finance" },
  { key: "expense_exceeding_ratio", label: "Expense Exceeding Ratio (%)", group: "Finance" },
  { key: "expense_tracking_score", label: "Expense Tracking Score (%)", group: "Finance" },
  { key: "savings_ratio", label: "Savings Ratio (%)", group: "Finance" },
  { key: "emergency_fund_score", label: "Emergency Fund Score (%)", group: "Finance" },
  { key: "debt_pressure_score", label: "Debt Pressure Score (%)", group: "Finance" },
];

export default function Profile() {
  const [features, setFeatures] = useState({});
  const [loading, setLoading] = useState(false);

  const token = localStorage.getItem("token");

  /**
   * Fetch profile with cache disabled
   */
  const fetchProfile = useCallback(async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/lifesync/profile",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Cache-Control": "no-cache",
            Pragma: "no-cache",
          },
        }
      );

      console.log("PROFILE RESPONSE:", res.data);

      setFeatures(res.data.features || {});
    } catch (err) {
      console.error("Failed to load profile", err);
    }
  }, [token]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  /**
   * Handle input change
   */
  const handleChange = (key, value) => {
    setFeatures((prev) => ({
      ...prev,
      [key]: value === "" ? "" : Number(value),
    }));
  };

  /**
   * Save profile permanently
   */
  const saveProfile = async () => {
    try {
      setLoading(true);

      await axios.post(
        "http://localhost:5000/api/lifesync/update-profile",
        features,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      alert("Profile updated & scores recalculated 🚀");
    } catch (err) {
      console.error("Profile update failed", err);
      alert("Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="content-area">
      <main className="main-content">
        <div className="content-wrapper">
          <h1 className="page-title">Edit LifeSync Profile</h1>

          {["Health", "Mind", "Productivity", "Finance"].map((group) => (
            <div key={group}>
              <h2 style={{ marginTop: "32px" }}>{group}</h2>

              <div className="profile-grid">
                {PROFILE_FIELDS.filter((f) => f.group === group).map((field) => (
                  <div key={field.key} className="profile-card">
                    <label>{field.label}</label>
                    <input
                      type="number"
                      value={features[field.key] ?? ""}
                      onChange={(e) =>
                        handleChange(field.key, e.target.value)
                      }
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}

          <button
            className="btn save-btn"
            onClick={saveProfile}
            disabled={loading}
          >
            {loading ? "Updating..." : "Save & Recalculate Scores"}
          </button>
        </div>
      </main>
    </div>
  );
}