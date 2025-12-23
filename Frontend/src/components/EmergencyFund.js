import React from "react";

export default function EmergencyFund({ finance, setFinance }) {
  const target = finance.emergency_fund_target || 0;
  const current = finance.emergency_fund_current || 0;

  const pct = target > 0 ? Math.min(100, (current / target) * 100) : 0;

  const remaining = Math.max(0, target - current);

  return (
    <div className="finance-card">
      <div className="finance-field">
        <label>Target Amount (₹)</label>
        <input
          type="number"
          value={target}
          onChange={(e) =>
            setFinance((f) => ({
              ...f,
              emergency_fund_target: +e.target.value,
            }))
          }
        />
      </div>

      <div className="finance-field">
        <label>Saved Amount (₹)</label>
        <input
          type="number"
          value={current}
          onChange={(e) =>
            setFinance((f) => ({
              ...f,
              emergency_fund_current: +e.target.value,
            }))
          }
        />
      </div>

      {/* ===== SUMMARY ===== */}
      <div className="finance-summary">
        <div>
          <b>Saved</b>
          <div>₹{current}</div>
        </div>
        <div>
          <b>Remaining</b>
          <div>₹{remaining}</div>
        </div>
      </div>

      {/* ===== PROGRESS ===== */}
      <div className="finance-progress">
        <div className="finance-progress-bar" style={{ width: `${pct}%` }} />
      </div>

      <p className="finance-muted">{pct.toFixed(1)}% of emergency fund ready</p>
    </div>
  );
}
