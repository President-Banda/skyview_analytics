import Image from 'next/image'

const Footer_Image = () => {
  return (
    
        <Image
        src="/images/sva_services.jpg" 
        alt="footer image"
        width={520}
        height={400}
        className="rounded-lg absolute inset-0 h-full w-full object-cover"
        >

        </Image>
    
  )
}

export default Footer_Image