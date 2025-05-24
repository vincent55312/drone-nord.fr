import DefaultHeader from "@/components/layout/DefaultHeader";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import services from "@/data/services.json";

export const metadata = {
  title: 'Services Professionnels de Captation par Drone | Drone Nord',
  description: 'Découvrez nos services professionnels de captation vidéo et photo par drone dans le Nord-Pas-de-Calais : vidéo immobilière, mariage, événementiel, inspection, FPV et bien plus.',
  openGraph: {
    title: 'Services de Captation Aérienne par Drone | Drone Nord',
    description: 'Drone Nord propose des services de captation vidéo et photo par drone dans le Nord et Pas-de-Calais. Vidéo immobilière, mariage, événements, inspection et plus.',
    url: 'https://drone-nord.fr/services',
    siteName: 'Drone Nord - Services de captation par drone dans le Nord',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://drone-nord.fr/panorama1.webp',
        width: 1200,
        height: 630,
        alt: 'Drone Nord - Services professionnels de drone',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services de Captation Aérienne par Drone | Drone Nord',
    description: 'Drone Nord propose des services de captation vidéo et photo par drone dans le Nord et Pas-de-Calais. Vidéo immobilière, mariage, événements, inspection et plus.',
    images: ['https://drone-nord.fr/panorama1.webp'],
  },
  alternates: {
    canonical: 'https://drone-nord.fr/services',
  },
}

export default function ServicesPage() {
  return (
    <>
      <DefaultHeader />
      
      <main className="min-h-screen">
        {/* Hero Section avec panorama en background */}
        <div className="relative min-h-[60vh] flex items-center justify-center w-full">
          {/* Background panorama */}
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--polynesian-blue)]/95 via-[var(--polynesian-blue)]/75 to-[var(--polynesian-blue)]/30 z-10"></div>
            <Image 
              src="/panorama1.webp"
              alt="Vue aérienne par drone - Services professionnels"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          <div className="container mx-auto px-6 pt-28 pb-20 relative z-20 text-center">
            <h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
            >
              Nos services de captation par drone
            </h1>
            
            <div className="w-32 h-1 bg-gradient-to-r from-white to-[var(--pumpkin)] mx-auto mb-8 rounded-full"></div>
            
            <p 
              className="text-white/90 max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
            >
              Des solutions aériennes sur mesure pour tous vos projets visuels dans le Nord et le Pas-de-Calais
            </p>
            
            <div 
              className="mt-10 flex flex-wrap justify-center gap-4"
            >
              <Link 
                href="/contact" 
                className="bg-[var(--pumpkin)] text-white font-medium py-3 px-8 rounded-full transition-all hover:shadow-lg hover:shadow-[var(--pumpkin)]/30 hover:translate-y-[-2px] inline-flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Demander un devis gratuit
              </Link>
              <a 
                href="tel:+33745593516" 
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 font-medium py-3 px-8 rounded-full transition-all inline-flex items-center hover:shadow-lg hover:translate-y-[-2px]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[var(--pumpkin)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                07 45 59 35 16
              </a>
            </div>
          </div>
          
          {/* Wave separator */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full text-white">
              <path fill="currentColor" fillOpacity="1" d="M0,224L48,202.7C96,181,192,139,288,138.7C384,139,480,181,576,181.3C672,181,768,139,864,122.7C960,107,1056,117,1152,138.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>
        
        {/* Services Grid avec fond panorama subtil */}
        <div className="relative py-16 md:py-24 bg-white">
          <div className="absolute inset-0 opacity-5">
            <Image 
              src="/panorama1.webp"
              alt="Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-white/95"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-[var(--polynesian-blue)] mb-4">
                Nos prestations par drone
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[var(--polynesian-blue)] to-[var(--pumpkin)] mx-auto mb-6 rounded-full"></div>
              <p className="text-[var(--bice-blue)] max-w-3xl mx-auto text-lg">
                Sélectionnez le service qui correspond à votre projet
              </p>
            </div>
            
            <div 
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
            >
              {services.map((service, index) => (
                <div 
                  key={service.slug}
                >
                  <Link 
                    href={`/${service.slug}`}
                    className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-[var(--silver)]/10 hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col transform hover:-translate-y-1"
                  >
                    <div className="p-6 md:p-8 flex flex-col h-full relative">
                      {/* Top accent bar */}
                      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--polynesian-blue)] to-[var(--pumpkin)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      
                      {/* Services icon badges */}
                      <div className="bg-[var(--polynesian-blue)]/10 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6 group-hover:bg-[var(--polynesian-blue)]/20 transition-all">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-[var(--pumpkin)]">
                          <path strokeLinecap="round" strokeLinejoin="round" d={serviceIcons[index % serviceIcons.length]} />
                        </svg>
                      </div>
                      
                      <h2 className="text-xl font-bold text-[var(--polynesian-blue)] mb-3 group-hover:text-[var(--pumpkin)] transition-colors">
                        {service.service}
                      </h2>
                      <p className="text-[var(--bice-blue)] mb-6 flex-grow">
                        {service.description}
                      </p>
                      <div className="text-[var(--pumpkin)] font-medium flex items-center mt-auto group-hover:font-semibold">
                        En savoir plus
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Call to Action avec background panorama */}
        <div className="relative py-16 md:py-24">
          <div className="absolute inset-0">
            <Image 
              src="/panorama1.webp"
              alt="Background"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--polynesian-blue)]/60 to-[var(--polynesian-blue)]/90"></div>
          </div>
          
          <div className="container mx-auto px-6 text-center relative z-10">
            <h2 
              className="text-3xl md:text-4xl font-bold text-white mb-4"
            >
              Vous ne trouvez pas ce que vous cherchez ?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-white to-[var(--pumpkin)] mx-auto mb-8 rounded-full"></div>
            <p 
              className="text-white/90 max-w-2xl mx-auto mb-10 text-lg"
            >
              Nos services peuvent être adaptés à vos besoins spécifiques. N'hésitez pas à nous contacter pour discuter de votre projet et obtenir un devis sur mesure.
            </p>
            <div 
              className="flex flex-wrap justify-center gap-4"
            >
              <Link 
                href="/contact" 
                className="bg-[var(--pumpkin)] text-white font-medium py-3 px-8 rounded-full transition-all hover:shadow-lg hover:shadow-[var(--pumpkin)]/30 hover:translate-y-[-2px] inline-flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Demander un devis gratuit
              </Link>
              <a 
                href="tel:+33745593516" 
                className="bg-white/20 backdrop-blur-sm border border-white/30 text-white hover:bg-white/30 font-medium py-3 px-8 rounded-full transition-all inline-flex items-center hover:shadow-lg hover:translate-y-[-2px]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[var(--pumpkin)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                07 45 59 35 16
              </a>
            </div>
          </div>
        </div>
        
        {/* Schema.org Structured Data - enrichi */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ItemList",
              "itemListElement": services.map((service, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "url": `https://drone-nord.fr/${service.slug}`,
                "name": service.service,
                "description": service.description
              })),
              "numberOfItems": services.length,
              "provider": {
                "@type": "Organization",
                "name": "Drone Nord",
                "url": "https://drone-nord.fr",
                "logo": "https://drone-nord.fr/logo.png",
                "sameAs": [
                  "https://www.facebook.com/dronenord",
                  "https://www.instagram.com/drone_nord"
                ]
              }
            })
          }}
        />
      </main>
      
      <Footer />
    </>
  );
}

// Icons pour les services
const serviceIcons = [
  "M7.5 3.75H6A2.25 2.25 0 003.75 6v1.5M16.5 3.75H18A2.25 2.25 0 0120.25 6v1.5m0 9V18A2.25 2.25 0 0118 20.25h-1.5m-9 0H6A2.25 2.25 0 013.75 18v-1.5M15 12a3 3 0 11-6 0 3 3 0 016 0z",
  "M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z",
  "M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
  "M15 10.5a3 3 0 11-6 0 3 3 0 016 0z M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z",
  "M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z",
  "M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
]; 