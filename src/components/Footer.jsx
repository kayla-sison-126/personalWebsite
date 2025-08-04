import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      {/* <img src="/src/assets/footer-bg.png" alt="Footer Background" className="footer-img" />
        <div className="footer-content">
            <p>Created by Kayla Sison</p>
            <div className="link-section">
                <a href="https://www.linkedin.com/in/kayla-sison126/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/kayla-sison-126" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </div> */}

      <div className="custom-footer">
        <div className="footer-wave">
          <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
            <path
              d="M0,80 C360,160 1080,0 1440,80 L1440,0 L0,0 Z"
              fill="#779E4B"
            />
          </svg>
        </div>
        <p>Created by Kayla Sison</p>
        <div className="footer-links">
          <a href="https://linkedin.com/in/kayla-sison126">LinkedIn</a>
          <a href="https://github.com/kayla-sison-126">GitHub</a>
        </div>
        <br />
        <p>© 2025 Kayla Sison</p>
      </div>
    </div>
  );
}
