import Image from 'next/image'
import React from 'react'

const Albert_Image = () => {
  return (
    <div>
        <Image
        src="/images/albert_cropped.png" 
        alt="logo"
        width={240}
        height={240}
        className="rounded-lg"
        >

        </Image>
    </div>
  )
}

export default Albert_Image