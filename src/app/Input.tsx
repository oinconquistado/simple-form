"use client";

import React, { memo } from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const Input = memo(function Input({ label, id, type, value, name, ...props }: InputProps) {
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
        name={name}
        {...props}
      />
    </div>
  );
});
