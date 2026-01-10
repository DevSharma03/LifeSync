import React, { useMemo, useState } from "react";

const CATEGORIES = [
  "Food",
  "Groceries",
  "Rent",
  "Travel",
  "Utilities",
  "Shopping",
  "Entertainment",
  "Health",
  "Education",
  "Others",
];

export default function ExpenseTracker({ expenses, setExpenses }) {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");

  /* ================= ANALYTICS ================= */
  const totalExpense = useMemo(
    () => expenses.reduce((s, e) => s + e.amount, 0),
    [expenses]
  );

  const categoryMap = useMemo(() => {
    const map = {};
    expenses.forEach((e) => {
      map[e.category] = (map[e.category] || 0) + e.amount;
    });
    return map;
  }, [expenses]);

  const topCategory =
    Object.entries(categoryMap).sort((a, b) => b[1] - a[1])[0]?.[0] || "—";

  function addExpense(e) {
    e.preventDefault();
    if (!amount || !category) return;

    setExpenses((prev) => [
      ...prev,
      {
        id: Date.now(),
        title,
        amount: +amount,
        category,
        date: new Date().toISOString().slice(0, 10),
      },
    ]);

    setTitle("");
    setAmount("");
    setCategory("");
  }

  function removeExpense(id) {
    setExpenses((prev) => prev.filter((e) => e.id !== id));
  }

  return (
    <div className="finance-card">
      <h3 className="finance-title">Expense Tracker</h3>

      {/* ================= INSIGHTS ================= */}
      <div className="expense-insights">
        <div className="expense-metric">
          <span>Total Spent</span>
          <b>₹{totalExpense}</b>
        </div>

        <div className="expense-metric">
          <span>Top Category</span>
          <b>{topCategory}</b>
        </div>

        <div className="expense-circle">
          <svg viewBox="0 0 36 36">
            <path
              className="circle-bg"
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <path
              className="circle-progress"
              strokeDasharray={`${Math.min(
                100,
                totalExpense / 1000 * 100
              )}, 100`}
              d="M18 2.0845
                 a 15.9155 15.9155 0 0 1 0 31.831
                 a 15.9155 15.9155 0 0 1 0 -31.831"
            />
            <text x="18" y="20.35" className="circle-text">
              ₹{totalExpense}
            </text>
          </svg>
        </div>
      </div>

      {/* ================= CATEGORY BREAKDOWN ================= */}
      <div className="expense-bars">
        {Object.entries(categoryMap).map(([cat, val]) => (
          <div key={cat} className="expense-bar-row">
            <span>{cat}</span>
            <div className="expense-bar">
              <div
                className="expense-bar-fill"
                style={{
                  width: `${(val / totalExpense) * 100 || 0}%`,
                }}
              />
            </div>
            <span>₹{val}</span>
          </div>
        ))}
      </div>

      {/* ================= ADD EXPENSE ================= */}
      <form className="finance-form" onSubmit={addExpense}>
        <input
          placeholder="Expense name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="">Select category</option>
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>

        <button className="finance-btn-primary">Add</button>
      </form>

      {/* ================= LOGS ================= */}
      <div className="expense-log-title">Expense Logs</div>

      <table className="finance-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Category</th>
            <th>Date</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {expenses.length === 0 ? (
            <tr>
              <td colSpan="5">No expenses added</td>
            </tr>
          ) : (
            expenses.map((e) => (
              <tr key={e.id}>
                <td>{e.title}</td>
                <td>{e.category}</td>
                <td>{e.date}</td>
                <td>₹{e.amount}</td>
                <td>
                  <button
                    className="expense-delete-btn"
                    onClick={() => removeExpense(e.id)}
                  >
                    ❌
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

