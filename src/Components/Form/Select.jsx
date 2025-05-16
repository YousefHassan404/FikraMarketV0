import React from "react";


export default function Select({ id, value, label, handleChange, options }) {
  return (
    <div className="input-wrapper">
      <label htmlFor={id} className="input-label">
        {label}
      </label>
      <select
        id={id}
        name={id}
        value={value}
        onChange={handleChange}
        className="input-field"
      >
        <option value="" disabled>
          Select
        </option>
        {options.map((opt, idx) => (
          <option key={idx} value={typeof opt === "object" ? opt.value : opt}>
            {typeof opt === "object" ? opt.label : opt}
          </option>
        ))}
      </select>
    </div>
  );
}