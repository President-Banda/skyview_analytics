import Image from "next/image"

const Ml_Hosting_Image = () => {
  return (
    <div>
        <Image
        src="/images/ml_resized.jpg" 
        alt="logo"
        width={400}
        height={200}
        className="rounded-lg"
        >
            
        </Image>
    </div>
  )
}

export default Ml_Hosting_Image