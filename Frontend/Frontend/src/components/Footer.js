import React from "react";
import "../styles/App.css";

function Footer() {
  return (
    <footer className="footer">
      <p>© {new Date().getFullYear()} LifeSync. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
