'use client';
import React, { useState } from 'react';

const tec = ["HTML5", "CSS3", "JavaScript", "C++", "Python", "C", "SQL"];
const framework = ["React.js", "Next.js", "Tailwind CSS"];
const tools = ["VS Code", "Git & GitHub", "Figma"];
const softskills = ["Problem Solving", "Teamwork", "Communication", "Time Management"];

const Skills = () => {
  const [open, setOpen] = useState(false);
  const [openFramework, setOpenFramework] = useState(false);
  const [openTools, setOpenTools] = useState(false);
  const [openSoft, setOpenSoft] = useState(false);

  return (
    <div className="min-h-screen bg-white dark:bg-black text-black dark:text-white px-4 py-12 flex flex-col  justify-center items-center">
      <h1 className="text-5xl font-bold mb-12 text-center">Skills</h1>

      <div className="flex flex-col gap-6 w-full max-w-3xl">

        <div className="w-full">
          <button
            className="w-full text-left text-2xl font-bold border-b pb-2"
            onClick={() => setOpen(!open)}
          >
            Languages / Technologies
          </button>
          {open && (
            <div className="bg-gray-200 dark:bg-white text-black dark:text-black p-4 rounded-lg mt-2 shadow">
              <ul className="list-disc pl-5 space-y-1">
                {tec.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="w-full">
          <button
            className="w-full text-left text-2xl font-bold border-b pb-2"
            onClick={() => setOpenFramework(!openFramework)}
          >
            Frameworks & Libraries
          </button>
          {openFramework && (
            <div className="bg-gray-200 dark:bg-white text-black dark:text-black p-4 rounded-lg mt-2 shadow">
              <ul className="list-disc pl-5 space-y-1">
                {framework.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="w-full">
          <button
            className="w-full text-left text-2xl font-bold border-b pb-2"
            onClick={() => setOpenTools(!openTools)}
          >
            Tools & Platforms
          </button>
          {openTools && (
            <div className="bg-gray-200 dark:bg-white text-black dark:text-black p-4 rounded-lg mt-2 shadow">
              <ul className="list-disc pl-5 space-y-1">
                {tools.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>

        <div className="w-full">
          <button
            className="w-full text-left text-2xl font-bold border-b pb-2"
            onClick={() => setOpenSoft(!openSoft)}
          >
            Soft Skills
          </button>
          {openSoft && (
            <div className="bg-gray-200 dark:bg-white text-black dark:text-black p-4 rounded-lg mt-2 shadow">
              <ul className="list-disc pl-5 space-y-1">
                {softskills.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Skills;
