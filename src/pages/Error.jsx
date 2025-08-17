import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Link } from "react-router-dom";
import styles from "../styles/Error.module.css";
import useSound from "use-sound";
import click1 from "../assets/sound/button_click_1.mp3";

// image imports
import grassBg from "/grass-bg.png";
import grass0 from "/src/assets/home-parallax/grass-0.png";
import myself2 from "../assets/myself-2.png";

export default function Error() {
  const [click1_play] = useSound(click1);
  return (
    <>
      <div className="parallax-container">
        <Parallax
          className="animation"
          pages={1.3}
          style={{ top: "0", left: "0" }}
        >
          {/* Grass BG */}
          <ParallaxLayer offset={0} speed={0}>
            <div
              className="animation_layer parallax"
              style={{ height: "300vh" }}>
                <div className={styles["grass-bg"]}>
              <img
                src={grassBg}
                className={styles["grass-bg-img"]}
              />

                </div>
            </div>
            
          </ParallaxLayer>

          {/* Hill */}
          <ParallaxLayer offset={0.7} speed={0.9}>
            <div className="animation_layer parallax {styles['grass-0']}">
              <img
                src={grass0}
                className={styles["grass-0-img"]}
              />
            </div>
          </ParallaxLayer>

          {/* Error Message Section */}
          <ParallaxLayer offset={0.3} speed={1}>
            <div className="animation_layer parallax">
              <div className={styles["error-wrapper"]}>
                <div>
                  <h2 className={styles["header-text"]}>Error 404</h2>
                  <p className={styles["subheader-text"]}>
                    Page not found :(
                  </p>
                  <br />
                  <Link
                    to="/"
                    className={styles["link-text"]}
                    onClick={click1_play}
                  >
                    <h3>Back to Home</h3>
                  </Link>
                </div>
                <img className={styles["myself-2"]} src={myself2} />
              </div>
            </div>
          </ParallaxLayer>

          {/* Footer */}
          <ParallaxLayer offset={1} speed={0.5} style={{ zIndex: 10 }}>
            <div className={styles['footer']}>
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
