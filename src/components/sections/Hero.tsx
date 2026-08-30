import React from "react";
import { WhatsAppIcon } from "../ui/icons";
import { ConversionLink } from "../ui/ConversionLink";

type NavClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => void;

export const Hero = ({ onNavClick }: { onNavClick: NavClickHandler }) => {
  return (
    <section
      id="accueil"
      className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Background Image - Mobile */}
      <img
        src="/hero-mobile-tourmaline.jpg"
        alt="Forêt mystique avec énergie spirituelle lumineuse — voyance, numérologie et soins énergétiques Lahochi"
        className="absolute inset-0 w-full h-full object-cover sm:hidden"
        loading="eager"
        fetchPriority="high"
      />

      {/* Background Image - Desktop */}
      <img
        src="/hero-tourma-line.jpg"
        alt="Forêt mystique avec énergie spirituelle lumineuse — voyance, numérologie et soins énergétiques Lahochi"
        className="absolute inset-0 w-full h-full object-cover hidden sm:block"
        loading="eager"
        fetchPriority="high"
      />

      {/* Glowing cosmic circles in the background */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-brand-purple/25 blur-[120px] pointer-events-none animate-pulse-slow z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-emerald-500/15 blur-[140px] pointer-events-none animate-pulse-slow-delay z-0"></div>

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/5 to-black/10 sm:from-black/20 sm:via-black/10 sm:to-black/20 z-0"></div>

      {/* Additional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/5 sm:bg-black/10 z-0"></div>

      {/* Content */}
      <div className="relative z-10 p-4 animate-fadeInUp max-w-5xl">
        <p className="text-sm sm:text-base uppercase tracking-[0.22em] text-white/75 mb-4 drop-shadow-md">
          Tourma-Line · Gerponville · Seine-Maritime
        </p>
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-5 drop-shadow-lg">
          Voyante, numérologue & énergéticienne en Seine-Maritime
        </h1>
        <p className="text-sm sm:text-base md:text-lg lg:text-2xl mb-4 max-w-3xl mx-auto font-light drop-shadow-md">
          Cartomancie, numérologie et soins énergétiques Lahochi au cabinet à Gerponville,
          près de Fécamp et Valmont, ou à distance.
        </p>
        <p className="text-sm sm:text-base md:text-lg mb-8 max-w-3xl mx-auto text-white/85 drop-shadow-md">
          Vous traversez une période de questionnement ? Relation, choix professionnel,
          transition personnelle ou besoin de recentrage : découvrez l'accompagnement qui vous correspond.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 sm:mt-0">
          <ConversionLink kind="booking" placement="hero"
            href="https://cal.com/tourma-line"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-purple hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 active:scale-95 animate-pulse inline-block shadow-lg"
          >
            Découvrir mes accompagnements
          </ConversionLink>
          <ConversionLink kind="whatsapp" placement="hero"
            href="https://wa.me/33649653186"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-full text-lg transition-transform transform hover:scale-105 active:scale-95 inline-block flex items-center justify-center gap-2 shadow-lg"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Contact direct WhatsApp
          </ConversionLink>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden sm:flex flex-col items-center gap-1.5 opacity-70 hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="text-[10px] uppercase tracking-[0.25em] text-white/50">Découvrir</span>
        <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/70 rounded-full animate-scrollIndicator"></div>
        </div>
      </div>
    </section>
  );
};
