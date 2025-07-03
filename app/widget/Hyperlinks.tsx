"use client";
import React from "react";

type Props = {
  children: React.ReactNode;
  variant?: string;
  href: string;
  target?: string;
  rel?: string;
  download?: boolean | string;
  className?: string;
};
type HyperlinkVariant = "default";

const variantClasses: Record<HyperlinkVariant, string> = {
  default: "text-base font-bold ",
};
const Hyperlinks = ({
  children,
  variant = "default",
  href,
  target,
  rel,
  download,
  className = "",
}: Props) => {
  const style = variantClasses[variant as HyperlinkVariant] || "";
  return (
    <a
      className={`${style} ${className}`}
      href={href}
      target={target}
      download={download}
      rel={rel}
    >
      {children}
    </a>
  );
};

export default Hyperlinks;
