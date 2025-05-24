const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const services = require('../data/services.json');

// Définition des départements supportés
const ALLOWED_DEPARTMENTS = [
  { code: "59", name: "Nord", slug: "nord" },
  { code: "62", name: "Pas-de-Calais", slug: "pas-de-calais" },
  { code: "80", name: "Somme", slug: "somme" },
  { code: "76", name: "Seine-Maritime", slug: "seine-maritime" }
];

// Fonction pour obtenir la date de dernière modification réelle d'un fichier
function getLastModifiedDate(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.mtime.toISOString();
  } catch (e) {
    console.log(`Erreur lors de la récupération de la date pour ${filePath}:`, e);
    return new Date().toISOString();
  }
}

async function generateSitemap() {
  // Récupère la date de dernière modification des fichiers de pages statiques
  const pagesDir = path.join(process.cwd(), 'app');
  
  // Pages statiques principales et leurs fichiers associés
  const staticPages = [
    {
      url: 'https://www.drone-nord.fr',
      filePath: path.join(pagesDir, 'page.tsx'),
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: 'https://www.drone-nord.fr/services',
      filePath: path.join(pagesDir, 'services', 'page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    /* La page contact est en fait une section de la page d'accueil 
    {
      url: 'https://www.drone-nord.fr/contact',
      filePath: path.join(pagesDir, 'contact', 'page.tsx'),
      changeFrequency: 'monthly',
      priority: 0.8,
    }, */
    {
      url: 'https://www.drone-nord.fr/mentions-legales',
      filePath: path.join(pagesDir, 'mentions-legales', 'page.tsx'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://www.drone-nord.fr/politique-confidentialite',
      filePath: path.join(pagesDir, 'politique-confidentialite', 'page.tsx'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: 'https://www.drone-nord.fr/cgv',
      filePath: path.join(pagesDir, 'cgv', 'page.tsx'),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ];

  // Récupérer les dates de dernière modification des pages statiques
  const staticPagesWithDates = staticPages.map(page => ({
    ...page,
    lastModified: getLastModifiedDate(page.filePath),
  }));

  // Date de dernière modification pour les pages de services
  // Utilisons la date du fichier de modèle de service dynamique
  const servicePageTemplatePath = path.join(pagesDir, '[slug]', 'page.tsx');
  const serviceLastModified = getLastModifiedDate(servicePageTemplatePath);
  
  // Générer les entrées pour les pages de services
  const servicePages = services.map(service => ({
    url: `https://www.drone-nord.fr/${service.slug}`,
    lastModified: serviceLastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));
  
  // Date de dernière modification pour les pages de départements et villes
  const departmentPageTemplatePath = path.join(pagesDir, 'drone', '[departement]', 'page.tsx');
  const departmentLastModified = getLastModifiedDate(departmentPageTemplatePath);
  
  const cityPageTemplatePath = path.join(pagesDir, 'drone', '[departement]', '[city]', 'page.tsx');
  const cityLastModified = getLastModifiedDate(cityPageTemplatePath);
  
  // Générer les entrées pour les pages de départements
  const departmentPages = ALLOWED_DEPARTMENTS.map(dept => ({
    url: `https://www.drone-nord.fr/drone/${dept.slug}`,
    lastModified: departmentLastModified,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));
  
  // Générer les entrées pour les pages de villes
  let cityPages = [];
  try {
    const citiesFilePath = path.join(process.cwd(), 'public', 'french-cities.json');
    const citiesContent = fs.readFileSync(citiesFilePath, 'utf8');
    const citiesData = JSON.parse(citiesContent);
    
    // Pour chaque département supporté, récupérer les villes correspondantes
    for (const dept of ALLOWED_DEPARTMENTS) {
      // Vérifier si le département existe dans les données
      if (citiesData[dept.code] && citiesData[dept.code].cities) {
        const departmentCities = citiesData[dept.code].cities;
        
        // Ajouter chaque ville au sitemap
        const deptCityPages = departmentCities.map(city => ({
          url: `https://www.drone-nord.fr/drone/${dept.slug}/${city.slug}`,
          lastModified: cityLastModified,
          changeFrequency: 'monthly',
          priority: 0.7,
        }));
        
        cityPages = [...cityPages, ...deptCityPages];
      }
    }
  } catch (error) {
    console.error('Error reading french-cities.json:', error);
  }

  // Combiner toutes les pages
  const allPages = [...staticPagesWithDates, ...servicePages, ...departmentPages, ...cityPages];

  // Générer le XML du sitemap
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${allPages
    .map(page => {
      return `
  <url>
    <loc>${page.url}</loc>
    <lastmod>${page.lastModified}</lastmod>
    <changefreq>${page.changeFrequency}</changefreq>
    <priority>${page.priority}</priority>
  </url>
  `;
    })
    .join('')}
</urlset>`;

  // Formater le XML avec prettier
  const formattedSitemap = await prettier.format(sitemap, {
    parser: 'html',
    printWidth: 120,
  });

  // Créer le répertoire public s'il n'existe pas
  const publicDir = path.join(process.cwd(), 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }

  // Écrire le fichier sitemap.xml
  fs.writeFileSync(path.join(publicDir, 'sitemap.xml'), formattedSitemap);

  console.log('✅ Sitemap généré avec succès dans public/sitemap.xml');
}

// Exécuter la génération du sitemap
generateSitemap().catch(err => {
  console.error('❌ Erreur lors de la génération du sitemap:', err);
  process.exit(1);
}); 