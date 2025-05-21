"use client";

import dynamic from 'next/dynamic';

const CookieBanner = dynamic(() => import('@/components/ui/CookieBanner'), { 
  ssr: false 
});

export default function ClientCookieBanner() {
  return <CookieBanner />;
} 