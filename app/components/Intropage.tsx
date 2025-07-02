import React from 'react';
import Image from 'next/image';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import Text from '@/app/widget/Text';
import  Icon from '@/app/widget/Icon';
import Hyperlinks from '../widget/Hyperlinks';
const Intropage = () => {
  return (
    <div className="min-h-screen bg-white px-8 py-12 dark:bg-black dark:text-white">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="flex flex-col items-center">
          <Image
            src="/profilepicture.jpeg"
            alt="profile image"
            width={400}
            height={400}
            className='rounded-full'
          />
          <div className="flex space-x-6 mt-5 dark:text-white">
            <Hyperlinks  href="https://github.com/Hisaan2004" target="_blank" rel="noopener noreferrer">
              <Icon icon={FaGithub} />
            </Hyperlinks>
            <Hyperlinks  href="https://github.com/Hisaan2004" target="_blank" rel="noopener noreferrer">
              <Icon icon={FaLinkedin} />
            </Hyperlinks>
            <Hyperlinks href="https://hisaan.sakhawat@gmail.com" >
              <Icon icon={EnvelopeIcon} />
            </Hyperlinks>
          </div>
        </div>
        <div className="hidden lg:block w-px h-60 bg-gray-400"></div>
        <div className="flex flex-col max-w-xl text-center lg:text-left">
          <Text variant="heading1"className="font-semibold mb-2 text-black dark:text-white">Hi, I&apos;m Hisaan Sakhawat</Text>
          <Text variant='paragraph' className="text-black dark:text-white mb-4">
            A Computer Science student passionate about crafting modern, user-friendly web experiences.
            I enjoy turning ideas into real-world projects through clean, responsive design and interactive functionality.
            Whether it&apos;s frontend interfaces or backend logic, I love building things that are both beautiful and functional.
          </Text>
          <Hyperlinks
            href="/hisaan(3).pdf"
            download
            className="bg-black dark:bg-white dark:text-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded w-fit self-center lg:self-start"
          >
            Resume
          </Hyperlinks>
        </div>
      </div>
    </div>
  );
};
export default Intropage;   