import React from "react";

export default function Input({
  id,
  type = "text",
  value,
  label,
  handleChange,
  ...rest
}) {
  return (
    <div className="input-wrapper">
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <input
        type={type}
        name={id}
        id={id}
        value={value}
        onChange={handleChange}
        className="input-field"
        {...rest}
      />
    </div>
  );
}
