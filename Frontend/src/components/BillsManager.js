import React, { useState, useMemo } from "react";

export default function BillsManager({ bills, setBills }) {
  const [name, setName] = useState("");
  const [amount, setAmount] = useState("");
  const [dueDay, setDueDay] = useState("");

  function addBill(e) {
    e.preventDefault();
    if (!name || amount <= 0 || dueDay < 1 || dueDay > 28) return;

    setBills((prev) => [
      ...prev,
      {
        id: Date.now(),
        name,
        amount: +amount,
        dueDay: +dueDay,
        paid: false,
      },
    ]);

    setName("");
    setAmount("");
    setDueDay("");
  }

  function togglePaid(id) {
    setBills((prev) =>
      prev.map((b) => (b.id === id ? { ...b, paid: !b.paid } : b))
    );
  }

  function removeBill(id) {
    setBills((prev) => prev.filter((b) => b.id !== id));
  }

  // 🔔 Upcoming bills (next 7 days)
  const upcomingBills = useMemo(() => {
    const today = new Date();
    return bills
      .filter((b) => !b.paid)
      .map((b) => {
        const due = new Date(today.getFullYear(), today.getMonth(), b.dueDay);
        const diff = (due - today) / (1000 * 60 * 60 * 24);
        return { ...b, diff: Math.ceil(diff) };
      })
      .filter((b) => b.diff >= 0 && b.diff <= 7)
      .sort((a, b) => a.diff - b.diff);
  }, [bills]);

  return (
    <div className="finance-card">
      <h3 className="finance-title">Bills & Reminders</h3>

      {/* ADD BILL */}
      <form
        className="finance-form"
        onSubmit={addBill}
        style={{ gridTemplateColumns: "2fr 1fr 1fr auto" }}
      >
        <input
          placeholder="Bill name (e.g. Electricity)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Due day (1–28)"
          value={dueDay}
          onChange={(e) => setDueDay(e.target.value)}
          required
        />
        <button className="finance-btn finance-btn-primary">Add</button>
      </form>

      {/* UPCOMING ALERTS */}
      <div style={{ marginTop: 14 }}>
        <b className="finance-muted">Upcoming (next 7 days)</b>

        {upcomingBills.length === 0 ? (
          <div className="finance-muted" style={{ marginTop: 8 }}>
            No upcoming bills 🎉
          </div>
        ) : (
          upcomingBills.map((b) => (
            <div
              key={b.id}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px 0",
                borderBottom: "1px dashed #e5e7eb",
                alignItems: "center",
              }}
            >
              <div>
                <b>{b.name}</b>
                <div className="finance-muted">Due in {b.diff} day(s)</div>
              </div>

              <div style={{ display: "flex", gap: 10 }}>
                <span>₹{b.amount}</span>
                <button
                  onClick={() => togglePaid(b.id)}
                  className="finance-btn finance-btn-outline"
                >
                  {b.paid ? "Unpaid" : "Paid"}
                </button>
                <button
                  onClick={() => removeBill(b.id)}
                  style={{
                    background: "transparent",
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  ❌
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
