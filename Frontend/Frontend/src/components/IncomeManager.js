import React from "react";

export default function IncomeManager({ finance, setFinance }) {
  return (
    <div className="finance-card">

      <div className="finance-field">
        <label>Monthly Salary (₹)</label>
        <input
          type="number"
          value={finance.monthly_income}
          onChange={(e) =>
            setFinance((f) => ({
              ...f,
              monthly_income: +e.target.value,
            }))
          }
        />
      </div>

      <div className="finance-field">
        <label>Extra Income (₹)</label>
        <input
          type="number"
          value={finance.extra_income}
          onChange={(e) =>
            setFinance((f) => ({
              ...f,
              extra_income: +e.target.value,
            }))
          }
        />
      </div>
    </div>
  );
}
