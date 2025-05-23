"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection() {
  const [currentTag, setCurrentTag] = useState(0);
  const [currentImage, setCurrentImage] = useState(1);
  const totalImages = 3;
  const parallaxRef = useRef<HTMLDivElement>(null);
  
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
      className="relative min-h-[100vh] md:h-screen pt-0 overflow-hidden flex flex-col bg-gradient-to-br from-[#001e3e] via-[var(--polynesian-blue)] to-[#001e3e]"
      style={{ 
        background: "linear-gradient(135deg, var(--polynesian-blue) 0%, rgba(0,30,62,1) 100%)",
        height: "calc(100vh)"
      }}
    >
      {/* Overlay avec dégradés */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* Cercles lumineux d'ambiance */}
        <div className="absolute -top-20 -left-20 w-80 h-80 rounded-full opacity-20 blur-3xl" 
             style={{ background: 'radial-gradient(circle, rgba(var(--rgb-pumpkin), 0.4) 0%, transparent 70%)' }}></div>
        <div className="absolute -bottom-20 -right-20 w-96 h-96 rounded-full opacity-10 blur-3xl" 
             style={{ background: 'radial-gradient(circle, rgba(var(--rgb-pumpkin), 0.3) 0%, transparent 70%)' }}></div>
      </div>

      {/* Éléments décoratifs animés */}
      <div className="absolute top-40 left-10 w-2 h-2 rounded-full bg-[var(--pumpkin)] animate-ping opacity-70 hidden lg:block"></div>
      <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-[var(--silver)] animate-ping opacity-30 hidden lg:block" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-1/4 w-2 h-2 rounded-full bg-white animate-ping opacity-50 hidden lg:block" style={{animationDelay: '2s'}}></div>
      
      {/* Éléments décoratifs pour mobile */}
      <div className="absolute top-20 right-4 w-2 h-2 rounded-full bg-[var(--pumpkin)] animate-ping opacity-70 block lg:hidden"></div>
      <div className="absolute top-40 left-5 w-1.5 h-1.5 rounded-full bg-white animate-ping opacity-40 block lg:hidden" style={{animationDelay: '0.7s'}}></div>
      <div className="absolute bottom-40 right-10 w-2 h-2 rounded-full bg-[var(--silver)] animate-ping opacity-30 block lg:hidden" style={{animationDelay: '1.5s'}}></div>
      
      <div className="container mx-auto px-5 sm:px-6 flex-grow flex flex-col justify-center pt-16 md:pt-12 pb-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between w-full gap-8 lg:gap-16 mt-8 md:mt-0 lg:mt-0">
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 text-white z-10 text-center lg:text-left relative"
          >
            {/* Drone en mouvement */}
            <motion.div 
              animate={{ 
                y: [0, -15, 0],
                rotateZ: [0, -5, 0]
              }}
              transition={{ 
                duration: 4, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="absolute -top-10 -right-10 lg:top-2 lg:right-auto lg:-left-20 w-36 h-36 lg:w-56 lg:h-56 z-20 hidden md:block"
            >
              <div className="absolute inset-0 scale-150 rounded-full blur-3xl opacity-40" 
                   style={{ background: 'radial-gradient(circle, rgba(var(--rgb-pumpkin), 0.8) 0%, transparent 70%)' }}></div>
              <Image 
                src="/avata2.png" 
                alt="Drone professionnel" 
                fill
                className="object-contain drop-shadow-2xl"
                priority
              />
            </motion.div>
            
            {/* Mobile logo et drone animé - Agrandir le drone et ajouter effet de lueur */}
            <div className="relative md:hidden flex items-center justify-center mb-8">
              <div className="relative flex items-center justify-center">
                <div className="absolute w-44 h-44 rounded-full blur-3xl opacity-50" 
                     style={{ background: 'radial-gradient(circle, rgba(var(--rgb-pumpkin), 0.5) 0%, transparent 70%)' }}></div>
                <div className="flex items-center bg-white/5 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/10">
                  <Image 
                    src="/logo.png" 
                    alt="Drone Nord" 
                    width={40} 
                    height={40}
                    className="object-contain mr-3"
                  />
                  <span className="text-base font-bold text-white">Drone-nord<span className="text-[var(--pumpkin)]">.fr</span></span>
                </div>
                
                <motion.div 
                  animate={{ 
                    y: [0, -10, 0], 
                    rotateZ: [0, -5, 0]
                  }}
                  transition={{ 
                    duration: 3, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                  className="absolute -top-10 -right-14"
                >
                  <div className="absolute inset-0 rounded-full blur-2xl opacity-40" 
                       style={{ background: 'radial-gradient(circle, rgba(var(--rgb-pumpkin), 0.7) 0%, transparent 70%)' }}></div>
                  <div className="w-32 h-32">
                    <Image 
                      src="/avata2.png" 
                      alt="Drone professionnel"
                      width={128}
                      height={128}
                      className="object-contain drop-shadow-2xl"
                    />
                  </div>
                </motion.div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hidden md:flex items-center justify-center lg:justify-start mb-4 lg:ml-14"
            >
              <div 
                className="p-1.5 rounded-full backdrop-blur-sm"
                style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)'}}
              >
                <Image 
                  src="/logo.png" 
                  alt="Drone Nord - Service de drone dans le Nord et Nord-Pas-de-Calais" 
                  width={44} 
                  height={44}
                  className="object-contain"
                  priority
                />
              </div>
              <span 
                className="ml-4 uppercase tracking-widest text-xs sm:text-sm font-bold text-[var(--pumpkin)]"
              >
                Captation vidéo/photo aérienne par drone
              </span>
            </motion.div>
            
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-5 sm:mb-6 tracking-tight leading-none lg:ml-14 lg:pt-8">
                <span className="inline-flex flex-col">
                  <span className="mb-2">Vos vidéos et</span>
                  <span className="mb-2">photos <span className="relative inline-block">
                    <motion.span 
                      className="text-[var(--pumpkin)]"
                      animate={{ 
                        textShadow: ['0px 0px 0px rgba(255,103,0,0.2)', '0px 0px 10px rgba(255,103,0,0.5)', '0px 0px 0px rgba(255,103,0,0.2)'] 
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      aériennes
                    </motion.span>
                    <span className="absolute -bottom-2 left-0 w-full h-1 bg-[var(--pumpkin)] rounded-full opacity-60"></span>
                  </span></span>
                  <span>dans le Nord</span>
                </span>
              </h1>
              
              <div className="absolute -right-20 top-0 w-40 h-40 bg-[var(--pumpkin)] rounded-full blur-[100px] opacity-10 z-[-1] hidden lg:block"></div>
            </motion.div>
            
            <motion.p 
              className="text-base sm:text-base md:text-lg mb-7 sm:mb-8 max-w-xl mx-auto lg:mx-0 lg:ml-14 leading-relaxed text-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Prestations professionnelles de captation par drone en 4K Ultra HD pour vos projets immobiliers, mariages et événements.
            </motion.p>

            <motion.div 
              className="hidden sm:flex flex-wrap justify-center lg:justify-start gap-2 mb-7 lg:ml-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {serviceTags.map((tag, index) => (
                <motion.span 
                  key={tag}
                  className={`text-sm py-1.5 px-3.5 rounded-full transition-all duration-500 bg-black/10 backdrop-blur-sm border ${
                    index === currentTag 
                      ? 'border-[var(--pumpkin)] text-white shadow-lg shadow-[var(--pumpkin)]/20' 
                      : 'border-white/10 text-white/80 hover:border-white/30'
                  }`}
                  animate={index === currentTag ? { 
                    scale: [1, 1.05, 1],
                    backgroundColor: ['rgba(0,0,0,0.1)', 'rgba(var(--rgb-pumpkin),0.2)', 'rgba(0,0,0,0.1)']
                  } : {}}
                  transition={{ duration: 2, repeat: index === currentTag ? Infinity : 0 }}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
            
            {/* Tags sur mobile */}
            <motion.div 
              className="flex sm:hidden justify-center mb-7"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex gap-2 overflow-x-auto no-scrollbar py-2 px-2 justify-center">
                {serviceTags.map((tag, index) => (
                  <motion.span 
                    key={tag}
                    className={`text-sm whitespace-nowrap py-1.5 px-3.5 rounded-full transition-all duration-300 backdrop-blur-sm border ${
                      index === currentTag 
                        ? 'border-[var(--pumpkin)] text-white bg-[var(--pumpkin)]/20 shadow-lg shadow-[var(--pumpkin)]/20' 
                        : 'border-white/10 text-white/70 bg-black/10'
                    }`}
                    animate={index === currentTag ? { scale: [1, 1.05, 1] } : {}}
                    transition={{ duration: 1.5, repeat: index === currentTag ? Infinity : 0 }}
                  >
                    {tag}
                  </motion.span>
                ))}
              </div>
            </motion.div>
            
            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start lg:ml-14"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.a 
                href="tel:+33745593516" 
                className="relative inline-flex items-center justify-center bg-[var(--pumpkin)] text-white px-6 py-3.5 sm:px-7 sm:py-3.5 rounded-full font-bold hover:shadow-lg active:scale-95 hover:shadow-[var(--pumpkin)]/25 hover:translate-y-[-2px] transition-all duration-300 overflow-hidden group w-auto mx-auto sm:mx-0"
                aria-label="Appelez-nous pour un projet de captation par drone"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-4 sm:h-4 mr-2 sm:mr-2 group-hover:animate-pulse">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25Z" />
                  </svg>
                  <span className="text-base sm:text-base font-bold">07 45 59 35 16</span>
                </span>
                <div 
                  className="absolute inset-0 h-full w-full scale-0 rounded-full transition-all duration-300 group-hover:scale-100"
                  style={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                ></div>
              </motion.a>
              
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href="#contact" 
                  className="relative inline-flex items-center justify-center border-2 border-white/30 text-white px-6 py-[13px] sm:px-7 sm:py-[13px] rounded-full font-bold hover:bg-white/10 active:scale-95 hover:translate-y-[-2px] transition-all duration-300 overflow-hidden group w-auto mx-auto sm:mx-0"
                  aria-label="Demander un devis gratuit pour un projet de captation par drone"
                >
                  <span className="relative z-10 flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 sm:w-4 sm:h-4 mr-2 sm:mr-2">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                    <span className="text-base sm:text-base">Devis gratuit</span>
                  </span>
                  <div className="absolute inset-0 w-0 bg-gradient-to-r from-white/10 to-white/0 h-full group-hover:w-full transition-all duration-500 ease-out rounded-full"></div>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Image Content - VISIBLE UNIQUEMENT SUR DESKTOP */}
          <motion.div 
            className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none lg:w-1/2 hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="relative mx-auto lg:ml-auto lg:mr-0">
              <div 
                className="relative rounded-xl overflow-hidden shadow-2xl"
              >
                <div className="w-full aspect-[16/9] relative">
                  {[1, 2, 3].map((num) => (
                    <motion.div 
                      key={num}
                      className={`absolute inset-0 transition-opacity duration-1000 ${
                        currentImage === num ? 'opacity-100' : 'opacity-0'
                      }`}
                      initial={false}
                      animate={currentImage === num ? {
                        scale: [1, 1.08]
                      } : {}}
                      transition={{ duration: 4, ease: "easeInOut" }}
                    >
                      <Image
                        src={`/maison${num}.webp`}
                        alt={`Captation vidéo aérienne par drone professionnel 4K à Lille, Dunkerque et Valenciennes - Vue panoramique ${num}`}
                        className="object-cover"
                        fill
                        priority={num === 1}
                        fetchPriority={num === 1 ? "high" : "auto"}
                        loading={num === 1 ? "eager" : "lazy"}
                      />
                    </motion.div>
                  ))}
                  
                  <div className="absolute top-3 right-3 bg-[var(--pumpkin)] text-white text-xs px-2.5 py-1 rounded-md font-semibold flex items-center z-10 shadow-lg shadow-[var(--pumpkin)]/20">
                    <span className="mr-1 relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                    </span>
                    4K UHD
                  </div>
                  
                  {/* Vignettage et overlay */}
                  <div 
                    className="absolute inset-0 z-[1]"
                    style={{ 
                      background: 'radial-gradient(circle at center, transparent 60%, rgba(0,30,62,0.5) 100%), linear-gradient(to top, rgba(0,30,62,0.5) 0%, transparent 50%)'
                    }}
                  > 
                    <div className="absolute bottom-3 left-3 flex items-center">
                      <div 
                        className="py-1 px-2.5 rounded-full flex items-center backdrop-blur-sm shadow-lg bg-black/20 border border-white/10"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-3 h-3 mr-1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        <span className="text-white text-xs font-medium">Lille, Dunkerque, Valenciennes</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Indicateurs de progression des slides */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {[1, 2, 3].map((num) => (
                  <motion.span 
                    key={num} 
                    className={`block h-1 rounded-full transition-all duration-300 ${
                      currentImage === num ? 'w-6 bg-[var(--pumpkin)]' : 'w-2 bg-white/30'
                    }`}
                    animate={currentImage === num ? {
                      backgroundColor: ['rgb(var(--rgb-pumpkin))', 'rgb(var(--rgb-pumpkin), 0.6)', 'rgb(var(--rgb-pumpkin))']
                    } : {}}
                    transition={{ duration: 2, repeat: currentImage === num ? Infinity : 0 }}
                  ></motion.span>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Badge 4K et localisation pour mobile */}
          <motion.div 
            className="md:hidden flex flex-row gap-3 justify-center mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <div className="bg-[var(--pumpkin)] text-white text-sm px-3.5 py-2 rounded-lg font-semibold flex items-center shadow-lg shadow-[var(--pumpkin)]/20">
              <span className="mr-1.5 relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              4K UHD
            </div>
            
            <div className="py-1.5 px-3.5 rounded-lg flex items-center backdrop-blur-sm shadow-lg bg-white/10 border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-4 h-4 mr-2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              <span className="text-white text-sm font-medium">Lille, Dunkerque, Valenciennes</span>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="pb-2 text-white flex flex-col items-center mt-6 md:mt-0"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <span className="text-sm sm:text-sm mb-2 font-medium text-white/80">Explorer nos services</span>
          <motion.div 
            className="w-10 h-10 sm:w-10 sm:h-10 rounded-full border-2 flex items-center justify-center animate-bounce backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 cursor-pointer active:scale-95 border-white/20"
            onClick={() => {
              const servicesSection = document.getElementById('services');
              if (servicesSection) {
                servicesSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-5 h-5 sm:w-5 sm:h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
      
      <style jsx global>{`
        @keyframes float {
          0% { transform: translateY(0px) rotate(12deg); }
          50% { transform: translateY(-15px) rotate(8deg); }
          100% { transform: translateY(0px) rotate(12deg); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes float-mobile {
          0% { transform: translateY(0px) rotate(-12deg); }
          50% { transform: translateY(-10px) rotate(-8deg); }
          100% { transform: translateY(0px) rotate(-12deg); }
        }
        .animate-float-mobile {
          animation: float-mobile 3s ease-in-out infinite;
        }
        @keyframes zoom-in {
          0% { transform: scale(1); }
          100% { transform: scale(1.08); }
        }
        .animate-zoom-in {
          animation: zoom-in 4s linear forwards;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
} 