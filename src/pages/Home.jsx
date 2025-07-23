import React from 'react'
import '../styles/Home.css'

export default function Home() {
  return (
    <>
        <div className="header">
            <h1 id="header-text">Hello! <br/>I'm Kayla</h1>
            <img src="/src/assets/icons/arrow-down.png"/>
        </div>

        <div className="greeting-card">
            <div className="greeting-box">
                <h2>Nice to Meet You!</h2>
                <p>I’m Kayla Sison, a Computer Science & Statistics student at the University of Illinois Urbana-Champaign.
                    <br />
                    <br />
                    My tech interests include software engineering, web development, and UI/UX design.</p>
                <div className="button-section">
                    <a className="button-1" href="https://www.linkedin.com/in/kayla-sison126/" target="_blank" rel="noopener noreferrer">
                        <img src="/src/assets/icons/Linkedin.png"></img>
                        <span>Connect on LinkedIn!</span>
                    </a>
                    <a className="button-1" href="" target="_blank" rel="noopener noreferrer">
                        <img src="/src/assets/icons/external-link.png"></img>
                        <span>View my Resume!</span>
                    </a>
                </div>
            </div>
            <img className="myself-1" src="/src/assets/myself-1.png"></img>
        </div>
    </>
  )
}
