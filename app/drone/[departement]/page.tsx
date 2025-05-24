import DefaultHeader from "@/components/layout/DefaultHeader";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";
import { promises as fs } from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';

// Définition des départements supportés avec leurs codes, noms et slugs
const SUPPORTED_DEPARTMENTS = [
  { code: "59", name: "Nord", slug: "nord" },
  { code: "62", name: "Pas-de-Calais", slug: "pas-de-calais" },
  { code: "80", name: "Somme", slug: "somme" },
  { code: "76", name: "Seine-Maritime", slug: "seine-maritime" }
];

// Type pour les villes
type City = {
  id: string;
  nom: string;
  code: string;
  codeDepartement: string;
  siren: string;
  codeEpci: string;
  codeRegion: string;
  codesPostaux: string[];
  population: number;
  surface: number;
  contour: {
    type: string;
    coordinates: number[][][];
  }
  centre: {
    type: string;
    coordinates: number[];
  }
};

// Type pour le format de french-cities.json
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

// Récupération des villes pour un département donné
async function getCitiesForDepartment(departmentCode: string): Promise<CityData[]> {
  const filePath = path.join(process.cwd(), 'public', 'french-cities.json');
  
  try {
    const fileContent = await fs.readFile(filePath, 'utf8');
    const citiesData = JSON.parse(fileContent);
    
    // Vérifier si le département existe dans les données
    if (!citiesData[departmentCode] || !citiesData[departmentCode].cities) {
      console.error(`Department ${departmentCode} not found in the data or has no cities`);
      return [];
    }
    
    // Retourner les villes du département
    return citiesData[departmentCode].cities;
  } catch (error) {
    console.error('Error reading french-cities.json:', error);
    return [];
  }
}

// Fonction pour convertir un nom de ville en slug
function cityNameToSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Supprimer les accents
    .replace(/[^a-z0-9]+/g, '-') // Remplacer les caractères non alphanumériques par des tirets
    .replace(/^-+|-+$/g, ''); // Supprimer les tirets en début et fin
}

// Fonction pour générer les métadonnées dynamiques basées sur le département
export async function generateMetadata({ params }: { params: { departement: string } }) {
  // S'assurer que params est complètement résolu
  params = await params;
  
  const departmentSlug = params.departement;
  const department = SUPPORTED_DEPARTMENTS.find(d => d.slug === departmentSlug);
  
  if (!department) {
    return {
      title: 'Département non trouvé | Drone Nord',
      description: 'Ce département n\'est pas couvert par nos services de captation aérienne par drone.'
    };
  }
  
  return {
    title: `Services de drone dans le ${department.name} (${department.code}) | Drone Nord`,
    description: `Prestations de captation aérienne par drone professionnel dans le département du ${department.name}. Photos et vidéos 4K Ultra HD pour particuliers et professionnels.`,
    openGraph: {
      title: `Services de drone dans le ${department.name} (${department.code}) | Drone Nord`,
      description: `Prestations de captation aérienne par drone professionnel dans le département du ${department.name}. Photos et vidéos 4K Ultra HD pour particuliers et professionnels.`,
      url: `https://drone-nord.fr/drone/${department.slug}`,
      siteName: 'Drone Nord - Services de captation par drone dans le Nord',
      locale: 'fr_FR',
      type: 'website',
      images: [
        {
          url: 'https://drone-nord.fr/panorama1.webp',
          width: 1200,
          height: 630,
          alt: `Drone Nord - Services de captation aérienne dans le ${department.name}`,
        }
      ],
    },
  };
}

// Génération des paramètres statiques pour les routes
export async function generateStaticParams() {
  return SUPPORTED_DEPARTMENTS.map((dept) => ({
    departement: dept.slug,
  }));
}

// Composant principal
export default async function DepartmentPage({ params }: { params: { departement: string } }) {
  // S'assurer que params est complètement résolu
  params = await params;
  
  const departmentSlug = params.departement;
  const department = SUPPORTED_DEPARTMENTS.find(d => d.slug === departmentSlug);
  
  // Si le département n'est pas supporté, rediriger vers la page des départements
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
  
  // Trier les villes par ordre alphabétique
  const sortedCities = [...departmentData.cities].sort((a, b) => 
    a.name.localeCompare(b.name, 'fr-FR')
  );
  
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
              alt={`Services de drone professionnel dans le ${department.name}`}
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          <div className="container mx-auto px-6 pt-28 pb-16 relative z-20">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center mb-6">
                <Link 
                  href="/drone" 
                  className="text-white/90 flex items-center hover:text-[var(--pumpkin)] transition-colors group"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 transform group-hover:-translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  <span>Départements</span>
                </Link>
                <span className="mx-2 text-white/60">/</span>
                <span className="text-white font-medium">{department.name}</span>
              </div>
              
              <h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              >
                Services de drone dans le {department.name} ({department.code})
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-white to-[var(--pumpkin)] mb-6 rounded-full"></div>
              
              <p 
                className="text-white/90 text-center max-w-3xl mx-auto text-lg leading-relaxed"
              >
                Découvrez nos prestations de captation aérienne par drone professionnel 
                dans le département du {department.name}.
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
        
        {/* Liste des villes */}
        <div className="bg-white py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-[var(--polynesian-blue)] mb-4">
                Villes du {department.name} ({department.code})
              </h2>
              <p className="text-[var(--polynesian-blue)]/80 max-w-3xl mx-auto">
                Sélectionnez votre ville pour découvrir nos services de captation aérienne par drone professionnel disponibles dans votre localité.
              </p>
              <p className="text-[var(--pumpkin)] max-w-3xl mx-auto mt-2 text-sm font-medium">
                {sortedCities.length} villes desservies dans le département
              </p>
            </div>
            
            {/* Toutes les villes (regroupées par lettres) */}
            <div className="bg-white rounded-xl shadow-md p-6 md:p-8 border border-[var(--silver)]/20">
              <h3 className="text-xl font-bold text-[var(--polynesian-blue)] mb-6 flex items-center">
                <span className="w-8 h-8 rounded-full bg-[var(--polynesian-blue)]/10 flex items-center justify-center mr-3 text-[var(--pumpkin)]">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </span>
                Toutes les villes du {department.name}
              </h3>
              
              {/* Index alphabétique */}
              <div className="flex flex-wrap gap-2 mb-6 border-b border-[var(--silver)]/30 pb-4">
                {Array.from(
                  // Créer un Map où la clé est la première lettre
                  sortedCities.reduce((acc, city) => {
                    const firstLetter = city.name.charAt(0).toUpperCase();
                    if (!acc.has(firstLetter)) {
                      acc.set(firstLetter, true);
                    }
                    return acc;
                  }, new Map<string, boolean>())
                ).sort((a, b) => (a as [string, boolean])[0].localeCompare((b as [string, boolean])[0], 'fr')).map((entry) => {
                  const letter = (entry as [string, boolean])[0];
                  return (
                    <a 
                      key={letter} 
                      href={`#letter-${letter}`}
                      className="w-8 h-8 flex items-center justify-center bg-[var(--polynesian-blue)] text-white font-semibold rounded-full hover:bg-[var(--pumpkin)] transition-colors"
                    >
                      {letter}
                    </a>
                  );
                })}
              </div>
              
              {/* Regroupement des villes par première lettre */}
              {Array.from(
                // Créer un Map où la clé est la première lettre et la valeur est un tableau de villes
                sortedCities.reduce((acc, city) => {
                  const firstLetter = city.name.charAt(0).toUpperCase();
                  if (!acc.has(firstLetter)) {
                    acc.set(firstLetter, []);
                  }
                  acc.get(firstLetter)?.push(city);
                  return acc;
                }, new Map<string, CityData[]>())
              ).sort((a, b) => (a as [string, CityData[]])[0].localeCompare((b as [string, CityData[]])[0], 'fr')).map((entry) => {
                const letter = (entry as [string, CityData[]])[0];
                const cities = (entry as [string, CityData[]])[1];
                return (
                <div id={`letter-${letter}`} key={letter} className="mb-8 last:mb-0 scroll-mt-24">
                  <h4 className="text-lg font-bold text-white mb-4 pb-2 bg-[var(--polynesian-blue)] rounded-lg px-4 py-2 inline-block">
                    {letter}
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {cities.map((city: CityData) => (
                      <Link
                        key={city.slug}
                        href={`/drone/${department.slug}/${city.slug}`}
                        className="py-2 px-3 bg-[var(--antiflash-white)] hover:bg-white rounded-md transition-colors hover:text-[var(--pumpkin)] border border-[var(--silver)]/20 hover:shadow-sm flex items-center text-[var(--polynesian-blue)]"
                      >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2 text-[var(--pumpkin)]">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                        </svg>
                        {city.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )})}
            </div>
            
            <div className="mt-12 flex justify-center">
              <Link
                href="/contact"
                className="bg-gradient-to-r from-[var(--polynesian-blue)] to-[var(--bice-blue)] text-[var(--antiflash-white)] py-3 px-6 sm:px-8 rounded-full hover:shadow-lg hover:shadow-[var(--polynesian-blue)]/25 hover:translate-y-[-2px] transition-all duration-300 font-semibold flex items-center"
                aria-label="Demander un devis pour une prestation de captation par drone"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Demander un devis gratuit
              </Link>
            </div>
          </div>
        </div>
        
        {/* Section d'information */}
        <div className="relative py-12 md:py-16 bg-[var(--antiflash-white)]">
          <div className="container mx-auto px-4 sm:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-xl shadow-lg border border-[var(--silver)]/10 p-6 md:p-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[var(--polynesian-blue)] to-[var(--pumpkin)]"></div>
                
                <h2 className="text-2xl font-bold text-[var(--polynesian-blue)] mb-6 flex items-center">
                  <span className="w-8 h-8 rounded-full bg-[var(--polynesian-blue)]/10 flex items-center justify-center mr-3 text-[var(--pumpkin)]">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                  </span>
                  Nos services de drone dans le {department.name}
                </h2>
                
                <div className="prose max-w-none text-[var(--bice-blue)]">
                  <p>
                    Drone Nord intervient dans l'ensemble du département du {department.name} ({department.code}) 
                    pour tous vos besoins en captation aérienne. Équipés de drones professionnels de dernière génération, 
                    nous produisons des images aériennes de haute qualité pour divers secteurs et occasions.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-[var(--polynesian-blue)] mt-6">Nos prestations dans le {department.name}</h3>
                  
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[var(--pumpkin)] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Immobilier :</strong> Photos et vidéos aériennes pour les agences immobilières et les propriétaires souhaitant mettre en valeur leur bien.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[var(--pumpkin)] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Mariages et événements :</strong> Captation de moments uniques lors de cérémonies, réceptions et fêtes familiales.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[var(--pumpkin)] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Entreprises :</strong> Supports visuels pour communication, marketing, suivi de chantier et inspections techniques.</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="h-5 w-5 text-[var(--pumpkin)] mr-2 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong>Tourisme :</strong> Valorisation du patrimoine local, sites touristiques, hôtels et campings dans le {department.name}.</span>
                    </li>
                  </ul>
                  
                  <p className="mb-0">
                    Notre équipe se déplace dans toutes les communes du {department.name} pour répondre à vos besoins 
                    en captation aérienne. Nous disposons de toutes les autorisations nécessaires pour voler dans les 
                    zones réglementées du département, et notre connaissance du territoire nous permet d'identifier 
                    les meilleurs sites et angles de vue pour mettre en valeur votre projet.
                  </p>
                </div>
              </div>
            </div>
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
              "description": `Services de captation aérienne par drone professionnel dans le département du ${department.name} (${department.code})`,
              "url": `https://drone-nord.fr/drone/${department.slug}`,
              "logo": "https://drone-nord.fr/logo.png",
              "telephone": "+33745593516",
              "email": "contact@drone-nord.fr",
              "areaServed": {
                "@type": "AdministrativeArea",
                "name": department.name,
                "sameAs": `https://fr.wikipedia.org/wiki/${encodeURIComponent(department.name)}_(département)`
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