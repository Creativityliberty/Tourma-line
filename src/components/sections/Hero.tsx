import React from "react";

type NavClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => void;

export const Hero = ({ onNavClick }: { onNavClick: NavClickHandler }) => {
    return (
        <section
            id="accueil"
            className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden"
        >
            {/* Background Image - Mobile */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat sm:hidden bg-[url('/hero-mobile-tourmaline.webp')]"
                role="img"
                aria-label="Forêt mystique avec énergie spirituelle lumineuse - Numérologie, cartomancie et soins énergétiques LAHOCHI pour guidance personnalisée"
            ></div>

            {/* Background Image - Desktop */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden sm:block bg-[url('/hero-tourma-line.webp')]"
                role="img"
                aria-label="Forêt mystique avec énergie spirituelle lumineuse - Numérologie, cartomancie et soins énergétiques LAHOCHI pour guidance personnalisée"
            ></div>

            {/* Overlay with gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-black/5 to-black/10 sm:from-black/20 sm:via-black/10 sm:to-black/20"></div>

            {/* Additional overlay for better text readability */}
            <div className="absolute inset-0 bg-black/5 sm:bg-black/10"></div>

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
                    href="https://calendly.com/tourma-line/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-brand-purple hover:bg-opacity-80 text-white font-bold py-3 px-8 rounded-full text-lg transition-transform transform hover:scale-105 active:scale-95 animate-pulse inline-block shadow-lg mt-8 sm:mt-0"
                >
                    Découvrir mes accompagnements
                </a>
            </div>
        </section>
    );
};
