import React from "react";
import {
  X,
  FileText,
  Download,
  Mail,
  Phone,
  MapPin,
  ExternalLink
} from "lucide-react";
import { personalInfo, educationData } from "../data/portfolioData";

const resumeProjects = [
  {
    title: "AI-Powered Interview Practice Application",
    subtitle: "AI & Software Development Project",
    bullets: [
      "Designed and developed an AI-powered interview preparation application using Python and Streamlit.",
      "Integrated AI APIs to generate interview questions and provide personalised feedback.",
      "Developed interview simulation functionality to help users practise answering questions.",
      "Implemented the STAR method to help users structure and improve their interview responses.",
      "Developed job description analysis functionality to generate relevant interview questions.",
      "Applied prompt engineering and structured AI responses to improve application functionality.",
      "Implemented response validation and error handling to improve reliability and user experience."
    ]
  },
  {
    title: "Hospital Management System",
    subtitle: "Full-Stack Development Project",
    description: "Developed a hospital management system aimed at improving healthcare service delivery and administrative processes.",
    bullets: [
      "Worked on frontend and backend application development.",
      "Implemented application functionality and database integration.",
      "Worked with backend APIs to support communication between frontend and backend services.",
      "Used Git and GitHub for source code management and project collaboration."
    ]
  }
];

const technicalSkills = [
  ["Programming Languages", "Python, JavaScript, TypeScript, HTML5 and CSS3."],
  ["Frontend Development", "React.js, Streamlit, responsive web design and user interface development."],
  ["Backend Development", "Django, Python, REST API development and backend application logic."],
  ["Artificial Intelligence & Machine Learning", "Generative AI, Machine Learning, LLMs, RAG, LangChain, prompt engineering, embeddings and AI API integration."],
  ["Database Management", "PostgreSQL, database design and data management."],
  ["Software Development Tools", "Git, GitHub, Visual Studio Code, Docker and WordPress."],
  ["Other Technical Skills", "Software testing, debugging, API integration, UI/UX design and Internet of Things (IoT)."]
];

const professionalSkills = [
  "Software development and problem-solving",
  "Analytical and critical thinking",
  "Effective communication",
  "Teamwork and collaboration",
  "Creativity and innovation",
  "Project management",
  "Time management",
  "Adaptability and attention to detail"
];

export function ResumeModal({ isOpen, onClose, onShowToast }) {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-container resume-modal"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-top-bar">
          <div className="modal-title-group">
            <div className="modal-badge-teal">
              <FileText size={16} />
              <span>CURRICULUM VITAE PREVIEW</span>
            </div>
            <span className="pill-rbac">Resume</span>
          </div>

          <div className="modal-top-actions">
            <button className="btn-copy-tag" onClick={handlePrint}>
              <Download size={14} />
              <span>Print / Save PDF</span>
            </button>
            <button
              className="modal-close-btn"
              onClick={onClose}
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Resume Paper Content */}
        <div className="resume-paper">
          {/* Header */}
          <div className="resume-header">
            <div>
              <h1 className="resume-name">{personalInfo.name}</h1>
              <p className="resume-role">AI ENGINEER | FULL-STACK DEVELOPER</p>
              <p className="resume-focus">
                AI Integration · Machine Learning · Software Engineering · Backend &amp; Frontend Development
              </p>
            </div>
            <div className="resume-contact-col">
              <div className="rc-item"><Phone size={12} /> {personalInfo.phones.join(" / ")}</div>
              <a className="rc-item" href={`mailto:${personalInfo.email}`}><Mail size={12} /> {personalInfo.email}</a>
              <div className="rc-item resume-link-row">
                <a href={personalInfo.github.url} target="_blank" rel="noreferrer">GitHub</a>
                <a href={personalInfo.linkedin.url} target="_blank" rel="noreferrer">LinkedIn</a>
                <a href="#home" onClick={onClose}>Portfolio</a>
              </div>
              <div className="rc-item"><MapPin size={12} /> {personalInfo.location}</div>
            </div>
          </div>

          <div className="resume-divider" />

          {/* Professional Summary */}
          <div className="resume-section">
            <h3 className="resume-sec-title">PROFESSIONAL SUMMARY</h3>
            <p className="resume-text">
              Results-driven Software Engineer and AI Engineer with practical experience in designing, developing, testing and deploying software applications. Skilled in full-stack development, backend and frontend programming, database management, API integration and AI-powered application development. Proficient in Python, JavaScript, TypeScript, Django, React, Streamlit, HTML, CSS and PostgreSQL. Experienced in developing AI-powered applications, including an interview preparation platform, and working on healthcare management systems. Knowledgeable in Machine Learning, Generative AI, Large Language Models (LLMs), Retrieval-Augmented Generation (RAG) and AI API integration. Strong problem-solving, analytical and technical skills, with the ability to develop functional software solutions, troubleshoot technical challenges and collaborate effectively. Committed to building secure, efficient and user-friendly applications that address real-world problems.
            </p>
          </div>

          {/* Technical Skills */}
          <div className="resume-section">
            <h3 className="resume-sec-title">TECHNICAL SKILLS</h3>
            <div className="resume-skills-grid">
              {technicalSkills.map(([label, details]) => (
                <div className="r-skill-row" key={label}>
                  <strong>{label}:</strong> {details}
                </div>
              ))}
            </div>
          </div>

          {/* Project Experience */}
          <div className="resume-section">
            <h3 className="resume-sec-title">PROJECT EXPERIENCE</h3>
            {resumeProjects.map((proj) => (
              <div key={proj.title} className="resume-proj-item">
                <div className="rp-head">
                  <strong>{proj.title}</strong>
                  <span className="rp-stack">{proj.subtitle}</span>
                </div>
                {proj.description && <p className="rp-desc">{proj.description}</p>}
                <ul className="rp-bullets">
                  {proj.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="resume-section">
            <h3 className="resume-sec-title">PROFESSIONAL SKILLS</h3>
            <ul className="resume-inline-list">
              {professionalSkills.map((skill) => <li key={skill}>{skill}</li>)}
            </ul>
          </div>

          <div className="resume-section">
            <h3 className="resume-sec-title">LANGUAGES</h3>
            <p className="resume-text">English · Luganda · Runyankole</p>
          </div>

          {/* Education & Certifications */}
          <div className="resume-section">
            <h3 className="resume-sec-title">EDUCATION &amp; CERTIFICATIONS</h3>
            <div className="resume-edu-list">
              {educationData.map((edu, idx) => (
                <div key={idx} className="r-edu-item">
                  <div className="r-edu-top">
                    <strong>
                      {edu.qualification === "WordPress Development" ? "WordPress Certificate" : edu.qualification}
                    </strong>
                    <span>{edu.year}</span>
                  </div>
                  <div className="r-edu-sub">
                    <span>{edu.institution}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="btn btn-secondary" onClick={onClose}>
            Close
          </button>
          <a
            className="btn btn-primary"
            href={`mailto:${personalInfo.email}?subject=Job Opportunity for Gumoshabe Angel`}
          >
            <span>Contact Regarding Opportunities</span>
            <ExternalLink size={15} />
          </a>
        </div>
      </div>
    </div>
  );
}
