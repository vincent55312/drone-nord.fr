const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const services = require('../data/services.json');

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

  // Combiner toutes les pages
  const allPages = [...staticPagesWithDates, ...servicePages];

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