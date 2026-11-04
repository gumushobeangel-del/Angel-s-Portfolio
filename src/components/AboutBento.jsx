import React, { useState, useEffect } from "react";
import { MapPin, Globe, Sparkles, CheckCircle2, Quote, Clock, Award, Code2 } from "lucide-react";
import { personalInfo, stats } from "../data/portfolioData";

export function AboutBento() {
  const [localTime, setLocalTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      try {
        const str = new Intl.DateTimeFormat("en-US", {
          timeZone: "Africa/Kampala",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        }).format(now);
        setLocalTime(str);
      } catch {
        setLocalTime(now.toLocaleTimeString());
      }
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="section-wrap">
        <div className="about-header reveal">
          <div>
            <span className="section-label">01 / About Me</span>
            <h2 className="section-title">
              Curious Mind.<br />
              <span className="name-accent">Disciplined Engineering.</span>
            </h2>
          </div>
          <p className="about-header-right">
            Software engineer based in Kampala, Uganda — building reliable digital solutions
            at the intersection of high-performance web development and artificial intelligence.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="bento reveal-stagger">
          {/* Main Bio Card */}
          <div className="bento-card bento-bio">
            <div className="card-top-tag">
              <Code2 size={14} className="text-green" />
              <span>ENGINEERING PHILOSOPHY</span>
            </div>
            <p className="bio-lead">{personalInfo.bioLead}</p>
            {personalInfo.bioDescription.map((para, i) => (
              <p key={i} className="bio-para">{para}</p>
            ))}

            <div className="trait-pills-wrap">
              <span className="trait-label">CORE PRACTICES:</span>
              <div className="trait-pills">
                {personalInfo.traits.map((t) => (
                  <span key={t} className="trait-chip">
                    <CheckCircle2 size={12} className="text-green" />
                    <span>{t}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Photo Card */}
          <div className="bento-card bento-photo">
            <img
              src="/angel-portrait.png"
              alt="Gumoshabe Angel portrait"
              className="bento-portrait-img"
              loading="lazy"
            />
            <div className="bento-photo-overlay">
              <span className="photo-tag-name">{personalInfo.name}</span>
              <span className="photo-tag-role">{personalInfo.title}</span>
            </div>
          </div>

          {/* Stats Bar */}
          <div className="bento-stat-row">
            {stats.map((s, i) => (
              <div className="stat-card" key={i}>
                <span className="stat-num">{s.num}</span>
                <span className="stat-label">{s.label}</span>
                <span className="stat-sub">{s.subtext}</span>
              </div>
            ))}
          </div>

          {/* Location & Time Chip */}
          <div className="bento-card bento-tag">
            <div className="tag-icon">
              <MapPin size={22} />
            </div>
            <div className="tag-label">{personalInfo.location}</div>
            <div className="tag-sub">{personalInfo.country}</div>
            <div className="tag-clock-chip">
              <Clock size={12} />
              <span>{localTime || "EAT (UTC+3)"}</span>
            </div>
          </div>

          {/* Quote Card */}
          <div className="bento-card bento-quote">
            <span className="quote-mark" aria-hidden="true">“</span>
            <blockquote>{personalInfo.quote}</blockquote>
            <div className="quote-author">
              <span className="author-line" />
              <span>{personalInfo.name} — AI Engineer &amp; Full-Stack Developer</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
