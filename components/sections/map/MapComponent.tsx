"use client";

import React, { useEffect, useRef } from 'react';
import { MapContainer, TileLayer, GeoJSON, ZoomControl, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import type { FeatureCollection, Feature, Geometry } from 'geojson';

// Types pour les départements
interface Department {
  id: string;
  name: string;
  slug: string;
  mainCities: string[];
  color: string;
}

// Types pour les props du composant
interface MapComponentProps {
  geoJson: any;
  departments: Department[];
  selectedDept: string | null;
  setSelectedDept: (id: string | null) => void;
}

// Type pour la couche Leaflet
interface LeafletLayer {
  setStyle: (style: any) => void;
}

// Composant pour désactiver les interactions sur mobile
function DisableMapInteractions() {
  const map = useMap();
  
  useEffect(() => {
    // Vérifie si l'appareil est mobile
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      typeof navigator !== 'undefined' ? navigator.userAgent : ''
    );
    
    if (isMobile) {
      map.dragging.disable();
      map.touchZoom.disable();
      map.doubleClickZoom.disable();
      map.scrollWheelZoom.disable();
      map.boxZoom.disable();
      map.keyboard.disable();
    }
    
    map.scrollWheelZoom.disable(); // Désactiver le zoom par défilement sur tous les appareils
  }, [map]);
  
  return null;
}

const MapComponent: React.FC<MapComponentProps> = ({ 
  geoJson, 
  departments, 
  selectedDept, 
  setSelectedDept 
}) => {
  const geoJsonLayerRef = useRef<any>(null);

  // Convertir les codes couleur CSS en codes hexadécimaux pour Leaflet
  const getHexColor = (cssVar: string): string => {
    switch (cssVar) {
      case 'var(--bice-blue)': return '#3a6ea5';
      case 'var(--polynesian-blue)': return '#004e98';
      case 'var(--pumpkin)': return '#ff6700';
      case 'var(--silver)': return '#c0c0c0';
      default: return '#c0c0c0';
    }
  };

  // Style de chaque département sur la carte
  const geoJSONStyle = (feature: Feature | null): any => {
    if (!feature) {
      // Style par défaut si pas de feature
      return {
        fillColor: '#c0c0c0',
        weight: 1,
        opacity: 1,
        color: '#fff',
        fillOpacity: 0.3
      };
    }

    const deptId = feature.properties?.code;
    const dept = departments.find(d => d.id === deptId);
    const isSelected = selectedDept === deptId;

    return {
      fillColor: dept ? getHexColor(dept.color) : '#c0c0c0',
      weight: isSelected ? 3 : 1,
      opacity: 1,
      color: '#fff',
      fillOpacity: isSelected ? 0.7 : 0.3
    };
  };

  // Interactions avec les polygones GeoJSON
  const onEachFeature = (feature: Feature, layer: any): void => {
    const deptId = feature.properties?.code;
    const dept = departments.find(d => d.id === deptId);

    if (dept) {
      layer.on({
        click: () => {
          setSelectedDept(selectedDept === deptId ? null : deptId);
        },
        mouseover: (e: any) => {
          const layer = e.target;
          layer.setStyle({
            fillOpacity: 0.7,
            weight: 3
          });
        },
        mouseout: (e: any) => {
          const layer = e.target;
          if (selectedDept !== deptId) {
            layer.setStyle({
              fillOpacity: 0.3,
              weight: 1
            });
          }
        }
      });
    }
  };

  return (
    <div style={{ height: '100%', width: '100%', position: 'relative', zIndex: 0 }}>
      <MapContainer 
        center={[50.1, 2.5]} 
        zoom={7} 
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
      >
        <DisableMapInteractions />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <GeoJSON
          data={geoJson}
          style={geoJSONStyle}
          onEachFeature={onEachFeature}
          ref={geoJsonLayerRef}
        />
        <ZoomControl position="bottomright" />
      </MapContainer>
    </div>
  );
};

export default MapComponent; 