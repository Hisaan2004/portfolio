'use client';

import React from 'react';
import Link from "next/link";
import { Bars3Icon } from '@heroicons/react/24/outline';

const navbarelement = [
  { label: "About me", id: "Intropage" },
  { label: "Skills", id: "Skills" },
  { label: "Projects", id: "Projects" },
  { label: "Education", id: "Educationpage" },
];

type NavbarProps = {
  darkmode: boolean;
  setDarkmode: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar: React.FC<NavbarProps> = ({ darkmode, setDarkmode }) => {
  const [open, setOpen] = React.useState(false);
  const toggledown = () => setOpen(!open);

  return (
    <div className="bg-gray-200 dark:border-2 dark:border-white">
      {/* Desktop Navbar */}
      <div className="hidden md:flex bg-gray-200 dark:bg-black w-full h-16 items-center px-4 gap-6">
        <Link href="/">
          <img
            src="https://i.pinimg.com/736x/57/ae/88/57ae8888c6b1601bc3db106e48bac706.jpg"
            alt="homepage"
            className="h-10 w-10 rounded"
          />
        </Link>
        {navbarelement.map((item, index) => (
          <a
            key={index}
            href={`#${item.id}`}
            className="text-black dark:text-white font-bold hover:bg-gray-400 hover:border-b-2  px-2 py-1 dark:border-b-2 dark:border-white"
          >
            {item.label}
          </a>
        ))}
        <button
          onClick={() => setDarkmode(prev => !prev)}
          className="bg-black text-white h-10 w-30 absolute right-2 rounded hover:bg-gray-400 dark:border-2 dark:border-white active:scale-95"
        >
          {darkmode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden bg-gray-300 dark:bg-black w-full h-16 flex items-center justify-between px-4 relative">
        <button onClick={toggledown}>
          <Bars3Icon className="h-8 w-8 text-black dark:text-white" />
        </button>

        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
          <img
            src="https://i.pinimg.com/736x/57/ae/88/57ae8888c6b1601bc3db106e48bac706.jpg"
            alt="homepage"
            className="h-10 w-10 rounded"
          />
        </Link>

        {open && (
          <div className="absolute top-16 left-0 w-full bg-black p-4 z-50">
            <ul className="space-y-4">
              {navbarelement.map((item, index) => (
                <li key={index}>
                  <a
                    href={`#${item.id}`}
                    className="block text-white font-bold hover:bg-gray-700 px-4 py-2  border-b-2 inline-block"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
        <button
          onClick={() => setDarkmode(prev => !prev)}
          className="bg-black text-white h-10 w-30 absolute right-2 rounded hover:bg-gray-400 dark:border-2 dark:border-white active:scale-95"
        >
          {darkmode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
