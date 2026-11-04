import React from "react";
import { CheckCircle2, Sparkles, X } from "lucide-react";

export function Toast({ message, visible, onClose }) {
  if (!visible) return null;

  return (
    <div className="toast-container" role="status" aria-live="polite">
      <div className="toast-pill">
        <span className="toast-icon">
          <CheckCircle2 size={16} />
        </span>
        <span className="toast-message">{message}</span>
        <button
          className="toast-close"
          onClick={onClose}
          aria-label="Dismiss notification"
        >
          <X size={14} />
        </button>
      </div>
    </div>
  );
}
