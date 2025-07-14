//"use client";
import React from "react";
import Intropage from "@/app/components/intropage/IntroPage";
import Skills from "@/app/components/skill/Skills";
import EducationPage from "@/app/components/education/EducationPage";
import Projects from "@/app/components/project/Projects";
import BlogPage from "./components/BlogPage";
{
  /*export const metadata = {
  title: "Hisaan's Portfolio",
  description: "This is the website to find Hisaan's portfolio.",
  keywords: ["nextjs", "website", "portfolio"],
  authors: [{ name: "Hisaan Sakhawat" }],
  openGraph: {
    title: "Portfolio",
    description: "This is the website to find Hisaan's portfolio.",
    url: "https://portfolio-ten-alpha-8xozlnzrlv.vercel.app/",
    siteName: "Hisaan's Portfolio",
    images: [
      {
        url: "/webimg.jpg",
        width: 1200,
        height: 630,
        alt: "Preview image of Hisaan's portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hisaan's Portfolio",
    description: "Discover projects and skills by Hisaan Sakhawat.",
    images: ["/webimg.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};*/
}
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
