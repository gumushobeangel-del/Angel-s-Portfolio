import React, { useState, useRef, useEffect } from "react";
import { Terminal, CornerDownLeft } from "lucide-react";
import { terminalCommands } from "../data/portfolioData";

export function TerminalSection({ onOpenMediLink, onShowToast }) {
  const [history, setHistory] = useState([
    {
      type: "output",
      lines: [
        "Welcome to Gumoshabe Angel's Interactive Developer Console v2.4",
        "Type 'help' to see all available commands or click quick-run chips below.",
      ]
    }
  ]);
  const [inputVal, setInputVal] = useState("");
  const terminalEndRef = useRef(null);

  const executeCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === "clear") {
      setHistory([]);
      setInputVal("");
      return;
    }

    if (trimmed === "hospital" || trimmed === "medilink") {
      onOpenMediLink();
      onShowToast("Launching MediLink Hospital System Tour...");
    }

    const commandOutput = terminalCommands[trimmed] || [
      `Command not found: '${trimmed}'.`,
      "Type 'help' to see the list of valid commands: about, skills, projects, hospital, education, contact, hire, clear."
    ];

    setHistory((prev) => [
      ...prev,
      { type: "command", text: trimmed },
      { type: "output", lines: commandOutput }
    ]);

    setInputVal("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    executeCommand(inputVal);
  };

  useEffect(() => {
    terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <section className="terminal-section" id="terminal">
      <div className="section-wrap">
        {/* Terminal Window Box */}
        <div className="terminal-window reveal">
          {/* Top Bar */}
          <div className="terminal-window-bar">
            <div className="window-title">
              <Terminal size={13} className="text-green" />
              <span>angel@dev-environment: ~ (zsh)</span>
            </div>
          </div>

          {/* Body Log */}
          <div className="terminal-window-body">
            {history.map((entry, idx) => (
              <div key={idx} className="terminal-entry">
                {entry.type === "command" ? (
                  <div className="command-line">
                    <span className="prompt-user">guest@angel</span>
                    <span className="prompt-sep">:</span>
                    <span className="prompt-path">~</span>
                    <span className="prompt-dollar">$</span>
                    <span className="command-text">{entry.text}</span>
                  </div>
                ) : (
                  <div className="output-lines">
                    {entry.lines.map((line, lIdx) => (
                      <div key={lIdx} className="output-line">
                        {line}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={terminalEndRef} />
          </div>

          {/* Input Line Form */}
          <form className="terminal-input-bar" onSubmit={handleSubmit}>
            <div className="input-prompt">
              <span className="prompt-user">guest@angel</span>
              <span className="prompt-sep">:</span>
              <span className="prompt-path">~</span>
              <span className="prompt-dollar">$</span>
            </div>
            <input
              type="text"
              className="terminal-text-input"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="Type a command (e.g. 'hospital', 'skills', 'about') and press Enter..."
              autoComplete="off"
              spellCheck="false"
            />
            <button type="submit" className="terminal-send-btn" aria-label="Execute command">
              <CornerDownLeft size={14} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
