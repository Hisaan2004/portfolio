import React from 'react'
import Link from "next/link";
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import  Icon from '@/app/widget/Icon';
import  Text from '@/app/widget/Text';
import Hyperlinks from '@/app/widget/Hyperlinks';
const Footer = () => {
  return (
    <div className=" w-full  bg-gray-200 dark:bg-black flex flex-col text-black dark:text-white gap-4 p-5 mt-5 dark:border-t-2 dark:border-white">
      <Link href="/" >
        <img src="https://i.pinimg.com/736x/57/ae/88/57ae8888c6b1601bc3db106e48bac706.jpg"
        alt="homepage"
          className="h-10 w-10 object-cover mt-2 ml-2 rounded"/>
      </Link>
      <Text className="px-2 font-semibold text-black dark:text-white">Hisaan Sakhawat</Text>
      <div className="flex flex-row gap-3 mt-2 fill-current text-white ml-2">
        <div className="flex space-x-6 mt-2">
            <Hyperlinks href="https://github.com/Hisaan2004" target="_blank" rel="noopener noreferrer">
              <Icon icon={FaGithub} />
            </Hyperlinks>
            <Hyperlinks href="https://github.com/Hisaan2004" target="_blank" rel="noopener noreferrer">
              <Icon icon={FaLinkedin} />
            </Hyperlinks>
            <Hyperlinks href="https://hisaan.sakhawat@gmail.com" >
              <Icon icon={EnvelopeIcon} />
            </Hyperlinks>
          </div>
      </div>
    </div>
   
  )
}

export default Footer