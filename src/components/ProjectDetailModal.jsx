import React from "react";
import {
  X,
  BrainCircuit,
  Cpu,
  Sparkles,
  Layers,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  ExternalLink,
  Code2
} from "lucide-react";

export function ProjectDetailModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  const Icon = project.id === "ai-interview" ? BrainCircuit : Cpu;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-container project-detail-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-top-bar">
          <div className="modal-title-group">
            <div className="modal-badge-teal">
              <Icon size={16} />
              <span>{project.badge}</span>
            </div>
            <span className="pill-rbac">{project.category}</span>
          </div>
          <button
            className="modal-close-btn"
            onClick={onClose}
            aria-label="Close modal"
          >
            <X size={20} />
          </button>
        </div>

        <div className="modal-summary-banner">
          <div>
            <h2>{project.title}</h2>
            <p className="summary-text">{project.fullDescription}</p>
            <div className="summary-tech-pills">
              {project.stack.map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="project-metrics-grid">
          {project.metrics.map((m, i) => (
            <div key={i} className="metric-box">
              <span className="metric-box-label">{m.label}</span>
              <span className="metric-box-val">{m.value}</span>
            </div>
          ))}
        </div>

        {/* Key Features List */}
        <div className="modal-features-section">
          <h3>Key Engineering Capabilities</h3>
          <ul className="features-checklist">
            {project.features.map((feature, idx) => (
              <li key={idx}>
                <CheckCircle2 size={16} className="text-green flex-shrink-0" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Architectural Highlights */}
        <div className="modal-arch-section">
          <h3>System Architecture Breakdown</h3>
          <div className="architecture-grid">
            {project.architectureHighlights.map((arch, idx) => (
              <div key={idx} className="arch-card">
                <div className="arch-card-header">
                  <Layers size={16} className="text-green" />
                  <h4>{arch.component}</h4>
                </div>
                <p>{arch.detail}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
          <a
            className="btn btn-primary"
            href="#contact"
            onClick={onClose}
          >
            <span>Inquire About This Solution</span>
            <ArrowRight size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
