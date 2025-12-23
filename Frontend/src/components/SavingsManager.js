import React from "react";

export default function SavingsManager({ finance, savedTillNow, setFinance }) {
  const planned = finance.planned_saving || 0;

  const effectiveSaved = Math.max(0, savedTillNow);
  const progress =
    planned > 0 ? Math.min(100, (effectiveSaved / planned) * 100) : 0;

  const remaining = Math.max(0, planned - effectiveSaved);

  return (
    <div className="finance-card">
      <div className="finance-field">
        <label>Monthly Saving Goal (₹)</label>
        <input
          type="number"
          value={finance.savings_goal}
          onChange={(e) =>
            setFinance((f) => ({
              ...f,
              savings_goal: +e.target.value,
            }))
          }
        />
      </div>

      <div className="finance-field">
        <label>Planned Savings This Month (₹)</label>
        <input
          type="number"
          value={finance.planned_saving}
          onChange={(e) =>
            setFinance((f) => ({
              ...f,
              planned_saving: +e.target.value,
            }))
          }
        />
      </div>

      {/* ===== SUMMARY ===== */}
      <div className="finance-summary">
        <div>
          <b>Saved Till Now</b>
          <div>₹{effectiveSaved}</div>
        </div>
        <div>
          <b>Remaining</b>
          <div>₹{remaining}</div>
        </div>
      </div>

      {/* ===== PROGRESS ===== */}
      <div className="finance-progress">
        <div
          className="finance-progress-bar"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="finance-muted">
        {progress.toFixed(1)}% of planned savings achieved
      </p>
    </div>
  );
}
