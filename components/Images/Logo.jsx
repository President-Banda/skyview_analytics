import Image from "next/image";

import React from 'react'

const Logo = () => {
  return (
    <div>
        <Image
        src="/images/skyview.svg" 
        alt="logo"
        width={200}
        height={200}
        />
    </div>
  )
}

export default Logo