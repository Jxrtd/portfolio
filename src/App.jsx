import * as Icons from "lucide-react";

function Navigation() {
  return (
    <nav>
      <div className="nav-content">
        <div className="nav-logo">{"<Dev />"}</div>
        <div className="nav-links">
          {["About", "Skills", "Projects", "Contact"].map((item) => (
            <button key={item}>{item}</button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  // Defensive check for icons to prevent "undefined" crashes
  const GithubIcon = Icons.Github || Icons.GitHub || null;
  const MailIcon = Icons.Mail || Icons.MailIcon || null;
  const LinkedinIcon = Icons.Linkedin || Icons.LinkedIn || null;

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div>
            <div className="hero-badge">Welcome to my portfolio</div>
            <h1>
              Jexter Alido
              <br />
              <span className="hero-title-gradient">Developer</span>
            </h1>
          </div>
          <p className="hero-description">
            Crafting elegant solutions with modern technologies. Specializing in
            full-stack development, clean code, and scalable architectures.
          </p>

          <div className="hero-buttons">
            <a href="aldiojexter790@gmail.com" className="btn btn-primary">
              {MailIcon && <MailIcon size={20} />}
              Get In Touch
            </a>
            <button className="btn btn-secondary">View Work</button>
          </div>

          <div className="hero-socials">
            <a href="#" className="social-btn">
              {GithubIcon && <GithubIcon size={24} />}
            </a>
            <a href="#" className="social-btn">
              {LinkedinIcon && <LinkedinIcon size={24} />}
            </a>
          </div>
        </div>

        <div className="hero-code-box">
          <div className="code-display">
            <div className="code-braces">{"{ }"}</div>
            <div className="code-snippet">
              <span className="code-line">const developer = {"{"}</span>
              <span className="code-line indent-1">
                name: <span className="code-value">"Full-Stack"</span>,
              </span>
              <span className="code-line indent-1">
                focus: <span className="code-value">"Clean Code"</span>
              </span>
              <span className="code-line">{"}"}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCategory({ category, skills }) {
  return (
    <div className="skill-category">
      <h3>{category}</h3>
      <div className="skill-tags">
        {skills.map((skill, index) => (
          <div key={index} className="skill-tag">
            {skill}
          </div>
        ))}
      </div>
    </div>
  );
}

function Skills() {
  const skillsData = [
    {
      category: "Languages",
      skills: ["Java", "Python", "C++", "Kotlin", "JavaScript"],
    },
    { category: "Frontend", skills: ["React", "CSS", "JavaScript"] },
    { category: "Backend", skills: ["Django", "Java"] },
    { category: "Databases", skills: ["MySQL"] },
  ];

  return (
    <section className="skills">
      <div className="section-container">
        <div className="section-header">
          <h2>Technical Arsenal</h2>
          <p>Proficient in multiple languages and frameworks.</p>
        </div>
        <div className="skills-grid">
          {skillsData.map((item, index) => (
            <SkillCategory key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ title, description, tags, link }) {
  return (
    <div className="project-card">
      <div className="project-content">
        <h3>{title}</h3>
        <p className="project-description">{description}</p>
        <div className="project-tags">
          {tags.map((tag, index) => (
            <span key={index} className="project-tag">
              {tag}
            </span>
          ))}
        </div>
        {link && (
          <a href={link} className="project-link">
            View Project <Icons.ChevronRight size={16} />
          </a>
        )}
      </div>
    </div>
  );
}

function Projects() {
  const projects = [
    {
      title: "CineHub",
      description:
        "A responsive single-page application using React and Vite. Implemented a custom favoriting system with Local Storage persistence and engineered a clean, modular UI using CSS Modules.",
      tags: ["React", "Vite", "API", "CSS Modules"],
      link: "https://github.com/Jxrtd/CineHub",
    },
    {
      title: "Tepok",
      description:
        "A highly customizable game configuration interface built in Godot 4. Features real-time sensitivity scaling and multi-channel audio mixing with instant visual feedback.",
      tags: ["Godot 4", "GDScript", "Game UI"],
      link: "https://github.com/drewdreww/tepok-game",
    },
    {
      title: "WildQueue",
      description:
        "Transforms manual queuing into a digital campus experience. Engineered a dynamic digital concierge system with specialized Object-Oriented views for Admin, Student, and Teller roles.",
      tags: ["Java", "MySQL", "OOP"],
      link: "https://github.com/jangkayl/WildQueue",
    },
    {
      title: "AniVibe",
      description:
        "A native Android application built with Kotlin and Jetpack Compose. Integrated a third-party Anime API and engineered a custom local database using Room for offline tracking.",
      tags: ["Kotlin", "Jetpack Compose", "Room DB"],
      link: "https://github.com/Jxrtd/AniVibe",
    },
    {
      title: "BankRap E-Wallet",
      description:
        "A P2P micro-lending platform built with Django. Integrated MySQL schemas to handle complex relationships between borrowers and lenders with real-time credit scoring.",
      tags: ["Python", "Django", "MySQL", "FinTech"],
      link: "https://github.com/jangkayl/BankRap---Django",
    },
  ];

  return (
    <section className="projects">
      <div className="section-container">
        <div className="section-header">
          <h2>Recent Projects</h2>
          <p>
            Showcasing expertise in full-stack development, mobile engineering,
            and game systems.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="contact">
      <div className="contact-container">
        <h2>Let's Build Something Amazing</h2>
        <a href="mailto:your.email@school.edu" className="btn btn-primary">
          Send me an email <Icons.ArrowRight size={20} />
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Portfolio. Built with React & CSS</p>
    </footer>
  );
}

// THE FINAL APP COMPONENT
function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
