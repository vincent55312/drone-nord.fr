"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function HeroSection() {
  const [currentTag, setCurrentTag] = useState(0);
  const [currentImage, setCurrentImage] = useState(1);
  const totalImages = 3;
  
  const serviceTags = [
    'Mariages', 'Immobilier', 'Événements', 'Entreprises', 'Tourisme'
  ];

  useEffect(() => {
    // Intervalle pour le défilement des tags
    const tagInterval = setInterval(() => {
      setCurrentTag((prev) => (prev + 1) % serviceTags.length);
    }, 2000);
    
    // Intervalle pour le défilement des images
    const imageInterval = setInterval(() => {
      setCurrentImage((prev) => prev === totalImages ? 1 : prev + 1);
    }, 4000);
    
    return () => {
      clearInterval(tagInterval);
      clearInterval(imageInterval);
    };
  }, [serviceTags.length, totalImages]);

  return (
    <section 
      className="relative h-screen pt-[110px] overflow-hidden"
      style={{
        background: 'var(--polynesian-blue)' 
      }}
    >
      {/* Overlay design elements - can be adjusted with new palette */}
      <div 
        className="absolute top-0 right-0 w-full h-60"
        style={{ background: 'radial-gradient(circle, rgba(var(--rgb-bice-blue, 58, 110, 165), 0.05) 0%, transparent 70%)'}}
      ></div>
      <div 
        className="absolute bottom-0 left-0 w-full h-60"
        style={{ background: 'linear-gradient(to top, rgba(var(--rgb-polynesian-blue, 0, 78, 152), 0.5) 0%, transparent 70%)'}}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 h-full flex items-center">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full">
          {/* Text Content */}
          <div className="w-full lg:w-1/2 text-[var(--antiflash-white)] z-10 text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start mb-6">
              <div 
                className="p-2 rounded-full backdrop-blur-sm"
                style={{ backgroundColor: 'rgba(var(--rgb-antiflash-white, 235, 235, 235), 0.1)'}}
              >
                <Image 
                  src="/logo.png" 
                  alt="Drone Nord - Service de drone dans le Nord et Nord-Pas-de-Calais" 
                  width={50} 
                  height={50}
                  className="object-contain"
                />
              </div>
              <span 
                className="ml-4 uppercase tracking-widest text-sm sm:text-base font-bold text-[var(--pumpkin)]"
              >
                Captation vidéo/photo aérienne par drone
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 sm:mb-6 tracking-tight leading-tight">
              Vos vidéos et photos aériennes par drone <br /> dans le Nord et alentours
            </h1>
            
            <p 
              className="text-base sm:text-lg mb-4 sm:mb-6 max-w-lg mx-auto lg:mx-0 leading-relaxed"
              style={{ color: 'rgba(var(--rgb-antiflash-white, 235, 235, 235), 0.9)' }}
            >
              Sublimez vos projets avec nos prestations professionnelles de captation aérienne par drone dans le Nord. Vidéos en 4K Ultra HD, photographies haute résolution et montages professionnels pour vos mariages, événements et projets immobiliers.
            </p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-6">
              {serviceTags.map((tag, index) => (
                <span 
                  key={tag}
                  className={`text-xs py-1 px-3 rounded-full transition-all duration-300 ${
                    index === currentTag 
                      ? 'bg-[var(--pumpkin)] text-white scale-110' 
                      : 'bg-white/20 text-white/90'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-row sm:flex-row gap-4 justify-center lg:justify-start">
              <a 
                href="tel:+33745593516" 
                className="relative inline-flex items-center justify-center bg-[var(--pumpkin)] text-white px-6 py-3 rounded-full font-bold hover:shadow-lg hover:shadow-[var(--pumpkin)]/25 hover:translate-y-[-2px] transition-all duration-300 overflow-hidden group w-auto max-w-[240px] mx-auto sm:mx-0"
                aria-label="Appelez-nous pour un projet de captation par drone"
              >
                <span className="relative z-10 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3 group-hover:animate-pulse">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25Z" />
                  </svg>
                  <span className="text-lg font-bold">07 45 59 35 16</span>
                </span>
                <div 
                  className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                ></div>
              </a>
              
              <Link 
                href="#contact" 
                className="relative inline-flex items-center justify-center border border-[var(--antiflash-white)] text-[var(--antiflash-white)] px-6 py-3 rounded-full font-bold hover:bg-[var(--antiflash-white)]/10 hover:translate-y-[-2px] transition-all duration-300 overflow-hidden group w-auto max-w-[240px] mx-auto sm:mx-0"
                aria-label="Demander un devis gratuit pour un projet de captation par drone"
              >
                <span className="relative z-10 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  Devis gratuit
                </span>
              </Link>
            </div>
          </div>
          
          {/* Image Content */}
          <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-none lg:w-1/2 mt-6 lg:mt-0">
            <div className="relative mx-auto lg:ml-auto lg:mr-0">
              <div 
                className="relative rounded-2xl overflow-hidden shadow-2xl"
                style={{ borderColor: 'rgba(var(--rgb-silver, 192, 192, 192), 0.5)', borderWidth: '1px'}}
              >
                <div className="w-full aspect-[16/9] relative">
                  {[1, 2, 3].map((num) => (
                    <div 
                      key={num}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        currentImage === num ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <Image
                        src={`/maison${num}.webp`}
                        alt={`Captation vidéo aérienne par drone professionnel 4K à Lille, Dunkerque et Valenciennes - Vue panoramique ${num}`}
                        className={`object-cover transform transition-transform duration-5000 ${
                          currentImage === num ? 'animate-zoom-in' : ''
                        }`}
                        fill
                        priority={num === 1}
                        fetchPriority={num === 1 ? "high" : "auto"}
                        loading={num === 1 ? "eager" : "lazy"}
                      />
                    </div>
                  ))}
                  
                  <div className="absolute top-4 right-4 bg-[var(--pumpkin)] text-white text-xs px-2 py-1 rounded-md font-semibold flex items-center z-10">
                    <span className="mr-1 relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    4K UHD
                  </div>
                </div>
                <div 
                  className="absolute inset-0 z-[1]"
                  style={{ background: 'linear-gradient(to top, rgba(var(--rgb-polynesian-blue,0,78,152),0.4) 0%, transparent 70%)'}}
                > 
                  <div className="absolute bottom-4 left-4 flex items-center">
                    <div 
                      className="py-1 px-3 rounded-full flex items-center backdrop-blur-sm"
                      style={{ backgroundColor: 'rgba(var(--rgb-polynesian-blue,0,78,152),0.3)'}}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--silver)" className="w-4 h-4 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      <span className="text-[var(--antiflash-white)] text-xs font-medium">Lille, Dunkerque, Valenciennes</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-[-10%] left-[-5%] animate-float hidden lg:block">
                <div className="w-24 h-24">
                  <Image 
                    src="/avata2.png" 
                    alt="Drone professionnel pour captation vidéo aérienne 4K dans le Nord et Nord-Pas-de-Calais"
                    width={100}
                    height={100}
                    className="object-contain"
                  />
                </div>
              </div>
              
              <div 
                className="absolute -bottom-5 -left-5 w-20 h-20 rounded-xl blur-sm -z-10 hidden sm:block"
                style={{ backgroundColor: 'rgba(var(--rgb-silver,192,192,192),0.2)'}}
              ></div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-[var(--antiflash-white)] flex flex-col items-center">
        <span className="text-sm mb-2 font-medium" style={{color: 'var(--silver)'}}>Explorer nos services</span>
        <div 
          className="w-8 h-8 rounded-full border flex items-center justify-center animate-bounce backdrop-blur-sm"
          style={{
            borderColor: 'rgba(var(--rgb-silver,192,192,192),0.3)',
            backgroundColor: 'rgba(var(--rgb-polynesian-blue,0,78,152),0.3)'
          }}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="var(--silver)" className="w-4 h-4">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
          </svg>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        @keyframes zoom-in {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
        .animate-zoom-in {
          animation: zoom-in 4s linear forwards;
        }
      `}</style>
    </section>
  );
} 