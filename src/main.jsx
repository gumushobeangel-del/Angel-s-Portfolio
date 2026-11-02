import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, BrainCircuit, Code2,
  Database, Github, Linkedin, Mail, MapPin, Menu, X, Cpu, Sparkles,
  Smartphone, ShieldCheck, ExternalLink
} from "lucide-react";
import "./styles.css";

const skills = [
  { title: "Languages", items: ["Python", "JavaScript", "TypeScript", "HTML5", "CSS3"], icon: Code2 },
  { title: "Frontend", items: ["React.js", "Streamlit", "Responsive Design", "UI Development"], icon: Smartphone },
  { title: "Backend", items: ["Django", "REST APIs", "Backend Logic", "API Integration"], icon: Database },
  { title: "AI & Machine Learning", items: ["Generative AI", "Machine Learning", "LLMs", "RAG", "LangChain", "Prompt Engineering", "Embeddings"], icon: BrainCircuit },
  { title: "Data & Tools", items: ["PostgreSQL", "Git", "GitHub", "Docker", "VS Code", "WordPress"], icon: Cpu },
  { title: "Additional", items: ["Software Testing", "Debugging", "UI/UX Design", "IoT"], icon: ShieldCheck },
];

const projects = [
  {
    number: "01",
    type: "AI APPLICATION",
    title: "AI Interview Practice",
    description: "An interview preparation application that uses AI to help users practise interviews, structure answers with the STAR method and get personalised feedback.",
    stack: ["Python", "Streamlit", "AI API", "Prompt Engineering"],
    icon: BrainCircuit,
    note: "AI-powered interview preparation"
  },
  {
    number: "02",
    type: "FULL-STACK APPLICATION",
    title: "Hospital Management System",
    description: "A healthcare-focused application designed to support hospital workflows through frontend and backend functionality, API communication and database integration.",
    stack: ["React", "Backend APIs", "Database Integration", "Git"],
    icon: ShieldCheck,
    note: "Healthcare software solution"
  },
  {
    number: "03",
    type: "IOT & EMBEDDED SYSTEMS",
    title: "Smart Room Safety Monitor",
    description: "An Arduino-based monitoring project using sound, light and temperature sensors, with LED and buzzer alerts to respond to environmental changes.",
    stack: ["Arduino Uno", "C/C++", "Sensors", "IoT"],
    icon: Cpu,
    note: "Sensor-based room monitoring"
  }
];

const education = [
  ["Certificate in Software Engineering", "Refactory Academy", "2026"],
  ["Certificate in Software and AI", "Turing College", "2026"],
  ["Certificate in Machine Learning", "Turing College", "2026"],
  ["Certificate in Cloud Computing", "Refactory Academy", "2026"],
  ["WordPress Certificate", "Groundbreaker Talents", "2026"],
  ["ODE Certificate", "Groundbreaker Talents", "2026"],
  ["Uganda Certificate of Education (UCE)", "St. Francis Buhunga High School", "2026"],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const email = "gumushobeangel@gmail.com";
  return (
    <div className="site-shell">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="topbar">
        <a className="brand" href="#home" onClick={closeMenu}><span className="brand-mark">GA</span><span>GUMOSHABE<span className="muted">.DEV</span></span></a>
        <button className="menu-toggle" aria-label="Toggle navigation" aria-expanded={menuOpen} aria-controls="main-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        <nav id="main-navigation" className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main navigation">
          {["About", "Skills", "Projects", "Education", "Contact"].map(item => <a key={item} href={`#${item.toLowerCase()}`} onClick={closeMenu}>{item}</a>)}
          <a className="nav-cta" href={`mailto:${email}`}>Let's talk <ArrowUpRight size={15}/></a>
        </nav>
      </header>

      <main>
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="status-dot" /> AVAILABLE FOR OPPORTUNITIES <span className="eyebrow-line" /></div>
            <p className="intro">Hello, I'm</p>
            <h1>Gumoshabe<br/><span>Angel</span></h1>
            <h2>AI Engineer <b>+</b> Full-Stack Developer</h2>
            <p className="hero-text">I build thoughtful digital products across full-stack development and applied AI, turning complex ideas into useful, accessible experiences.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowUpRight size={17}/></a>
              <a className="button button-quiet" href={`mailto:${email}`}>Get in touch <ArrowDownRight size={17}/></a>
            </div>
            <div className="hero-meta"><span><MapPin size={15}/> Kampala, Uganda</span><span className="meta-divider"/> <span>Software · AI · Web</span></div>
          </div>
          <div className="hero-art">
            <div className="portrait-frame">
              <img src="/angel-portrait.png" alt="Gumoshabe Angel standing outdoors" />
              <span className="portrait-caption"><span className="status-dot" /> KAMPALA, UGANDA</span>
            </div>
            <div className="float-chip chip-ai"><Sparkles size={16}/> AI & SOFTWARE</div>
            <div className="float-chip chip-code"><Code2 size={16}/> BUILDING WITH PURPOSE</div>
            <div className="hero-index">01 / PORTFOLIO</div>
          </div>
          <a className="scroll-cue" href="#about"><span/> SCROLL TO EXPLORE</a>
        </section>

        <section className="section-wrap about-section" id="about">
          <div className="section-kicker">01 / ABOUT ME</div>
          <div className="about-grid">
            <h2>Curious mind.<br/><span>Builder's mindset.</span></h2>
            <div className="about-copy"><p className="lead">I’m a software developer focused on building useful digital products — from the interface people use to the logic that powers it.</p><p>My work and projects span full-stack application development, AI-powered experiences and practical technology solutions. I enjoy turning a problem into a clear plan, writing the code, testing the result and improving it.</p><p>I'm especially interested in the intersection of software engineering, Artificial Intelligence and Machine Learning.</p><div className="about-tags"><span>Problem solving</span><span>Continuous improvement</span><span>Team collaboration</span></div></div>
          </div>
        </section>

        <section className="section-wrap skills-section" id="skills">
          <div className="section-heading"><div><div className="section-kicker">02 / TOOLKIT</div><h2>Skills & technologies</h2></div><p>Tools and concepts I use to design, build and improve digital solutions.</p></div>
          <div className="skills-grid">{skills.map(({title,items,icon:Icon},i)=><article className="skill-card" key={title}><div className="skill-card-top"><span className="skill-icon"><Icon size={20}/></span><span className="card-number">0{i+1}</span></div><h3>{title}</h3><div className="skill-tags">{items.map(item=><span key={item}>{item}</span>)}</div></article>)}</div>
        </section>

        <section className="section-wrap projects-section" id="projects">
          <div className="section-heading"><div><div className="section-kicker">03 / SELECTED WORK</div><h2>Projects that solve problems.</h2></div><p>A selection of software, AI and IoT projects.</p></div>
          <div className="projects-grid">{projects.map(({number,type,title,description,stack,icon:Icon,note})=><article className="project-card" key={number}>
            <div className={`project-visual project-visual-${number}`} aria-hidden="true"><span className="visual-orbit visual-orbit-one"/><span className="visual-orbit visual-orbit-two"/><div className="project-icon"><Icon size={35}/></div><span className="visual-index">{number} / 03</span></div>
            <div className="project-main"><div className="project-type">{type}</div><h3>{title}</h3><p>{description}</p><div className="project-stack">{stack.map(s=><span key={s}>{s}</span>)}</div></div>
            <div className="project-card-footer"><span>{note}</span><ArrowRight size={17}/></div>
          </article>)}</div>
        </section>

        <section className="section-wrap education-section" id="education">
          <div className="section-heading"><div><div className="section-kicker">04 / LEARNING</div><h2>Education & certifications</h2></div><p>Training and qualifications.</p></div>
          <div className="education-list">{education.map(([qualification,institution,year],i)=><div className="education-row" key={qualification}><span className="edu-index">0{i+1}</span><div className="edu-name">{qualification}<small>{institution}</small></div><span className="edu-year">{year}</span></div>)}</div>
          <div className="languages"><span className="section-kicker">LANGUAGES</span><div><span>English</span><span>Luganda</span><span>Runyankole</span></div></div>
        </section>

        <section className="contact-section" id="contact"><div className="section-wrap contact-inner"><div className="section-kicker">05 / CONTACT</div><h2>Have a project<br/>in <span>mind?</span></h2><p>I'm open to discussing software development, AI opportunities and meaningful collaborations.</p><a className="button button-primary contact-button" href={`mailto:${email}`}>Start a conversation <ArrowUpRight size={18}/></a><div className="contact-details"><a href={`mailto:${email}`}><Mail size={17}/>{email}</a><a href="tel:+256740230081">+256 740 230 081</a><a href="https://github.com/gumushobeangel-del" target="_blank" rel="noreferrer"><Github size={17}/> GitHub <ExternalLink size={13}/></a><a href="https://www.linkedin.com/in/gumushabe-angel-6031203b9/" target="_blank" rel="noreferrer"><Linkedin size={17}/> LinkedIn <ExternalLink size={13}/></a></div></div></section>
      </main>
      <footer className="footer"><a className="brand" href="#home"><span className="brand-mark">GA</span><span>GUMOSHABE<span className="muted">.DEV</span></span></a><span>Designed & built by Gumoshabe Angel</span><span>© {new Date().getFullYear()} · Kampala, Uganda</span></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);