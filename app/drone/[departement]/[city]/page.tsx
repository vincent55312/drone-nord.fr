import { notFound } from "next/navigation";
import DefaultHeader from "@/components/layout/DefaultHeader";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { promises as fs } from 'fs';
import path from 'path';
import MapWrapper from "@/components/MapWrapper";

// Liste des départements acceptés
const allowedDepartments = [
  { code: "59", name: "Nord", slug: "nord" },
  { code: "62", name: "Pas-de-Calais", slug: "pas-de-calais" },
  { code: "80", name: "Somme", slug: "somme" },
  { code: "76", name: "Seine-Maritime", slug: "seine-maritime" }
];

// Type pour le format des villes dans french-cities.json
type CityData = {
  name: string;
  slug: string;
  postal_code: string;
  insee_code: string;
  coordinates: {
    lat: number;
    lon: number;
  }
  population?: number;
};

// Génération des paramètres statiques pour toutes les villes
export async function generateStaticParams() {
  const cityParams = [];
  
  try {
    const filePath = path.join(process.cwd(), 'public', 'french-cities.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const citiesData = JSON.parse(fileContents);
    
    for (const dept of allowedDepartments) {
      // Vérifier si le département existe dans les données
      if (citiesData[dept.code] && citiesData[dept.code].cities) {
        const departmentCities = citiesData[dept.code].cities;
        
        // Créer un paramètre pour chaque ville
        for (const city of departmentCities) {
          cityParams.push({
            departement: dept.slug,
            city: city.slug
          });
        }
      }
    }
  } catch (error) {
    console.error('Error generating city static params:', error);
  }
  
  return cityParams;
}

// Génération dynamique des métadonnées pour le SEO
export async function generateMetadata({ 
  params 
}: { 
  params: { departement: string; city: string } 
}) {
  // S'assurer que params est complètement résolu
  params = await params;
  
  // Accéder aux paramètres de manière sûre
  const departement = params.departement;
  const citySlug = params.city;
  
  // Vérifier si le département est valide
  const department = allowedDepartments.find(dept => dept.slug === departement);
  if (!department) {
    return {
      title: 'Ville non trouvée | Drone Nord',
      description: 'Cette ville n\'existe pas ou n\'est pas couverte par nos services.',
    };
  }
  
  // Lire et traiter le fichier JSON pour obtenir les données de la ville
  try {
    const filePath = path.join(process.cwd(), 'public', 'french-cities.json');
    const fileContents = await fs.readFile(filePath, 'utf8');
    const citiesData = JSON.parse(fileContents);
    
    // Récupérer les villes du département
    const departmentData = citiesData[department.code];
    if (!departmentData || !departmentData.cities) {
      return {
        title: 'Ville non trouvée | Drone Nord',
        description: 'Cette ville n\'existe pas ou n\'est pas couverte par nos services.',
      };
    }
    
    // Trouver la ville spécifique
    const city = departmentData.cities.find((c: CityData) => c.slug === citySlug);
    if (!city) {
      return {
        title: 'Ville non trouvée | Drone Nord',
        description: 'Cette ville n\'existe pas ou n\'est pas couverte par nos services.',
      };
    }
    
    return {
      title: `Services de drone à ${city.name} (${department.name}) | Drone Nord`,
      description: `Captation vidéo et photo aérienne par drone professionnel à ${city.name}. Prestations pour particuliers et professionnels dans le ${department.name}.`,
      openGraph: {
        title: `Services de drone à ${city.name} (${department.name}) | Drone Nord`,
        description: `Captation vidéo et photo aérienne par drone professionnel à ${city.name}. Prestations pour particuliers et professionnels dans le ${department.name}.`,
        url: `https://drone-nord.fr/drone/${department.slug}/${city.slug}`,
        siteName: 'Drone Nord - Services de captation par drone dans le Nord',
        locale: 'fr_FR',
        type: 'website',
        images: [
          {
            url: `https://drone-nord.fr/panorama1.webp`,
            width: 1200,
            height: 630,
            alt: `Drone Nord - Services de captation aérienne à ${city.name}`,
          }
        ],
      },
    };
  } catch (error) {
    console.error('Error reading french-cities.json:', error);
    return {
      title: 'Ville non trouvée | Drone Nord',
      description: 'Cette ville n\'existe pas ou n\'est pas couverte par nos services.',
    };
  }
}

export default async function CityPage({ 
  params 
}: { 
  params: { departement: string; city: string } 
}) {
  // S'assurer que params est complètement résolu
  params = await params;
  
  // Accéder aux paramètres de manière sûre
  const departement = params.departement;
  const citySlug = params.city;
  
  // Vérifier si le département est valide
  const department = allowedDepartments.find(dept => dept.slug === departement);
  if (!department) {
    notFound();
  }
  
  // Lire et traiter le fichier JSON
  const filePath = path.join(process.cwd(), 'public', 'french-cities.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  const citiesData = JSON.parse(fileContents);
  
  // Récupérer les villes du département
  const departmentData = citiesData[department.code];
  if (!departmentData || !departmentData.cities) {
    notFound();
  }
  
  // Trouver la ville spécifique
  const city = departmentData.cities.find((c: CityData) => c.slug === citySlug);
  if (!city) {
    notFound();
  }
  
  // Récupérer les villes voisines (5 premières par ordre alphabétique)
  const neighborCities = [...departmentData.cities]
    .filter((c: CityData) => c.slug !== citySlug)
    .sort((a, b) => a.name.localeCompare(b.name, 'fr-FR'))
    .slice(0, 5);
  
  return (
    <>
      <DefaultHeader />
      
      <main className="min-h-screen">
        {/* Hero Section avec panorama en background */}
        <div className="relative min-h-[40vh] flex items-center justify-center w-full">
          {/* Background panorama */}
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--polynesian-blue)]/95 via-[var(--polynesian-blue)]/75 to-[var(--polynesian-blue)]/30 z-10"></div>
            <Image 
              src="/panorama1.webp"
              alt={`Services de drone professionnel à ${city.name}`}
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          <div className="container mx-auto px-6 pt-28 pb-16 relative z-20">
            <div className="flex flex-col items-center text-center">
              <Link 
                href={`/drone/${department.slug}`} 
                className="text-white/90 mb-6 flex items-center hover:text-[var(--pumpkin)] transition-colors group"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                <span>Retour au département {department.name}</span>
              </Link>
              
              <h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              >
                Services de drone à {city.name}
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-white to-[var(--pumpkin)] mb-6 rounded-full"></div>
              
              <p 
                className="text-white/90 text-center max-w-3xl mx-auto text-lg leading-relaxed"
              >
                Découvrez nos prestations de captation aérienne par drone professionnel 
                à {city.name}, dans le département du {department.name} ({department.code}).
                Photos et vidéos 4K Ultra HD pour particuliers et professionnels.
              </p>
            </div>
          </div>
          
          {/* Wave separator */}
          <div className="absolute bottom-0 left-0 w-full overflow-hidden">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full text-white">
              <path fill="currentColor" fillOpacity="1" d="M0,224L48,202.7C96,181,192,139,288,138.7C384,139,480,181,576,181.3C672,181,768,139,864,122.7C960,107,1056,117,1152,138.7C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            </svg>
          </div>
        </div>
        
        {/* Carte et informations sur la ville */}
        <div className="bg-white py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--polynesian-blue)] mb-4">
                Prestations drone à {city.name}
              </h2>
              <p className="text-[var(--polynesian-blue)]/80 max-w-3xl mx-auto">
                Localisez notre zone d'intervention à {city.name} et découvrez nos services de captation aérienne par drone professionnel.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
              {/* Carte Leaflet */}
              <div>
                <MapWrapper 
                  city={{
                    name: city.name,
                    coordinates: {
                      lat: city.coordinates.lat,
                      lon: city.coordinates.lon
                    }
                  }} 
                  department={{
                    name: department.name, 
                    code: department.code
                  }} 
                />
                <div className="mt-4 bg-white p-4 rounded-lg border border-[var(--silver)]/30 shadow-sm">
                  <h3 className="text-lg font-semibold text-[var(--polynesian-blue)] mb-2">Informations sur {city.name}</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-[var(--pumpkin)]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      <span className="text-[var(--polynesian-blue)]">
                        <strong>Département :</strong> {department.name} ({department.code})
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-[var(--pumpkin)]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                      <span className="text-[var(--polynesian-blue)]">
                        <strong>Code postal :</strong> {city.postal_code}
                      </span>
                    </li>
                    <li className="flex items-center">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-[var(--pumpkin)]">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.115 5.19l.319 1.913A6 6 0 008.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 002.288-4.042 1.087 1.087 0 00-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 01-.98-.314l-.295-.295a1.125 1.125 0 010-1.591l.13-.132a1.125 1.125 0 011.3-.21l.603.302a.809.809 0 001.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 001.528-1.732l.146-.292M6.115 5.19A9 9 0 1017.18 4.64M6.115 5.19A8.965 8.965 0 0112 3c1.929 0 3.716.607 5.18 1.64" />
                      </svg>
                      <span className="text-[var(--polynesian-blue)]">
                        <strong>Coordonnées :</strong> {city.coordinates.lat.toFixed(4)}, {city.coordinates.lon.toFixed(4)}
                      </span>
                    </li>
                    {city.population && (
                      <li className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-[var(--pumpkin)]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                        </svg>
                        <span className="text-[var(--polynesian-blue)]">
                          <strong>Population :</strong> {city.population.toLocaleString('fr-FR')} habitants
                        </span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
              
              {/* Section des services */}
              <div className="bg-white rounded-xl shadow-md border border-[var(--silver)]/20 p-6">
                <h3 className="text-xl font-bold text-[var(--polynesian-blue)] mb-4 pb-2 border-b border-[var(--silver)]/30">
                  Nos services à {city.name}
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-[var(--pumpkin)]/10 flex items-center justify-center text-[var(--pumpkin)]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-[var(--polynesian-blue)]">Photographie immobilière</h4>
                      <p className="text-[var(--polynesian-blue)]/80 mt-1">
                        Captation aérienne par drone de biens immobiliers à {city.name} pour agences 
                        et particuliers. Mettez en valeur les propriétés avec des vues uniques.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-[var(--pumpkin)]/10 flex items-center justify-center text-[var(--pumpkin)]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-[var(--polynesian-blue)]">Événements et mariages</h4>
                      <p className="text-[var(--polynesian-blue)]/80 mt-1">
                        Immortalisez vos cérémonies, réceptions et fêtes à {city.name} avec des vues aériennes 
                        spectaculaires qui ajoutent une dimension unique à vos souvenirs.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="mt-1 flex-shrink-0 w-10 h-10 rounded-full bg-[var(--pumpkin)]/10 flex items-center justify-center text-[var(--pumpkin)]">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
                      </svg>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-semibold text-[var(--polynesian-blue)]">Entreprises et industries</h4>
                      <p className="text-[var(--polynesian-blue)]/80 mt-1">
                        Suivi de chantier, inspection d'infrastructures et communication d'entreprise à {city.name}. 
                        Supports visuels professionnels pour valoriser votre activité.
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-[var(--silver)]/20">
                  <Link
                    href="/contact"
                    className="w-full bg-[var(--pumpkin)] text-white py-3 px-4 rounded-lg hover:shadow-lg hover:shadow-[var(--pumpkin)]/25 transition-all duration-300 font-semibold flex items-center justify-center"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                    Demander un devis gratuit
                  </Link>
                </div>
              </div>
            </div>
            
            {/* Villes voisines */}
            {neighborCities.length > 0 && (
              <div className="mt-12 bg-white rounded-xl shadow-md border border-[var(--silver)]/20 p-6">
                <h3 className="text-xl font-bold text-[var(--polynesian-blue)] mb-4 pb-2 border-b border-[var(--silver)]/30">
                  Autres villes desservies près de {city.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {neighborCities.map((neighborCity) => (
                    <Link
                      key={neighborCity.slug}
                      href={`/drone/${department.slug}/${neighborCity.slug}`}
                      className="inline-flex items-center bg-[var(--polynesian-blue)]/5 hover:bg-[var(--polynesian-blue)]/10 px-3 py-1.5 rounded-full text-[var(--polynesian-blue)] text-sm transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3.5 h-3.5 mr-1.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                      {neighborCity.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Drone Nord",
              "description": `Services de captation aérienne par drone professionnel à ${city.name} (${department.name})`,
              "url": `https://drone-nord.fr/drone/${department.slug}/${city.slug}`,
              "logo": "https://drone-nord.fr/logo.png",
              "telephone": "+33745593516",
              "email": "contact@drone-nord.fr",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": city.name,
                "postalCode": city.postal_code,
                "addressRegion": department.name,
                "addressCountry": "FR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": city.coordinates.lat,
                "longitude": city.coordinates.lon
              },
              "areaServed": {
                "@type": "City",
                "name": city.name,
                "sameAs": `https://fr.wikipedia.org/wiki/${encodeURIComponent(city.name)}`
              },
              "sameAs": [
                "https://www.facebook.com/dronenord",
                "https://www.instagram.com/drone_nord"
              ]
            })
          }}
        />
      </main>
      
      <Footer />
    </>
  );
} 