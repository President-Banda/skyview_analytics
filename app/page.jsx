import Navbar       from "@/components/Navbar";
import Header       from "@/components/Header";
import Services     from "@/components/Services";
import Credentials  from "@/components/Credentials";
import Testimonial  from "@/components/Testimonial";
import Team         from "@/components/Team";
import CoreValues   from "@/components/CoreValues";
import Footer       from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import SectionNav   from "@/components/SectionNav";
import BackToTop    from "@/components/BackToTop";

export default function Home() {
  return (
    <div>
      <ScrollProgress />
      <SectionNav />
      <BackToTop />
      <Navbar />
      <Header />
      <Services />
      <Credentials />
      <Testimonial />
      <Team />
      <CoreValues />
      <Footer />
    </div>
  );
}
