"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Importer les services depuis le fichier JSON
import services from '@/data/services.json';

export default function LandingHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  
  // Observer l'intersection des sections
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
      
      // Détection de la section active
      const sections = ['services', 'zone', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
            setActiveSection(section);
            break;
          } else if (window.scrollY < 100) {
            setActiveSection('');
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation avec liens de pages complètes (pas d'ancres #)
  const navLinks = [
    { name: 'Accueil', href: '/#', id: '' },
    { name: 'Services', href: '/#services', id: 'services' },
    { name: 'Zone d\'intervention', href: '/#zone', id: 'zone' },
    { name: 'Contact', href: '/#contact', id: 'contact' },
  ];

  // Fermer le menu mobile lors du changement de section
  const handleSectionClick = () => {
    setMobileMenuOpen(false);
  };

  // Variantes d'animation pour le menu mobile
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    closed: { opacity: 0, y: -10 },
    open: { opacity: 1, y: 0 }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 backdrop-blur-md ${
        scrolled ? 'shadow-lg bg-white/90' : 'bg-white/70'
      }`}
    >
      {/* Image d'arrière-plan pour desktop et mobile */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-white/90 backdrop-blur-md"></div>
        <Image 
          src="/panorama2.webp"
          alt="Vue panoramique par drone"
          fill
          className="object-cover opacity-10"
          priority
        />
      </div>
      
      <div className="container mx-auto px-4 flex justify-between items-center py-1.5 sm:py-2.5 relative z-10">
        <Link href="/" className="flex items-center group z-50 relative">
          <div className={`relative transition-all duration-300 ${scrolled ? 'w-[55px] h-[33px] sm:w-[60px] sm:h-[36px]' : 'w-[65px] h-[39px] sm:w-[70px] sm:h-[42px]'}`}>
            <Image
              src="/logo.png"
              alt="Drone Nord"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="ml-2.5">
            <span className={`font-extrabold tracking-wide transition-all duration-300 ${
              scrolled ? 'text-sm sm:text-sm' : 'text-base sm:text-base'
            } text-[var(--polynesian-blue)]`}>
              Drone-nord<span className="text-[var(--pumpkin)]">.fr</span>
            </span>
            <div className="h-0.5 w-0 bg-[var(--pumpkin)] transition-all duration-300 group-hover:w-full"></div>
          </div>
        </Link>
        
        {/* Navigation desktop */}
        <nav className="hidden lg:flex items-center">
          <ul className="flex space-x-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className={`group relative font-medium px-2 py-1 transition-all duration-300 ${
                    activeSection === link.id ? 'text-[var(--pumpkin)]' : 'text-[var(--polynesian-blue)] hover:text-[var(--pumpkin)]'
                  }`}
                >
                  <span className="relative z-10">{link.name}</span>
                  {activeSection === link.id && (
                    <span className="absolute inset-0 bg-[var(--pumpkin)]/10 rounded-md -z-0"></span>
                  )}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--pumpkin)] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        {/* Navigation mobile - Supprimée pour éviter la redondance avec la position actuelle */}
        
        <div className="flex items-center">
          <a 
            href="tel:+33745593516" 
            className={`relative bg-[var(--polynesian-blue)] text-white rounded-full hover:bg-[var(--pumpkin)] hover:text-white hover:shadow-lg hover:translate-y-[-2px] transition-all flex items-center gap-1.5 sm:gap-2 overflow-hidden group ${
              scrolled ? 'px-3 sm:px-3.5 py-1.5 sm:py-1.5' : 'px-3.5 sm:px-4 py-1.5 sm:py-2'
            }`}
          >
            <div className="absolute inset-0 w-0 bg-gradient-to-r from-[var(--pumpkin)] to-[var(--pumpkin)]/80 transition-all duration-500 ease-out group-hover:w-full"></div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 sm:w-3.5 sm:h-3.5 relative z-10">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <span className="text-sm sm:text-sm whitespace-nowrap font-semibold tracking-tight sm:tracking-wide relative z-10">Nous contacter</span>
          </a>
        </div>
      </div>
      
      {/* Bande défilante de services - visible sur tous les appareils */}
      <div className="bg-white/70 backdrop-blur-md overflow-hidden h-9 w-full flex items-center border-t border-[var(--polynesian-blue)]/5 relative z-10">
        <div className="animate-marquee flex">
          {/* Première moitié qui remplit l'écran dès le départ */}
          <div className="flex items-center">
            {Array(2).fill(0).map((_, dupeIndex) => (
              services.map((service, index) => (
                <Link 
                  href={`/${service.slug}`}
                  key={`start-${dupeIndex}-${index}`}
                  className="inline-flex mx-2 px-3 py-0.5 bg-[var(--polynesian-blue)]/10 hover:bg-[var(--polynesian-blue)]/20 rounded-md text-[var(--polynesian-blue)] text-sm font-medium transition-colors duration-300"
                >
                  {service.service}
                </Link>
              ))
            ))}
          </div>
          
          {/* Seconde moitié pour la continuité de l'animation */}
          <div className="flex items-center">
            {Array(2).fill(0).map((_, dupeIndex) => (
              services.map((service, index) => (
                <Link 
                  href={`/${service.slug}`}
                  key={`loop-${dupeIndex}-${index}`}
                  className="inline-flex mx-2 px-3 py-0.5 bg-[var(--polynesian-blue)]/10 hover:bg-[var(--polynesian-blue)]/20 rounded-md text-[var(--polynesian-blue)] text-sm font-medium transition-colors duration-300"
                >
                  {service.service}
                </Link>
              ))
            ))}
          </div>
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          min-width: 100%;
        }
        
        @media (max-width: 768px) {
          .animate-marquee {
            animation: marquee 12s linear infinite;
          }
        }
      `}</style>
    </header>
  );
} 