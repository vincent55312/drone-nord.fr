import DefaultHeader from "@/components/layout/DefaultHeader";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import services from "@/data/services.json";
import { motion } from "framer-motion";

// Générer tous les chemins statiques à l'avance
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Génération dynamique des métadonnées pour le SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  // Ces paramètres doivent être attendus avant d'être utilisés selon la documentation Next.js
  const paramValues = await Promise.resolve(params);
  const slug = paramValues.slug;
  
  const service = services.find((service) => service.slug === slug);
  
  if (!service) {
    return {
      title: 'Service non trouvé | Drone Nord',
      description: 'Ce service n&apos;existe pas.',
    };
  }
  
  return {
    title: `${service.service} - Service Professionnel de Drone | Drone Nord`,
    description: `${service.description} Service de drone professionnel dans le Nord-Pas-de-Calais. Devis gratuit et sans engagement.`,
    openGraph: {
      title: `${service.service} - Captation aérienne professionnelle | Drone Nord`,
      description: service.description,
      url: `https://drone-nord.fr/${slug}`,
      siteName: 'Drone Nord - Services de captation par drone dans le Nord',
      locale: 'fr_FR',
      type: 'website',
      images: [
        {
          url: `https://drone-nord.fr/panorama1.webp`,
          width: 1200,
          height: 630,
          alt: `Drone Nord - Service de ${service.service}`,
        }
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.service} - Captation aérienne professionnelle | Drone Nord`,
      description: service.description,
      images: [`https://drone-nord.fr/panorama1.webp`],
    },
    alternates: {
      canonical: `https://drone-nord.fr/${slug}`,
    },
  };
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  // Ces paramètres doivent être attendus avant d'être utilisés selon la documentation Next.js
  const paramValues = await Promise.resolve(params);
  const slug = paramValues.slug;
  
  const service = services.find((service) => service.slug === slug);
  
  // Si le service n'existe pas, rediriger vers 404
  if (!service) {
    notFound();
  }
  
  // Transformer le slug en titre formaté
  const formatTitle = (slug: string) => {
    return slug
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };
  
  // Détermination des services connexes (3 maximum)
  const relatedServices = services
    .filter(s => s.slug !== service.slug)
    .sort(() => Math.random() - 0.5)
    .slice(0, 3);
  
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
              alt={`Vue aérienne ${service.service} par drone`}
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          <div className="container mx-auto px-6 pt-28 pb-20 relative z-20">
            <div className="flex flex-col items-center text-center">
              <Link 
                href="/services" 
                className="text-white/90 mb-6 flex items-center hover:text-[var(--pumpkin)] transition-colors group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Tous les services</span>
              </Link>
              
              <h1 
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              >
                {service.service}
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-white to-[var(--pumpkin)] mb-8 rounded-full"></div>
              
              <p 
                className="text-white/90 text-center max-w-3xl mx-auto text-lg md:text-xl leading-relaxed"
              >
                {service.description}
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
          </div>
          
          {/* Wave separator */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full text-white">
              <path fill="currentColor" fillOpacity="1" d="M0,224L48,202.7C96,181,192,139,288,138.7C384,139,480,181,576,181.3C672,181,768,139,864,122.7C960,107,1056,117,1152,138.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>
        
        {/* Service Details - Style moderne avec backdrop panorama */}
        <div className="relative bg-white py-16 md:py-24">
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
            <div className="max-w-4xl mx-auto">
              <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-xl border border-[var(--silver)]/10 p-8 md:p-10 relative overflow-hidden">
                {/* Accent design element */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--polynesian-blue)] to-[var(--pumpkin)]"></div>
                
                <div className="relative">
                  <Image
                    src="/avata2.png"
                    alt="Drone silhouette"
                    width={120}
                    height={120}
                    className="absolute top-0 right-0 opacity-5 -rotate-12"
                  />
                </div>
                
                <h2 className="text-2xl md:text-3xl font-bold text-[var(--polynesian-blue)] mb-8 flex items-center">
                  <span className="w-10 h-10 rounded-full bg-[var(--polynesian-blue)]/10 flex items-center justify-center mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[var(--pumpkin)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  À propos de ce service
                </h2>
                
                <div className="prose prose-lg max-w-none text-[var(--bice-blue)]">
                  <p className="mb-8 text-lg md:text-xl leading-relaxed">
                    {service.detailedDescription}
                  </p>
                  
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--polynesian-blue)] mt-12 mb-8 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-[var(--polynesian-blue)]/10 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[var(--pumpkin)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    Pourquoi choisir Drone Nord pour votre {formatTitle(slug)} ?
                  </h3>
                  
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start bg-white/70 backdrop-blur-sm p-5 rounded-lg shadow-sm border-l-4 border-[var(--pumpkin)] transition-all hover:shadow-md">
                      <svg className="h-6 w-6 text-[var(--pumpkin)] mr-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[var(--polynesian-blue)]">Pilote de drone professionnel certifié par la DGAC</span>
                    </li>
                    <li className="flex items-start bg-white/70 backdrop-blur-sm p-5 rounded-lg shadow-sm border-l-4 border-[var(--pumpkin)] transition-all hover:shadow-md">
                      <svg className="h-6 w-6 text-[var(--pumpkin)] mr-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[var(--polynesian-blue)]">Équipement professionnel 4K pour des images d'une qualité exceptionnelle</span>
                    </li>
                    <li className="flex items-start bg-white/70 backdrop-blur-sm p-5 rounded-lg shadow-sm border-l-4 border-[var(--pumpkin)] transition-all hover:shadow-md">
                      <svg className="h-6 w-6 text-[var(--pumpkin)] mr-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[var(--polynesian-blue)]">Service personnalisé et adapté à vos besoins spécifiques</span>
                    </li>
                    <li className="flex items-start bg-white/70 backdrop-blur-sm p-5 rounded-lg shadow-sm border-l-4 border-[var(--pumpkin)] transition-all hover:shadow-md">
                      <svg className="h-6 w-6 text-[var(--pumpkin)] mr-4 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-[var(--polynesian-blue)]">Expertise locale dans le Nord (59) et le Pas-de-Calais (62)</span>
                    </li>
                  </ul>
                </div>
                
                <div className="mt-16 pt-8 border-t border-[var(--silver)]/20">
                  <h3 className="text-xl md:text-2xl font-bold text-[var(--polynesian-blue)] mb-6 flex items-center">
                    <span className="w-8 h-8 rounded-full bg-[var(--pumpkin)]/10 flex items-center justify-center mr-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[var(--pumpkin)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </span>
                    Intéressé(e) par ce service ?
                  </h3>
                  <p className="text-[var(--bice-blue)] mb-8 text-lg">
                    Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé sans engagement.
                  </p>
                  <div className="flex flex-wrap gap-4">
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
            </div>
          </div>
        </div>
        
        {/* Related Services avec fond panorama */}
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
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center mb-12 md:mb-16">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Services associés
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-white to-[var(--pumpkin)] mx-auto rounded-full mb-6"></div>
              <p className="text-white/90 max-w-2xl mx-auto">
                Découvrez d'autres prestations qui pourraient vous intéresser
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
              {relatedServices.map((relatedService) => (
                <Link 
                  href={`/${relatedService.slug}`} 
                  key={relatedService.slug}
                  className="bg-white/10 backdrop-blur-md rounded-xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full transform hover:-translate-y-1 border border-white/20"
                >
                  <div className="p-6 md:p-8 flex flex-col h-full relative">
                    {/* Top accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-[var(--pumpkin)] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--pumpkin)] transition-colors">
                      {relatedService.service}
                    </h3>
                    <p className="text-white/80 mb-6 flex-grow">
                      {relatedService.description}
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
            
            <div className="text-center mt-12 md:mt-16">
              <Link 
                href="/services" 
                className="inline-flex items-center font-medium text-white hover:text-[var(--pumpkin)] transition-colors border border-white/30 px-8 py-3 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 shadow-sm hover:shadow-lg hover:translate-y-[-2px] transform transition-all"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                Voir tous nos services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Ajout de FAQ structurée pour le SEO */}
        <div className="hidden">
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": `Comment fonctionne le service de ${service.service} ?`,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": service.detailedDescription
                    }
                  },
                  {
                    "@type": "Question",
                    "name": `Pourquoi choisir Drone Nord pour votre ${formatTitle(slug)} ?`,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Pilote certifié DGAC, équipement professionnel 4K UHD, service personnalisé et expertise locale dans le Nord (59) et le Pas-de-Calais (62)."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": `Quelle est la zone d'intervention pour les services de ${service.service} ?`,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Nous intervenons dans tout le Nord (59) et le Pas-de-Calais (62), notamment à Lille, Dunkerque, Valenciennes et leurs environs."
                    }
                  },
                  {
                    "@type": "Question",
                    "name": `Comment obtenir un devis pour une prestation de ${service.service} ?`,
                    "acceptedAnswer": {
                      "@type": "Answer",
                      "text": "Vous pouvez nous contacter directement au 07 45 59 35 16 ou via notre formulaire de contact en ligne pour obtenir un devis gratuit et sans engagement."
                    }
                  }
                ]
              })
            }}
          />
        </div>
        
        {/* Schema.org Structured Data enrichi */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": service.service,
              "description": service.description,
              "url": `https://drone-nord.fr/${slug}`,
              "provider": {
                "@type": "Organization",
                "name": "Drone Nord",
                "telephone": "+33745593516",
                "email": "contact@drone-nord.fr",
                "url": "https://drone-nord.fr",
                "logo": "https://drone-nord.fr/logo.png",
                "sameAs": [
                  "https://www.facebook.com/dronenord",
                  "https://www.instagram.com/drone_nord"
                ]
              },
              "areaServed": {
                "@type": "GeoCircle",
                "name": "Nord-Pas-de-Calais, France",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": 50.6292,
                  "longitude": 3.0573
                },
                "geoRadius": "100000"
              },
              "serviceType": service.service,
              "offers": {
                "@type": "Offer",
                "priceCurrency": "EUR",
                "availability": "https://schema.org/InStock",
                "priceSpecification": {
                  "@type": "PriceSpecification",
                  "description": "Devis sur mesure en fonction du projet"
                }
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Services de drone professionnel",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": service.service
                    }
                  }
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