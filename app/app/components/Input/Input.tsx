import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

export interface InputProps {
  type?: string;
  name: string;
  label: string;
  value: string;
  placeholder?: string;
  handleChange: (data: any) => void;
  error?: string;
}

const Input = ({
  type = "text",
  name,
  label,
  value,
  placeholder,
  handleChange,
  error,
}: InputProps) => {
  const [password, setPassword] = useState("password");

  const handleClick = () => {
    setPassword(password === "password" ? "text" : "password");
  };

  return (
    <div className="flex flex-1 flex-col gap-1 relative">
      <label htmlFor={name} className="text-[16px] font-medium text-zinc-100">
        {label}:
      </label>

      <input
        type={type === "password" ? password : type}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        className={`text-sm text-zinc-100 bg-transparent ${
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
        <div className="text-xs text-red-400">{`${label} ${error}`}</div>
      )}
    </div>
  );
};

export default Input;
