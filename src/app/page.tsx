import Footer from "@/common/Footer";
import Navbar from "@/common/Navbar";
import ZocdocWidget from "@/common/ZocdocWidget";
import CrisisAlert from "@/components/CrisisAlert";
import Faq from "@/components/Faq";
import Hero from "@/components/Hero";
import Service from "@/components/Service";
import WhyChooseMe from "@/components/WhyChooseMe";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <ZocdocWidget />
      <Service />
      <WhyChooseMe />
      <Faq />
      <CrisisAlert />
      <Footer />
    </main>
  );
}
