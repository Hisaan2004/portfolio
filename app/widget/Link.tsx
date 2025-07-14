"use client";
import React from "react";
import Link from "next/link";

type Props = {
  children: React.ReactNode;
  href: string;
  variant?: string;
  className?: string;
};
type LinkVariant = "connecting_link";

const variantClasses: Record<LinkVariant, string> = {
  connecting_link:
    "bg-black text-white h-10 px-6 rounded hover:bg-gray-400 dark:border-2 dark:border-white active:scale-95",
};
const Links = ({
  children,
  href,
  variant = "connecting_link",
  className = "",
}: Props) => {
  const style = variantClasses[variant as LinkVariant] || "";
  return (
    <Link href={href} className={`${style} ${className}`}>
      {children}
    </Link>
  );
};

export default Links;
