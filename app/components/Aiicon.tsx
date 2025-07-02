'use client';
import React from 'react'
import { Bot } from 'lucide-react';
type AiiconProps = {
  onClick: () => void;
};

const Aiicon = ({ onClick }: AiiconProps) => {
  return (
    <div className='fixed bottom-5 right-2  mr-2'>
      <Bot
        className="h-10 w-10 rounded-full border-4 border-black object-cover cursor-pointer dark:border-2 dark:border-white "
        onClick={onClick}
      />
    </div>
  );
};

export default Aiicon;
