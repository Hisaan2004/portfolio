'use client';
import React, { useState } from 'react';
import Button from '@/app/widget/Button';
import Unorderlist from '../widget/Underorserlist';

type Props = {
  title: string;
  items: string[];
};

const Skillpart = ({ title, items }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-full">
      <Button variant="fulllength" onClick={() => setOpen(!open)}>
        {title}
      </Button>
      {open && (
        <div className="bg-gray-200 dark:bg-white text-black dark:text-black p-4 rounded-lg mt-2 shadow">
          <Unorderlist variant="bulletlist">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </Unorderlist>
        </div>
      )}
    </div>
  );
};

export default Skillpart;
