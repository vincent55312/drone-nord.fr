import Header from './Header';

export default function LandingHeader() {
  return (
    <Header variant="landing">
      <nav className="hidden md:flex gap-6">
        <a 
          href="#services" 
          className="text-[#0a0f1c] hover:text-opacity-80 transition-colors"
        >
          Services
        </a>
        <a 
          href="#zone" 
          className="text-[#0a0f1c] hover:text-opacity-80 transition-colors"
        >
          Zone d'intervention
        </a>
        <a 
          href="#contact" 
          className="text-[#0a0f1c] hover:text-opacity-80 transition-colors"
        >
          Contact
        </a>
      </nav>
    </Header>
  );
} 