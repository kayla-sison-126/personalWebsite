import { useState } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "../styles/Standard.css";
import styles from "../styles/Projects.module.css";
import useSound from "use-sound";
import click1 from "../assets/sound/button_click_1.mp3";
import click2 from "../assets/sound/button_click_2.mp3";

// image imports
import grass2 from "/src/assets/home-parallax/grass-2.png";
import grass1 from "/src/assets/home-parallax/grass-1.png";
import grass0 from "/src/assets/home-parallax/grass-0.png";
import arrowDown from "/src/assets/icons/arrow-down.png";
import goatTogetherThumbnail from "/src/assets/project-imgs/goatTogetherThumbnail.png";
import hackThmb from "/src/assets/project-imgs/hack-thmb.png";
import bakeryThmb from "/src/assets/project-imgs/bakery-thmb.png";
import wicsThmb from "/src/assets/project-imgs/wics-thmb.png";
import osfThmb from "/src/assets/project-imgs/osf-thmb.png";
import csrThmb from "/src/assets/project-imgs/csr-thmb.png";
import datasetCleanerThmb from "/src/assets/project-imgs/dataset-cleaner-thmb.png";
import datathonThmb from "/src/assets/project-imgs/datathon-thmb.png";

const categories = [
  "All",
  "Web & App Development",
  "Product & UI/UX",
  "Data & Analytics",
];

const projects = [
  {
    id: 1,
    title: "Goat Together!",
    category: "Web & App Development",
    tech: "React Native / Expo, TypeScript, Supabase",
    shortDesc:
      "A habit tracker app that uses your friends to keep you accountable! Submit pictures of your completed goals for your friend to verify.",
    longDesc: (
      <>
        <p>
          <strong>The Concept:</strong> Built for the CS Girlies Hackathon 2026, Goat Together! is a gamified, dual-accountability mobile app. Instead of self-reporting, you and a friend set daily wellness goals and verify each other's progress through photo proof to earn coins for your shared virtual pet goat.
        </p>

        <h4 className={styles["modal-section-title"]}>Key Features</h4>
        <ul className={styles["modal-list"]}>
          <li><strong>Photo Proof Verification:</strong> Designed a dual-verification flow where partners must review and approve photo proof before a goal is marked complete.</li>
          <li><strong>Full-Stack Architecture:</strong> Connected an Expo/React Native frontend to a Supabase backend to handle real-time database state, user authentication, and photo uploads.</li>
          <li><strong>Custom UI/UX:</strong> Hand-crafted vector graphics, custom SVG graphics, and a cozy pastel aesthetic designed to make habit-tracking feel welcoming rather than clinical.</li>
        </ul>

        <h4 className={styles["modal-section-title"]}>My Role & Impact</h4>
        <p>
          I led the Frontend Development, UI/UX, and Graphic Design. I teamed up with my backend partner to seamlessly integrate the frontend interfaces with our Supabase database, successfully executing our vision before the hackathon deadline.
        </p>
      </>
    ),
    link: "https://github.com/kayla-sison-126/cs-girlies-hackathon",
    image: goatTogetherThumbnail,
  },
  {
    id: 2,
    title: "Dataset Cleaner & SQL Tool",
    category: "Data & Analytics",
    tech: "R, R Shiny, SQL, HTML, CSS, Tidyverse",
    shortDesc:
      "An interactive web app for data cleaning and live SQL querying on structured datasets!",
    longDesc: (
      <>
        <p>
          <strong>The Concept:</strong> An interactive R Shiny web application designed for data cleaning, visual diff previewing, and live SQL querying on structured datasets.
        </p>
        <h4 className={styles["modal-section-title"]}>Key Features</h4>
        <ul className={styles["modal-list"]}>
          <li><strong>Multi-Format Loading:</strong> Load datasets directly via URL supporting CSV, TSV, JSON, and XLSX formats.</li>
          <li><strong>Automated Data Cleaning:</strong> Features date format parsing with lubridate, duplicate row removal, IQR outlier filtering, and string normalization.</li>
          <li><strong>Staging & Preview System:</strong> Allows users to inspect visual diffs and updated dimensions before committing data operations.</li>
          <li><strong>In-App SQL Console:</strong> Run custom SQL queries directly against the dataset using sqldf for instant visualization feedback.</li>
        </ul>
      </>
    ),
    link: "https://github.com/kayla-sison-126/dataset-cleaner",
    image: datasetCleanerThmb,
  },
  {
    id: 3,
    title: "CS Resource Forum",
    category: "Web & App Development",
    tech: "Python / Flask, AWS EC2, JS, HTML/CSS, Bootstrap",
    shortDesc:
      "An API + front-end web app that serves as a bastion of helpful CS resources for students!",
    longDesc: (
      <>
        <p>
          <strong>The Concept:</strong> A simple but powerful API and front-end web app that allows students to share and discover helpful Computer Science resources, fostering community growth and achievement.
        </p>
        <h4 className={styles["modal-section-title"]}>Key Features</h4>
        <ul className={styles["modal-list"]}>
          <li><strong>RESTful API & JSON Storage:</strong> Built custom Flask endpoints to handle post submissions, dynamic retrievals, likes, and tag-based search queries.</li>
          <li><strong>Cloud Deployment:</strong> Successfully hosted and deployed the full-stack application to an AWS EC2 instance.</li>
          <li><strong>Interactive Frontend:</strong> Implemented searchable resource feeds and upvoting mechanics utilizing vanilla JavaScript and a responsive Bootstrap 5 layout.</li>
        </ul>
      </>
    ),
    link: "https://github.com/kayla-sison-126/CS-Resource-Forum",
    image: csrThmb,
  },
  {
    id: 4,
    title: "Clinic Feedback Application",
    category: "Product & UI/UX",
    tech: "Figma, Canva",
    shortDesc:
      "An application prototype for OSF HealthCare's clinics, featuring engaging survey methods and intuitive data visualizations!",
    longDesc: (
      <>
        <p>
          <strong>The Concept:</strong> A tablet-based clinic application designed for OSF HealthCare to gather diverse methods of patient feedback and provide intuitive data visualizations for healthcare providers, avoiding the friction of requiring patients to download a mobile app.
        </p>
        <h4 className={styles["modal-section-title"]}>Key Features</h4>
        <ul className={styles["modal-list"]}>
          <li><strong>Fluid Mood Meter:</strong> Replaced traditional 0-5 star surveys with a fluid, color-coded mood scale that translates into intuitive graphs for staff.</li>
          <li><strong>Support Group Mapping:</strong> Developed a drag-and-drop survey method where patients place role icons relative to their avatar to measure support proximity.</li>
          <li><strong>AI Dashboard Summaries:</strong> Designed provider dashboards featuring AI-generated summaries of patient feedback based on selected mood quadrants.</li>
        </ul>
        <h4 className={styles["modal-section-title"]}>My Role & Impact</h4>
        <p>
          As a Product Design Intern, I collaborated within a 5-person team to construct user profiles, build journey maps simulating patient-staff interactions, and design intuitive, user-centric Figma interfaces that aimed to improve survey completion rates.
        </p>
      </>
    ),
    link: "https://docs.google.com/presentation/d/1uARyvd4DrJmiz1vRf19UCInUm4qLibH_lbZrGBh2bis/edit?usp=sharing",
    image: osfThmb,
  },
  {
    id: 5,
    title: "Official WiCS Website",
    category: "Product & UI/UX",
    tech: "Figma",
    shortDesc:
      "A website prototype for Women in Computer Science, featuring custom React components and UI/UX appealing to both members & sponsors!",
    longDesc: (
      <>
        <p>
          <strong>The Concept:</strong> A complete refresh of the visual identity and digital presence for the UIUC Women in Computer Science organization.
        </p>
        <h4 className={styles["modal-section-title"]}>Key Features</h4>
        <ul className={styles["modal-list"]}>
          <li><strong>Interactive Components:</strong> Designed engaging UI elements like a 3-card flipping animation display and clean, accessible footers.</li>
          <li><strong>Sponsor & Member Portals:</strong> Created dedicated landing pages featuring membership sign-ups and clear collaboration facts for corporate partners.</li>
          <li><strong>Collaborative Iteration:</strong> Merged independent prototypes with a team of designers to iterate and synthesize the best UI elements into the final product.</li>
        </ul>
        <h4 className={styles["modal-section-title"]}>My Role & Impact</h4>
        <p>
          Spearheaded the digital rebrand alongside two other UI designers, balancing a friendly aesthetic for prospective students with a professional architecture designed to attract corporate sponsors. The redesign drove an 18% increase in community engagement.
        </p>
      </>
    ),
    link: "https://wics-uic.github.io/WiCS-Website/",
    image: wicsThmb,
  },
  {
    id: 6,
    title: "Local Bakery Website",
    category: "Web & App Development",
    tech: "React, JavaScript, HTML, CSS",
    shortDesc:
      "A fullstack web application for a local Chicago bakery, utilizing Sanity CMS for seamless menu updates and Brevo API for easy mailing list management!",
    longDesc: (
      <>
        <p>
          <strong>The Concept:</strong> A full-stack, bilingual (English/Spanish) web application built for a small-scale catering bakery specializing in sweet breads, cakes, and event catering.
        </p>
        <h4 className={styles["modal-section-title"]}>Key Features</h4>
        <ul className={styles["modal-list"]}>
          <li><strong>Dynamic Content Management:</strong> Integrated the Sanity headless CMS API to allow the bakery owners to easily adjust their menus and baked goods without code changes.</li>
          <li><strong>Automated Communications:</strong> Utilized EmailJS for custom order inquiries and integrated the Brevo API for targeted newsletter management.</li>
          <li><strong>Analytics Tracking:</strong> Built-in data analytics to observe new/returning visitors, contact clicks, and page viewing duration.</li>
        </ul>
        <h4 className={styles["modal-section-title"]}>My Role</h4>
        <p>
          Collaborated within a 3-person team as a Web Developer, building out custom React components and handling the API and dual-language localization integrations.
        </p>
      </>
    ),
    link: null,
    image: bakeryThmb,
  },
  {
    id: 7,
    title: "Illinois Statistics Datathon",
    category: "Data & Analytics",
    tech: "R, ggplot2, NumPy",
    shortDesc:
      "Analyzed call center volume concentrations using R data visualizations and built predictive modeling workflows!",
    longDesc: (
      <>
        <p>
          <strong>The Concept:</strong> A data science and analytics sprint focused on workforce planning and call center efficiency.
        </p>
        <h4 className={styles["modal-section-title"]}>Key Features</h4>
        <ul className={styles["modal-list"]}>
          <li><strong>Exploratory Data Analysis:</strong> Processed and analyzed real-world workforce datasets to identify key trends and operational bottlenecks.</li>
          <li><strong>Data Visualization:</strong> Built comprehensive heatmaps and volume charts using R and ggplot2 to illustrate call concentrations across varying shifts.</li>
          <li><strong>Predictive Workflows:</strong> Collaborated on predictive models designed to help forecast future staffing needs.</li>
        </ul>
      </>
    ),
    link: "https://github.com/PriyalManiar/workforce-planning",
    image: datathonThmb,
  },
  {
    id: 8,
    title: "HackIllinois UI/UX Design",
    category: "Product & UI/UX",
    tech: "Figma, Wireframing, Design Systems",
    shortDesc:
      "Designed user registration flows and interactive mobile & web wireframes for HackIllinois!",
    longDesc: (
      <>
        <p>
          <strong>The Concept:</strong> An overhaul of the registration and user flows for HackIllinois, one of the nation's most prominent collegiate hackathons.
        </p>
        <h4 className={styles["modal-section-title"]}>Key Features</h4>
        <ul className={styles["modal-list"]}>
          <li><strong>User Flow Optimization:</strong> Synthesized user feedback from the previous year to streamline the registration process and improve overall accessibility.</li>
          <li><strong>Design Systems:</strong> Built reusable style guide components to ensure brand consistency across both web and mobile platforms.</li>
          <li><strong>High-Fidelity Wireframing:</strong> Delivered interactive Figma prototypes for the development team to implement seamlessly.</li>
        </ul>
        <h4 className={styles["modal-section-title"]}>My Role</h4>
        <p>
          Served on the core design team as a UI/UX Designer, directly shaping the visual identity, style guides, and usability of the event platform.
        </p>
      </>
    ),
    link: "",
    image: hackThmb,
  },
];

export default function Projects() {
  // sfx
  const [click1_play] = useSound(click1);
  const [click2_play] = useSound(click2);

  // modal state
  const [activeProject, setActiveProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const handleOpen = (project) => {
    click2_play();
    setActiveProject(project);
  };

  const handleClose = () => {
    click1_play();
    setActiveProject(null);
  };

  const handleCategoryFilter = (category) => {
    click1_play();
    setActiveCategory(category);
  };

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <>
      <div className="parallax-container">
        <Parallax
          className="animation"
          pages={2.6}
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
              <img src={grass2} className="parallax-grass" alt="grass layer" />
            </div>
          </ParallaxLayer>
          <ParallaxLayer offset={0.16} speed={1.3}>
            <div className="animation_layer parallax" id="standard-grass-1">
              <img src={grass1} className="parallax-grass" alt="grass layer" />
            </div>
          </ParallaxLayer>

          {/* Intro Text */}
          <ParallaxLayer offset={0.25} speed={1.5}>
            <div className="animation_layer parallax">
              <div className="standard-header">
                <h2 className="header-text">Projects</h2>
                <img src={arrowDown} alt="scroll down" />
              </div>
            </div>
          </ParallaxLayer>

          {/* Project Grid Section */}
          <ParallaxLayer offset={0.99} speed={1}>
            <div className="animation_layer parallax">
              <div className={styles["projects-intro"]}>
                <h1>Project Portfolio</h1>
                <p>Click a card to see more about each project!</p>

                {/* Category Filter Tabs */}
                <div className={styles["filter-bar"]}>
                  {categories.map((cat) => (
                    <button
                      key={cat}
                      className={`${styles["filter-btn"]} ${
                        activeCategory === cat ? styles["filter-active"] : ""
                      }`}
                      onClick={() => handleCategoryFilter(cat)}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Projects Grid */}
              <div className={styles["projects-grid"]}>
                {filteredProjects.map((project) => (
                  <div
                    key={project.id}
                    className={styles["project-card"]}
                    onClick={() => handleOpen(project)}
                  >
                    <div className={styles["card-media-wrapper"]}>
                      <img
                        src={project.image}
                        alt={project.title}
                        className={styles["card-media"]}
                      />
                    </div>

                    <h3>{project.title}</h3>
                    <p className={styles["tech-stack"]}>{project.tech}</p>
                    <p className={styles["short-desc"]}>{project.shortDesc}</p>
                  </div>
                ))}
              </div>
            </div>
          </ParallaxLayer>

          {/* Footer */}
          <ParallaxLayer offset={2} speed={0.5} style={{ zIndex: 10 }}>
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

        {/* Modal */}
        {activeProject && (
          <div className={styles["modal"]} onClick={handleClose}>
            <div
              className={styles["modal-content"]}
              onClick={(e) => e.stopPropagation()}
            >
              <span className={styles["close"]} onClick={handleClose}>
                &times;
              </span>
              
              {/* Modal Image Placed at the Top */}
              <img 
                src={activeProject.image} 
                alt={`${activeProject.title} thumbnail`} 
                className={styles["modal-image"]}
              />

              <h3>{activeProject.title}</h3>
              <p className={styles["modal-tech"]}>{activeProject.tech}</p>

              {activeProject.videoUrl && (
                <div className={styles["video-wrapper"]}>
                  <video controls autoPlay muted loop>
                    <source src={activeProject.videoUrl} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              )}

              {/* The rich JSX content renders here naturally */}
              <div className={styles["modal-desc"]}>
                {activeProject.longDesc}
              </div>

              {activeProject.link && (
                <a
                  href={activeProject.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles["project-link"]}
                  onClick={click2_play}
                >
                  View Project →
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    </>
  );
}