import React from 'react'
import Link from "next/link";
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className=" w-full  bg-gray-200 dark:bg-black flex flex-col text-black dark:text-white gap-4 p-5 mt-5">
      <Link href="/" >
        <img src="https://i.pinimg.com/736x/57/ae/88/57ae8888c6b1601bc3db106e48bac706.jpg"
        alt="homepage"
          className="h-10 w-10 object-cover mt-2 ml-2 rounded">

        </img>
      </Link>
      <h1 className="px-2">Hisaan Sakhawat</h1>
      <div className="flex flex-row gap-3 mt-2 fill-current text-white ml-2">
        <div className="flex space-x-6 mt-2">
            <a href="https://github.com/Hisaan2004" target="_blank" rel="noopener noreferrer">
              <FaGithub className="w-6 h-6 text-black dark:text-white hover:text-gray-600" />
            </a>
            <a href="www.linkedin.com/in/hisaan-sakhawat-149894300" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-6 h-6 text-black dark:text-white hover:text-gray-600" />
            </a>
            <a href="mailto:@example.hisaan.sakhawat@gmail.com">
              <EnvelopeIcon className="w-6 h-6 text-black dark:text-white hover:text-gray-600" />
            </a>
          </div>
      </div>
    </div>
   
  )
}

export default Footer