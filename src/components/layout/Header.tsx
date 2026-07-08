import React, { useState, useEffect } from "react";

type NavClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => void;

export const Header = ({ onNavClick }: { onNavClick: NavClickHandler }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 p-4 text-white transition-all duration-300 ${
            isScrolled 
                ? "bg-brand-dark bg-opacity-90 backdrop-blur-md shadow-lg" 
                : "bg-transparent"
        }`}>
            <div className="container mx-auto flex justify-between items-center px-4">
                <a
                    href="/"
                    onClick={onNavClick}
                    className="flex items-center gap-3 text-xl sm:text-2xl md:text-3xl font-display font-bold flex-shrink-0 group/logo text-white"
                >
                    <div className="w-10 h-10 rounded-full overflow-hidden border border-white/20 bg-white flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover/logo:rotate-[360deg]">
                        <img 
                            src="/logo-tourmaline.png" 
                            alt="Tourma-Line Logo" 
                            className="w-full h-full object-cover"
                            loading="eager"
                        />
                    </div>
                    <span>Tourma-Line</span>
                </a>
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white bg-opacity-10 rounded-full px-6 py-3 backdrop-blur-md border border-white border-opacity-20 text-white">
                    <a
                        href="/"
                        onClick={onNavClick}
                        className="text-sm lg:text-base px-3 py-2 relative group transition-colors hover:text-brand-purple text-white"
                    >
                        Accueil
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-purple group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a
                        href="/prestations"
                        onClick={onNavClick}
                        className="text-sm lg:text-base px-3 py-2 relative group transition-colors hover:text-brand-purple text-white"
                    >
                        Prestations
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-purple group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a
                        href="/formules"
                        onClick={onNavClick}
                        className="text-sm lg:text-base px-3 py-2 relative group transition-colors hover:text-brand-purple text-white"
                    >
                        Formules
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-purple group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a
                        href="/bienfaits"
                        onClick={onNavClick}
                        className="text-sm lg:text-base px-3 py-2 relative group transition-colors hover:text-brand-purple text-white"
                    >
                        Bienfaits
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-purple group-hover:w-full transition-all duration-300"></span>
                    </a>
{/* 
                     <a
                         href="/blog"
                         onClick={onNavClick}
                         className="text-sm lg:text-base px-3 py-2 relative group transition-colors hover:text-brand-purple text-white"
                     >
                         Blog
                         <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-purple group-hover:w-full transition-all duration-300"></span>
                     </a>
                     */}
                    <a
                        href="/rendezvous"
                        onClick={onNavClick}
                        className="bg-brand-purple hover:bg-opacity-80 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 transform active:scale-95 text-sm lg:text-base ml-2"
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
                <nav className="md:hidden bg-white bg-opacity-10 backdrop-blur-md p-4 space-y-2 mt-2 rounded-2xl border border-white border-opacity-20 text-white">
                    <a
                        href="/"
                        onClick={(e) => {
                            onNavClick(e);
                            setMobileMenuOpen(false);
                        }}
                        className="block px-4 py-2 hover:bg-brand-purple hover:bg-opacity-30 rounded transition-colors text-white"
                    >
                        Accueil
                    </a>
                    <a
                        href="/prestations"
                        onClick={(e) => {
                            onNavClick(e);
                            setMobileMenuOpen(false);
                        }}
                        className="block px-4 py-2 hover:bg-brand-purple hover:bg-opacity-30 rounded transition-colors text-white"
                    >
                        Prestations
                    </a>
                    <a
                        href="/formules"
                        onClick={(e) => {
                            onNavClick(e);
                            setMobileMenuOpen(false);
                        }}
                        className="block px-4 py-2 hover:bg-brand-purple hover:bg-opacity-30 rounded transition-colors text-white"
                    >
                        Formules
                    </a>
                    <a
                        href="/bienfaits"
                        onClick={(e) => {
                            onNavClick(e);
                            setMobileMenuOpen(false);
                        }}
                        className="block px-4 py-2 hover:bg-brand-purple hover:bg-opacity-30 rounded transition-colors text-white"
                    >
                        Bienfaits
                    </a>
{/* 
                     <a
                         href="/blog"
                         onClick={(e) => {
                             onNavClick(e);
                             setMobileMenuOpen(false);
                         }}
                         className="block px-4 py-2 hover:bg-brand-purple hover:bg-opacity-30 rounded transition-colors"
                     >
                         Blog
                     </a>
                     */}
                    <a
                        href="/rendezvous"
                        onClick={(e) => {
                            onNavClick(e);
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
