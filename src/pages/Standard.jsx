// ---------------------------
// A standard page template
// (ex: used for the About pg)
// ---------------------------

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../styles/Standard.css";
// import styles from "../styles/Standard.module.css";
// import useSound from "use-sound";
// import click1 from "../assets/sound/button_click_1.mp3";
// import click2 from "../assets/sound/button_click_2.mp3";

// image imports
import grass2 from "/src/assets/home-parallax/grass-2.png";
import grass1 from "/src/assets/home-parallax/grass-1.png";
import grass0 from "/src/assets/home-parallax/grass-0.png";
import arrowDown from "/src/assets/icons/arrow-down.png";

export default function Standard() {
  // sfx
  // const [click1_play] = useSound(click1);
  // const [click2_play] = useSound(click2);

  return (
    <>
      <div className="parallax-container">
        <Parallax
          className="animation"
          pages={3.6}
          style={{ top: "0", left: "0" }}
        >
          {/* Sky BG */}
          <ParallaxLayer offset={0} speed={0}>
            <div
              className="animation_layer parallax"
              id="sky-bg"
              style={{ height: "100vh" }}
            />
          </ParallaxLayer>

          {/* Hills */}
          <ParallaxLayer offset={0.18} speed={1.1}>
            <div className="animation_layer parallax" id="standard-grass-2">
              <img
                src={grass2}
                className="parallax-grass"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.16} speed={1.3}>
            <div className="animation_layer parallax" id="standard-grass-1">
              <img
                src={grass1}
                className="parallax-grass"
              />
            </div>
          </ParallaxLayer>

          {/* Intro Text */}
          <ParallaxLayer offset={0.2} speed={1.5}>
            <div className="animation_layer parallax">
              <div className="standard-header">
                <h2 className="header-text">Title</h2>
                <img src={arrowDown} />
              </div>
            </div>
          </ParallaxLayer>

          {/* more grass */}
          <ParallaxLayer offset={2.3} speed={0.9}>
            <div className="animation_layer parallax" id="grass-0">
              <img
                src={grass0}
                className="parallax-grass"
              />
            </div>
          </ParallaxLayer>

          {/* Coming Soon Section - TEMPORARY */}
          <ParallaxLayer offset={0.9} speed={1.5}>
            <div className="animation_layer parallax">
              <h2 className="coming-soon-text">coming soon!</h2>
            </div>
          </ParallaxLayer>

          {/* Footer */}
          <ParallaxLayer offset={3.0} speed={0.5} style={{ zIndex: 10 }}>
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
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}
