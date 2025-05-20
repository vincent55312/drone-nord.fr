"use client";
import React, { useState, FormEvent } from 'react';
import SectionWrapper from '@/components/ui/SectionWrapper';

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setIsSubmitted(false);
  };

  const phoneIcon = (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );

  return (
    <SectionWrapper 
      id="contact" 
      background="light"
      icon={phoneIcon}
      withTopDivider
      withBottomDivider
    >
      <div className="text-center mb-12 animate-fade-in">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[var(--polynesian-blue)]">Contactez notre équipe de pilotes drone</h2>
        <p className="text-lg max-w-3xl mx-auto text-[var(--bice-blue)]">
          Vous avez un projet de captation aérienne par drone à Lille, Dunkerque, Valenciennes ou ailleurs dans le Nord ? Nous sommes là pour vous accompagner et répondre à toutes vos questions.
        </p>
      </div>
      
      <div 
        className="grid grid-cols-1 md:grid-cols-5 gap-6 lg:gap-10 items-start"
        itemScope
        itemType="https://schema.org/LocalBusiness"
      >
        <meta itemProp="name" content="Drone Nord" />
        <meta itemProp="description" content="Services professionnels de captation aérienne par drone dans le Nord et Nord-Pas-de-Calais" />
        <meta itemProp="url" content="https://www.drone-nord.fr" />
        <meta itemProp="image" content="https://www.drone-nord.fr/og-image.png" />
        <meta itemProp="priceRange" content="€€" />
        
        {/* Contact Form */}
        <div
          className="md:col-span-3 bg-white rounded-xl shadow-lg p-6 md:p-8 animate-fade-in border border-[var(--silver)]/10 relative overflow-hidden"
          style={{ animationDelay: "0.3s" }}
        >
          {/* Accent element */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--polynesian-blue)] to-[var(--pumpkin)]"></div>
          
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-8 text-center">
              <div className="w-16 h-16 bg-[var(--pumpkin)]/10 rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-[var(--pumpkin)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-[var(--polynesian-blue)] mb-3">Message envoyé !</h3>
              <p className="text-[var(--bice-blue)] mb-8 max-w-md">
                Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais. Merci de nous avoir contactés pour votre projet de captation par drone !
              </p>
              <button
                onClick={resetForm}
                className="bg-gradient-to-r from-[var(--polynesian-blue)] to-[var(--bice-blue)] text-[var(--antiflash-white)] py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-[var(--polynesian-blue)]/25 hover:translate-y-[-2px] transition-all duration-300 font-semibold flex items-center justify-center"
                aria-label="Envoyer un nouveau message pour un projet de drone"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                Envoyer un nouveau message
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-xl font-semibold mb-6 text-[var(--polynesian-blue)] flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-[var(--pumpkin)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Demande de devis ou d&apos;informations
              </h3>
              
              <form 
                onSubmit={handleSubmit} 
                className="space-y-4"
                aria-label="Formulaire de contact pour services de drone dans le Nord"
                itemProp="potentialAction" 
                itemScope 
                itemType="https://schema.org/CommunicateAction"
              >
                <meta itemProp="name" content="Formulaire de contact Drone Nord" />
                <input type="hidden" name="access_key" value="bc35668d-34eb-4e7b-a512-1f25bd30c9aa" />
                <input type="hidden" name="subject" value="Nouveau message depuis Drone Nord" />
                <input type="hidden" name="from_name" value="Drone Nord" />
                <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
                
                <style jsx>{`
                  ::placeholder {
                    color: var(--bice-blue);
                    opacity: 0.7;
                  }
                  
                  input, textarea {
                    color: var(--polynesian-blue);
                    font-weight: 500;
                  }
                `}</style>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-[var(--bice-blue)] mb-1">Nom</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-3 border border-[var(--silver)]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--pumpkin)]/50 focus:border-[var(--pumpkin)] transition-all"
                      placeholder="Votre nom"
                      required
                      aria-required="true"
                      itemProp="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-[var(--bice-blue)] mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-3 border border-[var(--silver)]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--pumpkin)]/50 focus:border-[var(--pumpkin)] transition-all"
                      placeholder="votre@email.com"
                      required
                      aria-required="true"
                      itemProp="email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-[var(--bice-blue)] mb-1">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full p-3 border border-[var(--silver)]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--pumpkin)]/50 focus:border-[var(--pumpkin)] transition-all"
                    placeholder="Devis pour captation vidéo par drone"
                    required
                    aria-required="true"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[var(--bice-blue)] mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full p-3 border border-[var(--silver)]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--pumpkin)]/50 focus:border-[var(--pumpkin)] transition-all"
                    placeholder="Décrivez votre projet de captation par drone (lieu, date, type d&apos;événement...)"
                    required
                    aria-required="true"
                    itemProp="description"
                  ></textarea>
                </div>
                
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[var(--polynesian-blue)] to-[var(--bice-blue)] text-[var(--antiflash-white)] py-3 px-6 rounded-lg hover:shadow-lg hover:shadow-[var(--polynesian-blue)]/25 hover:translate-y-[-2px] transition-all duration-300 font-semibold flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                    aria-label="Envoyer votre demande de devis pour captation par drone"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                        Envoyer ma demande
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
        
        {/* Contact Information */}
        <div
          className="md:col-span-2 space-y-6 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
          itemScope
          itemType="https://schema.org/Organization"
        >
          <div className="bg-white rounded-xl shadow-lg p-6 border border-[var(--silver)]/10 relative overflow-hidden">
            {/* Accent element */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--pumpkin)] to-[var(--bice-blue)]"></div>
            
            <h3 className="text-xl font-semibold mb-6 text-[var(--polynesian-blue)] flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-[var(--pumpkin)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Coordonnées de contact
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start transition-all hover:translate-x-1 duration-200">
                <div className="bg-[var(--antiflash-white)] p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[var(--pumpkin)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[var(--polynesian-blue)]">Email</h4>
                  <a 
                    href="mailto:contact@drone-nord.fr" 
                    className="text-[var(--bice-blue)] hover:text-[var(--pumpkin)] transition-colors"
                    itemProp="email"
                  >
                    contact@drone-nord.fr
                  </a>
                </div>
              </div>
              
              <div className="flex items-start transition-all hover:translate-x-1 duration-200">
                <div className="bg-[var(--antiflash-white)] p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[var(--pumpkin)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25Z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-[var(--polynesian-blue)]">Téléphone</h4>
                  <a 
                    href="tel:+33600000000" 
                    className="text-[var(--bice-blue)] hover:text-[var(--pumpkin)] transition-colors"
                    itemProp="telephone"
                  >
                    +33 6 00 00 00 00
                  </a>
                </div>
              </div>
              
              <div className="flex items-start transition-all hover:translate-x-1 duration-200">
                <div className="bg-[var(--antiflash-white)] p-3 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[var(--pumpkin)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <h4 className="font-medium text-[var(--polynesian-blue)]">Zone d&apos;intervention</h4>
                  <p className="text-[var(--bice-blue)]">
                    <span itemProp="addressRegion">Nord et Nord-Pas-de-Calais</span>
                  </p>
                  <meta itemProp="addressCountry" content="FR" />
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-[var(--polynesian-blue)] to-[var(--bice-blue)] text-[var(--antiflash-white)] rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 backdrop-blur-sm relative">
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3 flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 text-[var(--pumpkin)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                  </svg>
                  Besoin d&apos;un devis rapide ?
                </h3>
                <p className="mb-4 opacity-90">
                  Nous intervenons pour tous vos projets de captation vidéo par drone dans le Nord et le Nord-Pas-de-Calais.
                </p>
                <a 
                  href="tel:+33600000000" 
                  className="inline-flex items-center gap-2 bg-[var(--pumpkin)] py-2 px-4 rounded-lg text-white font-semibold hover:bg-[var(--pumpkin)]/90 transition-all hover:shadow-md hover:translate-y-[-2px]"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25Z" />
                  </svg>
                  Appelez-nous maintenant
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
} 