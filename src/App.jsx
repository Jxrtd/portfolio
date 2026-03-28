import React from "react";
import myResume from "./assets/Alido_Resume (2).pdf";

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

// --- SECTIONS ---

function Navigation() {
  return (
    <nav className="nav-blur">
      <div className="nav-content">
        <div className="nav-logo">
          <span className="logo-bracket">{"<"}</span>
          <span className="logo-text">Jexter</span>
          <span className="logo-bracket">{"/>"}</span>
        </div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">3rd Year BSCS @ CIT-U</div>
          <h1 className="hero-title">
            Creative <span className="gradient-text">Developer</span>
          </h1>
          <p className="hero-description">
            Hi, I'm Jexter Alido. I specialize in full-stack development, mobile
            applications, and game systems with a focus on clean code.
          </p>
          <div className="hero-actions">
            <a
              href="mailto:aldiojexter790@gmail.com"
              className="btn btn-primary"
            >
              <MailIcon /> Get In Touch
            </a>
            <a href={myResume} download className="btn btn-outline">
              <DownloadIcon /> Download CV
            </a>
            <div className="social-group">
              <a
                href="https://github.com/Jxrtd"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
              >
                <GithubIcon />
              </a>
              <a
                href="https://www.linkedin.com/in/jexteralido/"
                target="_blank"
                rel="noreferrer"
                className="social-btn"
              >
                <LinkedinIcon />
              </a>
            </div>
          </div>
        </div>
        <div className="hero-visual">
          <div className="code-display-box">
            <pre className="code-snippet">
              <code>
                <span className="token-keyword">const</span> developer = {"{"}{" "}
                <br />
                &nbsp;&nbsp;name:{" "}
                <span className="token-string">"Jexter Alido"</span>,<br />
                &nbsp;&nbsp;focus:{" "}
                <span className="token-string">"Full-Stack"</span>,<br />
                &nbsp;&nbsp;skills: [
                <span className="token-string">"Java"</span>,{" "}
                <span className="token-string">"Kotlin"</span>]<br />
                {"}"};
              </code>
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const skills = [
    {
      category: "Languages",
      items: ["Java", "Python", "C++", "Kotlin", "JS"],
      color: "#10b981",
    },
    {
      category: "Frontend",
      items: ["React", "CSS Modules", "Jetpack Compose"],
      color: "#3b82f6",
    },
    {
      category: "Backend",
      items: ["Spring Boot", "Django", "MySQL"],
      color: "#8b5cf6",
    },
    {
      category: "Tools",
      items: ["Vite", "Godot 4", "Git", "TensorFlow"],
      color: "#f59e0b",
    },
  ];

  return (
    <section className="section bg-alt" id="skills">
      <div className="container">
        <h2 className="section-title">
          Technical <span className="gradient-text">Arsenal</span>
        </h2>
        <div className="skills-bento-grid">
          {skills.map((s, i) => (
            <div
              key={i}
              className="skill-bento-card"
              style={{ "--accent-color": s.color }}
            >
              <div className="skill-card-glow"></div>
              <div className="skill-header">
                <CodeIcon />
                <h3>{s.category}</h3>
              </div>
              <div className="skill-tags-container">
                {s.items.map((item) => (
                  <span key={item} className="skill-pill">
                    {item}
                  </span>
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
      title: "AniVibe",
      subtitle: "Kotlin",
      desc: "Native mobile application built with Jetpack Compose, featuring a third-party Anime API and Room database.",
      tags: ["Kotlin ,", " Jetpack ,", " Room DB "],
      link: "https://github.com/Jxrtd/AniVibe",
    },
    {
      title: "WildQueue",
      subtitle: "Java, MySQL",
      desc: "A digital campus concierge system featuring specialized Object-Oriented views for Admin, Student, and Teller roles.",
      tags: ["Java ,", " MySQL ,", "OOP "],
      link: "https://github.com/jangkayl/WildQueue",
    },
    {
      title: "BankRap E-Wallet",
      subtitle: "Python, Django",
      desc: "P2P micro-lending platform designed for student borrowers through a secure digital ecosystem.",
      tags: ["Python ,", " Django ,", " MySQL "],
      link: "https://github.com/jangkayl/BankRap---Django",
    },
    {
      title: "CineHub",
      subtitle: "React",
      desc: "Responsive SPA using React and Vite featuring a custom favoriting system with Local Storage persistence.",
      tags: ["React ,", " Vite ,", " API "],
      link: "https://github.com/Jxrtd/CineHub",
    },
    {
      title: "Tepok",
      subtitle: "Godot 4, GDScript",
      desc: "Customizable game configuration interface with real-time sensitivity scaling and multi-channel audio mixing.",
      tags: ["Godot 4 ,", " GDScript ,", " Game UI "],
      link: "https://github.com/drewdreww/tepok-game",
    },
  ];

  return (
    <section className="section" id="projects">
      <div className="container">
        <h2 className="section-title">
          Featured <span className="gradient-text">Works</span>
        </h2>
        <div className="project-bento-grid">
          {projects.map((p, i) => (
            <div key={i} className="bento-project-card">
              <div className="project-header">
                <h3>{p.title}</h3>
                <span className="project-subtitle">{p.subtitle}</span>
              </div>
              <p className="project-desc">{p.desc}</p>
              <div className="tag-row">
                {p.tags.map((t) => (
                  <span key={t} className="mini-tag">
                    {t}
                  </span>
                ))}
              </div>
              <a
                href={p.link}
                target="_blank"
                rel="noreferrer"
                className="project-link"
              >
                View Repository →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className="app-wrapper">
      <Navigation />
      <main>
        <Hero />
        <Skills />
        <Projects />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Jexter Alido | CIT University</p>
      </footer>
    </div>
  );
}

export default App;
