/**
 * Ce fichier n'est plus utilisé pour la génération du sitemap.
 * 
 * Le sitemap.xml est maintenant généré statiquement lors du build 
 * par le script scripts/generate-sitemap.js qui utilise les dates
 * de dernière modification réelles des fichiers.
 * 
 * Voir le script de build dans package.json.
 */

import services from "@/data/services.json";

export default function sitemap() {
  const currentDate = new Date().toISOString();
  
  // Pages statiques principales
  const staticPages = [
    {
      url: 'https://www.drone-nord.fr',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: 'https://www.drone-nord.fr/services',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: 'https://www.drone-nord.fr/contact',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: 'https://www.drone-nord.fr/mentions-legales',
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://www.drone-nord.fr/politique-confidentialite',
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://www.drone-nord.fr/cgv',
      lastModified: currentDate,
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];
  
  // Pages de services dynamiques générées à partir des slugs
  const servicePages = services.map((service) => ({
    url: `https://www.drone-nord.fr/${service.slug}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));
  
  return [...staticPages, ...servicePages];
} 