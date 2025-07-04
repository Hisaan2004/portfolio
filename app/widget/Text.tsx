"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
  variant?: string;
  className?: string;
};
type TextVariant = "heading1" | "heading2" | "paragraph" | "caption";

const variantClasses: Record<TextVariant, string> = {
  heading1: "text-2xl md:text-4xl font-bold ",
  heading2: "text-lg md:text-2xl font-semibold ",
  paragraph: "text-base text-black font-medium",
  caption: "text-sm ",
};
const Text = ({ children, variant = "paragraph", className = "" }: Props) => {
  const style = variantClasses[variant as TextVariant] || "";
  return <p className={`${style} ${className}`}>{children}</p>;
};

export default Text;
