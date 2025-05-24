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
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
    </svg>
  );

  return (
    <SectionWrapper 
      id="contact" 
      background="primary"
      icon={phoneIcon}
      withTopDivider
      withBottomDivider
    >
      <div className="text-center mb-6 sm:mb-8 animate-fade-in">
        <h2 className="text-[var(--polynesian-blue)] text-2xl sm:text-3xl font-bold mb-3] !important">Contactez notre équipe de pilotes drone</h2>
        <p className="text-base max-w-3xl mx-auto text-[var(--bice-blue)] !important">
          Vous avez un projet de captation aérienne par drone à Lille, Dunkerque, Valenciennes ou ailleurs dans le Nord ? Nous sommes là pour vous accompagner et répondre à toutes vos questions.
        </p>
      </div>
      
      <div 
        className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-6 items-start"
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
          className="md:col-span-3 bg-white rounded-lg shadow-lg p-4 sm:p-6 transition-all duration-700 opacity-100 transform translate-y-0 border border-[var(--silver)]/10 relative overflow-hidden"
          style={{ animationDelay: "0.3s" }}
        >
          {/* Accent element */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--polynesian-blue)] to-[var(--pumpkin)]"></div>
          
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center py-6 text-center">
              <div className="w-12 h-12 bg-[var(--pumpkin)]/10 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-[var(--pumpkin)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-[var(--polynesian-blue)] mb-2">Message envoyé !</h3>
              <p className="text-sm text-[var(--bice-blue)] mb-6 max-w-md">
                Nous avons bien reçu votre message et vous répondrons dans les plus brefs délais. Merci de nous avoir contactés pour votre projet de captation par drone !
              </p>
              <button
                onClick={resetForm}
                className="bg-gradient-to-r from-[var(--polynesian-blue)] to-[var(--bice-blue)] text-[var(--antiflash-white)] py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-[var(--polynesian-blue)]/25 hover:translate-y-[-2px] transition-all duration-300 text-sm font-semibold flex items-center justify-center"
                aria-label="Envoyer un nouveau message pour un projet de drone"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
                </svg>
                Envoyer un nouveau message
              </button>
            </div>
          ) : (
            <>
              <h3 className="text-lg font-semibold mb-4 text-[var(--polynesian-blue)] flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-[var(--pumpkin)]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Demande de devis ou d&apos;informations
              </h3>
              
              <form 
                onSubmit={handleSubmit} 
                className="space-y-3"
                aria-label="Formulaire de contact pour services de drone dans le Nord"
                itemProp="potentialAction" 
                itemScope 
                itemType="https://schema.org/CommunicateAction"
              >
                <meta itemProp="name" content="Vincent Vuylsteker - Drone Nord" />
                <input type="hidden" name="access_key" value="bc35668d-34eb-4e7b-a512-1f25bd30c9aa" />
                <input type="hidden" name="subject" value="Nouveau message depuis Drone Nord" />
                <input type="hidden" name="from_name" value="Vincent Vuylsteker - Drone Nord" />
                <input type="checkbox" name="botcheck" style={{ display: 'none' }} />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-[var(--bice-blue)] mb-1">Nom</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-2 border border-[var(--silver)]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--pumpkin)]/50 focus:border-[var(--pumpkin)] transition-all text-[var(--polynesian-blue)] font-medium placeholder:text-[var(--bice-blue)]/70"
                      placeholder="Votre nom"
                      required
                      aria-required="true"
                      itemProp="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-[var(--bice-blue)] mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full p-2 border border-[var(--silver)]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--pumpkin)]/50 focus:border-[var(--pumpkin)] transition-all text-[var(--polynesian-blue)] font-medium placeholder:text-[var(--bice-blue)]/70"
                      placeholder="votre@email.com"
                      required
                      aria-required="true"
                      itemProp="email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-xs font-medium text-[var(--bice-blue)] mb-1">Sujet</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full p-2 border border-[var(--silver)]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--pumpkin)]/50 focus:border-[var(--pumpkin)] transition-all text-[var(--polynesian-blue)] font-medium placeholder:text-[var(--bice-blue)]/70"
                    placeholder="Devis pour captation vidéo par drone"
                    required
                    aria-required="true"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-xs font-medium text-[var(--bice-blue)] mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full p-2 border border-[var(--silver)]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--pumpkin)]/50 focus:border-[var(--pumpkin)] transition-all text-[var(--polynesian-blue)] font-medium placeholder:text-[var(--bice-blue)]/70"
                    placeholder="Décrivez votre projet de captation par drone (lieu, date, type d&apos;événement...)"
                    required
                    aria-required="true"
                    itemProp="description"
                  ></textarea>
                </div>
                
                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[var(--polynesian-blue)] to-[var(--bice-blue)] text-[var(--antiflash-white)] py-2 px-4 rounded-lg hover:shadow-lg hover:shadow-[var(--polynesian-blue)]/25 hover:translate-y-[-2px] transition-all duration-300 text-sm font-semibold flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed"
                    aria-label="Envoyer votre demande de devis pour captation par drone"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 mr-2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                        </svg>
                        Envoyer la demande
                      </>
                    )}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
        
        {/* Coordonnées */}
        <div
          className="md:col-span-2 space-y-4 transition-all duration-700 opacity-100 transform translate-y-0"
          style={{ animationDelay: "0.5s" }}
          itemProp="location" 
          itemScope 
          itemType="https://schema.org/Place"
        >
          <div className="bg-white rounded-lg shadow-lg p-4 border border-[var(--silver)]/10 relative overflow-hidden">
            {/* Accent element */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--pumpkin)] to-[var(--polynesian-blue)]"></div>
            
            <h3 className="text-lg font-semibold mb-3 text-[var(--polynesian-blue)] flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-[var(--pumpkin)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
              </svg>
              Nos coordonnées
            </h3>
            
            <div className="space-y-3 text-sm">
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[var(--bice-blue)] mr-3 shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <div itemProp="address" itemScope itemType="https://schema.org/PostalAddress">
                  <p className="text-[var(--bice-blue)]">
                    <span itemProp="addressRegion">Nord-Pas-de-Calais</span> - 
                    Déplacement sur l&apos;ensemble de la région des <span itemProp="addressLocality">Hauts-de-France</span>
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[var(--bice-blue)] mr-3 shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <div>
                  <p className="text-[var(--bice-blue)]">
                    <a 
                      href="tel:+33745593516" 
                      className="hover:text-[var(--pumpkin)] transition-colors duration-300"
                      itemProp="telephone"
                    >
                      07 45 59 35 16
                    </a>
                  </p>
                  <p className="text-[var(--bice-blue)]/70 text-xs">
                    Du lundi au samedi de 9h à 19h
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[var(--bice-blue)] mr-3 shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <div>
                  <p className="text-[var(--bice-blue)]">
                    <a 
                      href="mailto:contact@drone-nord.fr" 
                      className="hover:text-[var(--pumpkin)] transition-colors duration-300"
                      itemProp="email"
                    >
                      contact@drone-nord.fr
                    </a>
                  </p>
                  <p className="text-[var(--bice-blue)]/70 text-xs">
                    Réponse rapide
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-4 border border-[var(--silver)]/10 relative overflow-hidden">
            {/* Accent element */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--polynesian-blue)] to-[var(--pumpkin)]"></div>
            
            <h3 className="text-lg font-semibold mb-3 text-[var(--polynesian-blue)] flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-[var(--pumpkin)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Pourquoi nous contacter ?
            </h3>
            
            <ul className="space-y-2 text-sm text-[var(--bice-blue)]">
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[var(--pumpkin)] mr-2 shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                Obtenir un devis personnalisé
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[var(--pumpkin)] mr-2 shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                Planifier une captation par drone
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[var(--pumpkin)] mr-2 shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                Discuter de votre projet immobilier
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[var(--pumpkin)] mr-2 shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                Organiser la captation de votre mariage
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-[var(--pumpkin)] mr-2 shrink-0 mt-0.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
                Demander des renseignements techniques
              </li>
            </ul>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-sm text-[var(--bice-blue)]/70">
          <strong className="font-medium text-[var(--polynesian-blue)]">Drone Nord</strong> - Services professionnels de captation aérienne par drone dans tout le Nord de la France.
        </p>
      </div>
    </SectionWrapper>
  );
} 