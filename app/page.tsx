import LandingHeader from "@/components/layout/LandingHeader";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ZoneSection from "@/components/sections/ZoneSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <>
      <LandingHeader />
      
      <main className="min-h-screen">
        <HeroSection />
        <ServicesSection />
        <ZoneSection />
        <ContactSection />
      </main>
      
      <Footer />
    </>
  );
}
