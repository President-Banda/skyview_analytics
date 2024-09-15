import Image from 'next/image'
import React from 'react'

const Richard_Image = () => {
  return (
    <div>
        <Image
        src="/images/richard.png" 
        alt="logo"
        width={240}
        height={240}
        className="rounded-lg"
        >

        </Image>
    </div>
  )
}

export default Richard_Image