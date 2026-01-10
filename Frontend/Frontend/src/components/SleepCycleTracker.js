import React, { useState, useEffect } from "react";
import "../styles/SleepCycleTracker.css";

const KEY = "sleep_logs";

export default function SleepCycleTracker({ onClose }) {
  const [logs, setLogs] = useState(JSON.parse(localStorage.getItem(KEY)) || []);
  const [sleep, setSleep] = useState("");
  const [wake, setWake] = useState("");

  useEffect(() => {
    localStorage.setItem(KEY, JSON.stringify(logs.slice(-7)));
  }, [logs]);

  const today = new Date().toISOString().split("T")[0];

  const addLog = () => {
    setLogs([...logs, { date: today, sleep, wake }]);
  };

  const hours = (s, w) => {
    const start = new Date(`1970-01-01T${s}`);
    let end = new Date(`1970-01-01T${w}`);
    if (end < start) end.setDate(end.getDate() + 1);
    return ((end - start) / 36e5).toFixed(1);
  };

  return (
    <div className="sleep_overlay">
      <div className="sleep_modal">
        <h3>Sleep Tracker</h3>

        <label>Sleep Time</label>
        <input type="time" onChange={(e) => setSleep(e.target.value)} />

        <label>Wake Time</label>
        <input type="time" onChange={(e) => setWake(e.target.value)} />

        <button onClick={addLog}>Save</button>

        <div className="sleep_week">
          {logs.map((l) => (
            <div key={l.date} className="sleep_day">
              <span>{l.date}</span>
              <div
                className="sleep_bar"
                style={{ height: `${hours(l.sleep, l.wake) * 10}px` }}
              />
              <span>{hours(l.sleep, l.wake)}h</span>
            </div>
          ))}
        </div>

        <button className="sleep_close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
}
