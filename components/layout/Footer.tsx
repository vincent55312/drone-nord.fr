import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[var(--polynesian-blue)] text-[var(--antiflash-white)] py-12 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between gap-8">
          <div>
            <Link href="/" className="flex items-center mb-4 group">
              <Image
                src="/logo.png"
                alt="Drone Nord"
                width={120}
                height={40}
              />
              <span className="ml-2 font-bold text-[var(--antiflash-white)]">
                Drone-nord<span className="text-[var(--pumpkin)]">.fr</span>
              </span>
            </Link>
            <p className="text-sm text-[var(--antiflash-white)] max-w-xs">
              Services professionnels de captation aérienne par drone dans les Hauts-de-France.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[var(--antiflash-white)] border-b border-[var(--antiflash-white)]/20 pb-2">Liens utiles</h3>
            <ul className="space-y-3">
              <li>
                <a href="/mentions-legales" className="text-[var(--antiflash-white)] hover:text-[var(--pumpkin)] transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                  Mentions légales
                </a>
              </li>
              <li>
                <a href="/politique-confidentialite" className="text-[var(--antiflash-white)] hover:text-[var(--pumpkin)] transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a href="/cgv" className="text-[var(--antiflash-white)] hover:text-[var(--pumpkin)] transition-colors flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                  CGV
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-[var(--antiflash-white)] border-b border-[var(--antiflash-white)]/20 pb-2">Contact</h3>
            <address className="not-italic space-y-3">
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-[var(--silver)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:contact@drone-nord.fr" className="text-[var(--antiflash-white)] hover:text-[var(--pumpkin)] transition-colors">
                  contact@drone-nord.fr
                </a>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-[var(--silver)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                <a href="tel:+33600000000" className="text-[var(--antiflash-white)] hover:text-[var(--pumpkin)] transition-colors">
                  +33 6 00 00 00 00
                </a>
              </p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-[var(--antiflash-white)]/20 mt-8 pt-6 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-[var(--antiflash-white)]/80">SIRET: 00000000000000 - Drone Nord © {new Date().getFullYear()}</p>
            <div className="text-center mt-3 md:mt-0 text-xs text-[var(--antiflash-white)]/60">
              <p>&copy; {new Date().getFullYear()} Drone Nord. Tous droits réservés.</p>
              <p className="mt-1">
                Développé avec expertise par{" "}
                <a 
                  href="https://site-en-or.fr" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-[var(--pumpkin)] hover:text-[var(--pumpkin)]/80 transition-colors"
                >
                  site-en-or.fr
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 