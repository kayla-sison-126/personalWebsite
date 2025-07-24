import { React } from 'react'
import { Link  } from "react-router-dom"
import '../styles/NavBar.css'

export default function NavBar() {

  return (
    <>
        <header>
            <div className="navbarInner">

            {/* LEFT: logo/my name */}
            <div className="logo">
                <Link to="/">
                    <h2>kayla sison</h2>
                </Link>
            </div>

            {/* MIDDLE: navigation links */}
            <div className="nav-center-wrapper">
                <nav>
                    <ul>
                    <li><button><Link to="/about">about</Link></button></li>
                    <li><button><Link to="/experience">experience</Link></button></li>
                    <li><button><Link to="/projects">projects</Link></button></li>
                    <li><button><Link to="/blog">blog</Link></button></li>
                    </ul>
                </nav>
            </div>

            {/* RIGHT: icons */}
            <div className="icons">
                <ul>
                    <li>
                    <Link to="">
                        <img src="/src/assets/icons/music-icon.png" alt="Music" />
                    </Link>
                    </li>
                    <li>
                    <a href="https://www.linkedin.com/in/kayla-sison126/" target="_blank" rel="noopener noreferrer">
                        <img src="/src/assets/icons/linkedin-icon.png" alt="LinkedIn" />
                    </a>
                    </li>
                    <li>
                    <li>
                    <a href="https://github.com/kayla-sison-126" target="_blank" rel="noopener noreferrer">
                        <img src="/src/assets/icons/github-icon.png" alt="GitHub" />
                    </a>
                    </li>
                    {/* <a href="/#contact-section">
                        <img src="/src/assets/icons/mail-icon.png" alt="Contact" />
                    </a> */}
                    </li>
                </ul>
                </div>
            </div>
        </header>
    </>
  )
}
