'use client';
import React, { useState } from 'react';
import Button from "@/app/widget/Button";
import Text from '@/app/widget/Text'
import Skillpart from './Skillpart';
import Unorderlist from '../widget/Underorserlist';
const description=[{
  name:'Languages / Technologies',
  desc:["HTML5", "CSS3", "JavaScript", "C++", "Python", "C", "SQL"],
},
 {name:'Frameworks & Libraries',
  desc:["React.js", "Next.js", "Tailwind CSS"],
 },
 {name:'Tools & Platforms',
  desc:["VS Code", "Git & GitHub", "Figma"],
 },
 {name:'Soft Skills',
  desc: ["Problem Solving", "Teamwork", "Communication", "Time Management"],
}
]
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
      <Text variant='heading1' className=" mb-12 text-center">Skills</Text>
      <div className="flex flex-col gap-6 w-full max-w-3xl">
        {description.map((item,index)=>(
          <Skillpart key={index} title={item.name} items={item.desc} />
        ))}
        
      </div>
    </div>
  );
};

export default Skills;
