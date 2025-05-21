"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Vérifier si l'utilisateur a déjà accepté les cookies
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  const declineCookies = () => {
    // On peut définir des cookies essentiels uniquement
    localStorage.setItem('cookiesAccepted', 'false');
    setIsVisible(false);
  };
  
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-[var(--polynesian-blue)] shadow-lg backdrop-blur-md">
      <div className="container mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-[var(--antiflash-white)] text-sm max-w-3xl">
            <p>
              Ce site utilise des cookies pour améliorer votre expérience de navigation. En continuant à utiliser ce site, vous acceptez notre utilisation des cookies.{' '}
              <Link href="/politique-confidentialite" className="text-[var(--pumpkin)] underline">
                En savoir plus
              </Link>
            </p>
          </div>
          
          <div className="flex gap-3">
            <button 
              onClick={declineCookies}
              className="px-4 py-2 text-sm border border-[var(--antiflash-white)] text-[var(--antiflash-white)] rounded-lg hover:bg-[var(--antiflash-white)]/10 transition-colors"
            >
              Refuser
            </button>
            <button 
              onClick={acceptCookies}
              className="px-4 py-2 text-sm bg-[var(--pumpkin)] text-white rounded-lg hover:bg-[var(--pumpkin)]/90 transition-colors"
            >
              Accepter
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 