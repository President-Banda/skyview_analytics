import Image from 'next/image'

const Footer_Image = () => {
  return (
    
        <Image
        src="/images/skyview_footer.webp" 
        alt="logo"
        width={520}
        height={400}
        className="rounded-lg absolute inset-0 h-full w-full object-cover"
        >

        </Image>
    
  )
}

export default Footer_Image