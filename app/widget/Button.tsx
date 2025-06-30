'use client';
import React from 'react';

type Props = {
  children: React.ReactNode;
  variant?: string; 
  className?: string;
  onClick?: () => void;
};
type ButtonVariant =
  | 'default'
  | 'modebutton'
  | 'fulllength'
  | 'slideshow';

const variantClasses: Record<ButtonVariant, string> = {
  default:'bg:black text-white h-10 w-10 rounded-full hover:bg-gray-400 dark:border-2 dark:border-white active:scale-95',
  modebutton: 'bg-black text-white h-10 w-30 absolute right-2 rounded hover:bg-gray-400 dark:border-2 dark:border-white active:scale-95',
  fulllength: 'w-full text-left text-2xl font-bold border-b pb-2',
  slideshow: 'bg-black text-white h-10 w-30  rounded hover:bg-gray-400 dark:border-2 dark:border-white active:scale-95'
};
const Text = ({ children, variant = 'modebutton', className = '', onClick }: Props) => {
    const style=variantClasses[ variant as ButtonVariant]||""
  return (
   <button className={`${style} ${className}`} onClick={onClick}>
      {children}
    </button>
  )
}

export default Text