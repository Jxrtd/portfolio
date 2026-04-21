import React from "react";
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

function Navigation() {
  return (
    <nav className="nav-blur">
      <div className="nav-content">
        <div className="nav-logo">
          <span className="logo-text">⚓ Jexter Alido</span>
        </div>
        <div className="nav-links">
          <a href="#about">The Captain</a>
          <a href="#cv-summary">Logbook</a>
          <a href="#skills">Haki</a>
          <a href="#projects">Adventures</a>
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
          <div className="hero-badge">WANTED: 3RD YEAR BSCS @ CIT-U</div>
          <h1 className="hero-title">
            KING OF <span className="gradient-text">CODE</span>
          </h1>
          <p className="hero-description">
            Hi, I'm Jexter Alido. I'm an aspiring and learning developer
            currently navigating the Grand Line of full-stack systems, mobile
            applications, and game development.
          </p>
          <div className="hero-actions">
            <a
              href="mailto:aldiojexter790@gmail.com"
              className="btn btn-primary"
            >
              <MailIcon /> Send Pigeon
            </a>
            <a
              href={myResume}
              download="Alido_Resume.pdf"
              className="btn btn-outline"
            >
              <DownloadIcon /> Treasure Map (CV)
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
          <div className="hero-image-container">
            <img
              src={myProfilePic}
              alt="Jexter Alido"
              className="profile-img"
            />
          </div>
          <div className="hero-code-box">
            <div className="code-display">
              <span className="code-braces">{"// Pirate.config"}</span>
              <pre className="code-snippet">
                <code>
                  <span className="code-line">
                    <span className="code-keyword">const</span> captain = {"{"}
                  </span>
                  <span className="code-line indent-1">
                    name: <span className="code-value">"Jexter Alido"</span>,
                  </span>
                  <span className="code-line indent-1">
                    role:{" "}
                    <span className="code-value">"Full-Stack Navigator"</span>,
                  </span>
                  <span className="code-line">{"}"};</span>
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CVExperience() {
  const education = [
    {
      year: "June 2026",
      title: "Incoming Software Engineering Intern",
      org: "Thinking Machines Data Science",
      desc: "Selected for a 10-week paid internship program.",
    },
    {
      year: "2023 - Present",
      title: "Bachelor of Science in Computer Science",
      org: "Cebu Institute of Technology - University",
      desc: "3rd-year student specializing in software engineering and full-stack development.",
    },
    {
      year: "2021 - 2023",
      title: "Senior High - STEM",
      org: "University of San Jose - Recoletos",
      desc: "Focused on Science, Technology, Engineering, and Mathematics.",
    },
  ];

  return (
    <section className="section bg-alt" id="cv-summary">
      <div className="container">
        <div className="cv-grid">
          <div className="cv-info">
            <h2
              className="section-title"
              style={{ textAlign: "left", marginBottom: "2.5rem" }}
            >
              The <span className="gradient-text">Logbook</span>
            </h2>
            <div className="timeline">
              {education.map((edu, index) => (
                <div key={index} className="cv-item">
                  <div className="cv-dot"></div>
                  <div className="cv-content">
                    <p className="cv-date">{edu.year}</p>
                    <h3>{edu.title}</h3>
                    <p className="cv-org">{edu.org}</p>
                    <p className="cv-desc">{edu.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="cv-stats">
            <div className="stat-card">
              <span className="stat-num">5+</span>
              <span className="stat-label">Grand Feats (Projects)</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">3+</span>
              <span className="stat-label">Years at Sea (Coding)</span>
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
      category: "Observation Haki (Languages)",
      items: ["Java", "Python", "Kotlin", "JS", "C/C++"],
      color: "#d4a017",
    },
    {
      category: "Armament Haki (Frontend)",
      items: ["React", "NextJS", "CSS Modules"],
      color: "#b91d1d",
    },
    {
      category: "Conqueror's Haki (Backend)",
      items: ["Spring Boot", "Django", "MySQL"],
      color: "#2d241e",
    },
    {
      category: "Navigator Tools",
      items: ["Godot 4", "Git"],
      color: "#3b82f6",
    },
  ];
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section-title">
          Technical <span className="gradient-text">Haki</span>
        </h2>
        <div className="skills-bento-grid">
          {skills.map((s, i) => (
            <div
              key={i}
              className="skill-bento-card"
              style={{ "--accent-color": s.color }}
            >
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
      title: "TEPOK",
      subtitle: "Godot 4",
      desc: "1st Runner Up @ UP Game Jam. A collaborative puzzle platformer featuring dynamic UI and Audio systems.",
      tags: ["Godot 4", "GDScript", "Team"],
      link: "https://github.com/drewdreww/tepok-game",
    },
    {
      title: "UniMarket (ERP)",
      subtitle: "Java, Spring Boot",
      desc: "Enterprise student management backend with RBAC using Spring Boot and MySQL.",
      tags: ["Java", "Spring Boot", "NextJS"],
      link: "https://github.com/Jxrtd/UniMarket",
    },
    {
      title: "BankRap",
      subtitle: "Python, Django",
      desc: "Peer-to-peer micro-lending platform implementing secure financial transaction logic.",
      tags: ["Python", "Django", "MySQL"],
      link: "https://github.com/jangkayl/BankRap---Django",
    },
    {
      title: "WildQueue (QMS)",
      subtitle: "Java, MySQL",
      desc: "Digital concierge capstone built for CIT-U utilizing solid OOP foundations.",
      tags: ["Java", "MySQL", "OOP"],
      link: "https://github.com/jangkayl/WildQueue",
    },
  ];
  return (
    <section className="section bg-alt" id="projects">
      <div className="container">
        <h2 className="section-title">
          Epic <span className="gradient-text">Adventures</span>
        </h2>
        <div className="project-grid">
          {projects.map((p, i) => (
            <div key={i} className="glass-project-card">
              <div className="project-header">
                <h3>{p.title}</h3>
                <span className="project-subtitle">{p.subtitle}</span>
              </div>
              <p className="project-desc-long">{p.desc}</p>
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
                View Repo →
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
        <CVExperience />
        <Skills />
        <Projects />
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Jexter Alido | Sailing through CIT-U</p>
      </footer>
    </div>
  );
}
export default App;
