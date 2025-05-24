"use client";

import dynamic from 'next/dynamic';

// Types pour les props du composant
type CityMapProps = {
  city: {
    name: string;
    coordinates: {
      lat: number;
      lon: number;
    }
  };
  department: {
    name: string;
    code: string;
  };
};

// Importation dynamique du composant CityMap avec "No SSR"
const DynamicCityMap = dynamic(() => import('./CityMap'), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[400px] bg-[var(--antiflash-white)] flex items-center justify-center rounded-xl border border-[var(--silver)]/20">
      <div className="text-[var(--polynesian-blue)] animate-pulse">Chargement de la carte...</div>
    </div>
  )
});

// Composant wrapper qui sera utilisé dans les composants serveur
export default function MapWrapper({ city, department }: CityMapProps) {
  return <DynamicCityMap city={city} department={department} />;
} 