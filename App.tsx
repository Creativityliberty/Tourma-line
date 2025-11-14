



import { GoogleGenAI } from "@google/genai";
import React, { useEffect, useRef, useState } from "react";

// --- HELPER COMPONENT for Scroll Animations ---
type AnimateOnScrollProps = {
  animationClass?: string;
  threshold?: number;
  delay?: number;
  children?: React.ReactNode;
};
// FIX: Changed component to be of type React.FC to correctly handle React-specific props like `key`.
const AnimateOnScroll: React.FC<AnimateOnScrollProps> = ({
  children,
  animationClass = "animate-fadeInUp",
  threshold = 0.1,
  delay = 0,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }, delay);
        }
      },
      { threshold }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, delay]);

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className={isVisible ? animationClass : ""}>{children}</div>
    </div>
  );
};

// --- ICONS (SVG Components) ---
const HeartHandIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
    />
  </svg>
);

const KeyIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
    />
  </svg>
);

const SparklesIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.898 20.553L16.5 21.75l-.398-1.197a3.375 3.375 0 00-2.456-2.456L12.75 18l1.197-.398a3.375 3.375 0 002.456-2.456L16.5 14.25l.398 1.197a3.375 3.375 0 002.456 2.456L20.25 18l-1.197.398a3.375 3.375 0 00-2.456 2.456z"
    />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fillRule="evenodd"
      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
      clipRule="evenodd"
    />
  </svg>
);

const WhatsAppIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    fill="currentColor"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path d="M12.04 2C6.58 2 2.13 6.45 2.13 12c0 1.74.44 3.37 1.23 4.78L2 22l5.33-1.38c1.37.71 2.93 1.11 4.58 1.11h.01c5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.82-9.91-9.82zM17.2 15.25c-.21 0-.46-.07-.72-.18-.54-.22-1.04-.54-1.2-.72-.15-.17-.28-.36-.42-.53-.13-.17-.28-.34-.42-.51s-.29-.34-.44-.51c-.15-.17-.31-.34-.46-.51-.15-.17-.32-.34-.48-.51s-.32-.34-.49-.51c-.17-.17-.35-.34-.52-.51l-.14-.14s-.14-.14-.28-.28c-.14-.14-.28-.28-.42-.42s-.28-.28-.42-.42-.28-.28-.42-.42l-.14-.14c-.14-.14-.28-.28-.42-.42s-.28-.28-.42-.42-.28-.28-.42-.42c-.28-.28-.56-.56-.84-.84s-.56-.56-.84-.84l-.28-.28c-.28-.28-.56-.56-.84-.84s-.56-.56-.84-.84l-.28-.28c-1.12-1.12-2.24-2.24-3.36-3.36C3.06 6.37 4.1 5.25 4.1 5.25s1.12 1.12 1.12 1.12l.28.28.28.28.28.28.28.28.28.28.28.28.28.28.28.28.28.28.28.28.28.28.28.28c.14.14.28.28.42.42s.28.28.42.42.28.28.42.42.28.28.42.42l.14.14s.14.14.28.28c.14.14.28.28.42.42s.28.28.42.42.28.28.42.42l.14.14c.14.14.28.28.42.42s.28.28.42.42.28.28.42.42c.15.15.29.3.44.44s.29.3.44.44l.14.14c.15.15.29.3.44.44s.29.3.44.44l.14.14c.28.28.56.56.84.84s.56.56.84.84l.28.28c.28.28.56.56.84.84s.56.56.84.84l.28.28c.09.09.18.18.27.27s.18.18.27.27l.14.14c.09.09.18.18.27.27s.18.18.27.27l.14.14c.09.09.18.18.27.27s.18.18.27.27l.14.14c.09.09.18.18.27.27s.18.18.27.27l.14.14c.28.28.56.56.84.84s.56.56.84.84l.28.28c.28.28.56.56.84.84s.56.56.84.84l.28.28c.09.09.18.18.27.27s.18.18.27.27l.14.14c.09.09.18.18.27.27s.18.18.27.27l.14.14c.09.09.18.18.27.27s.18.18.27.27l.14.14c.09.09.18.18.27.27s.18.18.27.27l.14.14c.09.09.18.18.27.27s.18.18.27.27l.1-4.1-3.3-3.3-1.42 1.42z" />
  </svg>
);

const NumerologyIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9.75v3M15 8.25v4.5M3 15v4.5A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V15M3 15h18"
    />
  </svg>
);

const CartomancyIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
    />
  </svg>
);

const LahochiIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-16.522a8.967 8.967 0 016 2.292c1.052.332 2.062.512 3 .512v-14.25a8.987 8.987 0 00-3-1.748m0 16.522c-2.305 0-4.408-.867-6-2.292m0 0a8.967 8.967 0 01-6-2.292m0 0v-14.25a8.987 8.987 0 013-1.748m6 18.27C14.305 19.133 16.408 18 18 18c1.052 0 2.062.18 3 .512v-14.25a8.987 8.987 0 00-3-1.748"
    />
  </svg>
);

const ChatBubbleIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l3.663-3.938c.26-.29.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
    />
  </svg>
);

const CloseIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

const SendIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
    />
  </svg>
);

// --- FORMULES ICONS ---
const FeatherIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.983 5.168a3.75 3.75 0 015.304 5.304L9.041 21.982a1.875 1.875 0 01-2.652-2.652L12.983 5.168z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 5.25L18.75 2.25"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.983 5.168L15.333 2.818"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.233 7.918L12.583 5.568"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.483 10.668L9.833 8.318"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.733 13.418L7.083 11.068"
    />
  </svg>
);

const BalanceIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3v18m0-18l-3.75 3.75M12 3l3.75 3.75M12 21l-3.75-3.75M12 21l3.75-3.75M3.75 9h16.5M3.75 15h16.5"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.625 9c0 5.094 3.32 9.25 7.425 9.25s7.425-4.156 7.425-9.25"
    />
  </svg>
);

const ButterflyIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.25 4.75c1.5-1.5 3.5-1.5 5 0 1.5 1.5 1.5 3.5 0 5L12 12l-2.25-2.25c-1.5-1.5-1.5-3.5 0-5z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.25 19.25c1.5 1.5 3.5 1.5 5 0 1.5-1.5 1.5-3.5 0-5L12 12l-2.25 2.25c-1.5 1.5-1.5 3.5 0 5z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l-6.5-6.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l6.5-6.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l-6.5 6.5" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12l6.5 6.5" />
  </svg>
);

// --- COMPONENT DEFINITIONS ---
type NavClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => void;

const Header = ({ onNavClick }: { onNavClick: NavClickHandler }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleHeaderClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    // Si on est sur une page légale et qu'on clique sur un lien de navigation
    if (
      href &&
      (href === "#accueil" ||
        href === "#services" ||
        href === "#formules" ||
        href === "#bienfaits" ||
        href === "#tarifs" ||
        href === "#rendezvous")
    ) {
      const currentHash = window.location.hash.substring(1);
      if (
        currentHash === "mentions-legales" ||
        currentHash === "politique-de-confidentialite" ||
        currentHash === "conditions-generales"
      ) {
        // On est sur une page légale, retourner à l'accueil
        window.location.hash = "#accueil";
        return;
      }
    }
    onNavClick(e);
  };

  return (
    <header className="bg-brand-dark bg-opacity-50 text-white p-4 fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center px-4">
        <a
          href="#accueil"
          onClick={handleHeaderClick}
          className="text-xl sm:text-2xl md:text-3xl font-display font-bold flex-shrink-0"
        >
          TOURMA-LINE
        </a>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 lg:space-x-6">
          <a
            href="#accueil"
            onClick={handleHeaderClick}
            className="text-sm lg:text-base hover:text-brand-purple transition-colors"
          >
            Accueil
          </a>
          <a
            href="#services"
            onClick={handleHeaderClick}
            className="text-sm lg:text-base hover:text-brand-purple transition-colors"
          >
            Services
          </a>
          <a
            href="#formules"
            onClick={handleHeaderClick}
            className="text-sm lg:text-base hover:text-brand-purple transition-colors"
          >
            Formules
          </a>
          <a
            href="#bienfaits"
            onClick={handleHeaderClick}
            className="text-sm lg:text-base hover:text-brand-purple transition-colors"
          >
            Bienfaits
          </a>
          <a
            href="#tarifs"
            onClick={handleHeaderClick}
            className="text-sm lg:text-base hover:text-brand-purple transition-colors"
          >
            Tarifs
          </a>
          <a
            href="#rendezvous"
            onClick={handleHeaderClick}
            className="bg-brand-purple hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform active:scale-95 text-sm lg:text-base"
          >
            RDV
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white p-2 hover:bg-brand-purple hover:bg-opacity-30 rounded-lg transition-colors"
          aria-label="Menu"
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={
                mobileMenuOpen
                  ? "M6 18L18 6M6 6l12 12"
                  : "M4 6h16M4 12h16M4 18h16"
              }
            />
          </svg>
        </button>
      </div>
      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-brand-dark bg-opacity-98 p-4 space-y-2 mt-2 rounded-lg border border-brand-purple border-opacity-30">
          <a
            href="#accueil"
            onClick={(e) => {
              handleHeaderClick(e);
              setMobileMenuOpen(false);
            }}
            className="block px-4 py-2 hover:bg-brand-purple hover:bg-opacity-30 rounded transition-colors"
          >
            Accueil
          </a>
          <a
            href="#services"
            onClick={(e) => {
              handleHeaderClick(e);
              setMobileMenuOpen(false);
            }}
            className="block px-4 py-2 hover:bg-brand-purple hover:bg-opacity-30 rounded transition-colors"
          >
            Services
          </a>
          <a
            href="#formules"
            onClick={(e) => {
              handleHeaderClick(e);
              setMobileMenuOpen(false);
            }}
            className="block px-4 py-2 hover:bg-brand-purple hover:bg-opacity-30 rounded transition-colors"
          >
            Formules
          </a>
          <a
            href="#bienfaits"
            onClick={(e) => {
              handleHeaderClick(e);
              setMobileMenuOpen(false);
            }}
            className="block px-4 py-2 hover:bg-purple hover:bg-opacity-30 rounded transition-colors"
          >
            Bienfaits
          </a>
          <a
            href="#tarifs"
            onClick={(e) => {
              handleHeaderClick(e);
              setMobileMenuOpen(false);
            }}
            className="block px-4 py-2 hover:bg-brand-purple hover:bg-opacity-30 rounded transition-colors"
          >
            Tarifs
          </a>
          <a
            href="#rendezvous"
            onClick={(e) => {
              handleHeaderClick(e);
              setMobileMenuOpen(false);
            }}
            className="block bg-brand-purple hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded-full text-center transition-all duration-300 mt-2"
          >
            Prendre RDV
          </a>
        </nav>
      )}
    </header>
  );
};

const Hero = ({ onNavClick }: { onNavClick: NavClickHandler }) => {
  return (
    <section
      id="accueil"
      className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Background Image - Optimized */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/hero-optimized.webp')",
        }}
        role="img"
        aria-label="Image représentant la guidance spirituelle et l'accompagnement personnalisé"
      ></div>

      {/* Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70"></div>

      {/* Additional overlay for better text readability */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 p-4 animate-fadeInUp max-w-4xl">
        <h2 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-4 drop-shadow-lg">
          Révélez votre potentiel et illuminez votre chemin de vie.
        </h2>
        <p className="text-sm sm:text-base md:text-lg lg:text-2xl mb-8 max-w-3xl mx-auto font-light drop-shadow-md">
          Guidance personnalisée par la numérologie, la cartomancie et les soins
          énergétiques Lahochi.
        </p>
        <a
          href="#formules"
          onClick={onNavClick}
          className="bg-brand-purple hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 active:scale-95 animate-pulse inline-block shadow-lg"
        >
          Découvrir mes accompagnements
        </a>
      </div>
    </section>
  );
};

const Welcome = () => {
  return (
    <section id="bienvenue" className="py-20 bg-white">
      <AnimateOnScroll>
        <div className="container mx-auto text-center px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display text-brand-dark mb-4">
            Bonjour et bienvenue, je suis Tourma-Line.
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Je suis numérologue, cartomancienne et praticienne en soins
            énergétiques Lahochi. Mon objectif est de vous accompagner sur votre
            chemin de vie en vous offrant des outils puissants et des soins
            adaptés à vos besoins spécifiques.
          </p>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-brand-lilas p-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <HeartHandIcon className="w-12 h-12 mx-auto mb-4 text-brand-purple" />
              <h3 className="text-2xl font-display text-brand-dark mb-2">
                Approche humaine et bienveillante
              </h3>
              <p className="text-gray-700">
                Chaque consultation est un moment d'écoute et de partage. Mon
                objectif est de vous accompagner dans le respect de vos besoins
                et de vos attentes.
              </p>
            </div>
            <div className="bg-brand-lilas p-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <KeyIcon className="w-12 h-12 mx-auto mb-4 text-brand-purple" />
              <h3 className="text-2xl font-display text-brand-dark mb-2">
                Un chemin vers l'auto-connaissance
              </h3>
              <p className="text-gray-700">
                Grâce à la numérologie et à la cartomancie, vous obtiendrez des
                réponses qui vous permettront d'avancer plus sereinement, tout
                en découvrant des clés pour mieux comprendre votre vie.
              </p>
            </div>
            <div className="bg-brand-lilas p-8 rounded-2xl shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <SparklesIcon className="w-12 h-12 mx-auto mb-4 text-brand-purple" />
              <h3 className="text-2xl font-display text-brand-dark mb-2">
                Guérison énergétique
              </h3>
              <p className="text-gray-700">
                Les soins LAHOCHI sont une véritable source de revitalisation et
                de guérison, tant sur le plan physique qu'émotionnel, vous
                permettant de vous reconnecter à votre énergie vitale.
              </p>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

const Benefits = () => {
  const benefitsList = [
    "Clarté et prise de décision : Obtenez des réponses à vos questions et prenez des décisions éclairées pour votre avenir.",
    "Meilleure connaissance de soi : Mettez en lumière vos talents et comprenez les défis de votre vie pour mieux les surmonter.",
    "Libération des blocages : Relâchez les tensions et les blocages énergétiques qui vous freinent.",
    "Apaisement et réduction du stress : Retrouvez un état de relaxation profonde et diminuez l'anxiété du quotidien.",
    "Harmonie intérieure : Rééquilibrez vos énergies et vos chakras pour un bien-être global.",
    "Confiance et sérénité : Avancez sur votre chemin de vie avec plus d'assurance et de paix intérieure.",
  ];
  return (
    <section id="bienfaits" className="py-20 bg-brand-green">
      <AnimateOnScroll>
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-display text-brand-dark mb-4">
            Ce que mes pratiques peuvent vous apporter
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Chaque séance est une étape vers plus de clarté, d'harmonie et de
            confiance en vous.
          </p>
          <div className="grid md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto">
            {benefitsList.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <SparklesIcon className="w-6 h-6 text-brand-purple flex-shrink-0 mt-1" />
                <p className="text-gray-700">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

// FIX: Defined interfaces for tab data to ensure type safety for optional properties like 'features'.
interface TabFeature {
  title: string;
  description: string;
}

interface TabData {
  title: string;
  icon: React.FC<{ className?: string }>;
  contentTitle: string;
  content: string;
  features?: TabFeature[];
}

const Services = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}) => {
  const tabs: Record<string, TabData> = {
    numerology: {
      title: "Numérologie",
      icon: NumerologyIcon,
      contentTitle:
        "Numérologie - Découvrez les secrets de votre chemin de vie",
      content:
        "La numérologie est une science ancienne qui étudie l'impact des nombres sur notre existence. À travers l’analyse de votre date de naissance la numérologie permet de révéler des aspects essentiels de votre personnalité, de vos talents cachés, ainsi que les défis auxquels vous êtes confronté dans votre vie. Chaque consultation vous permet de mieux comprendre vos choix, vos relations et les événements marquants de votre vie, afin de prendre des décisions éclairées et d’aligner votre vie avec votre véritable mission.",
    },
    cartomancy: {
      title: "Cartomancie",
      icon: CartomancyIcon,
      contentTitle: "Cartomancie - Des réponses claires grâce aux cartes",
      content:
        "La cartomancie est l’art de lire et d’interpréter les cartes pour obtenir des réponses aux questions que vous vous posez. Que ce soit pour éclairer vos choix professionnels, amoureux ou personnels, la cartomancie offre des conseils pratiques et des prévisions sur votre avenir. J'utilise des jeux de cartes traditionnels ou des oracles pour explorer les énergies présentes et vous guider vers des solutions adaptées à votre situation.",
    },
    lahochi: {
      title: "Soin LAHOCHI",
      icon: LahochiIcon,
      contentTitle:
        "Soin Énergétique LAHOCHI - Une puissante vague de guérison",
      content:
        "Le LAHOCHI est une méthode de soins énergétiques qui s'apparente à une forme de guérison par l'énergie, often comparée au Reiki, bien qu'elle soit considérée comme plus puissante et plus rapide. Son nom, 'LahoChi', fait référence à l’énergie divine universelle qui est canalisée à travers les mains du praticien pour être transmise à la personne recevant le soin. Le Lahochi utilise des fréquences vibratoires élevées pour rééquilibrer les énergies du corps et favoriser la guérison physique, émotionnelle et spirituelle.",
      features: [
        {
          title: "Transmission d’énergie par les mains",
          description:
            "Je canalise l’énergie à travers mes mains en les plaçant sur ou près du corps du receveur.",
        },
        {
          title: "Soin holistique",
          description:
            "Le LAHOCHI agit sur les différents niveaux de l’être humain : physique, émotionnel, mental et spirituel.",
        },
        {
          title: "Équilibrage des chakras",
          description:
            "Le Lahochi aide à équilibrer les chakras du corps, favorisant ainsi un flux énergétique harmonieux.",
        },
        {
          title: "Vibration élevée",
          description:
            "Le LAHOCHI est réputé pour être un soin à hautes fréquences vibratoires ce qui permet des résultats rapides et profonds.",
        },
        {
          title: "Soin à distance",
          description:
            "Cette méthode peut aussi être pratiquée à distance, ce qui la rend accessible à toute personne, peu importe sa localisation.",
        },
      ],
    },
  };

  const currentTab = tabs[activeTab as keyof typeof tabs];

  return (
    <section id="services" className="py-20 bg-white">
      <AnimateOnScroll>
        <div className="container mx-auto text-center px-4 sm:px-6">
          <h2 className="text-3xl sm:text-4xl font-display text-brand-dark mb-8 sm:mb-12">
            Mes outils pour vous guider.
          </h2>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-0 mb-8 border-b-2 border-brand-lilas overflow-x-auto">
            {Object.entries(tabs).map(([tabKey, tabData]) => (
              <button
                key={tabKey}
                onClick={() => setActiveTab(tabKey)}
                className={`flex flex-col sm:flex-row items-center justify-center space-x-0 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 font-display text-xs sm:text-lg md:text-xl transition-colors duration-300 whitespace-nowrap ${
                  activeTab === tabKey
                    ? "border-b-4 border-brand-purple text-brand-purple"
                    : "text-gray-500 hover:text-brand-dark"
                }`}
              >
                {React.createElement(tabData.icon, {
                  className: "w-5 h-5 sm:w-6 sm:h-6",
                })}
                <span className="text-xs sm:text-base">{tabData.title}</span>
              </button>
            ))}
          </div>
          <div className="max-w-4xl mx-auto text-left p-4 sm:p-8 bg-brand-lilas rounded-2xl shadow-inner transition-all duration-500">
            <AnimateOnScroll key={activeTab}>
              <h3 className="text-2xl sm:text-3xl font-display text-brand-dark mb-4">
                {currentTab.contentTitle}
              </h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                {currentTab.content}
              </p>
              {currentTab.features && (
                <ul className="mt-6 space-y-4">
                  {currentTab.features.map((feature, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <SparklesIcon className="w-5 h-5 text-brand-purple flex-shrink-0 mt-1" />
                      <p className="text-sm sm:text-base text-gray-700">
                        <strong className="font-semibold text-brand-dark">
                          {feature.title}:
                        </strong>{" "}
                        {feature.description}
                      </p>
                    </li>
                  ))}
                </ul>
              )}
            </AnimateOnScroll>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

const Formules = () => {
  const formulesList = [
    {
      icon: FeatherIcon,
      title: "Séance de Confort",
      subtitle: "Libération & Bien-être immédiat",
      idealFor:
        "Les besoins ponctuels : stress, manque d’énergie, doute, surcharge émotionnelle ou besoin de retrouver confiance.",
      details: [
        "Lecture énergétique et guidance par numérologie.",
        "Soin Lahochi ciblé pour réharmoniser les chakras et libérer les tensions.",
        "Conseils d’ancrage ou message intuitif de fin de séance.",
      ],
      duration: "1h à 1h30",
      price: "70€",
      priceNote: "Une bulle de réconfort",
    },
    {
      icon: BalanceIcon,
      title: "Formule “Harmonie Intérieure”",
      subtitle: "3 Séances sur 1 mois",
      objective:
        "Apaiser les émotions, comprendre les schémas répétitifs et rééquilibrer les énergies pour restaurer l’harmonie globale.",
      details: [
        "1 séance combinée de numérologie et de cartomancie.",
        "1 soin Lahochi (à une autre date).",
        "Mini suivi par message entre les séances.",
      ],
      duration: "environ 1 mois",
      price: "150€",
      priceNote: "(au lieu de 180€)",
    },
    {
      icon: ButterflyIcon,
      title: "Formule “Renaissance”",
      subtitle: "Accompagnement sur 3 mois",
      objective:
        "Guérir en profondeur, libérer les mémoires émotionnelles et retrouver une stabilité intérieure durable (traumatismes, deuils, ruptures).",
      details: [
        "1 séance de cartomancie + numérologie (démarrage).",
        "3 soins Lahochi (1 par mois).",
        "Suivi énergétique et guidance entre les séances.",
        "1 séance de cartomancie de clôture.",
      ],
      duration: "3 mois",
      price: "300€",
      priceNote: "Un chemin de transformation",
    },
  ];

  return (
    <section id="formules" className="py-20 bg-brand-green">
      <AnimateOnScroll>
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-display text-brand-dark mb-4">
            Les Formules d’Accompagnement
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
            Chaque personne est unique. C'est pourquoi chaque séance commence
            par une lecture énergétique pour un accompagnement juste, ciblé et
            adapté à votre histoire.
          </p>
          <div className="grid md:grid-cols-3 gap-8 items-start">
            {formulesList.map((formule, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border-t-4 border-brand-purple transition-all duration-300 hover:scale-105 hover:shadow-2xl h-full flex flex-col text-left"
              >
                {React.createElement(formule.icon, {
                  className: "w-12 h-12 mb-4 text-brand-purple self-center",
                })}
                <h3 className="text-2xl font-display text-brand-dark text-center mb-1">
                  {formule.title}
                </h3>
                <p className="text-brand-purple font-semibold mb-6 text-center">
                  {formule.subtitle}
                </p>

                <p className="text-gray-700 mb-4">
                  <strong className="font-semibold">
                    {formule.idealFor ? "Idéale pour :" : "Objectif :"}
                  </strong>{" "}
                  {formule.idealFor || formule.objective}
                </p>

                <p className="font-semibold text-gray-800 mb-2">
                  {formule.details.length > 0
                    ? formule.title === "Séance de Confort"
                      ? "Déroulé :"
                      : "Contenu :"
                    : ""}
                </p>
                <ul className="space-y-2 text-gray-700 mb-6 flex-grow">
                  {formule.details.map((item, i) => (
                    <li key={i} className="flex items-start">
                      <SparklesIcon className="w-5 h-5 text-brand-purple flex-shrink-0 mr-2 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="text-center border-t border-brand-lilas pt-4 mt-auto">
                  <p className="text-gray-600 text-sm">{formule.duration}</p>
                  <p className="text-4xl font-bold text-brand-dark my-1">
                    {formule.price}
                  </p>
                  <p className="text-gray-600 text-sm">{formule.priceNote}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

const SessionFlow = () => {
  return (
    <section id="deroulement" className="py-20 bg-white">
      <AnimateOnScroll>
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-display text-brand-dark mb-12">
            Un accompagnement adapté à vous
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-brand-lilas p-8 rounded-2xl shadow-lg border-t-4 border-brand-purple transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-display text-brand-dark mb-3">
                À distance
              </h3>
              <p className="text-gray-600">
                Par téléphone, visio ou Messenger, pour une flexibilité totale
                où que vous soyez.
              </p>
            </div>
            <div className="bg-brand-lilas p-8 rounded-2xl shadow-lg border-t-4 border-brand-purple transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-display text-brand-dark mb-3">
                Au cabinet
              </h3>
              <p className="text-gray-600 mb-4">
                Espace serein au 161 rue Souveraine, 76450
                Saint-Riquier-ès-Plains, sur rendez-vous uniquement.
              </p>
              <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2581.307994998918!2d0.7769!3d49.6885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e16b8b8b8b8b8b%3A0x47e16b8b8b8b8b8b!2sTourma-Line%20-%20Gerponville!5e0!3m2!1sfr!2sfr!4v1703123456789!5m2!1sfr!2sfr"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Carte montrant l'emplacement du cabinet de Tourma-Line à Saint-Riquier-ès-Plains, Normandie"
                ></iframe>
              </div>
            </div>
            <div className="bg-brand-lilas p-8 rounded-2xl shadow-lg border-t-4 border-brand-purple transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-display text-brand-dark mb-3">
                À domicile
              </h3>
              <p className="text-gray-600">
                Je peux me déplacer à votre domicile dans les environs de
                Gerponville (Valmont, Fécamp, Cany-Barville, Ourville-en-Caux).
              </p>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

const Pricing = () => {
  return (
    <section id="tarifs" className="py-20 bg-brand-green">
      <AnimateOnScroll>
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-display text-brand-dark mb-12">
            Tarifs des Séances Uniques
          </h2>
          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-2xl shadow-lg text-brand-dark transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-display mb-4">
                Consultation Numérologie & Cartomancie
              </h3>
              <p className="text-5xl font-bold mb-4">70€</p>
              <p className="text-gray-700">
                À distance, à domicile ou au cabinet
              </p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-lg text-brand-dark transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <h3 className="text-2xl font-display mb-4">
                Soin énergétique LAHOCHI
              </h3>
              <p className="text-5xl font-bold mb-4">60€</p>
              <p className="text-gray-700">À distance ou en cabinet</p>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section id="temoignages" className="py-20 bg-white">
      <AnimateOnScroll>
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-display text-brand-dark mb-12">
            Ce que mes clients disent
          </h2>
          <div
            className="elfsight-app-d88ab70b-fe59-45e0-b959-2a1eaa59082f"
            data-elfsight-app-lazy
          ></div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Comment puis-je comprendre la numérologie ?",
      answer: "La numérologie est une discipline basée sur l'attribution de significations aux chiffres, en fonction du nom, de la date de naissance et d'autres données personnelles. Elle repose sur l'idée que les nombres dégagent une vibration et influencent notre personnalité, notre destin et nos événements de vie.",
    },
    {
      question: "Comment calculer mon chemin de vie en numérologie ?",
      answer: "Il suffit d'additionner les chiffres de votre date de naissance (jour + mois + année). Si vous obtenez un nombre à deux chiffres, additionnez-les à nouveau. Par exemple, pour une naissance le 20 janvier 1986 : 2+0+1+1+9+8+6 = 27, puis 2+7 = 9. Le chiffre 9 est votre chemin de vie.",
    },
    {
      question: "Quel est le chiffre le plus puissant en numérologie ?",
      answer: "Le chiffre 9 est considéré comme le plus puissant en numérologie. C'est un nombre de transformation et de sagesse universelle. Cependant, les maîtres nombres (11, 22 et 33) possèdent aussi une puissance exceptionnelle.",
    },
    {
      question: "Quels sont les trois maîtres nombres en numérologie ?",
      answer: "Les trois maîtres nombres sont le 11, le 22 et le 33. Ces nombres possèdent une puissance spécifique et exceptionnelle. Ils représentent l'intuition, la maîtrise et la sagesse universelle.",
    },
    {
      question: "Quel chiffre attire l'argent et la prospérité ?",
      answer: "En numérologie, le chiffre 8 est souvent considéré comme celui qui attire le plus l'argent et la prospérité. Avec sa forme symétrique et infinie, il est associé à la stabilité matérielle, à la réussite et au pouvoir.",
    },
    {
      question: "Pourquoi le 7 est-il considéré comme un chiffre sacré ?",
      answer: "Le chiffre 7 est supposé porter bonheur car c'est un chiffre sacré dans de nombreuses religions. Dans la Bible, Dieu a créé le monde en sept jours. Les pèlerins musulmans tournent sept fois autour de la Kaaba. Selon les hindous, le corps a sept sources d'énergie appelées les chakras.",
    },
    {
      question: "Qu'est-ce qu'une consultation de numérologie chez Tourma-Line ?",
      answer: "Une consultation de numérologie chez Tourma-Line est une exploration profonde de votre chemin de vie. Grâce à l'analyse de votre date de naissance et de votre nom, vous pourrez mieux comprendre vos talents, vos défis et obtenir des éclaircissements sur des questions personnelles, professionnelles ou sentimentales.",
    },
    {
      question: "Comment fonctionne un soin énergétique LAHOCHI ?",
      answer: "Le LAHOCHI est une méthode de guérison énergétique de haute fréquence. Ce soin aide à rééquilibrer vos chakras, libérer les blocages, réduire le stress et favoriser un bien-être profond. C'est un véritable moment de ressourcement et de transformation.",
    },
    {
      question: "Puis-je avoir une consultation à distance ?",
      answer: "Oui ! Tourma-Line propose des consultations à distance via téléphone, appel vidéo ou Messenger. Cela vous permet de bénéficier des services depuis le confort de votre domicile, peu importe où vous vous trouvez.",
    },
    {
      question: "Quels sont les bénéfices d'une consultation de numérologie ?",
      answer: "Une consultation de numérologie peut vous aider à : comprendre votre personnalité profonde, clarifier votre direction de vie, résoudre des blocages, améliorer vos relations, prendre de meilleures décisions et trouver plus de confiance et d'harmonie.",
    },
  ];

  return (
    <section className="py-20 bg-brand-lilas">
      <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
        <h2 className="text-4xl sm:text-5xl font-display text-center mb-4 text-brand-dark">
          Questions Fréquentes
        </h2>
        <p className="text-center text-gray-600 mb-12 text-sm sm:text-base">
          Découvrez les réponses aux questions les plus posées sur la numérologie et nos services
        </p>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full px-6 py-4 flex justify-between items-center hover:bg-brand-lilas hover:bg-opacity-30 transition-colors text-left"
              >
                <span className="font-semibold text-brand-dark pr-4">
                  {faq.question}
                </span>
                <span
                  className={`text-brand-purple text-xl flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-brand-lilas bg-opacity-20 border-t border-gray-200">
                  <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-brand-purple bg-opacity-10 rounded-lg border border-brand-purple border-opacity-30 text-center">
          <p className="text-gray-700 mb-4">
            Vous avez d'autres questions ? N'hésitez pas à nous contacter !
          </p>
          <a
            href="tel:0649653186"
            className="inline-block bg-brand-purple hover:bg-opacity-80 text-white font-bold py-2 px-6 rounded-full transition-all duration-300 transform active:scale-95"
          >
            Nous appeler
          </a>
        </div>
      </div>
    </section>
  );
};

const Booking = () => {
  return (
    <section id="rendezvous" className="py-20 bg-brand-green">
      <AnimateOnScroll>
        <div className="container mx-auto text-center px-6">
          <h2 className="text-4xl font-display text-brand-dark mb-4">
            Prêt(e) à commencer votre voyage intérieur ?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Je suis là pour vous offrir des réponses et un accompagnement
            personnalisé. Contactez-moi dès maintenant pour réserver votre
            séance ! Je serai ravie de vous accompagner sur votre chemin de vie
            avec professionnalisme et bienveillance.
          </p>
          <a
            href="https://www.facebook.com/tourma.line.534540"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand-purple hover:bg-opacity-80 text-white font-bold py-4 px-10 rounded-full text-xl transition-transform transform hover:scale-105 active:scale-95 inline-block animate-pulse"
          >
            Réserver ma séance
          </a>
          <div className="mt-10">
            <p className="text-gray-700 font-semibold">Pour me joindre :</p>
            <p className="text-lg text-brand-dark mt-2">
              <a href="tel:0649653186" className="hover:underline">
                06 49 65 31 86
              </a>{" "}
              |{" "}
              <a
                href="mailto:line.simon.ls@gmail.com"
                className="hover:underline"
              >
                line.simon.ls@gmail.com
              </a>
            </p>
            <div className="flex justify-center space-x-6 mt-4">
              <a
                href="https://www.facebook.com/tourma.line.534540"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nous contacter sur Facebook"
                className="text-gray-500 hover:text-brand-purple transition-all duration-300 transform hover:scale-110 active:scale-95"
              >
                <FacebookIcon className="w-8 h-8" aria-hidden="true" />
              </a>
              <a
                href="https://wa.me/qr/NZDHZRB3ZW52B1"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Nous contacter sur WhatsApp"
                className="text-gray-500 hover:text-brand-purple transition-all duration-300 transform hover:scale-110 active:scale-95"
              >
                <WhatsAppIcon className="w-8 h-8" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </AnimateOnScroll>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark text-white py-10 mt-0">
      <div className="container mx-auto px-6">
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-3xl font-display font-bold mb-3">
              TOURMA-LINE
            </h3>
            <p className="text-brand-lilas mb-4">
              "Pour vous guider vers la clarté, la confiance et l'harmonie. ✨"
            </p>
            <p className="text-sm text-gray-300">
              Tourmaline, 76540 Gerponville
            </p>
            <p className="text-sm text-gray-300">Siret : 93116533600013</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Contact</h4>
            <p className="text-sm text-gray-300">
              Tél :{" "}
              <a
                href="tel:0649653186"
                className="hover:text-brand-purple underline"
              >
                06 49 65 31 86
              </a>
            </p>
            <p className="text-sm text-gray-300">
              Email :{" "}
              <a
                href="mailto:line.simon.ls@gmail.com"
                className="hover:text-brand-purple underline"
              >
                line.simon.ls@gmail.com
              </a>
            </p>
            <div className="flex items-center space-x-4 mt-4">
              <a
                href="https://www.facebook.com/tourma.line.534540"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Suivez-nous sur Facebook"
                className="hover:text-brand-purple transition-all duration-300 transform hover:scale-110 active:scale-95"
              >
                <FacebookIcon className="w-6 h-6" aria-hidden="true" />
              </a>
            </div>
            <a
              href="https://www.google.com/search?sca_esv=b1b93c191aaa47d3&sxsrf=AE3TifPYZY4KkqMWnY5gZGk3n-vOMMPhAg:1762975647931&q=Tourma-Line+Line+Simon+Num%C3%A9rologie+Cartomancie+et+Soins+%C3%A9nerg%C3%A9tiques+LAHOCHI&si=AMgyJEs9DArPE9xmb5yVYVjpG4jqWDEKSIpCRSjmm88XZWnGNboYSYaVnHI8Cn4IKluKbWRXYq-r0WYB-1748A7mqdXrZUulOMOySxFRN-q-rlVeZj6ypC5qIaStj2zXV6nogPxZwVFtXxigmA-dqJHtBVRMAectv_K5Xo0VYmewelH3do5M-dAjT6PwxvoziBwKDnAPsX9naiebeBv7x2A75ft3kXZHUg%3D%3D&sa=X&ved=2ahUKExiFifiJrO2QAxW0NvsDHRiNLegQ_coHegQIKRAB"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-sm text-gray-300 hover:text-brand-purple transition-colors mt-3"
            >
              Voir sur Google Business
            </a>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-3">Informations</h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>
                <a href="#mentions-legales" className="hover:text-brand-purple">
                  Mentions légales
                </a>
              </li>
              <li>
                <a
                  href="#politique-de-confidentialite"
                  className="hover:text-brand-purple"
                >
                  Politique de confidentialité
                </a>
              </li>
              <li>
                <a
                  href="#conditions-generales"
                  className="hover:text-brand-purple"
                >
                  Conditions générales
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-4 text-center">
          <p className="text-sm text-gray-300">
            Intervention à domicile sur le secteur Gerponville, Valmont, Fécamp,
            Cany-Barville, Ourville-en-Caux.
          </p>
          <p className="text-sm text-gray-300 mt-1">Merci de votre visite.</p>
        </div>
      </div>
    </footer>
  );
};

const Credits = () => {
  return (
    <section className="bg-white text-blue-900 py-6 border-t border-blue-200">
      <div className="container mx-auto px-6 flex justify-center">
        <a
          href="https://www.numtemaagency.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-col md:flex-row items-center justify-center space-y-3 md:space-y-0 md:space-x-4 hover:opacity-80 transition-opacity text-center md:text-left"
          aria-label="Visiter le site de Nümtema Agency"
        >
          <img
            src="https://numtemaagency.com/wp-content/uploads/2024/01/numtema-logo.png"
            alt="Nümtema Agency"
            className="h-12 w-auto"
          />
          <p className="text-sm md:text-base font-poppins italic max-w-md md:max-w-none">
            "Chez Nümtema, on ne fait pas juste du digital. On le fait bien… et
            avec le sourire !"
          </p>
        </a>
      </div>
    </section>
  );
};

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "model",
      text: "Bonjour ! Je suis ravie de vous éclairer sur les activités de Tourma-Line. ✨ Tourma-Line, Line Simon, vous propose deux services principaux pour votre bien-être et votre développement personnel :\n\n1. **Consultation Numérologie & Cartomancie** (70€) : C'est une exploration profonde de votre chemin de vie. Grâce à la numérologie et à la cartomancie, vous pourrez mieux comprendre vos talents, vos défis et obtenir des éclaircissements sur des questions personnelles, professionnelles ou sentimentales. Une belle manière de trouver clarté et direction ! 🙏\n\n2. **Soin énergétique LAHOCHI** (60€) : Le LAHOCHI est une méthode de guérison énergétique de haute fréquence, un véritable moment de ressourcement. Ce soin aide à rééquilibrer vos chakras, libérer les blocages, réduire le stress et favoriser un bien-être profond. 💜\n\nComment puis-je vous guider aujourd'hui ?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isThinkingMode, setIsThinkingMode] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const systemInstruction = `You are 'Assistant Tourma-Line', a warm, authentic, and benevolent AI assistant for the TOURMA-LINE website. Your persona is that of a trusted guide: you are gentle, reassuring, deeply empathetic, and knowledgeable. Your primary purpose is to enlighten visitors about the services and gently guide them towards contacting the practitioner, Line Simon, to book a session. You must be professional and always respond in French.

**Business Information:**
- **Practitioner:** Tourma-Line (Line Simon)
- **Services (Single Sessions):**
  1.  **Consultation Numérologie & Cartomancie (70€):** An exploration of one's life path.
  2.  **Soin énergétique LAHOCHI (60€):** A high-frequency energy healing method.
- **Formules (Packages):**
  1.  **Séance de Confort (50€):** A 1-1.25h single session for immediate needs (stress, fatigue). Includes energy reading, Lahochi, and guidance. It's a great starting point.
  2.  **Formule "Harmonie Intérieure" (135€):** 3 sessions over 1 month for recurring blockages. Includes 1 numerology/cartomancy session, 1 Lahochi session, and message support between sessions.
  3.  **Formule "Renaissance" (300€):** A 3-month deep transformation for older trauma (grief, difficult breakups). Includes 1 initial full reading, 3 monthly Lahochi sessions, continuous guidance, and 1 closing reading session.
- **Locations & How Sessions Work:**
  - **À distance (Remote):** Flexible sessions via Phone, Video call, or Messenger.
  - **À domicile (At home):** Serving the area around Gerponville, including towns like Valmont, Fécamp, Cany-Barville, and Ourville-en-Caux. Sessions can also be at her home in Gerponville.
  - **Au cabinet (At the cabinet):** A serene space at "161 rue Souveraine, 76450 Saint-Riquier-ès-Plains". By appointment only.
- **Client Testimonials (To be used naturally in conversation):**
  - **PATRICIA FATRAS:** "J’ai eu la chance de croiser Touma-Line... elle a su me décrire avec une justesse..."
  - **Jennifer R:** "Expérience très enrichissante, qui m'a permis de confirmer des ressentis... beaucoup de bienveillance."
  - **Virginie Dbsc:** "Line est l'une des personnes les plus bienveillantes que j'ai pu rencontrer. Son professionnalisme, sa bienveillance et sa gentillesse sont des qualités rares."

**Your Persona & Rules:**
- **Tone:** Always be warm, authentic, and gentle in French. Use emojis like ✨, 🙏, 💜 sparingly and appropriately to add warmth. You are here to enlighten, not to sell.
- **Main Goal:** Your primary goal is to answer questions and, when it feels natural, gently guide users to contact Tourma-Line.
- **Call to Action:** When a user is ready or asks how to book, present the contact options clearly. The preferred method is Facebook.
  - **Primary:** "Le plus simple pour prendre rendez-vous est de contacter Line directement sur sa page Facebook." (Provide link: https://www.facebook.com/tourma.line.534540)
  - **Others:** You can also mention Phone (06 49 65 31 86), Email (line.simon.ls@gmail.com), or WhatsApp.
- **Using Testimonials:** If a user seems hesitant or asks about the benefits, you can naturally weave in what clients have said. For example: "Je comprends votre questionnement. D'ailleurs, de nombreuses personnes trouvent les séances très éclairantes. Jennifer R. a partagé que c'était une 'expérience très enrichissante' qui lui a permis de 'confirmer des ressentis'."
- **Boundaries:** If you don't know an answer or if the question is too personal, gently redirect by saying, "C'est une excellente question. Le mieux serait d'en discuter directement avec Line lors d'un premier contact. Elle saura vous répondre avec précision et bienveillance."
- **Language:** ALWAYS respond in French.`;

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = { role: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      // FIX: Changed API key retrieval to use process.env.API_KEY as per the guidelines.
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const model = isThinkingMode ? "gemini-2.5-pro" : "gemini-2.5-flash";

      const history = messages.map((m) => ({
        role: m.role,
        parts: [{ text: m.text }],
      }));
      if (history.length > 0 && history[0].role === "model") {
        history.shift();
      }

      const response = await ai.models.generateContent({
        model,
        contents: [...history, { role: "user", parts: [{ text: input }] }],
        config: {
          systemInstruction: systemInstruction,
          ...(isThinkingMode
            ? { thinkingConfig: { thinkingBudget: 32768 } }
            : {}),
        },
      });

      const modelMessage = { role: "model", text: response.text };
      setMessages((prev) => [...prev, modelMessage]);
    } catch (error) {
      console.error("Error calling Gemini API:", error);
      const errorMessage = {
        role: "model",
        text: "Désolé, une erreur s'est produite. Veuillez réessayer plus tard.",
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-brand-purple text-white p-3 sm:p-4 rounded-full shadow-lg hover:bg-opacity-80 transition-transform transform hover:scale-110 active:scale-95 z-50 animate-bob relative"
        aria-label="Ouvrir le chat"
      >
        {isOpen ? (
          <CloseIcon className="w-6 sm:w-8 h-6 sm:h-8" />
        ) : (
          <>
            <ChatBubbleIcon className="w-6 sm:w-8 h-6 sm:h-8" />
            {/* Badge de message */}
            <span className="absolute top-0 right-0 bg-red-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-pulse">
              1
            </span>
          </>
        )}
      </button>

      <div
        className={`fixed bottom-24 right-4 sm:right-6 w-[calc(100%-2rem)] sm:max-w-md bg-white rounded-2xl shadow-2xl flex flex-col z-50 h-[60vh] sm:h-[70vh] transition-all duration-500 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-10 pointer-events-none"
        }`}
      >
        <header className="bg-brand-purple text-white p-4 rounded-t-2xl flex justify-between items-center">
          <h3 className="font-display text-xl">Assistant Tourma-Line</h3>
        </header>
        <div className="flex-1 p-4 overflow-y-auto bg-brand-lilas">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex my-2 ${
                msg.role === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`p-3 rounded-2xl max-w-xs whitespace-pre-wrap ${
                  msg.role === "user"
                    ? "bg-brand-purple text-white"
                    : "bg-white text-brand-dark"
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start my-2">
              <div className="p-3 rounded-2xl bg-white text-brand-dark">
                <span className="animate-pulse">...</span>
              </div>
            </div>
          )}
          <div ref={chatEndRef} />
        </div>
        <div className="p-4 border-t border-gray-200">
          <div className="flex items-center justify-center mb-2">
            <label
              htmlFor="thinking-mode"
              className="flex items-center cursor-pointer"
            >
              <span className="mr-2 text-sm text-gray-600">Mode Réflexion</span>
              <div className="relative">
                <input
                  id="thinking-mode"
                  type="checkbox"
                  className="sr-only"
                  checked={isThinkingMode}
                  onChange={() => setIsThinkingMode(!isThinkingMode)}
                />
                <div className="block bg-gray-300 w-10 h-6 rounded-full"></div>
                <div
                  className={`dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${
                    isThinkingMode
                      ? "transform translate-x-full bg-brand-purple"
                      : ""
                  }`}
                ></div>
              </div>
              <SparklesIcon
                className={`w-5 h-5 ml-2 ${
                  isThinkingMode ? "text-brand-purple" : "text-gray-400"
                }`}
              />
            </label>
          </div>
          <form
            onSubmit={handleSendMessage}
            className="flex items-center space-x-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Posez votre question..."
              className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-brand-purple bg-white text-brand-dark placeholder-gray-500"
              disabled={isLoading}
            />
            <button
              type="submit"
              aria-label="Envoyer le message"
              className="bg-brand-purple text-white p-3 rounded-full hover:bg-opacity-80 disabled:bg-gray-400"
              disabled={isLoading}
            >
              <SendIcon className="w-6 h-6" />
            </button>
          </form>
        </div>
      </div>
    </>
  );
};


// --- MENTIONS LÉGALES PAGE ---
const MentionsLegales = ({ onNavClick }: { onNavClick: NavClickHandler }) => {
    return (
        <div className="bg-brand-lilas text-brand-dark font-sans min-h-screen flex flex-col">
            <Header onNavClick={onNavClick} />
            <main className="flex-1 w-full px-4 sm:px-6 py-8 sm:py-12">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-3xl sm:text-4xl font-display text-brand-dark mb-4 sm:mb-6 break-words">Mentions légales</h1>
                    <p className="text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8">Conformément à la législation française en vigueur.</p>

                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">1. Éditeur du site</h2>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">
                            Le présent site est édité par :<br />
                            <strong>Tourma-Line - Line Simon</strong><br />
                            Tourmaline, 76540 Gerponville, France<br />
                            SIRET : 931 165 336 00013<br />
                            Téléphone : <a href="tel:0649653186" className="text-brand-purple hover:underline break-all">06 49 65 31 86</a><br />
                            Email : <a href="mailto:line.simon.ls@gmail.com" className="text-brand-purple hover:underline break-all">line.simon.ls@gmail.com</a>
                        </p>
                    </section>

                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">2. Hébergement</h2>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">
                            Le site est hébergé par :<br />
                            <strong>Vercel Inc.</strong><br />
                            440 N Barranca Avenue #4133, Covina, CA 91723, États-Unis<br />
                            Site web : <a href="https://vercel.com" className="text-brand-purple hover:underline break-all" target="_blank" rel="noopener noreferrer">https://vercel.com</a>
                        </p>
                    </section>

                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">3. Propriété intellectuelle</h2>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">
                            L'ensemble des contenus présents sur ce site (textes, images, graphismes, logo, mises en page, etc.) est, sauf mention contraire, la propriété exclusive de Tourma-Line.
                            Toute reproduction, représentation, modification, diffusion ou exploitation, totale ou partielle, des contenus du site, par quelque procédé que ce soit, sans l'autorisation écrite préalable de Tourma-Line, est strictement interdite et est susceptible de constituer une contrefaçon au sens du Code de la propriété intellectuelle.
                        </p>
                    </section>

                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">4. Données personnelles</h2>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3 break-words">
                            Les informations collectées par le biais des formulaires de contact ou de prise de rendez-vous sont utilisées uniquement pour répondre aux demandes des utilisateurs et pour la gestion des rendez-vous.
                        </p>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">
                            Conformément au Règlement Général sur la Protection des Données (RGPD) et à la loi "Informatique et Libertés", vous disposez d'un droit d'accès, de rectification, d'opposition et de suppression des données vous concernant. Pour exercer ces droits, vous pouvez contacter Tourma-Line à l'adresse email suivante :
                            <a href="mailto:line.simon.ls@gmail.com" className="text-brand-purple hover:underline break-all">line.simon.ls@gmail.com</a>.
                        </p>
                    </section>

                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">5. Responsabilité</h2>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">
                            Les informations fournies sur ce site ont un caractère purement informatif et ne sauraient remplacer un avis médical, psychologique ou juridique.
                            Tourma-Line ne pourra être tenue responsable des dommages directs ou indirects résultant de l'utilisation du site ou des informations qui y sont présentées.
                        </p>
                    </section>

                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">6. Liens externes</h2>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">
                            Le site peut contenir des liens vers d'autres sites internet. Tourma-Line n'exerce aucun contrôle sur le contenu de ces sites tiers et ne saurait être tenue responsable de leur contenu ou de tout dommage pouvant résulter de leur consultation.
                        </p>
                    </section>

                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">7. Contact</h2>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">
                            Pour toute question relative aux mentions légales du site, vous pouvez contacter Tourma-Line à l'adresse suivante :
                            <a href="mailto:line.simon.ls@gmail.com" className="text-brand-purple hover:underline break-all">line.simon.ls@gmail.com</a>.
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
            <Credits />
        </div>
    );
};

// --- POLITIQUE DE CONFIDENTIALITÉ PAGE ---
const PolitiqueConfidentialite = ({ onNavClick }: { onNavClick: NavClickHandler }) => {
    return (
        <div className="bg-brand-lilas text-brand-dark font-sans min-h-screen flex flex-col">
            <Header onNavClick={onNavClick} />
            <main className="flex-1 w-full px-4 sm:px-6 py-12 sm:py-16">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-3xl sm:text-4xl font-display text-brand-dark mb-4 sm:mb-6 break-words">Politique de confidentialité</h1>
                    <p className="text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8">Dernière mise à jour : novembre 2025</p>

                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">1. Responsable du traitement</h2>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">
                            Tourma-Line - Line Simon<br />
                            Tourmaline, 76540 Gerponville, France<br />
                            Email : <a href="mailto:line.simon.ls@gmail.com" className="text-brand-purple hover:underline break-all">line.simon.ls@gmail.com</a>
                        </p>
                    </section>

                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">2. Données collectées</h2>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3 break-words">
                            Nous collectons les données suivantes lorsque vous utilisez notre site :
                        </p>
                        <ul className="text-gray-700 text-xs sm:text-sm leading-relaxed list-disc list-inside break-words">
                            <li>Informations de contact (nom, email, téléphone) via les formulaires</li>
                            <li>Données de navigation (adresse IP, pages visitées, durée de visite)</li>
                            <li>Cookies et technologies similaires pour améliorer votre expérience</li>
                        </ul>
                    </section>

                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">3. Finalités du traitement</h2>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">
                            Vos données sont utilisées pour :
                        </p>
                        <ul className="text-gray-700 text-xs sm:text-sm leading-relaxed list-disc list-inside break-words">
                            <li>Répondre à vos demandes de contact</li>
                            <li>Gérer les rendez-vous et séances</li>
                            <li>Améliorer notre site et nos services</li>
                            <li>Respecter nos obligations légales</li>
                        </ul>
                    </section>

                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">4. Base légale</h2>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">
                            Le traitement de vos données est fondé sur votre consentement (article 6.1.a du RGPD) ou sur l'exécution d'un contrat (article 6.1.b du RGPD).
                        </p>
                    </section>

                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">5. Durée de conservation</h2>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">
                            Vos données de contact sont conservées pendant la durée nécessaire à la gestion de votre demande ou de votre rendez-vous, puis supprimées dans un délai de 3 ans.
                        </p>
                    </section>

                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">6. Vos droits</h2>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">
                            Conformément au RGPD, vous disposez des droits suivants :
                        </p>
                        <ul className="text-gray-700 text-xs sm:text-sm leading-relaxed list-disc list-inside break-words">
                            <li>Droit d'accès à vos données</li>
                            <li>Droit de rectification</li>
                            <li>Droit à l'oubli (suppression)</li>
                            <li>Droit à la limitation du traitement</li>
                            <li>Droit à la portabilité des données</li>
                            <li>Droit d'opposition</li>
                        </ul>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mt-3 break-words">
                            Pour exercer ces droits, contactez-nous à : <a href="mailto:line.simon.ls@gmail.com" className="text-brand-purple hover:underline break-all">line.simon.ls@gmail.com</a>
                        </p>
                    </section>

                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">7. Sécurité</h2>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">
                            Nous mettons en place des mesures de sécurité appropriées pour protéger vos données contre l'accès non autorisé, la modification ou la destruction.
                        </p>
                    </section>

                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">8. Contact</h2>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">
                            Pour toute question concernant cette politique de confidentialité, contactez-nous à : <a href="mailto:line.simon.ls@gmail.com" className="text-brand-purple hover:underline break-all">line.simon.ls@gmail.com</a>
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
            <Credits />
        </div>
    );
};

// --- CONDITIONS GÉNÉRALES PAGE ---
const ConditionsGenerales = ({ onNavClick }: { onNavClick: NavClickHandler }) => {
    return (
        <div className="bg-brand-lilas text-brand-dark font-sans min-h-screen flex flex-col">
            <Header onNavClick={onNavClick} />
            <main className="flex-1 w-full px-4 sm:px-6 py-12 sm:py-16">
                <div className="container mx-auto max-w-4xl">
                    <h1 className="text-3xl sm:text-4xl font-display text-brand-dark mb-4 sm:mb-6 break-words">Conditions générales</h1>
                    <p className="text-xs sm:text-sm text-gray-600 mb-6 sm:mb-8">Dernière mise à jour : novembre 2025</p>

                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">1. Objet</h2>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">
                            Les présentes conditions générales régissent l'utilisation du site Tourma-Line et l'accès aux services proposés par Line Simon (numérologie, cartomancie, soins énergétiques LAHOCHI).
                        </p>
                    </section>

                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">2. Accès au site</h2>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">
                            L'accès au site est gratuit et accessible à tous. Tourma-Line se réserve le droit de refuser l'accès à toute personne qui ne respecterait pas les présentes conditions.
                        </p>
                    </section>

                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">3. Services proposés</h2>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3 break-words">
                            Tourma-Line propose les services suivants :
                        </p>
                        <ul className="text-gray-700 text-xs sm:text-sm leading-relaxed list-disc list-inside break-words">
                            <li>Consultations de numérologie et cartomancie</li>
                            <li>Soins énergétiques LAHOCHI</li>
                            <li>Formules d'accompagnement personnalisé</li>
                        </ul>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mt-3 break-words">
                            Les services sont fournis à titre informatif et de bien-être. Ils ne remplacent pas un avis médical, psychologique ou juridique.
                        </p>
                    </section>

                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">4. Tarifs et paiement</h2>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">
                            Les tarifs sont affichés sur le site et peuvent être modifiés à tout moment. Le paiement s'effectue selon les modalités convenues lors de la prise de rendez-vous.
                        </p>
                    </section>

                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">5. Annulation et remboursement</h2>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">
                            Toute annulation doit être effectuée au moins 48 heures avant la séance. Les annulations effectuées moins de 48 heures avant la séance ne donnent pas droit à remboursement.
                        </p>
                    </section>

                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">6. Responsabilité</h2>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">
                            Tourma-Line ne pourra être tenue responsable des dommages directs ou indirects résultant de l'utilisation du site ou des services proposés. Les informations fournies ont un caractère purement informatif.
                        </p>
                    </section>

                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">7. Propriété intellectuelle</h2>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">
                            L'ensemble des contenus du site (textes, images, graphismes, logos) est la propriété exclusive de Tourma-Line. Toute reproduction sans autorisation est interdite.
                        </p>
                    </section>

                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">8. Modification des conditions</h2>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">
                            Tourma-Line se réserve le droit de modifier les présentes conditions à tout moment. Les modifications seront publiées sur le site.
                        </p>
                    </section>

                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">9. Droit applicable</h2>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">
                            Les présentes conditions sont régies par la loi française. Tout litige sera soumis aux tribunaux compétents.
                        </p>
                    </section>

                    <section className="mb-6 sm:mb-8">
                        <h2 className="text-xl sm:text-2xl font-semibold mb-2 sm:mb-3">10. Contact</h2>
                        <p className="text-gray-700 text-xs sm:text-sm leading-relaxed break-words">
                            Pour toute question concernant ces conditions générales, contactez-nous à : <a href="mailto:line.simon.ls@gmail.com" className="text-brand-purple hover:underline break-all">line.simon.ls@gmail.com</a>
                        </p>
                    </section>
                </div>
            </main>
            <Footer />
            <Credits />
        </div>
    );
};

// --- MAIN APP COMPONENT ---
const App = () => {
  const [activeTab, setActiveTab] = useState('numerology');
  const [currentPage, setCurrentPage] = useState<"home" | "mentions-legales" | "politique-de-confidentialite" | "conditions-generales">(
    "home"
  );

  const handleNavClick: NavClickHandler = (e) => {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute("href")?.substring(1);
    if (targetId) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  // Simple routing based on URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash === "mentions-legales" || hash === "politique-de-confidentialite" || hash === "conditions-generales") {
        setCurrentPage(hash as any);
      } else {
        setCurrentPage("home");
      }
    };

    handleHashChange();
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  if (currentPage === "mentions-legales") {
    return <MentionsLegales onNavClick={handleNavClick} />;
  }

  if (currentPage === "politique-de-confidentialite") {
    return <PolitiqueConfidentialite onNavClick={handleNavClick} />;
  }

  if (currentPage === "conditions-generales") {
    return <ConditionsGenerales onNavClick={handleNavClick} />;
  }

  return (
    <div className="bg-brand-lilas text-brand-dark font-sans">
      <Header onNavClick={handleNavClick} />
      <main>
        <Hero onNavClick={handleNavClick} />
        <Welcome />
        <Benefits />
        <Services activeTab={activeTab} setActiveTab={setActiveTab} />
        <Formules />
        <SessionFlow />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Booking />
      </main>

      {/* SEO Keywords Section - Hidden */}
      <div className="hidden">
        <h2>Services de Numérologie, Cartomancie et Soins Énergétiques</h2>
        <p>
          Tourma-Line propose des services de numérologie, cartomancie, voyance
          et soins énergétiques LAHOCHI à Valmont, Fécamp, Cany-Barville,
          Ourville-en-Caux, Gerponville et environs en Normandie.
        </p>

        <section>
          <h3>Services à Valmont</h3>
          <p>
            Numérologie Valmont, Cartomancie Valmont, Voyance Valmont,
            Consultation Numérologie Valmont, Soin énergétique LAHOCHI Valmont,
            Guidance spirituelle Valmont, Lecture de tarot Valmont
          </p>
        </section>

        <section>
          <h3>Services à Fécamp</h3>
          <p>
            Numérologie Fécamp, Cartomancie Fécamp, Voyance Fécamp, Consultation
            Numérologie Fécamp, Soin énergétique LAHOCHI Fécamp, Guidance
            spirituelle Fécamp, Lecture de tarot Fécamp
          </p>
        </section>

        <section>
          <h3>Services à Cany-Barville</h3>
          <p>
            Numérologie Cany-Barville, Cartomancie Cany-Barville, Voyance
            Cany-Barville, Consultation Numérologie Cany-Barville, Soin
            énergétique LAHOCHI Cany-Barville, Guidance spirituelle
            Cany-Barville, Lecture de tarot Cany-Barville
          </p>
        </section>

        <section>
          <h3>Services à Ourville-en-Caux</h3>
          <p>
            Numérologie Ourville-en-Caux, Cartomancie Ourville-en-Caux, Voyance
            Ourville-en-Caux, Consultation Numérologie Ourville-en-Caux, Soin
            énergétique LAHOCHI Ourville-en-Caux, Guidance spirituelle
            Ourville-en-Caux, Lecture de tarot Ourville-en-Caux
          </p>
        </section>

        <section>
          <h3>Services à Gerponville</h3>
          <p>
            Numérologie Gerponville, Cartomancie Gerponville, Voyance
            Gerponville, Consultation Numérologie Gerponville, Soin énergétique
            LAHOCHI Gerponville, Guidance spirituelle Gerponville, Lecture de
            tarot Gerponville
          </p>
        </section>

        <section>
          <h3>Services à Saint-Riquier-ès-Plains</h3>
          <p>
            Numérologie Saint-Riquier-ès-Plains, Cartomancie
            Saint-Riquier-ès-Plains, Voyance Saint-Riquier-ès-Plains,
            Consultation Numérologie Saint-Riquier-ès-Plains, Soin énergétique
            LAHOCHI Saint-Riquier-ès-Plains, Guidance spirituelle
            Saint-Riquier-ès-Plains, Lecture de tarot Saint-Riquier-ès-Plains
          </p>
        </section>

        <section>
          <h3>Services Généraux</h3>
          <p>
            Numérologie en ligne, Cartomancie en ligne, Voyance à distance,
            Consultation énergétique, Soins énergétiques LAHOCHI, Guidance
            spirituelle, Lecture de tarot, Chakras, Bien-être énergétique,
            Développement personnel, Accompagnement spirituel
          </p>
        </section>
      </div>

      <Footer />
      <Credits />
      <Chatbot />
    </div>
  );
};

export default App;
