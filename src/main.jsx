import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { ArrowUp, Github, Linkedin, Heart, ShieldCheck, Stethoscope } from "lucide-react";

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { AboutBento } from "./components/AboutBento";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { EducationSection } from "./components/EducationSection";
import { ContactSection } from "./components/ContactSection";
import { MediLinkModal } from "./components/MediLinkModal";
import { ProjectDetailModal } from "./components/ProjectDetailModal";
import { ResumeModal } from "./components/ResumeModal";
import { Toast } from "./components/Toast";
import { personalInfo } from "./data/portfolioData";

import "./styles.css";

/* ── Scroll-reveal observer hook ─────────────────────────────────────── */
function useScrollReveal() {
  useEffect(() => {
    const targets = document.querySelectorAll(".reveal, .reveal-stagger");
    if (!targets.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

export default function App() {
  useScrollReveal();

  // Modals state
  const [isMediLinkOpen, setIsMediLinkOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  // Toast state
  const [toastMessage, setToastMessage] = useState("");
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (msg) => {
    setToastMessage(msg);
    setToastVisible(true);
    setTimeout(() => {
      setToastVisible(false);
    }, 3200);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="portfolio-app-root">
      {/* Navigation */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      <main>
        {/* Hero Section */}
        <Hero
          onOpenMediLink={() => setIsMediLinkOpen(true)}
          onOpenResume={() => setIsResumeOpen(true)}
          onShowToast={showToast}
        />

        {/* Bento About Section */}
        <AboutBento />

        {/* Technical Skills Matrix */}
        <SkillsSection />

        {/* Projects Showcase (Spotlighting MediLink Hospital System) */}
        <ProjectsSection
          onOpenMediLink={() => setIsMediLinkOpen(true)}
          onOpenProjectDetail={(project) => setSelectedProject(project)}
        />

        {/* Education & Certifications */}
        <EducationSection />

        {/* Contact & Inquiry */}
        <ContactSection onShowToast={showToast} />
      </main>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-wrap">
          <div className="footer-left">
            <a className="brand" href="#home" onClick={scrollToTop}>
              <span className="brand-mark">{personalInfo.initials}</span>
              <span className="brand-text">
                {personalInfo.name}
                <span className="brand-role-dot" />
                <span className="brand-sub">Portfolio</span>
              </span>
            </a>
            <p className="footer-bio-note">
              Crafting reliable software architectures &amp; intelligent AI experiences.
            </p>
          </div>

          <div className="footer-center">
            <div className="footer-status-pill">
              <span className="pulse" />
              <span>Available for full-time roles &amp; consulting</span>
            </div>
            <span className="footer-copy">
              © {new Date().getFullYear()} {personalInfo.name} · Built in {personalInfo.location}
            </span>
          </div>

          <div className="footer-right">
            <div className="footer-social-links">
              <a
                href={personalInfo.github.url}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="footer-icon-link"
              >
                <Github size={16} />
              </a>
              <a
                href={personalInfo.linkedin.url}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="footer-icon-link"
              >
                <Linkedin size={16} />
              </a>
              <button
                className="back-to-top-btn"
                onClick={scrollToTop}
                aria-label="Scroll back to top of page"
                title="Back to top"
              >
                <ArrowUp size={16} />
              </button>
            </div>
          </div>
        </div>
      </footer>

      {/* ── Modals & Notifications ── */}
      <MediLinkModal
        isOpen={isMediLinkOpen}
        onClose={() => setIsMediLinkOpen(false)}
        onShowToast={showToast}
      />

      <ProjectDetailModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        onShowToast={showToast}
      />

      <Toast
        message={toastMessage}
        visible={toastVisible}
        onClose={() => setToastVisible(false)}
      />
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
