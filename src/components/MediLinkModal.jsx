import React, { useState } from "react";
import {
  X,
  Stethoscope,
  Activity,
  Pill,
  Microscope,
  Layers,
  ShieldCheck,
  Users,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ArrowRight,
  Database,
  ExternalLink,
  Copy,
  Check,
  HeartPulse,
  FolderGit2
} from "lucide-react";
import { projectsData } from "../data/portfolioData";

export function MediLinkModal({ isOpen, onClose, onShowToast }) {
  if (!isOpen) return null;

  const project = projectsData.find((p) => p.id === "hospital-system");
  const [activeTab, setActiveTab] = useState("triage");
  const [queueState, setQueueState] = useState(project.simulatedData.queue);
  const [calledPatient, setCalledPatient] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleCallPatient = (patient) => {
    setCalledPatient(patient.name);
    setQueueState((prev) =>
      prev.map((p) =>
        p.id === patient.id ? { ...p, status: "In Consultation" } : p
      )
    );
    onShowToast(`Calling ${patient.name} into Consultation Room 1`);
  };

  const handleCopyProjectTag = () => {
    navigator.clipboard.writeText("c:\\Users\\THINKPAD\\Desktop\\Hospital_system");
    setCopiedLink(true);
    onShowToast("Local Hospital System workspace path copied!");
    setTimeout(() => setCopiedLink(false), 2000);
  };

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className="modal-container medilink-tour-modal"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="modal-top-bar">
          <div className="modal-title-group">
            <div className="modal-badge-teal">
              <Stethoscope size={16} />
              <span>MEDILINK HEALTHCARE WORKSPACE</span>
            </div>
            <div className="modal-meta-pills">
              <span className="pill-status-live">
                <span className="pulse" />
                FastAPI + React 18
              </span>
              <span className="pill-latency">Latency: 18ms</span>
              <span className="pill-rbac">7 RBAC Roles</span>
            </div>
          </div>

          <div className="modal-top-actions">
            <button
              className="btn-copy-tag"
              onClick={handleCopyProjectTag}
              title="Copy local path"
            >
              {copiedLink ? <Check size={14} /> : <Copy size={14} />}
              <span>{copiedLink ? "Path Copied" : "Copy Path"}</span>
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

        {/* Modal Header & Quick Telemetry */}
        <div className="modal-summary-banner">
          <div className="summary-left">
            <h2>MediLink Clinical &amp; Hospital Operations Platform</h2>
            <p className="summary-text">
              An enterprise full-stack hospital workspace synchronizing emergency triage,
              outpatient consultation schedules, electronic prescriptions, diagnostic laboratory tests,
              and tamper-evident audit logs.
            </p>
            <div className="summary-tech-pills">
              {project.stack.map((tech) => (
                <span key={tech} className="tech-badge">{tech}</span>
              ))}
            </div>
          </div>

          <div className="summary-stats-grid">
            <div className="telemetry-card">
              <span className="telemetry-label">BED OCCUPANCY</span>
              <span className="telemetry-value">82%</span>
              <span className="telemetry-sub">41 / 50 Wards Active</span>
            </div>
            <div className="telemetry-card">
              <span className="telemetry-label">TRIAGE QUEUE</span>
              <span className="telemetry-value">7 Patients</span>
              <span className="telemetry-sub text-amber">2 Urgent Cases</span>
            </div>
            <div className="telemetry-card">
              <span className="telemetry-label">AVG CONSULT TIME</span>
              <span className="telemetry-value">14.2 min</span>
              <span className="telemetry-sub text-green">Optimal Throughput</span>
            </div>
          </div>
        </div>

        {/* Interactive Tour Navigation Tabs */}
        <div className="tour-tab-strip">
          {project.previewScreens.map((screen) => {
            const Icon = screen.icon;
            return (
              <button
                key={screen.id}
                className={`tour-tab-btn ${activeTab === screen.id ? "tour-tab-active" : ""}`}
                onClick={() => setActiveTab(screen.id)}
              >
                <Icon size={15} />
                <span>{screen.name}</span>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display Area */}
        <div className="tour-screen-viewport">
          {/* 1. Triage & Queue Monitor */}
          {activeTab === "triage" && (
            <div className="screen-panel screen-triage">
              <div className="panel-header">
                <div>
                  <h3>Emergency &amp; Outpatient Triage Monitor</h3>
                  <p>Real-time queue sequencing with clinical priority routing (Emergency, Urgent, Routine).</p>
                </div>
                <div className="panel-badge-right">
                  <Activity size={14} className="text-teal" />
                  <span>Real-time Triage Logic</span>
                </div>
              </div>

              <div className="triage-cards-list">
                {queueState.map((patient) => (
                  <div key={patient.id} className={`triage-card priority-${patient.triage.toLowerCase()}`}>
                    <div className="triage-card-header">
                      <div className="patient-id-badge">
                        <span className="p-id">{patient.id}</span>
                        <span className="p-name">{patient.name}</span>
                        <span className="p-age">Age {patient.age}</span>
                      </div>
                      <span className={`priority-tag tag-${patient.triage.toLowerCase()}`}>
                        {patient.triage}
                      </span>
                    </div>

                    <div className="triage-complaint">
                      <strong>Chief Complaint:</strong> {patient.complaint}
                    </div>

                    <div className="triage-vitals-row">
                      <div className="vital-item">
                        <span className="v-label">Blood Pressure</span>
                        <span className="v-val">{patient.bp} mmHg</span>
                      </div>
                      <div className="vital-item">
                        <span className="v-label">Blood Oxygen (SpO2)</span>
                        <span className="v-val">{patient.spo2}</span>
                      </div>
                      <div className="vital-item">
                        <span className="v-label">Care Status</span>
                        <span className="v-val status-val">{patient.status}</span>
                      </div>
                    </div>

                    <div className="triage-card-actions">
                      <button
                        className="btn-call-consult"
                        disabled={patient.status === "In Consultation"}
                        onClick={() => handleCallPatient(patient)}
                      >
                        <HeartPulse size={14} />
                        <span>{patient.status === "In Consultation" ? "In Consult Room 1" : "Call to Consultation"}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. Patient Intake & Demographics */}
          {activeTab === "patients" && (
            <div className="screen-panel screen-patients">
              <div className="panel-header">
                <div>
                  <h3>Electronic Medical Records (EMR) Intake</h3>
                  <p>Comprehensive patient demographics, blood grouping, emergency contacts, and allergy profiling.</p>
                </div>
                <div className="panel-badge-right">
                  <Stethoscope size={14} className="text-teal" />
                  <span>Full Patient Intake</span>
                </div>
              </div>

              <div className="patients-grid-preview">
                <div className="emr-card">
                  <div className="emr-card-head">
                    <span className="emr-avatar">AN</span>
                    <div>
                      <h4>Amina Nakato</h4>
                      <span className="emr-num">Record ID: ML-2026-0041</span>
                    </div>
                    <span className="blood-badge">Blood: O+</span>
                  </div>
                  <div className="emr-details-list">
                    <div className="emr-row"><span>Attending Doctor:</span> <strong>Dr. K. Sarah (Cardiology)</strong></div>
                    <div className="emr-row"><span>Known Allergies:</span> <strong className="text-rose">Penicillin, Sulfa drugs</strong></div>
                    <div className="emr-row"><span>Emergency Contact:</span> <strong>Ronald Nakato (+256 701 445 892)</strong></div>
                    <div className="emr-row"><span>Insurance Policy:</span> <strong>AAR Gold Healthcare (#8841-02)</strong></div>
                  </div>
                </div>

                <div className="emr-card">
                  <div className="emr-card-head">
                    <span className="emr-avatar">DO</span>
                    <div>
                      <h4>David Otim</h4>
                      <span className="emr-num">Record ID: ML-2026-0039</span>
                    </div>
                    <span className="blood-badge">Blood: A+</span>
                  </div>
                  <div className="emr-details-list">
                    <div className="emr-row"><span>Attending Doctor:</span> <strong>Dr. M. Joseph (Endocrinology)</strong></div>
                    <div className="emr-row"><span>Known Allergies:</span> <strong className="text-green">No known allergies (NKDA)</strong></div>
                    <div className="emr-row"><span>Emergency Contact:</span> <strong>Harriet Otim (+256 772 884 102)</strong></div>
                    <div className="emr-row"><span>Insurance Policy:</span> <strong>Jubilee Premier (#JUB-9921)</strong></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 3. Dispensary & Pharmacy */}
          {activeTab === "pharmacy" && (
            <div className="screen-panel screen-pharmacy">
              <div className="panel-header">
                <div>
                  <h3>Dispensary &amp; Electronic Prescription Tracker</h3>
                  <p>Drug interaction checks, dosage verification, allergy cross-matching, and pharmacy dispensing sign-off.</p>
                </div>
                <div className="panel-badge-right">
                  <Pill size={14} className="text-teal" />
                  <span>E-Prescription &amp; Safety</span>
                </div>
              </div>

              <div className="pharmacy-orders-table">
                <table>
                  <thead>
                    <tr>
                      <th>RX ORDER</th>
                      <th>PATIENT</th>
                      <th>PRESCRIBED MEDICATION</th>
                      <th>PRESCRIBER</th>
                      <th>STATUS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {project.simulatedData.prescriptions.map((rx) => (
                      <tr key={rx.rx}>
                        <td><span className="code-font">{rx.rx}</span></td>
                        <td><strong>{rx.patient}</strong></td>
                        <td>{rx.medication}</td>
                        <td>{rx.doctor}</td>
                        <td>
                          <span className={`pill-badge ${rx.status === "Dispensed" ? "badge-dispensed" : "badge-pending"}`}>
                            {rx.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* 4. Diagnostic Laboratory */}
          {activeTab === "lab" && (
            <div className="screen-panel screen-lab">
              <div className="panel-header">
                <div>
                  <h3>Diagnostic Specimen &amp; Laboratory Orders</h3>
                  <p>Hematology, Biochemistry, and Microbiology test orders with automatic normal, abnormal, and critical alerts.</p>
                </div>
                <div className="panel-badge-right">
                  <Microscope size={14} className="text-teal" />
                  <span>Telemetry Diagnostics</span>
                </div>
              </div>

              <div className="lab-results-list">
                {project.simulatedData.labs.map((lab, i) => (
                  <div key={i} className="lab-result-card">
                    <div className="lab-card-left">
                      <Microscope size={18} className="lab-icon" />
                      <div>
                        <h4>{lab.test}</h4>
                        <span className="lab-patient">Patient: {lab.patient} · {lab.time}</span>
                      </div>
                    </div>
                    <div className="lab-card-right">
                      <span className="lab-value-text">{lab.result}</span>
                      <span className={`lab-flag-pill flag-${lab.flag.toLowerCase()}`}>
                        {lab.flag}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 5. Architecture & Tech Specs */}
          {activeTab === "architecture" && (
            <div className="screen-panel screen-architecture">
              <div className="panel-header">
                <div>
                  <h3>Enterprise Software &amp; Relational Architecture</h3>
                  <p>Architected for clinical data security, low latency, and zero schema drift.</p>
                </div>
                <div className="panel-badge-right">
                  <Layers size={14} className="text-teal" />
                  <span>Full-Stack Architecture</span>
                </div>
              </div>

              <div className="architecture-grid">
                {project.architectureHighlights.map((arch, i) => (
                  <div key={i} className="arch-card">
                    <div className="arch-card-header">
                      <Database size={16} className="text-teal" />
                      <h4>{arch.component}</h4>
                    </div>
                    <p>{arch.detail}</p>
                  </div>
                ))}
              </div>

              <div className="security-banner">
                <div className="sec-icon"><ShieldCheck size={22} /></div>
                <div className="sec-text">
                  <strong>Cryptographic Security &amp; RBAC:</strong>
                  <span> Argon2id password hashing ciphers, SameSite=Strict HttpOnly session cookies, and 7 segregated role access tiers protecting sensitive patient health records.</span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          <div className="footer-left">
            <span className="footer-source-note">
              <FolderGit2 size={15} />
              <span>Full source code available locally at: <code>c:\Users\THINKPAD\Desktop\Hospital_system</code></span>
            </span>
          </div>

          <div className="footer-right">
            <button className="btn btn-secondary" onClick={onClose}>
              Close Preview
            </button>
            <a
              className="btn btn-primary"
              href="#contact"
              onClick={onClose}
            >
              <span>Discuss Healthcare Projects</span>
              <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
