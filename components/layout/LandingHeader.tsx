"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

// Importer les services depuis le fichier JSON
import services from '@/data/services.json';

export default function DefaultHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Navigation avec liens de pages complètes (pas d'ancres #)
  const navLinks = [
    { name: 'Accueil', href: '/#' },
    { name: 'Services', href: '/#services' },
    { name: 'Zone d\'intervention', href: '/#zone' },
    { name: 'Contact', href: '/#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[var(--theme-bg)] ${
        scrolled ? 'shadow-md' : ''
      } border-b-1 border-[var(--polynesian-blue)]`}
      style={{
        backgroundColor: 'var(--antiflash-white)',
      }}
    >
      <div className="container mx-auto py-1 px-5 flex justify-between items-center">
        <Link href="/" className="flex items-center group">
          <div className="relative w-[70px] sm:w-[100px] h-[40px] sm:h-[60px]">
            <Image
              src="/logo.png"
              alt="Drone Nord"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="ml-2">
            <span className="font-extrabold text-base sm:text-lg tracking-wide text-[var(--polynesian-blue)]">
              Drone-nord<span className="text-[var(--pumpkin)]">.fr</span>
            </span>
            <div className="h-0.5 w-0 bg-[var(--pumpkin)] transition-all duration-300 group-hover:w-full"></div>
          </div>
        </Link>
        
        <nav className="hidden md:flex items-center">
          <ul className="flex space-x-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className="group relative font-medium text-[var(--polynesian-blue)] hover:text-[var(--pumpkin)] transition-colors"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[var(--pumpkin)] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="flex items-center gap-4">
          <button 
            className="hidden text-[var(--polynesian-blue)] p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              )}
            </svg>
          </button>
          
          <a 
            href="tel:+33745593516" 
            className="bg-[var(--polynesian-blue)] text-[var(--antiflash-white)] px-3 sm:px-5 py-1.5 sm:py-2.5 rounded-full hover:bg-[var(--pumpkin)] hover:text-[var(--antiflash-white)] hover:shadow-lg hover:translate-y-[-2px] transition-all flex items-center gap-1 sm:gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 sm:w-4 sm:h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
            </svg>
            <span className="text-xs sm:text-sm whitespace-nowrap font-semibold tracking-tight sm:tracking-wide">Nous contacter</span>
          </a>
        </div>
      </div>
      
      {mobileMenuOpen && (
        <div 
          className="md:hidden absolute top-full left-0 right-0 bg-[var(--theme-bg)] shadow-lg py-4 px-5 transition-all duration-300"
          style={{ backgroundColor: 'var(--theme-bg)' }}
        >
          <ul className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  href={link.href}
                  className="block font-medium text-[var(--polynesian-blue)] hover:text-[var(--pumpkin)] transition-colors py-1"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      
      {/* Bande défilante de services */}
      <div className="bg-[var(--polynesian-blue)] overflow-hidden h-10 w-full flex items-center">
        <div className="animate-marquee flex">
          {/* Première moitié qui remplit l'écran dès le départ */}
          <div className="flex">
            {Array(4).fill(0).map((_, dupeIndex) => (
              services.map((service, index) => (
                <Link 
                  href={`/${service.slug}`}
                  key={`start-${dupeIndex}-${index}`}
                  className="inline-flex mx-2 px-4 py-1 bg-[var(--antiflash-white)]/10 backdrop-blur-sm rounded-md text-[var(--antiflash-white)] text-sm font-medium hover:bg-[var(--pumpkin)]/50 transition-colors duration-300"
                >
                  {service.service}
                </Link>
              ))
            ))}
          </div>
          
          {/* Seconde moitié pour la continuité de l'animation */}
          <div className="flex">
            {Array(4).fill(0).map((_, dupeIndex) => (
              services.map((service, index) => (
                <Link 
                  href={`/${service.slug}`}
                  key={`loop-${dupeIndex}-${index}`}
                  className="inline-flex mx-2 px-4 py-1 bg-[var(--antiflash-white)]/10 backdrop-blur-sm rounded-md text-[var(--antiflash-white)] text-sm font-medium hover:bg-[var(--pumpkin)]/50 transition-colors duration-300"
                >
                  {service.service}
                </Link>
              ))
            ))}
          </div>
        </div>
      </div>
    </header>
  );
} 