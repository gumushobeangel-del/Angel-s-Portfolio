import React, { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, FileText, Sparkles } from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export function Navbar({ onOpenResume }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["home", "about", "skills", "projects", "education", "contact"];
      const scrollPos = window.scrollY + 180;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  const navLinks = [
    { label: "About", href: "#about", id: "about" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Education", href: "#education", id: "education" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  return (
    <header className={`topbar-wrap ${scrolled ? "topbar-scrolled" : ""}`}>
      <div className="topbar">
        {/* Brand */}
        <a className="brand" href="#home" onClick={closeMenu}>
          <span className="brand-mark">{personalInfo.initials}</span>
          <span className="brand-text">{personalInfo.name}</span>
        </a>

        {/* Desktop Nav */}
        <nav className="nav desktop-nav" aria-label="Main Navigation">
          {navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`nav-link ${activeSection === item.id ? "nav-link-active" : ""}`}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}

          <button
            className="nav-btn-resume"
            onClick={() => {
              closeMenu();
              onOpenResume();
            }}
          >
            <FileText size={14} />
            <span>Resume</span>
          </button>

          <a className="nav-cta" href="#contact" onClick={closeMenu}>
            <span>Let's Talk</span>
            <ArrowUpRight size={14} />
          </a>
        </nav>

        {/* Mobile menu trigger */}
        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div className="mobile-drawer-backdrop" onClick={closeMenu}>
          <div
            className="mobile-drawer"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
          >
            <div className="mobile-drawer-header">
              <span className="brand-mark">{personalInfo.initials}</span>
              <span className="brand-name-mobile">{personalInfo.name}</span>
              <button
                className="drawer-close-btn"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mobile-status-strip">
              <span className="pulse" />
              <span>Available for full-time &amp; contracts</span>
            </div>

            <div className="mobile-nav-links">
              {navLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className={`mobile-nav-item ${activeSection === item.id ? "mobile-nav-active" : ""}`}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="mobile-drawer-actions">
              <button
                className="btn btn-outline w-full justify-center"
                onClick={() => {
                  closeMenu();
                  onOpenResume();
                }}
              >
                <FileText size={15} />
                <span>View Full CV / Resume</span>
              </button>

              <a
                className="btn btn-primary w-full justify-center"
                href="#contact"
                onClick={closeMenu}
              >
                <span>Start a Conversation</span>
                <ArrowUpRight size={15} />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
