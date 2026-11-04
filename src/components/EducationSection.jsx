import React from "react";
import { Award, GraduationCap, CheckCircle2, Languages, Globe } from "lucide-react";
import { educationData, personalInfo } from "../data/portfolioData";

export function EducationSection() {
  return (
    <section className="education-section" id="education">
      <div className="section-wrap">
        <div className="edu-header reveal">
          <div>
            <span className="section-label">05 / Continuous Growth</span>
            <h2 className="section-title">Education &amp; Certifications</h2>
          </div>
          <p className="edu-header-right">
            Rigorous software engineering, AI, and cloud training from recognized
            institutions, tech bootcamps, and certification bodies.
          </p>
        </div>

        {/* Education Timeline Cards */}
        <div className="edu-list-container reveal">
          {educationData.map((item, idx) => (
            <div className="edu-card-item" key={item.qualification}>
              <div className="edu-card-left">
                <span className="edu-idx">0{idx + 1}</span>
                <div className="edu-info">
                  <h4 className="edu-title">{item.qualification}</h4>
                  <div className="edu-meta-row">
                    <span className="edu-inst">{item.institution}</span>
                    <span className="edu-dot" />
                    <span className="edu-type">{item.credentialType}</span>
                  </div>
                  <div className="edu-skills-tags">
                    {item.skills.map((s) => (
                      <span key={s} className="edu-skill-pill">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="edu-card-right">
                <span className="edu-year-badge">{item.year}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Spoken Languages Strip */}
        <div className="lang-strip-card reveal">
          <div className="lang-header">
            <Languages size={18} className="text-green" />
            <span className="lang-label">SPOKEN &amp; WRITTEN LANGUAGES</span>
          </div>

          <div className="lang-pills-row">
            {personalInfo.spokenLanguages.map((lang) => (
              <div className="lang-pill-item" key={lang.name}>
                <span className="lang-name">{lang.name}</span>
                <span className="lang-level-badge">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
