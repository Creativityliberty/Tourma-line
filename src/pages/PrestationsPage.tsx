import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/layout/Header";
import { Footer } from "../components/layout/Footer";
import { Services } from "../components/sections/Services";
import { Consultations } from "../components/sections/Consultations";
import { Formules } from "../components/sections/Formules";
import { Testimonials } from "../components/sections/Testimonials";

export const PrestationsPage = () => {
  const [activeTab, setActiveTab] = useState("numerology");
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const href = e.currentTarget.getAttribute("href");
    if (href && (href.startsWith("#") || href.startsWith("/"))) {
      e.preventDefault();
      if (href.startsWith("#")) {
        const path = href === "#accueil" ? "/" : `/${href.substring(1)}`;
        navigate(path);
      } else {
        navigate(href);
      }
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans">
      <Helmet>
        <title>Prestations & Tarifs | Numérologie, Cartomancie, Lahochi — Tourma-Line</title>
        <meta
          name="description"
          content="Découvrez mes prestations de numérologie, cartomancie et Lahochi, ainsi que les accompagnements pour animaux et l'harmonisation d'objets. Cabinet à Gerponville ou à distance selon la prestation."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tourma-line.fr/prestations" />
      </Helmet>

      <Header onNavClick={handleNavClick} />

      <section className="relative pt-32 pb-20 bg-brand-dark text-white overflow-hidden">
        <img
          src="/hero-tourma-line.jpg"
          alt="Prestations Tourma-Line — numérologie, cartomancie et Lahochi"
          className="absolute inset-0 w-full h-full object-cover opacity-25"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/70 to-brand-dark" />

        <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-6">
            Mes prestations & accompagnements
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Retrouvez ici la numérologie, la cartomancie, le Lahochi et les nouvelles prestations pour votre compagnon ou certains objets personnels. Chaque séance est proposée dans un cadre bienveillant, confidentiel et respectueux de votre rythme.
          </p>
        </div>
      </section>

      <div className="bg-brand-green/20 py-12">
        <Services activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      <div className="bg-white">
        <Consultations />
      </div>

      <div className="bg-brand-green/20">
        <Formules />
      </div>

      <Testimonials />

      <Footer />
    </div>
  );
};
