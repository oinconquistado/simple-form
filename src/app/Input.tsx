"use client";

import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input: React.FC<InputProps> = ({ label, id, type, value, ...props }) => {
  const inputId = id || React.useId();

  if(type === "email") console.log(`Input with type="email"`);

  return (
    <div className="mb-4">
      <label
        htmlFor={inputId}
        className="block mb-1 font-medium text-gray-700"
      >
        {label}
      </label>
      <input
        id={inputId}
        type={type || "text"}
        className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-base"
        value={value || ""}
        {...props}
      />
    </div>
  );
};
