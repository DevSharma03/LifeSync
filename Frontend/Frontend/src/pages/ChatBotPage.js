import React, { useState, useRef, useEffect } from "react";
import { FaPaperPlane, FaRobot, FaUser } from "react-icons/fa";
import "../styles/ChatBotPage.css";

// Comprehensive list of suggested questions
const ALL_SUGGESTED_QUESTIONS = [
  // Health & Fitness
  "How can I improve my sleep quality?",
  "What's a good workout routine for beginners?",
  "How much water should I drink daily?",
  "What are some healthy breakfast ideas?",
  "How can I increase my daily step count?",
  "What exercises can I do at home?",
  "How do I track my calorie intake?",
  "What are the benefits of regular exercise?",
  "How can I improve my posture?",
  "What vitamins should I take daily?",
  
  // Mental & Emotional Well-being
  "Give me tips for managing stress",
  "How can I practice mindfulness?",
  "What are some breathing exercises for anxiety?",
  "How do I improve my emotional well-being?",
  "What are signs of burnout?",
  "How can I build better habits?",
  "What's a good meditation routine?",
  "How do I deal with negative thoughts?",
  "What are some ways to boost my mood?",
  "How can I improve my self-confidence?",
  
  // Finance
  "Help me create a budget plan",
  "How should I start saving money?",
  "What are smart investment strategies?",
  "How can I reduce my expenses?",
  "What's the 50/30/20 budgeting rule?",
  "How do I create an emergency fund?",
  "What are good financial goals to set?",
  "How can I track my spending?",
  "What should I know about credit scores?",
  "How do I save for retirement?",
  
  // Productivity
  "How can I be more productive?",
  "What's a good time management technique?",
  "How do I overcome procrastination?",
  "What are effective goal-setting strategies?",
  "How can I improve my focus?",
  "What's the Pomodoro technique?",
  "How do I prioritize my tasks?",
  "What are some productivity apps I should use?",
  "How can I avoid distractions while working?",
  "How do I create a daily routine?",
  
  // General Lifestyle
  "How can I achieve work-life balance?",
  "What's a healthy morning routine?",
  "How do I build stronger relationships?",
  "What are some self-care activities?",
  "How can I be more organized?",
  "What are tips for better communication?",
];

// Function to get random questions
const getRandomQuestions = (count = 3) => {
  const shuffled = [...ALL_SUGGESTED_QUESTIONS].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const ChatBotPage = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [suggestedQuestions, setSuggestedQuestions] = useState([]);
  const chatBoxRef = useRef(null);

  // Set random suggested questions on component mount
  useEffect(() => {
    setSuggestedQuestions(getRandomQuestions(4));
  }, []);

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (chatBoxRef.current) {
      chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const sendMessage = async () => {
    if (!userInput.trim()) return;

    const newMessage = { sender: "user", text: userInput };
    setMessages((prev) => [...prev, newMessage]);
    setUserInput("");
    setLoading(true);

    try {
      const response = await fetch("http://127.0.0.1:8000/query", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user_query: userInput,
          messages: messages,
        }),
      });

      const data = await response.json();

      // Extract nl_response safely
      let botText = "No response received.";
      if (data && data.response && data.response.workers_output) {
        const workersOutput = data.response.workers_output;
        // Get first worker key
        const firstWorkerKey = Object.keys(workersOutput)[0];
        if (firstWorkerKey && workersOutput[firstWorkerKey].nl_response) {
          botText = workersOutput[firstWorkerKey].nl_response;
        }
      }

      const botMessage = {
        sender: "bot",
        text: botText,
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          sender: "bot",
          text: "⚠️ Error connecting to the server. Please make sure the backend is running.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="chat-page-container">
      <div className="chat-content-wrapper">
        <div className="chat-header-section">
          <div className="chat-header-icon">
            <FaRobot />
          </div>
          <div className="chat-header-text">
            <h1 className="chat-main-title">AI Counsellor</h1>
            <p className="chat-subtitle">
              Your personalized lifestyle companion powered by AI
            </p>
          </div>
        </div>

        <div className="chat-card">
          <div className="chat-messages-container" ref={chatBoxRef}>
            {messages.length === 0 && (
              <div className="chat-welcome">
                <div className="welcome-icon">
                  <FaRobot />
                </div>
                <h2>Welcome to LifeSync AI Counsellor</h2>
                <p>
                  Ask me anything about your health, fitness, productivity,
                  finances, or emotional well-being.
                </p>
                <div className="suggestion-chips">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      className="suggestion-chip"
                      onClick={() => setUserInput(question)}
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`chat-message ${
                  msg.sender === "user" ? "user-message" : "bot-message"
                }`}
              >
                <div className="message-avatar">
                  {msg.sender === "user" ? <FaUser /> : <FaRobot />}
                </div>
                <div className="message-content">
                  <div className="message-bubble">{msg.text}</div>
                </div>
              </div>
            ))}

            {loading && (
              <div className="chat-message bot-message">
                <div className="message-avatar">
                  <FaRobot />
                </div>
                <div className="message-content">
                  <div className="message-bubble loading-bubble">
                    <div className="typing-indicator">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="chat-input-container">
            <div className="chat-input-wrapper">
              <input
                type="text"
                className="chat-input"
                placeholder="Type your message..."
                value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button
                className="chat-send-button"
                onClick={sendMessage}
                disabled={!userInput.trim() || loading}
              >
                <FaPaperPlane />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatBotPage;
