"use client";
import React from "react";

type ToggleProps = {
  enabled: boolean;
  onClick: () => void;
};

const Toggleicon = ({ enabled, onClick }: ToggleProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-10 h-6 md:w-14 md:h-8 flex items-center rounded-full p-1 transition-colors duration-300 ml-2
        ${enabled ? "bg-black border-2 border-white" : "bg-gray-400 border-2 border-white"}`}
    >
      <div
        className={`bg-white w-4 h-4 md:w-6 md:h-6 rounded-full shadow-md transform transition-transform duration-300
          ${enabled ? "translate-x-4 md:translate-x-6" : "translate-x-0"}`}
      />
    </button>
  );
};

export default Toggleicon;
