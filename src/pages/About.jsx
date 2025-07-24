import { useEffect, useRef } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../styles/About.css";
import Footer from "../components/Footer";
import emailjs from "@emailjs/browser";
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

export default function About() {
  const form = useRef();

  useEffect(() => {
    emailjs.init(PUBLIC_KEY);
  }, []);

  const sendEmail = (e) => {
    console.log("PUBLIC_KEY:", PUBLIC_KEY);
    e.preventDefault();
    emailjs
      .sendForm("service_wgrybwy", "template_98bk95z", form.current, PUBLIC_KEY)
      .then(
        (result) => {
          console.log("Email successfully sent", result.text);
          alert("Message sent!");
          form.current.reset();
        },
        (error) => {
          console.error("Failed to send email:", error.text);
          alert("Oops! Something went wrong.");
        }
      );
  };

  return (
    <>
      <div className="parallax-container">
        <Parallax
          className="animation"
          pages={3.5}
          style={{ top: "0", left: "0" }}
        >
          {/* Sky BG & Intro Text */}
          <ParallaxLayer offset={0} speed={0}>
            <div
              className="animation_layer parallax"
              id="sky-bg"
              style={{ height: "100vh" }}
            >
            </div>
          </ParallaxLayer>

          {/* Hills */}
          <ParallaxLayer offset={0} speed={0.8}>
            <div className="animation_layer parallax" id="grass-2-sub">
              <img
                src="/src/assets/home-parallax/grass-2.png"
                className="parallax-grass"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0} speed={0.9}>
            <div className="animation_layer parallax" id="grass-1-sub">
              <img
                src="/src/assets/home-parallax/grass-1.png"
                className="parallax-grass"
              />
            </div>
          </ParallaxLayer>

          <ParallaxLayer offset={0} speed={0.9}>
              <div className="header">
                <h1 id="header-text">About</h1>
                <img src="/src/assets/icons/arrow-down.png" />
              </div>
          </ParallaxLayer>

          {/* Greeting Card Section */}
          <ParallaxLayer offset={1} speed={1}>
            <div className="animation_layer parallax">
              <div className="greeting-card">
                <div className="greeting-box">
                  <h2>About Me</h2>
                  <p>
                    I'm Kayla, a Filipino-American from the Chicago area
                    currently studying Computer Science & Statistics at the
                    University of Illinois Urbana-Champaign. I've always been
                    drawn to the intersection of logic and creativity, whether
                    it's solving a tricky algorithm problem or designing a
                    clean, intuitive user experience. That's what led me to
                    focus on software engineering, web development, and UI/UX
                    design. I take pride in thinking from both a developer's and
                    a designer's perspective, and I enjoy building projects that
                    blend strong technical foundations with a sense of visual
                    polish and clarity.
                    <br />
                    <br />
                    Outside of tech, I like to do arts & crafts, especially
                    crochet. I especially love donating my crochet creations to
                    charity. I've also been a concert percussionist since 2014,
                    performing in ensembles at the University of Illinois
                    Chicago and the University of Chicago. When I'm not coding
                    or making art and music, you can usually find me exploring
                    cafes and trying out new drinks.
                  </p>
                  <div className="button-section">
                    <a
                      className="button-1"
                      href="https://www.linkedin.com/in/kayla-sison126/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img src="/src/assets/icons/Linkedin.png" />
                      <span>Connect on LinkedIn!</span>
                    </a>
                    <a className="button-1" href="">
                      <img src="/src/assets/icons/external-link.png" />
                      <span>View my Resume!</span>
                    </a>
                  </div>
                </div>
                <img className="myself-1" src="/src/assets/myself-1.png" />
              </div>
            </div>
          </ParallaxLayer>

          {/* more grass */}
          <ParallaxLayer offset={0} speed={0.9}>
            <div className="animation_layer parallax" id="grass-0-sub">
              <img
                src="/src/assets/home-parallax/grass-0.png"
                className="parallax-grass"
              />
            </div>
          </ParallaxLayer>

          {/* Footer */}
          <ParallaxLayer offset={2.99} speed={0.9}>
            <Footer id="footer" />
          </ParallaxLayer>
        </Parallax>
      </div>
    </>
  );
}
