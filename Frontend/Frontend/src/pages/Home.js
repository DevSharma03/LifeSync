import { useEffect, useState, useCallback } from "react";
import axios from "axios";
import ScoreDetailsModal from "../components/ScoreDetailsModal.js";
import "../styles/Home.css";

/* =========================================================
   Reusable Card Component
========================================================= */
const KeyAreaCard = ({ title, description, imageUrl, score, onClick }) => (
  <div className="key-area-card">
    <div className="card-content">
      <div className="card-text">
        <p className="card-title">{title}</p>
        <p className="card-description">{description}</p>

        <div className="card-score" style={{ "--value": score ?? 0 }}>
          <span>{score?.toFixed(1) ?? "--"}%</span>
        </div>
      </div>

      <button className="btn" onClick={onClick}>
        View Details
      </button>
    </div>

    <div
      className="card-image"
      style={{ backgroundImage: `url("${imageUrl}")` }}
    />
  </div>
);

/* =========================================================
   Main Dashboard Component
========================================================= */
export default function Home() {
  const [scores, setScores] = useState(null);
  const [activeModal, setActiveModal] = useState(null);

  const token = localStorage.getItem("token");

  /* =======================
     Fetch Dashboard Scores
  ======================= */
  const fetchDashboard = useCallback(async () => {
    try {
      const res = await axios.get(
        "http://localhost:5000/api/lifesync/dashboard",
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setScores(res.data.scores);
    } catch (error) {
      console.error("Dashboard fetch failed:", error);
    }
  }, [token]);

  useEffect(() => {
    fetchDashboard();
    const interval = setInterval(fetchDashboard, 30 * 60 * 1000);
    return () => clearInterval(interval);
  }, [fetchDashboard]);

  /* =======================
     Life Score Logic
  ======================= */
  const lifeScore = scores?.life_score ?? 0;

  const scoreStatus =
    lifeScore >= 80
      ? "Excellent"
      : lifeScore >= 55
      ? "Good"
      : lifeScore >= 40
      ? "Moderate"
      : "Needs Improvement";

  /* =======================
     Key Areas
  ======================= */
  const keyAreas = [
    {
      key: "Health",
      title: "Health Score",
      description: "Physical well-being and fitness",
      score: scores?.health_score,
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuCr6lSgFelQeQ1Bx6pOKhhJguf2Dqo2o6lwHww5lu18QXBG0YTAEzgu41Ts23GfV8P63v7Sw2EGRQKIRgcxJZE-UOI1jFnjZKYxewSsI1P-VkX1O3CFrnr3SEGwWzvG4TZU-R5_2fz7Jorlyx58c5KK_5Vwh6Eg4OaczGb0cykx4poDrgnMYCRqySK_AtsMPqNBgT-xDjxq3nQbspCJNpn7XEaIZkDGR1r8iCkKreTeyJlhF0g5rDkEWwUcDFTiNjs_SqzeAfEIDbg",
    },
    {
      key: "Finance",
      title: "Finance Score",
      description: "Financial stability and planning",
      score: scores?.finance_score,
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuArUw2BJlUccxlNSppUvDetvh_3EmQV4MhJL-3THHjN31jEPYpcZ63BwPPiaUC5d9gNH6f4lnq-LrtyTg14n2iWEjWF4EE1YyJmF6tOErNwqD-ExQnv9jgFyE1L6LHaqXvHWr9PfGpQDJ0iF4rcuY_dz6GvIou7qDt5T1dSoQDkttb1Ik7VQ-qIDgGBKYkBPtXtmyh3gQvKYpv6T2gYO6mk2M5jni91seLf5bq2_GuSroKCvkNIIzxG9P_GrSLEWL3kYC5GQZCL6K4",
    },
    {
      key: "Productivity",
      title: "Productivity Score",
      description: "Task completion and efficiency",
      score: scores?.productivity_score,
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuAAVTXwijfICUqqpieLGwgGx8SNulMukzAfn7QrZKE0ZnjRw1eMUUUv6GYuU4m6Y4KgRVnMlMSIpjZwx3YWu1Bc2LD3Fs0n238F8zBvv41sOqhoZcG2W7s3nEQlh-ToQWIIn3f0eigqbke0akIgW2yrhtDOPdP014y6GcyU1--1ZJ3UDrQ87wzjXYp_6vogJybrXQH2tAsX0flkXLpwsHy2LqOiAMTn02aBOzkKOWA6Y06SD9v3aTOv2LsRAwpBaxvFj_i7I9j9J28",
    },
    {
      key: "Mind",
      title: "Mind (Emotional) Score",
      description: "Emotional well-being and mindfulness",
      score: scores?.mind_score,
      imageUrl:
        "https://lh3.googleusercontent.com/aida-public/AB6AXuDvAmWhKakUAPU8tH4qbyYnAb9jp7E13DCOA_LGcIZcq1mqjUtwi6QefULmR4LoIdEGtI6WThG5GG40BMYtgT6ZonkzfNJh1pDvdB7s00ii4Fv-bAO1S5u999g6w0GYsn53BKF5rtbrwxugNnOZsz1l57QSUzbqd0GAfnyPoETvBFksUstXLTtrgUTgPqM6eddY7YYVAzaCrxZpJJBhthTwXqpdpg7GQAKYTmI3mkddwVfFUjX2cZ4yKsdlffkqBLFi_zPI603f6hg",
    },
  ];

  /* =========================================================
     Render
  ========================================================= */
  return (
    <div className="content-area">
      <main className="main-content">
        <div className="content-wrapper">
          <h1 className="page-title">Overall Life Balance</h1>

          {/* =======================
             Overall Score Hero
          ======================= */}
          <div className="overall-hero-card">
            <div
              className="overall-score-ring"
              style={{ "--value": lifeScore }}
            >
              <div className="overall-score-inner">
                <p className="overall-score-value">{lifeScore}</p>
                <p className="overall-score-label">{scoreStatus}</p>
              </div>
            </div>

            <div className="overall-score-details">
              <h2>Your Life Score</h2>
              <p className="overall-description">
                Based on your health, finances, productivity, and mental
                well-being metrics.
              </p>

              <div className="overall-progress-row">
                <span>Progress to Excellent</span>
                <span className="progress-percent">{lifeScore}%</span>
              </div>

              <div className="progress-bar-background">
                <div
                  className="progress-bar-foreground"
                  style={{ width: `${lifeScore}%` }}
                />
              </div>

              <p className="weekly-change">▲ +5% this week</p>
            </div>
          </div>

          {/* =======================
             Key Areas
          ======================= */}
          <h2 className="section-title">Key Areas</h2>

          <div className="card-list">
            {keyAreas.map((area) => (
              <KeyAreaCard
                key={area.key}
                title={area.title}
                description={area.description}
                imageUrl={area.imageUrl}
                score={area.score}
                onClick={() =>
                  setActiveModal({
                    type: area.key,
                    score: area.score ?? 0,
                  })
                }
              />
            ))}
          </div>
        </div>
      </main>

      {/* =======================
         Modal Integration
      ======================= */}
      {activeModal && (
        <ScoreDetailsModal
          type={activeModal.type}
          score={activeModal.score}
          onClose={() => setActiveModal(null)}
        />
      )}
    </div>
  );
}
