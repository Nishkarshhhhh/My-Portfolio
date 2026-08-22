import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  href?: string;
  external?: boolean;
  download?: string | boolean;
  icon?: React.ReactNode;
}

export function Button({
  children,
  className,
  variant = "primary",
  size = "md",
  href,
  external,
  download,
  icon,
  ...props
}: ButtonProps) {
  const variantStyles = {
    primary:
      "bg-sky-500 text-slate-950 font-semibold hover:bg-sky-400 active:bg-sky-600 shadow-sm shadow-sky-500/20",
    secondary:
      "bg-slate-800 text-slate-100 hover:bg-slate-700/80 border border-slate-700 active:bg-slate-800",
    outline:
      "bg-transparent text-slate-200 border border-slate-700 hover:border-slate-500 hover:bg-slate-800/40 active:bg-slate-800/70",
    ghost:
      "bg-transparent text-slate-300 hover:text-white hover:bg-slate-800/50 active:bg-slate-800/70",
  };

  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 rounded-md gap-1.5",
    md: "text-sm px-4 py-2 rounded-lg gap-2",
    lg: "text-base px-5 py-2.5 rounded-lg gap-2.5",
  };

  const combinedClassName = cn(
    "inline-flex items-center justify-center transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 focus-visible:ring-offset-[#080b11] disabled:opacity-50 disabled:pointer-events-none cursor-pointer",
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    if (external || download) {
      return (
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          download={typeof download === "string" ? download : undefined}
          className={combinedClassName}
        >
          {children}
          {icon}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClassName}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button className={combinedClassName} {...props}>
      {children}
      {icon}
    </button>
  );
}
