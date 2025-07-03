"use client";
import React from "react";
import Link from "next/link";

import Image from "next/image";
import { Bars3Icon } from "@heroicons/react/24/outline";
//import Button from "@/app/widget/Button";
import Icon from "@/app/widget/Icon";
import Toggleicon from "@/app/widget/Toggleicon";
import Text from "@/app/widget/Text";
import Hyperlinks from "../widget/Hyperlinks";
import Unorderlist from "../widget/Underorserlist";
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
      <div className="hidden md:flex bg-gray-200 dark:bg-black w-full h-16 items-center px-4 gap-6">
        <Link href="/">
          <Image
            src="/webimg.jpg"
            alt="homepage"
            width={40}
            height={40}
            className="rounded"
          />
        </Link>
        {navbarelement.map((item, index) => (
          <Hyperlinks
            key={index}
            href={`#${item.id}`}
            className="text-black dark:text-white font-bold hover:bg-gray-400 hover:border-b-2  px-2 py-1 dark:border-b-2 dark:border-white"
          >
            {item.label}
          </Hyperlinks>
        ))}

        <span className=" flex flex-row absolute right-4">
          <Text className="font-semibold mt-1 text-black dark:text-white">
            Change Theme:
          </Text>
          <Toggleicon
            enabled={darkmode}
            onClick={() => setDarkmode((prev) => !prev)}
          ></Toggleicon>
        </span>
      </div>
      <div className="  md:hidden bg-gray-200 dark:bg-black w-full h-16 flex items-center justify-between px-4 relative flex-grow ">
        <Icon
          icon={Bars3Icon}
          className=" w-6 h-6 md:h-9 md:w-9 "
          onClick={toggledown}
        />
        <Link href="/" className="absolute left-1/2 transform -translate-x-1/2">
          <Image
            src="/webimg.jpg"
            alt="homepage"
            width={40}
            height={40}
            className="rounded"
          />
        </Link>
        {open && (
          <div className="absolute top-16 left-0 w-full bg-black p-4 z-50">
            <Unorderlist>
              {navbarelement.map((item, index) => (
                <li key={index}>
                  <Hyperlinks
                    href={`#${item.id}`}
                    className=" text-white font-bold hover:bg-gray-700 px-4 py-2  border-b-2 inline-block "
                  >
                    {/*block*/}
                    {item.label}
                  </Hyperlinks>
                </li>
              ))}
            </Unorderlist>
          </div>
        )}

        <span className=" flex flex-row absolute right-4">
          <Toggleicon
            enabled={darkmode}
            onClick={() => setDarkmode((prev) => !prev)}
          ></Toggleicon>
        </span>
      </div>
    </div>
  );
};

export default Navbar;
