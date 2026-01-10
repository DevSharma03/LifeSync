import { useEffect, useState, useCallback } from "react";
import "../styles/Mind.css";

/* ================= CONSTANTS ================= */

const DURATION = 5 * 60;

const QUOTES = [
  "Breathe in calm, breathe out tension.",
  "Nothing else matters in this moment.",
  "Let your thoughts pass like clouds.",
  "You are safe. You are present.",
  "Peace begins with a single breath.",
];

const STORAGE_KEY = "mind_activity_log";
const JOURNAL_KEY = "mind_gratitude_journal";

/* ================= HELPERS ================= */

const todayKey = () => new Date().toISOString().split("T")[0];
const getLog = () => JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];
const saveLog = (log) => localStorage.setItem(STORAGE_KEY, JSON.stringify(log));
const getJournal = () => JSON.parse(localStorage.getItem(JOURNAL_KEY)) || [];
const saveJournalStore = (data) =>
  localStorage.setItem(JOURNAL_KEY, JSON.stringify(data));

/* ================= COMPONENT ================= */

export default function EmotionalPlanModal({ open, plan, onClose }) {
  /* ================= STATE ================= */
  const [secondsLeft, setSecondsLeft] = useState(DURATION);
  const [running, setRunning] = useState(false);
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [log, setLog] = useState([]);

  // Journal state
  const [journalView, setJournalView] = useState("write");
  const [journalTitle, setJournalTitle] = useState("");
  const [journalText, setJournalText] = useState("");
  const [journalMood, setJournalMood] = useState("happy");
  const [journalEntries, setJournalEntries] = useState([]);
  const [saved, setSaved] = useState(false);

  /* ================= LOAD / RESET ================= */

  useEffect(() => {
    if (!open) return;

    setSecondsLeft(DURATION);
    setRunning(false);
    setQuoteIndex(0);
    setLog(getLog());

    setJournalView("write");
    setJournalTitle("");
    setJournalText("");
    setJournalMood("happy");
    setJournalEntries(getJournal());
    setSaved(false);
  }, [open, plan]);

  /* ================= TIMER ================= */

  useEffect(() => {
    if (!running || secondsLeft <= 0) return;
    const timer = setInterval(() => setSecondsLeft((s) => s - 1), 1000);
    return () => clearInterval(timer);
  }, [running, secondsLeft]);

  /* ================= QUOTES ================= */

  useEffect(() => {
    if (!running) return;
    const q = setInterval(
      () => setQuoteIndex((i) => (i + 1) % QUOTES.length),
      6000
    );
    return () => clearInterval(q);
  }, [running]);

  /* ================= COMPLETE SESSION ================= */

  const completeSession = useCallback(() => {
    const today = todayKey();
    const updated = [...log];
    const idx = updated.findIndex((d) => d.date === today);

    if (idx === -1) updated.push({ date: today, [plan]: true });
    else updated[idx][plan] = true;

    saveLog(updated);
    setLog(updated);
    setRunning(false);
  }, [log, plan]);

  useEffect(() => {
    if (secondsLeft === 0 && running) completeSession();
  }, [secondsLeft, running, completeSession]);

  /* ================= GRATITUDE ================= */

  const saveJournal = () => {
    if (!journalText.trim()) return;

    const entry = {
      id: Date.now(),
      title: journalTitle || "Untitled Entry",
      text: journalText,
      mood: journalMood,
      date: new Date().toLocaleDateString(),
    };

    const updated = [entry, ...journalEntries];
    setJournalEntries(updated);
    saveJournalStore(updated);

    setJournalTitle("");
    setJournalText("");
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
      setJournalView("history");
    }, 1200);
  };

  const deleteEntry = (id) => {
    const updated = journalEntries.filter((e) => e.id !== id);
    setJournalEntries(updated);
    saveJournalStore(updated);
  };

  /* ================= DERIVED ================= */

  const last7 = [...Array(7)].map((_, i) => {
    const d = new Date();
    d.setDate(d.getDate() - (6 - i));
    const key = d.toISOString().split("T")[0];
    return log.find((l) => l.date === key && l[plan]);
  });

  const formatTime = () =>
    `${String(Math.floor(secondsLeft / 60)).padStart(2, "0")}:${String(
      secondsLeft % 60
    ).padStart(2, "0")}`;

  if (!open || !plan) return null;

  /* ================= UI ================= */

  return (
    <div className="mind_modal_overlay">
      <div
        className={`mind_modal_container ${
          plan === "Mood-Based Sleep" ? "sleep" : "calm"
        }`}
      >
        {/* ===== SLEEP ===== */}
        {plan === "Mood-Based Sleep" && (
          <>
            <h2>Sleep Ritual</h2>
            <p className="mind_modal_instruction">
              Let go. No effort needed. Just rest.
            </p>
            <div className="sleep_orb" />
            <p className="mind_quote">Close your eyes. Breathe naturally.</p>
            <button className="mind_btn ghost" onClick={onClose}>
              Exit Sleep
            </button>
          </>
        )}

        {/* ===== GRATITUDE JOURNAL ===== */}
        {plan === "Gratitude Journaling" && (
          <>
            <h2>Gratitude Journal</h2>

            <div className="journal_tabs">
              <button
                className={journalView === "write" ? "active" : ""}
                onClick={() => setJournalView("write")}
              >
                New Entry
              </button>
              <button
                className={journalView === "history" ? "active" : ""}
                onClick={() => setJournalView("history")}
              >
                History ({journalEntries.length})
              </button>
            </div>

            {saved ? (
              <div className="journal_saved">✨ Positivity recorded</div>
            ) : journalView === "write" ? (
              <>
                <div className="journal_moods">
                  {["happy", "calm", "neutral", "low"].map((m) => (
                    <button
                      key={m}
                      className={journalMood === m ? "active" : ""}
                      onClick={() => setJournalMood(m)}
                    >
                      {m}
                    </button>
                  ))}
                </div>

                <input
                  className="mind_journal_input"
                  placeholder="Entry title"
                  value={journalTitle}
                  onChange={(e) => setJournalTitle(e.target.value)}
                />

                <textarea
                  className="mind_journal_input"
                  placeholder="Today I am grateful for…"
                  value={journalText}
                  onChange={(e) => setJournalText(e.target.value)}
                />

                <button className="mind_btn soft" onClick={saveJournal}>
                  Save Entry
                </button>
              </>
            ) : (
              <div className="mind_journal_list">
                {journalEntries.length === 0 && <p>No entries yet.</p>}
                {journalEntries.map((e) => (
                  <div key={e.id} className="mind_journal_item">
                    <div>
                      <strong>{e.title}</strong>
                      <span>{e.date}</span>
                      <p>{e.text}</p>
                    </div>
                    <button onClick={() => deleteEntry(e.id)}>✕</button>
                  </div>
                ))}
              </div>
            )}

            <button className="mind_btn ghost" onClick={onClose}>
              Close
            </button>
          </>
        )}

        {/* ===== MEDITATION / BREATHING ===== */}
        {(plan === "Meditation" || plan === "Breathing Exercises") && (
          <>
            <h2>{plan}</h2>

            <p className="mind_modal_instruction">
              {plan === "Breathing Exercises"
                ? "Inhale… Hold… Exhale…"
                : "Sit comfortably. Focus on your breath."}
            </p>

            <div className="mind_timer">
              <svg viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" className="bg" />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  className="progress"
                  style={{
                    strokeDashoffset: 283 - (283 * secondsLeft) / DURATION,
                  }}
                />
              </svg>
              <span>{formatTime()}</span>
            </div>

            {running && <p className="mind_quote">{QUOTES[quoteIndex]}</p>}

            {!running && secondsLeft === DURATION && (
              <button
                className="mind_btn soft"
                onClick={() => setRunning(true)}
              >
                Start
              </button>
            )}

            <div className="mind_streak">
              {last7.map((done, i) => (
                <span key={i} className={done ? "active" : ""} />
              ))}
            </div>

            <button className="mind_btn ghost" onClick={onClose}>
              Close
            </button>
          </>
        )}
      </div>
    </div>
  );
}
