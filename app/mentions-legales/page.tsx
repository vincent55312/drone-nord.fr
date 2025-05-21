import DefaultHeader from "@/components/layout/DefaultHeader";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export const metadata = {
  title: 'Mentions légales | Drone Nord',
  description: 'Mentions légales et informations juridiques de Drone Nord, service de captation vidéo aérienne par drone dans le Nord et Nord-Pas-de-Calais.',
}

export default function MentionsLegales() {
  return (
    <>
      <DefaultHeader />
      
      <main className="pt-17 pb-16">
        {/* Hero Section */}
        <div className="bg-gray-100 relative overflow-hidden">
          <div className="container mx-auto px-4 py-16 relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Mentions légales
            </h1>
            <div className="w-20 h-1 bg-[var(--pumpkin)] mx-auto mb-6"></div>
            <p className="text-gray-900 text-center max-w-3xl mx-auto">
              Informations légales concernant l'exploitation du site drone-nord.fr
            </p>
          </div>
          
          {/* Background elements */}
          <div className="absolute top-0 right-0 w-full h-full">
            <div className="absolute top-0 right-0 w-full h-full" 
                 style={{ background: 'radial-gradient(circle, rgba(var(--rgb-bice-blue, 58, 110, 165), 0.05) 0%, transparent 70%)'}}>
            </div>
            <div className="absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-10 bg-[var(--pumpkin)]"></div>
          </div>
          
          {/* Drone silhouette */}
          <div className="absolute bottom-0 right-0 opacity-10">
            <Image 
              src="/avata2.png" 
              alt="Drone silhouette" 
              width={300} 
              height={200}
              className="object-contain"
            />
          </div>
        </div>
        
        {/* Content Section */}
        <div className="container mx-auto px-4 py-12">
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto">
            <div className="space-y-8 text-gray-900">
              <section>
                <h2 className="text-2xl font-bold text-[var(--polynesian-blue)] mb-4">Éditeur du site</h2>
                <p className="mb-3">
                  <strong>Drone Nord</strong><br />
                  Activité de captation vidéo aérienne par drone<br />
                  Exploité par Vincent Vuylsteker<br />
                  Adresse : Nord-Pas-de-Calais<br />
                  Téléphone : <a href="tel:+33745593516" className="text-[var(--pumpkin)] hover:underline">07 45 59 35 16</a><br />
                  Email : <a href="mailto:contact@drone-nord.fr" className="text-[var(--pumpkin)] hover:underline">contact@drone-nord.fr</a>
                </p>
                <p className="mb-3">
                  SIRET : 92529525500010<br />
                  Entreprise individuelle
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-[var(--polynesian-blue)] mb-4">Hébergement</h2>
                <p>
                  Ce site est hébergé par :<br />
                  <strong>Vercel Inc.</strong><br />
                  340 S Lemon Ave #4133<br />
                  Walnut, CA 91789<br />
                  États-Unis<br />
                  <a href="https://vercel.com" target="_blank" rel="noopener noreferrer" className="text-[var(--pumpkin)] hover:underline">https://vercel.com</a>
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-[var(--polynesian-blue)] mb-4">Propriété intellectuelle</h2>
                <p className="mb-3">
                  L'ensemble de ce site (structure, textes, logos, images, photographies, vidéos, sons, savoir-faire, etc.) constitue une œuvre protégée par les lois en vigueur sur la propriété intellectuelle.
                </p>
                <p className="mb-3">
                  Toute reproduction ou représentation, intégrale ou partielle, faite sans le consentement de l'auteur ou de ses ayants droit, est illicite et constituerait une contrefaçon sanctionnée par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-[var(--polynesian-blue)] mb-4">Droit applicable et juridiction compétente</h2>
                <p className="mb-3">
                  Le présent site est soumis au droit français. En cas de litige, les tribunaux français seront seuls compétents.
                </p>
              </section>
              <section>
                <h2 className="text-2xl font-bold text-[var(--polynesian-blue)] mb-4">Réalisation du site</h2>
                <p>
                  Ce site a été développé par <a href="https://site-en-or.fr" target="_blank" rel="noopener noreferrer" className="text-[var(--pumpkin)] hover:underline">Site-en-Or.fr</a>
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
} 