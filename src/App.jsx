import React, { useState, useEffect } from "react";
import myResume from "./assets/ALIDO-RESUME.pdf";
import myProfilePic from "./assets/pfp.png";

// --- CUSTOM SVG COMPONENTS ---
const GithubIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);
const LinkedinIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);
const MailIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
    <polyline points="22,6 12,13 2,6"></polyline>
  </svg>
);
const DownloadIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v4"></path>
    <polyline points="7 10 12 15 17 10"></polyline>
    <line x1="12" y1="15" x2="12" y2="3"></line>
  </svg>
);
const CodeIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="24"
    height="24"
    stroke="currentColor"
    strokeWidth="2"
    fill="none"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="16 18 22 12 16 6"></polyline>
    <polyline points="8 6 2 12 8 18"></polyline>
  </svg>
);

// --- INTERACTIVE HOOK ---
function usePowEffect() {
  const [pows, setPows] = useState([]);

  const addPow = (e) => {
    const texts = ["BUILD", "COMPILE", "RUN", "DEPLOY", "SUCCESS", "OPTIMIZE"];
    const text = texts[Math.floor(Math.random() * texts.length)];
    const newPow = {
      id: Date.now(),
      x: e.clientX,
      y: e.clientY,
      text: text,
    };
    setPows((prev) => [...prev, newPow]);
    setTimeout(() => {
      setPows((prev) => prev.filter((p) => p.id !== newPow.id));
    }, 500);
  };

  useEffect(() => {
    window.addEventListener("click", addPow);
    return () => window.removeEventListener("click", addPow);
  }, []);

  return pows;
}

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="nav-blur">
      <div className="nav-content">
        <div className="nav-logo">
          <span className="logo-text">⚡ Jexter Alido</span>
        </div>
        <button className="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "✕" : "☰"}
        </button>
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <a href="#about" onClick={() => setIsOpen(false)}>ABOUT</a>
          <a href="#cv-summary" onClick={() => setIsOpen(false)}>JOURNEY</a>
          <a href="#skills" onClick={() => setIsOpen(false)}>SKILLS</a>
          <a href="#projects" onClick={() => setIsOpen(false)}>PROJECTS</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero section" id="about">
      <div className="container">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">SOFTWARE ENGINEER // CIT-U</div>
            <h1 className="hero-title">
              JEXTER <span className="gradient-text">ALIDO</span>
            </h1>
            <p className="hero-description">
              I am a dedicated Computer Science student and Software Engineer specializing 
              in full-stack development, mobile systems, and high-performance backends. 
              Focused on crafting clean, efficient, and scalable software solutions.
            </p>
            <div className="hero-actions">
              <a
                href="mailto:aldiojexter790@gmail.com"
                className="btn btn-primary"
              >
                <MailIcon /> CONTACT ME
              </a>
              <a
                href={myResume}
                download="Alido_Resume.pdf"
                className="btn btn-outline"
              >
                <DownloadIcon /> DOWNLOAD RESUME
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-image-container">
              <img
                src={myProfilePic}
                alt="Jexter Alido"
                className="profile-img"
              />
            </div>
            <div className="hero-code-box">
              <div className="code-display">
                <pre>
                  <code>
                    <span style={{ color: "#ff00ff" }}>class</span> Developer {"{"}
                    {"\n  "}name:{" "}
                    <span style={{ color: "#ffff00" }}>"Jexter Alido"</span>,{"\n  "}
                    role:{" "}
                    <span style={{ color: "#ffff00" }}>"Full-Stack Developer"</span>
                    {"\n"}
                    {"}"}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CVExperience() {
  const experience = [
    {
      year: "June 15, 2026 - Present",
      title: "Full Stack Intern",
      org: "Talleco | Jobtarget",
      desc: "Contributing to the design, development, and maintenance of full-stack web applications, implementing key features, and collaborating within an agile development team.",
    },
  ];

  const education = [
    {
      year: "2023 - Present",
      title: "Bachelor of Science in Computer Science",
      org: "Cebu Institute of Technology - University",
      desc: "Honing technical abilities in software engineering and full-stack development.",
    },
    {
      year: "2021 - 2023",
      title: "Senior High - STEM",
      org: "University of San Jose - Recoletos",
      desc: "Initial training in Science, Technology, Engineering, and Mathematics.",
    },
  ];

  return (
    <section className="section" id="cv-summary">
      <div className="container">
        <h2 className="section-title">
          MY <span className="gradient-text">JOURNEY</span>
        </h2>
        <div className="journey-grid">
          {/* Experience Column */}
          <div className="comic-panel">
            <h3 className="journey-column-title">Work Experience</h3>
            <div className="timeline">
              {experience.map((item, index) => (
                <div
                  key={index}
                  className="cv-item"
                  style={{
                    borderLeft: "4px solid var(--primary-cyan)",
                    paddingLeft: "1.5rem",
                    marginBottom: "2rem",
                  }}
                >
                  <p style={{ fontWeight: 900, color: "var(--primary-pink)" }}>
                    {item.year}
                  </p>
                  <h4 style={{ fontFamily: "Bangers", fontSize: "1.5rem", color: "white" }}>
                    {item.title}
                  </h4>
                  <p style={{ fontWeight: 700 }}>{item.org}</p>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Education Column */}
          <div className="comic-panel">
            <h3 className="journey-column-title">Education</h3>
            <div className="timeline">
              {education.map((item, index) => (
                <div
                  key={index}
                  className="cv-item"
                  style={{
                    borderLeft: "4px solid var(--primary-cyan)",
                    paddingLeft: "1.5rem",
                    marginBottom: "2rem",
                  }}
                >
                  <p style={{ fontWeight: 900, color: "var(--primary-pink)" }}>
                    {item.year}
                  </p>
                  <h4 style={{ fontFamily: "Bangers", fontSize: "1.5rem", color: "white" }}>
                    {item.title}
                  </h4>
                  <p style={{ fontWeight: 700 }}>{item.org}</p>
                  <p>{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    {
      category: "LANGUAGES",
      items: [
        { name: "Java", icon: "java/java-original.svg" },
        { name: "Python", icon: "python/python-original.svg" },
        { name: "Kotlin", icon: "kotlin/kotlin-original.svg" },
        { name: "JS", icon: "javascript/javascript-original.svg" },
        { name: "C++", icon: "cplusplus/cplusplus-original.svg" },
      ],
    },
    {
      category: "FRONTEND",
      items: [
        { name: "React", icon: "react/react-original.svg" },
        { name: "NextJS", icon: "nextjs/nextjs-original.svg" },
        { name: "CSS", icon: "css3/css3-original.svg" },
      ],
    },
    {
      category: "BACKEND & DATABASES",
      items: [
        { name: "Spring", icon: "spring/spring-original.svg" },
        { name: "Django", icon: "django/django-plain.svg" },
        { name: "MySQL", icon: "mysql/mysql-original.svg" },
      ],
    },
    {
      category: "TOOLS & ENGINES",
      items: [
        { name: "Godot", icon: "godot/godot-original.svg" },
        { name: "Git", icon: "git/git-original.svg" },
      ],
    },
  ];

  const getIconUrl = (path) =>
    `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">
          TECHNICAL <span className="gradient-text">SKILLS</span>
        </h2>
        <div className="skills-bento-grid">
          {skills.map((s, i) => (
            <div key={i} className="skill-bento-card">
              <div className="skill-header">
                <CodeIcon />
                <h3>{s.category}</h3>
              </div>
              <div className="skill-tags-container">
                {s.items.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <img
                      src={getIconUrl(skill.icon)}
                      alt={skill.name}
                      className="skill-icon"
                      style={{ border: "none" }}
                    />
                    <span className="skill-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Projects() {
  const projects = [
    {
      title: "TEPOK",
      subtitle: "Godot 4",
      desc: "1st Runner Up @ UP Game Jam. A collaborative puzzle platformer with dynamic systems.",
      tags: ["Godot 4", "GDScript"],
      link: "https://github.com/drewdreww/tepok-game",
    },
    {
      title: "UniMarket",
      subtitle: "Spring Boot",
      desc: "Enterprise student management backend with RBAC using Spring Boot and MySQL.",
      tags: ["Java", "Spring Boot"],
      link: "https://github.com/Jxrtd/UniMarket",
    },
    {
      title: "BankRap",
      subtitle: "Django",
      desc: "Peer-to-peer micro-lending platform implementing secure financial logic.",
      tags: ["Python", "Django"],
      link: "https://github.com/jangkayl/BankRap---Django",
    },
    {
      title: "WildQueue",
      subtitle: "Java, MySQL",
      desc: "Digital concierge capstone built for CIT-U utilizing solid OOP foundations.",
      tags: ["Java", "MySQL"],
      link: "https://github.com/jangkayl/WildQueue",
    },
  ];
  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">
          FEATURED <span className="gradient-text">PROJECTS</span>
        </h2>
        <div className="project-grid">
          {projects.map((p, i) => (
            <div key={i} className="glass-project-card">
              <div className="project-header">
                <h3 style={{ fontSize: "2rem", color: "var(--primary-cyan)" }}>
                  {p.title}
                </h3>
                <span style={{ fontWeight: 900, textTransform: "uppercase", color: "var(--primary-pink)" }}>
                  {p.subtitle}
                </span>
              </div>
              <p style={{ margin: "1rem 0", lineHeight: 1.4 }}>{p.desc}</p>
              <div
                style={{
                  display: "flex",
                  gap: "0.5rem",
                  flexWrap: "wrap",
                  marginBottom: "1.5rem",
                }}
              >
                {p.tags.map((t) => (
                  <span
                    key={t}
                    style={{
                      background: "var(--ink-black)",
                      color: "white",
                      padding: "0.2rem 0.6rem",
                      fontSize: "0.8rem",
                      fontWeight: 700,
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
                style={{ fontSize: "1rem", padding: "0.5rem 1rem" }}
              >
                VIEW PROJECT →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  const pows = usePowEffect();

  return (
    <div className="app-wrapper">
      {pows.map((pow) => (
        <div
          key={pow.id}
          className="interactive-pow"
          style={{ left: pow.x, top: pow.y }}
        >
          {pow.text}
        </div>
      ))}
      <Navigation />
      <main>
        <Hero />
        <CVExperience />
        <Skills />
        <Projects />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Jexter Alido. All rights reserved.</p>
      </footer>
    </div>
  );
}
export default App;
