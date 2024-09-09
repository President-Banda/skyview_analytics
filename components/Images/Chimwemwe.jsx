import Image from 'next/image'

const Chimwemwe_Image = () => {
  return (
    <div>
        <Image 
        src="/images/chimwemwe.png" 
        alt="logo"
        width={300}
        height={300}
        className="rounded-lg"
        ></Image>
    </div>
  )
}

export default Chimwemwe_Image