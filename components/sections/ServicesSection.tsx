"use client";

import React from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Link from 'next/link';
import services from '@/data/services.json';

// Service type definition
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  slug: string;
  badge?: string;
}

export default function ServicesSection() {
  // Services data
  const mainServices: Service[] = [
    {
      title: 'Captation d\'événements',
      description: 'Captations <strong>vidéos aériennes en 4K</strong> pour mettre en valeur vos événements, lieux ou activités avec une <strong>perspective unique</strong>.',
      badge: '4K Ultra HD',
      slug: 'video-evenementielle-drone',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
      )
    },
    {
      title: 'Vidéo immobilier',
      description: '<strong>Photos aériennes haute résolution</strong> pour immortaliser vos moments spéciaux ou mettre en valeur votre <strong>patrimoine immobilier</strong>.',
      badge: 'HD+',
      slug: 'video-immobilier-drone',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
        </svg>
      )
    },
    {
      title: 'Vidéo réseaux sociaux',
      description: 'Création de <strong>contenus vidéos et photos aériens</strong> optimisés pour vos <strong>réseaux sociaux</strong>, avec un angle de vue innovant.',
      badge: 'Tendance',
      slug: 'video-reseaux-sociaux-drone',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
        </svg>
      )
    },
    {
      title: 'Vidéo de mariage',
      description: '<strong>Enregistrement aérien professionnel</strong> de vos <strong>événements d\'entreprise</strong> ou <strong>mariages</strong> pour en garder une trace unique et mémorable.',
      badge: 'Premium',
      slug: 'video-mariage-drone',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
        </svg>
      )
    },
    {
      title: 'Prise de vue lieux naturels',
      description: 'Offrez-vous une <strong>vue aérienne inédite</strong> de votre propriété ou de votre lieu de vie avec des <strong>prises de vues personnalisées</strong>.',
      badge: 'Exclusif',
      slug: 'prise-de-vue-lieux-naturels',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      )
    },
    {
      title: 'Présentation touristique',
      description: 'Attirez les visiteurs avec une <strong>vidéo immersive</strong> de votre site touristique, hôtel, camping ou domaine, mettant en valeur les <strong>paysages et installations</strong>.',
      badge: 'Tourisme',
      slug: 'video-hotel-tourisme-drone',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" className="w-7 h-7">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
      )
    }
  ];

  const serviceIcon = (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="w-6 h-6"
    >
      <polygon points="3 11 22 2 13 21 11 13 3 11" />
    </svg>
  );

  return (
    <SectionWrapper
      id="services"
      background="primary"
      withTopDivider
      withBottomDivider
      icon={serviceIcon}
    >
      <div 
        className="container mx-auto"
        itemScope
        itemType="https://schema.org/Service"
      >
        <meta itemProp="serviceType" content="Services de captation vidéo et photo par drone" />
        <meta itemProp="provider" content="Drone Nord" />
        <meta itemProp="areaServed" content="Nord et Nord-Pas-de-Calais" />
        <div className="flex flex-col items-center justify-center text-center mb-6 sm:mb-8 md:mb-10 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[var(--polynesian-blue)]" itemProp="name">Nos prestations de prise d'images par drone</h2>
          <p className="text-base max-w-3xl mx-auto text-[var(--bice-blue)]" itemProp="description">
            Nous proposons des services professionnels de captation aérienne par drone pour répondre à tous vos besoins dans le Nord et Nord-Pas-de-Calais.
            Vidéos 4K Ultra HD, photos haute résolution et montages soignés pour valoriser vos projets.
          </p>
        </div>

        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          {mainServices.map((service, index) => (
            <div
              key={service.title}
              className="bg-white p-3 sm:p-5 rounded-lg shadow-md border border-[var(--silver)]/20 hover:shadow-xl transition-all duration-300 md:animate-fade-in group overflow-hidden relative"
              style={{ animationDelay: `${index * 0.1}s` }}
              itemScope
              itemType="https://schema.org/Service"
              itemProp="itemListElement"
            >
              {/* Accent element */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--polynesian-blue)] to-[var(--pumpkin)]"></div>
              
              {/* Badge */}
              {service.badge && (
                <div className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-[var(--pumpkin)] text-white text-[10px] sm:text-xs font-bold px-1.5 py-0.5 sm:px-2 sm:py-1 rounded shadow-md">
                  {service.badge}
                </div>
              )}
              
              {/* Icon with consistent styling */}
              <div className="mb-2 sm:mb-4 w-10 h-10 sm:w-14 sm:h-14 rounded-full bg-[var(--polynesian-blue)]/10 flex items-center justify-center text-[var(--pumpkin)] shadow-sm transform md:group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              
              <h3 className="text-base sm:text-lg font-bold text-[var(--polynesian-blue)] group-hover:text-[var(--pumpkin)] transition-colors mb-1 sm:mb-3" itemProp="name">
                {service.title}
              </h3>
              
              <div 
                className="text-xs sm:text-sm text-[var(--bice-blue)] mb-2 sm:mb-3" 
                dangerouslySetInnerHTML={{ __html: service.description }}
                itemProp="description"
              />
              
              <div className="mt-2 sm:mt-4 pt-2 sm:pt-3 border-t border-[var(--silver)]/20">
                <Link
                  href={`/${service.slug}`}
                  className="text-[var(--pumpkin)] text-xs sm:text-sm font-medium flex items-center group-hover:font-semibold"
                >
                  En savoir plus
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 sm:h-4 sm:w-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
              
              <meta itemProp="provider" content="Drone Nord" />
              <meta itemProp="areaServed" content="Nord et Nord-Pas-de-Calais" />
              <meta itemProp="serviceType" content={service.title} />
              
              <div 
                itemProp="offers" 
                itemScope 
                itemType="https://schema.org/Offer"
              >
                <meta itemProp="priceCurrency" content="EUR" />
                <meta itemProp="availability" content="https://schema.org/InStock" />
                <meta itemProp="url" content={`https://www.drone-nord.fr/${service.slug}`} />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 sm:mt-10 flex justify-center md:animate-fade-in" style={{ animationDelay: "0.7s" }}>
          <Link
            href="/services"
            className="bg-gradient-to-r from-[var(--polynesian-blue)] to-[var(--bice-blue)] text-[var(--antiflash-white)] py-3 px-6 sm:px-8 rounded-full hover:shadow-lg hover:shadow-[var(--polynesian-blue)]/25 hover:translate-y-[-2px] transition-all duration-300 font-semibold flex items-center"
            aria-label="Découvrir tous nos services de captation par drone"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
            </svg>
            Voir tous nos services
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
} 