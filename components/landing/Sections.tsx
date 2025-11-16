import { ReactNode } from "react";

export interface Props {
  id?: string;
  className?: string;
  background?: "light" | "dark" | "neutral";
  padding?: "sm" | "md" | "lg" | "xl";
  children: ReactNode;
}

export default function Section({
  id,
  className = "",
  background = "light",
  padding = "lg",
  children,
}: Props) {
  const backgroundClasses: Record<string, string> = {
    light: "bg-white",
    dark: "bg-neutral-900 text-white",
    neutral: "bg-neutral-100",
  };

  const paddingClasses: Record<string, string> = {
    sm: "pt-16 pb-16",
    md: "pt-20 pb-24",
    lg: "pt-24 pb-32",
    xl: "pt-32 pb-40",
  };

  return (
    <section
      id={id}
      className={`${backgroundClasses[background]} ${paddingClasses[padding]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}
