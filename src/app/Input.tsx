"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, id, type, value, ...props }) => {
  const inputId = id || React.useId();

  return (
    <div style={{ marginBottom: 16 }}>
      <label
        htmlFor={inputId}
        style={{ display: "block", marginBottom: 4, fontWeight: 500 }}
      >
        {label}
      </label>
      <input
    //    id={inputId}
        type={type || "text"}
        style={{
          padding: "8px 12px",
          border: "1px solid #ccc",
          borderRadius: 4,
          width: "100%",
          fontSize: 16,
        }}
        value={value || ""}
        {...props}
      />
    </div>
  );
};
