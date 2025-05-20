export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://www.drone-nord.fr/sitemap.xml",
    host: "https://www.drone-nord.fr",
  };
} 