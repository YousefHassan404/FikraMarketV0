import React from "react";

export default function Button({ type = "button", onClick, children, disabled = false }) {
  return (
    <button 
      type={type}
      onClick={onClick}
      className="custom-button"
      disabled={disabled}
    >
      {children}
    </button>
  );
}
