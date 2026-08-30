import React from "react";
import { PhoneIcon, WhatsAppIcon } from "../ui/icons";
import { ConversionLink } from "../ui/ConversionLink";

type NavClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => void;

export const Hero = ({ onNavClick: _onNavClick }: { onNavClick: NavClickHandler }) => {
  return (
    <section
      id="accueil"
      className="relative min-h-[100svh] flex items-center justify-center text-center text-white overflow-hidden"
    >
      <img
        src="/hero-mobile-tourmaline.jpg"
        alt="Forêt mystique avec énergie spirituelle lumineuse — voyance, numérologie et soins énergétiques Lahochi"
        className="absolute inset-0 w-full h-full object-cover sm:hidden"
        loading="eager"
        fetchPriority="high"
      />

      <img
        src="/hero-tourma-line.jpg"
        alt="Forêt mystique avec énergie spirituelle lumineuse — voyance, numérologie et soins énergétiques Lahochi"
        className="absolute inset-0 w-full h-full object-cover hidden sm:block"
        loading="eager"
        fetchPriority="high"
      />

      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-brand-purple/25 blur-[120px] pointer-events-none animate-pulse-slow z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-emerald-500/15 blur-[140px] pointer-events-none animate-pulse-slow-delay z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-black/10 to-black/20 sm:from-black/30 sm:via-black/20 sm:to-black/30 z-0"></div>
      <div className="absolute inset-0 bg-black/10 sm:bg-black/15 z-0"></div>

      <div className="relative z-10 px-4 py-24 sm:py-20 animate-fadeInUp max-w-5xl">
        <p className="text-sm sm:text-base uppercase tracking-[0.22em] text-white/80 mb-4 drop-shadow-md">
          Line Simon · Cabinet à Gerponville · près de Fécamp
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-5 drop-shadow-lg">
          Voyante & cartomancienne près de Fécamp en Seine-Maritime
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl mb-4 max-w-3xl mx-auto font-medium drop-shadow-md">
          Une relation vous questionne ? Un choix professionnel vous bloque ? Vous traversez une période où les mêmes questions reviennent sans réponse ?
        </p>
        <p className="text-sm sm:text-base md:text-lg mb-3 max-w-3xl mx-auto text-white/90 drop-shadow-md">
          Je vous accompagne par la cartomancie et la numérologie pour mettre des mots sur ce que vous vivez,
          comprendre ce qui se répète et retrouver un cap. Séances au cabinet à Gerponville, près de Fécamp et Valmont, ou à distance.
        </p>
        <p className="text-xs sm:text-sm md:text-base mb-8 max-w-2xl mx-auto text-white/75 drop-shadow-md">
          Le Lahochi est également proposé comme un temps de détente et de recentrage.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <ConversionLink
            kind="booking"
            placement="hero"
            href="https://cal.com/tourma-line"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-purple hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 active:scale-95 animate-pulse inline-block shadow-lg min-w-[220px]"
          >
            Prendre rendez-vous
          </ConversionLink>
          <ConversionLink
            kind="whatsapp"
            placement="hero"
            href="https://wa.me/33649653186"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-transform transform hover:scale-105 active:scale-95 inline-flex items-center justify-center gap-2 shadow-lg min-w-[220px]"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Poser une question
          </ConversionLink>
        </div>

        <ConversionLink
          kind="phone"
          placement="hero-phone"
          href="tel:+33649653186"
          className="mt-5 inline-flex items-center justify-center gap-2 text-sm sm:text-base text-white/85 hover:text-white underline underline-offset-4 transition-colors"
        >
          <PhoneIcon className="w-4 h-4" />
          Appeler Line · 06 49 65 31 86
        </ConversionLink>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">Découvrir</span>
        <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/70 rounded-full animate-scrollIndicator"></div>
        </div>
      </div>
    </section>
  );
};
