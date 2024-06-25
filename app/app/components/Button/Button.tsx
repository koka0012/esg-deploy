export interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

export const Button = ({
  type = "button",
  onClick,
  className,
  disabled,
  children,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} hover:bg-white/5 text-zinc-500 p-2 rounded-md flex justify-center items-center gap-1 transition-all duration-150`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
