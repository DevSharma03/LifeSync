import React, { useMemo, useState, useRef, useEffect } from "react";
import "../styles/Finance.css";

import IncomeManager from "../components/IncomeManager";
import BudgetManager from "../components/BudgetManager";
import ExpenseTracker from "../components/ExpenseTracker";
import SavingsManager from "../components/SavingsManager";
import EmergencyFund from "../components/EmergencyFund";

import incomeImg from "../assets/finance_incomemanager.png";
import budgetImg from "../assets/finance_budgetplanner.png";
import expenseImg from "../assets/finance_expenceTracker.png";
import savingsImg from "../assets/finance_saving.png";
import emergencyImg from "../assets/finance_energencefund.png";

/* ================= CHAT ICON ================= */
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

/* ================= INFO CARD ================= */
const FinanceInfoCard = ({
  title,
  description,
  imageUrl,
  buttonText,
  onOpen,
}) => (
  <div className="finance_info_card">
    <div className="finance_info_text">
      <p className="finance_info_title">{title}</p>
      <p className="finance_info_desc">{description}</p>
      <button className="finance_btn_outline" onClick={onOpen}>
        {buttonText}
      </button>
    </div>
    <div
      className="finance_info_image"
      style={{ backgroundImage: `url('${imageUrl}')` }}
    />
  </div>
);

/* ================= MODAL (SAVE + CLOSE RESTORED) ================= */
const Modal = ({ title, onClose, children }) => (
  <div className="modal_overlay" onClick={onClose}>
    <div className="modal_container" onClick={(e) => e.stopPropagation()}>
      <div className="modal_header">
        <h3>{title}</h3>
        <button className="modal_close_btn" onClick={onClose}>
          ✕
        </button>
      </div>

      <div className="modal_body">{children}</div>

      <div className="modal_footer">
        <button className="modal_btn_secondary" onClick={onClose}>
          Close
        </button>
        <button className="modal_btn_primary" onClick={onClose}>
          Save
        </button>
      </div>
    </div>
  </div>
);

/* ================= MAIN ================= */
export default function Finance() {
  const [expenses, setExpenses] = useState([]);
  const [showChat, setShowChat] = useState(false);

  /* ===== Finance State ===== */
  const [finance, setFinance] = useState({
    monthly_income: 50000,
    extra_income: 5000,
    budget_limit: 30000,
    savings_goal: 20000,
    planned_saving: 1000,
    emergency_fund_target: 150000,
    emergency_fund_current: 40000,
    monthly_debt_payment: 8000,
  });


  /* ===== Chat State ===== */
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const chatBoxRef = useRef(null);

  /* ================= MODALS ================= */
  const [showIncome, setShowIncome] = useState(false);
  const [showBudget, setShowBudget] = useState(false);
  const [showExpense, setShowExpense] = useState(false);
  const [showSavings, setShowSavings] = useState(false);
  const [showEmergency, setShowEmergency] = useState(false);

  /* ================= DERIVED ================= */

  const totalExpense = useMemo(
    () => expenses.reduce((sum, e) => sum + e.amount, 0),
    [expenses]
  );

  const savedTillNow = useMemo(() => {
    const totalIncome = finance.monthly_income + finance.extra_income;
    return Math.max(0, totalIncome - totalExpense);
  }, [finance, totalExpense]);

  const totalIncome = finance.monthly_income + finance.extra_income;


  /* ================= CHAT EFFECT ================= */
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages, loading]);

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
          finance_context: {
            ...finance,
            total_income: totalIncome,
            total_expense: totalExpense,
          },
          expenses,
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

  return (
    <div className="finance_container">
      <main className="finance_main">
        <h1 className="finance_title">My Finance</h1>

        <section>
          <h2 className="finance_section_title">Income & Earnings</h2>
          <FinanceInfoCard
            title="Income Manager"
            description="Track your salary and additional income sources."
            imageUrl={incomeImg}
            buttonText="💰 Manage Income"
            onOpen={() => setShowIncome(true)}
          />
        </section>

        <section>
          <h2 className="finance_section_title">Budget Planning</h2>
          <FinanceInfoCard
            title="Monthly Budget"
            description="Set spending limits and stay in control."
            imageUrl={budgetImg}
            buttonText="📊 Plan Budget"
            onOpen={() => setShowBudget(true)}
          />
        </section>

        <section>
          <h2 className="finance_section_title">Expense Tracking</h2>
          <FinanceInfoCard
            title="Expense Tracker"
            description="Log and analyze your expenses."
            imageUrl={expenseImg}
            buttonText="🧾 Track Expenses"
            onOpen={() => setShowExpense(true)}
          />
        </section>

        <section>
          <h2 className="finance_section_title">Savings & Goals</h2>
          <FinanceInfoCard
            title="Savings Planner"
            description="Plan savings and reach goals faster."
            imageUrl={savingsImg}
            buttonText="🏦 Manage Savings"
            onOpen={() => setShowSavings(true)}
          />
        </section>

        <section>
          <h2 className="finance_section_title">Emergency Fund</h2>
          <FinanceInfoCard
            title="Emergency Fund"
            description="Build a safety net for emergencies."
            imageUrl={emergencyImg}
            buttonText="🚨 Emergency Fund"
            onOpen={() => setShowEmergency(true)}
          />
        </section>
      </main>

      {/* ================= FLOATING CHAT ================= */}
      <button className="finance_chat_fab" onClick={() => setShowChat(true)}>
        <ChatIcon />
      </button>

      {showChat && (
        <div className="finance_chat_overlay">
          <div className="finance_chat_panel">
            <header>
              <h4>💬 Finance Assistant</h4>
              <button onClick={() => setShowChat(false)}>✕</button>
            </header>

            <div className="finance_chat_messages" ref={chatBoxRef}>
              {messages.map((m, i) => (
                <div key={i} className={`chat_${m.sender}`}>
                  {m.text}
                </div>
              ))}
              {loading && <div className="chat_bot">Typing...</div>}
            </div>

            <footer>
              <textarea
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                placeholder="Ask about budget, savings, expenses..."
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button onClick={sendMessage}>Send</button>
            </footer>
          </div>
        </div>
      )}

      {/* ================= MODALS ================= */}
      {showIncome && (
        <Modal title="Income" onClose={() => setShowIncome(false)}>
          <IncomeManager finance={finance} setFinance={setFinance} />
        </Modal>
      )}

      {showBudget && (
        <Modal title="Monthly Budget" onClose={() => setShowBudget(false)}>
          <BudgetManager
            budget={finance.budget_limit}
            totalExpense={totalExpense}
            setBudget={(v) => setFinance((f) => ({ ...f, budget_limit: v }))}
          />
        </Modal>
      )}

      {showExpense && (
        <Modal title="Expense Tracker" onClose={() => setShowExpense(false)}>
          <ExpenseTracker expenses={expenses} setExpenses={setExpenses} />
        </Modal>
      )}

      {showSavings && (
        <Modal title="Savings Manager" onClose={() => setShowSavings(false)}>
          <SavingsManager
            finance={finance}
            savedTillNow={savedTillNow}
            setFinance={setFinance}
          />
        </Modal>
      )}


      {showEmergency && (
        <Modal title="Emergency Fund" onClose={() => setShowEmergency(false)}>
          <EmergencyFund finance={finance} setFinance={setFinance} />
        </Modal>
      )}
    </div>
  );
}
