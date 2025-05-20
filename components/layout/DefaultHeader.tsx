import Header from './Header';
import Link from 'next/link';

export default function DefaultHeader() {
  return (
    <Header variant="default">
      <nav className="hidden md:flex gap-6">
        <Link
          href="/" 
          className="text-[#0a0f1c] hover:text-opacity-80 transition-colors"
        >
          Accueil
        </Link>
        <a 
          href="/services" 
          className="text-[#0a0f1c] hover:text-opacity-80 transition-colors"
        >
          Services
        </a>
        <a 
          href="/contact" 
          className="text-[#0a0f1c] hover:text-opacity-80 transition-colors"
        >
          Contact
        </a>
      </nav>
    </Header>
  );
} 