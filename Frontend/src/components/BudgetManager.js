import React from "react";

export default function BudgetManager({ budget, totalExpense, setBudget }) {
  const pct = budget > 0 ? Math.min(100, (totalExpense / budget) * 100) : 0;

  return (
    <div className="finance-card">
      <div className="finance-field">
        <label>Budget Limit (₹)</label>
        <input
          type="number"
          value={budget}
          onChange={(e) => setBudget(+e.target.value)}
        />
      </div>

      <div className="finance-progress">
        <div
          className={`finance-progress-bar ${
            pct >= 100 ? "finance-danger" : ""
          }`}
          style={{ width: `${pct}%` }}
        />
      </div>

      <p className="finance-muted">
        Spent ₹{totalExpense} • {pct.toFixed(1)}% used
      </p>
    </div>
  );
}
