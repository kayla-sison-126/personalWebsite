import { React, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../styles/NavBar.css";

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

//   const navCenter = document.querySelector(".nav-center-wrapper");
//   const hamburger = document.querySelector(".hamburger");

//   function handleResize() {
//     if (window.innerWidth <= 950) {
//       if (!navCenter.classList.contains("hide")) {
//           navCenter.classList.add("hide");
//       }
//       if (hamburger.classList.contains("hide")) {
//           hamburger.classList.remove("hide");
//       }
//     } else {
//       if (navCenter.classList.contains("hide")) {
//           navCenter.classList.remove("hide");
//       }
//       if (!hamburger.classList.contains("hide")) {
//           hamburger.classList.add("hide");
//       }
//     }
//   }

//   handleResize(); // Initial check
//   window.addEventListener("resize", handleResize); // Listen for resize

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
          <div className="nav-center-wrapper" ref={navCenterRef}>
            <nav>
              <ul>
                <li>
                  <button>
                    <Link to="/about">about</Link>
                  </button>
                </li>
                <li>
                  <button>
                    <Link to="/experience">experience</Link>
                  </button>
                </li>
                <li>
                  <button>
                    <Link to="/projects">projects</Link>
                  </button>
                </li>
                <li>
                  <button>
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
                <Link to="">
                  <img
                    src="/src/assets/icons/music-icon.png"
                    alt="Music"
                    className="navIcon"
                  />
                </Link>
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
                  <a href="">
                    <img
                      src="/src/assets/icons/hamburgerMenu.png"
                      alt="Contact"
                      className="hamburgerIcon"
                    />
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
