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
        url: 'https://drone-nord.fr/logo.png',
        width: 800,
        height: 600,
        alt: 'Drone Nord - Services professionnels de drone',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services de Captation Aérienne par Drone | Drone Nord',
    description: 'Drone Nord propose des services de captation vidéo et photo par drone dans le Nord et Pas-de-Calais. Vidéo immobilière, mariage, événements, inspection et plus.',
  },
  alternates: {
    canonical: 'https://drone-nord.fr/services',
  },
}

export default function ServicesPage() {
  return (
    <>
      <DefaultHeader />
      
      <main className="pt-[70px] bg-white">
        {/* Hero Section - Style moderne */}
        <div className="bg-gradient-to-b from-[var(--polynesian-blue)]/5 to-white relative overflow-hidden">
          <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
            <div className="text-center">
              <h1 className="text-3xl md:text-5xl font-bold text-[var(--polynesian-blue)] mb-6">
                Nos services de captation par drone
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-[var(--polynesian-blue)] to-[var(--pumpkin)] mx-auto mb-8 rounded-full"></div>
              <p className="text-[var(--bice-blue)] max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                Des solutions aériennes sur mesure pour tous vos projets visuels dans le Nord et le Pas-de-Calais
              </p>
            </div>
          </div>
          
          {/* Éléments de design subtils */}
          <div className="absolute top-0 right-0 w-full h-full">
            <div className="absolute top-0 right-0 w-full h-full" 
                 style={{ background: 'radial-gradient(circle, rgba(var(--rgb-bice-blue, 58, 110, 165), 0.05) 0%, transparent 70%)'}}>
            </div>
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-10 bg-[var(--pumpkin)]"></div>
            <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-white to-transparent"></div>
          </div>
        </div>
        
        {/* Image de séparation */}
        <div className="relative h-48 md:h-64 lg:h-80 overflow-hidden">
          <div className="absolute inset-0 w-full h-full bg-[var(--polynesian-blue)]">
            <Image 
              src="/maison1.webp"
              alt="Captation aérienne par drone dans le Nord-Pas-de-Calais"
              fill
              className="object-cover opacity-20"
              priority
            />
          </div>
          <div className="container mx-auto px-4 h-full flex items-center justify-center relative z-10">
            <div className="text-center">
              <p className="text-white text-xl md:text-2xl font-semibold max-w-2xl mx-auto">
                Des prises de vues aériennes professionnelles pour tous vos projets
              </p>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent opacity-30"></div>
        </div>
        
        {/* Services Grid - Style moderne */}
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--polynesian-blue)] mb-4">
              Nos prestations par drone
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--polynesian-blue)] to-[var(--pumpkin)] mx-auto mb-6 rounded-full"></div>
            <p className="text-[var(--bice-blue)] max-w-3xl mx-auto">
              Sélectionnez le service qui correspond à votre projet
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service) => (
              <Link 
                href={`/${service.slug}`} 
                key={service.slug}
                className="bg-white rounded-xl shadow-md border border-[var(--silver)]/10 hover:shadow-lg transition-all duration-300 overflow-hidden group h-full transform hover:-translate-y-1"
              >
                <div className="p-6 md:p-8 flex flex-col h-full relative">
                  {/* Top accent bar */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--polynesian-blue)] to-[var(--pumpkin)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  
                  <h2 className="text-xl font-bold text-[var(--polynesian-blue)] mb-3 group-hover:text-[var(--pumpkin)] transition-colors">
                    {service.service}
                  </h2>
                  <p className="text-[var(--bice-blue)] mb-6 flex-grow">
                    {service.description}
                  </p>
                  <div className="text-[var(--pumpkin)] font-medium flex items-center mt-auto">
                    En savoir plus
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* Call to Action - Style moderne */}
        <div className="bg-[var(--antiflash-white)] py-16 md:py-24">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--polynesian-blue)] mb-4">
              Vous ne trouvez pas ce que vous cherchez ?
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[var(--polynesian-blue)] to-[var(--pumpkin)] mx-auto mb-8 rounded-full"></div>
            <p className="text-[var(--bice-blue)] max-w-2xl mx-auto mb-10 text-lg">
              Nos services peuvent être adaptés à vos besoins spécifiques. N'hésitez pas à nous contacter pour discuter de votre projet et obtenir un devis sur mesure.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/contact" 
                className="bg-gradient-to-r from-[var(--polynesian-blue)] to-[var(--bice-blue)] text-white font-medium py-3 px-8 rounded-full transition-all hover:shadow-lg hover:shadow-[var(--polynesian-blue)]/25 hover:translate-y-[-2px] inline-flex items-center"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Demander un devis gratuit
              </Link>
              <a 
                href="tel:+33745593516" 
                className="bg-[var(--antiflash-white)] border border-[var(--silver)]/20 text-[var(--polynesian-blue)] hover:bg-[var(--pumpkin)]/5 font-medium py-3 px-8 rounded-full transition-all inline-flex items-center hover:shadow-md hover:translate-y-[-2px]"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[var(--pumpkin)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                07 45 59 35 16
              </a>
            </div>
          </div>
        </div>
        
        {/* Schema.org Structured Data */}
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
                "logo": "https://drone-nord.fr/logo.png"
              }
            })
          }}
        />
      </main>
      
      <Footer />
    </>
  );
} 