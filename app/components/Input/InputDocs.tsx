"use client";

export interface InputDocsProps {
  name: string;
  label?: string;
  accept?: string;
  className?: string;
  handleChange: (data: any) => void;
  error?: string;
}

export const InputDocs = ({
  name,
  label,
  accept = "",
  className,
  handleChange,
  error,
}: InputDocsProps) => {
  return (
    <div className="flex flex-1 flex-col gap-1 relative">
      {label && (
        <label htmlFor={name} className="text-xs font-medium text-white/80">
          {label}
        </label>
      )}

      <input
        type="file"
        name={name}
        accept={accept}
        onChange={handleChange}
        className={`${className} text-sm text-white bg-transparent border border-[#2a3042] ${
          error ? "bg-red-300/50" : "!bg-[#3c435a]/50"
        } rounded-md file:bg-[#6a738b] file:text-white file:border-none file:p-2`}
      />

      {accept && <div className="text-xs text-[#6a738b]">{accept}</div>}

      {error && (
        <div className="text-xs text-red-400">
          {label ? `${label} ${error}` : error}
        </div>
      )}
    </div>
  );
};
