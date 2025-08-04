import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../styles/Home.css";
import useSound from "use-sound";
import click1 from "../assets/sound/button_click_1.mp3";
import click2 from "../assets/sound/button_click_2.mp3";
import emailjs from "@emailjs/browser";
import ShinyText from "../assets/ShinyText";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function Home() {
  const form = useRef();

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  // contact form logic
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_wgrybwy", "template_98bk95z", form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          alert("Message sent!");
          form.current.reset();
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Oops! Something went wrong.");
        }
      );
  };

  // sfx
  // *** buttons:
  const [click1_play] = useSound(click1);
  const [click2_play] = useSound(click2);

  return (
    <>
      <div className="parallax-container">
        <Parallax
          className="animation"
          pages={3.6}
          style={{ top: "0", left: "0" }}
        >
          {/* Sky BG & Intro Text */}
          <ParallaxLayer offset={0} speed={0}>
            <div
              className="animation_layer parallax"
              id="sky-bg"
              style={{ height: "100vh" }}
            />
          </ParallaxLayer>

          
          <ParallaxLayer offset={0} speed={1.2}>
            <div
              className="animation_layer parallax"
            >
              <div className="header">
                <h1 id="header-text">
                  Hello, <br />
                  I'm Kayla!
                </h1>
                <img src="/src/assets/icons/arrow-down.png" />
              </div>
            </div>
          </ParallaxLayer>

          {/* Bird */}
          <ParallaxLayer offset={0.15} speed={0.1}>
            <div className="animation_layer parallax" id="bird">
              <img
                src="/src/assets/home-parallax/bird.png"
                className="parallax-bird"
              />
            </div>
          </ParallaxLayer>

          {/* Clouds */}
          <ParallaxLayer offset={0.15} speed={0.2}>
            <div className="animation_layer parallax" id="cloud-3">
              <img
                src="/src/assets/home-parallax/cloud-3.png"
                className="parallax-clouds"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.38} speed={0.4}>
            <div className="animation_layer parallax" id="cloud-2">
              <img
                src="/src/assets/home-parallax/cloud-2.png"
                className="parallax-clouds"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.43} speed={0.7}>
            <div className="animation_layer parallax" id="cloud-1">
              <img
                src="/src/assets/home-parallax/cloud-1.png"
                className="parallax-clouds"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.6} speed={0.7}>
            <div className="animation_layer parallax" id="cloud-1-2">
              <img
                src="/src/assets/home-parallax/cloud-1.png"
                className="parallax-clouds"
              />
            </div>
          </ParallaxLayer>

          {/* Hills */}
          <ParallaxLayer offset={1} speed={0.7}>
            <div className="animation_layer parallax" id="grass-4">
              <img
                src="/src/assets/home-parallax/grass-4.png"
                className="parallax-grass"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.75}>
            <div className="animation_layer parallax" id="grass-3">
              <img
                src="/src/assets/home-parallax/grass-3.png"
                className="parallax-grass"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.8}>
            <div className="animation_layer parallax" id="grass-2">
              <img
                src="/src/assets/home-parallax/grass-2.png"
                className="parallax-grass"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={1} speed={0.9}>
            <div className="animation_layer parallax" id="grass-1">
              <img
                src="/src/assets/home-parallax/grass-1.png"
                className="parallax-grass"
              />
            </div>
          </ParallaxLayer>

          {/* more grass */}
          <ParallaxLayer offset={2.1} speed={0.9}>
            <div className="animation_layer parallax" id="grass-0">
              <img
                src="/src/assets/home-parallax/grass-0.png"
                className="parallax-grass"
              />
            </div>
          </ParallaxLayer>

          {/* Greeting Card Section */}
          <ParallaxLayer offset={1.3} speed={1}>
            <div className="animation_layer parallax">
              <div className="myself-mobile">
                <img src="/src/assets/myself-1.png" />
              </div>
              <div className="greeting-card">
                <div className="greeting-box">
                  <h2>Nice to Meet You!</h2>
                  <p>
                    I'm Kayla Sison, a Computer Science & Statistics student at
                    the University of Illinois Urbana-Champaign.
                    <br />
                    <br />
                    My tech interests include software engineering, web
                    development, and UI/UX design.
                  </p>
                  <div className="button-section">
                    <a
                      className="button-1"
                      href="https://www.linkedin.com/in/kayla-sison126/"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={click2_play}
                    >
                      <img src="/src/assets/icons/Linkedin.png" />
                      <span>Connect on LinkedIn!</span>
                    </a>
                    <a
                      className="button-1"
                      href="KaylaSison_resume_7-28-25.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={click2_play}
                    >
                      <img src="/src/assets/icons/external-link.png" />
                      <span>View my Resume!</span>
                    </a>
                  </div>
                </div>
                <img className="myself-1" src="/src/assets/myself-1.png" />
              </div>
            </div>
          </ParallaxLayer>
          {/* Explore My Page section */}
          <ParallaxLayer offset={2} speed={1}>
            <div className="animation_layer parallax" id="explore-section">
              <h1>Explore My Page!</h1>
              <div className="selection-all">
                <div className="selection-section">
                  <Link
                    to="/about"
                    className="selection-button"
                    onClick={click1_play}
                  >
                    <h3>About</h3>
                    <p>Discover my story and learn more about me</p>
                  </Link>
                  <Link
                    to="/experience"
                    className="selection-button"
                    onClick={click1_play}
                  >
                    <h3>Experience</h3>
                    <p>See what I've been up to over the years</p>
                  </Link>
                </div>
                <div className="selection-section">
                  <Link
                    to="/projects"
                    className="selection-button"
                    onClick={click1_play}
                  >
                    <h3>Projects</h3>
                    <p>Take a look at my best work</p>
                  </Link>
                  <Link
                    to="/blog"
                    className="selection-button"
                    onClick={click1_play}
                  >
                    <h3>Blog</h3>
                    <p>Read what's been on my mind lately</p>
                  </Link>
                </div>
              </div>
            </div>
          </ParallaxLayer>

          {/* Contact section */}
          <ParallaxLayer offset={2.7} speed={0.9}>
            <div className="animation_layer parallax" id="flower-field">
              <img src="/src/assets/home-parallax/flower-field.png" />
            </div>
            <div className="animation_layer parallax" id="contact-section">
              <h1>Wanna get in touch?</h1>
              <p>Drop a message for me!</p>
              <form id="contact-form" ref={form} onSubmit={sendEmail}>
                <input
                  className="contact-input"
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                  onClick={click1_play}
                />
                <input
                  className="contact-input"
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                  onClick={click1_play}
                />
                <textarea
                  className="contact-textarea"
                  name="message"
                  placeholder="Your Message"
                  required
                  onClick={click1_play}
                />
                <button id="submit-btn" type="submit" onClick={click2_play}>
                  Send
                </button>
              </form>
            </div>

            <br />
            <br />
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
