import React from "react";
import Link from "next/link";
import Image from "next/image";
import Icon from "@/app/widget/Icon";
import Text from "@/app/widget/Text";
import Hyperlinks from "@/app/widget/HyperLinks";
function Footer() {
  return (
    <div className=" w-full  bg-gray-200 dark:bg-black flex flex-col text-black dark:text-white gap-4 p-5 mt-5 dark:border-t-2 dark:border-white">
      <Link href="/">
        <Image
          src="/webimg.jpg"
          alt="homepage"
          width={40}
          height={40}
          className="rounded"
        />
      </Link>
      <Text className="px-2 font-semibold text-black dark:text-white">
        Hisaan Sakhawat
      </Text>
      <div className="flex flex-row gap-3 mt-2 fill-current text-white ml-2">
        <div className="flex space-x-6 mt-2 pb-4">
          <Hyperlinks
            href="https://github.com/Hisaan2004"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon iconName="FaGithub" />
          </Hyperlinks>
          <Hyperlinks
            href="https://www.linkedin.com/in/hisaan-sakhawat-149894300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon iconName="FaLinkedin" />
          </Hyperlinks>
          <Hyperlinks href="https://hisaan.sakhawat@gmail.com">
            <Icon iconName="EnvelopeIcon" />
          </Hyperlinks>
        </div>
      </div>
    </div>
  );
}

export default Footer;
