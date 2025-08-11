import { useRef, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../styles/Standard.css";
import styles from "../styles/About.module.css";
import useSound from "use-sound";
import click1 from "../assets/sound/button_click_1.mp3";
import click2 from "../assets/sound/button_click_2.mp3";
import carousel_data from "../utils/photo-data.js";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function About() {
  // sfx
  const [click1_play] = useSound(click1);
  const [click2_play] = useSound(click2);

  //carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 648,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       initialSlide: 2,
    //     },
    //   },
    // ],
  };
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 648,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       initialSlide: 2,
    //     },
    //   },
    // ],
  };

  const settings3 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    // responsive: [
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       slidesToScroll: 1,
    //       infinite: true,
    //       dots: true,
    //     },
    //   },
    //   {
    //     breakpoint: 648,
    //     settings: {
    //       slidesToShow: 1,
    //       slidesToScroll: 1,
    //       initialSlide: 2,
    //     },
    //   },
    // ],
  };

  return (
    <>
      <div className="parallax-container">
        <Parallax
          className="animation"
          pages={3.2}
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
          <ParallaxLayer offset={0.18} speed={0.7}>
            <div className="animation_layer parallax" id="standard-grass-2">
              <img
                src="/src/assets/home-parallax/grass-2.png"
                className="parallax-grass"
              />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.16} speed={1}>
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
                <h2 className="header-text">About</h2>
                <img src="/src/assets/icons/arrow-down.png" />
              </div>
            </div>
          </ParallaxLayer>

          {/* more grass */}
          <ParallaxLayer offset={2.3} speed={0.9}>
            <div className="animation_layer parallax" id="grass-0">
              <img
                src="/src/assets/home-parallax/grass-0.png"
                className="parallax-grass"
              />
            </div>
          </ParallaxLayer>

          {/* Bio Section */}
          <ParallaxLayer offset={0.9} speed={1}>
            <div className="animation_layer parallax">
              <div className={styles["myself-1-mobile"]}>
                <img src="/src/assets/myself-1.png" />
              </div>
              <div className={styles["intro-card"]}>
                <div className={styles["intro-box"]}>
                  <h2>About Me</h2>
                  <p className={styles["bio"]}>
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
                    Outside of tech, I'm a big fan of arts & crafts, especially
                    crochet: I love donating my crochet creations to charity and
                    making things for my friends and family. I've also been a
                    concert percussionist since 2014, performing in ensembles at
                    the University of Illinois Chicago and the University of
                    Chicago. When I'm not coding or making art and music, you
                    can usually find me exploring cafes and trying out new
                    drinks.
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
                <img
                  className={styles["myself-1"]}
                  src="/src/assets/myself-1.png"
                />
              </div>
            </div>
          </ParallaxLayer>

          {/* Skills, Tools, Achievements Section */}
          <ParallaxLayer offset={1} speed={1}>
            <div className="animation_layer parallax">
              <div className={styles["myself-3-mobile"]}>
                <img src="/src/assets/myself-3.png" />
              </div>
              <div className={styles["sta-card"]}>
                <img
                  className={styles["myself-3"]}
                  src="/src/assets/myself-3.png"
                />
                <div className={styles["sta-box"]}>
                  <h2>Technical Skills & Tools</h2>
                  <div className="button-section">
                    <div className={styles["skill-tag"]}>
                      <img src="/src/assets/skill-logos/cpp-logo.png" />
                      <span>C++</span>
                    </div>
                    <div className={styles["skill-tag"]}>
                      <img src="/src/assets/skill-logos/c-logo.png" />
                      <span>C</span>
                    </div>
                    <div className={styles["skill-tag"]}>
                      <img src="/src/assets/skill-logos/python-logo.png" />
                      <span>Python</span>
                    </div>
                    <div className={styles["skill-tag"]}>
                      <img src="/src/assets/skill-logos/js-logo.png" />
                      <span>JavaScript</span>
                    </div>
                    <div className={styles["skill-tag"]}>
                      <img src="/src/assets/skill-logos/react-logo.png" />
                      <span>React</span>
                    </div>
                    <div className={styles["skill-tag"]}>
                      <img src="/src/assets/skill-logos/html-logo.png" />
                      <span>HTML</span>
                    </div>
                    <div className={styles["skill-tag"]}>
                      <img src="/src/assets/skill-logos/css-logo.png" />
                      <span>CSS</span>
                    </div>
                    <div className={styles["skill-tag"]}>
                      <img src="/src/assets/skill-logos/git-logo.png" />
                      <span>Git/GitHub</span>
                    </div>
                    <div className={styles["skill-tag"]}>
                      <img src="/src/assets/skill-logos/vscode-logo.png" />
                      <span>VS Code</span>
                    </div>
                    <div className={styles["skill-tag"]}>
                      <img src="/src/assets/skill-logos/figma-logo.png" />
                      <span>Figma</span>
                    </div>
                  </div>

                  <h2>Notable Achievements</h2>
                  <div className={styles["achievements"]}>
                    <ul>
                      <li>Cumulative GPA: 4.0/4.0</li>
                      <li>Dean's List 2023 -- 2024</li>
                      <li>
                        Capital One Launchpad: Legacy & Leadership Program (July
                        2025) -- more info{" "}
                        <a
                          href="https://www.linkedin.com/posts/kayla-sison126_reflecting-on-the-capital-one-launchpad-activity-7352340190364905472-Y2NR?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEa4x18BptVXGB4kCpG9QoaX_OhjCqAHuSs"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles["achievement-link"]}
                        >
                          here
                        </a>
                      </li>
                      <li>
                        AbbVie Business Technology Solutions Externship Program
                        (August 2025)
                      </li>
                      <li>
                        Women in Engineering Project Dean's Merit Scholarship
                      </li>
                      <li>
                        UIC Computer Science T-Shirt Design Scholarship -- more
                        info{" "}
                        <a
                          href="https://www.linkedin.com/posts/kayla-sison126_i-am-excited-to-share-that-i-have-created-activity-7193603231397130240-aSQ4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEa4x18BptVXGB4kCpG9QoaX_OhjCqAHuSs"
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles["achievement-link"]}
                        >
                          here
                        </a>
                      </li>
                      <li>
                        Featured on back page of RISE: UIC College of
                        Engineering Magazine (Fall 2024)
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </ParallaxLayer>

          {/* Photo Gallery section */}
          <ParallaxLayer offset={2.1} speed={1}>
            <div className="animation_layer parallax" id="explore-section">
              <h1>My Photo Gallery</h1>

              {/* 3-PHOTO CAROUSEL */}
              <div className={styles["carousel"]} id={styles["carousel-1"]}>
                <div className={styles["carousel-inner"]}>
                  <Slider {...settings}>
                    {carousel_data.map((d) => (
                      <div key={d.img} className="carousel-card-container">
                        <div className={styles["carousel-card"]}>
                          <div className={styles["carousel-img-container"]}>
                            <img src={d.img} alt="image"></img>
                          </div>
                          <div className={styles["carousel-caption-container"]}>
                            <p>{d.caption}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>

              {/* 2-PHOTO CAROUSEL */}
              <div className={styles["carousel"]} id={styles["carousel-2"]}>
                <div className={styles["carousel-inner"]}>
                  <Slider {...settings2}>
                    {carousel_data.map((d) => (
                      <div key={d.img} className="carousel-card-container">
                        <div className={styles["carousel-card"]}>
                          <div className={styles["carousel-img-container"]}>
                            <img src={d.img} alt="image"></img>
                          </div>
                          <div className={styles["carousel-caption-container"]}>
                            <p>{d.caption}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>

              {/* 1-PHOTO CAROUSEL */}
              <div className={styles["carousel"]} id={styles["carousel-3"]}>
                <div className={styles["carousel-inner"]}>
                  <Slider {...settings3}>
                    {carousel_data.map((d) => (
                      <div key={d.img} className="carousel-card-container">
                        <div className={styles["carousel-card"]}>
                          <div className={styles["carousel-img-container"]}>
                            <img src={d.img} alt="image"></img>
                          </div>
                          <div className={styles["carousel-caption-container"]}>
                            <p>{d.caption}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>



            </div>
          </ParallaxLayer>

          {/* Footer */}
          <ParallaxLayer offset={2.9} speed={0.5} style={{ zIndex: 10 }}>
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
