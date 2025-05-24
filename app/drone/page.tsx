import DefaultHeader from "@/components/layout/DefaultHeader";
import Footer from "@/components/layout/Footer";
import Link from "next/link";
import Image from "next/image";

// Définition des départements supportés avec leurs codes, noms et slugs
const SUPPORTED_DEPARTMENTS = [
  { code: "59", name: "Nord", slug: "nord" },
  { code: "62", name: "Pas-de-Calais", slug: "pas-de-calais" },
  { code: "80", name: "Somme", slug: "somme" },
  { code: "76", name: "Seine-Maritime", slug: "seine-maritime" }
];

// Métadonnées pour la page
export const metadata = {
  title: 'Services de drone par département | Nord-Pas-de-Calais et Hauts-de-France',
  description: 'Découvrez nos prestations de captation aérienne par drone professionnel par département. Services disponibles dans le Nord, le Pas-de-Calais, la Somme et la Seine-Maritime.',
  openGraph: {
    title: 'Services de drone par département | Nord-Pas-de-Calais et Hauts-de-France',
    description: 'Découvrez nos prestations de captation aérienne par drone professionnel par département. Services disponibles dans le Nord, le Pas-de-Calais, la Somme et la Seine-Maritime.',
    url: 'https://drone-nord.fr/drone',
    siteName: 'Drone Nord - Services de captation par drone dans le Nord',
    locale: 'fr_FR',
    type: 'website',
    images: [
      {
        url: 'https://drone-nord.fr/panorama1.webp',
        width: 1200,
        height: 630,
        alt: 'Drone Nord - Services de captation aérienne par département',
      }
    ],
  },
};

export default function DepartmentsPage() {
  return (
    <>
      <DefaultHeader />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <div className="relative min-h-[40vh] flex items-center justify-center w-full">
          {/* Background panorama */}
          <div className="absolute inset-0 w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-b from-[var(--polynesian-blue)]/95 via-[var(--polynesian-blue)]/75 to-[var(--polynesian-blue)]/30 z-10"></div>
            <Image 
              src="/panorama1.webp"
              alt="Services de drone par département"
              fill
              priority
              className="object-cover object-center"
            />
          </div>

          <div className="container mx-auto px-6 pt-28 pb-16 relative z-20">
            <div className="flex flex-col items-center text-center">
              <h1 
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight"
              >
                Services de drone par département
              </h1>
              
              <div className="w-24 h-1 bg-gradient-to-r from-white to-[var(--pumpkin)] mb-6 rounded-full"></div>
              
              <p 
                className="text-white/90 text-center max-w-3xl mx-auto text-lg leading-relaxed"
              >
                Découvrez nos prestations de captation aérienne par drone professionnel disponibles 
                dans les départements du Nord, du Pas-de-Calais, de la Somme et de la Seine-Maritime.
                Sélectionnez votre département pour trouver les villes desservies.
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
        
        {/* Liste des départements */}
        <div className="bg-white py-12 md:py-16">
          <div className="container mx-auto px-4 sm:px-6">
            <h2 className="text-2xl md:text-3xl font-bold text-[var(--polynesian-blue)] mb-10 text-center">
              Choisissez votre département
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {SUPPORTED_DEPARTMENTS.map((dept) => (
                <Link
                  key={dept.code}
                  href={`/drone/${dept.slug}`}
                  className="bg-white rounded-xl shadow-md border border-[var(--silver)]/20 hover:shadow-lg transition-all group overflow-hidden relative"
                >
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[var(--polynesian-blue)] to-[var(--pumpkin)]"></div>
                  
                  <div className="p-6 flex flex-col items-center text-center">
                    <div className="w-16 h-16 rounded-full bg-[var(--polynesian-blue)]/10 flex items-center justify-center text-[var(--pumpkin)] mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    
                    <h3 className="text-xl font-bold text-[var(--polynesian-blue)] mb-2">
                      {dept.name}
                    </h3>
                    
                    <div className="text-[var(--pumpkin)] font-semibold mb-3">
                      {dept.code}
                    </div>
                    
                    <p className="text-[var(--polynesian-blue)]/80 mb-4">
                      Découvrez nos services de captation par drone disponibles dans le département du {dept.name}.
                    </p>
                    
                    <div className="mt-auto">
                      <span className="inline-flex items-center justify-center py-2 px-4 rounded-full bg-[var(--polynesian-blue)] text-white group-hover:bg-[var(--pumpkin)] transition-colors">
                        <span>Voir les villes</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
        
        {/* Section d'information */}
        <div className="py-12 md:py-16 bg-[var(--antiflash-white)]">
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
                  Nos services de drone par département
                </h2>
                
                <div className="prose max-w-none text-[var(--polynesian-blue)]/80">
                  <p>
                    Drone Nord propose des prestations de captation aérienne par drone professionnel dans plusieurs départements 
                    du Nord de la France. Notre équipe se déplace dans les départements du Nord (59), du Pas-de-Calais (62), 
                    de la Somme (80) et de la Seine-Maritime (76) pour répondre à tous vos besoins en matière de prise de vue aérienne.
                  </p>
                  
                  <p>
                    Que vous soyez à Lille, Dunkerque, Arras, Amiens, Rouen ou dans n'importe quelle ville de ces départements, 
                    nous sommes en mesure de vous proposer des services de qualité professionnelle adaptés à vos besoins spécifiques.
                  </p>
                  
                  <h3 className="text-lg font-semibold text-[var(--polynesian-blue)] mt-6">
                    Comment utiliser notre annuaire par département ?
                  </h3>
                  
                  <ol className="space-y-2 mb-6 list-decimal pl-6">
                    <li className="text-[var(--polynesian-blue)]/80">
                      <span className="text-[var(--polynesian-blue)]">Sélectionnez votre département</span> dans la liste ci-dessus.
                    </li>
                    <li className="text-[var(--polynesian-blue)]/80">
                      <span className="text-[var(--polynesian-blue)]">Choisissez votre ville</span> parmi celles disponibles dans l'annuaire du département.
                    </li>
                    <li className="text-[var(--polynesian-blue)]/80">
                      <span className="text-[var(--polynesian-blue)]">Découvrez nos services</span> disponibles dans votre localité et demandez un devis gratuit.
                    </li>
                  </ol>
                  
                  <p className="mb-0">
                    Pour toute demande spécifique ou pour vérifier si nous intervenons dans une zone non listée, 
                    n'hésitez pas à nous contacter directement par téléphone ou via notre 
                    <Link href="/contact" className="text-[var(--pumpkin)] hover:underline"> formulaire de contact</Link>.
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
              "@type": "WebPage",
              "name": "Services de drone par département | Drone Nord",
              "description": "Découvrez nos prestations de captation aérienne par drone professionnel par département. Services disponibles dans le Nord, le Pas-de-Calais, la Somme et la Seine-Maritime.",
              "url": "https://drone-nord.fr/drone",
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Accueil",
                    "item": "https://drone-nord.fr"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": "Services par département",
                    "item": "https://drone-nord.fr/drone"
                  }
                ]
              },
              "mainEntity": {
                "@type": "ItemList",
                "itemListElement": SUPPORTED_DEPARTMENTS.map((dept, index) => ({
                  "@type": "ListItem",
                  "position": index + 1,
                  "item": {
                    "@type": "AdministrativeArea",
                    "name": dept.name,
                    "url": `https://drone-nord.fr/drone/${dept.slug}`
                  }
                }))
              }
            })
          }}
        />
      </main>
      
      <Footer />
    </>
  );
} 