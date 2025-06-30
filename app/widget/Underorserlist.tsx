'use client';
import React from 'react';

type Props = {
  children: React.ReactNode;
  variant?: string; 
  className?: string;
};
type listVariant =
  | 'columnlist'
  | 'bulletlist';

const variantClasses: Record<listVariant, string> = {
  columnlist: 'space-y-4',
  bulletlist: 'list-disc pl-5 space-y-1',
};
const Unorderlist = ({ children, variant = 'default', className = '' }: Props) => {
    const style=variantClasses[ variant as listVariant]||""
  return (
   <ul className={`${style} ${className}`}>
      {children}
    </ul>
  )
}

export default Unorderlist