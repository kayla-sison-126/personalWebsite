import { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../styles/Standard.css";
import styles from "../styles/Experience.module.css";
import useSound from "use-sound";
import click1 from "../assets/sound/button_click_1.mp3";
import click2 from "../assets/sound/button_click_2.mp3";

export default function Experience() {
  // sfx
  const [click1_play] = useSound(click1);
  const [click2_play] = useSound(click2);

  // modal/pop-up
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalText, setModalText] = useState("");

  const handleOpen = (title, text) => {
    click2_play();
    setModalTitle(title);
    setModalText(text);
    setModalOpen(true);
  };

  const handleClose = () => {
    click1_play();
    setModalOpen(false);
  };

  return (
    <>
      <div className="parallax-container">
        <Parallax
          className="animation"
          pages={5}
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
                src="/src/assets/home-parallax/grass-2.png"
                className="parallax-grass"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={3} speed={1.3}>
            <div className="animation_layer parallax" id="standard-grass-1">
              <img
                src="/src/assets/home-parallax/grass-1.png"
                className="parallax-grass"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={1.3}>
            <div className="animation_layer parallax" id="standard-grass-1">
              <img
                src="/src/assets/home-parallax/grass-1.png"
                className="parallax-grass"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.9} speed={1.3}>
            <div className="animation_layer parallax" id="standard-grass-1">
              <img
                src="/src/assets/home-parallax/grass-1.png"
                className="parallax-grass"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.16} speed={1.3}>
            <div className="animation_layer parallax" id="standard-grass-1">
              <img
                src="/src/assets/home-parallax/grass-1.png"
                className="parallax-grass"
              />
            </div>
          </ParallaxLayer>

          {/* Intro Text */}
          <ParallaxLayer offset={0.25} speed={1.5}>
            <div className="animation_layer parallax">
              <div className="standard-header">
                <h2 className="header-text">Experience</h2>
                <img src="/src/assets/icons/arrow-down.png" />
              </div>
            </div>
          </ParallaxLayer>

          {/* intro timeline section */}
          <ParallaxLayer offset={1.0} speed={0.9}>
            <div className="animation_layer parallax">
              <div className={styles["intro-timeline-container"]}>
                <div className={styles["intro-timeline"]}>
                  <div className={styles["intro-timeline-left"]}>
                    <h2>Click on the apples to read my story in detail!</h2>
                    <div className={styles["myself"]}>
                      <img src="/src/assets/myself-1.png" />
                    </div>
                  </div>

                  <div className={styles["intro-timeline-right"]}>
                    <h2>. . . or click on the sign to view my resume!</h2>
                    <a
                      // className="sign-button"
                      href="KaylaSison_resume_7-28-25.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={click2_play}
                    >
                      <img src="/src/assets/sign.png" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </ParallaxLayer>

          {/* timeline section */}
          <ParallaxLayer offset={1.6} speed={0.9}>
            <div className="animation_layer parallax">
              <div className={styles["snake-timeline-container"]}>
                {/* Path SVG */}
                <div className={styles["snake-path-container"]}>
                  <svg
                    className={styles["snake-path"]}
                    viewBox="0 0 200 4000"
                    preserveAspectRatio="xMidYMid meet"
                    d="M100,0 ...rest of path..."
                    stroke="#F3E5B1"
                    fill="transparent"
                    strokeWidth="160"
                    strokeLinecap="round"
                  >
                    <path
                      d="
                        M140,0
                        C150,140 50,200 100,300
                        C150,400 50,500 100,600
                        C150,700 50,800 100,900
                        C150,1000 50,1100 100,1200
                        C150,1300 50,1400 100,1500
                        C150,1600 50,1700 100,1800
                        C150,1900 50,2000 100,2100
                        C150,2200 50,2300 100,2400
                        C150,2500 50,2600 100,2700
                        C150,2800 50,2900 100,3000
                        C150,3100 50,3200 100,3300
                        C150,3400 50,3500 100,3600
                        C150,3700 50,3800 100,3900
                        C150,4000 50,4100 100,4200
                        C150,4300 50,4400 100,4500
                        C150,4600 50,4700 100,4800
                        // C150,4900 50,5000 100,5100
                      "
                      stroke="#F3E5B1"
                      fill="transparent"
                      strokeWidth="160"
                    />
                  </svg>
                </div>
                {/* Timeline Events */}
                <div className={styles["timeline-event-container"]}>
                  <div className={styles["timeline-event-right"]}>
                    <img
                      src="/src/assets/apple.png"
                      className={styles[("timeline-event", "flip-apple")]}
                      onClick={() => handleOpen("2019", "Started first job.")}
                    />
                    <p>- first year of uni</p>
                  </div>
                  <div className={styles["timeline-event-left"]}>
                    <p>- second year of uni</p>
                    <img
                      src="/src/assets/apple.png"
                      className={styles["timeline-event"]}
                      onClick={() =>
                        handleOpen("2020", "Created personal site.")
                      }
                    />
                  </div>
                  <div className={styles["timeline-event-right"]}>
                    <img
                      src="/src/assets/apple.png"
                      className={styles[("timeline-event", "flip-apple")]}
                      // style={{ top: "930px" }}
                      onClick={() =>
                        handleOpen("2020", "Created personal site.")
                      }
                    />
                    <p>- first year of uni</p>
                  </div>
                  <div className={styles["timeline-event-left"]}>
                    <p>- second year of uni</p>
                    <img
                      src="/src/assets/apple.png"
                      className={styles["timeline-event"]}
                      // style={{ top: "1230px" }}
                      onClick={() =>
                        handleOpen("2020", "Created personal site.")
                      }
                    />
                  </div>
                  <div className={styles["timeline-event-right"]}>
                    <img
                      src="/src/assets/apple.png"
                      className={styles[("timeline-event", "flip-apple")]}
                      // style={{ top: "1530px" }}
                      onClick={() =>
                        handleOpen("2020", "Created personal site.")
                      }
                    />
                    <p>- first year of uni</p>
                  </div>
                  <div className={styles["timeline-event-left"]}>
                    <p>- second year of uni</p>
                    <img
                      src="/src/assets/apple.png"
                      className={styles["timeline-event"]}
                      // style={{ top: "1830px" }}
                      onClick={() =>
                        handleOpen("2020", "Created personal site.")
                      }
                    />
                  </div>
                  <div className={styles["timeline-event-right"]}>
                    <img
                      src="/src/assets/apple.png"
                      className={styles[("timeline-event", "flip-apple")]}
                      // style={{ top: "2130px" }}
                      onClick={() =>
                        handleOpen("2020", "Created personal site.")
                      }
                    />
                    <p>- first year of uni</p>
                  </div>
                  <div className={styles["timeline-event-left"]}>
                    <p>- second year of uni</p>
                    <img
                      src="/src/assets/apple.png"
                      className={styles["timeline-event"]}
                      onClick={() =>
                        handleOpen("2018", "Graduated from university.")
                      }
                    />
                  </div>
                </div>

                <h2>. . . and many more apples to come!</h2>
              </div>
            </div>
          </ParallaxLayer>

          {/* Footer */}
          <ParallaxLayer offset={4.6} speed={0.5} style={{ zIndex: 10 }}>
            <div className="custom-footer">
              <div className="footer-wave">
                <svg viewBox="0 0 1440 150" preserveAspectRatio="none">
                  <path
                    d="M0,80 C360,160 1080,0 1440,80 L1440,0 L0,0 Z"
                    fill="#82AA52"
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

        {/* modal */}
        {modalOpen && (
          <div className={styles["modal"]} onClick={handleClose}>
            <div
              className={styles["modal-content"]}
              onClick={(e) => e.stopPropagation()}
            >
              <span className={styles["close"]} onClick={handleClose}>
                &times;
              </span>
              <h3>{modalTitle}</h3>
              <p>{modalText}</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
