import React, { useState } from "react";

type NavClickHandler = (e: React.MouseEvent<HTMLAnchorElement>) => void;

export const Header = ({ onNavClick }: { onNavClick: NavClickHandler }) => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <header className="bg-brand-dark bg-opacity-50 text-white p-4 fixed top-0 left-0 right-0 z-50 backdrop-blur-sm transition-all duration-300">
            <div className="container mx-auto flex justify-between items-center px-4">
                <a
                    href="/"
                    onClick={onNavClick}
                    className="text-xl sm:text-2xl md:text-3xl font-display font-bold flex-shrink-0"
                >
                    TOURMA-LINE
                </a>
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-1 lg:space-x-2 bg-white bg-opacity-10 rounded-full px-6 py-3 backdrop-blur-md border border-white border-opacity-20">
                    <a
                        href="/"
                        onClick={onNavClick}
                        className="text-sm lg:text-base px-3 py-2 relative group transition-colors hover:text-brand-purple"
                    >
                        Accueil
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-purple group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a
                        href="/services"
                        onClick={onNavClick}
                        className="text-sm lg:text-base px-3 py-2 relative group transition-colors hover:text-brand-purple"
                    >
                        Services
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-purple group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a
                        href="/formules"
                        onClick={onNavClick}
                        className="text-sm lg:text-base px-3 py-2 relative group transition-colors hover:text-brand-purple"
                    >
                        Formules
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-purple group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a
                        href="/bienfaits"
                        onClick={onNavClick}
                        className="text-sm lg:text-base px-3 py-2 relative group transition-colors hover:text-brand-purple"
                    >
                        Bienfaits
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-purple group-hover:w-full transition-all duration-300"></span>
                    </a>
                    <a
                        href="/tarifs"
                        onClick={onNavClick}
                        className="text-sm lg:text-base px-3 py-2 relative group transition-colors hover:text-brand-purple"
                    >
                        Tarifs
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-brand-purple group-hover:w-full transition-all duration-300"></span>
                    </a>
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
                <nav className="md:hidden bg-white bg-opacity-10 backdrop-blur-md p-4 space-y-2 mt-2 rounded-2xl border border-white border-opacity-20">
                    <a
                        href="/"
                        onClick={(e) => {
                            onNavClick(e);
                            setMobileMenuOpen(false);
                        }}
                        className="block px-4 py-2 hover:bg-brand-purple hover:bg-opacity-30 rounded transition-colors"
                    >
                        Accueil
                    </a>
                    <a
                        href="/services"
                        onClick={(e) => {
                            onNavClick(e);
                            setMobileMenuOpen(false);
                        }}
                        className="block px-4 py-2 hover:bg-brand-purple hover:bg-opacity-30 rounded transition-colors"
                    >
                        Services
                    </a>
                    <a
                        href="/formules"
                        onClick={(e) => {
                            onNavClick(e);
                            setMobileMenuOpen(false);
                        }}
                        className="block px-4 py-2 hover:bg-brand-purple hover:bg-opacity-30 rounded transition-colors"
                    >
                        Formules
                    </a>
                    <a
                        href="/bienfaits"
                        onClick={(e) => {
                            onNavClick(e);
                            setMobileMenuOpen(false);
                        }}
                        className="block px-4 py-2 hover:bg-brand-purple hover:bg-opacity-30 rounded transition-colors"
                    >
                        Bienfaits
                    </a>
                    <a
                        href="/tarifs"
                        onClick={(e) => {
                            onNavClick(e);
                            setMobileMenuOpen(false);
                        }}
                        className="block px-4 py-2 hover:bg-brand-purple hover:bg-opacity-30 rounded transition-colors"
                    >
                        Tarifs
                    </a>
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
