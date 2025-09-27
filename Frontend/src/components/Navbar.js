import React from "react";
import { useNavigate } from "react-router-dom";
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
  { key: "dashboard", label: "Dashboard", Icon: FaTachometerAlt, path: "/home" },
  { key: "health", label: "Health", Icon: FaHeartbeat, path: "/health" },
  { key: "finance", label: "Finance", Icon: FaWallet, path: "/finance" },
  { key: "productivity", label: "Productivity", Icon: FaTasks, path: "/productivity" },
  { key: "mind", label: "Emotional (Mind)", Icon: FaBrain, path: "/mind" },
  { key: "ai", label: "AI Counsellor", Icon: FaRobot, path: "/ai" },
  { key: "profile", label: "Profile", Icon: FaUser, path: "/profile" },
];

export default function Navbar({ active = "dashboard" }) {
  const navigate = useNavigate();

  return (
    <aside className="sidebar">
      <div className="profile-section">
        <FaUserCircle className="profile-icon" />
        <div className="profile-name">LifeSync User</div>
      </div>

      <ul className="nav-links" role="menu">
        {navItems.map(({ key, label, Icon, path }) => (
          <li
            key={key}
            role="menuitem"
            tabIndex={0}
            className={`nav-item ${active === key ? "active" : ""}`}
            onClick={() => navigate(path)}
            onKeyDown={(e) => { if (e.key === "Enter") navigate(path); }}
          >
            <Icon className="icon" />
            <span className="label">{label}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}


