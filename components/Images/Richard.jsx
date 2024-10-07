import Image from 'next/image'

const Richard_Image = () => {
  return (
    <div>
        <Image
        src="/images/richard.png" 
        alt="logo"
        width={80}
        height={80}
        className="rounded-lg size-20"
        >

        </Image>
    </div>
  )
}

export default Richard_Image