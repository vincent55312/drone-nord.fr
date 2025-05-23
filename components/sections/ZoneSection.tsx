"use client";

import React, { useState, useEffect } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { departmentGeoJSON } from '@/data/MapData';
import dynamic from 'next/dynamic';

// Composant de carte chargé dynamiquement côté client uniquement
const MapComponent = dynamic(() => import('./map/MapComponent'), { 
  ssr: false,
  loading: () => <div className="h-full w-full bg-[var(--antiflash-white)] flex items-center justify-center">Chargement de la carte...</div>
});

export default function ZoneSection() {
  const [selectedDept, setSelectedDept] = useState<string | null>(null);
  const [mapReady, setMapReady] = useState(false);

  // Données des départements d'intervention
  const departments = [
    {
      id: "59",
      name: "Nord",
      slug: "nord",
      mainCities: ["Lille", "Dunkerque", "Valenciennes", "Douai", "Maubeuge", "Cambrai"],
      color: "var(--pumpkin)"
    },
    {
      id: "62",
      name: "Pas-de-Calais",
      slug: "pas-de-calais",
      mainCities: ["Arras", "Calais", "Boulogne-sur-Mer", "Lens", "Béthune", "Saint-Omer"],
      color: "var(--pumpkin)"
    },
    {
      id: "80",
      name: "Somme",
      slug: "somme",
      mainCities: ["Amiens", "Abbeville", "Péronne", "Albert", "Montdidier"],
      color: "var(--pumpkin)"
    },
    {
      id: "76",
      name: "Seine-Maritime",
      slug: "seine-maritime",
      mainCities: ["Rouen", "Le Havre", "Dieppe", "Fécamp", "Yvetot"],
      color: "var(--pumpkin)"
    }
  ];

  // Assurer que la carte est chargée côté client uniquement
  useEffect(() => {
    setMapReady(true);
  }, []);

  const mapIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z" />
    </svg>
  );

  return (
    <SectionWrapper 
      id="zone" 
      background="white"
      icon={mapIcon}
      withTopDivider={false}
      withBottomDivider={false}
      flipDivider={true}
    >
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold mb-3 text-[var(--polynesian-blue)]">Notre zone d&apos;intervention drone</h2>
        <p className="text-base max-w-3xl mx-auto text-[var(--bice-blue)]">
          Nous proposons nos <strong>services de captation aérienne par drone professionnel</strong> dans le <strong>Nord</strong>, le <strong>Pas-de-Calais</strong>, la <strong>Somme</strong> et la <strong>Seine-Maritime</strong>. Découvrez les principales villes où nous intervenons pour vos projets de vidéo et photo aérienne.
        </p>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {/* Carte Leaflet */}
        <div className="relative h-[350px] sm:h-[400px] shadow-xl rounded-lg overflow-hidden border border-[var(--silver)]/30">
          {mapReady && (
            <MapComponent 
              geoJson={departmentGeoJSON} 
              departments={departments} 
              selectedDept={selectedDept}
              setSelectedDept={setSelectedDept}
            />
          )}
          
          {/* Overlay d'information */}
          <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4 bg-gradient-to-t from-[var(--polynesian-blue)]/90 to-transparent text-white z-[40]">
            <div className="container mx-auto">
              <h3 className="text-base sm:text-lg font-bold mb-1">
                {selectedDept 
                  ? `Département ${departments.find(d => d.id === selectedDept)?.name}`
                  : "Notre zone d&apos;intervention drone dans le Nord de la France"}
              </h3>
              <p className="text-xs sm:text-sm">
                {selectedDept 
                  ? `Nous intervenons dans tout le département ${departments.find(d => d.id === selectedDept)?.name} pour vos projets de captation aérienne professionnelle par drone.`
                  : "Sélectionnez un département pour voir les villes où nous intervenons pour vos projets de vidéo et photo par drone."}
              </p>
            </div>
          </div>
        </div>

        {/* Affichage de tous les départements en dessous de la carte */}
        <div 
          className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 mt-4"
          itemScope 
          itemType="https://schema.org/Place"
        >
          <meta itemProp="name" content="Zone d&apos;intervention Drone Nord" />
          
          {departments.map((dept) => (
            <div 
              key={dept.id}
              className="bg-[var(--antiflash-white)] p-3 rounded-lg shadow-md border border-[var(--silver)]/30"
              itemScope 
              itemType="https://schema.org/AdministrativeArea"
            >
              <meta itemProp="containedIn" content="Nord de la France" />
              <meta itemProp="containedInPlace" content="France" />
              
              <div className="flex items-center mb-2">
                <div 
                  className="w-3 h-3 rounded-full mr-2" 
                  style={{ backgroundColor: dept.color }}
                ></div>
                <h3 
                  className="text-base font-medium text-[var(--polynesian-blue)]"
                  itemProp="name"
                >
                  {dept.name}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-1 text-sm">
                {dept.mainCities.map((city) => (
                  <div 
                    key={`${dept.id}-${city}`} 
                    className="flex items-center"
                    itemScope 
                    itemType="https://schema.org/City"
                    itemProp="containsPlace"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 text-[var(--pumpkin)] mr-1">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                    </svg>
                    <span 
                      className="text-[var(--bice-blue)]"
                      itemProp="name"
                    >
                      {city}
                    </span>
                    <meta itemProp="containedIn" content={dept.name} />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        {/* Message d'information */}
        <div className="mt-3 bg-[var(--antiflash-white)] p-3 rounded-lg shadow-md border border-[var(--silver)]/30">
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[var(--pumpkin)] mr-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
            </svg>
            <p className="text-sm text-[var(--bice-blue)]">
              Vous ne trouvez pas votre ville dans notre zone d&apos;intervention ? <a href="#contact" className="text-[var(--pumpkin)] font-medium hover:underline">Contactez-nous</a> pour vérifier notre disponibilité dans votre secteur pour vos projets de captation aérienne par drone !
            </p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
} 