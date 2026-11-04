import React, { useState } from "react";
import {
  ArrowRight,
  BrainCircuit,
  ShieldCheck,
  Cpu,
  Sparkles,
  Stethoscope,
  Activity,
  Layers,
  ExternalLink,
  Eye,
  Filter
} from "lucide-react";
import { projectsData } from "../data/portfolioData";

export function ProjectsSection({ onOpenMediLink, onOpenProjectDetail }) {
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = ["All", "Full-Stack", "AI & ML", "IoT & Hardware"];

  const filteredProjects =
    activeCategory === "All"
      ? projectsData
      : projectsData.filter((p) => p.category === activeCategory);

  const getProjectIcon = (id) => {
    switch (id) {
      case "hospital-system":
        return Stethoscope;
      case "ai-interview":
        return BrainCircuit;
      case "iot-monitor":
        return Cpu;
      default:
        return Sparkles;
    }
  };

  const handleCardClick = (project) => {
    if (project.id === "hospital-system") {
      onOpenMediLink();
    } else {
      onOpenProjectDetail(project);
    }
  };

  return (
    <section className="projects-section" id="projects">
      <div className="section-wrap">
        {/* Section Header */}
        <div className="projects-header reveal">
          <div>
            <span className="section-label">03 / Flagship Work</span>
            <h2 className="section-title">Engineered to Solve Real Problems.</h2>
          </div>
          <p className="projects-header-right">
            Production-grade systems bridging modern full-stack web architectures,
            applied Generative AI agents, and embedded hardware telemetry.
          </p>
        </div>

        {/* Filter Strip */}
        <div className="project-filter-strip reveal">
          <div className="filter-pills-wrap">
            <span className="filter-label">
              <Filter size={13} />
              <span>Filter:</span>
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                className={`filter-pill ${activeCategory === cat ? "filter-pill-active" : ""}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
                <span className="pill-count">
                  {cat === "All"
                    ? projectsData.length
                    : projectsData.filter((p) => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Featured Flagship Hero Card: MediLink Hospital System */}
        {(activeCategory === "All" || activeCategory === "Full-Stack") && (
          <div className="featured-flagship-card reveal">
            <div className="flagship-top-badge">
              <span className="pulse" />
              <span>CROWN JEWEL FULL-STACK PROJECT · ATTACHED LOCAL WORKSPACE</span>
            </div>

            <div className="flagship-content-grid">
              <div className="flagship-left">
                <span className="flagship-category">HEALTHCARE WORKSPACE &amp; CLINICAL EMR</span>
                <h3 className="flagship-title">MediLink Hospital Operations &amp; Clinical Platform</h3>
                <p className="flagship-desc">
                  An enterprise-ready healthcare platform engineered with a <strong>FastAPI</strong> REST backend,{" "}
                  <strong>SQLAlchemy 2.0</strong> ORM, and a <strong>React 18 + TypeScript + Vite</strong> SPA.
                  Streamlines patient intake, emergency triage queues, electronic pharmacy prescriptions, diagnostic laboratories, and role-based staff provisioning.
                </p>

                <div className="flagship-highlights-pills">
                  <span className="feat-chip">FastAPI REST Backend</span>
                  <span className="feat-chip">React 18 TypeScript SPA</span>
                  <span className="feat-chip">SQLAlchemy 2.0 ORM</span>
                  <span className="feat-chip">Argon2id Cryptography</span>
                  <span className="feat-chip">Alembic Migrations</span>
                  <span className="feat-chip">7 RBAC Staff Roles</span>
                </div>

                <div className="flagship-actions">
                  <button
                    className="btn btn-primary"
                    onClick={onOpenMediLink}
                  >
                    <Eye size={16} />
                    <span>Launch Interactive System Tour</span>
                  </button>
                  <span className="flagship-note">
                    <Activity size={14} className="text-teal" />
                    <span>Live interactive simulated triage, labs &amp; dispensary</span>
                  </span>
                </div>
              </div>

              <div className="flagship-right-preview" onClick={onOpenMediLink}>
                <div className="preview-terminal-header">
                  <div className="traffic-dots">
                    <span className="dot dot-red" />
                    <span className="dot dot-yellow" />
                    <span className="dot dot-green" />
                  </div>
                  <span className="preview-title">medilink-ops-center.tsx</span>
                  <span className="preview-live-tag">LIVE DEMO</span>
                </div>

                <div className="preview-terminal-body">
                  <div className="mini-telemetry-strip">
                    <div className="mini-tele-card">
                      <span className="m-label">ACTIVE TRIAGE</span>
                      <span className="m-val text-amber">7 Patients</span>
                    </div>
                    <div className="mini-tele-card">
                      <span className="m-label">BED OCCUPANCY</span>
                      <span className="m-val text-teal">82%</span>
                    </div>
                    <div className="mini-tele-card">
                      <span className="m-label">API LATENCY</span>
                      <span className="m-val text-green">18ms</span>
                    </div>
                  </div>

                  <div className="mock-queue-row">
                    <span className="mock-badge emergency">Emergency</span>
                    <span className="mock-name">Amina Nakato · BP 148/95</span>
                    <span className="mock-status">Calling In →</span>
                  </div>

                  <div className="mock-queue-row">
                    <span className="mock-badge urgent">Urgent</span>
                    <span className="mock-name">David Otim · SpO2 96%</span>
                    <span className="mock-status">Triage Done</span>
                  </div>

                  <div className="preview-click-cue">
                    <Eye size={14} />
                    <span>Click anywhere to explore full clinical dashboard tour</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Projects Grid for All / Filtered Projects */}
        <div className="projects-grid reveal-stagger">
          {filteredProjects.map((project) => {
            const Icon = getProjectIcon(project.id);
            return (
              <article
                className={`project-card ${project.visualClass}`}
                key={project.id}
                onClick={() => handleCardClick(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    handleCardClick(project);
                  }
                }}
              >
                {/* Visual Header */}
                <div className="proj-visual">
                  <span className="proj-ring proj-ring-a" aria-hidden="true" />
                  <span className="proj-ring proj-ring-b" aria-hidden="true" />
                  <div className="proj-icon">
                    <Icon size={28} />
                  </div>
                  <span className="proj-num">{project.number} / 03</span>
                  <span className="proj-badge-top">{project.badge.split(" ")[0]}</span>
                </div>

                {/* Body */}
                <div className="proj-body">
                  <div className="proj-type">{project.category} APPLICATION</div>
                  <h3 className="proj-title">{project.title}</h3>
                  <p className="proj-desc">{project.shortDescription}</p>

                  <div className="proj-stack">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span key={tech}>{tech}</span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="stack-more">+{project.stack.length - 4} more</span>
                    )}
                  </div>
                </div>

                {/* Footer */}
                <div className="proj-footer">
                  <span className="proj-footer-cta">
                    <Eye size={14} />
                    <span>{project.id === "hospital-system" ? "Explore MediLink Tour" : "Inspect System Architecture"}</span>
                  </span>
                  <ArrowRight size={16} className="proj-arrow" aria-hidden="true" />
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
