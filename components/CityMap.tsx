"use client";

import { useEffect, useRef, useState } from 'react';

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

// ID unique pour chaque instance de carte
let mapId = 0;

// Composant pour la carte Leaflet (côté client)
export default function CityMap({ city, department }: CityMapProps) {
  const id = useRef(`leaflet-map-${++mapId}`);
  const mapInstanceRef = useRef<any>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [mapError, setMapError] = useState<string | null>(null);
  
  useEffect(() => {
    // Vérifier si le DOM est prêt
    if (typeof window === 'undefined') {
      return;
    }
    
    // S'assurer que le style Leaflet est chargé une seule fois par page
    if (!document.querySelector('link[href*="leaflet.css"]')) {
      const linkElement = document.createElement('link');
      linkElement.rel = 'stylesheet';
      linkElement.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
      document.head.appendChild(linkElement);
      
      // Ajouter un style custom pour réduire le z-index des contrôles Leaflet
      const styleElement = document.createElement('style');
      styleElement.textContent = `
        .leaflet-top, .leaflet-bottom {
          z-index: 10 !important; /* Valeur inférieure au z-index du header */
        }
        .leaflet-pane {
          z-index: 5 !important;
        }
        .leaflet-overlay-pane {
          z-index: 6 !important;
        }
        .leaflet-marker-pane {
          z-index: 7 !important;
        }
        .leaflet-tooltip-pane {
          z-index: 8 !important;
        }
        .leaflet-popup-pane {
          z-index: 9 !important;
        }
      `;
      document.head.appendChild(styleElement);
    }
    
    // Nettoyer toute carte existante
    if (mapInstanceRef.current) {
      try {
        mapInstanceRef.current.remove();
      } catch (e) {
        console.error('Erreur lors du nettoyage de la carte:', e);
      }
      mapInstanceRef.current = null;
    }
    
    // Fonction asynchrone pour charger la carte
    const initMap = async () => {
      try {
        // Importer dynamiquement Leaflet
        const L = (await import('leaflet')).default;
        
        // Attendre que le DOM soit prêt
        const mapElement = document.getElementById(id.current);
        if (!mapElement) {
          console.error('Élément de carte non trouvé');
          return;
        }
        
        // Configurer la carte
        const map = L.map(mapElement, {
          zoomControl: true,
          attributionControl: true
        }).setView([city.coordinates.lat, city.coordinates.lon], 13);
        mapInstanceRef.current = map;
        
        // Ajouter le fond de carte OpenStreetMap
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        
        // Créer une icône personnalisée
        const defaultIcon = L.icon({
          iconUrl: '/marker-icon.png', // Utiliser les fichiers locaux que nous avons téléchargés
          iconRetinaUrl: '/marker-icon-2x.png',
          shadowUrl: '/marker-shadow.png',
          iconSize: [25, 41],
          iconAnchor: [12, 41],
          popupAnchor: [1, -34],
          shadowSize: [41, 41]
        });
        
        // Ajouter un marqueur pour la ville
        const marker = L.marker([city.coordinates.lat, city.coordinates.lon], { icon: defaultIcon }).addTo(map);
        marker.bindPopup(`<b>${city.name}</b><br>${department.name} (${department.code})`).openPopup();
        
        // Forcer un redimensionnement après montage
        setTimeout(() => {
          map.invalidateSize();
        }, 300);
        
        setIsMapLoaded(true);
      } catch (error) {
        console.error("Erreur lors du chargement de la carte:", error);
        setMapError("Impossible de charger la carte. Veuillez réessayer plus tard.");
      }
    };
    
    // Laisser le DOM se mettre à jour avant d'initialiser la carte
    const timer = setTimeout(() => {
      initMap();
    }, 100);
    
    // Nettoyer lors du démontage du composant
    return () => {
      clearTimeout(timer);
      
      if (mapInstanceRef.current) {
        try {
          mapInstanceRef.current.remove();
        } catch (e) {
          console.error('Erreur lors du nettoyage de la carte:', e);
        }
        mapInstanceRef.current = null;
      }
    };
  }, [city.coordinates.lat, city.coordinates.lon, city.name, department.name, department.code]);
  
  return (
    <div className="rounded-xl overflow-hidden shadow-lg border border-[var(--silver)]/20">
      <div id={id.current} className="w-full h-[400px] bg-[var(--antiflash-white)] relative">
        {!isMapLoaded && !mapError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-[var(--polynesian-blue)] flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[var(--pumpkin)]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Chargement de la carte...
            </div>
          </div>
        )}
        
        {mapError && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-red-500 bg-red-50 px-4 py-3 rounded-md">
              {mapError}
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 