"use client";
import React, { useEffect, useState } from "react";
import Navbar from "@/app/components/layout/NavBar";
import Footer from "@/app/components/layout/Footer";
import Chatbotcomp from "@/app/components/chatbot/ChatbotComp";

export default function Theme({ children }: { children: React.ReactNode }) {
  const [darkmode, setDarkmode] = useState(false);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") {
      setDarkmode(true);
         document.documentElement.classList.add("dark");
    } else {
      setDarkmode(false);
       document.documentElement.classList.remove("dark");
    }
  }, []);

  {
      useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkmode]);
  }

  return (
    <>
      <html className={darkmode ? "dark" : ""}>
        <body>
          <Navbar darkmode={darkmode} setDarkmode={setDarkmode} />
          <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen flex flex-col">
            <main className={`flex-grow`}>{children}</main>
            <Chatbotcomp />
            <Footer />
          </div>
        </body>
      </html>
    </>
  );
}
