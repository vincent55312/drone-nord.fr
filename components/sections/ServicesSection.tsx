"use client";

import React from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';

// Service type definition
interface Service {
  title: string;
  description: string;
  icon: React.ReactNode;
  badge?: string;
}

export default function ServicesSection() {
  // Services data
  const services: Service[] = [
    {
      title: 'Clips vidéos aériens',
      description: 'Captations <strong>vidéos aériennes en 4K</strong> pour mettre en valeur vos événements, lieux ou activités avec une <strong>perspective unique</strong>.',
      badge: '4K Ultra HD',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
        </svg>
      )
    },
    {
      title: 'Photos aériennes haute résolution',
      description: '<strong>Photos aériennes haute résolution</strong> pour immortaliser vos moments spéciaux ou mettre en valeur votre <strong>patrimoine immobilier</strong>.',
      badge: 'HD+',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 0 1 5.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 0 0-1.134-.175 2.31 2.31 0 0 1-1.64-1.055l-.822-1.316a2.192 2.192 0 0 0-1.736-1.039 48.774 48.774 0 0 0-5.232 0 2.192 2.192 0 0 0-1.736 1.039l-.821 1.316Z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0ZM18.75 10.5h.008v.008h-.008V10.5Z" />
        </svg>
      )
    },
    {
      title: 'Contenus pour réseaux sociaux',
      description: 'Création de <strong>contenus vidéos et photos aériens</strong> optimisés pour vos <strong>réseaux sociaux</strong>, avec un angle de vue innovant.',
      badge: 'Tendance',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
        </svg>
      )
    },
    {
      title: 'Captation d\'événements professionnels',
      description: '<strong>Enregistrement aérien professionnel</strong> de vos <strong>événements d\'entreprise</strong> ou <strong>mariages</strong> pour en garder une trace unique et mémorable.',
      badge: 'Premium',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
        </svg>
      )
    },
    {
      title: 'Vues aériennes pour particuliers',
      description: 'Offrez-vous une <strong>vue aérienne inédite</strong> de votre propriété ou de votre lieu de vie avec des <strong>prises de vues personnalisées</strong>.',
      badge: 'Exclusif',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      )
    },
    {
      title: 'Services pour l\'immobilier',
      description: 'Valorisez vos <strong>biens immobiliers</strong> avec des <strong>prises de vues aériennes professionnelles</strong> qui mettent en valeur le terrain et l\'environnement.',
      badge: 'Pro',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 sm:w-8 sm:h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205 3 1m1.5.5-1.5-.5M6.75 7.364V3h-3v18m3-13.636 10.5-3.819" />
        </svg>
      )
    }
  ];

  const droneIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.751c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 0 1-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 9.953 4.167 9.5 5 9.5h1.053c.472 0 .745.556.5.96a8.958 8.958 0 0 0-1.302 4.665c0 1.194.232 2.333.654 3.375Z" />
    </svg>
  );

  return (
    <SectionWrapper
      id="services"
      background="light"
      withTopDivider
      withBottomDivider
      icon={
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
      }
    >
      <div 
        className="container mx-auto px-4"
        itemScope
        itemType="https://schema.org/Service"
      >
        <meta itemProp="serviceType" content="Services de captation vidéo et photo par drone" />
        <meta itemProp="provider" content="Drone Nord" />
        <meta itemProp="areaServed" content="Nord et Nord-Pas-de-Calais" />
        <div className="flex flex-col items-center justify-center text-center mb-8 sm:mb-12 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-[var(--polynesian-blue)]" itemProp="name">Nos prestations de captation par drone</h2>
          <p className="text-base sm:text-lg max-w-3xl mx-auto text-[var(--bice-blue)]" itemProp="description">
            Nous proposons des services professionnels de captation aérienne par drone pour répondre à tous vos besoins dans le Nord et Nord-Pas-de-Calais.
            Vidéos 4K Ultra HD, photos haute résolution et montages soignés pour valoriser vos projets.
          </p>
        </div>

        <div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-white p-3 sm:p-4 md:p-6 rounded-lg sm:rounded-xl shadow-md border border-[var(--silver)]/20 hover:shadow-lg transition-all duration-300 animate-fade-in relative overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
              itemScope
              itemType="https://schema.org/Service"
              itemProp="itemListElement"
            >
              {/* Accent element */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--polynesian-blue)] to-[var(--pumpkin)]"></div>
              
              <div className="flex items-start mb-2">
                <div className="shrink-0 text-[var(--pumpkin)] w-8 h-8 sm:w-10 sm:h-10 bg-[var(--antiflash-white)] rounded-full flex items-center justify-center mr-3">
                  {service.icon}
                </div>
                
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-[var(--polynesian-blue)] group-hover:text-[var(--pumpkin)] transition-colors" itemProp="name">{service.title}</h3>
                  
                  <div 
                    className="text-xs sm:text-sm md:text-base text-[var(--bice-blue)] mt-1" 
                    dangerouslySetInnerHTML={{ __html: service.description }}
                    itemProp="description"
                  />
                </div>
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
                <meta itemProp="url" content={`https://drone-nord.fr/services#${service.title.toLowerCase().replace(/\s+/g, '-')}`} />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-6 sm:mt-8 md:mt-12 flex justify-center animate-fade-in" style={{ animationDelay: "0.7s" }}>
          <Link
            href="#contact"
            className="bg-gradient-to-r from-[var(--polynesian-blue)] to-[var(--bice-blue)] text-[var(--antiflash-white)] py-2 sm:py-3 px-4 sm:px-6 rounded-lg hover:shadow-lg hover:shadow-[var(--polynesian-blue)]/25 hover:translate-y-[-2px] transition-all duration-300 text-sm sm:text-base font-semibold flex items-center"
            aria-label="Demander un devis pour une prestation de captation par drone"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 sm:w-5 sm:h-5 mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Demander un devis gratuit
          </Link>
        </div>
      </div>
    </SectionWrapper>
  );
} 