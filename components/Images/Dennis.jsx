import Image from 'next/image'
import React from 'react'

const Dennis_Image = () => {
  return (
    <div>
        <Image
        src="/images/dennis.png" 
        alt="logo"
        width={300}
        height={300}
        className="rounded-lg"
        ></Image>
    </div>
  )
}

export default Dennis_Image