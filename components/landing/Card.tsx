import { ReactNode } from "react";

export interface Props {
  children?: ReactNode;
  className?: string;
  variant?: "default" | "elevated" | "highlighted";
  padding?: "sm" | "md" | "lg";
}

const variantClasses = {
  default: "bg-white ring-1 ring-black/5 shadow-sm",
  elevated: "bg-white ring-1 ring-black/5 shadow-[0_6px_24px_rgba(0,0,0,0.08)]",
  highlighted:
    "bg-white ring-1 ring-black/5 shadow-[0_12px_30px_rgba(0,0,0,0.06)]",
};

const paddingClasses = {
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export default function Card({
  children,
  className = "",
  variant = "default",
  padding = "lg",
}: Props) {
  return (
    <div
      className={`relative rounded-3xl ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`}
    >
      {children}
    </div>
  );
}
