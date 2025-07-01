'use client';
import React from 'react';
import Image from 'next/image';

type Props = {
  image:string;
  names:string;
  variant?: string; 
  className?: string;
};
type imageVariant =
  | 'profileicon'
  | 'profile';

const variantClasses: Record<imageVariant, string> = {
  profile: 'w-[400] h-[400] rounded-full border-4 border-black object-cover',
  profileicon: 'w-[30] h-[30] mr-2 rounded-full object-cover border-2 border-black',
};
const Images = ({image,names, variant, className = '' }: Props) => {
    const style=variantClasses[ variant as imageVariant]||""
  return (
   <Image src={image} alt={names} width={100} height={100}className={`${style} ${className}`}>
    </Image>
  )
}

export default Images