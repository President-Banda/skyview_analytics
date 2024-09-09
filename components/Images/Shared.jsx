import Image from "next/image"

const Shared_Hosting_Image = () => {
  return (
    <div>
        <Image
        src="/images/shared_resized.jpg" 
        alt="logo"
        width={400}
        height={200}
        className="rounded-lg"
        ></Image>
    </div>
  )
}

export default Shared_Hosting_Image