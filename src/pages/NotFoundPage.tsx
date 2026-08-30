import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { WhatsAppIcon, ArrowLeftIcon } from "../components/ui/icons";
import { ConversionLink } from "../components/ui/ConversionLink";

export const NotFoundPage = () => {
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href && href.startsWith("#")) e.preventDefault();
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Helmet>
        <title>Page introuvable (404) — Tourma-Line</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <Header onNavClick={handleNavClick} />

      <main className="pt-40 pb-32 bg-brand-dark text-white">
        <div className="container mx-auto px-6 max-w-3xl text-center">
          <p className="text-brand-lilas text-sm font-semibold uppercase tracking-widest mb-4">
            Erreur 404
          </p>
          <h1 className="text-4xl sm:text-6xl font-display font-bold mb-6">
            Cette page n'existe pas
          </h1>
          <p className="text-lg text-gray-300 mb-10 leading-relaxed">
            Le lien que vous avez suivi est invalide ou la page a été déplacée.
            Retournez à l'accueil pour découvrir les consultations de
            numérologie, de cartomancie et les soins Lahochi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="bg-brand-purple hover:bg-opacity-80 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105 active:scale-95 inline-block shadow-lg flex items-center justify-center gap-2"
            >
              <ArrowLeftIcon className="w-5 h-5" />
              Retour à l'accueil
            </Link>
            <ConversionLink kind="whatsapp" placement="not-found"
              href="https://wa.me/33649653186"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full text-lg transition-transform transform hover:scale-105 active:scale-95 inline-block flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-5 h-5" />
              Contacter Line
            </ConversionLink>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};
