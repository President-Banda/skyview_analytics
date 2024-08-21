import Image from "next/image";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Testimonial from "@/components/Testimonial";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="font-[Wix-Madefor-Display] font-bold">
      <Navbar />
      <Header />
      <Testimonial />
      <Services />
      <Team />
      <Footer />
    </div>
  );
}
