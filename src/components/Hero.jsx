import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  ArrowRight,
  Sparkles,
  Code2,
  ShieldCheck,
  Cpu,
  MapPin,
  Clock,
  Copy,
  Check,
  Stethoscope,
  Terminal,
  FileText
} from "lucide-react";
import { personalInfo, stats } from "../data/portfolioData";

export function Hero({ onOpenMediLink, onOpenResume, onShowToast }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [timeStr, setTimeStr] = useState("");

  // Live Kampala Time Clock (UTC+3)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Kampala is UTC+3 (East Africa Time)
      const options = {
        timeZone: "Africa/Kampala",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      try {
        const kampalaTime = new Intl.DateTimeFormat("en-US", options).format(now);
        setTimeStr(kampalaTime);
      } catch {
        setTimeStr(now.toLocaleTimeString());
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    onShowToast("Email copied to clipboard!");
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section className="hero" id="home">
      {/* Background ambient lighting */}
      <div className="hero-radial-glow" aria-hidden="true" />

      {/* Left Content Column */}
      <div className="hero-content">
        {/* Availability & Live Clock Bar */}
        <div className="hero-top-badges">
          <div className="hero-badge hero-status-badge">
            <span className="pulse" aria-hidden="true" />
            <span className="badge-text">{personalInfo.availability}</span>
          </div>

          <div className="hero-badge hero-time-badge" title="Live Local Time in Kampala (UTC+3)">
            <Clock size={12} className="time-icon" />
            <span className="time-text">Kampala: {timeStr || "12:00:00 PM"}</span>
          </div>
        </div>

        <p className="hero-pre">Hello, I'm</p>

        <h1 className="hero-title">
          <span>{personalInfo.name.split(" ")[0]}</span>
          <span className="name-accent">{personalInfo.name.split(" ")[1]}</span>
        </h1>

        <div className="hero-role-bar">
          <span className="role-tag role-ai">AI Engineer</span>
          <span className="role-sep">+</span>
          <span className="role-tag role-fullstack">Full-Stack Developer</span>
        </div>

        <p className="hero-desc">
          Building high-impact digital systems at the intersection of{" "}
          <strong className="text-highlight">full-stack web engineering</strong> and{" "}
          <strong className="text-highlight">applied Artificial Intelligence</strong>.
          From enterprise healthcare platforms to intelligent LLM agents and embedded IoT devices.
        </p>

        {/* Action Buttons */}
        <div className="hero-actions">
          <a className="btn btn-primary" href="#projects">
            <span>Explore My Work</span>
            <ArrowRight size={16} />
          </a>

          <button
            className="btn btn-featured-medilink"
            onClick={onOpenMediLink}
            title="Interactive Live Tour of the Hospital Management System"
          >
            <Stethoscope size={16} className="btn-icon-teal" />
            <span>MediLink Hospital Tour</span>
            <span className="btn-tag-pill">Flagship</span>
          </button>

          <button
            className="btn btn-outline"
            onClick={handleCopyEmail}
            title="Copy email to clipboard"
          >
            {copiedEmail ? <Check size={16} className="text-green" /> : <Copy size={16} />}
            <span>{copiedEmail ? "Email Copied!" : "Copy Email"}</span>
          </button>
        </div>

        {/* Location & Meta strip */}
        <div className="hero-meta">
          <span className="meta-item">
            <MapPin size={13} className="text-green" />
            {personalInfo.location}
          </span>
          <span className="hero-divider" aria-hidden="true" />
          <span className="meta-item">
            <Sparkles size={13} className="text-green" />
            FastAPI · React · LLMs · Python
          </span>
          <span className="hero-divider" aria-hidden="true" />
          <button className="meta-link-btn" onClick={onOpenResume}>
            <FileText size={13} />
            <span>Interactive CV</span>
          </button>
        </div>

        {/* Mini stats row */}
        <div className="hero-stats-strip">
          {stats.map((s, idx) => (
            <div className="hero-stat-box" key={idx}>
              <div className="hero-stat-num">{s.num}</div>
              <div className="hero-stat-lbl">{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Interactive Portrait Card */}
      <div className="hero-portrait-col">
        <div className="portrait-container">
          <div className="portrait-ring portrait-ring-1" aria-hidden="true" />
          <div className="portrait-ring portrait-ring-2" aria-hidden="true" />
          <div className="portrait-glow-halo" aria-hidden="true" />

          <div className="portrait-card">
            <img
              src="/angel-portrait.png"
              alt="Gumoshabe Angel - AI Engineer and Full-Stack Developer"
              className="portrait-img"
              loading="eager"
            />
            <div className="portrait-footer-tag">
              <span className="pulse" aria-hidden="true" />
              <span className="portrait-tag-text">KAMPALA, UGANDA · PROD READY</span>
            </div>
          </div>

          {/* Floating High-Tech Badges */}
          <div className="floating-badge badge-top-right">
            <div className="badge-icon-box ai-icon">
              <Sparkles size={14} />
            </div>
            <div className="badge-text-box">
              <span className="badge-title">Applied AI &amp; LLMs</span>
              <span className="badge-sub">RAG · LangChain · Prompts</span>
            </div>
          </div>

          <div
            className="floating-badge badge-bottom-left clickable-badge"
            onClick={onOpenMediLink}
            title="Click to view MediLink Hospital System"
          >
            <div className="badge-icon-box medilink-icon">
              <Stethoscope size={14} />
            </div>
            <div className="badge-text-box">
              <span className="badge-title">MediLink Hospital System</span>
              <span className="badge-sub">FastAPI + React 18 · Click Tour</span>
            </div>
          </div>

          <div className="floating-badge badge-bottom-right">
            <div className="badge-icon-box iot-icon">
              <Cpu size={14} />
            </div>
            <div className="badge-text-box">
              <span className="badge-title">Embedded Systems</span>
              <span className="badge-sub">Arduino · Multi-Sensor Telemetry</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll mouse cue */}
      <a className="scroll-hint" href="#about" aria-label="Scroll down to About section">
        <span className="scroll-mouse" aria-hidden="true" />
        <span className="scroll-text">EXPLORE</span>
      </a>
    </section>
  );
}
