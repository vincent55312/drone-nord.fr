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
      background="light"
      icon={phoneIcon}
      withTopDivider
      withBottomDivider
    >
      <div className="text-center mb-6 sm:mb-8 animate-fade-in">
        <h2 className="text-white text-2xl sm:text-3xl font-bold mb-3] !important">Contactez notre équipe de pilotes drone</h2>
        <p className="text-base max-w-3xl mx-auto text-white !important">
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
          className="md:col-span-3 bg-white rounded-lg shadow-lg p-4 sm:p-6 animate-fade-in border border-[var(--silver)]/10 relative overflow-hidden"
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
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-[var(--bice-blue)] mb-1">Nom</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full p-2 border border-[var(--silver)]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--pumpkin)]/50 focus:border-[var(--pumpkin)] transition-all"
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
                      className="w-full p-2 border border-[var(--silver)]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--pumpkin)]/50 focus:border-[var(--pumpkin)] transition-all"
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
                    className="w-full p-2 border border-[var(--silver)]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--pumpkin)]/50 focus:border-[var(--pumpkin)] transition-all"
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
                    className="w-full p-2 border border-[var(--silver)]/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--pumpkin)]/50 focus:border-[var(--pumpkin)] transition-all"
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
          className="md:col-span-2 space-y-4 animate-fade-in"
          style={{ animationDelay: "0.5s" }}
          itemScope
          itemType="https://schema.org/Organization"
        >
          <meta itemProp="name" content="Vincent Vuylsteker - Drone Nord" />
          <div className="bg-white rounded-lg shadow-lg p-4 border border-[var(--silver)]/10 relative overflow-hidden">
            {/* Accent element */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--pumpkin)] to-[var(--bice-blue)]"></div>
            
            <h3 className="text-lg font-semibold mb-4 text-[var(--polynesian-blue)] flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-[var(--pumpkin)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Coordonnées de contact
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start transition-all hover:translate-x-1 duration-200">
                <div className="bg-[var(--antiflash-white)] p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[var(--pumpkin)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-[var(--polynesian-blue)]">Email</h4>
                  <a 
                    href="mailto:contact@drone-nord.fr" 
                    className="text-[var(--bice-blue)] text-sm hover:text-[var(--pumpkin)] transition-colors"
                    itemProp="email"
                  >
                    contact@drone-nord.fr
                  </a>
                </div>
              </div>
              
              <div className="flex items-start transition-all hover:translate-x-1 duration-200">
                <div className="bg-[var(--antiflash-white)] p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[var(--pumpkin)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-[var(--polynesian-blue)]">Téléphone</h4>
                  <a 
                    href="tel:+33612345678" 
                    className="text-[var(--bice-blue)] text-sm hover:text-[var(--pumpkin)] transition-colors"
                    itemProp="telephone"
                  >
                    06 12 34 56 78
                  </a>
                </div>
              </div>
              
              <div className="flex items-start transition-all hover:translate-x-1 duration-200">
                <div className="bg-[var(--antiflash-white)] p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[var(--pumpkin)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <div itemScope itemType="https://schema.org/PostalAddress">
                  <h4 className="font-medium text-sm text-[var(--polynesian-blue)]">Adresse</h4>
                  <p 
                    className="text-[var(--bice-blue)] text-sm"
                  >
                    <span itemProp="streetAddress">123 Rue des Drones</span><br />
                    <span itemProp="postalCode">59000</span> <span itemProp="addressLocality">Lille</span><br />
                    <span itemProp="addressCountry">France</span>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start transition-all hover:translate-x-1 duration-200">
                <div className="bg-[var(--antiflash-white)] p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-[var(--pumpkin)]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-sm text-[var(--polynesian-blue)]">Horaires</h4>
                  <p className="text-[var(--bice-blue)] text-sm">
                    Lundi - Vendredi: 9h - 18h<br />
                    Samedi: 10h - 16h<br />
                    Dimanche: Fermé
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-4 border border-[var(--silver)]/10 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[var(--bice-blue)] to-[var(--polynesian-blue)]"></div>
            
            <h3 className="text-lg font-semibold mb-3 text-[var(--polynesian-blue)] flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2 text-[var(--pumpkin)]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
              </svg>
              Notre qualité de service
            </h3>
            
            <div className="flex flex-wrap justify-between mb-2">
              <div className="flex items-center">
                <span className="text-xs font-medium text-[var(--bice-blue)]">Satisfaction client</span>
                <div className="flex ml-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[var(--pumpkin)]">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="text-xs text-[var(--bice-blue)]">5/5</div>
            </div>
            
            <div className="flex flex-wrap justify-between mb-2">
              <div className="flex items-center">
                <span className="text-xs font-medium text-[var(--bice-blue)]">Qualité de l&apos;image</span>
                <div className="flex ml-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[var(--pumpkin)]">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="text-xs text-[var(--bice-blue)]">5/5</div>
            </div>
            
            <div className="flex flex-wrap justify-between">
              <div className="flex items-center">
                <span className="text-xs font-medium text-[var(--bice-blue)]">Respect des délais</span>
                <div className="flex ml-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[var(--pumpkin)]">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
              </div>
              <div className="text-xs text-[var(--bice-blue)]">5/5</div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
} 