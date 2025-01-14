import React from "react";
import "./button.css";
export default function Button({ children = "EXAMPLE", onClick, className }) {
  return (
    <button
      role="button"
      onClick={onClick}
      className={`button-13 ${className}`}
    >
      <span className="text">{children}</span>
      <span className="button-13-background"></span>
      <span className="button-13-border"></span>
    </button>
  );
}
