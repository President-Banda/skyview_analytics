import Image from "next/image";

import React from 'react'

const Logo = ({ className }) => {
  return (
    <div className="relative w-full h-full">
        <Image
        src="/images/sva_logo.svg" 
        alt="logo"
        width={500}
        height={500}
        className={className + " object-contain"}
        />
    </div>
  )
}

export default Logo