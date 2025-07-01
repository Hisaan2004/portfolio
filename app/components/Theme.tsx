
'use client';

import React, { useState } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';
import Chatbotcomp from '@/app/components/Chatbotcomp';

export default function Theme({ children }: { children: React.ReactNode }) {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <>
      <html
      className={darkmode? 'dark' : ''}
      >

      <body >

      <Navbar darkmode={darkmode} setDarkmode={setDarkmode} />
    <div className="bg-white text-black dark:bg-black dark:text-white min-h-screen flex flex-col">
      <main className={`flex-grow`}>{children}</main>
      <Chatbotcomp/>
      <Footer />
    </div>
      </body>
      </ html>
    </>
  );
}
