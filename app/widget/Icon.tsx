"use client";
import React from "react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Bars3Icon } from "@heroicons/react/24/outline";

const ICON_MAP: Record<string, React.ElementType> = {
  FaGithub,
  FaLinkedin,
  EnvelopeIcon,
  Bars3Icon,
};

type IconProps = {
  iconName: string;
  className?: string;
  onClick?: () => void;
};

const Icon = ({ iconName, className = "", onClick }: IconProps) => {
  const IconComponent = ICON_MAP[iconName];

  //if (!IconComponent) return null;

  return (
    <IconComponent
      className={`w-6 h-6 text-black dark:text-white hover:text-gray-600 cursor-pointer ${className}`}
      onClick={onClick}
    />
  );
};

export default Icon;
