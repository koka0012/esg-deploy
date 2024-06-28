"use client";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export interface InputProps {
  type?: string;
  name: string;
  label?: string;
  value: string;
  placeholder?: string;
  className?: string;
  handleChange: (data: any) => void;
  error?: string;
  disabled?: boolean;
}

export const Input = ({
  type = "text",
  name,
  label,
  value,
  placeholder,
  className,
  handleChange,
  error,
  disabled,
}: InputProps) => {
  const [password, setPassword] = useState("password");

  const handleClick = () => {
    setPassword(password === "password" ? "text" : "password");
  };

  return (
    <div className="flex flex-1 flex-col gap-1 relative">
      {label && (
        <label htmlFor={name} className="text-xs font-medium text-white/80">
          {label}
        </label>
      )}

      <input
        type={type === "password" ? password : type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className={`${className} text-xs font-medium text-white placeholder:text-[#6a738b] border border-[#2a3042] ${
          error ? "bg-red-300/50 !placeholder-white/50" : "bg-[#3c435a]/50"
        } p-2 rounded-md`}
        disabled={disabled}
      />

      {type === "password" && (
        <button
          type="button"
          onClick={handleClick}
          className="absolute top-[1.7rem] right-[0.5rem]"
        >
          {password === "password" ? (
            <EyeSlashIcon className="w-5 text-white" />
          ) : (
            <EyeIcon className="w-5 text-white" />
          )}
        </button>
      )}

      {error && (
        <div className="text-xs text-red-400">
          {label ? `${label} ${error}` : error}
        </div>
      )}
    </div>
  );
};
