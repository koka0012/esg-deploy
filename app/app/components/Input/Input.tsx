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
}: InputProps) => {
  const [password, setPassword] = useState("password");

  const handleClick = () => {
    setPassword(password === "password" ? "text" : "password");
  };

  return (
    <div className="flex flex-1 flex-col gap-1 relative">
      {label && (
        <label htmlFor={name} className="font-medium text-zinc-700">
          {label}:
        </label>
      )}

      <input
        type={type === "password" ? password : type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className={`${className} hover:bg-white/5 text-sm text-zinc-500 ${
          error ? "border-red-400" : ""
        } p-2 border rounded-md`}
      />

      {type === "password" && (
        <button
          type="button"
          onClick={handleClick}
          className="absolute top-[37px] right-[11px]"
        >
          {password === "password" ? (
            <EyeIcon className="w-5" />
          ) : (
            <EyeSlashIcon className="w-5" />
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
