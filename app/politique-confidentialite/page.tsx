import DefaultHeader from "@/components/layout/DefaultHeader";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export const metadata = {
  title: 'Politique de confidentialité | Drone Nord',
  description: 'Politique de confidentialité et de protection des données personnelles de Drone Nord, service de captation vidéo aérienne par drone dans le Nord.',
}

export default function PolitiqueConfidentialite() {
  return (
    <>
      <DefaultHeader />
      
      <main className="pt-17 pb-16">
        {/* Hero Section */}
        <div className="bg-gray-100 relative overflow-hidden">
          <div className="container mx-auto px-4 py-16 relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-4">
              Politique de confidentialité
            </h1>
            <div className="w-20 h-1 bg-[var(--pumpkin)] mx-auto mb-6"></div>
            <p className="text-gray-900 text-center max-w-3xl mx-auto">
              Protection de vos données personnelles lors de l'utilisation du site drone-nord.fr
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
                <h2 className="text-2xl font-bold text-[var(--polynesian-blue)] mb-4">Introduction</h2>
                <p className="mb-3">
                  Chez Drone Nord, nous accordons une grande importance à la protection de vos données personnelles. Cette politique de confidentialité vous explique comment nous collectons, utilisons et protégeons vos informations lorsque vous utilisez notre site web.
                </p>
                <p className="mb-3">
                  Cette politique s'applique au site drone-nord.fr, exploité par Vincent Vuylsteker (ci-après "Drone Nord", "nous", "notre" ou "nos").
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-[var(--polynesian-blue)] mb-4">Données collectées</h2>
                <p className="mb-3">Nous pouvons collecter les types de données suivants :</p>
                <ul className="list-disc pl-6 mb-3 space-y-2">
                  <li><strong>Données d'identification</strong> : nom, prénom, adresse e-mail, numéro de téléphone lorsque vous nous contactez via notre formulaire.</li>
                  <li><strong>Données de connexion</strong> : adresse IP, type de navigateur, pages visitées, date et heure de connexion.</li>
                  <li><strong>Cookies</strong> : petits fichiers texte stockés sur votre appareil pour améliorer votre expérience sur notre site.</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-[var(--polynesian-blue)] mb-4">Finalités de la collecte</h2>
                <p className="mb-3">Nous utilisons vos données personnelles pour :</p>
                <ul className="list-disc pl-6 mb-3 space-y-2">
                  <li>Répondre à vos demandes d'information et de devis</li>
                  <li>Améliorer notre site web et nos services</li>
                  <li>Analyser l'utilisation de notre site</li>
                  <li>Vous contacter concernant nos services</li>
                  <li>Respecter nos obligations légales</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-[var(--polynesian-blue)] mb-4">Base légale du traitement</h2>
                <p className="mb-3">Nous traitons vos données sur les bases légales suivantes :</p>
                <ul className="list-disc pl-6 mb-3 space-y-2">
                  <li><strong>Consentement</strong> : lorsque vous acceptez explicitement la collecte de vos données via notre formulaire de contact.</li>
                  <li><strong>Intérêt légitime</strong> : pour améliorer nos services et vous fournir des informations pertinentes.</li>
                  <li><strong>Obligation légale</strong> : pour respecter la législation en vigueur.</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-[var(--polynesian-blue)] mb-4">Destinataires des données</h2>
                <p className="mb-3">
                  Vos données personnelles sont destinées à Drone Nord et ne sont pas partagées avec des tiers, sauf :
                </p>
                <ul className="list-disc pl-6 mb-3 space-y-2">
                  <li>Lorsque nous utilisons des prestataires de services pour l'hébergement du site, l'analyse d'audience, ou l'envoi d'emails.</li>
                  <li>Si nous sommes légalement tenus de le faire (décision de justice, demande d'une autorité compétente).</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-[var(--polynesian-blue)] mb-4">Durée de conservation</h2>
                <p className="mb-3">
                  Nous conservons vos données personnelles pendant la durée nécessaire à l'accomplissement des finalités pour lesquelles elles ont été collectées, et conformément aux délais légaux de prescription.
                </p>
                <ul className="list-disc pl-6 mb-3 space-y-2">
                  <li>Données de contact : 3 ans à compter du dernier contact</li>
                  <li>Données de connexion : 13 mois maximum</li>
                </ul>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-[var(--polynesian-blue)] mb-4">Vos droits</h2>
                <p className="mb-3">
                  Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez des droits suivants :
                </p>
                <ul className="list-disc pl-6 mb-3 space-y-2">
                  <li>Droit d'accès à vos données</li>
                  <li>Droit de rectification</li>
                  <li>Droit à l'effacement (droit à l'oubli)</li>
                  <li>Droit à la limitation du traitement</li>
                  <li>Droit à la portabilité des données</li>
                  <li>Droit d'opposition</li>
                </ul>
                <p className="mb-3">
                  Pour exercer ces droits, vous pouvez nous contacter par email à <a href="mailto:contact@drone-nord.fr" className="text-[var(--pumpkin)] hover:underline">contact@drone-nord.fr</a>.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-[var(--polynesian-blue)] mb-4">Cookies</h2>
                <p className="mb-3">
                  Notre site utilise des cookies pour améliorer votre expérience de navigation. Vous pouvez configurer votre navigateur pour refuser tous les cookies ou être informé quand un cookie est envoyé.
                </p>
                <p className="mb-3">
                  Pour plus d'informations sur nos cookies, veuillez consulter notre bandeau cookies lors de votre première visite sur le site.
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-[var(--polynesian-blue)] mb-4">Modifications</h2>
                <p className="mb-3">
                  Nous nous réservons le droit de modifier cette politique de confidentialité à tout moment. Toute modification sera publiée sur cette page avec une date de mise à jour.
                </p>
                <p className="mb-3">
                  Dernière mise à jour : 15 mai 2024
                </p>
              </section>
              
              <section>
                <h2 className="text-2xl font-bold text-[var(--polynesian-blue)] mb-4">Contact</h2>
                <p className="mb-3">
                  Pour toute question concernant cette politique de confidentialité, vous pouvez nous contacter à :
                </p>
                <p>
                  <strong>Drone Nord</strong><br />
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