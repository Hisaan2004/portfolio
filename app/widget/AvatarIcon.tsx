"use client";
import React from "react";
import { LucideIcon } from "lucide-react";

type AvatarIconProps = {
  Icon: LucideIcon;
  className?: string;
};

const AvatarIcon: React.FC<AvatarIconProps> = ({ Icon, className = "" }) => {
  return (
    <div className="w-8 h-8 rounded-full border bg-gray-200 dark:bg-gray-700 flex items-center justify-center">
      <Icon
        className={`w-5 h-5 text-black dark:text-white object-cover ${className}`}
      />
    </div>
  );
};

export default AvatarIcon;
