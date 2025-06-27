'use client'
import React from 'react'
import { useState } from 'react';
const tec=[ "HTML5","CSS3","JavaScript","C++","Python","C","SQL"]
const framework=["React.js","Next.js","Tailwind CSS",]
const tools=["VS Code","Git & GitHub","Figma"]
const softskills=["Problem Solving", "Teamwork", "Communication"," Time Management"]

const Skills = () => {
    const [open,setOpen]=useState(false);
    const [openFramework, setOpenFramework] = useState(false);
    const [openTools, setOpenTools] = useState(false);
    const [openSoft, setOpenSoft] = useState(false);
    const [openSkills,setSkillsbutton]=useState(false);
  return (
    <div className=' flex flex-col items-center justify-center bg-white dark:bg-black text-black dark:text-white px-4 '>
      <button className='w-full font-bold text-4xl text-center flex justify-center items-center border-b-2 mt-2 mb-2 pb-2 pt-2 inline-block border-t-2 '
       onClick={()=>setSkillsbutton(!openSkills)}>
        Skills
        </button>
      {
        openSkills && (
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 w-full max-w-5xl mt-10 mb-10'>
      <div>
        <button className='font-bold text-lg border-b items-center' onClick={()=>setOpen(!open)}> Languages / Technologies</button>
        {
            open && (
                <div className='font-semibold flex justify-center bg-gray-200 text-black border border-2 pt-2 pb-4 mr-2 h-50 rounded'>
                <ul>{tec.map((item, index) => (
              <li className='border-b ' key={index}>

                  {item}
              </li>
            ))}
            </ul>
            </div>
            )
        }
        </div>
        <div>
        <button className='font-bold text-lg border-b ' onClick={()=>setOpenFramework(!openFramework)}> Frameworks & Libraries</button>
        {
            openFramework && (
                <div className='font-semibold flex justify-center bg-gray-200 text-black border border-2 pt-2 pb-4 mr-2 h-50 rounded'>
                <ul>{framework.map((item, index) => (
              <li className='border-b' key={index}>

                  {item}
              </li>
            ))}
            </ul>
            </div>
            )
        }
        </div>
        <div>
        <button className='font-bold text-lg border-b ' onClick={()=>setOpenTools(!openTools)}> Tools & Platforms</button>
        {
            openTools && (
                <div className='font-semibold flex justify-center bg-gray-200 text-black border border-2 pt-2 pb-4 mr-2 h-50 rounded'>
                <ul>{tools.map((item, index) => (
              <li className='border-b' key={index}>

                  {item}
              </li>
            ))}
            </ul>
            </div>
            )
        }
        </div>
        <div>
        <button className='font-bold text-lg border-b ' onClick={()=>setOpenSoft(!openSoft)}>Soft Skills</button>
        {
            openSoft && (
                <div className='font-semibold flex justify-center bg-gray-200 text-black border border-2 pt-2 pb-4 mr-2 h-50 rounded'>
                <ul>{softskills.map((item, index) => (
              <li className='border-b' key={index}>

                  {item}
              </li>
            ))}
            </ul>
            </div>
            )
        }
        </div>
        
    </div>
      )}
      {/*<div className='flex-grow'></div>*/}
    </div>
  )
}

export default Skills