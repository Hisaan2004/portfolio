import React from 'react';
import Image from 'next/image';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Intropage = () => {
  return (
    <div className="min-h-screen bg-white px-8 py-12 bg-white dark:bg-black dark:text-white">
      {/*<h1 className="font-bold text-6xl text-black text-center mb-10">About Me</h1>*/}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="flex flex-col items-center">
          <Image
            src="/profilepicture.jpeg"
            alt="profile image"
            width={400}
            height={400}
            className="rounded-full border-4 border-black object-cover"
          />
          <div className="flex space-x-6 mt-5 dark:text-white">
            <a href="https://github.com/Hisaan2004" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-6 h-6 text-gray-800 hover:text-gray-500 text-black dark:text-white hover:dark:text-gray-500" />
            </a>
            <a href="https:/www.linkedin.com/in/hisaan-sakhawat-149894300" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-6 h-6 text-gray-800 hover:text-gray-500 text-black dark:text-white hover:dark:text-gray-500" />
            </a>
            <a href="https:/hisaan.sakhawat@gmail.com">
              <EnvelopeIcon className="w-6 h-6 text-gray-800 hover:text-gray-500 text-black dark:text-white hover:dark:text-gray-500" />
            </a>
          </div>
        </div>
        <div className="hidden lg:block w-px h-60 bg-gray-400"></div>
        <div className="flex flex-col max-w-xl text-center lg:text-left">
          <p className="text-3xl lg:text-4xl font-semibold mb-2 text-black dark:text-white">Hi, I&apos;m Hisaan Sakhawat</p>
          <p className="text-black dark:text-white text-2xl mb-4">
            A Computer Science student passionate about crafting modern, user-friendly web experiences.
            I enjoy turning ideas into real-world projects through clean, responsive design and interactive functionality.
            Whether it&apos;s frontend interfaces or backend logic, I love building things that are both beautiful and functional.
          </p>
          <a
            href="/hisaan(3).pdf"
            download
            className="bg-black dark:bg-white dark:text-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded w-fit self-center lg:self-start"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intropage;
