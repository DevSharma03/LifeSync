// src/components/Navbar.js
import React from "react";
import {
  FaTachometerAlt,
  FaHeartbeat,
  FaWallet,
  FaTasks,
  FaBrain,
  FaUser,
  FaRobot,
  FaUserCircle,
} from "react-icons/fa";
import "../styles/Navbar.css";

const navItems = [
  { key: "dashboard", label: "Dashboard", Icon: FaTachometerAlt },
  { key: "health", label: "Health", Icon: FaHeartbeat },
  { key: "finance", label: "Finance", Icon: FaWallet },
  { key: "productivity", label: "Productivity", Icon: FaTasks },
  { key: "emotional", label: "Emotional (Mind)", Icon: FaBrain },
  { key: "ai", label: "AI Counsellor", Icon: FaRobot },
  { key: "profile", label: "Profile", Icon: FaUser },
];

export default function Navbar({ active = "dashboard", setActive = () => {} }) {
  return (
    <aside className="sidebar">
      <div className="profile-section">
        <FaUserCircle className="profile-icon" />
        <div className="profile-name">LifeSync User</div>
      </div>

      <ul className="nav-links" role="menu">
        {navItems.map(({ key, label, Icon }) => (
          <li
            key={key}
            role="menuitem"
            tabIndex={0}
            className={`nav-item ${active === key ? "active" : ""}`}
            onClick={() => setActive(key)}
            onKeyDown={(e) => { if (e.key === "Enter") setActive(key); }}
          >
            <Icon className="icon" />
            <span className="label">{label}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}
