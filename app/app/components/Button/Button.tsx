export interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  children?: React.ReactNode;
}

const Button = ({
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
      className={`${className} bg-zinc-800 hover:bg-zinc-700 text-white p-2 rounded-md flex justify-center items-center gap-1 transition-all duration-150`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
