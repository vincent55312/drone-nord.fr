import LandingHeader from "@/components/layout/LandingHeader";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ZoneSection from "@/components/sections/ZoneSection";
import ContactSection from "@/components/sections/ContactSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <LandingHeader />
      
      <main className="min-h-screen">
        <HeroSection />
        <ServicesSection />
        
        {/* Bannière de séparation avec image en arrière-plan */}
        <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-[#e8f3ff]">
            <Image 
              src="/panorama1.webp"
              alt="Captation aérienne professionnelle par drone dans le Nord"
              fill
              className="object-cover opacity-60"
              priority={false}
            />
          </div>
          <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
            <div className="text-center">
              <p className="text-[var(--polynesian-blue)] text-xl md:text-2xl lg:text-3xl font-semibold max-w-3xl mx-auto leading-relaxed">
                Sublimez vos projets avec des images aériennes professionnelles dans le Nord-Pas-de-Calais
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#e8f3ff]/50 opacity-70"></div>
        </div>
        
        <ZoneSection />
        <ContactSection />
      </main>
      
      <Footer />
    </>
  );
}
