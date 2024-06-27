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
        <label htmlFor={name} className="font-medium text-zinc-100">
          {label}
        </label>
      )}

      <select
        name={name}
        value={value}
        onChange={handleChange}
        className={`${className} bg-[#2a3042] text-sm text-zinc-500 border-none appearance-none ${
          error ? "border-red-400" : ""
        } p-2 border rounded-md`}
      >
        <option value="">{placeholder ?? "Selecione"}</option>
        {options.map((option: Option, key: number) => (
          <option key={key} value={option.value}>
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
