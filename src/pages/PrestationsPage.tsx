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

  // Scroll to top on mount
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
        <title>Prestations & Accompagnements — Tourma-Line</title>
        <meta 
          name="description" 
          content="Découvrez l'ensemble des prestations et formules d'accompagnement de Line : séances de numérologie, consultations de cartomancie et soins énergétiques Lahochi, en présentiel en Normandie ou à distance." 
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://www.tourma-line.fr/prestations" />
      </Helmet>

      <Header onNavClick={handleNavClick} />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-brand-dark text-white overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-25"
          style={{ backgroundImage: "url(/hero-tourma-line.jpg)" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/80 via-brand-dark/70 to-brand-dark" />

        <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold leading-tight mb-6">
            Nos Prestations & Accompagnements
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Découvrez comment la numérologie, la cartomancie et les soins énergétiques Lahochi peuvent vous apporter des réponses claires et un rééquilibrage profond.
          </p>
        </div>
      </section>

      {/* Services List and Tab Switcher */}
      <div className="bg-brand-green/20 py-12">
        <Services activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Consultations List (Glassmorphism card details) */}
      <div className="bg-white">
        <Consultations />
      </div>

      {/* Accompaniments / Formules List */}
      <div className="bg-brand-green/20">
        <Formules />
      </div>

      {/* Client Reviews / Testimonials */}
      <Testimonials />

      <Footer />
    </div>
  );
};
