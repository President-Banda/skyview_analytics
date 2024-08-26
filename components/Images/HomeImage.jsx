import Image from "next/image"

const HomeImage = () => {
  return (
    <div>
        <div>
        <Image
        src="/images/image.jpeg" 
        alt="logo"
        width={550}
        height={600}
        className="rounded-lg"
        />
    </div>
    </div>
  )
}

export default HomeImage