import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, ArrowRight, BrainCircuit, Code2,
  Database, Github, Linkedin, Mail, MapPin, Menu, X,
  Cpu, Sparkles, Smartphone, ShieldCheck, ExternalLink,
  Phone, Quote
} from "lucide-react";
import "./styles.css";

/* ── Data ─────────────────────────────────────────────────────── */
const skills = [
  { title: "Languages",    items: ["Python", "JavaScript", "TypeScript", "HTML5", "CSS3"],                                               icon: Code2       },
  { title: "Frontend",     items: ["React.js", "Streamlit", "Responsive Design", "UI Development"],                                      icon: Smartphone  },
  { title: "Backend",      items: ["Django", "REST APIs", "Backend Logic", "API Integration"],                                           icon: Database    },
  { title: "AI & ML",      items: ["Generative AI", "Machine Learning", "LLMs", "RAG", "LangChain", "Prompt Engineering", "Embeddings"], icon: BrainCircuit},
  { title: "Data & Tools", items: ["PostgreSQL", "Git", "GitHub", "Docker", "VS Code", "WordPress"],                                     icon: Cpu         },
  { title: "Additional",   items: ["Software Testing", "Debugging", "UI/UX Design", "IoT"],                                              icon: ShieldCheck },
];

const projects = [
  {
    number: "01", visualClass: "proj-v1",
    type: "AI APPLICATION",
    title: "AI Interview Practice",
    description: "An interview preparation application that uses AI to help users practise interviews, structure answers with the STAR method and get personalised feedback.",
    stack: ["Python", "Streamlit", "AI API", "Prompt Engineering"],
    icon: BrainCircuit,
    note: "AI-powered interview prep",
  },
  {
    number: "02", visualClass: "proj-v2",
    type: "FULL-STACK APPLICATION",
    title: "Hospital Management System",
    description: "A healthcare-focused application designed to support hospital workflows through frontend and backend functionality, API communication and database integration.",
    stack: ["React", "Backend APIs", "Database Integration", "Git"],
    icon: ShieldCheck,
    note: "Healthcare software solution",
  },
  {
    number: "03", visualClass: "proj-v3",
    type: "IOT & EMBEDDED SYSTEMS",
    title: "Smart Room Safety Monitor",
    description: "An Arduino-based monitoring project using sound, light and temperature sensors, with LED and buzzer alerts to respond to environmental changes.",
    stack: ["Arduino Uno", "C/C++", "Sensors", "IoT"],
    icon: Cpu,
    note: "Sensor-based room monitor",
  },
];

const education = [
  ["Certificate in Software Engineering", "Refactory Academy",              "2026"],
  ["Certificate in Software & AI",        "Turing College",                 "2026"],
  ["Certificate in Machine Learning",     "Turing College",                 "2026"],
  ["Certificate in Cloud Computing",      "Refactory Academy",              "2026"],
  ["WordPress Development",               "WordPress",                      "2026"],
  ["ODE Certificate",                     "Groundbreaker Talents",          "2026"],
  ["Uganda Certificate of Education",     "Maryhill High School",           "2026"],
];

const contactLinks = [
  { icon: Mail,     label: "Email",    sub: "gumushobeangel@gmail.com",  href: "mailto:gumushobeangel@gmail.com" },
  { icon: Phone,    label: "Phone",    sub: "+256 740 230 081 / +256 755 000 083", href: "tel:+256740230081"              },
  { icon: Github,   label: "GitHub",   sub: "github.com/gumushobeangel-del", href: "https://github.com/gumushobeangel-del", external: true },
  { icon: Linkedin, label: "LinkedIn", sub: "linkedin.com/in/gumoshabe-angel-6031203b9", href: "https://www.linkedin.com/in/gumoshabe-angel-6031203b9/", external: true },
];

/* ── Scroll-reveal hook ─────────────────────────────────────── */
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-stagger");
    if (!els.length) return;
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("visible"); obs.unobserve(e.target); }
        }),
      { threshold: 0.1 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
}

/* ── App ────────────────────────────────────────────────────── */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  useReveal();

  return (
    <div>
      {/* Fixed background layer */}
      <div className="bg-layer" aria-hidden="true">
        <div className="blob blob-1" />
        <div className="blob blob-2" />
        <div className="blob blob-3" />
      </div>

      {/* ── Nav ────────────────────────────────────────────── */}
      <div className="topbar-wrap">
        <div className="topbar">
          <a className="brand" href="#home" onClick={closeMenu}>
            <span className="brand-mark">GA</span>
            <span>Gumoshabe Angel</span>
          </a>

          <button
            className="menu-toggle"
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="main-nav"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav id="main-nav" className={menuOpen ? "nav nav-open" : "nav"} aria-label="Main">
            {["About", "Skills", "Projects", "Education", "Contact"].map((s) => (
              <a key={s} href={`#${s.toLowerCase()}`} onClick={closeMenu}>{s}</a>
            ))}
            <a className="nav-cta" href="mailto:gumushobeangel@gmail.com">
              Let's talk <ArrowUpRight size={14} />
            </a>
          </nav>
        </div>
      </div>

      <main>
        {/* ══════════════════════════════════════════════════
            HERO
        ══════════════════════════════════════════════════ */}
        <section className="hero" id="home">
          {/* Left copy */}
          <div>
            <div className="hero-badge">
              <span className="pulse" aria-hidden="true" />
              AVAILABLE FOR OPPORTUNITIES
            </div>

            <p className="hero-pre">Hello, I'm</p>

            <h1>
              Gumoshabe
              <span className="name-accent">Angel</span>
            </h1>

            <div className="hero-role">
              AI Engineer
              <span className="role-sep">+</span>
              Full-Stack Developer
            </div>

            <p className="hero-desc">
              I build thoughtful digital products across full-stack development
              and applied AI — turning complex ideas into useful, accessible
              experiences.
            </p>

            <div className="hero-cta">
              <a className="btn btn-primary" href="#projects">
                See my work <ArrowUpRight size={16} />
              </a>
              <a className="btn btn-outline" href="mailto:gumushobeangel@gmail.com">
                Get in touch
              </a>
            </div>

            <div className="hero-meta">
              <span><MapPin size={13} /> Kampala, Uganda</span>
              <span className="hero-divider" aria-hidden="true" />
              <span>Software · AI · Web</span>
            </div>
          </div>

          {/* Right portrait */}
          <div className="hero-portrait">
            <div className="portrait-ring portrait-ring-1" aria-hidden="true" />
            <div className="portrait-ring portrait-ring-2" aria-hidden="true" />

            <div className="portrait-card">
              <img src="/angel-portrait.png" alt="Gumoshabe Angel" />
              <div className="portrait-tag">
                <span className="pulse" aria-hidden="true" />
                KAMPALA, UGANDA
              </div>
            </div>

            <div className="hero-badge-float badge-tl">
              <Sparkles size={14} /> AI &amp; Software
            </div>
            <div className="hero-badge-float badge-bl">
              <Code2 size={14} /> Building with purpose
            </div>
          </div>

          {/* Scroll cue */}
          <a className="scroll-hint" href="#about" aria-label="Scroll to About">
            <span className="scroll-mouse" aria-hidden="true" />
            SCROLL
          </a>
        </section>

        {/* ══════════════════════════════════════════════════
            ABOUT — BENTO GRID
        ══════════════════════════════════════════════════ */}
        <section className="about-section" id="about">
          <div className="section-wrap">
            <div className="about-header reveal">
              <div>
                <span className="section-label">01 / About me</span>
                <h2 className="section-title">
                  Curious mind.<br />
                  <span style={{ background: "linear-gradient(120deg,#c4f07a,#a8e063)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                    Builder's mindset.
                  </span>
                </h2>
              </div>
              <p className="about-header-right">
                Software developer based in Kampala, Uganda — building useful
                digital products at the intersection of engineering and AI.
              </p>
            </div>

            <div className="bento reveal-stagger">
              {/* Bio */}
              <div className="bento-card bento-bio">
                <p className="bio-lead">
                  I'm focused on building digital products that work — from
                  the interface people interact with to the logic that powers it.
                </p>
                <p>
                  My work spans full-stack application development, AI-powered
                  experiences and practical technology solutions. I enjoy
                  turning a problem into a clear plan, writing the code,
                  testing the result and iterating.
                </p>
                <p>
                  I'm especially interested in the intersection of software
                  engineering, Artificial Intelligence and Machine Learning.
                </p>
                <div className="trait-pills">
                  {["Problem solving", "Continuous improvement", "Team collaboration", "Attention to detail"].map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>

              {/* Photo */}
              <div className="bento-card bento-photo">
                <img src="/angel-portrait.png" alt="Gumoshabe Angel" />
              </div>

              {/* Stats */}
              <div className="bento-stat-row">
                {[
                  { num: "3+", label: "Projects shipped"     },
                  { num: "7",  label: "Certifications earned" },
                  { num: "5+", label: "Technologies mastered" },
                  { num: "3",  label: "Languages spoken"      },
                ].map(({ num, label }) => (
                  <div className="stat-card" key={label}>
                    <span className="stat-num">{num}</span>
                    <span className="stat-label">{label}</span>
                  </div>
                ))}
              </div>

              {/* Location chip */}
              <div className="bento-card bento-tag">
                <div className="tag-icon"><MapPin size={20} /></div>
                <div className="tag-label">Kampala</div>
                <div className="tag-sub">Uganda, East Africa</div>
              </div>

              {/* Quote */}
              <div className="bento-card bento-quote">
                <span className="quote-mark" aria-hidden="true">"</span>
                <blockquote>
                  Great software is not just about the code — it's about
                  understanding the problem deeply and building the simplest
                  solution that actually works.
                </blockquote>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            SKILLS
        ══════════════════════════════════════════════════ */}
        <section className="skills-section" id="skills">
          <div className="section-wrap">
            <div className="skills-header">
              <div className="reveal">
                <span className="section-label">02 / Toolkit</span>
                <h2 className="section-title">Skills &amp; technologies</h2>
              </div>
              <p className="skills-header-right reveal">
                Tools and concepts I use to design, build and improve digital
                solutions across frontend, backend and AI.
              </p>
            </div>

            <div className="skills-grid reveal-stagger">
              {skills.map(({ title, items, icon: Icon }, i) => (
                <article className="skill-card" key={title}>
                  <div className="skill-head">
                    <span className="skill-icon" aria-hidden="true"><Icon size={19} /></span>
                    <span className="skill-num">0{i + 1}</span>
                  </div>
                  <h3>{title}</h3>
                  <div className="skill-pills">
                    {items.map((item) => <span key={item}>{item}</span>)}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            PROJECTS
        ══════════════════════════════════════════════════ */}
        <section className="projects-section" id="projects">
          <div className="section-wrap">
            <div className="projects-header">
              <div className="reveal">
                <span className="section-label">03 / Selected work</span>
                <h2 className="section-title">Projects that solve problems.</h2>
              </div>
              <p className="projects-header-right reveal">
                A selection of software, AI and IoT projects built with a focus
                on usefulness and real-world impact.
              </p>
            </div>

            <div className="projects-grid reveal-stagger">
              {projects.map(({ number, visualClass, type, title, description, stack, icon: Icon, note }) => (
                <article className="project-card" key={number}>
                  <div className={`proj-visual ${visualClass}`}>
                    <span className="proj-ring proj-ring-a" aria-hidden="true" />
                    <span className="proj-ring proj-ring-b" aria-hidden="true" />
                    <div className="proj-icon"><Icon size={30} /></div>
                    <span className="proj-num">{number} / 03</span>
                  </div>

                  <div className="proj-body">
                    <div className="proj-type">{type}</div>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <div className="proj-stack">
                      {stack.map((s) => <span key={s}>{s}</span>)}
                    </div>
                  </div>

                  <div className="proj-footer">
                    <span>{note}</span>
                    <ArrowRight size={16} aria-hidden="true" />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            EDUCATION
        ══════════════════════════════════════════════════ */}
        <section className="education-section" id="education">
          <div className="section-wrap">
            <div className="edu-header">
              <div className="reveal">
                <span className="section-label">04 / Learning</span>
                <h2 className="section-title">Education &amp; certifications</h2>
              </div>
              <p className="edu-header-right reveal">
                Training and qualifications from recognised institutions and
                certification programmes.
              </p>
            </div>

            <div className="edu-list reveal">
              {education.map(([qualification, institution, year], i) => (
                <div className="edu-row" key={qualification}>
                  <span className="edu-idx">0{i + 1}</span>
                  <div className="edu-name">
                    {qualification}
                    <small>{institution}</small>
                  </div>
                  <span className="edu-year">{year}</span>
                </div>
              ))}
            </div>

            <div className="lang-strip reveal">
              <span className="lang-label">Languages</span>
              <div className="lang-pills">
                {["English", "Luganda", "Runyankole"].map((l) => (
                  <span key={l}>{l}</span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════
            CONTACT
        ══════════════════════════════════════════════════ */}
        <section className="contact-section" id="contact">
          <div className="section-wrap">
            <div className="contact-grid">
              <div className="contact-left">
                <span className="section-label reveal">05 / Contact</span>
                <h2 className="reveal">
                  Have a project<br />in <span>mind?</span>
                </h2>
                <p className="reveal">
                  I'm open to discussing software development, AI opportunities
                  and meaningful collaborations. Let's build something useful
                  together.
                </p>
                <a className="btn btn-primary reveal" href="mailto:gumushobeangel@gmail.com">
                  Start a conversation <ArrowUpRight size={16} />
                </a>
              </div>

              <div className="contact-right reveal">
                <h3>Reach me directly</h3>
                <div className="contact-links">
                  {contactLinks.map(({ icon: Icon, label, sub, href, external }) => (
                    <a
                      key={label}
                      className="contact-link"
                      href={href}
                      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
                    >
                      <span className="contact-link-icon"><Icon size={17} /></span>
                      <div className="contact-link-text">
                        <strong>{label}</strong>
                        <span>{sub}</span>
                      </div>
                      {external && <ExternalLink size={13} style={{ marginLeft: "auto", color: "var(--text-dim)" }} />}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────────── */}
      <footer className="footer">
        <a className="brand" href="#home">
          <span className="brand-mark">GA</span>
          <span>GUMOSHABE<span className="muted">.DEV</span></span>
        </a>
        <span>Designed &amp; built by Gumoshabe Angel</span>
        <span>© {new Date().getFullYear()} · Kampala, Uganda</span>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
