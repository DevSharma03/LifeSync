import { useState, useEffect, useRef } from "react";
import "../styles/Mind.css";
import MentalHealthTestModal from "../components/MentalHealthTestModal";
import EmotionalPlanModal from "../components/EmotionalPlanModal";

import mindSentimentImg from "../assets/mind_sentimentalAnalysis.png";
import mindDepressionImg from "../assets/mind_depression.png";
import mindAnxietyImg from "../assets/mind_anxiety.png";
import mindStressImg from "../assets/mind_stess&burnout.png";
import mindTraumaImg from "../assets/mind_childhoodTrauma.png";
import mindMeditaionImg from "../assets/mind_meditation.png";
import mindBreathingImg from "../assets/mind_breathingExercise.png";
import mindJournelsImg from "../assets/mind_gratitudeJournaling.png";
import mindSleepImg from "../assets/mind_sleep.png";

/* ================= ICON ================= */
const ChatIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    fill="currentColor"
    viewBox="0 0 256 256"
  >
    <path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Z" />
  </svg>
);

/* ================= FEATURE CARDS ================= */

const FeatureCard = ({ title, description, imageUrl, onStart }) => (
  <div className="mind_card">
    <div className="mind_card_content">
      <p className="mind_card_title">{title}</p>
      <p className="mind_card_description">{description}</p>
      <button className="mind_btn" onClick={onStart}>
        Start
      </button>
    </div>

    <div
      className="mind_card_image"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    />
  </div>
);

const FeatureCardTest = ({ title, description, imageUrl, onStart }) => (
  <div className="mind_card">
    <div className="mind_card_content">
      <p className="mind_card_title">{title}</p>
      <p className="mind_card_description">{description}</p>
      <button className="mind_btn" onClick={onStart}>
        Start Quiz
      </button>
    </div>

    <div
      className="mind_card_image"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    />
  </div>
);

/* ================= MAIN PAGE ================= */

export default function MoodDetectionContent() {
  const [activeTest, setActiveTest] = useState(null);
  const [activePlan, setActivePlan] = useState(null);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatBoxRef = useRef(null);

  /* ===== Auto-scroll chat ===== */
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages, loading]);

  /* ===== Chat ===== */
  const sendMessage = async () => {
    if (!userInput.trim()) return;

    setMessages((prev) => [...prev, { sender: "user", text: userInput }]);
    setUserInput("");
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_query: userInput,
          messages,
        }),
      });

      const data = await response.json();

      let botText = "No response received.";
      if (data?.response?.workers_output) {
        const key = Object.keys(data.response.workers_output)[0];
        botText = data.response.workers_output[key]?.nl_response || botText;
      }

      setMessages((prev) => [...prev, { sender: "bot", text: botText }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Backend not reachable." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  /* ===== DATA ===== */

  const emotionalPlans = [
    {
      title: "Meditation",
      description: "Guided sessions to calm your mind.",
      imageUrl: mindMeditaionImg,
    },
    {
      title: "Breathing Exercises",
      description: "Regulate emotions with breathing.",
      imageUrl: mindBreathingImg,
    },
    {
      title: "Gratitude Journaling",
      description:
        "Build positivity daily. Reflecting on small wins rewires your brain for happiness. Take a moment to log what went well today.",
      imageUrl: mindJournelsImg,
    },
    {
      title: "Mood-Based Sleep",
      description: "Improve sleep quality.",
      imageUrl: mindSleepImg,
    },
  ];

  const moodQuizzes = [
    {
      title: "Depression Screening (PHQ-9)",
      key: "depression",
      description: "Screen for symptoms of depression.",
      imageUrl: mindDepressionImg,
    },
    {
      title: "Anxiety Test (GAD-7)",
      key: "anxiety",
      description: "Assess anxiety severity.",
      imageUrl: mindAnxietyImg,
    },
    {
      title: "Stress & Burnout Assessment",
      key: "stress",
      description: "Measure stress and burnout.",
      imageUrl: mindStressImg,
    },
    {
      title: "Childhood Trauma (ACE)",
      key: "trauma",
      description: "Understand childhood impact.",
      imageUrl: mindTraumaImg,
    },
  ];

  return (
    <div className="mind_container">
      <main className="mind_main">
        <h1 className="mind_main_title">Mood Detection</h1>

        {/* ===== Sentiment ===== */}
        <section>
          <h2 className="mind_section_title">Daily Emotional Insights</h2>

          <div className="mind_info">
            <div className="mind_info_text">
              <p className="mind_info_title">Sentiment Analysis</p>
              <p className="mind_info_description">
                Understand your daily emotional trends and mood balance.
              </p>
              <button
                className="mind_btn"
                style={{ width: "200px" }}
                onClick={() => setActiveTest("sentiment")}
              >
                Start Sentiment Test
              </button>
            </div>

            <div
              className="mind_info_image"
              style={{ backgroundImage: `url(${mindSentimentImg})` }}
            />
          </div>
        </section>

        {/* ===== Emotional Plans ===== */}
        <section>
          <h2 className="mind_section_title">Personalized Emotional Plans</h2>
          <div className="mind_card_list">
            {emotionalPlans.map((p, i) => (
              <FeatureCard
                key={i}
                {...p}
                onStart={() => setActivePlan(p.title)}
              />
            ))}
          </div>
        </section>

        {/* ===== Mood Quizzes ===== */}
        <section style={{ marginTop: "40px" }}>
          <h2 className="mind_section_title">Mood Quizzes</h2>
          <div className="mind_card_list">
            {moodQuizzes.map((q, i) => (
              <FeatureCardTest
                key={i}
                {...q}
                onStart={() => setActiveTest(q.key)}
              />
            ))}
          </div>
        </section>
      </main>

      {/* ===== Modals ===== */}
      <EmotionalPlanModal
        open={!!activePlan}
        plan={activePlan}
        onClose={() => setActivePlan(null)}
      />

      <MentalHealthTestModal
        open={!!activeTest}
        testKey={activeTest}
        onClose={() => setActiveTest(null)}
      />

      {/* ===== FAB ===== */}
      <button className="mind_fab" onClick={() => setChatOpen((p) => !p)}>
        <ChatIcon />
      </button>

      {/* ===== Chat ===== */}
      {chatOpen && (
        <div className="mind_chat_panel">
          <div className="mind_chat_header">
            <span>💬 Mind Assistant</span>
            <button onClick={() => setChatOpen(false)}>✕</button>
          </div>

          <div className="mind_chat_body" ref={chatBoxRef}>
            {messages.map((m, i) => (
              <div
                key={i}
                className={`mind_chat_msg ${
                  m.sender === "user" ? "user" : "bot"
                }`}
              >
                {m.text}
              </div>
            ))}

            {loading && <div className="mind_chat_msg bot">Thinking…</div>}
          </div>

          <div className="mind_chat_input">
            <input
              type="text"
              placeholder="Share what you feel…"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
}
