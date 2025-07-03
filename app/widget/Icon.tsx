"use client";
import React from "react";

type IconProps = {
  icon: React.ElementType;
  className?: string;
  onClick?: () => void;
};

const Icon = ({ icon: IconComponent, className = "", onClick }: IconProps) => {
  return (
    <IconComponent
      className={`w-6 h-6 text-black dark:text-white hover:text-gray-600 cursor-pointer ${className}`}
      onClick={onClick}
    />
  );
};

export default Icon;
