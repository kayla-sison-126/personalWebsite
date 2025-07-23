import React from 'react'
import '../styles/Footer.css'

export default function Footer() {
  return (
    <div className="footer">
        <img src="/src/assets/footer-bg.png" alt="Footer Background" className="footer-img" />
        <div className="footer-content">
            <p>Created by Kayla Sison</p>
            <div className="link-section">
                <a href="https://www.linkedin.com/in/kayla-sison126/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="https://github.com/kayla-sison-126" target="_blank" rel="noopener noreferrer">GitHub</a>
            </div>
        </div>
    </div>
  )
}
