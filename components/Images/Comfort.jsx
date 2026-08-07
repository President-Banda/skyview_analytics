import Image from 'next/image'

const Comfort_Image = () => {
  return (
    <div>
        <Image
        src="/images/comfort.png" 
        alt="Comfort Kanene"
        width={80}
        height={80}
        className="rounded-lg size-20"
        >

        </Image>
    </div>
  )
}

export default Comfort_Image
