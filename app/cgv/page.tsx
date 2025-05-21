import DefaultHeader from "@/components/layout/DefaultHeader";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export const metadata = {
  title: 'Conditions Générales de Vente | Drone Nord',
  description: 'Conditions Générales de Vente de Drone Nord pour les services de captation vidéo et photo aérienne par drone dans le Nord et Nord-Pas-de-Calais.',
}

export default function CGV() {
  return (
    <>
      <DefaultHeader />
      
      <main className="pt-17 pb-16">
        {/* Hero Section */}
        <div className="bg-gray-100 relative overflow-hidden">
          <div className="container mx-auto px-4 py-16 relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Conditions Générales de Vente
            </h1>
            <div className="w-20 h-1 bg-[var(--pumpkin)] mx-auto mb-6"></div>
            <p className="text-gray-900 text-center max-w-3xl mx-auto">
              Conditions applicables aux prestations de services de captation vidéo et photo par drone
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
                <h2 className="text-2xl font-bold text-[var(--polynesian-blue)] mb-4">Article 1 - Dispositions générales</h2>
                <p className="mb-3">
                  Les présentes Conditions Générales de Vente (CGV) s'appliquent à toutes les prestations de services de captation aérienne par drone effectuées par Vincent Vuylsteker, exerçant sous le nom commercial "Drone Nord", entrepreneur individuel, SIRET 92529525500010, dont les coordonnées sont les suivantes : contact@drone-nord.fr, téléphone : 07 45 59 35 16 (ci-après "le Prestataire").
                </p>
                <p className="mb-3">
                  Ces CGV sont applicables à toute commande passée auprès du Prestataire par un client professionnel ou particulier (ci-après "le Client").
                </p>
                <p className="mb-3">
                  Toute commande implique l'acceptation sans réserve par le Client des présentes conditions générales de vente.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-[var(--polynesian-blue)] mb-4">Article 2 - Nature des prestations</h2>
                <p className="mb-3">
                  Les prestations proposées par le Prestataire comprennent :
                </p>
                <ul className="list-disc pl-6 mb-3 space-y-2">
                  <li>Captation vidéo aérienne par drone</li>
                  <li>Photographie aérienne par drone</li>
                  <li>Montage vidéo des séquences réalisées</li>
                  <li>Retouche des photographies aériennes</li>
                  <li>Autres prestations de services utilisant un drone comme outil de captation</li>
                </ul>
                <p className="mb-3">
                  Le détail des prestations est précisé dans le devis remis au Client.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-[var(--polynesian-blue)] mb-4">Article 3 - Commandes et devis</h2>
                <p className="mb-3">
                  Toute demande de prestation fait l'objet d'un devis détaillé émis par le Prestataire, mentionnant :
                </p>
                <ul className="list-disc pl-6 mb-3 space-y-2">
                  <li>La nature et le détail des prestations</li>
                  <li>Le lieu et la date d'exécution</li>
                  <li>Le prix total HT et TTC</li>
                  <li>Les conditions de paiement</li>
                  <li>La durée de validité du devis</li>
                </ul>
                <p className="mb-3">
                  La commande est considérée comme ferme et définitive à réception par le Prestataire du devis daté et signé par le Client, accompagné de l'acompte demandé.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-[var(--polynesian-blue)] mb-4">Article 4 - Prix et modalités de paiement</h2>
                <p className="mb-3">
                  Les prix des prestations sont indiqués en euros et sont nets de TVA (TVA non applicable, art. 293 B du CGI).
                </p>
                <p className="mb-3">
                  Un acompte de 30% du montant total est exigible à la commande, sauf mention contraire dans le devis. Le solde est payable à la livraison des travaux, sauf accord écrit entre les parties.
                </p>
                <p className="mb-3">
                  Les paiements peuvent être effectués par virement bancaire, chèque ou en espèces.
                </p>
                <p className="mb-3">
                  En cas de retard de paiement, des pénalités égales à trois fois le taux d'intérêt légal seront appliquées, ainsi qu'une indemnité forfaitaire pour frais de recouvrement de 40 euros (articles L. 441-6 et D. 441-5 du Code de commerce).
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-[var(--polynesian-blue)] mb-4">Article 5 - Exécution des prestations</h2>
                <p className="mb-3">
                  Le Prestataire s'engage à réaliser les prestations conformément au devis accepté et dans le respect de la réglementation relative à l'utilisation des drones civils.
                </p>
                <p className="mb-3">
                  Les conditions météorologiques peuvent affecter ou empêcher l'exécution des prestations. En cas d'impossibilité d'effectuer le vol en raison des conditions météorologiques, le Prestataire proposera au Client une date de report sans frais supplémentaire.
                </p>
                <p className="mb-3">
                  Le Client s'engage à fournir tous les éléments nécessaires à la bonne exécution de la prestation (accès aux lieux, autorisations requises, etc.).
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-[var(--polynesian-blue)] mb-4">Article 6 - Modification et annulation</h2>
                <p className="mb-3">
                  Toute demande de modification de la prestation par le Client doit être adressée par écrit au Prestataire et peut donner lieu à l'établissement d'un nouveau devis.
                </p>
                <p className="mb-3">
                  En cas d'annulation par le Client :
                </p>
                <ul className="list-disc pl-6 mb-3 space-y-2">
                  <li>Plus de 7 jours avant la date d'exécution : l'acompte reste acquis au Prestataire à titre d'indemnité.</li>
                  <li>Moins de 7 jours avant la date d'exécution : 75% du montant total est dû.</li>
                  <li>Moins de 48 heures avant la date d'exécution : 100% du montant total est dû.</li>
                </ul>
                <p className="mb-3">
                  En cas d'annulation par le Prestataire, l'acompte versé sera intégralement remboursé au Client, sans autre indemnité.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-[var(--polynesian-blue)] mb-4">Article 7 - Livraison et délais</h2>
                <p className="mb-3">
                  Les délais de livraison sont indiqués dans le devis. Le Prestataire s'engage à respecter ces délais, sauf cas de force majeure ou événement indépendant de sa volonté.
                </p>
                <p className="mb-3">
                  La livraison s'effectue par transfert électronique des fichiers numériques ou par remise d'un support physique selon les modalités convenues dans le devis.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-[var(--polynesian-blue)] mb-4">Article 8 - Propriété intellectuelle</h2>
                <p className="mb-3">
                  Les prises de vue réalisées restent la propriété intellectuelle du Prestataire, conformément au Code de la propriété intellectuelle.
                </p>
                <p className="mb-3">
                  Le Client acquiert les droits d'exploitation des images et vidéos dans la limite des utilisations précisées dans le devis. Toute utilisation non prévue initialement doit faire l'objet d'une autorisation écrite du Prestataire et peut donner lieu à une facturation complémentaire.
                </p>
                <p className="mb-3">
                  Sauf mention contraire dans le devis, le Prestataire se réserve le droit d'utiliser les images réalisées à des fins de promotion de son activité (portfolio, site internet, réseaux sociaux).
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-[var(--polynesian-blue)] mb-4">Article 9 - Responsabilité</h2>
                <p className="mb-3">
                  Le Prestataire s'engage à apporter tout le soin nécessaire à l'exécution des prestations. Sa responsabilité ne peut être engagée qu'en cas de faute prouvée.
                </p>
                <p className="mb-3">
                  Le Prestataire décline toute responsabilité en cas de :
                </p>
                <ul className="list-disc pl-6 mb-3 space-y-2">
                  <li>Non-obtention des autorisations nécessaires incombant au Client</li>
                  <li>Utilisation des images par le Client non conforme aux législations en vigueur</li>
                  <li>Retard ou défaut d'exécution lié à un cas de force majeure</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-[var(--polynesian-blue)] mb-4">Article 10 - Droit applicable et litiges</h2>
                <p className="mb-3">
                  Les présentes CGV sont soumises au droit français.
                </p>
                <p className="mb-3">
                  En cas de litige, les parties s'engagent à rechercher une solution amiable. À défaut, les tribunaux français seront seuls compétents.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-[var(--polynesian-blue)] mb-4">Contact</h2>
                <p>
                  <strong>Drone Nord</strong><br />
                  Vincent Vuylsteker - Entrepreneur individuel<br />
                  SIRET : 92529525500010<br />
                  Email : <a href="mailto:contact@drone-nord.fr" className="text-[var(--pumpkin)] hover:underline">contact@drone-nord.fr</a><br />
                  Téléphone : <a href="tel:+33745593516" className="text-[var(--pumpkin)] hover:underline">07 45 59 35 16</a>
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