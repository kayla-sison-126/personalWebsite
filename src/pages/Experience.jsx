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
    "2023 - Leadership Committee for Art Collective"
    ,
    // 2
    "2024 - Product Design Intern at OSF HealthCare"
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
    // 9
    "2026 - Software Engineering Intern at AbbVie"
    ,
    // 10
    "2026 - UI/UX Designer for HackIllinois"
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
    // 9
    "In Summer 2026, I returned to AbbVie as a Software Engineering Intern on the enterprise design system team. I engineered a custom React diagramming component using Claude Code and the Figma MCP, bridging design and code so teams could dynamically and collaboratively render text-based diagrams. Leveraging AI-assisted workflows, I helped upgrade, test, and ship 7 core design system components, including dropdown filtering, dynamic color modes, and new component properties, directly impacting web and mobile interfaces used by 57,000+ employees. I also led a technical discovery evaluation for a Storybook MCP integration, synthesized feedback from 5+ user interviews on Dovetail into design system updates, and spearheaded an internal communication series to drive adoption of overlooked features."
    ,
    // 10
    "Since July 2026, I've served on the HackIllinois committee as a UI/UX Designer, helping shape the experience for one of the Midwest's largest collegiate hackathons. I developed low-fidelity web and mobile registration interfaces in Figma, defining component layouts and user flows, and co-created a centralized design system with the team, establishing color tokens, typography, and component properties. I also analyzed survey feedback to map navigation paths and eliminate usability bottlenecks in our registration flow, working to make the event more accessible for future hackers."
    ,
  ]

  // pairs each title with its text and alternates which side of the
  // trunk it branches off of
  const experiences = titles.map((title, i) => ({
    title,
    text: text[i],
    side: i % 2 === 0 ? "right" : "left",
  }));

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
          pages={5.7}
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
                  <h2 className={styles["intro-heading"]}>
                    Click the apples on the timeline to discover my achievements! 
                  </h2>

                  {/* <div className={styles["intro-character"]}>
                    <img src={myself1} alt="Illustration of Kayla" />
                  </div> */}

                  {/* <span
                    className={styles["intro-trunk-stub"]}
                    aria-hidden="true"
                  /> */}

                  <a
                    className={styles["resume-cta"]}
                    href="resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={click2_play}
                  >
                    <img src={sign} alt="" />
                    <span>. . . or click the sign to view my resume!</span>
                  </a>
                </div>
              </div>
            </div>
          </ParallaxLayer>

          {/* timeline section */}
          <ParallaxLayer offset={1.4} speed={0.9}>
            <div className="animation_layer parallax">
              <div className={styles["timeline-section"]}>
                <div className={styles["timeline-stack"]}>
                  {/* Trunk that grows down the page; each apple below buds off of it */}
                  <div className={styles["timeline-trunk"]} />

                  {/* Timeline Events */}
                  <div className={styles["timeline-rows"]}>
                  {experiences.map((exp, i) => (
                    <div
                      key={i}
                      className={`${styles["timeline-row"]} ${
                        exp.side === "right"
                          ? styles["row-right"]
                          : styles["row-left"]
                      }`}
                    >
                      <div className={styles["row-content"]}>
                        {exp.side === "left" && (
                          <p className={styles["timeline-text"]}>
                            {exp.title}
                          </p>
                        )}
                        <span className={styles["apple-wrap"]}>
                          <img
                            src={apple}
                            alt=""
                            className={`${styles["timeline-apple"]} ${
                              exp.side === "right"
                                ? styles["apple-tilt-right"]
                                : styles["apple-tilt-left"]
                            }`}
                            onClick={() => handleOpen(exp.title, exp.text)}
                          />
                        </span>
                        {exp.side === "right" && (
                          <p className={styles["timeline-text"]}>
                            {exp.title}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                  </div>
                </div>

                <h2 className={styles["timeline-footer"]}>. . . and many more apples to come!</h2>
              </div>
            </div>
          </ParallaxLayer>

          {/* Footer */}
          <ParallaxLayer offset={5} speed={0.5} style={{ zIndex: 10 }}>
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
              <p>© Kayla Sison</p>
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