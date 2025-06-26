'use client'
import React, { useEffect, useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Intropage from "@/app/components/Intropage";
import Skills from "@/app/components/Skills";
import Educationpage from "@/app/components/Educationpage";
import Projects from "@/app/components/Projects";

export default function Home() {
  const [opendarkmode, setdarkmode] = useState(false);

  useEffect(() => {
    if (opendarkmode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [opendarkmode]);

  return (
    <div className="min-h-screen flex flex-col justify-between ">
      <div className="flex-grow">
        <Navbar toggleDarkMode={() => setdarkmode(prev => !prev)}isDark={opendarkmode}/>
        <div id="Intropage"><Intropage /></div>
        <div id="Educationpage"><Educationpage /></div>
        <div id="Projects"><Projects /></div>
        <div id="Skills"><Skills /></div>
      </div>
      <Footer />
    </div>
  );
}
