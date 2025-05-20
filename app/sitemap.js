export default function sitemap() {
  const currentDate = new Date().toISOString();
  
  return [
    {
      url: 'https://www.drone-nord.fr',
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 1.0,
    }
  ];
} 