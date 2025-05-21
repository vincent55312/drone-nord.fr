import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import ClientCookieBanner from "@/components/layout/ClientCookieBanner";
// Ces packages doivent être installés avant utilisation
// import { Analytics } from '@vercel/analytics/react';
// import { CookiesProvider } from 'react-cookie';

// Suppression de l'import dynamique qui cause l'erreur
// const CookieBanner = dynamic(() => import('@/components/ui/CookieBanner'), { ssr: false });

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"]
});

export const metadata: Metadata = {
  title: 'Drone Nord | Service de captation vidéo aérienne professionnelle par drone dans le Nord',
  description: 'Drone Nord - Services professionnels de captation vidéo aérienne en 4K par drone dans le Nord et Nord-Pas-de-Calais. Réalisations pour événements, mariages, immobilier et entreprises.',
  keywords: 'drone, vidéo aérienne, photo aérienne, captation drone 4K, Nord, Nord-Pas-de-Calais, Lille, Dunkerque, Valenciennes, mariage, immobilier, entreprise, événement',
  authors: [{ name: 'Drone Nord' }],
  creator: 'Drone Nord',
  publisher: 'Drone Nord',
  metadataBase: new URL("https://www.drone-nord.fr"),
  alternates: {
    canonical: 'https://www.drone-nord.fr'
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://www.drone-nord.fr',
    siteName: 'Drone Nord',
    title: 'Drone Nord | Vidéos aériennes professionnelles par drone dans le Nord',
    description: 'Services de prise de vue aérienne par drone dans le Nord et Nord-Pas-de-Calais. Vidéos 4K Ultra HD et montages professionnels pour tous vos projets.',
    images: [
      {
        url: 'https://www.drone-nord.fr/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Drone Nord - Captation vidéo aérienne professionnelle par drone dans le Nord et Nord-Pas-de-Calais'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Drone Nord | Vidéos aériennes professionnelles par drone dans le Nord',
    description: 'Services de prise de vue aérienne par drone dans le Nord et Nord-Pas-de-Calais. Vidéos 4K Ultra HD pour mariages, immobilier et entreprises.',
    images: ['https://www.drone-nord.fr/og-image.png'],
    creator: '@dronenord'
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://www.drone-nord.fr" />
        <meta name="twitter:title" content="Drone Nord | Service de vidéo et photo par drone dans le Nord" />
        <meta name="twitter:description" content="Captations aériennes professionnelles par drone dans le Nord et Pas-de-Calais. Vidéos, photos, visites virtuelles et inspections techniques pour particuliers et professionnels." />
        <meta name="twitter:image" content="https://www.drone-nord.fr/og-image.png" />
        <meta name="twitter:card" content="summary_large_image" />
        
        {/* Service regions */}
        <meta name="geo.region" content="FR-59" />
        <meta name="geo.region" content="FR-62" />
        <meta name="geo.placename" content="Lille, Dunkerque, Valenciennes, Arras, Lens, Béthune" />
        <meta name="geo.position" content="50.6333;3.0667" />
        <meta name="ICBM" content="50.6333, 3.0667" />

        {/* Méta pour le référencement local */}
        <meta name="description" content="Service professionnel de captation par drone dans le Nord et Pas-de-Calais. Vidéos, photos et prises de vue aériennes par pilotes certifiés. Contactez-nous pour un devis gratuit." />
        <meta name="keywords" content="drone, captation aérienne, vidéo par drone, photo drone, Nord, Pas-de-Calais, Lille, Dunkerque, Valenciennes, pilote drone, prise de vue aérienne" />
      </head>
      {/* <CookiesProvider> */}
        <body className={`${roboto.variable} font-sans antialiased bg-white text-[#0a0f1c]`}>
          <div className="flex flex-col min-h-screen overflow-hidden">
            {children}
            {/* <Analytics /> */}
          </div>
          <ClientCookieBanner />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Vincent Vuylsteker - Drone Nord",
                "image": "https://www.drone-nord.fr/og-image.png",
                "url": "https://www.drone-nord.fr",
                "telephone": "+33745593516",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "1 rue du Drone",
                  "addressLocality": "Lille",
                  "postalCode": "59000",
                  "addressRegion": "Nord",
                  "addressCountry": "FR"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 50.6333,
                  "longitude": 3.0667
                },
                "openingHoursSpecification": [
                  {
                    "@type": "OpeningHoursSpecification",
                    "dayOfWeek": [
                      "Monday",
                      "Tuesday",
                      "Wednesday",
                      "Thursday",
                      "Friday"
                    ],
                    "opens": "09:00",
                    "closes": "18:00"
                  }
                ],
                "priceRange": "€€",
                "description": "Services professionnels de captation aérienne par drone dans le Nord et Nord-Pas-de-Calais"
              })
            }}
          />
        </body>
      {/* </CookiesProvider> */}
    </html>
  );
}
