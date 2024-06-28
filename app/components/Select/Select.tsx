"use client";

export interface Option {
  label: string;
  value: string;
}

export interface SelectProps {
  name: string;
  label?: string;
  placeholder?: string;
  value: string;
  className?: string;
  handleChange: (data: any) => void;
  options: Option[];
  error?: string;
}

export const Select = ({
  name,
  label,
  placeholder,
  value,
  className,
  handleChange,
  options,
  error,
}: SelectProps) => {
  return (
    <div className="flex flex-1 flex-col gap-1">
      {label && (
        <label htmlFor={name} className="text-xs font-medium text-white/80">
          {label}
        </label>
      )}

      <select
        name={name}
        value={value}
        onChange={handleChange}
        className={`${className} text-xs font-medium text-[#6a738b] border border-[#2a3042] appearance-none ${
          error ? "bg-red-300/50" : "bg-[#3c435a]/50"
        } p-2 rounded-md`}
      >
        <option value="" className="bg-[#3c435a]">
          {placeholder ?? "Selecione"}
        </option>
        {options.map((option: Option, key: number) => (
          <option key={key} value={option.value} className="bg-[#3c435a]">
            {option.label}
          </option>
        ))}
      </select>

      {error && (
        <div className="text-xs text-red-400">
          {label ? `${label} ${error}` : error}
        </div>
      )}
    </div>
  );
};
