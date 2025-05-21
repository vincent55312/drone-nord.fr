import DefaultHeader from "@/components/layout/DefaultHeader";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import { notFound } from "next/navigation";
import services from "@/data/services.json";

// Générer tous les chemins statiques à l'avance
export async function generateStaticParams() {
  return services.map((service) => ({
    slug: service.slug,
  }));
}

// Génération dynamique des métadonnées pour le SEO
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  
  const service = services.find((service) => service.slug === slug);
  
  if (!service) {
    return {
      title: 'Service non trouvé | Drone Nord',
      description: 'Ce service n\'existe pas.',
    };
  }
  
  return {
    title: `${service.service} - Captation par drone | Drone Nord`,
    description: service.description,
  };
}

export default async function ServicePage({ params }: { params: { slug: string } }) {
  const slug = params.slug;
  
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
      
      <main className="pt-20 pb-16 bg-white">
        {/* Hero Section - Design moderne et clair */}
        <div className="bg-gray-50 relative overflow-hidden">
          <div className="container mx-auto px-4 py-20 relative z-10">
            <div className="flex flex-col items-center">
              <Link 
                href="/services" 
                className="text-gray-500 mb-6 flex items-center hover:text-[var(--polynesian-blue)] transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Tous les services
              </Link>
              <h1 className="text-3xl md:text-5xl font-bold text-gray-900 text-center mb-6">
                {service.service}
              </h1>
              <div className="w-20 h-1 bg-[var(--pumpkin)] mb-6"></div>
              <p className="text-gray-700 text-center max-w-3xl mx-auto text-lg">
                {service.description}
              </p>
            </div>
          </div>
          
          {/* Éléments de design subtils */}
          <div className="absolute top-0 right-0 w-full h-full">
            <div className="absolute top-0 right-0 w-full h-full" 
                 style={{ background: 'radial-gradient(circle, rgba(var(--rgb-bice-blue, 58, 110, 165), 0.03) 0%, transparent 70%)'}}>
            </div>
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-5 bg-[var(--pumpkin)]"></div>
          </div>
        </div>
        
        {/* Service Details - Style moderne avec espacement et ombres subtiles */}
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
                <span className="w-8 h-8 rounded-full bg-[var(--polynesian-blue)]/10 flex items-center justify-center mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[var(--polynesian-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                À propos de ce service
              </h2>
              
              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-8 text-lg leading-relaxed">
                  {service.detailedDescription}
                </p>
                
                <h3 className="text-xl font-bold text-gray-900 mt-10 mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-[var(--polynesian-blue)]/10 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[var(--polynesian-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </span>
                  Pourquoi choisir Drone Nord pour votre {formatTitle(slug)} ?
                </h3>
                
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                    <svg className="h-6 w-6 text-[var(--pumpkin)] mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-800">Équipement professionnel de haute qualité pour des images impeccables</span>
                  </li>
                  <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                    <svg className="h-6 w-6 text-[var(--pumpkin)] mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-800">Service personnalisé et adapté à vos besoins spécifiques</span>
                  </li>
                  <li className="flex items-start bg-gray-50 p-4 rounded-lg">
                    <svg className="h-6 w-6 text-[var(--pumpkin)] mr-3 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-800">Expertise locale dans le Nord-Pas-de-Calais</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-12 pt-8 border-t border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-[var(--polynesian-blue)]/10 flex items-center justify-center mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-[var(--polynesian-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </span>
                  Intéressé(e) par ce service ?
                </h3>
                <p className="text-gray-700 mb-8">
                  Contactez-nous dès aujourd'hui pour discuter de votre projet et obtenir un devis personnalisé sans engagement.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link 
                    href="/contact" 
                    className="bg-[var(--pumpkin)] hover:bg-[var(--pumpkin)]/90 text-white font-medium py-3 px-6 rounded-lg transition-colors inline-flex items-center shadow-sm hover:shadow-md"
                  >
                    Demander un devis gratuit
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                  <a 
                    href="tel:+33745593516" 
                    className="bg-white border border-gray-200 text-gray-800 hover:bg-gray-50 font-medium py-3 px-6 rounded-lg transition-colors inline-flex items-center shadow-sm"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-[var(--polynesian-blue)]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    07 45 59 35 16
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Related Services - Style moderne */}
        <div className="bg-gray-50 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Services associés
              </h2>
              <div className="w-16 h-1 bg-[var(--pumpkin)] mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedServices.map((relatedService) => (
                <Link 
                  href={`/services/${relatedService.slug}`} 
                  key={relatedService.slug}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 overflow-hidden group h-full"
                >
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[var(--pumpkin)] transition-colors">
                      {relatedService.service}
                    </h3>
                    <p className="text-gray-700 mb-6 flex-grow">
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
            
            <div className="text-center mt-12">
              <Link 
                href="/services" 
                className="inline-flex items-center font-medium text-[var(--polynesian-blue)] hover:text-[var(--pumpkin)] transition-colors border border-gray-200 px-6 py-3 rounded-lg bg-white hover:bg-gray-50 shadow-sm"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
                Voir tous nos services
              </Link>
            </div>
          </div>
        </div>
        
        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": service.service,
              "description": service.description,
              "provider": {
                "@type": "Organization",
                "name": "Drone Nord",
                "telephone": "+33745593516",
                "email": "contact@drone-nord.fr"
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
              }
            })
          }}
        />
      </main>
      
      <Footer />
    </>
  );
} 