import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/ui/Loader";
import HeroSection from "@/components/home/HeroSection";
import PrintingServices from "@/components/home/PrintingServices";

export default function Home() {
  return (
    <main className="relative bg-background">
      {/* <Loader /> */}
      <Navbar />
      <HeroSection/>
      <PrintingServices />
      <Footer />
    </main>
  );
}
