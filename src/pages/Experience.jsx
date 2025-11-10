import { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../styles/Standard.css";
import styles from "../styles/Experience.module.css";
import useSound from "use-sound";
import click1 from "../assets/sound/button_click_1.mp3";
import click2 from "../assets/sound/button_click_2.mp3";

// image imports
import grass2 from "/src/assets/home-parallax/grass-2.png";
import grass1 from "/src/assets/home-parallax/grass-1.png";
import arrowDown from "/src/assets/icons/arrow-down.png";
import myself1 from "/src/assets/myself-1.png";
import sign from "/src/assets/sign.png";
import apple from "/src/assets/apple.png";

export default function Experience() {
  // sfx
  const [click1_play] = useSound(click1);
  const [click2_play] = useSound(click2);

  // modal content
  const titles = [
    // 0
    "2023 - Starting my Undergrad at University of Illinois Chicago"
    ,
    // 1
    "2023 - Early Leadership for Art Collective"
    ,
    // 2
    "2024 - Innovation Intern at OSF HealthCare"
    ,
    // 3
    "2024 - Executive Board for Women in Computer Science"
    ,
    // 4
    "2024 - Web Development Courses with CodePath"
    ,
    // 5
    "2025 - Web Developer for Dulce Tentaciones"
    ,
    // 6
    "2025 - Capital One & AbbVie Summer Programs"
    ,
    // 7
    "2025 - Transferring to the University of Illinois at Urbana Champaign"
    ,
    // 8
    "2025 - WiCS Mentorship"
    ,
  ]

  const text = [
    // 0
    "I began my undergraduate journey in Fall 2023 at the University of Illinois Chicago (UIC), majoring in Computer Science. During my time at UIC, I maintained a 4.0 GPA and was recognized on the Dean's List throughout 2023 and 2024. The two years I spent at UIC allowed me to explore both technical coursework and creative interests while laying the groundwork for future opportunities in tech and design."
    ,
    // 1
    "Outside of academics, I broke into a leadership role early by joining Art Collective at UIC as their Graphic Designer during my freshman year. As part of the Executive Board, I led the club's social media presence, managing an Instagram account and designing 20+ promotional graphics and event flyers, combining creative direction with accessibility and visual impact. My role also involved close collaboration with other board members and club participants, ensuring clear communication and cohesive branding across all club initiatives."
    ,
    // 2
    "In May 2024, I interned at OSF HealthCare as part of the Break Through Tech Sprinternship Program. I worked in a team to conceptualize and design a clinic feedback web application focused on surveying patient experience and displaying feedback data to the company. My role involved UI/UX design using Figma and Canva, creating user journey maps, and prototyping interactive features for both patients and clinic staff by creating engaging feedback methods and compelling data visualizations."
    ,
    // 3
    "In the summer of 2024, I became an Executive Board member of Women in Computer Science (WiCS), serving as UI Designer and Outreach Officer. Throughout my time with WiCS, I redesigned the organization's website, hosted a hands-on UI/UX workshop, and managed content across social platforms, boosting community engagement and increasing our Instagram following by 18%. I highly enjoyed supporting the organization's mission, which is to support women pursuing a career in technology, and although I am no longer an Executive Board member, I still interact with WiCS as much as I can, and have plans to become a mentor in their mentorship program."
    ,
    // 4
    "To strengthen my technical foundation, I completed CodePath's Web Development 101 and 102 courses during my sophomore year. These intensive semester-long programs introduced me to full-stack development with a focus on HTML, CSS, JavaScript, and React. WEB 102 also introduced me to Supabase and API integration. These courses provided a weekly project-based experience and reinforced best practices in building responsive, modern web applications."
    ,
    // 5
    "In the summer of 2025, I co-founded and built a website for Dulce Tentaciones, a local small bakery business. Working in a team of three, we developed the site from scratch using React. My main goal was business solutions, which included implementing a mailing list with Brevo's RESTful API and integrating a Sanity CMS for simple content updates, so that non-developers can update menu items with ease. I also designed custom email templates and automation workflows for improved customer engagement."
    ,
    // 6
    "In Summer 2025, I was selected for two competitive programs which highly deepened my experience in business strategy, product thinking, and enterprise technology. As a scholar in the Capital One Launchpad: Legacy & Leadership Program, I collaborated with a multidisciplinary team to tackle a case study comparing $10K vs. $20K credit line strategies. I contributed a user profile, journey map, and product mock-up, and I led the design of our final slide deck, which we presented to Capital One senior leaders during our capstone presentation. In August, I participated in the AbbVie Business Technology Solutions Externship, where I worked on a cross-functional team to address a business-technology challenge, explored key enterprise functions, and connected with professionals across departments. Both experiences enhanced my skills in critical thinking, communication, and problem-solving at the intersection of tech, business, and design."
    ,
    // 7
    "In Fall 2025, I transferred to the University of Illinois Urbana-Champaign to pursue a B.S. in Computer Science and Statistics. I made this decision to challenge myself in a more competitive academic environment and to gain access to one of the top-ranked computer science programs in the country. UIUC's rigorous curriculum, research opportunities, and strong tech community aligned with my goals for both personal growth and long-term career development."
    ,
    // 8
    "I became a mentor for Women in Computer Science in September 2025. I coach my mentee by providing resume reviews and career resources, as well as hosting mentorship meetings bi-weekly. Currently, I am coaching my mentee through a fullstack project alongside another mentor-mentee pairing. The project uses Django and React, and will ultimately be a gamified messaging website."
    ,
  ]

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
          pages={5.2}
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
          <ParallaxLayer offset={3} speed={1.3}>
            <div className="animation_layer parallax" id="standard-grass-1">
              <img
                src={grass1}
                className="parallax-grass"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={2} speed={1.3}>
            <div className="animation_layer parallax" id="standard-grass-1">
              <img
                src={grass1}
                className="parallax-grass"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1.9} speed={1.3}>
            <div className="animation_layer parallax" id="standard-grass-1">
              <img
                src={grass1}
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
          <ParallaxLayer offset={0.25} speed={1.5}>
            <div className="animation_layer parallax">
              <div className="standard-header">
                <h2 className="header-text">Experience</h2>
                <img src={arrowDown} />
              </div>
            </div>
          </ParallaxLayer>

          {/* intro timeline section */}
          <ParallaxLayer offset={1.0} speed={0.9}>
            <div className="animation_layer parallax">
              <div className={styles["intro-timeline-container"]}>
                <div className={styles["intro-timeline"]}>
                  <div className={styles["intro-timeline-left"]}>
                    <h2>Click the apples on the path to read my story in detail!</h2>
                    <div className={styles["myself"]}>
                      <img src={myself1} />
                    </div>
                  </div>

                  <div className={styles["intro-timeline-right"]}>
                    <h2>. . . or click on the sign to view my resume!</h2>
                    <a
                      // className="sign-button"
                      href="resume_8_13_25.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={click2_play}
                    >
                      <img src={sign} />
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
                        C150,4900 50,5000 100,5100
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
                      src={apple}
                      className={styles[("timeline-event", "flip-apple")]}
                      onClick={() => handleOpen(titles[0], text[0])}
                    />
                    <p>{titles[0]}</p>
                  </div>
                  <div className={styles["timeline-event-left"]}>
                    <p>{titles[1]}</p>
                    <img
                      src={apple}
                      className={styles["timeline-event"]}
                      onClick={() =>
                        handleOpen(titles[1], text[1])
                      }
                    />
                  </div>
                  <div className={styles["timeline-event-right"]}>
                    <img
                      src={apple}
                      className={styles[("timeline-event", "flip-apple")]}
                      onClick={() =>
                        handleOpen(titles[2], text[2])
                      }
                    />
                    <p>{titles[2]}</p>
                  </div>
                  <div className={styles["timeline-event-left"]}>
                    <p>{titles[3]}</p>
                    <img
                      src={apple}
                      className={styles["timeline-event"]}
                      onClick={() =>
                        handleOpen(titles[3], text[3])
                      }
                    />
                  </div>
                  <div className={styles["timeline-event-right"]}>
                    <img
                      src={apple}
                      className={styles[("timeline-event", "flip-apple")]}
                      onClick={() =>
                        handleOpen(titles[4], text[4])
                      }
                    />
                    <p>{titles[4]}</p>
                  </div>
                  <div className={styles["timeline-event-left"]}>
                    <p>{titles[5]}</p>
                    <img
                      src={apple}
                      className={styles["timeline-event"]}
                      onClick={() =>
                        handleOpen(titles[5], text[5])
                      }
                    />
                  </div>
                  <div className={styles["timeline-event-right"]}>
                    <img
                      src={apple}
                      className={styles[("timeline-event", "flip-apple")]}
                      onClick={() =>
                        handleOpen(titles[6], text[6])
                      }
                    />
                    <p>{titles[6]}</p>
                  </div>
                  <div className={styles["timeline-event-left"]}>
                    <p>{titles[7]}</p>
                    <img
                      src={apple}
                      className={styles["timeline-event"]}
                      onClick={() =>
                        handleOpen(titles[7], text[7])
                      }
                    />
                  </div>
                  <div className={styles["timeline-event-right"]}>
                    <img
                      src={apple}
                      className={styles[("timeline-event", "flip-apple")]}
                      onClick={() =>
                        handleOpen(titles[8], text[8])
                      }
                    />
                    <p>{titles[8]}</p>
                  </div>
                </div>

                <h2 className={styles["timeline-footer"]}>. . . and many more apples to come!</h2>
              </div>
            </div>
          </ParallaxLayer>

          {/* Footer */}
          <ParallaxLayer offset={4.9} speed={0.5} style={{ zIndex: 10 }}>
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
