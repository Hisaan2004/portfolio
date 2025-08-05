//"use client";
import React from "react";
import Intropage from "@/app/components/intropage/IntroPage";
import Skills from "@/app/components/skill/Skills";
import EducationPage from "@/app/components/education/EducationPage";
import Projects from "@/app/components/project/Projects";
import BlogPage from "./components/BlogPage";
export default function Home() {
  return (
    <>
      <div id="Intropage">
        <Intropage />
      </div>
      <div id="Educationpage">
        <EducationPage />
      </div>
      <div id="Projects">
        <Projects />
      </div>
      <div id="Skills">
        <Skills />
      </div>
      <div id="Blogpage">
        <BlogPage />
      </div>
    </>
  );
}
