import React, { useState } from "react";
import {
  Mail,
  Phone,
  Github,
  Linkedin,
  ExternalLink,
  Copy,
  Check,
  Clock
} from "lucide-react";
import { personalInfo } from "../data/portfolioData";

export function ContactSection({ onShowToast }) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopy = (text, type) => {
    navigator.clipboard.writeText(text);
    if (type === "email") {
      setCopiedEmail(true);
      onShowToast("Email copied to clipboard!");
      setTimeout(() => setCopiedEmail(false), 2500);
    } else {
      setCopiedPhone(true);
      onShowToast("Phone number copied to clipboard!");
      setTimeout(() => setCopiedPhone(false), 2500);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="section-wrap">
        <div className="contact-grid">
          {/* Left Column: Headline & Direct Contact Options */}
          <div className="contact-left">
            <span className="section-label reveal">06 / Get In Touch</span>
            <h2 className="contact-headline reveal">
              Let's Build Something <br />
              <span className="name-accent">Exceptional.</span>
            </h2>
            <p className="contact-desc reveal">
              I'm actively open to discussing full-stack engineering roles,
              applied AI engineering opportunities, and production software consulting.
              Whether you need an enterprise healthcare system or an intelligent LLM agent, let's connect.
            </p>

            <div className="contact-quick-chips reveal">
              <div className="response-time-pill">
                <Clock size={13} className="text-green" />
                <span>Fast response time · Typically within 2 hours</span>
              </div>
            </div>

            {/* Direct Channel Cards */}
            <div className="contact-cards-list reveal-stagger">
              {/* Email */}
              <div className="channel-card">
                <div className="channel-icon-box">
                  <Mail size={18} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">DIRECT EMAIL</span>
                  <a href={`mailto:${personalInfo.email}`} className="channel-val">
                    {personalInfo.email}
                  </a>
                </div>
                <button
                  className="channel-action-btn"
                  onClick={() => handleCopy(personalInfo.email, "email")}
                  title="Copy email address"
                >
                  {copiedEmail ? <Check size={15} className="text-green" /> : <Copy size={15} />}
                </button>
              </div>

              {/* Phone */}
              <div className="channel-card">
                <div className="channel-icon-box">
                  <Phone size={18} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">PHONE &amp; WHATSAPP</span>
                  <a href={personalInfo.whatsappUrl} target="_blank" rel="noreferrer" className="channel-val">
                    {personalInfo.phones[0]}
                  </a>
                  <a
                    href={`tel:${personalInfo.phones[1].replace(/\s/g, "")}`}
                    className="channel-val"
                  >
                    {personalInfo.phones[1]}
                  </a>
                </div>
                <button
                  className="channel-action-btn"
                  onClick={() => handleCopy(personalInfo.phones[0], "phone")}
                  title="Copy phone number"
                >
                  {copiedPhone ? <Check size={15} className="text-green" /> : <Copy size={15} />}
                </button>
              </div>

              {/* GitHub */}
              <a
                href={personalInfo.github.url}
                target="_blank"
                rel="noreferrer"
                className="channel-card channel-link-card"
              >
                <div className="channel-icon-box">
                  <Github size={18} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">GITHUB REPOSITORIES</span>
                  <span className="channel-val">{personalInfo.github.handle}</span>
                </div>
                <ExternalLink size={15} className="channel-arrow" />
              </a>

              {/* LinkedIn */}
              <a
                href={personalInfo.linkedin.url}
                target="_blank"
                rel="noreferrer"
                className="channel-card channel-link-card"
              >
                <div className="channel-icon-box">
                  <Linkedin size={18} />
                </div>
                <div className="channel-details">
                  <span className="channel-label">LINKEDIN NETWORK</span>
                  <span className="channel-val">{personalInfo.name}</span>
                </div>
                <ExternalLink size={15} className="channel-arrow" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
