'use client';
import React from 'react'
import Image from 'next/image'

type AiiconProps = {
  onClick: () => void;
};

const Aiicon = ({ onClick }: AiiconProps) => {
  return (
    <div className='fixed bottom-4 right-2 mb-5 mr-2'>
      <Image
        src="/Aiicon.jpg"
        alt="AI chatbot"
        width={70}
        height={70}
        className="rounded-full border-4 border-black object-cover cursor-pointer "
        onClick={onClick}
      />
    </div>
  );
};

export default Aiicon;
