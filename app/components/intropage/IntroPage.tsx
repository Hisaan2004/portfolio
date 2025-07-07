import React from "react";
import Image from "next/image";
import { INTRO_INFO } from "./introInfo";
import Text from "@/app/widget/Text";
import Icon from "@/app/widget/Icon";
import Hyperlinks from "@/app/widget/HyperLinks";
function Intropage() {
  return (
    <div className="min-h-screen bg-white px-8 py-12 dark:bg-black dark:text-white">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
        <div className="flex flex-col items-center">
          <Image
            src={INTRO_INFO.Images}
            alt="profile image"
            width={400}
            height={400}
            className="rounded-full"
          />
          <div className="flex space-x-6 mt-5 dark:text-white">
            {INTRO_INFO.socialLinks.map((Link, index) => (
              <Hyperlinks
                key={index}
                href={Link.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon iconName={Link.iconName} />
              </Hyperlinks>
            ))}
          </div>
        </div>
        <div className="hidden lg:block w-px h-60 bg-gray-400"></div>
        <div className="flex flex-col max-w-xl text-center lg:text-left">
          <Text
            variant="heading1"
            className="font-semibold mb-2 text-black dark:text-white"
          >
            Hi, I&apos;m {INTRO_INFO.name}
          </Text>
          <Text variant="paragraph" className="text-black dark:text-white mb-4">
            {INTRO_INFO.bio}
          </Text>
          <Hyperlinks
            href={INTRO_INFO.resumeUrl}
            download
            className="bg-black dark:bg-white dark:text-black hover:bg-gray-500 text-white font-bold py-2 px-4 rounded w-fit self-center lg:self-start"
          >
            Resume
          </Hyperlinks>
        </div>
      </div>
    </div>
  );
}
export default Intropage;
