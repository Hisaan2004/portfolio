'use client';
import React from 'react';
import Intropage from "@/app/components/Intropage";
import Skills from "@/app/components/Skills";
import Educationpage from "@/app/components/Educationpage";
import Projects from "@/app/components/Projects";

export default function Home() {
  return (
    <>
      <div id="Intropage"><Intropage /></div>
      <div id="Educationpage"><Educationpage /></div>
      <div id="Projects"><Projects /></div>
      <div id="Skills"><Skills /></div>
    </>
  );
}
