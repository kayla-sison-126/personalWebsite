import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import useSound from "use-sound";
import bossa from "../assets/sound/bossa.mp3";
import click1 from "../assets/sound/button_click_1.mp3";
import click2 from "../assets/sound/button_click_2.mp3";

export default function NavBar() {
  // resize navbar for mobile layout
  const navCenterRef = useRef(null);
  const hamburgerRef = useRef(null);

  useEffect(() => {
    function handleResize() {
      if (!navCenterRef.current || !hamburgerRef.current) return;

      if (window.innerWidth <= 950) {
        navCenterRef.current.classList.add("hide");
        hamburgerRef.current.classList.remove("hide");
      } else {
        navCenterRef.current.classList.remove("hide");
        hamburgerRef.current.classList.add("hide");
      }
    }

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // sound design
  // *** bgm:
  const toggleBgmRef = useRef(false);
  const [bgm_play, { stop: bgm_stop }] = useSound(bossa, {
    interrupt: true,
    loop: true,
  });
  const bgm_sound = () => {
    if (toggleBgmRef.current) {
      click1_play();
      bgm_stop();
      toggleBgmRef.current = false;
    } else {
      click2_play();
      bgm_play();
      toggleBgmRef.current = true;
    }
  };

  // *** buttons:
  const [click1_play] = useSound(click1);
  const [click2_play] = useSound(click2);

  return (
    <>
      <header>
        <div className="navbarInner">
          {/* LEFT: logo/my name */}
          <div className="logo">
            <Link to="/">
              <h2 onClick={click2_play}>kayla sison</h2>
            </Link>
          </div>

          {/* MIDDLE: navigation links */}
          <div className="nav-center-wrapper" ref={navCenterRef}>
            <nav>
              <ul>
                <li>
                  <button onClick={click1_play}>
                    <Link to="/about">about</Link>
                  </button>
                </li>
                <li>
                  <button onClick={click1_play}>
                    <Link to="/experience">experience</Link>
                  </button>
                </li>
                <li>
                  <button onClick={click1_play}>
                    <Link to="/projects">projects</Link>
                  </button>
                </li>
                <li>
                  <button onClick={click1_play}>
                    <Link to="/blog">blog</Link>
                  </button>
                </li>
              </ul>
            </nav>
          </div>

          {/* RIGHT: icons */}
          <div className="icons">
            <ul>
              <li>
                <button onClick={bgm_sound}>
                  <img
                    src="/src/assets/icons/music-icon.png"
                    alt="Music"
                    className="navIcon"
                  />
                </button>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/kayla-sison126/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/src/assets/icons/linkedin-icon.png"
                    alt="LinkedIn"
                    className="navIcon"
                    onClick={click2_play}
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/kayla-sison-126"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/src/assets/icons/github-icon.png"
                    alt="GitHub"
                    className="navIcon"
                    onClick={click2_play}
                  />
                </a>
              </li>
              {/* <li>
                    <a href="/#contact-section">
                        <img src="/src/assets/icons/mail-icon.png" alt="Contact" />
                    </a>
                    </li> */}
              <li>
                <div className="hamburger" ref={hamburgerRef}>
                  <button>
                    <img
                      src="/src/assets/icons/hamburgerMenu.png"
                      alt="Contact"
                      className="hamburgerIcon"
                      onClick={click2_play}
                    />
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
