
'use client';

import React, { useEffect, useState } from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';

export default function Theme({ children }: { children: React.ReactNode }) {
  const [darkmode, setDarkmode] = useState(false);

  return (
    <>
    {/* Passing darkmode state and setter to Navbar */}
      
      <html
      className={darkmode? 'dark' : ''}
      >

      <body >

      <Navbar darkmode={darkmode} setDarkmode={setDarkmode} />
    <div className="bg-white text-black dark:bg-red dark:text-white min-h-screen flex flex-col">
      <main className={`flex-grow`}>{children}</main>
      <Footer />
    </div>
      </body>
      </ html>
    </>
  );
}
