import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import DefaultHeader from "@/components/layout/DefaultHeader";
import Footer from "@/components/layout/Footer";
// Ces packages doivent être installés avant utilisation
// import { Analytics } from '@vercel/analytics/react';
// import { CookiesProvider } from 'react-cookie';

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
  metadataBase: new URL("https://drone-nord.fr"),
  alternates: {
    canonical: 'https://drone-nord.fr'
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://drone-nord.fr',
    siteName: 'Drone Nord',
    title: 'Drone Nord | Vidéos aériennes professionnelles par drone dans le Nord',
    description: 'Services de prise de vue aérienne par drone dans le Nord et Nord-Pas-de-Calais. Vidéos 4K Ultra HD et montages professionnels pour tous vos projets.',
    images: [
      {
        url: 'https://drone-nord.fr/og-image.png',
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
    images: ['https://drone-nord.fr/og-image.png'],
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
        <link rel="canonical" href="https://drone-nord.fr" />
      </head>
      {/* <CookiesProvider> */}
        <body className={`${roboto.variable} font-sans antialiased bg-white text-[#0a0f1c]`}>
          <div className="flex flex-col min-h-screen overflow-hidden">
            {children}
            {/* <Analytics /> */}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Drone Nord",
                "image": "https://drone-nord.fr/og-image.png",
                "description": "Service professionnel de captation vidéo et photo aérienne par drone dans le Nord et Nord-Pas-de-Calais. Vidéos 4K Ultra HD et montages professionnels.",
                "url": "https://drone-nord.fr",
                "telephone": "+33600000000",
                "email": "contact@drone-nord.fr",
                "address": {
                  "@type": "PostalAddress",
                  "addressRegion": "Nord et Nord-Pas-de-Calais",
                  "addressCountry": "FR"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 50.6333,
                  "longitude": 3.0667
                },
                "priceRange": "€€",
                "serviceArea": {
                  "@type": "GeoCircle",
                  "geoMidpoint": {
                    "@type": "GeoCoordinates",
                    "latitude": 50.6333,
                    "longitude": 3.0667
                  },
                  "geoRadius": "100000"
                },
                "sameAs": [
                  "https://www.facebook.com/dronenord",
                  "https://www.instagram.com/drone_nord"
                ],
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                    "Sunday"
                  ],
                  "opens": "08:00",
                  "closes": "20:00"
                }
              })
            }}
          />
        </body>
      {/* </CookiesProvider> */}
    </html>
  );
}
