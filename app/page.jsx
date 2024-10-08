import Image from "next/image";
import Services from "@/components/Services";
import Team from "@/components/Team";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Testimonial from "@/components/Testimonial";
import Navbar from "@/components/Navbar";
import CoreValues from "@/components/CoreValues";

export default function Home() {
  return (
    <div className="font-[Dosis] font-bold">
      <Navbar />
      <Header />
      <Testimonial />
      <Services />
      <Team />
      <CoreValues />
      <Footer />
    </div>
  );
}
